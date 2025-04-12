import{d as R,o as I,f as S,h as v,m as T,w as B,a as t,t as a,i as y,j as L,D as x,r as u,G as V,c as $,b as g,n as f,F as A,k as E,u as M,N as P,q as H,s as N,_ as F}from"./index-43brzyNT.js";import{i as O,_ as Z,F as W}from"./index-d33watqn.js";import{b as z}from"./date_time-36B7hF1p.js";import{B as p}from"./big-sGrFn-QA.js";const j="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.87806%209.18805C2.2872%205.08045%205.75928%201.875%209.98165%201.875C13.2494%201.875%2016.3732%203.48684%2017.6558%206.41598C17.7943%206.73217%2017.6502%207.10073%2017.334%207.23919C17.0178%207.37764%2016.6493%207.23355%2016.5108%206.91736C15.4734%204.54816%2012.8789%203.125%209.98165%203.125C6.40569%203.125%203.46777%205.83955%203.12191%209.31195C3.0877%209.65542%202.78152%209.90613%202.43804%209.87192C2.09456%209.83771%201.84385%209.53153%201.87806%209.18805Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.4992%202.625C17.8443%202.625%2018.1242%202.90482%2018.1242%203.25V6.55C18.1242%206.83511%2018.0109%207.10854%2017.8093%207.31014C17.6077%207.51174%2017.3343%207.625%2017.0492%207.625H13.7408C13.3957%207.625%2013.1158%207.34518%2013.1158%207C13.1158%206.65482%2013.3957%206.375%2013.7408%206.375H16.8742V3.25C16.8742%202.90482%2017.154%202.625%2017.4992%202.625ZM17.5619%2010.1281C17.9054%2010.1623%2018.1561%2010.4685%2018.1219%2010.8119C17.7128%2014.9195%2014.2407%2018.125%2010.0183%2018.125C6.75055%2018.125%203.62673%2016.5132%202.34414%2013.584C2.20569%2013.2678%202.34978%2012.8993%202.66597%2012.7608C2.98216%2012.6224%203.35073%2012.7664%203.48918%2013.0826C4.52659%2015.4518%207.12111%2016.875%2010.0183%2016.875C13.5943%2016.875%2016.5322%2014.1605%2016.8781%2010.6881C16.9123%2010.3446%2017.2185%2010.0939%2017.5619%2010.1281Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.95127%2012.375H6.25917C6.60434%2012.375%206.88417%2012.6548%206.88417%2013C6.88417%2013.3452%206.60434%2013.625%206.25917%2013.625H3.125V16.75C3.125%2017.0952%202.84518%2017.375%202.5%2017.375C2.15482%2017.375%201.875%2017.0952%201.875%2016.75V13.45C1.875%2013.45%201.875%2013.45%201.875%2013.45C1.875%2013.3087%201.90287%2013.1687%201.95702%2013.0382C2.01117%2012.9076%202.09053%2012.789%202.19056%2012.6892C2.2906%2012.5893%202.40934%2012.5102%202.53999%2012.4563C2.67043%2012.4024%202.81018%2012.3748%202.95127%2012.375ZM2.95083%2013.625H2.94968V13.625C2.95006%2013.625%202.95045%2013.625%202.95083%2013.625Z'%20fill='white'/%3e%3c/svg%3e",q={class:"trading-item-title"},U={class:"trading-item-cont"},G={class:"trading-item-first"},K=t("div",{class:"t1"},"90D APR",-1),J={class:"t2"},Q=["id"],X={class:"trading-item-sec"},Y={class:"trading-posi"},tt=t("div",{class:"t1"},"Positions",-1),st={class:"val"},et={class:"t3"},it={class:"t2"},nt=t("img",{src:Z},null,-1),at={class:"t3"},ot={class:"t2"},lt={class:"trading-data"},ct=t("div",{class:"t1"},"ROI",-1),dt={class:"t2"},rt=t("div",{class:"t1"},"Win Rate",-1),_t={class:"t2"},ut=t("div",{class:"t1"},"Runtime",-1),vt={class:"t2"},ht={class:"flex"},mt=R({__name:"IntentCard",props:["intent"],setup(s){const r=s,o=c=>{window.open(c,"_blank")};return I(()=>{let c=`chart_${r.intent.custom_signal_id}`;var n=O(document.getElementById(c));n.setOption({tooltip:{show:!1},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},series:[{type:"line",smooth:!0,symbol:"none",data:r.intent.positions,lineStyle:{color:"#71F063"}}],grid:{left:5,right:5,top:5,bottom:5}})}),(c,n)=>{const l=S("router-link");return v(),T(l,{class:"trading-item",to:{name:"intentDetail",params:{groupId:s.intent.group_id,alertId:s.intent.custom_signal_id,topicId:s.intent.topic_id}}},{default:B(()=>[t("div",q,a(s.intent.name),1),t("div",U,[t("div",G,[t("div",null,[K,t("div",J,a(s.intent.apr)+"%",1)]),t("div",{class:"line",id:`chart_${s.intent.custom_signal_id}`},null,8,Q)]),t("div",X,[t("div",Y,[tt,t("div",st,[t("div",et,[t("span",it,a(s.intent.inital_value),1),y(" ETH ")]),nt,t("div",at,[t("span",ot,a(s.intent.current_value),1),y(" ETH ")])])]),t("div",lt,[t("div",null,[ct,t("div",dt,a(L(p)(s.intent.roi).times(100))+"%",1)]),t("div",null,[rt,t("div",_t,a(s.intent.signal_win)+"/"+a(s.intent.signal_total),1)]),t("div",null,[ut,t("div",vt,a(s.intent.runtime),1)])])]),t("div",ht,[t("div",{onClick:n[0]||(n[0]=x(_=>o(`https://t.me/aabot_aabot?start=cts_${s.intent.custom_signal_id}_${s.intent.ID}_true`),["stop","prevent"])),class:"btn aa-btn ml-4 mr-2"}," Subscribe "),t("div",{onClick:n[1]||(n[1]=x(_=>o(`https://t.me/aabot_aabot?start=cts_${s.intent.custom_signal_id}_${s.intent.ID}_false`),["stop","prevent"])),class:"btn aa-btn mr-4 ml-2"}," Copy Trade ")])])]),_:1},8,["to"])}}}),h=s=>(H("data-v-39b5cf63"),s=s(),N(),s),gt={class:"aabot-container bg-home text-white"},ft={class:"aabot-header"},pt={class:"aa-sections relative"},Ct=h(()=>t("div",{class:"cont absolute left-0 right-0 h-full lg:block hidden"},[t("div",{class:"grid-line left-0"}),t("div",{class:"grid-line right-0"})],-1)),wt={class:"aa-section aa-section-trading relative"},bt=h(()=>t("div",{class:"section-titl"},[t("div",{class:"cont pl-6"},"INTENT SUPERMARKET")],-1)),yt={class:"trading-sort cont flex items-center justify-between px-6"},xt={class:"flex"},$t=h(()=>t("div",null,"Sort By:",-1)),kt=h(()=>t("img",{src:j,alt:""},null,-1)),Rt=[kt],It={class:"trading-items cont"},k=100,St=R({__name:"index",setup(s){const r=M(),o=u(!0),c=u(!0);function n(){console.log("User cancelled the loader.")}const l=u("APR");I(async()=>{await C(),o.value=!1});const _=u([]),C=async()=>{let i=await V({page:1,page_size:100,min_hot:1,sort_by:l.value});console.log(i),i.intents!=null&&(i.intents.forEach(e=>{e.runtime=z(Date.now()-new Date(e.first_signal_at).getTime()),e.apr=parseInt(p(e.apr).times(100).toString()),e.inital_value=p(e.buy_initial_amount).div(10**18)}),_.value=i.intents)},w=async()=>{o.value=!0,await C(),o.value=!1};async function m(i){l.value=i,w()}const b=async i=>{r.push({name:"home",query:{scrollTo:i}})};return(i,e)=>{const D=S("VLoading");return v(),$("div",gt,[t("div",ft,[g(P,{onScrollTo:b})]),t("div",pt,[Ct,t("div",wt,[bt,t("div",yt,[t("div",xt,[$t,t("div",{class:f(["type",l.value=="APR"?"sel":""]),onClick:e[0]||(e[0]=d=>m("APR"))},"APR",2),t("div",{class:f(["type",l.value=="ROl"?"sel":""]),onClick:e[1]||(e[1]=d=>m("ROl"))},"ROl",2),t("div",{class:f(["type",l.value=="WinRate"?"sel":""]),onClick:e[2]||(e[2]=d=>m("WinRate"))},"Win Rate",2)]),t("div",{class:"cursor-pointer",onClick:w},Rt)]),t("div",It,[(v(!0),$(A,null,E(_.value,d=>(v(),T(mt,{key:d.ID,intent:d},null,8,["intent"]))),128))])])]),g(D,{active:o.value,color:"#71F063",width:k,height:k,loader:"spinner","background-color":"#000","can-cancel":!0,"on-cancel":n,"is-full-page":c.value},null,8,["active","is-full-page"]),g(W,{onScrollTo:b})])}}}),Vt=F(St,[["__scopeId","data-v-39b5cf63"]]);export{Vt as default};
