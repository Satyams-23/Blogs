(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(9227)}])},9227:function(e,a,t){"use strict";t.r(a);var n=t(5893),l=t(7294),s=t(4649),r=t.n(s);a.default=()=>{let[e,a]=(0,l.useState)(""),[t,s]=(0,l.useState)(""),[i,c]=(0,l.useState)(""),[o,m]=(0,l.useState)(""),u=e=>{"phone"==e.target.name?c(e.target.value):"email"==e.target.name?s(e.target.value):"desc"==e.target.name?m(e.target.value):"name"==e.target.name&&a(e.target.value)};return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsx)("h1",{children:"Contact Us"}),(0,n.jsxs)("form",{onSubmit:n=>{n.preventDefault(),fetch("http://localhost:3000/api/postcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:i,name:e,email:t,desc:o})}).then(e=>e.text()).then(e=>{alert("Thanks for contacting us"),c(""),a(""),m(""),s("")}).catch(e=>{console.error("Error:",e)})},children:[(0,n.jsxs)("div",{className:r().mb3,children:[(0,n.jsx)("label",{htmlFor:"name",className:r().formlabel,children:"Enter your name"}),(0,n.jsx)("input",{className:r().input,type:"text",value:e,onChange:u,id:"name",name:"name","aria-describedby":"emailHelp"})]}),(0,n.jsxs)("div",{className:r().mb3,children:[(0,n.jsx)("label",{htmlFor:"email",className:r().formlabel,children:"Email address"}),(0,n.jsx)("input",{className:r().input,type:"email",value:t,onChange:u,name:"email",id:"email","aria-describedby":"emailHelp"}),(0,n.jsx)("div",{id:"emailHelp",className:r().formtext,children:"We will never share your email with anyone else."})]}),(0,n.jsxs)("div",{className:r().mb3,children:[(0,n.jsx)("label",{htmlFor:"phone",className:r().formlabel,children:"Phone"}),(0,n.jsx)("input",{className:r().input,type:"phone",value:i,onChange:u,name:"phone",id:"phone",required:!0})]}),(0,n.jsxs)("div",{className:r().mb3,children:[(0,n.jsx)("label",{className:r().formlabel,htmlFor:"desc",children:"Elaborate your concern"}),(0,n.jsx)("textarea",{className:r().input,value:o,onChange:u,name:"desc",id:"desc"})]}),(0,n.jsx)("button",{type:"submit",className:r().btn,children:"Submit"})]})]})}},4649:function(e){e.exports={container:"Contact_container__FDqBP",mb3:"Contact_mb3__Qp_u4",input:"Contact_input__OnW0C",formlabel:"Contact_formlabel__pJTyj",formtext:"Contact_formtext__ZdqLQ",btn:"Contact_btn__DltpO"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);