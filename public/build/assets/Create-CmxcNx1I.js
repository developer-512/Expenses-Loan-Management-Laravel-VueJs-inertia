import{T as $,Q as A,q as B,f as n,a as p,u as a,w as y,F as b,o as l,Z as D,b as r,j as h,n as k,d as f,e as F,t as m,g,i as u,J as v,G as L,E as c}from"./app-6Bl8MTUg.js";import{_ as j}from"./AuthenticatedLayout-BXMuCoRF.js";import"./ApplicationLogo-CgPrwvX3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"flex items-center justify-between"},M={class:"py-12"},N={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},S={class:"bg-white dark:bg-gray-900"},P={class:"py-8 px-4 mx-auto max-w-2xl"},Y=["value"],E={class:"grid gap-4 sm:grid-cols-2 sm:gap-6"},G={class:""},q=["value"],z={key:0,class:"sm:col-span-2"},J=["value"],O=["value"],Q={key:1,class:"sm:col-span-2"},Z=["value"],H=["value"],I={key:0,class:"sm:col-span-2 text-2xl text-center text-white"},K={key:0,class:""},R={key:1},W={class:"sm:col-span-2"},X={class:"sm:col-span-2"},ee={class:"sm:col-span-2"},re={class:"sm:col-span-2"},te={class:"sm:col-span-2"},ae=["value"],oe=["disabled"],ie={__name:"Create",props:{loan:{type:Object,default:null},users:{type:Array,default:()=>[]},LoanTaker:{type:Boolean,default:!1},loan_statuses:{type:Array,default:()=>["Unpaid","Paying","Paid"]},isUpdating:{type:Boolean,default:!1}},setup(d){const s=d,x=new Date,w=`${x.getFullYear()}-${x.getMonth()+1}-${x.getDate()}`,t=$({lender:"",borrower:"",loan_date:w,amount:0,paid_amount:0,payment_date:"",status:"Unpaid",type:s.LoanTaker});console.log(s);const _=A(),T=()=>s.isUpdating?V():U(),U=()=>t.post(route("loans.store")),V=()=>t.put(route("loans.update",s.loan.id));return B(()=>{s.loan&&(s.loan.lender==_.props.auth.user.id,t.lender=s.loan.lender.id||"",t.borrower=s.loan.borrower.id||"",t.amount=s.loan.amount||"",t.loan_date=s.loan.loan_date||w,t.payment_date=s.loan.payment_date||w,t.paid_amount=s.loan.paid_amount||0,t.status=s.loan.status||"Unpaid",t.type=s.loan.lender==_.props.auth.user.id||s.LoanTaker)}),(i,e)=>(l(),n(b,null,[p(a(D),{title:"Loans Create Form"}),p(j,null,{header:y(()=>[r("div",C,[e[10]||(e[10]=r("h2",{class:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"}," Add New Loan ",-1)),p(a(h),{href:i.route("loans.create"),class:k(["text-sky-50",{" w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800":!d.LoanTaker}])},{default:y(()=>e[7]||(e[7]=[f("Giving Loan")])),_:1},8,["href","class"]),p(a(h),{href:i.route("loans.create")+"?loan_taking=true",class:k(["text-sky-50",{" w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800":d.LoanTaker}])},{default:y(()=>e[8]||(e[8]=[f("Taking Loan")])),_:1},8,["href","class"]),p(a(h),{href:i.route("loans.index"),class:"text-sky-50"},{default:y(()=>e[9]||(e[9]=[f("Back to All Loans")])),_:1},8,["href"])])]),default:y(()=>[r("div",M,[r("div",N,[r("section",S,[r("div",P,[r("form",{onSubmit:F(T,["prevent"]),class:"max-w-md mx-auto"},[a(t).progress?(l(),n("progress",{key:0,value:a(t).progress.percentage,max:"100"},m(a(t).progress.percentage)+"% ",9,Y)):g("",!0),r("div",E,[r("div",{class:k(["sm:col-span-2",{hidden:a(t).lender>0}])},[r("div",G,[r("input",{type:"hidden",name:"type",value:d.LoanTaker?1:0},null,8,q)])],2),r("div",{class:k(["sm:col-span-2",{hidden:d.loan}])},[d.LoanTaker?g("",!0):(l(),n("div",z,[e[11]||(e[11]=r("label",{for:"borrower",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Loan taker from you:",-1)),u(r("select",{id:"borrower",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[0]||(e[0]=o=>a(t).borrower=o)},[(l(!0),n(b,null,L(d.users,o=>(l(),n("option",{value:o.id},m(o.name),9,J))),256))],512),[[v,a(t).borrower]]),r("input",{type:"hidden",name:"lender",value:i.$page.props.auth.user.id},null,8,O)])),d.LoanTaker?(l(),n("div",Q,[e[12]||(e[12]=r("label",{for:"lender",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"You taking loan from:",-1)),u(r("select",{id:"lender",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[1]||(e[1]=o=>a(t).lender=o)},[(l(!0),n(b,null,L(d.users,o=>(l(),n("option",{value:o.id},m(o.name),9,Z))),256))],512),[[v,a(t).lender]]),r("input",{type:"hidden",name:"borrower",value:i.$page.props.auth.user.id},null,8,H)])):g("",!0)],2),d.loan?(l(),n("div",I,[a(t).lender!=i.$page.props.auth.user.id?(l(),n("h3",K,[e[13]||(e[13]=f(" You Took This Loan From ")),r("strong",null,m(d.loan.lender.name),1)])):g("",!0),a(t).lender==i.$page.props.auth.user.id?(l(),n("h3",R,m(d.loan.borrower.name)+" Took This Loan From You ",1)):g("",!0)])):g("",!0),r("div",W,[e[14]||(e[14]=r("label",{for:"amount",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Amount:",-1)),u(r("input",{type:"number",id:"amount",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[2]||(e[2]=o=>a(t).amount=o)},null,512),[[c,a(t).amount]])]),r("div",X,[e[15]||(e[15]=r("label",{for:"loan_date",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Loan Date:",-1)),u(r("input",{type:"date",id:"loan_date",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[3]||(e[3]=o=>a(t).loan_date=o)},null,512),[[c,a(t).loan_date]])]),r("div",ee,[e[16]||(e[16]=r("label",{for:"paid_amount",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Paid Amount:",-1)),u(r("input",{type:"number",id:"paid_amount",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[4]||(e[4]=o=>a(t).paid_amount=o)},null,512),[[c,a(t).paid_amount]])]),r("div",re,[e[17]||(e[17]=r("label",{for:"payment_date",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Loan Payment Date:",-1)),u(r("input",{type:"date",id:"payment_date",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[5]||(e[5]=o=>a(t).payment_date=o)},null,512),[[c,a(t).payment_date]])]),r("div",te,[e[18]||(e[18]=r("label",{for:"status",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Loan Status:",-1)),u(r("select",{id:"status",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":e[6]||(e[6]=o=>a(t).status=o)},[(l(!0),n(b,null,L(d.loan_statuses,o=>(l(),n("option",{value:o},m(o),9,ae))),256))],512),[[v,a(t).status]])])]),r("button",{disabled:a(t).processing,class:"inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",type:"submit"},"Save",8,oe)],32)])])])])]),_:1})],64))}};export{ie as default};