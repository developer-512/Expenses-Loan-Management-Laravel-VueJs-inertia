import{h as v,i as h,v as _,o as d,f as w,T as V,c as f,w as n,a as r,u as t,Z as B,t as C,g as p,b as a,j as g,d as u,n as $,e as P}from"./app-DGsS2Ywk.js";import{_ as q}from"./GuestLayout-CTPjPimv.js";import{_ as y,a as k,b}from"./TextInput-CPsX-xem.js";import{P as N}from"./PrimaryButton-CO47965o.js";import"./ApplicationLogo-IGIsVSf7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const U=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:s}){const m=s,i=l,e=v({get(){return i.checked},set(o){m("update:checked",o)}});return(o,c)=>h((d(),w("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":c[0]||(c[0]=x=>e.value=x),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,U)),[[_,e.value]])}},R={key:0,class:"mb-4 text-sm font-medium text-green-600"},S={class:"mt-4"},j={class:"mt-4 block"},A={class:"flex items-center"},D={class:"mt-4 flex items-center justify-between"},E={class:"w-full mt-4"},H={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const s=V({email:"",password:"",remember:!1}),m=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(i,e)=>(d(),f(q,null,{default:n(()=>[r(t(B),{title:"Log in"}),l.status?(d(),w("div",R,C(l.status),1)):p("",!0),a("form",{onSubmit:P(m,["prevent"])},[a("div",null,[r(y,{for:"email",value:"Email"}),r(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[0]||(e[0]=o=>t(s).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),r(b,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",S,[r(y,{for:"password",value:"Password"}),r(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":e[1]||(e[1]=o=>t(s).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),r(b,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),a("div",j,[a("label",A,[r(L,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=o=>t(s).remember=o)},null,8,["checked"]),e[3]||(e[3]=a("span",{class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1))])]),a("div",D,[l.canResetPassword?(d(),f(t(g),{key:0,href:i.route("password.request"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"},{default:n(()=>e[4]||(e[4]=[u(" Forgot your password? ")])),_:1},8,["href"])):p("",!0),r(N,{class:$(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:n(()=>e[5]||(e[5]=[u(" Log in ")])),_:1},8,["class","disabled"])]),a("div",E,[r(t(g),{href:i.route("register"),class:"w-full inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"},{default:n(()=>e[6]||(e[6]=[u(" Create your Account ")])),_:1},8,["href"])])],32)]),_:1}))}};export{H as default};