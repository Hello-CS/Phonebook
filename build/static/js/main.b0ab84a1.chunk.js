(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n(3),o=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("form",{children:Object(r.jsxs)("div",{children:["filter: ",Object(r.jsx)("input",{value:e.NewFilter,onChange:function(t){console.log(t.target.value),e.setNewFilter(t.target.value)}})]})})})},i=function(e){if(e.persons.some((function(t){return t.name===e.newFilter}))){var t=e.persons.find((function(t){return t.name===e.newFilter})).name,n=e.persons.find((function(t){return t.name===e.newFilter})).number;return Object(r.jsxs)("div",{children:["Result: ",t," ",n]})}return Object(r.jsx)("div",{children:"Result: "})},u=n(4),a=n.n(u),j="https://lit-river-92425.herokuapp.com/api/persons",l={getPersons:function(){return a.a.get(j)},getCountries:function(){return a.a.get("https://restcountries.eu/rest/v2/all")},postPerson:function(e){return a.a.post(j,e)},deletePerson:function(e){return a.a.delete("".concat(j,"/").concat(e))}},b=function(e){return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={name:e.newName,number:e.newNumber};e.persons.some((function(t){return t.name===e.newName}))&&e.persons.some((function(t){return t.number===e.newNumber}))?alert("".concat(e.newName," and ").concat(e.newNumber," is already added to phonebook")):e.persons.some((function(t){return t.name===e.newName}))?alert("".concat(e.newName," is already added to phonebook")):(l.postPerson(n).then((function(t){e.setPersons(e.persons.concat(n)),console.log(e.persons),e.setSuccessMessage("".concat(n.name,"'s information has been added")),setTimeout((function(){e.setSuccessMessage(null)}),5e3)})),e.setNewName(""),e.setNewNumber(""))},children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:e.newName,onChange:function(t){console.log(t.target.value),e.setNewName(t.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:e.newNumber,onChange:function(t){console.log(t.target.value),e.setNewNumber(t.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Numbers"}),e.persons.map((function(t,n){return Object(r.jsxs)("li",{children:[t.name," ",t.number," ",Object(r.jsx)("button",{type:"submit",onClick:function(n){return function(t,n){console.log(t);var r=e.persons.find((function(e){return e.id===t}));window.confirm("Will you delete ".concat(r.name,"'s contact?"))&&l.deletePerson(t).then((function(n){var r=e.persons.filter((function(e){return e.id!==t}));e.setPersons(r)}))}(t.id)},children:"delete"})]},t.id)}))]})},O=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("form",{children:Object(r.jsxs)("div",{children:["filter: ",Object(r.jsx)("input",{value:e.newCountryFilter,onChange:function(t){console.log(t.target.value),e.setNewCountryFilter(t.target.value)}})]})})})},m=function(e){var t=e.countries.filter((function(t){return t.name.includes(e.newCountryFilter)}));return""===e.newCountryFilter?Object(r.jsx)("div",{}):t.length>10?Object(r.jsx)("div",{children:"Too many matches. Be more specific"}):t.length<=10&&t.length>1?Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)("li",{children:e.name},e.name)}))}):1===t.length?Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:["capital ",e.capital]}),Object(r.jsxs)("div",{children:["population ",e.population]}),Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"languages"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[" ",e.languages.map((function(e,t){return Object(r.jsx)("li",{children:e.name})}))]}),Object(r.jsx)("img",{alt:"flag",height:"100",width:"100",style:{border:"solid 1px"},src:e.flag})]})}))}):Object(r.jsx)("div",{})},h=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{className:"error",children:t})},f=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),n=t[0],u=t[1],a=Object(s.useState)(""),j=Object(c.a)(a,2),f=j[0],x=j[1],p=Object(s.useState)(""),v=Object(c.a)(p,2),g=v[0],w=v[1],N=Object(s.useState)(""),y=Object(c.a)(N,2),F=y[0],C=y[1],P=Object(s.useState)([]),S=Object(c.a)(P,2),k=S[0],E=S[1],M=Object(s.useState)(""),B=Object(c.a)(M,2),J=B[0],R=B[1],T=Object(s.useState)(null),D=Object(c.a)(T,2),I=D[0],W=D[1];return Object(s.useEffect)((function(){l.getPersons().then((function(e){u(e.data)}))}),[n]),Object(s.useEffect)((function(){l.getCountries().then((function(e){E(e.data)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)("br",{}),Object(r.jsx)(o,{newFilter:F,setNewFilter:C}),Object(r.jsx)("br",{}),Object(r.jsx)(i,{persons:n,newFilter:F}),Object(r.jsx)("br",{}),Object(r.jsx)(h,{message:I}),Object(r.jsx)("br",{}),Object(r.jsx)(b,{persons:n,setPersons:u,newName:f,setNewName:x,newNumber:g,setNewNumber:w,setSuccessMessage:W}),Object(r.jsx)("br",{}),Object(r.jsx)(d,{persons:n,setPersons:u}),Object(r.jsx)("br",{}),Object(r.jsx)(O,{newCountryFilter:J,setNewCountryFilter:R}),Object(r.jsx)("br",{}),Object(r.jsx)(m,{countries:k,newCountryFilter:J}),Object(r.jsx)("br",{})]})},x=n(14),p=n.n(x);n(38);p.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b0ab84a1.chunk.js.map