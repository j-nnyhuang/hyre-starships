(this["webpackJsonpstarships-website"]=this["webpackJsonpstarships-website"]||[]).push([[0],{61:function(e,n,t){e.exports=t.p+"static/media/starships.ee107f6b.png"},69:function(e,n,t){e.exports=t(82)},74:function(e,n,t){},76:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),i=t(57),l=t.n(i),o=(t(74),t(58)),c=t(59),s=t(68),m=t(67),u=t(60),p=t(61),d=t.n(p),h=(t(75),t(76),t(86)),f=t(85),g=t(84),E=t(64),v=t(66);function y(){var e=Object(u.a)(["\n  {\n    allStarships {\n      edges {\n        node {\n          id\n          name\n          filmConnection {\n            films {\n              id\n              title\n              director\n              releaseDate\n            }\n          }\n          pilotConnection {\n            pilots {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var w=Object(v.a)(y()),b=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#000",textAlign:"center",paddingTop:"25vh"}},r.a.createElement("div",{style:{width:"100vw"}},r.a.createElement("img",{src:d.a,style:{width:"50vw"}})),r.a.createElement(h.a,{href:"#starships",variant:"secondary"},"browse")))}}]),t}(a.Component);function k(){var e=Object(E.useQuery)(w),n=e.loading,t=e.error,a=e.data;if(n)return r.a.createElement("p",null,"Loading...");if(t)return r.a.createElement("p",null,"There's an error: ",t.message);console.log(a);var i=a.allStarships.edges.map((function(e){return r.a.createElement("div",{key:e.node.id},r.a.createElement(f.a,{bg:"dark",className:"mb-2",style:{width:"15rem",margin:"15px"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,{style:{color:"#ffffff"}},e.node.name),r.a.createElement(f.a.Text,{style:{color:"#000"}},r.a.createElement("h5",null," This starship appears in:"),e.node.filmConnection.films.map((function(e){return r.a.createElement("p",{style:{marginBottom:"0"}},e.title)})),r.a.createElement("h5",{style:{marginTop:"5px"}}," ","This starship is piloted by:"),e.node.pilotConnection.pilots.map((function(e){return r.a.createElement("p",{style:{marginBottom:"0"}},e.name)}))))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:"#000"}},r.a.createElement(g.a,{style:{justifyContent:"center"}},i)),";")}function C(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{id:"starships"},r.a.createElement(k,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(24),x=new j.createHttpLink({uri:"https://swapi-graphql.netlify.app/.netlify/functions/index"}),O=new j.ApolloClient({link:x,cache:new j.InMemoryCache});l.a.render(r.a.createElement(j.ApolloProvider,{client:O},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.17479851.chunk.js.map