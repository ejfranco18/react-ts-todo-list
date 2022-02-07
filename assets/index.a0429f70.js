var O=Object.defineProperty,P=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))G.call(t,s)&&g(e,s,t[s]);if(f)for(var s of f(t))L.call(t,s)&&g(e,s,t[s]);return e},y=(e,t)=>P(e,j(t));import{s as l,j as a,F as z,a as H,b as c,i as W,U as K,D as U,c as p,d as q,m as J,I as Q,N as x,f as V,T as X,E as Y,r as h,u as Z,e as _,g as ee,h as te,R as se,k as ae,P as oe}from"./vendor.41e5dfdd.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};re();const ne=l.button`
  position: relative;
  display: block;
  width: 280px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({theme:e})=>e.colors.lightGreen};
  border: solid 1px transparent;
  color: ${({theme:e})=>e.colors.onyx};
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  margin: 10px auto;

  &:hover:enabled {
    background-color: ${({theme:e})=>e.colors.cambrigeBlue};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.lightMing};
    cursor: none;
    color: ${({theme:e})=>e.colors.grey};
  }
`,T=({text:e,disabled:t,onClick:s})=>a(ne,{onClick:s,disabled:t,children:e}),v=l.div`
  margin: 20px;
  width: 90%;
`,de=l.input`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 25px;
  border: none;
  color: ${({theme:e})=>e.colors.darkGrey};
  display: block;
  font-family: Poppins-Medium;
  font-size: 15px;
  height: 50px;
  line-height: 1.5;
  padding: 0 25px;
  width: 100%;

  &:focus-visible {
    outline: thick double ${({theme:e})=>e.colors.blue};;
  }
`,S=({type:e,name:t,placeholder:s,value:r,onChange:o})=>a(v,{children:a(de,{type:e,name:t,placeholder:s,value:r,onChange:o})}),ce={colors:{blue:"#32a1ce",cambrigeBlue:"#ABC4AB",darkGrey:"#666666",grey:"#bbbbbb",lightGreen:"#7ADFBB",lightMing:"#028585",ming:"#006775",onyx:"#36313D",orange:"#ee714f",persianGreen:"#06B49A",platinum:"#EAEAEA",transparentWhite:"rgba(255, 253, 249, 0.4)",white:"#e6e6e6"}},le=({children:e})=>a(z,{theme:ce,children:e}),ie=l.input`
  display: inline-block;
`,ue=({checked:e,completeAction:t})=>a(H,{children:a(ie,{type:"checkbox",checked:e,onChange:t})}),pe=l.div`
  background: ${({theme:e})=>e.colors.transparentWhite};
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  width: 200px;

  button {
    background: ${({theme:e})=>e.colors.orange};
    width: 120px;
  }

  p {
    color: ${({theme:e})=>e.colors.onyx};
  }

  span {
    color: ${({theme:e})=>e.colors.onyx};
    font-weight: bold;
  }
`,he=({task:e,deleteTask:t,completeTask:s})=>c(pe,{children:[c("div",{children:[c("p",{children:[a("span",{children:"Name:"})," ",e.taskName]}),c("p",{children:[a("span",{children:"Hours:"})," ",e.hours]}),c("p",{children:[a("span",{children:"Details:"})," ",e.details]}),c("div",{children:[a("span",{children:"Completed:"}),a(ue,{checked:e.completed,completeAction:s})]})]}),a(T,{onClick:t,text:"Delete"})]}),ke=l.textarea`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 25px;
  border: none;
  color: ${({theme:e})=>e.colors.darkGrey};
  display: block;
  font-family: Poppins-Medium;
  font-size: 15px;
  height: 100px;
  line-height: 1.5;
  padding: 15px 25px;
  width: 100%;

  &:focus-visible {
    outline: thick double ${({theme:e})=>e.colors.blue};
  }
`,me=({name:e,placeholder:t,value:s,onChange:r})=>a(v,{children:a(ke,{name:e,placeholder:t,value:s,onChange:r})}),fe={apiKey:"AIzaSyB8MyJvHkAXPloxWRQTgIkTESaVnvsg4yw",authDomain:"todo-db-16f9c.firebaseapp.com",projectId:"todo-db-16f9c",storageBucket:"todo-db-16f9c.appspot.com",messagingSenderId:"279660620304",appId:"1:279660620304:web:92e8a31d3ef7abec84f895"},ge=W(fe),k=K(ge),w={tasks:[]},D=U(k,"tasks"),m=p("getTasks",async()=>(await J(D)).docs.map(s=>({id:s.id,taskName:s.data().taskName,hours:s.data().hours,details:s.data().details,completed:s.data().completed}))),A=p("addTasks",async e=>{const t=await Q(D,e);return y(b({},e),{id:t.id})}),C=p("updateTasks",async e=>{console.log("slice update",e);const t=x(k,"tasks",e),r=!(await V(t)).data().completed;return await X(t,{completed:r}),{id:e,status:r}}),B=p("deleteTasks",async e=>{console.log("slice delete",e);const t=x(k,"tasks",e);return await Y(t),e}),be=q({name:"task",initialState:w,reducers:{addTask:(e,t)=>{e.tasks.push(t.payload)},deleteTask:(e,t)=>{e.tasks=e.tasks.filter(s=>s.id!==t.payload)}},extraReducers(e){e.addCase(m.fulfilled,(t,s)=>{t.tasks=s.payload}).addCase(m.rejected,t=>{t.tasks=[]}).addCase(A.fulfilled,(t,s)=>{t.tasks.push(s.payload)}).addCase(C.fulfilled,(t,s)=>{const r=t.tasks.find(o=>o.id===s.payload.id);r.completed=s.payload.status}).addCase(B.fulfilled,(t,s)=>{t.tasks=t.tasks.filter(r=>r.id!==s.payload)})}}),ye=e=>e.tasks;var xe=be.reducer;const Te=()=>{const[e,t]=h.exports.useState(""),[s,r]=h.exports.useState(0),[o,n]=h.exports.useState(""),i=Z(ye).tasks,u=_();h.exports.useEffect(()=>{u(m())},[u]);const N=d=>{t(d.target.value)},$=d=>{r(Number(d.target.value))},I=d=>{n(d.target.value)},E=()=>{u(A({id:"",taskName:e,hours:s,details:o,completed:!1})),t(""),r(0),n("")},M=d=>{u(B(d))},R=d=>{u(C(d))};return a(le,{children:c("main",{children:[a("h1",{children:"TODO LIST"}),c("div",{className:"form-wrapper",children:[a(S,{type:"text",name:"taskName",placeholder:"Task",value:e,onChange:N}),a(S,{type:"number",name:"hours",value:s,onChange:$}),a(me,{name:"details",placeholder:"Details",value:o,onChange:I}),a(T,{onClick:E,text:"Add task",disabled:!(e&&s&&o)})]}),a("div",{className:"tasks-container",children:i.map((d,F)=>a(he,{task:d,deleteTask:()=>M(d.id),completeTask:()=>R(d.id)},F))})]})})},ve=ee({tasks:xe}),Se={tasks:w},we=te({reducer:ve,preloadedState:Se});se.render(a(ae.StrictMode,{children:a(oe,{store:we,children:a(Te,{})})}),document.getElementById("root"));
