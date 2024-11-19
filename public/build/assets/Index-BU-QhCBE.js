import{p as D,o as l,f as a,b as e,e as $,g as p,T as _,q,a as x,u as n,w as y,F as k,Z as T,j as g,d as u,i as f,E as v,J as w,G as V,K as F,t as d,c as J,n as S}from"./app-Bt-R-OIp.js";import{_ as N}from"./AuthenticatedLayout-ymaIRUNz.js";import{_ as P}from"./Pagination-B1iqx-tD.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-C6oCaL8n.js";const B=["src"],U={class:"modal-content"},R=["src"],O={__name:"ImagePopup",props:{imageSrc:{type:String,required:!0},thumbnail:{type:String,required:!1}},setup(c){const i=D(!1);return(b,m)=>(l(),a("div",null,[e("img",{src:c.thumbnail,alt:"Thumbnail",onClick:m[0]||(m[0]=h=>i.value=!0),style:{cursor:"pointer","max-width":"100px"}},null,8,B),i.value?(l(),a("div",{key:0,class:"modal-overlay",onClick:m[2]||(m[2]=$(h=>i.value=!1,["self"]))},[e("div",U,[e("span",{class:"close-btn",onClick:m[1]||(m[1]=h=>i.value=!1)},"×"),e("img",{src:c.imageSrc,alt:"Full Image"},null,8,R)])])):p("",!0)]))}},K=I(O,[["__scopeId","data-v-ae91c54c"]]),L={class:"grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-2 w-full text-center mt-4"},z={key:0},G={key:0},Y={key:0},Z={class:"w-full mt-4"},H={class:""},Q={class:"w-full flex items-center space-x-5"},W=["disabled"],X={key:0},ee={class:"py-12"},te={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},se={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-700"},re={class:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"},ne={class:"inline-block min-w-full shadow rounded-lg overflow-hidden"},oe={class:"relative overflow-x-auto"},le={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},ae={class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},ie={key:0},de={class:"w-5 sm:hidden"},ue={key:2},pe=["href"],ce={class:"hidden md:table-cell px-6 py-4"},me={class:"px-6 py-4 hidden md:table-cell"},xe={class:"px-6 py-4"},ye={class:"p-5 space-y-2"},ge=["onClick"],fe={class:"hidden px-6 py-4 md:table-cell"},he={class:"px-6 py-4"},be=["onClick"],_e={class:"w-full flex justify-between px-6"},Ee={__name:"Index",props:{expenses:{type:Object,default:()=>[]},months:{type:Array,default:["January","January","February","March","April","May","June","July","August","September","October","November","December"]},search:{type:Object,default:()=>{}},is_Searching:{type:Boolean,default:!1}},setup(c){const i=c,b=o=>o.match(/\.(jpeg|jpg|gif|png|webp)$/)!=null;console.log(i.expenses);const m=_({}),h=_({}),r=_({search_query:"",search_expense_month:0,search_expense_year:0,shared_expenses:"",all_expenses:""});q(()=>{i.search&&(r.search_query=i.search.search_query||"",r.search_expense_month=i.search.search_expense_month||0,r.search_expense_year=i.search.search_expense_year||0,r.shared_expenses=i.search.shared_expenses||"",r.all_expenses=i.search.all_expenses||"")});const E=()=>r.get(route("expenses.index")),C=o=>{confirm("Do you really want to delete?")&&m.delete(`expenses/${o}`)},A=()=>{confirm("Do you really want to Duplicate current months record to next month?")&&F.get(route("expenses.duplicate"))},M=o=>{h.patch(`expenses/${o}/payed`,{preserveScroll:!0,onSuccess:t=>{console.log(`Payed status updated for expense ID: ${o}`)},onError:t=>{console.error(`Error updating payed status for expense ID: ${o}`,t)}})};return(o,t)=>(l(),a(k,null,[x(n(T),{title:"Expenses"}),x(N,null,{header:y(()=>[t[13]||(t[13]=e("div",{class:"flex items-center justify-between"},[e("h2",{class:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"}," Expenses ")],-1)),e("div",L,[x(n(g),{href:o.route("expenses.index"),class:"w-auto justify-between inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800"},{default:y(()=>[t[7]||(t[7]=u(" My Expenses")),n(r).shared_expenses==""&&n(r).all_expenses==""?(l(),a("span",z,"➘")):p("",!0)]),_:1},8,["href"]),x(n(g),{href:o.route("expenses.index")+"?shared_expenses=true",class:"w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"},{default:y(()=>[t[8]||(t[8]=u(" Shared Expenses")),n(r).shared_expenses?(l(),a("span",G,"➘")):p("",!0)]),_:1},8,["href"]),x(n(g),{href:o.route("expenses.index")+"?all_expenses=true",class:"w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800"},{default:y(()=>[t[9]||(t[9]=u(" All Expenses")),n(r).all_expenses?(l(),a("span",Y,"➘")):p("",!0)]),_:1},8,["href"]),x(n(g),{href:o.route("expenses.create"),class:"w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"},{default:y(()=>t[10]||(t[10]=[u("Add New Expense")])),_:1},8,["href"])]),e("div",Z,[e("div",H,[e("form",{onSubmit:$(E,["prevent"]),class:"mx-auto"},[n(r).all_expenses?f((l(),a("input",{key:0,type:"hidden","onUpdate:modelValue":t[0]||(t[0]=s=>n(r).all_expenses=s),name:"all_expenses"},null,512)),[[v,n(r).all_expenses]]):p("",!0),n(r).shared_expenses?f((l(),a("input",{key:1,type:"hidden","onUpdate:modelValue":t[1]||(t[1]=s=>n(r).shared_expenses=s),name:"shared_expenses"},null,512)),[[v,n(r).shared_expenses]]):p("",!0),e("div",Q,[f(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>n(r).search_query=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search by expense title/amount"},null,512),[[v,n(r).search_query]]),f(e("select",{id:"expense_month",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":t[3]||(t[3]=s=>n(r).search_expense_month=s)},t[11]||(t[11]=[e("option",{value:"0"},"Select Month To Search",-1),e("option",{value:"1"},"January",-1),e("option",{value:"2"},"February",-1),e("option",{value:"3"},"March",-1),e("option",{value:"4"},"April",-1),e("option",{value:"5"},"May",-1),e("option",{value:"6"},"June",-1),e("option",{value:"7"},"July",-1),e("option",{value:"8"},"August",-1),e("option",{value:"9"},"September",-1),e("option",{value:"10"},"October",-1),e("option",{value:"11"},"November",-1),e("option",{value:"12"},"December",-1)]),512),[[w,n(r).search_expense_month]]),f(e("select",{id:"expense_year",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500","onUpdate:modelValue":t[4]||(t[4]=s=>n(r).search_expense_year=s)},t[12]||(t[12]=[e("option",{value:"0"},"Select Year To Search",-1),e("option",{value:"2024"},"2024",-1),e("option",{value:"2025"},"2025",-1),e("option",{value:"2026"},"2026",-1),e("option",{value:"2027"},"2027",-1),e("option",{value:"2028"},"2028",-1),e("option",{value:"2029"},"2029",-1),e("option",{value:"2030"},"2030",-1)]),512),[[w,n(r).search_expense_year]]),e("button",{disabled:n(r).processing,class:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",type:"submit"},"Search",8,W),c.is_Searching?(l(),a("span",X,[e("button",{class:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800",onClick:t[5]||(t[5]=s=>n(r).reset("search_query","search_expense_year","search_expense_month"))},"Clear")])):p("",!0)])],32)])])]),default:y(()=>[e("div",ee,[e("div",te,[e("div",se,[e("div",re,[e("div",ne,[e("div",oe,[e("table",le,[t[22]||(t[22]=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Title "),e("th",{scope:"col",class:"px-6 py-3 hidden md:table-cell"}," Amount "),e("th",{scope:"col",class:"px-6 py-3 hidden md:table-cell"}," Expense Month "),e("th",{scope:"col",class:"px-6 py-3"}," Paid "),e("th",{scope:"col",class:"px-6 py-3 hidden md:table-cell"}," Expense Type "),e("th",{scope:"col",class:"px-6 py-3"}," Actions ")])],-1)),e("tbody",null,[(l(!0),a(k,null,V(c.expenses.data,s=>(l(),a("tr",{key:s.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("td",ae,[u(d(s.title)+" ",1),s.user_id!=o.$page.props.auth.user.id?(l(),a("span",ie,[t[14]||(t[14]=e("br",null,null,-1)),e("small",null,"(Added By "+d(s.user.name)+")",1)])):p("",!0),e("span",de,[t[15]||(t[15]=e("br",null,null,-1)),u(" PKR "+d(s.amount)+" ",1),t[16]||(t[16]=e("br",null,null,-1)),u(" "+d(c.months[s.expense_month])+" "+d(s.expense_year),1),t[17]||(t[17]=e("br",null,null,-1)),e("small",null,"Added on "+d(s.expense_date),1)]),s.full_receipt_path&&b(s.full_receipt_path)?(l(),J(K,{key:1,"image-src":s.full_receipt_path,thumbnail:s.full_receipt_path},null,8,["image-src","thumbnail"])):p("",!0),s.full_receipt_path&&!b(s.full_receipt_path)?(l(),a("small",ue,[t[18]||(t[18]=e("br",null,null,-1)),e("a",{href:s.full_receipt_path,target:"_blank",title:"Receipt",download:""},"Expense Receipt",8,pe)])):p("",!0)]),e("td",ce,"PKR "+d(s.amount),1),e("td",me,[u(d(c.months[s.expense_month])+" "+d(s.expense_year),1),t[19]||(t[19]=e("br",null,null,-1)),e("small",null,"Added on "+d(s.expense_date),1)]),e("td",xe,[e("div",ye,[e("button",{class:S(["transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none",{"bg-green-300":s.payed==1}]),onClick:j=>M(s.id)},[e("div",{class:S(["transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow",{"transform translate-x-full":s.payed==1}])},null,2)],10,ge)])]),e("td",fe,d(s.type.replace("-"," ")),1),e("td",he,[e("button",{onClick:j=>C(s.id),class:"inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4"},"Delete",8,be),t[21]||(t[21]=u("   ")),x(n(g),{href:o.route("expenses.edit",s.id),class:"inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4"},{default:y(()=>t[20]||(t[20]=[u("Edit")])),_:2},1032,["href"])])]))),128))])])]),x(P,{pagination:c.expenses},null,8,["pagination"]),e("div",_e,[e("button",{onClick:t[6]||(t[6]=s=>A()),class:"w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"},"Copy Current Month Expenses To Next")])])])])])])]),_:1})],64))}};export{Ee as default};