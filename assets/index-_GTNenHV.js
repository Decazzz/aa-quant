import{_ as O,a as R}from"./icon-book-BhgVzoda.js";import{_ as W}from"./icon-dialog-close-pHalTsy0.js";import{d as q,r as m,o as H,c as g,a as l,b as s,w as i,F as Y,u as G,e as J,f as u,g as k,t as r,n as _,h,l as A,_ as K}from"./index-orqNAJ81.js";import{g as X}from"./index-zm9kplxs.js";import{B as y}from"./big-ElHgaEsS.js";const Z={class:"aabot-container bg-home text-white"},ee={class:"aa-sections"},le={class:"cont relative border-x border-line-gray"},te={class:"aa-strategies-container"},ae={class:"text-center"},se={class:"text-center"},ie={class:"flex justify-center"},oe=["onClick"],ne={class:"flex justify-center mt-2 pb-4"},de={class:"aa-dialog-body message mx-auto"},ue={class:"trading-option"},re={class:"option-top"},_e={class:"flex justify-between"},me={key:0,class:"aa-form-item"},pe={class:"aa-form-body"},ce={key:1,class:"aa-form-item"},ve={class:"flex items-center"},be={class:"flex mt-4 gap-4"},fe={class:"aa-form-item"},ye={class:"aa-form-body"},ge={class:"aa-form-item"},ke={class:"aa-form-body"},he={class:"trade-settings"},Ve={class:"flex items-center mt-4"},we={class:"flex flex-shrink-0 lw"},xe={class:"flex items-center mt-4"},Ce={class:"aa-form-item"},Se={class:"aa-form-body"},Ue={class:"preset-items"},Pe={class:"flex items-center mt-4 gap-4"},Ae={class:"aa-form-item"},Ne={class:"aa-form-body"},Be={class:"aa-form-item"},Te={class:"aa-form-body"},$e={class:"trade-settings"},Le={class:"take-loss mt-4"},Qe={class:"take-loss-block flex items-center"},Ee={class:"take-loss-item border border-line-gray pl-2"},Fe={class:"take-loss-item"},Me={class:"take-loss-item"},De={class:"take-loss-block flex items-center mt-2"},Ie={class:"take-loss-item border border-line-gray pl-2"},ze={class:"take-loss-item"},je={class:"take-loss-item"},Oe={class:"flex items-center mt-4 gap-4"},Re={class:"aa-form-item"},We={class:"aa-form-body"},qe={class:"aa-form-item"},He={class:"aa-form-body"},Ye=76,V=10,Ge=q({__name:"index",setup(Je){G();const w=J(),N=m("sol");w.query.chain&&(N.value=w.query.chain),H(async()=>{});const p=m(!1),B=()=>{p.value=!1},x=m([{name:"Quick'",enable:!0,chain:"sol",strategy:"Quick",buy_amount:1,buy_market:!1,buy_limit_price_change:-5,buy_slippage:5,buy_validity:.5,sell_limit:!0,sell_take_profit_price_change:31,sell_stop_loss_price_change:58,sell_slippage:5,sell_validity:2,dup_buy:!0},{name:"Quick'",enable:!0,chain:"sol",strategy:"Quick",buy_amount:1,buy_market:!1,buy_limit_price_change:5,buy_slippage:5,buy_validity:.5,sell_limit:!0,sell_take_profit_price_change:31,sell_stop_loss_price_change:58,sell_slippage:5,sell_validity:2},{name:"Quick'",enable:!0,chain:"sol",strategy:"Quick",buy_amount:1,buy_market:!1,buy_limit_price_change:5,buy_slippage:5,buy_validity:.5,sell_limit:!0,sell_take_profit_price_change:31,sell_stop_loss_price_change:58,sell_slippage:5,sell_validity:2},{name:"Quick'",enable:!0,chain:"sol",strategy:"Quick",buy_amount:1,buy_market:!1,buy_limit_price_change:5,buy_slippage:5,buy_validity:.5,sell_limit:!0,sell_take_profit_price_change:31,sell_stop_loss_price_change:58,sell_slippage:5,sell_validity:2},{name:"Quick'",enable:!0,chain:"sol",strategy:"Quick",buy_amount:1,buy_market:!1,buy_limit_price_change:5,buy_slippage:5,buy_validity:.5,sell_limit:!0,sell_take_profit_price_change:31,sell_stop_loss_price_change:58,sell_slippage:5,sell_validity:2}]),a=m({ID:"",name:"",link:"",enable:!1,only_alert:!1,dup_buy:!1,buy_market:!0,buy_amount:"",buy_limit_price_change:"",buy_slippage:"",buy_validity:"",sell_limit:!0,sell_take_profit_enable:!1,sell_take_profit_price_change:"",sell_take_profit_amount_percent:"",sell_stop_loss_enable:!1,sell_stop_loss_price_change:"",sell_stop_loss_amount_percent:"",sell_slippage:"",sell_validity:""}),f=m("add"),T=()=>{f.value="add",p.value=!0,L()},$=o=>{f.value="edit",p.value=!0,a.value={...a.value,...o}},L=()=>{a.value={ID:"",name:"",link:"",enable:!1,only_alert:!1,dup_buy:!1,buy_market:!0,buy_amount:"",buy_limit_price_change:"",buy_slippage:"",buy_validity:"",sell_limit:!0,sell_take_profit_enable:!1,sell_take_profit_price_change:"",sell_take_profit_amount_percent:"",sell_stop_loss_enable:!1,sell_stop_loss_price_change:"",sell_stop_loss_amount_percent:"",sell_slippage:"",sell_validity:""}},c=o=>{a.value.buy_limit_price_change=o};m(null);let v=1;const C=m(0),Q=async()=>{let o=await X(Number(Ye),{page:v,page_size:V});console.log(o),o.current_value,o.histories!=null&&(o.histories.forEach(e=>{e.top=Number(e.top),e.top_4h=Number(e.top_4h),e.top_change_4h_str=`${y(e.top_change_4h).times(100).toFixed(2)}%`,e.top_change_str=`${y(e.top_change).times(100).toFixed(2)}%`,e.bottom_change_4h_str=`${y(e.bottom_change_4h).times(100).toFixed(2)}%`,e.bottom_change_str=`${y(e.bottom_change).times(100).toFixed(2)}%`,e.bottom=Number(e.bottom),e.bottom_4h=Number(e.bottom_4h)}),x.value=o.histories),C.value=o.total,o.total>v*V&&(v=v+1)},E=o=>{v=o,Q()};return(o,e)=>{const n=u("el-table-column"),S=u("el-button"),F=u("el-popconfirm"),M=u("el-table"),D=u("el-pagination"),U=u("el-option"),I=u("el-select"),b=u("el-switch"),d=u("el-input"),z=u("el-dialog");return k(),g(Y,null,[l("div",Z,[l("div",ee,[e[31]||(e[31]=l("div",{class:"cont absolute left-0 right-0 h-full lg:block hidden"},[l("div",{class:"grid-line left-0"}),l("div",{class:"grid-line right-0"})],-1)),l("div",le,[l("div",te,[l("div",{class:"flex aa-operate-items aa-bb"},[l("div",{class:"aa-operate-item currentItem aa-br",onClick:T},e[25]||(e[25]=[l("img",{src:O,class:"mr-2",alt:""},null,-1),l("div",null,"Add Now",-1)])),e[26]||(e[26]=l("div",{class:"aa-operate-item currentItem"},[l("img",{src:R,class:"mr-2",alt:""}),l("div",null,"Tutorials")],-1))]),s(M,{data:x.value,style:{width:"100%"}},{default:i(()=>[s(n,{label:"Name"},{default:i(t=>[l("div",null,r(t.row.name),1)]),_:1}),s(n,{label:"Wallet",width:"90"},{default:i(t=>e[27]||(e[27]=[l("div",{class:"mx-auto"},"w1",-1)])),_:1}),s(n,{label:"Chain",width:"90"},{default:i(t=>[l("div",ae,r(t.row.chain),1)]),_:1}),s(n,{label:"Strategy",width:"120"},{default:i(t=>[l("div",se,r(t.row.strategy),1)]),_:1}),s(n,{label:"Buy Amount",width:"120"},{default:i(t=>[l("div",null,r(t.row.buy_amount)+" "+r(t.row.chain),1)]),_:1}),s(n,{label:"Buy Methods",width:"120"},{default:i(t=>[l("div",null,r(t.row.buy_market?"Market":`Limit/${t.row.buy_limit_price_change}%`),1)]),_:1}),s(n,{label:"Buy Slippage",width:"120"},{default:i(t=>[l("div",null,r(t.row.buy_slippage)+"%",1)]),_:1}),s(n,{label:"Take Profit",width:"120"},{default:i(t=>[l("div",null,r(t.row.sell_take_profit_price_change)+"% ",1)]),_:1}),s(n,{label:"Stop Loss",width:"120"},{default:i(t=>[l("div",null," -"+r(t.row.sell_stop_loss_price_change)+"% ",1)]),_:1}),s(n,{label:"Sell Slippage",width:"120"},{default:i(t=>[l("div",null,r(t.row.sell_slippage)+"%",1)]),_:1}),s(n,{label:"Auto",width:"90"},{default:i(t=>[l("div",{class:_(["mx-auto",t.row.enable?"switch-open":"switch-close"])},null,2)]),_:1}),s(n,{label:"Operation",width:"230",fixed:"right"},{default:i(t=>[l("div",ie,[l("div",{class:"trading-btn mr-2",onClick:P=>$(t.row)}," Edit ",8,oe),s(F,{width:"220","icon-color":"#626AEF",title:"Are you sure to delete this?",onCancel:()=>{}},{reference:i(()=>e[28]||(e[28]=[l("div",{class:"trading-btn",style:{color:"#bc3c3c"}}," Delete ",-1)])),actions:i(({confirm:P,cancel:j})=>[s(S,{size:"small",onClick:j},{default:i(()=>e[29]||(e[29]=[h("No!")])),_:2},1032,["onClick"]),s(S,{type:"danger",size:"small",onClick:P},{default:i(()=>e[30]||(e[30]=[h(" Yes? ")])),_:2},1032,["onClick"])]),_:1})])]),_:1})]),_:1},8,["data"]),l("div",ne,[s(D,{layout:"prev, pager, next",onChange:E,total:C.value,size:V},null,8,["total"])])])])])]),s(z,{modelValue:p.value,"onUpdate:modelValue":e[24]||(e[24]=t=>p.value=t),"show-close":!1,width:"1240"},{default:i(()=>[l("div",null,[l("div",{class:"aa-dialog-head"},[l("div",{class:"aa-dialog-close"},[l("img",{onClick:B,src:W,class:"w-4",alt:""})])]),l("div",de,[l("div",ue,[l("div",re,[l("div",_e,[f.value==="add"?(k(),g("div",me,[e[32]||(e[32]=l("div",{class:"aa-form-title w-[3.5rem]"},"Wallet",-1)),l("div",pe,[s(I,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.name=t),placeholder:"select Wallet",clearable:"",style:{width:"300px"}},{default:i(()=>[s(U,{key:"true",label:"w1",value:"true"}),s(U,{key:"false",label:"w2",value:"false"})]),_:1},8,["modelValue"])])])):A("",!0),f.value==="edit"?(k(),g("div",ce,e[33]||(e[33]=[l("div",{class:"aa-form-title"},"wallet:",-1),l("div",{class:"aa-form-body"},"w1",-1)]))):A("",!0),l("div",ve,[s(b,{modelValue:a.value.only_alert,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.only_alert=t)},null,8,["modelValue"]),e[34]||(e[34]=l("div",{class:"ml-1 mr-5"},"OnlyAlert",-1)),s(b,{modelValue:a.value.enable,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.enable=t)},null,8,["modelValue"]),e[35]||(e[35]=l("div",{class:"ml-1 mr-5"},"AutoTrade",-1))])]),l("div",be,[l("div",fe,[e[36]||(e[36]=l("div",{class:"aa-form-title w-[3.5rem]"},"Name",-1)),l("div",ye,[s(d,{clearable:"",placeholder:"input Name",modelValue:a.value.name,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.name=t)},null,8,["modelValue"])])]),l("div",ge,[e[37]||(e[37]=l("div",{class:"aa-form-title"},"Link",-1)),l("div",ke,[s(d,{clearable:"",placeholder:"input Link",modelValue:a.value.link,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.link=t)},null,8,["modelValue"])])])])]),l("div",he,[e[42]||(e[42]=l("div",null,"Buy Settings",-1)),l("div",Ve,[l("div",we,[s(b,{modelValue:a.value.dup_buy,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.dup_buy=t)},null,8,["modelValue"]),e[38]||(e[38]=l("div",{class:"ml-1"},"Dup Buy",-1))]),l("div",{class:_(["w-full aa-btn mr-4",a.value.buy_market?"active":""]),onClick:e[6]||(e[6]=t=>a.value.buy_market=!0)}," Market ",2),l("div",{class:_(["w-full aa-btn",a.value.buy_market?"":"active"]),onClick:e[7]||(e[7]=t=>a.value.buy_market=!1)}," Limit ",2)]),l("div",xe,[l("div",Ce,[e[39]||(e[39]=l("div",{class:"aa-form-title lw"},"Limit Price",-1)),l("div",Se,[s(d,{clearable:"",placeholder:"input Limit Price",modelValue:a.value.buy_limit_price_change,"onUpdate:modelValue":e[8]||(e[8]=t=>a.value.buy_limit_price_change=t)},null,8,["modelValue"])])]),l("div",Ue,[l("div",{class:_(["preset-item aa-btn",a.value.buy_limit_price_change=="-10"?"active":""]),onClick:e[9]||(e[9]=t=>c("-10"))}," -10% ",2),l("div",{class:_(["preset-item aa-btn",a.value.buy_limit_price_change=="-20"?"active":""]),onClick:e[10]||(e[10]=t=>c("-20"))}," -20% ",2),l("div",{class:_(["preset-item aa-btn",a.value.buy_limit_price_change=="-30"?"active":""]),onClick:e[11]||(e[11]=t=>c("-30"))}," -30% ",2),l("div",{class:_(["preset-item aa-btn",a.value.buy_limit_price_change=="-40"?"active":""]),onClick:e[12]||(e[12]=t=>c("-40"))}," -40% ",2),l("div",{class:_(["preset-item aa-btn",a.value.buy_limit_price_change=="-50"?"active":""]),onClick:e[13]||(e[13]=t=>c("-50"))}," -50% ",2)])]),l("div",Pe,[l("div",Ae,[e[40]||(e[40]=l("div",{class:"aa-form-title lw"},"Expirex After",-1)),l("div",Ne,[s(d,{clearable:"",placeholder:"input Buy Expirex After",modelValue:a.value.buy_validity,"onUpdate:modelValue":e[14]||(e[14]=t=>a.value.buy_validity=t)},null,8,["modelValue"])])]),l("div",Be,[e[41]||(e[41]=l("div",{class:"aa-form-title"},"Max Buy Slippage",-1)),l("div",Te,[s(d,{clearable:"",placeholder:"input Max Buy Slippage",modelValue:a.value.buy_slippage,"onUpdate:modelValue":e[15]||(e[15]=t=>a.value.buy_slippage=t)},null,8,["modelValue"])])])])]),l("div",$e,[e[48]||(e[48]=l("div",null,[h(" Sell Settings "),l("span",{class:"font-An-400 text-white-70"},"| Take Profit & Stop Loss")],-1)),l("div",Le,[e[45]||(e[45]=l("div",{class:"take-loss-block flex items-center"},[l("div",{class:"take-loss-item"},"Direction"),l("div",{class:"take-loss-item"},"Price"),l("div",{class:"take-loss-item"},"Amount")],-1)),l("div",Qe,[l("div",Ee,[s(b,{modelValue:a.value.sell_take_profit_enable,"onUpdate:modelValue":e[16]||(e[16]=t=>a.value.sell_take_profit_enable=t)},null,8,["modelValue"]),e[43]||(e[43]=l("div",{class:"ml-2"},"Take Profit",-1))]),l("div",Fe,[s(d,{clearable:"",placeholder:"input Take Profit Price",modelValue:a.value.sell_take_profit_price_change,"onUpdate:modelValue":e[17]||(e[17]=t=>a.value.sell_take_profit_price_change=t),type:"number"},null,8,["modelValue"])]),l("div",Me,[s(d,{clearable:"",placeholder:"input Take Profit Amount Percent",modelValue:a.value.sell_take_profit_amount_percent,"onUpdate:modelValue":e[18]||(e[18]=t=>a.value.sell_take_profit_amount_percent=t),type:"number"},null,8,["modelValue"])])]),l("div",De,[l("div",Ie,[s(b,{modelValue:a.value.sell_stop_loss_enable,"onUpdate:modelValue":e[19]||(e[19]=t=>a.value.sell_stop_loss_enable=t)},null,8,["modelValue"]),e[44]||(e[44]=l("div",{class:"ml-2"},"Stop Loss",-1))]),l("div",ze,[s(d,{clearable:"",placeholder:"input Take Profit Price",modelValue:a.value.sell_take_profit_price_change,"onUpdate:modelValue":e[20]||(e[20]=t=>a.value.sell_take_profit_price_change=t),type:"number"},null,8,["modelValue"])]),l("div",je,[s(d,{clearable:"",placeholder:"input Take Profit Amount Percent",modelValue:a.value.sell_take_profit_amount_percent,"onUpdate:modelValue":e[21]||(e[21]=t=>a.value.sell_take_profit_amount_percent=t),type:"number"},null,8,["modelValue"])])])]),l("div",Oe,[l("div",Re,[e[46]||(e[46]=l("div",{class:"aa-form-title lw"},"Expirex After",-1)),l("div",We,[s(d,{clearable:"",placeholder:"input Buy Expirex After",modelValue:a.value.buy_validity,"onUpdate:modelValue":e[22]||(e[22]=t=>a.value.buy_validity=t)},null,8,["modelValue"])])]),l("div",qe,[e[47]||(e[47]=l("div",{class:"aa-form-title"},"Max Sell Slippage",-1)),l("div",He,[s(d,{clearable:"",placeholder:"input Max Sell Slippage",modelValue:a.value.buy_slippage,"onUpdate:modelValue":e[23]||(e[23]=t=>a.value.buy_slippage=t)},null,8,["modelValue"])])])])]),e[49]||(e[49]=l("div",{class:"p-4"},[l("div",{class:"confirm-btn aa-btn"},"Confirm")],-1))])])])]),_:1},8,["modelValue"])],64)}}}),tl=K(Ge,[["__scopeId","data-v-f6fb8a16"]]);export{tl as default};
