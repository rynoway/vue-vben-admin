let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{dh as t,a as s,B as a,Q as o,h as i,c$ as r,d0 as d,i as c,o as n,j as m,aS as p,k as l,p as j}from"./index.c162a79a.js";import"./xlsx.a48e520c.js";import"./index.9331ed11.js";import"./Trigger.45e4d69c.js";import"./omit.f2034b03.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.e78f71b9.js";import"./CheckOutlined.66387142.js";import{s as u}from"./index.237a3252.js";import"./colors.519db886.js";import"./RightOutlined.4dd7a895.js";import"./types.a29b9594.js";import{U as b}from"./index.f4daae1e.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.97009910.js";import"./_baseFor.f4e5f03f.js";import"./index.d2a2c6c4.js";import"./index.a172b251.js";import"./index.c95c2261.js";import"./index.c77189db.js";import"./UpOutlined.c02d4bbe.js";import"./index.261d28fe.js";import"./index.c083d443.js";import"./index.6f702cdb.js";import"./index.61c4ebcf.js";import"./index.b1e85ccd.js";import"./FileOutlined.84bb7159.js";import{a as f}from"./index.444478fd.js";import"./useTimeout.cef81bf6.js";import"./tsxHelper.f27b6047.js";import"./index.c638cd84.js";import"./domUtils.d1ae637e.js";import"./index.59e7dc66.js";import"./resizeEvent.26e30cc3.js";import"./animation.94d2142a.js";import"./useScrollTo.02c0886c.js";import{_ as x}from"./header.0299ae16.js";import{s as h}from"./index.ea0a8b2c.js";import"./index.abb63025.js";import{u as g}from"./useForm.47a60267.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=s({components:{BasicForm:u,CollapseContainer:f,Button:a,Upload:b,Icon:h},setup(){const{createMessage:e}=i(),[s,{setFieldsValue:a}]=g({labelWidth:120,schemas:_,showActionButtonGroup:!1});return o((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});a(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const F=p("data-v-c0c2b920");r("data-v-c0c2b920");const O={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=j("更换头像 "),T=j("更新基本信息");d();const U=F(((e,t,s,a,o,i)=>{const r=c("BasicForm"),d=c("a-col"),p=c("Icon"),j=c("Button"),u=c("Upload"),b=c("a-row"),f=c("CollapseContainer");return n(),m(f,{title:"基本设置",canExpan:!1},{default:F((()=>[l(b,{gutter:24},{default:F((()=>[l(d,{span:14},{default:F((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:F((()=>[l("div",O,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(u,{showUploadList:!1},{default:F((()=>[l(j,{type:"ghost",class:"ml-5"},{default:F((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:e.handleSubmit},{default:F((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=U,v.__scopeId="data-v-c0c2b920";export default v;