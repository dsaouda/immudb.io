# immudb

## Contents
 - [Latest binaries](#latest-binaries)
 - [Build](#build)
 - [Docker](#docker)
 - [Run immudb](#run-immudb)
 - [Configuration](#configuration)
 - [immuadmin](#immuadmin)
 - [immudb service](#immudb-service)
 - [Authentication](#authentication)
 - [Backup and Restore](#backup-and-restore)
 - [Clients](#clients)
 - [Auditors](#auditors)
 - [Architecture](#architecture)
 - [Consistency Checker](#consistency-checker)

## Latest binaries

[Get the latest builds](https://github.com/codenotary/immudb/releases/latest)

If you run macOS you can also use Homebrew:

`brew install immudb`

## Build

clone the immudb repository locally

'git clone https://github.com/codenotary/immudb.git'

### Linux

```bash
GOOS=linux GOARCH=amd64 make immudb-static
```

### MacOS

```bash
GOOS=darwin GOARCH=amd64 make immudb-static
```

### Windows

```bash
GOOS=windows GOARCH=amd64 make immudb-static
```

## Docker

### build your own Docker container image
```bash
docker build -t myown/immudb:latest -f Dockerfile .
```

### run immugw in a container
Make sure to point to the immudb system using the environment variable IMMUGW_IMMUDB-ADDRESS

```bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immugw:latest
```

or listen on all interfaces

```bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb -e IMMUDB_ADDRESS="0.0.0.0" codenotary/immudb
```

## Run immudb

```bash
# run immudb in the foreground
./immudb

# run immudb in the background
./immudb -d
```

## Configuration

work in progress

## immuadmin

immuadmin can be used to install and manage the immudb service for Windows and Linux

### Linux

```bash
GOOS=linux GOARCH=amd64 make immuadmin-static 
```

### Windows (by component)

```bash
GOOS=windows GOARCH=amd64 make immuadmin-static
```

## immudb service

Please make sure to build or download the immudb and immuadmin component and save them in the same work directory when installing the service.

```bash
# install immudb service
./immuadmin service immudb install

# check current immudb service status
./immuadmin service immudb status

# stop immudb service
./immuadmin service immudb stop

# start immudb service
./immuadmin service immudb start
```

The linux service is using the following defaults:

| File or configuration   | location           |
| ----------------------- | ------------------ |
| all configuration files | /etc/immudb        |
| all data files          | /var/lib/immudb    |
| pid file                | /var/lib/immudb/immudb.pid |
| log files               | /var/log/immudb    |

## Authentication

immudb supports multiple user accounts that can have admin, read-only or read-write permission.
All permissions are stored in a different database and each gRPC call has an associated minimum permissions.

To enable authentication you need to change the configuration file `/etc/immudb/immudb.toml`

Example:
```toml
dir = "/var/lib/immudb"
network = "tcp"
address = "0.0.0.0"
port = 3322
dbname = "data"
pidfile = "/var/lib/immudb/immudb.pid"
logfile = "/var/log/immudb/immudb.log"
mtls = false
detached = false
auth = true
pkey = "/etc/immudb/mtls/3_application/private/localhost.key.pem"
certificate = "/etc/immudb/mtls/3_application/certs/localhost.cert.pem"
clientcas = "/etc/immudb/mtls/2_intermediate/certs/ca-chain.cert.pem"
```

The important lines to change are `auth = true` and `address = "0.0.0.0"` to enable authentication and listening on all interfaces.

Then restart/start immudb.

### Receive the admin credentials

You need to run `immuadmin` locally on the same system as immudb (for security reasons) and connect to immudb:

`immuadmin login immu`

You^ll receive the following message:

```bash
Using config file: /etc/immudb/immudb.toml
===============
This looks like the very first admin login attempt, hence the following credentials have been generated:
---
username: immu
password: yourpassword
---
IMPORTANT: This is the only time they are shown, so make sure you remember them.
NOTE: You have not been automatically logged in. To login please run the command 'immuadmin login immu' with the above-mentioned password. You can change your password at any time with one of your liking using the command 'immuadmin user change-password immu'
===============
```

**make sure to note that the password for the immu user as its your master password**

### User management

To manage user, run `immuadmin user` after you logged in `immuadmin login immu`

```bash
Please specify a user action.
Usage: immuadmin user list|create|change-password|set-permission|deactivate [username] [read|readwrite]
Help : immuadmin user -h
```

#### List user 

To get a list of all existing user including their permissions, run `immuadmin user list`

#### Add user 

Let's create a read-only user, called ro `immuadmin user create <username> read`

```bash
immuadmin user create ro read
NOTE: password must have between 8 and 32 letters, digits and special characters of which at least 1 uppercase letter, 1 digit and 1 special character.
Choose a password for ro:
Confirm password:
User ro created
```

and a read-write user, called rw `immuadmin user create rw readwrite`

#### Change user permission

To change the ro user permission from read-only to read-write, run `immuadmin user set-permission ro readwrite`
Check the change, using `immuadmin user list`

```bash
immuadmin user list
Using config file: /etc/immudb/immudb.toml
3 user(s):
-  --------  ----    -----------
#  Username  Role    Permissions
-  --------  ----    -----------
1  immu      admin   admin
2  ro        client  readwrite
3  rw        client  readwrite
-  --------  ----    -----------
```

#### Deactivate user 

To deactivate an existing user, run `immuadmin user deactivate ro`



## Backup and Restore

work in progress

## Clients

work in progress

## Auditors

work in progress

## Architecture

work in progress

## Consistency checker

### How do you run it?
It is part of immudb, enabled by default and runs as a thread of immudb.
The routine can be disabled as follows:
```bash
./immudb --consistency-check=false
``` 

### What does it check?
Consistency checker runs in a loop and continuously checks if the elements stored inside the immudb Merkle-tree are also physically stored correctly on the disk (the digest of the disk elements is the same digest stored in the related Merkle-tree leaf)

### How does it run its check?

**Steps:**
1. reading the last root and last index stored in immudb
2. generate a range between 0 and the length of the Merkle-tree level 0 (total number of elements stored)
3. shuffles the range to get a random scan list (to be unpredictable)
4. check if every element is correctly inserted in the Merkle-tree and if the Merkle-tree leaves correctly represent the elements stored on hard disk
5. after completing the loop, the process sleeps ten seconds and restarts from scratch with a new root and index
6. in case an element does not pass the check correctly, immudb is immediately stopped and prints out a log message

In order to produce a corrupted entry that is only on disk and not in the Merkle-tree, stop the immudb process and use the [nimmu](https://github.com/codenotary/immudb/blob/master/tools/nimmu/nimmu.go) command:
```bash
go build tools/nimmu/nimmu.go 
./nimmu rawset key1 tamper
```
Then restart immudb and should see the consistency check printing an error.
