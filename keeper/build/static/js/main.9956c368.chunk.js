(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(7),c=n.n(i),r=n(8),o=n(1);n(14);var u=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],c=n[1];return document.addEventListener("click",(function(){c("")})),l.a.createElement("div",{className:"search"},l.a.createElement("input",{name:"search",placeholder:"search for note",className:"search-contain",value:i,onChange:function(t){c(t.target.value),e.returnSearch(t.target.value)}}),l.a.createElement("button",{onClick:function(){c("")},className:"search-button"},"clear"))};var d=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement(u,{returnSearch:function(t){return e.onSearch(t)}}),l.a.createElement("h1",null,"Keeper"))},s=n(4),f=n(5);var m=function(e){console.log(e.id),console.log(e.edited.details);var t=Object(a.useState)({title:e.edited.title,details:e.edited.details}),n=Object(o.a)(t,2),i=n[0],c=n[1];function r(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(s.a)({},n,a))}))}return!0===e.edited.editNote&&(c({title:e.edited.title,details:e.edited.details}),e.edited.editNote=!1),l.a.createElement("form",null,l.a.createElement("input",{name:"title",placeholder:"title..",onChange:r,value:i.title}),l.a.createElement("textarea",{name:"details",placeholder:"take a note",onChange:r,value:i.details}),l.a.createElement("button",{onClick:function(t){t.preventDefault(),e.onAdd(i),c({title:"",details:""})}},"Add"))};var E=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.details),l.a.createElement("button",{onClick:function(){return console.log(e.title,e.details),e.onDelete(e.title),e.onEdit(e.title,e.details)}},"Edit"),l.a.createElement("button",{onClick:function(){return e.onDelete(e.title)}},"Delete"))};var h=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),u=Object(o.a)(c,2),s=u[0],f=u[1],h=Object(a.useState)({title:"",details:"",editNote:!1}),v=Object(o.a)(h,2),b=v[0],p=v[1],j=s.length>0?s:n;function O(e){i((function(t){return t.filter((function(t,n){return t.title!=e}))})),f((function(t){return t.filter((function(t,n){return t.title!=e}))}))}function g(e,t){p({title:e,details:t,editNote:!0})}return l.a.createElement("div",{className:"App"},l.a.createElement(d,{onSearch:function(e){f((function(){return n.filter((function(t){if(t.title.includes(e))return t}))}))}}),l.a.createElement(m,{onAdd:function(e){i((function(t){return[].concat(Object(r.a)(t),[e])}))},edited:b}),j.map((function(e,t){return l.a.createElement(E,{key:t,id:t,title:e.title,details:e.details,onDelete:O,onEdit:g})})))};c.a.render(l.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9956c368.chunk.js.map