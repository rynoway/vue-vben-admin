import{a as e,u as s,i as t,o as i,j as o,w as r,k as a,x as n}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./colors.f10ffa37.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.e195d265.js";import"./index.19eec487.js";import"./index.97c0dc96.js";import"./index.abed08f8.js";import"./CloseOutlined.09b38309.js";import{B as m}from"./index.b83eb5e2.js";import"./index.243e732a.js";import"./RightOutlined.5716f2a4.js";import"./useTimeout.7f3ab19b.js";import"./useDebounce.388ff7a2.js";import"./resizeEvent.374e9514.js";import"./domUtils.f290d5ee.js";import"./useExpose.a4960c9f.js";import"./animation.d8e0bb7b.js";import"./index.9bba01cc.js";import{D as p}from"./index.8cdd0e08.js";import{u as d}from"./useDescription.9805cd41.js";import"./index.0e9d4f93.js";import"./useWindowSizeFn.6fb915be.js";import{getDescSchema as c}from"./data.6a3dbba7.js";var j=e({name:"ErrorLogDetailModal",components:{BasicModal:m,Description:p},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=d({column:2,schema:c()});return{register:t,useI18n:s,t:e}}});j.render=function(e,s,m,p,d,c){const j=t("Description"),f=t("BasicModal");return i(),o(f,n({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:r((()=>[a(j,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;