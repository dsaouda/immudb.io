(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{345:function(t,e,n){},361:function(t,e,n){"use strict";n(345)},386:function(t,e,n){"use strict";n.r(e);var a=n(24),l={name:"CnButton",props:{variant:{type:String,default:"secondary"},href:{type:String,default:null},to:{type:Object,default:null},size:{type:String,default:"lg"},target:{type:String,default:"_self"},rel:{type:String,default:null},inline:{type:Boolean,default:!1},bottomOffset:{type:String,default:null}},computed:{dynamicClass:function(){var t;return t={"cn-button":!0},Object(a.a)(t,"cn-button_"+this.variant,!0),Object(a.a)(t,"cn-button_inline",this.inline),t},buttonStyle:function(){var t=null===this.bottomOffset?{}:{"margin-bottom":"".concat(this.bottomOffset,"px")};return Object.assign({},t)}}},r=(n(361),n(11)),u=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._b({class:t.dynamicClass,style:t.buttonStyle},"button",t.$attrs,!1),[t.to?n("router-link",{staticClass:"table_link",attrs:{to:t.to}},[t._t("default")],2):t.href?n("a",{staticClass:"no-hover",attrs:{href:t.href,rel:t.rel,target:t.target}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"49d61aa5",null);e.default=u.exports}}]);