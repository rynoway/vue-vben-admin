import{a as e,r as t,ba as i,o as a,j as r}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./useTimeout.f7769a48.js";import{u as o}from"./useECharts.2b7bd19d.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import{b as s}from"./props.c31746e0.js";var n=e({name:"AnalysisLine",props:s,setup(){const e=t(null),{setOptions:a}=o(e);return i((()=>{a({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{icon:"rect",itemWidth:15,itemHeight:4,left:80,top:0,orient:"horizontal",data:["产品一","产品二"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{normal:{color:"#5B8FF9"}},data:[330,132,101,134,90,230,210,150,232,234,230,400],animationDuration:4e3},{name:"产品二",type:"line",itemStyle:{normal:{color:"#55D187"}},data:[220,182,191,234,290,330,310,330,232,201,330,190],animationDuration:4e3}]})})),{chartRef:e}}});n.render=function(e,t,i,o,s,n){return a(),r("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default n;