import{a as e,i as r,o,j as i,k as s,w as a,p as t}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import"./index.9799a881.js";import{A as n}from"./index.76ecadf4.js";import"./colors.4e87fc28.js";import"./RightOutlined.31cb4cc9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.6bcb6667.js";import"./UpOutlined.58a09ac3.js";import"./index.f39ff197.js";import"./index.687a618a.js";import"./index.6ed5ccd9.js";import"./index.cb9a9fbb.js";import"./useDebounce.c071ec0c.js";import"./useEventListener.e7c114de.js";import"./useBreakpoint.8d335e41.js";import{u as p}from"./index.054918a4.js";import m from"./Drawer1.e0e5d892.js";import c from"./Drawer2.dc7634ea.js";import d from"./Drawer3.1fb8a57b.js";import"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import"./useForm.607168db.js";import l from"./Drawer4.de765315.js";import w from"./Drawer5.38419140.js";var D=e({components:{Alert:n,Drawer1:m,Drawer2:c,Drawer3:d,Drawer4:l,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[a,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[c,{openDrawer:d}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:a,openDrawer3:t,register4:n,register5:c,openDrawer5:d,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const j={class:"px-10 py-4"},f=t("打开Drawer"),g=t("打开Drawer"),u=t("打开Drawer"),x=t("打开Drawer并传递数据"),b=t("打开详情Drawer");D.render=function(e,t,n,p,m,c){const d=r("Alert"),l=r("a-button"),w=r("Drawer1"),D=r("Drawer2"),y=r("Drawer3"),k=r("Drawer4"),R=r("Drawer5");return o(),i("div",j,[s(d,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:a((()=>[f])),_:1},8,["onClick"]),s(d,{message:"内外同时同时显示隐藏","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer2},{default:a((()=>[g])),_:1},8,["onClick"]),s(d,{message:"自适应高度/显示footer","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer3},{default:a((()=>[u])),_:1},8,["onClick"]),s(d,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.send},{default:a((()=>[x])),_:1},8,["onClick"]),s(d,{message:"详情页模式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer5},{default:a((()=>[b])),_:1},8,["onClick"]),s(w,{onRegister:e.register1},null,8,["onRegister"]),s(D,{onRegister:e.register2},null,8,["onRegister"]),s(y,{onRegister:e.register3},null,8,["onRegister"]),s(k,{onRegister:e.register4},null,8,["onRegister"]),s(R,{onRegister:e.register5},null,8,["onRegister"])])};export default D;