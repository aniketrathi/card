(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{18:function(e,a,t){},19:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var i=t(1),c=t(2),n=t.n(c),s=t(11),r=t.n(s),j=(t(18),t(19),t(12)),g=t(4),d=t(24),o=t(25),m=[{id:0,image:"/images/naruto.jpg"},{id:1,image:"/images/sasuke.png"},{id:2,image:"/images/kakashi.png"},{id:3,image:"/images/sakura.jpg"},{id:4,image:"/images/hinata.jpg"},{id:5,image:"/images/neji.jpg"},{id:6,image:"/images/shikamaru.jpg"},{id:7,image:"/images/gara.jpg"},{id:8,image:"/images/rocklee.jpg"},{id:9,image:"/images/pervysage.jpg"}];function b(e){var a=Object(c.useState)(m),t=Object(g.a)(a,1)[0],n=Object(c.useState)([]),s=Object(g.a)(n,2),r=s[0],b=s[1],u=Object(c.useState)([]),l=Object(g.a)(u,2),O=l[0],h=l[1],f=Object(c.useState)(0),p=Object(g.a)(f,2),x=p[0],v=p[1],k=Object(c.useState)(0),S=Object(g.a)(k,2),N=S[0],C=S[1],w=function(){for(var e=[],a=t.length;e.length<3;){var i=Math.floor(Math.random()*a);-1===e.indexOf(i)&&e.push(i)}for(var c=[],n=0;n<3;n++)c.push(t[e[n]]);b(c)};Object(c.useEffect)((function(){w()}),[t]);var F=r.map((function(e){return Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)(d.a,{children:Object(i.jsx)(o.a,{id:e.id,onClick:function(e){return function(e){var a=e.target.id;-1===O.indexOf(a)?(h([].concat(Object(j.a)(O),[a])),w(),v(x+1)):(alert("Believe it! Your score is :"+x),N<x&&C(x),v(0),h([]))}(e)},src:"/card/".concat(e.image),className:"look"})})},e.id)}));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("h2",{children:["Score: ",x]}),Object(i.jsxs)("h2",{children:["Highscore: ",N]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"row",children:F})]})}var u=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("h1",{children:"Memory Card Game"})}),Object(i.jsx)(b,{})]})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(a){var t=a.getCLS,i=a.getFID,c=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),i(e),c(e),n(e),s(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),l()}},[[22,1,2]]]);
//# sourceMappingURL=main.5dc82abe.chunk.js.map