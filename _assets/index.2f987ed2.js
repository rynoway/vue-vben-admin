import{q as e,a as t,r as s,s as l,f as a,R as n,cH as i,d4 as o,cM as r}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import{D as d}from"./index.ec69ce30.js";import{C as c}from"./index.04660b25.js";import{g as p}from"./tsxHelper.907e86d2.js";var u={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var m=t({name:"Description",props:u,emits:["register"],setup(e,{attrs:t,slots:u,emit:m}){const f=s(null),x=l((()=>({...e,...a(f)}))),b=l((()=>({...a(x),title:void 0}))),h=l((()=>!!a(x).title)),v=l((()=>({canExpand:!1,...a(b).collapseOptions}))),j=l((()=>({...t,...a(b)})));function y({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const l={...s,minWidth:`${t}px `};return n("div",{style:l},e)}const g=()=>n(d,{class:"description",...a(j)},(()=>function(){const{schema:e}=a(b);return a(e).map((e=>{const{render:t,field:s,span:l,show:o,contentMinWidth:r}=e,{data:c}=a(b);if(o&&i(o)&&!o(c))return null;const p=()=>i(t)?t(null==c?void 0:c[s],c):a(c)&&a(c)[s],u=r;return n(d.Item,{label:y(e),key:s,span:l},(()=>r?n("div",{style:{minWidth:`${u}px`}},p()):p()))}))}()));return m("register",{setDescProps:function(e){const t=o(a(f)||{},e);f.value=r(t)}}),()=>a(h)?(()=>{const t=e.useCollapse?g():n("div",null,g());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:l}=a(v),{title:i}=a(x);return n(c,{title:i,canExpan:s,helpMessage:l},{default:()=>t,action:()=>p(u,"action")})})():g()}});export default m;