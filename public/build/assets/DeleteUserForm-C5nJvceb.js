import{o as f,f as x,r as v,y as $,q as C,x as B,h as D,c as E,a as r,w as l,i as y,K as p,b as s,L as g,n as _,g as S,M as V,p as b,T as U,A,d as w,u as c,N}from"./app-6Bl8MTUg.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M,a as K,b as L}from"./TextInput-Da-qKR51.js";const O={},P={class:"inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800"};function W(o,n){return f(),x("button",P,[v(o.$slots,"default")])}const h=T(O,[["render",W]]),z={class:"fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0","scroll-region":""},F={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(o,{emit:n}){const a=o,t=n;$(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const u=()=>{a.closeable&&t("close")},d=m=>{m.key==="Escape"&&a.show&&u()};C(()=>document.addEventListener("keydown",d)),B(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const i=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.maxWidth]);return(m,e)=>(f(),E(V,{to:"body"},[r(g,{"leave-active-class":"duration-200"},{default:l(()=>[y(s("div",z,[r(g,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[y(s("div",{class:"fixed inset-0 transform transition-all",onClick:u},e[0]||(e[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"},null,-1)]),512),[[p,o.show]])]),_:1}),r(g,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[y(s("div",{class:_(["mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800",i.value])},[o.show?v(m.$slots,"default",{key:0}):S("",!0)],2),[[p,o.show]])]),_:3})],512),[[p,o.show]])]),_:3})]))}},I=["type"],j={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(o){return(n,a)=>(f(),x("button",{type:o.type,class:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"},[v(n.$slots,"default")],8,I))}},q={class:"space-y-6"},G={class:"p-6"},H={class:"mt-6"},J={class:"mt-6 flex justify-end"},Y={__name:"DeleteUserForm",setup(o){const n=b(!1),a=b(null),t=U({password:""}),u=()=>{n.value=!0,A(()=>a.value.focus())},d=()=>{t.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>a.value.focus(),onFinish:()=>t.reset()})},i=()=>{n.value=!1,t.clearErrors(),t.reset()};return(m,e)=>(f(),x("section",q,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete Account "),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),r(h,{onClick:u},{default:l(()=>e[1]||(e[1]=[w("Delete Account")])),_:1}),r(F,{show:n.value,onClose:i},{default:l(()=>[s("div",G,[e[4]||(e[4]=s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),s("div",H,[r(M,{for:"password",value:"Password",class:"sr-only"}),r(K,{id:"password",ref_key:"passwordInput",ref:a,modelValue:c(t).password,"onUpdate:modelValue":e[0]||(e[0]=k=>c(t).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:N(d,["enter"])},null,8,["modelValue"]),r(L,{message:c(t).errors.password,class:"mt-2"},null,8,["message"])]),s("div",J,[r(j,{onClick:i},{default:l(()=>e[2]||(e[2]=[w(" Cancel ")])),_:1}),r(h,{class:_(["ms-3",{"opacity-25":c(t).processing}]),disabled:c(t).processing,onClick:d},{default:l(()=>e[3]||(e[3]=[w(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Y as default};
