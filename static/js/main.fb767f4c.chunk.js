(this.webpackJsonpshresthalucky=this.webpackJsonpshresthalucky||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),l=a.n(c),o=a(5),i=a(8),s=a(9),u=a(10),m=a(11),d=a(14),p=a(2),E=a(17),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"basic"},r.a.createElement("div",{className:"basic__right"},r.a.createElement("div",{className:"basic__image"},r.a.createElement("img",{src:e.avatar_url,alt:e.name}))),r.a.createElement("div",{className:"basic__left card"},r.a.createElement("div",{className:"detail card__detail"},r.a.createElement("div",{className:"detail__name"},e.name),r.a.createElement("div",{className:"detail__username"},r.a.createElement("span",null,r.a.createElement(E.c,null)),r.a.createElement("a",{href:e.html_url},e.login)),r.a.createElement("div",{className:"detail__location"},r.a.createElement("span",null,r.a.createElement(E.b,null)),e.location),r.a.createElement("div",{className:"detail__bio"},r.a.createElement("span",null,r.a.createElement(E.a,null)),e.bio),r.a.createElement("div",{className:"detail__follow clearfix"},r.a.createElement("div",{className:"detail__following"},r.a.createElement("div",{className:"detail__number"},e.following),r.a.createElement("div",null,"Following")),r.a.createElement("div",{className:"detail__followers"},r.a.createElement("div",{className:"detail__number"},e.followers),r.a.createElement("div",null,"Followers"))))))}}]),a}(r.a.Component),v=Object(o.b)((function(e){return{user:e.user}}))(h),f=a(12);var _=function(e){var t=e.kind?"btn--".concat(e.kind):"";switch(e.type){case"link":return r.a.createElement("a",{href:e.to,className:"btn ".concat(t," float--left")},e.children);default:return r.a.createElement("button",{onClick:e.clickHandler,className:"btn ".concat(t)},e.children)}};var b=Object(o.b)((function(e){return{theme:e.theme}}),(function(e){return{toggleTheme:function(){return e({type:"TOGGLE_THEME"})}}}))((function(e){var t="dark"===e.theme?r.a.createElement(f.c,null):r.a.createElement(f.d,null);return r.a.createElement(_,{kind:"round-icon",clickHandler:e.toggleTheme},t)}));var g=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement(d.b,{exact:!0,to:"/",className:"nav__link"},"Home"),r.a.createElement(d.b,{exact:!0,to:"/repos",className:"nav__link"},"Repos"),r.a.createElement(b,null))};var N=function(e){return function(t){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement("main",{className:"content"},r.a.createElement(e,t))))}},O=N(v);var k=function(){return r.a.createElement(O,null)};var y=function(e){var t=e.detail;return r.a.createElement("div",{className:"repo"},r.a.createElement("h2",{className:"repo__name"},r.a.createElement("a",{href:t.html_url,title:t.name},t.name)),r.a.createElement("p",{className:"repo__description"},t.description),r.a.createElement("div",{className:"clearfix"},r.a.createElement(_,{type:"link",to:t.html_url,kind:"blue"},"Code"),t.homepage&&r.a.createElement(_,{type:"link",to:t.homepage,kind:"purple"},"Demo")))},w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState({searchText:e.target.value})},n.state={searchText:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.repos.filter((function(t){return!!t.name.toLowerCase().includes(e.state.searchText.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.changeHandler,value:this.state.searchText,placeholder:"Search",className:"input input--primary"})),t.map((function(e){return r.a.createElement(y,{detail:e,key:e.id})})))}}]),a}(r.a.Component),j=N(Object(o.b)((function(e){return{repos:e.repos}}))(w));var S=function(){return r.a.createElement(j,null)};var T=function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{exact:!0,path:"/repos",component:S}))},L="https://api.github.com/users",U="".concat(L,"/").concat("shresthalucky"),x={baseUrl:L,userUrl:U,reposUrl:"".concat(U,"/repos")};function R(e){if(!e.ok)throw Error(e);return e}var C={getUser:function(){return fetch(x.userUrl).then(R).then((function(e){return e.json()}))},getRepos:function(){return fetch(x.reposUrl).then(R).then((function(e){return e.json()}))}},D=a(27);var H=function(e){return function(t){var a=t.isLoading,n=t.error,c=Object(D.a)(t,["isLoading","error"]);return n?r.a.createElement("div",{className:"outer-wrapper"},r.a.createElement("div",{className:"outer-wrapper__cell"},r.a.createElement("div",{className:"loading"},r.a.createElement(f.a,null),r.a.createElement("p",null,"Error")))):a?r.a.createElement("div",{className:"outer-wrapper"},r.a.createElement("div",{className:"outer-wrapper__cell"},r.a.createElement("div",{className:"loading"},r.a.createElement(f.b,{className:"loading__spinner"}),r.a.createElement("p",null,"Loading")))):r.a.createElement(e,c)}}(T),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userLoading:!0,reposLoading:!0,error:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.body.className=this.props.theme,C.getUser().then((function(t){e.props.setUser(t)})).then((function(){e.setState({userLoading:!1})})).catch((function(){e.setState({error:!0})})),C.getRepos().then((function(t){e.props.setRepos(t)})).then((function(){e.setState({reposLoading:!1})})).catch((function(){e.setState({error:!0})}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("theme",this.props.theme),document.body.className=this.props.theme}},{key:"render",value:function(){return r.a.createElement(H,{isLoading:this.state.userLoading||this.state.reposLoading,error:this.state.error})}}]),a}(r.a.Component),G=Object(o.b)((function(e){return{theme:e.theme}}),(function(e){return{setUser:function(t){return e(function(e){return{type:"SET_USER",payload:e}}(t))},setRepos:function(t){return e(function(e){return{type:"SET_REPOS",payload:e}}(t))}}}))(I),M=a(7);var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("theme")||"dark",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_THEME":return"dark"===e?"light":"dark";default:return e}},F=a(28);var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(F.a)({},e,{},t.payload);default:return e}},P=a(23);var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPOS":return[].concat(Object(P.a)(e),Object(P.a)(t.payload));default:return e}},B=Object(M.b)({theme:X,user:J,repos:V}),q=Object(M.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(39);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:q},r.a.createElement(G,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.fb767f4c.chunk.js.map