let e=document.createElement("style");e.innerHTML=".basic-drawer .ant-drawer-wrapper-body{overflow:hidden}.basic-drawer .ant-drawer-close:hover{color:#ed6f6f}.basic-drawer .ant-drawer-body{height:calc(100% - 40px);padding:0;background-color:#f0f2f5}.basic-drawer .ant-drawer-body .scrollbar__wrap{padding:16px}.basic-drawer__detail{position:absolute}.basic-drawer__detail-header{height:100%}.basic-drawer__detail .ant-drawer-header{width:100%;height:40px;padding:0;border-top:1px solid #f0f0f0;box-sizing:border-box}.basic-drawer__detail .ant-drawer-title{height:100%}.basic-drawer__detail .ant-drawer-close{height:40px;line-height:40px}.basic-drawer__detail .scrollbar__wrap{padding:0}.basic-drawer__footer{position:absolute;bottom:0;width:100%;height:60px;padding:0 26px;line-height:60px;text-align:right;background:#fff;border-top:1px solid #f0f0f0}",document.head.appendChild(e);import{u as t,q as a,a as o,r as i,s as r,d4 as l,f as s,t as n,c$ as d,ae as c,O as p,F as b,du as u,R as f,ad as w,aP as g,cH as h,B as x,bD as m,bC as _}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import{D as v}from"./index.2a71576a.js";import{L as k}from"./LeftOutlined.acd998d4.js";import{b as y}from"./index.04a7b444.js";import{g as C}from"./tsxHelper.907e86d2.js";const{t:B}=t(),T={confirmLoading:a.bool,showCancelBtn:a.bool.def(!0),cancelButtonProps:Object,cancelText:a.string.def(B("component.drawer.cancelText")),showOkBtn:a.bool.def(!0),okButtonProps:a.any,okText:a.string.def(B("component.drawer.okText")),okType:a.string.def("primary"),showFooter:a.bool,footerHeight:{type:[String,Number],default:60}},j={isDetail:a.bool,title:a.string.def(""),showDetailBack:a.bool.def(!0),visible:a.bool,loading:a.bool,maskClosable:a.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:a.bool,destroyOnClose:a.bool,...T};var F=o({inheritAttrs:!1,props:j,emits:["visible-change","ok","close","register"],setup(e,{slots:a,emit:o,attrs:B}){const T=i(null),j=i(!1),F=i(null),{t:O}=t(),D=r((()=>l(n(e),s(F)))),P=r((()=>{const e={placement:"right",...B,...s(D),visible:s(j)};e.title=void 0;const{isDetail:t,width:a,wrapClassName:o,getContainer:i}=e;if(t){a||(e.width="100%");const t="basic-drawer__detail";e.wrapClassName=o?`${o} ${t}`:t,i||(e.getContainer=".layout-content")}return e})),$=r((()=>({...B,...s(P)}))),H=r((()=>{const{footerHeight:e,showFooter:t}=s(P);return t&&e?d(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),L=r((()=>({position:"relative",height:`calc(100% - ${s(H)})`,overflow:"auto",padding:"16px",paddingBottom:"30px"}))),z=r((()=>{var e;return!!(null==(e=s(P))?void 0:e.loading)}));async function N(e){const{closeFunc:t}=s(P);if(o("close",e),t&&h(t)){const e=await t();j.value=!e}else j.value=!1}c((()=>{j.value=e.visible})),p((()=>j.value),(e=>{b((()=>{o("visible-change",e)}))}),{immediate:!1});const R={setDrawerProps:function(e){F.value=l(s(F)||{},e),Reflect.has(e,"visible")&&(j.value=!!e.visible)}};return u((e=>{o("register",R,e.uid)})),()=>f(v,{class:"basic-drawer",onClose:N,...s($)},{title:()=>function(){if(null==a?void 0:a.title)return C(a,"title");const{title:t}=s(D);return e.isDetail?f(_,{type:"flex",align:"middle",class:"basic-drawer__detail-header"},(()=>f(w,null,e.showDetailBack&&f(x,{size:"small",type:"link",onClick:N},(()=>f(k,null))),t&&f(m,{style:"flex:1",class:["basic-drawer__detail-title","ellipsis","px-2"]},(()=>t)),C(a,"titleToolbar")))):f(y,null,(()=>t||C(a,"title")))}(),default:()=>f(w,null,f("div",{ref:T,style:s(L)},f(g,{absolute:!0,tip:O("component.drawer.loadingText"),loading:s(z)}),C(a)),function(){if(null==a?void 0:a.footer)return C(a,"footer");const{showCancelBtn:e,cancelButtonProps:t,cancelText:i,showOkBtn:r,okType:l,okText:n,okButtonProps:d,confirmLoading:c,showFooter:p}=s(P);return p?f("div",{class:"basic-drawer__footer"},C(a,"insertFooter"),e&&f(x,{...t,onClick:N,class:"mr-2"},(()=>i)),C(a,"centerFooter"),r&&f(x,{type:l,onClick:()=>{o("ok")},...d,loading:c},(()=>n)),C(a,"appendFooter")):null}())})}});export default F;