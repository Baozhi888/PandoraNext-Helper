import{u as e,j as t,aM as a,a7 as n,aF as i,ai as s,r,aI as o,v as l,i as d,l as m}from"./index-f7ab5e13.js";import{o as c,P as h,a as u,b as x,d as p,T as j}from"./entity-5338cde5.js";import{R as k,u as y}from"./RobotOutlined-ce8ba9d4.js";import{s as g,u as f}from"./shareService-42d4394b.js";import{S as w}from"./ShareModal-f5cba2b8.js";import{C}from"./CheckOutlined-cb1ec32b.js";import{T as N,E as I}from"./index-8e537eef.js";import{F as S}from"./index-49b42c3a.js";import{R as q,C as v}from"./row-5814c07b.js";import{D as L}from"./DeleteOutlined-81f211ef.js";import"./Pagination-73d267c3.js";import"./index-46accfe0.js";import"./index-f2019e83.js";function b(){const{t:b}=e(),O=[{key:"email",title:b("token.email"),dataIndex:["account","email"],width:120,render:e=>t.jsx(a,{value:e,onClick:t=>c(e,b,t),readOnly:!0})},{key:"uniqueName",title:"Unique Name",dataIndex:"uniqueName",align:"center",width:120},{key:"password",title:b("token.password"),dataIndex:"password",align:"center",width:120},{key:"gpt35Limit",title:b("token.gpt35Limit"),dataIndex:"gpt35Limit",align:"center",width:120,render:e=>-1==e?"无限制":e},{key:"gpt4Limit",title:b("token.gpt4Limit"),dataIndex:"gpt4Limit",align:"center",width:120,render:e=>-1==e?"无限制":e},{key:"refreshEveryday",title:b("token.refreshEveryday"),dataIndex:"refreshEveryday",align:"center",width:120,render:e=>e?t.jsx(C,{}):t.jsx(n,{})},{key:"temporaryChat",title:b("token.temporaryChat"),dataIndex:"temporaryChat",align:"center",width:80,render:e=>e?t.jsx(C,{}):t.jsx(n,{})},{key:"expiresAt",title:b("token.expiresAt"),dataIndex:"expiresAt",align:"center",width:120,render:e=>""==e?"未知":e},{key:"shareToken",title:"Share Token",dataIndex:"shareToken",align:"center",width:120,render:e=>t.jsx(a,{value:e,onClick:t=>c(e,b,t),readOnly:!0})},{key:"comment",title:b("token.comment"),dataIndex:"comment",align:"center",render:e=>t.jsx(N.Text,{style:{maxWidth:500},ellipsis:!0,children:e})},{title:b("token.action"),key:"operation",align:"center",render:(e,a)=>t.jsxs(i.Group,{children:[t.jsx(s,{title:"登录并跳转至对话",placement:"bottom",children:t.jsx(i,{icon:t.jsx(k,{}),type:"primary",onClick:()=>$(a)})}),t.jsx(i,{icon:t.jsx(I,{}),type:"primary",onClick:()=>Z(a)}),t.jsx(h,{title:b("token.deleteConfirm"),okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>B(a),children:t.jsx(i,{icon:t.jsx(L,{}),type:"primary",loading:U==a.accountId+a.uniqueName,danger:!0})})]})}],T=["uniqueName","gpt4Limit","expiresAt","comment","operation"],F=O.map((e=>e.key)),E=u(),A=x(),[z,M]=r.useState(!1),R=y(),[V]=S.useForm(),W=S.useWatch("email",V),D=S.useWatch("uniqueName",V),[K,P]=r.useState(T),[U,_]=r.useState(void 0),[G,Y]=r.useState({formValue:{...p},title:b("token.edit"),show:!1,onOk:e=>{Y((e=>({...e,show:!1})))},onCancel:()=>{Y((e=>({...e,show:!1})))}});r.useEffect((()=>{V.setFieldValue("email",R.get("email"))}),[R]);const Z=e=>{Y({formValue:e,title:b("token.edit"),show:!0,onOk:(e,t)=>{A.mutate(e,{onSuccess:()=>{Y((e=>({...e,show:!1})))},onSettled:()=>t(!1)})},onCancel:()=>{Y((e=>({...e,show:!1})))}})},$=e=>{M(!0),o.info({content:"正在跳转至对话...",key:"chatLogin",duration:5}),g.chatLoginShare(e.uniqueName,e.password).then((e=>{e&&window.open(e,"_blank")})).finally((()=>{M(!1)}))},B=e=>{_(e.accountId+e.uniqueName),E.mutate(e,{onSettled:()=>{_(void 0)}})},{data:H}=f({queryKey:["shareList","chatgpt",W,D],queryFn:()=>g.searchShare("chatgpt",W,D)}),J=O.map((e=>({...e,hidden:!K.includes(e.key)})));return t.jsxs(l,{direction:"vertical",size:"large",className:"w-full",children:[t.jsx(d,{children:t.jsx(S,{form:V,children:t.jsxs(q,{gutter:[16,16],children:[t.jsx(v,{span:6,lg:6,children:t.jsx(S.Item,{label:b("token.email"),name:"email",className:"!mb-0",children:t.jsx(a,{})})}),t.jsx(v,{span:6,lg:6,children:t.jsx(S.Item,{label:"Unique Name",name:"uniqueName",className:"!mb-0",children:t.jsx(a,{})})}),t.jsx(v,{span:12,lg:12,children:t.jsxs("div",{className:"flex justify-end",children:[t.jsx(i,{onClick:()=>{V.resetFields()},children:b("token.reset")}),t.jsx(i,{type:"primary",className:"ml-4",onClick:()=>{V.validateFields().then((e=>{V.submit()}))},children:b("token.search")})]})})]})})}),t.jsx(d,{title:b("token.shareList"),extra:t.jsx(m,{title:"abc",defaultChecked:!0,checkedChildren:"简洁",unCheckedChildren:"详细",onChange:e=>{P(e?[...T]:[...F])}}),children:t.jsx(j,{rowKey:e=>e.accountId+e.uniqueName,size:"small",scroll:{x:"max-content"},pagination:{pageSize:10},columns:J,dataSource:H,loading:z})}),t.jsx(w,{...G})]})}export{b as default};
