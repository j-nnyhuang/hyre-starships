(this["webpackJsonpstarships-website"]=this["webpackJsonpstarships-website"]||[]).push([[0],{58:function(e,n,t){e.exports=t.p+"static/media/greg-rakozy-unsplash.c43da60a.jpg"},67:function(e,n,t){e.exports=t(79)},72:function(e,n,t){},73:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var a=t(36),r=t(4),o=t.n(r),l=t(54),c=t.n(l),i=(t(72),t(55)),s=t(56),u=t(66),m=t(65),h=t(57),p=(t(73),t(58)),d=t.n(p),g=t(61),f=t(64);function b(){var e=Object(h.a)(["\n  {\n    allStarships {\n      edges {\n        node {\n          id\n          name\n          filmConnection {\n            films {\n              id\n              title\n              director\n              releaseDate\n            }\n          }\n          pilotConnection {\n            pilots {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return b=function(){return e},e}var v=Object(f.a)(b()),w=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e={width:"100vw",height:"100vh",backgroundImage:"url(".concat(d.a,")"),backgroundSize:"100%",backgroundPosition:"bottom",zIndex:"-1",position:"absolute",top:0};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:e}),o.a.createElement("h1",{style:{fontSize:"8vw",color:"#fff",textAlign:"center"}},"STARSHIPS"))}}]),t}(r.Component);function E(){var e=Object(g.useQuery)(v),n=e.loading,t=e.error,a=e.data;if(n)return o.a.createElement("p",null,"Loading...");if(t)return o.a.createElement("p",null,"There's an error: ",t.message);console.dir(a);var r=a.allStarships.map((function(e){return o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("b",null,e.name)))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Star Wars Films"),r)}function j(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement(E,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(20),O=t(63),y=Object(k.createHttpLink)({uri:"https://graphql.org/swapi-graphql"}),S=Object(O.a)((function(e,n){var t=n.headers,r=localStorage.getItem("token");return{headers:Object(a.a)(Object(a.a)({},t),{},{authorization:r?"Bearer ".concat(r):""})}})),I=new k.ApolloClient({link:S.concat(y),cache:new k.InMemoryCache});c.a.render(o.a.createElement(k.ApolloProvider,{client:I},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.d65b9f86.chunk.js.map