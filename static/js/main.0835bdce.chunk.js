(this["webpackJsonpportfolio-reactspa"]=this["webpackJsonpportfolio-reactspa"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(1),a=r.n(n),i=r(4),s=r.n(i),o=(r(11),r(2));var l=function(e){return Object(c.jsxs)("div",{className:"hero",children:[Object(c.jsx)("h1",{children:"brandicurley"}),Object(c.jsx)("ul",{className:"nav nav-tabs",children:["Projects","About","Contact","Resume"].map((function(t){return Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})]})};var j=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("section",{children:Object(c.jsxs)("div",{id:"work",className:"work",children:[Object(c.jsx)("h2",{children:"My Projects"}),Object(c.jsx)("div",{className:"work-grid-wrapper",children:Object(c.jsxs)("div",{className:"work-grid-container",children:[Object(c.jsx)("div",{className:"work-grid-item box2 readme-img",children:Object(c.jsxs)("a",{id:"box2-header",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/galacticnative/README-generator",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"README Gen"}),Object(c.jsx)("h4",{children:"Node.js"})]})}),Object(c.jsx)("div",{className:"work-grid-item box3 notb-img",children:Object(c.jsxs)("a",{id:"box3-header",rel:"noopener noreferrer",target:"_blank",href:"https://jesusmanteca.github.io/News-On-The-Balance/",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"Group Project"}),Object(c.jsx)("h4",{children:"JS; server-side API's"})]})}),Object(c.jsx)("div",{className:"work-grid-item box4 password-img",children:Object(c.jsxs)("a",{id:"box4-header",rel:"noopener noreferrer",target:"_blank",href:"https://galacticnative.github.io/PasswordGenerator-Strong/",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"Password"}),Object(c.jsx)("h4",{children:"JavaScript"})]})}),Object(c.jsx)("div",{className:"work-grid-item box5 weather-img",children:Object(c.jsxs)("a",{id:"box5-header",rel:"noopener noreferrer",target:"_blank",href:"https://galacticnative.github.io/weather-dashboard/",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"Weather"}),Object(c.jsx)("h4",{children:"API, JavaScript"})]})}),Object(c.jsx)("div",{className:"work-grid-item box6 preserve-img",children:Object(c.jsxs)("a",{id:"box6-header",rel:"noopener noreferrer",target:"_blank",href:"https://infinite-bastion-17106.herokuapp.com/ ",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"Group Project2"}),Object(c.jsx)("h4",{children:"Interactive Full-Stack"})]})}),Object(c.jsx)("div",{className:"work-grid-item box7 teamprofile-img",children:Object(c.jsxs)("a",{id:"box6-header",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/galacticnative/TeamProfile-generator",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"Team Generator"}),Object(c.jsx)("h4",{children:"Node.js; Jest"})]})}),Object(c.jsx)("div",{className:"work-grid-item box8 commerce-img",children:Object(c.jsxs)("a",{id:"box6-header",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/galacticnative/E-commerce-ORM",style:{textDecoration:"none"},children:[Object(c.jsx)("h3",{children:"E-Commerce ORM"}),Object(c.jsx)("h4",{children:"Node.js; MySQL"})]})})]})})]})})})},d=r.p+"static/media/cover-image.dff80a75.jpg";var b=function(){return Object(c.jsxs)("section",{className:"about-me",children:[Object(c.jsx)("h1",{id:"about",children:"About Me"}),Object(c.jsx)("p",{children:"My name is Brandi and currently a student with the UofA Coding Bootcamp. Expected certification date is January 20th, 2021. Interested in full-stack web development."}),Object(c.jsx)("img",{src:d,style:{width:"18rem"},alt:"cover"})]})},h=r(5);var x=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),l=s[0],j=s[1],d=r.name,b=r.email,x=r.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."))};return Object(c.jsxs)("section",{id:"contact",className:"contact-box",children:[Object(c.jsx)("h1",{children:"Contact me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||(a(Object(h.a)({},e.target.name,e.target.value)),console.log("Form",r))},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:m})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:m})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:x,onBlur:m})]}),l&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:l})}),Object(c.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var m=function(){return Object(c.jsxs)("footer",{className:"contact-me",children:[Object(c.jsx)("div",{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/galacticnative/",children:"GitHub"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/brandicurley",children:"LinkedIn"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/users/14846810/galacticnative?tab=profile",children:"Stack Overflow"})})]})},u=r.p+"static/media/resume2020.3a59bd6c.pdf";var O=function(){return Object(c.jsxs)("div",{id:"resume",className:"resume",children:[Object(c.jsx)("h3",{children:"My Resume"}),Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:u,children:"Click here to view:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})]})};var g=function(){var e=Object(n.useState)("About"),t=Object(o.a)(e,2),r=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{currentPage:r,handlePageChange:a}),Object(c.jsx)("div",{children:function(){switch(r){case"About":return Object(c.jsx)(b,{});case"Projects":return Object(c.jsx)(j,{});case"Contact":return Object(c.jsx)(x,{});case"Resume":return Object(c.jsx)(O,{});default:return Object(c.jsx)(b,{})}}()}),Object(c.jsx)(m,{})]})},f=function(){return Object(c.jsx)(g,{})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),c(e),n(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[12,1,2]]]);
//# sourceMappingURL=main.0835bdce.chunk.js.map