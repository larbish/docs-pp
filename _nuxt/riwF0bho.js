import{d as C,b6 as w,an as B,ao as I,r as f,B as S,be as D,c as s,e as o,f as d,n as l,C as e,F as y,af as g,ag as h,h as N,t as U,as as z,at as A,ba as F,ai as V,a9 as $}from"./D1nBZwFR.js";const j=["onClick"],O=C({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(x){const _={wrapper:"relative my-5 space-y-6",header:"flex items-center relative overflow-x-auto",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},b=x,i=w(),{ui:r,attrs:k}=B("content.tabs",void 0,_,I(b,"class"),!0),p=f(b.selectedIndex||0),m=f(1),v=S(()=>{var u;return m.value,((u=i.default)==null?void 0:u.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return D(()=>{m.value+=1}),(u,n)=>{const c=$;return s(),o("div",V({class:e(r).wrapper},e(k)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),o(y,null,g(e(v),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:E=>p.value=a},[t.icon?(s(),h(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):N("",!0),d("span",null,U(t.label),1)],10,j))),128))],2),(s(!0),o(y,null,g(e(v),(t,a)=>z((s(),o("div",{key:a},[(s(),h(F(t.component)))])),[[A,e(p)===a]])),128))],16)}}});export{O as default};
