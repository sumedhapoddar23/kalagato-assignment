(this["webpackJsonpkalagato-assignment"]=this["webpackJsonpkalagato-assignment"]||[]).push([[4],{302:function(A,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return C}));var t,a,r,c,i=e(237),o=e(250),l=e(1),s=e(97),d=e(58),u=e(241),p=e(242),b=p.a.div(t||(t=Object(u.a)(["\n  background: black;\n  color: #ffffff;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  .left {\n    height: calc(100vh);\n  }\n  .react-monaco-editor-container {\n    overflow: auto;\n  }\n  .right {\n    padding: 100px;\n  }\n"]))),f=e(8),O=e(244),j=p.a.div(a||(a=Object(u.a)(["\n  input {\n    width: 100%;\n    height: 72px;\n    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 8%);\n    border-color: #1f1f1f;\n    border-radius: 4px;\n    background-color: #1f1f1f;\n    color: white;\n    font-size: 16px;\n    padding: 0 30px;\n    margin: 15px 0;\n  }\n"]))),h=e(7),v=function(A){var n=A.placeholder,e=A.onChange,t=A.value,a=A.onEnterPress,r=Object(O.a)(A,["placeholder","onChange","value","onEnterPress"]);return Object(h.jsx)(j,{children:Object(h.jsx)("input",Object(f.a)({placeholder:n,value:t,onChange:e,onKeyDown:function(A){"Enter"===A.key&&a(A)}},r))})},x=e(299),g=function(A){var n=A.value,e=A.onChange,t=A.editorDidMount,a=Object(O.a)(A,["value","onChange","editorDidMount"]);return Object(h.jsx)(x.a,Object(f.a)({language:"javascript",theme:"vs-dark",value:n,options:{selectOnLineNumbers:!0},onChange:e,editorDidMount:t},a))},m=p.a.div(r||(r=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  font-size: 14px;\n  .tab {\n    display: flex;\n    padding: 5px;\n    border: 1px solid #1f1f1f;\n    width: fit-content;\n    margin: 0 5px;\n    border-radius: 4px;\n    &:hover {\n      cursor: pointer;\n    }\n    &.selected {\n      border: 2px solid #2b2b2b;\n    }\n    .delete {\n      margin: 0 5px;\n    }\n  }\n  .add {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]))),K=function(A){var n=A.tabs,e=A.onTabClick,t=A.selectedTab,a=A.onDeleteTabClick,r=A.onAddTabClick,c=Object(O.a)(A,["tabs","onTabClick","selectedTab","onDeleteTabClick","onAddTabClick"]);return Object(h.jsxs)(m,Object(f.a)(Object(f.a)({},c),{},{children:[n.map((function(A,n){return Object(h.jsxs)("div",{className:"tab ".concat(n===t?"selected":""),onClick:function(){return e(n)},children:[A.name,n>0&&Object(h.jsx)("div",{className:"delete",onClick:function(){return a(A,n)},children:"x"})]},n.toString())})),Object(h.jsx)("div",{className:"add",onClick:function(){return r()},children:"+"})]}))},T=p.a.div(c||(c=Object(u.a)(["\n  height: calc(100vh - 300px);\n  overflow: auto;\n  background-color: #1f1f1f;\n  padding: 5px 15px 50px;\n  margin: 0 0 10px;\n  list-style: none;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 8px rgb(0 0 0 / 8%);\n\n  .message {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n  }\n  .message:nth-child(odd) {\n    justify-content: start;\n  }\n\n  .message:nth-child(even) {\n    justify-content: flex-end;\n  }\n\n  img {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n  }\n\n  .text {\n    border-radius: 16px;\n    background-color: #404040;\n    display: inline-block;\n    margin: 0 10px;\n    padding: 5px 15px;\n  }\n"]))),V=function(A){var n=A.chatList,e=(A.loading,Object(O.a)(A,["chatList","loading"]));return Object(h.jsx)(T,Object(f.a)(Object(f.a)({},e),{},{children:n.map((function(A,n){return Object(h.jsxs)("div",{className:"message",children:[n%2===0&&Object(h.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""}),Object(h.jsx)("span",{className:"text",children:A}),n%2!==0&&Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:""})]},n.toString())}))}))},C=function(A){Object(o.a)(A);var n=Object(s.b)(),e=Object(l.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),u=Object(i.a)(c,2),p=u[0],f=u[1],O=Object(l.useCallback)((function(A){return n(Object(d.d)(A))}),[n]),j=Object(l.useCallback)((function(A){return n(Object(d.b)(A))}),[n]),x=Object(s.c)((function(A){return A.homepageReducer.tabs})),m=Object(s.c)((function(A){return A.homepageReducer.chatList})),T=Object(s.c)((function(A){return A.homepageReducer.loading}));return Object(h.jsxs)(b,{children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)(K,{tabs:x,onTabClick:function(A){r(A)},selectedTab:a,onDeleteTabClick:function(A,n){O({mode:"delete",tab:A}),n===a&&r(n-1)},onAddTabClick:function(){O({mode:"add",tab:{name:"newscript".concat(x.length+1,".js"),code:"/* This is an empty tab.*/"}}),r(x.length)}}),Object(h.jsx)(g,{width:"90%",height:"100%",value:x[a]?x[a].code:"",onChange:function(A){O({mode:"edit",name:x[a].name,code:A})},editorDidMount:function(A){A.focus()}})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)(V,{loading:T,chatList:m}),Object(h.jsx)(v,{placeholder:"Type message here...",value:p,onChange:function(A){f(A.target.value)},onEnterPress:function(A){j({message:p,code:"(".concat(x[0].code,")('").concat(p,"')")}),f("")}})]})]})}}}]);
//# sourceMappingURL=4.a3febe8e.chunk.js.map