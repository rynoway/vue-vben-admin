import{a as e,d9 as s,ac as i,h as o,i as r,o as t,j as a,k as n,w as p}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import{s as l}from"./index.9799a881.js";import"./colors.4e87fc28.js";import"./RightOutlined.31cb4cc9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.6bcb6667.js";import"./UpOutlined.58a09ac3.js";import"./index.f39ff197.js";import"./index.687a618a.js";import"./index.6ed5ccd9.js";import"./index.cb9a9fbb.js";import"./useDebounce.c071ec0c.js";import"./useEventListener.e7c114de.js";import"./useBreakpoint.8d335e41.js";import{C as d}from"./index.f486b7fa.js";import"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import{u as m}from"./useForm.607168db.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:l,CollapseContainer:d},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};u.render=function(e,s,i,o,l,d){const m=r("a-input"),c=r("BasicForm"),u=r("CollapseContainer");return t(),a("div",f,[n(u,{title:"自定义表单"},{default:p((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:p((({model:e,field:s})=>[n(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;