let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as a,f as l,c$ as r,d0 as t,i as e,o as c,j as i,k as n,ad as d,aH as p,n as m,aS as f,p as u}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{A as j}from"./index.f69020fc.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import{a as x,s as v}from"./index.444478fd.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.c638cd84.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./animation.94d2142a.js";import"./useScrollTo.02c0886c.js";var C=o({components:{CollapseContainer:x,ScrollContainer:v,Alert:j},setup(){const s=a(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const T=f("data-v-6aa17979");r("data-v-6aa17979");const _={class:"p-4"},b={class:"my-4"},k=u("滚动到100px位置"),h=u("滚动到800px位置"),y=u("滚动到顶部"),w=u("滚动到底部"),S={class:"scroll-wrap"},g={class:"p-3"};t();const A=T(((s,o,a,l,r,t)=>{const f=e("Alert"),u=e("a-button"),j=e("ScrollContainer");return c(),i("div",_,[n(f,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),n("div",b,[n(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:T((()=>[k])),_:1}),n(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:T((()=>[h])),_:1}),n(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:T((()=>[y])),_:1}),n(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:T((()=>[w])),_:1})]),n("div",S,[n(j,{class:"mt-4",ref:"scrollRef"},{default:T((()=>[n("ul",g,[(c(),i(d,null,p(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])}));C.render=A,C.__scopeId="data-v-6aa17979";export default C;