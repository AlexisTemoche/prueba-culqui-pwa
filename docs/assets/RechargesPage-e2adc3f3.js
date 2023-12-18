import{o as s,c as a,a as e,u as x,b as _,A as w,d as v,r as y,e as b,f as k,w as C,g as B,v as L,h as l,i as o,j as P,F as j,k as F,t as z,p as A,l as I,_ as M}from"./index-15052314.js";import{C as R}from"./ContainerComponent-73a336e2.js";function q(t,r){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])}function E(t,r){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})])}function h(t,r){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})])}const f=new w,S=()=>{const t=()=>f.get("/getProviders"),{data:r,isFetching:d}=x({queryKey:["/getProviders"],queryFn:t,networkMode:"offlineFirst"});return{isLoading:_(()=>d.value),listOfProviders:_(()=>r.value?r.value.data.companies:[])}},$=()=>{f.cancelRequest()},c=t=>(A("data-v-8acd5f17"),t=t(),I(),t),T={class:"flex flex-col max-w-xl mx-auto"},V={class:"flex flex-col md:flex-row items-center mb-5"},D=c(()=>e("label",{for:"input_search",class:"text-sm font-medium text-gray-900 mb-3 md:mb-0 w-full md:w-1/4"}," Buscar Empresa: ",-1)),N={class:"w-full md:w-3/4 grid grid-cols-[1fr_25px] items-center rounded-sm py-2 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100"},O={class:"flex flex-row mb-5"},U={type:"button",class:"flex items-center w-fit border-solid border-2 border-orange-400 py-0.5 px-3 rounded-full mr-1"},G=c(()=>e("span",null," Todas ",-1)),H={type:"button",class:"flex items-center w-fit border-solid border-2 border-gray-200 py-0.5 px-3 rounded-full mr-1"},K=c(()=>e("span",null," Favoritas ",-1)),Q={type:"button",class:"flex items-center w-fit border-solid border-2 border-gray-200 py-0.5 px-3 rounded-full"},J=c(()=>e("span",null," Telefonía ",-1)),W={key:0},X={key:1,class:"flex flex-col providers-list"},Y={class:"flex items-center"},Z=["src","alt"],ee={class:"w-fit ml-2"},te=v({__name:"RechargesPage",setup(t){const{isLoading:r,listOfProviders:d}=S(),u=y(""),m=p=>{const i=p.target;i.src=""};return b(()=>$()),(p,i)=>(s(),k(R,null,{default:C(()=>[e("div",T,[e("div",V,[D,e("div",N,[B(e("input",{id:"input_search",name:"input_search",type:"text","onUpdate:modelValue":i[0]||(i[0]=n=>u.value=n),placeholder:"ej. Culqui",autocomplete:"off",class:"bg-gray-100 border-0 outline-0"},null,512),[[L,u.value]]),l(o(q),{style:{float:"right"},class:"h-5 w-5 justify-center text-orange-500","aria-hidden":"true"})])]),e("div",O,[e("button",U,[l(o(P),{class:"h-3 w-3 mr-1","aria-hidden":"true"}),G]),e("button",H,[l(o(h),{class:"h3 w-3 mr-1","aria-hidden":"true"}),K]),e("button",Q,[l(o(E),{class:"h-3 w-3 mr-1","aria-hidden":"true"}),J])]),o(r)?(s(),a("span",W," Cargando... ")):(s(),a("ul",X,[(s(!0),a(j,null,F(o(d),(n,g)=>(s(),a("li",{key:g,class:"flex items-center justify-between w-full py-4 px-2 text-md font-semibold text-gray-800 hover:bg-gray-200"},[e("div",Y,[e("picture",null,[e("img",{width:"25",height:"25",src:n.image,loading:"lazy",alt:`Logo de ${n.company}`,onError:m},null,40,Z)]),e("span",ee,z(n.company),1)]),l(o(h),{class:"h-6 w-6 text-gray-300"})]))),128))]))])]),_:1}))}});const oe=M(te,[["__scopeId","data-v-8acd5f17"]]);export{oe as default};