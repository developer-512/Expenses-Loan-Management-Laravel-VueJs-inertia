import{p as V,y as S,C as A,q as M,D as $,o as d,f as i,i as n,E as w,b as t,F as h,G as D,t as c,g as _,H as F,T as R,a as x,u as s,w as k,Z as B,j as I,d as T,e as N,v as U,I as E,J as v}from"./app-B3qt3DU3.js";import{_ as O}from"./AuthenticatedLayout-DQAW653_.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-DV4jCshM.js";const J={class:"w-full autocomplete-area"},L={key:0,class:"absolute bg-white rounded-lg block w-full max-w-80"},Y=["onClick"],j={__name:"AutocompleteInput",props:{modelValue:{type:String,default:()=>null}},emits:["update:modelValue"],setup(p,{emit:o}){const u=p,l=V(u.modelValue),r=V([]),m=o,b=async()=>{if(l.value.length<2){r.value=[];return}console.log(l.value);try{const e=await F.get(route("autocomplete"),{params:{query:l.value}});r.value=e.data}catch(e){console.error(e)}};S(()=>u.modelValue,e=>{l.value=e}),A(()=>{m("update:modelValue",l.value)});const f=e=>{l.value=e,m("update:modelValue",e),r.value=[]},g=e=>{e.target.closest(".autocomplete-area")||(r.value=[])};return M(()=>{document.addEventListener("click",g)}),$(()=>{document.removeEventListener("click",g)}),(e,a)=>(d(),i("div",J,[n(t("input",{type:"text",id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":a[0]||(a[0]=y=>l.value=y),onInput:b},null,544),[[w,l.value]]),r.value.length?(d(),i("ul",L,[(d(!0),i(h,null,D(r.value,(y,C)=>(d(),i("li",{key:C,onClick:be=>f(y)},c(y),9,Y))),128))])):_("",!0)]))}},q=P(j,[["__scopeId","data-v-6f543b6e"]]),G={class:"flex items-center justify-between"},H={class:"py-12"},Z={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},z={class:"bg-white dark:bg-gray-900"},K={class:"py-8 px-4 mx-auto max-w-2xl"},Q=["value"],W={class:"grid gap-4 sm:grid-cols-2 sm:gap-6"},X={class:"sm:col-span-2"},ee={class:"sm:col-span-2"},te={class:"sm:col-span-2"},re={class:"sm:col-span-2"},ae=["href"],se={class:"sm:col-span-2 hidden"},oe={class:"flex items-center space-x-2"},le={class:"sm:col-span-2"},ne={class:"flex items-center space-x-2"},de={class:"sm:col-span-2"},ie={class:"flex items-center space-x-2"},pe={class:"flex items-center mb-4"},ue={class:"flex items-center mb-4"},me={class:"sm:col-span-2"},ge={class:"sm:col-span-2"},ye={class:"sm:col-span-2"},xe=["value"],ce=["disabled"],he={__name:"Create",props:{expense:{type:Object,default:null},users:{type:Array,default:()=>[]},isUpdating:{type:Boolean,default:!1}},setup(p){const o=p,u=new Date,l=`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`,r=R({title:"",receipt:null,amount:"",expense_date:l,payable:!0,payed:!1,type:"Recurring-Payment",expense_month:new Date().getMonth()+1,expense_year:new Date().getFullYear(),shared:[]});console.log(o.expense);const m=()=>o.isUpdating?f():b(),b=()=>r.post(route("expenses.store")),f=()=>{r.post(route("expenses.update_expenses",o.expense.id),{forceFormData:!0})};return M(()=>{o.expense&&(r.title=o.expense.title||"",r.amount=o.expense.amount||"",r.expense_date=o.expense.expense_date||l,r.payable=o.expense.payable==1||!0,r.payed=o.expense.payed==1||!1,r.type=o.expense.type||"Recurring-Payment",r.expense_month=o.expense.expense_month||new Date().getMonth()+1,r.expense_year=o.expense.expense_year||new Date().getFullYear(),r.shared=o.expense.shared||[])}),(g,e)=>(d(),i(h,null,[x(s(B),{title:"Expenses Create Form"}),x(O,null,{header:k(()=>[t("div",G,[e[12]||(e[12]=t("h2",{class:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"}," Create New Expense ",-1)),x(s(I),{href:g.route("expenses.index"),class:"text-gray-700 dark:text-sky-50"},{default:k(()=>e[11]||(e[11]=[T("Back to All Expenses")])),_:1},8,["href"])])]),default:k(()=>[t("div",H,[t("div",Z,[t("section",z,[t("div",K,[t("form",{onSubmit:N(m,["prevent"]),class:"max-w-md mx-auto",enctype:"multipart/form-data"},[s(r).progress?(d(),i("progress",{key:0,value:s(r).progress.percentage,max:"100"},c(s(r).progress.percentage)+"% ",9,Q)):_("",!0),t("div",W,[t("div",X,[e[13]||(e[13]=t("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Title:",-1)),x(q,{modelValue:s(r).title,"onUpdate:modelValue":e[0]||(e[0]=a=>s(r).title=a)},null,8,["modelValue"])]),t("div",ee,[e[14]||(e[14]=t("label",{for:"amount",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Amount:",-1)),n(t("input",{type:"number",id:"amount",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[1]||(e[1]=a=>s(r).amount=a)},null,512),[[w,s(r).amount]])]),t("div",te,[e[15]||(e[15]=t("label",{for:"expense_date",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Expense Add Date:",-1)),n(t("input",{type:"date",id:"expense_date",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[2]||(e[2]=a=>s(r).expense_date=a)},null,512),[[w,s(r).expense_date]])]),t("div",re,[e[16]||(e[16]=t("label",{for:"receipt",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Receipt:",-1)),t("input",{type:"file",id:"receipt",name:"receipt",onInput:e[3]||(e[3]=a=>s(r).receipt=a.target.files[0]),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},null,32),e[17]||(e[17]=t("br",null,null,-1)),p.expense&&p.expense.full_receipt_path?(d(),i("a",{key:0,href:p.expense.full_receipt_path,class:"text-white text-lg",target:"_blank",title:"Receipt",download:""},"Attached Receipt Link",8,ae)):_("",!0)]),t("div",se,[t("div",oe,[n(t("input",{type:"checkbox",id:"payable",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2","onUpdate:modelValue":e[4]||(e[4]=a=>s(r).payable=a)},null,512),[[U,s(r).payable]]),e[18]||(e[18]=t("label",{for:"payable",class:"dark:text-white text-gray-600"},"Payable By Me",-1))])]),t("div",le,[t("div",ne,[n(t("input",{type:"checkbox",id:"payed",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2","onUpdate:modelValue":e[5]||(e[5]=a=>s(r).payed=a)},null,512),[[U,s(r).payed]]),e[19]||(e[19]=t("label",{for:"payed",class:"dark:text-white text-gray-600"},"Paid?",-1))])]),t("div",de,[e[22]||(e[22]=t("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Type:",-1)),t("div",ie,[t("div",pe,[n(t("input",{type:"radio",id:"one_time",value:"One-Time",class:"w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600","onUpdate:modelValue":e[6]||(e[6]=a=>s(r).type=a)},null,512),[[E,s(r).type]]),e[20]||(e[20]=t("label",{for:"one_time",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"One Time",-1))]),t("div",ue,[n(t("input",{type:"radio",id:"recurring",value:"Recurring-Payment",class:"w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600","onUpdate:modelValue":e[7]||(e[7]=a=>s(r).type=a)},null,512),[[E,s(r).type]]),e[21]||(e[21]=t("label",{for:"recurring",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Recurring Payment",-1))])])]),t("div",me,[e[24]||(e[24]=t("label",{for:"expense_month",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Expense Month:",-1)),n(t("select",{id:"expense_month",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[8]||(e[8]=a=>s(r).expense_month=a)},e[23]||(e[23]=[t("option",{value:"1"},"January",-1),t("option",{value:"2"},"February",-1),t("option",{value:"3"},"March",-1),t("option",{value:"4"},"April",-1),t("option",{value:"5"},"May",-1),t("option",{value:"6"},"June",-1),t("option",{value:"7"},"July",-1),t("option",{value:"8"},"August",-1),t("option",{value:"9"},"September",-1),t("option",{value:"10"},"October",-1),t("option",{value:"11"},"November",-1),t("option",{value:"12"},"December",-1)]),512),[[v,s(r).expense_month]])]),t("div",ge,[e[26]||(e[26]=t("label",{for:"expense_year",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Expense Year:",-1)),n(t("select",{id:"expense_year",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[9]||(e[9]=a=>s(r).expense_year=a)},e[25]||(e[25]=[t("option",{value:"2024"},"2024",-1),t("option",{value:"2025"},"2025",-1),t("option",{value:"2026"},"2026",-1),t("option",{value:"2027"},"2027",-1),t("option",{value:"2028"},"2028",-1),t("option",{value:"2029"},"2029",-1),t("option",{value:"2030"},"2030",-1)]),512),[[v,s(r).expense_year]])]),t("div",ye,[e[28]||(e[28]=t("label",{for:"shared",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Share with Others:",-1)),n(t("select",{id:"shared",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[10]||(e[10]=a=>s(r).shared=a)},[e[27]||(e[27]=t("option",{value:"",selected:"",disabled:""},"Select User to Share",-1)),(d(!0),i(h,null,D(p.users,a=>(d(),i("option",{value:a.id},c(a.name)+" - ("+c(a.email)+")",9,xe))),256))],512),[[v,s(r).shared]])])]),t("button",{disabled:s(r).processing,class:"inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",type:"submit"},"Save",8,ce)],32)])])])])]),_:1})],64))}};export{he as default};
