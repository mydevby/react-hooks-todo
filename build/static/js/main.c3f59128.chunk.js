(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(14),c=n.n(r),l=n(50),u=n.n(l),i=n(82),m=n.n(i),d=n(35),s=function(e){var t=e.saveTodo,n=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1];return{value:n,onChange:function(e){o(e.target.value)},reset:function(){return o("")}}}(),r=n.value,c=n.reset,l=n.onChange;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),c()}},o.a.createElement(m.a,{className:"input",variant:"outlined",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",margin:"normal",onChange:l,value:r}))},f=n(48),v=n.n(f),E=n(84),p=n.n(E),b=n(87),g=n.n(b),h=n(86),T=n.n(h),w=n(85),j=n.n(w),N=n(49),O=n.n(N),k=n(88),C=n.n(k),S=function(e){var t=e.todos,n=e.deleteTodo;return o.a.createElement(v.a,null,t.map(function(e,t){return o.a.createElement(p.a,{key:t.toString(),dense:!0,button:!0},o.a.createElement(j.a,{tabIndex:-1,disableRipple:!0}),o.a.createElement(T.a,{className:"text",primary:e}),o.a.createElement(g.a,null,o.a.createElement(O.a,{"aria-label":"Delete",onClick:function(){n(t)}},o.a.createElement(C.a,null))))}))},x=n(89),y=(n(254),function(){var e=function(e){var t=Object(a.useState)(e),n=Object(d.a)(t,2),o=n[0],r=n[1];return{todos:o,addTodo:function(e){r([].concat(Object(x.a)(o),[e]))},deleteTodo:function(e){var t=o.filter(function(t,n){return n!==e});r(t)}}}([]),t=e.todos,n=e.addTodo,r=e.deleteTodo;return o.a.createElement("main",{className:"main"},o.a.createElement("section",{className:"todo"},o.a.createElement(u.a,{className:"title",component:"h1",variant:"h2"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),o.a.createElement(s,{saveTodo:function(e){var t=e.trim();t.length>0&&n(t)}}),o.a.createElement(S,{todos:t,deleteTodo:r})))}),D=document.getElementById("root");c.a.render(o.a.createElement(y,null),D)},90:function(e,t,n){e.exports=n(256)}},[[90,2,1]]]);
//# sourceMappingURL=main.c3f59128.chunk.js.map