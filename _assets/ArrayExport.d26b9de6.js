import{a as e,i,o as t,j as o,k as s,w as r,p as a}from"./index.fa77065c.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.e19633cb.js";import"./index.90de1e74.js";import"./omit.439d1869.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.b1b41282.js";import"./CheckOutlined.91529706.js";import"./index.6b93ba53.js";import"./index.bf0e8280.js";import"./colors.97dd2376.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.f78223a8.js";import"./index.5429caf9.js";import"./UpOutlined.5b0a5c28.js";import"./LeftOutlined.bfe820e8.js";import"./DownOutlined.3a561222.js";import"./index.94d80465.js";import"./index.f8fbd3c1.js";import"./index.d5fe47b2.js";import"./zh_CN.0242bd16.js";import"./index.4e4bcd90.js";import"./index.8f50292b.js";import"./CaretDownFilled.48ea7d98.js";import"./CheckOutlined.f93c980e.js";import"./CloseOutlined.06d38e20.js";import{s as d}from"./EditTableHeaderIcon.fb45be89.js";import"./index.e727506c.js";import"./index.ff9490e7.js";import"./LeftOutlined.30751ba4.js";import"./functional.696d7325.js";import"./RightOutlined.30a2c84e.js";import"./useTimeout.f7769a48.js";import"./useDebounce.d84b3497.js";import"./useEventListener.e42e7868.js";import"./useBreakpoint.ceda980b.js";import"./resizeEvent.f3325c29.js";import"./domUtils.aee0a6fd.js";import"./index.91b8bb1e.js";import"./useWindowSizeFn.2392dc8b.js";import"./uuid.40269c00.js";import"./download.5b6067ac.js";import"./useForm.cd7e42d8.js";import"./useFullScreen.8bd76ed4.js";import"./index.eedf2b72.js";import{s as m}from"./index.4c51ae9c.js";import{c as n,d as p,a as c,b as j,e as l}from"./data.7596f14f.js";var u=e({components:{BasicTable:d,ExportExcelModel:m},setup:()=>({aoaToExcel:function(){c({data:j,header:l,filename:"二维数组方式导出excel.xlsx"})},columns:n,data:p})});const b={class:"m-4"},f=a("导出");u.render=function(e,a,d,m,n,p){const c=i("a-button"),j=i("BasicTable");return t(),o("div",b,[s(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:r((()=>[s(c,{onClick:e.aoaToExcel},{default:r((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])};export default u;