import{d as T,o,c as i,a as y,_ as B,u as L,b as V,e as I,f as l,w as t,g as e,h as c,i as R,N as q,j as p,k as r,t as d,l as k,m as x,F as w,r as N,n as z,p as A,q as h,s as E,v as F,x as b}from"./index-98226344.js";const G={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},H=T({name:"ArrowLeft24Regular",render:function(v,_){return o(),i("svg",G,_[0]||(_[0]=[y("g",{fill:"none"},[y("path",{d:"M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067z",fill:"currentColor"})],-1)]))}});const S={class:"tool-page"},$={class:"tool-header"},j={key:0,class:"tool-content"},D={__name:"Tool",setup(C){const v=L(),_=V(),s=I(()=>R(v.params.type)),f=g=>{window.open(g,"_blank")};return(g,m)=>(o(),i("div",S,[l(e(p),{class:"back-button",quaternary:"",circle:"",onClick:m[0]||(m[0]=u=>e(_).back())},{icon:t(()=>[l(e(q),null,{default:t(()=>[l(e(H))]),_:1})]),_:1}),s.value?(o(),c(e(h),{key:0},{header:t(()=>[y("div",$,[l(e(k),{class:"tool-title"},{default:t(()=>[r(d(s.value.title),1)]),_:1}),l(e(x),{bordered:!1,color:{color:s.value.color+"20",textColor:s.value.color}},{default:t(()=>[r(d(s.value.category),1)]),_:1},8,["color"])])]),default:t(()=>{var u;return[l(e(k),{depth:"3"},{default:t(()=>[r(d(s.value.description),1)]),_:1}),(u=s.value.features)!=null&&u.length?(o(),i("div",j,[l(e(z),{"x-gap":24,"y-gap":24,cols:"1",responsive:"screen"},{default:t(()=>[(o(!0),i(w,null,N(s.value.features,a=>(o(),c(e(F),{key:a.key},{default:t(()=>[l(e(h),{title:a.title,class:"feature-card"},{"header-extra":t(()=>[l(e(x),{type:"info",size:"small"},{default:t(()=>[r(d({preparing:"准备中",developing:"开发中",ready:"已就绪",official:"官方资源","third-party":"第三方工具"}[a.status]),1)]),_:2},1024)]),default:t(()=>[l(e(b),{vertical:""},{default:t(()=>[l(e(k),null,{default:t(()=>[r(d(a.description),1)]),_:2},1024),a.buttons?(o(),c(e(b),{key:0},{default:t(()=>[(o(!0),i(w,null,N(a.buttons,n=>(o(),c(e(p),{key:n.text,type:"primary",color:n.color,disabled:!a.enabled||!n.enabled||a.status==="developing",onClick:()=>{n.link&&n.enabled&&f(n.link)}},{default:t(()=>[r(d(n.text),1)]),_:2},1032,["color","disabled","onClick"]))),128))]),_:2},1024)):(o(),c(e(p),{key:1,type:"primary",disabled:!a.enabled||a.status==="developing",onClick:()=>a.link&&a.enabled&&f(a.link)},{default:t(()=>[r(d(a.actionText),1)]),_:2},1032,["disabled","onClick"]))]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})])):A("",!0)]}),_:1})):(o(),c(e(E),{key:1,description:"未找到工具"}))]))}},M=B(D,[["__scopeId","data-v-841ac917"]]);export{M as default};
