(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(179)},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);a(140),a(165);var n=a(1),c=a.n(n),i=a(16),r=a.n(i),l=a(29),o=a.n(l),s=a(68),u=a(69),d=a(79),m=a(70),p=a(80),f=a(6),h=(a(177),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(f.h,{id:t},c.a.createElement(f.i,null,"Example"),n&&c.a.createElement(f.d,{title:"\u0412\u0441\u0451, \u0447\u0442\u043e \u044f \u0441\u0434\u0435\u043b\u0430\u043b \u0437\u0430 3 \u0447\u0430\u0441\u0430:"},c.a.createElement(f.g,{before:n.photo_200?c.a.createElement(f.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(f.d,{title:"Navigation Example"},c.a.createElement(f.c,null,c.a.createElement(f.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"PLS dont touch it!"))))}),E=a(76),b=a.n(E),g=(a(178),a(77)),k=a.n(g),v=a(78),y=a.n(v),P=Object(f.k)(),j=function(e){return c.a.createElement(f.h,{id:e.id},c.a.createElement(f.i,{left:c.a.createElement(f.e,{onClick:e.go,"data-to":"home"},P===f.f?c.a.createElement(k.a,null):c.a.createElement(y.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.j,{activePanel:this.state.activePanel},c.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(j,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(c.a.createElement(w,null),document.getElementById("root"))},76:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[139,1,2]]]);
//# sourceMappingURL=main.60a0edfd.chunk.js.map