(window.webpackJsonp=window.webpackJsonp||[]).push([[3,14,15],{456:function(t,e,n){"use strict";n(266);var i=n(457),a="https://codenotary.com",s="".concat(a,"/products"),r={footer:{tables:[{title:"PRODUCTS",links:[{label:"CNIL (Self-Hosted)",href:"".concat(s,"/immutable-ledger")},{label:"CNIL (Cloud)",href:"".concat(s,"/ci-cd")},{label:"CNIL Metrics & Logs",href:"".concat(s,"/immutable-ledger-metrics-and-logs")}]},{title:"RESOURCES",links:[{label:"Videos",href:"https://www.youtube.com/channel/UCYDMxKTM74Acj8LerGrjUuw/videos"},{label:"Blogs",href:"".concat(a,"/blog")},{label:"immudb",href:"".concat(a,"/technologies/immudb")}]},{title:"COMPANY",links:[{label:"About Us",href:"".concat(a,"/about")},{label:"Join Us",href:"".concat(a,"/join")},{label:"Partners",href:"".concat(a,"/partners")},{label:"Contact",href:"".concat(a,"/contact")}]}]}},o={components:{NavLink:i.a},data:function(){return{year:(new Date).getFullYear(),content:r}}},l=(n(501),n(18)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"flex row main-section"},[n("div",{staticClass:"flex column brand"},[n("img",{staticClass:"logo",attrs:{src:"/logos/logo_white_codenotary.svg",alt:"Codenotary"}}),t._v(" "),n("p",{staticClass:"brand-description cn-text-xs"},[t._v("\n          Immutable notarization for all your sensitive data. On-premise or in the cloud, easy to use tamperproof storage with cryptographic verification, processing millions of transactions a second.\n        ")]),t._v(" "),n("ul",{staticClass:"social-links list cn-text-xs"},[n("li",[n("a",{attrs:{href:"https://github.com/codenotary"}},[n("font-awesome-icon",{attrs:{icon:["fab","github-square"]}})],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/Codenotary"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.facebook.com/Codenotary-Inc-106257094666687"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.linkedin.com/company/codenotary/"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])]),t._v(" "),t._l(t.content.footer.tables,(function(e,i){return n("div",{key:i,staticClass:"flex column table"},[n("p",{staticClass:"table_title cn-font-weight-bold"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),t._l(e.links,(function(e,i){return n("div",{key:i},[null!==e.href?n("a",{staticClass:"table_link",attrs:{href:e.href,target:"_blank",rel:"noopener nofollow noreferrer"}},[t._v("\n            "+t._s(e.label)+"\n          ")]):n("router-link",{staticClass:"table_link",attrs:{to:e.internalLink}},[t._v("\n            "+t._s(e.label)+"\n          ")])],1)}))],2)}))],2),t._v(" "),n("div",{staticClass:"flex row align-center justify-between copyright"},[n("span",{},[t._v("Copyright © "+t._s(t.year)+" Codenotary, Inc. All rights reserved.")]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-center tos"},[e("a",{attrs:{href:"https://www.codenotary.com/terms-of-service/"}},[this._v("\n                Terms of Service\n              ")]),this._v(" "),e("a",{attrs:{href:"https://www.codenotary.com/privacy-statement"}},[this._v("\n                Privacy statement\n              ")])])}],!1,null,null,null);e.a=c.exports},457:function(t,e,n){"use strict";n(526),n(162),n(6),n(163);var i=n(85),a={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.i)(this.link)||Object(i.j)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.h)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.h)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(18),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.a=r.exports},458:function(t,e,n){},459:function(t,e,n){},464:function(t,e,n){},465:function(t,e,n){},466:function(t,e,n){},467:function(t,e,n){},469:function(t,e,n){},470:function(t,e,n){},471:function(t,e,n){},472:function(t,e,n){},473:function(t,e,n){},474:function(t,e,n){"use strict";n(458)},475:function(t,e,n){},476:function(t,e,n){},477:function(t,e,n){},478:function(t,e,n){"use strict";n(459)},479:function(t,e,n){},480:function(t,e,n){},481:function(t,e,n){},482:function(t,e,n){},486:function(t,e,n){"use strict";n(537);var i=n(492),a=n(498),s={name:"SidebarButton",props:{open:{type:Boolean}}},r=(n(511),n(18)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("img",{staticClass:"icon",attrs:{src:t.open?"/icons/close.svg":"/icons/hamburger.svg"}})])}),[],!1,null,null,null).exports,l=n(490),c=(n(543),n(86),n(117),n(116),n(162),n(6),n(267),n(32),n(266),n(468),n(85)),u={name:"VersionsDropdown",computed:{currentVersion:function(){return Object(c.d)(this.$route)||Object(c.c)()}},data:function(){return{versions:c.o.slice().reverse(),open:!1}},methods:{getPageLink:function(t){return"/".concat(t)},getVersionText:function(t){var e=["master"].includes(t)?"":"v";return"".concat(e).concat(t)},toggleDropdown:function(){var t,e;0!==(null===(t=arguments[0])||void 0===t?void 0:t.button)||!arguments[1]&&null!==(e=arguments[0])&&void 0!==e&&e.path.some((function(t){var e;return null===(e=t.className)||void 0===e?void 0:e.toString().includes("skip-click-event")}))||(this.open=!this.open,this.open?window.document.addEventListener("mouseup",this.toggleDropdown):window.document.removeEventListener("mouseup",this.toggleDropdown))}},beforeDestroy:function(){window.document.removeEventListener("mouseup",this.toggleDropdown)}},p=(n(515),Object(r.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"version-wrapper",class:{open:t.open}},[n("div",{staticClass:"version-button"},[n("CnButton",{staticClass:"skip-click-event",staticStyle:{"text-transform":"capitalize"},attrs:{variant:"secondary"},nativeOn:{click:function(e){return t.toggleDropdown(e,!0)}}},[t._v("\n        "+t._s(t.getVersionText(t.currentVersion))+"\n        "),n("img",{attrs:{src:"/icons/dropdown_triangle.svg",height:"12",width:"15"}})]),t._v(" "),n("div",{staticClass:"version-dropdown"},t._l(t.versions,(function(e){return n("div",{key:e,staticClass:"version-dropdown-item",attrs:{disabled:t.currentVersion===e}},[n("router-link",{attrs:{to:t.getPageLink(e),disabled:t.currentVersion===e}},[t._v("\n            "+t._s(t.getVersionText(e))+"\n          ")])],1)})),0)],1)])}),[],!1,null,"252e82ca",null).exports);function h(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var d={name:"Navbar",components:{CnButton:n(499).default,SidebarButton:o,NavLinks:l.a,SearchBox:a.a,AlgoliaSearchBox:i.a,VersionsDropdown:p},props:{isSidebarOpen:{type:Boolean}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(h(this.$el,"paddingLeft"))+parseInt(h(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},f=(n(516),Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{attrs:{open:t.isSidebarOpen},on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links cn-text-sm",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"})],1),t._v(" "),n("div",{staticClass:"actions flex row"},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{staticClass:"can-hide",attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox",{staticClass:"can-hide"}):t._e(),t._v(" "),n("VersionsDropdown")],1)],1)}),[],!1,null,null,null));e.a=f.exports},487:function(t,e,n){"use strict";n(22),n(115),n(43);var i=n(494),a=n.n(i),s=n(85),r={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=a()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,r=e.docsBranch,o=void 0===r?"master":r,l=e.docsRepo,c=void 0===l?n:l;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(s.k.test(e)?e:t).replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(s.k.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+a}}},o=(n(517),n(18)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,c=n(544),u=n.n(c),p={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return d(h.PREV,this)},next:function(){return d(h.NEXT,this)}}};var h={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function d(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,o=e.$site,l=e.sidebarItems,c=t.resolveLink,p=t.getThemeLinkConfig,h=t.getPageLinkConfig,d=p(n),f=h(i),m=a()(f)?d:f;return!1===m?void 0:u()(m)?Object(s.m)(o.pages,m,r.path):c(i,l)}function f(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var m=p,v=(n(518),Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev flex row cn-text-xs align-center"},[n("img",{staticStyle:{"margin-right":"6px"},attrs:{src:"/icons/back.svg",alt:"next-arrow",width:"20",height:"20"}}),t._v(" "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next flex row cn-text-xs align-center"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v(" "),n("img",{staticStyle:{"margin-left":"6px"},attrs:{src:"/icons/next.svg",alt:"next-arrow",width:"20",height:"20"}})],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),g={components:{CnContainer:n(500).default,PageEdit:l,PageNav:v},props:["sidebarItems"]},b=(n(519),Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"content-wrapper"},[n("cn-container",[n("Content",{staticClass:"page-content"})],1)],1),t._v(" "),n("ClientOnly",[n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=b.exports},488:function(t,e,n){"use strict";n.r(e);n(162),n(6);var i=n(85),a={name:"SidebarGroup",components:{DropdownTransition:n(493).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(488).default},methods:{isActive:i.g}},s=(n(520),n(18)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(545),n(22),n(115),n(63);function o(t,e,n,i,a){return t("RouterLink",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||!e.length||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.g)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level),l(t,e.children,n,a,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(i.g)(s,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(i.g)(s,p.basePath+"#"+t.slug)})):d,m="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),v=[a.frontmatter.sidebarDepth,h,c.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||r.displayAllHeaders;return"auto"===p.type?[m,l(t,p.children,p.basePath,s,v)]:(f||g)&&p.headers&&!i.f.test(p.path)?[m,l(t,Object(i.e)(p.headers),p.path,s,v)]:m}};n(521);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.g)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.g)(this.$route,t.regularPath)}}},h=Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},489:function(t,e,n){"use strict";n(117),n(267),n(163);var i=n(457),a=n(456),s=n(527),r=n(88),o=(n(164),n(272),"https://api.codenotary.io/immudb-beta"),l=n(502),c=n.n(l),u={components:{VueRecaptcha:n(536).a},props:{value:{type:Boolean,default:!1}},data:function(){return{verified:!1,sending:!1,error:!1,sent:!1,sitekey:"6LeHGL4ZAAAAALlN7PGMzqnNBM6GVwhlJ-ZeiCV8",form:this.$inkline.form({contactEmail:{validators:[{rule:"required"},{rule:"email"}]}})}},methods:{onVisibilityChange:function(t){this.$emit("input",t)},onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.verified){e.next=2;break}return e.abrupt("return");case 2:return t.sending=!0,n=t.form.contactEmail.value,i={email:n},e.prev=5,e.next=8,c.a.post("".concat(o,"/research-paper"),i,{withCredentials:!0});case 8:t.sent=!0,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),t.error=!0;case 14:return e.prev=14,t.sending=!1,t.verified=!1,setTimeout((function(){t.sent=!1,t.error=!1,t.$emit("input",!1)}),3e3),e.finish(14);case 19:case"end":return e.stop()}}),e,null,[[5,11,14,19]])})))()},onVerify:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t&&(e.verified=!0);case 1:case"end":return n.stop()}}),n)})))()}}},p=(n(504),n(18)),h={name:"Home",components:{ResearchPaper:Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-modal",{staticClass:"subscribe-modal",attrs:{size:"lg",value:t.value},on:{input:t.onVisibilityChange}},[n("template",{slot:"header"},[t._v("\n        Download Research Paper\n    ")]),t._v(" "),t.sent?n("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"success"}},[n("template",{slot:"icon"},[n("font-awesome-icon",{attrs:{icon:"check-circle"}})],1),t._v(" "),n("p",[t._v("Email sent successfully!")])],2):t._e(),t._v(" "),t.error?n("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"danger"}},[n("template",{slot:"icon"},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1),t._v(" "),n("p",[t._v("Something went wrong. Please try again later!")])],2):t._e(),t._v(" "),n("p",{staticClass:"_margin-top-0"},[t._v("\n        We'll send you the research paper via email.\n    ")]),t._v(" "),n("i-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("i-form-group",[n("i-input",{attrs:{schema:t.form.contactEmail,placeholder:"Enter your email"}})],1),t._v(" "),n("i-form-group",[n("vue-recaptcha",{ref:"recaptcha",attrs:{loadRecaptchaScript:!0,sitekey:t.sitekey},on:{verify:t.onVerify}})],1),t._v(" "),n("i-form-group",[n("i-button",{attrs:{type:"submit",variant:"primary",disabled:!t.verified||t.sending,block:""}},[t._v("\n                "+t._s(t.sending?"Sending..":"Send me the document")+"\n            ")])],1)],1)],2)}),[],!1,null,null,null).exports,NavLink:i.a,GithubButton:s.a,Footer:a.a},data:function(){return{researchPaperModalVisible:!1,beta:Object.keys(this.$route.query).includes("beta")}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){Object.keys(this.$route.query).includes("research-paper")&&(this.researchPaperModalVisible=!0)}},d=(n(505),Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"homepage"}},[n("research-paper",{model:{value:t.researchPaperModalVisible,callback:function(e){t.researchPaperModalVisible=e},expression:"researchPaperModalVisible"}}),t._v(" "),n("header",{staticClass:"hero"},[n("div",{staticClass:"hero-content"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n                "+t._s(t.data.heroText||t.$title||"Hello")+"\n            ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n                "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n            ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("i-button",{attrs:{size:"lg",variant:"primary",to:t.data.actionLink}},[t._v(t._s(t.data.actionText))])],1):t._e(),t._v(" "),n("p",{staticClass:"_margin-top-3"},[n("i-button",{attrs:{id:"research-paper-button",link:"",variant:"primary"},on:{click:function(e){t.researchPaperModalVisible=!0}}},[n("i-badge",{staticClass:"_margin-right-1-2",attrs:{size:"sm",variant:"success"}},[t._v("New")]),t._v(" "),n("span",[t._v("Download Research Paper")])],1)],1),t._v(" "),n("div",{attrs:{id:"github-button"}},[n("github-button",{attrs:{href:"https://github.com/codenotary/immudb","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star codenotary/immudb on GitHub"}},[t._v("\n                    Star\n                ")])],1)])]),t._v(" "),n("Content"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null));e.a=d.exports},490:function(t,e,n){"use strict";var i=n(82),a=(n(163),n(63),n(22),n(43),n(162),n(6),n(116),n(115),n(268),n(508),n(509),n(510),n(468),n(457)),s=n(493),r=n(271),o=n.n(r),l={name:"DropdownLink",components:{NavLink:a.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t}}},c=(n(513),n(18)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,p=n(85),h={name:"NavLinks",components:{NavLink:a.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var r,o=e[i],l=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,i),a.some((function(t){return t.path===r}))||(r=i)),{text:l,link:r}}))};return[].concat(Object(i.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(p.l)(t),{items:(t.items||[]).map(p.l)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},d=(n(514),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=d.exports},491:function(t,e,n){"use strict";var i=n(488),a=n(490),s=n(492),r=n(498),o={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:a.a,SearchBox:r.a,AlgoliaSearchBox:s.a},props:["items"],computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},l=(n(522),n(18)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{staticClass:"search-box",attrs:{inputId:"sidebarSearchbox",options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox",{staticClass:"search-box"}):t._e(),t._v(" "),n("div",{staticClass:"scrollable-area"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}})],2),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=c.exports},492:function(t,e,n){"use strict";var i=n(83),a=(n(6),n(23),n(29),n(116),n(538),n(506),n(22),n(43),{name:"AlgoliaSearchBox",props:{options:{type:Object},inputId:{type:String,default:null}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var a=this;Promise.all([Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,614,7)),Promise.all([n.e(0),n.e(5)]).then(n.t.bind(null,615,7))]).then((function(n){var s=Object(i.a)(n,1)[0];s=s.default;var r=t.algoliaOptions,o=void 0===r?{}:r;s(Object.assign({},t,{inputSelector:"#"+(a.inputId?a.inputId:"algolia-search-input"),algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(o.facetFilters||[])},o),handleSelected:function(t,e,n){var i=new URL(n.url),s=i.pathname,r=i.hash,o=s.replace(a.$site.base,"/");a.$router.push("".concat(o).concat(r))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="'.concat(this.inputId?this.inputId:"algolia-search-input",'" class="search-query">'),this.initialize(t,e)}}}),s=(n(507),n(18)),r=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:this.inputId?this.inputId:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.a=r.exports},493:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(512),n(18)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},499:function(t,e,n){"use strict";n.r(e);var i=n(38),a={name:"CnButton",props:{variant:{type:String,default:"secondary"},href:{type:String,default:null},to:{type:Object,default:null},size:{type:String,default:"lg"},target:{type:String,default:"_self"},rel:{type:String,default:null},inline:{type:Boolean,default:!1},bottomOffset:{type:String,default:null}},computed:{dynamicClass:function(){var t;return t={"cn-button":!0},Object(i.a)(t,"cn-button_"+this.variant,!0),Object(i.a)(t,"cn-button_inline",this.inline),t},buttonStyle:function(){var t=null===this.bottomOffset?{}:{"margin-bottom":"".concat(this.bottomOffset,"px")};return Object.assign({},t)}}},s=(n(474),n(18)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({class:t.dynamicClass,style:t.buttonStyle},"button",t.$attrs,!1),[t.to?n("router-link",{staticClass:"table_link",attrs:{to:t.to}},[t._t("default")],2):t.href?n("a",{staticClass:"no-hover",attrs:{href:t.href,rel:t.rel,target:t.target}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"49d61aa5",null);e.default=r.exports},500:function(t,e,n){"use strict";n.r(e);var i={name:"CnContainer",props:{variant:{type:String,default:"none"}}},a=(n(478),n(18)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container",class:this.variant,attrs:{name:"container"}},[this._t("default")],2)}),[],!1,null,"5b38918b",null);e.default=s.exports},501:function(t,e,n){"use strict";n(464)},504:function(t,e,n){"use strict";n(465)},505:function(t,e,n){"use strict";n(466)},507:function(t,e,n){"use strict";n(467)},511:function(t,e,n){"use strict";n(469)},512:function(t,e,n){"use strict";n(470)},513:function(t,e,n){"use strict";n(471)},514:function(t,e,n){"use strict";n(472)},515:function(t,e,n){"use strict";n(473)},516:function(t,e,n){"use strict";n(475)},517:function(t,e,n){"use strict";n(476)},518:function(t,e,n){"use strict";n(477)},519:function(t,e,n){"use strict";n(479)},520:function(t,e,n){"use strict";n(480)},521:function(t,e,n){"use strict";n(481)},522:function(t,e,n){"use strict";n(482)}}]);