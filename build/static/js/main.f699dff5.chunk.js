(this["webpackJsonpcity-mobil"]=this["webpackJsonpcity-mobil"]||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(80),a(11)),o=a(12),s=a(14),u=a(13),m=(a(81),a(41)),d=a(32),f=a(28),b=a(74),p=a(37),h=a(36),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,{href:"#"},"\u0422\u0430\u0440\u0438\u0444\u044b \u0442\u0430\u043a\u0441\u0438"),r.a.createElement(d.a.Toggle,{"aria-controls":"navbarScroll"}),r.a.createElement(d.a.Collapse,{id:"navbarScroll"},r.a.createElement(m.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0},r.a.createElement(m.a.Link,{href:"#action1"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),r.a.createElement(m.a.Link,{href:"#action2"},"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"),r.a.createElement(f.a,{title:"\u041f\u0440\u043e\u0447\u0435\u0435",id:"navbarScrollingDropdown"},r.a.createElement(f.a.Item,{href:"#action3"},"Action"),r.a.createElement(f.a.Item,{href:"#action4"},"Another action"),r.a.createElement(f.a.Divider,null),r.a.createElement(f.a.Item,{href:"#action5"},"Something else here"))),r.a.createElement(b.a,{className:"d-flex"},r.a.createElement(p.a,{type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443",className:"mr-2","aria-label":"Search"}),r.a.createElement(h.a,{variant:"outline-success"},"\u0418\u0441\u043a\u0430\u0442\u044c")))))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{className:"footer-link",href:"#action1"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{className:"footer-link",href:"#action2"},"\u041e \u043d\u0430\u0441")),r.a.createElement("li",{className:"footer-list-item"},r.a.createElement("a",{className:"footer-link",href:"#action3"},"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e"))))}}]),a}(n.Component),j=a(30),O=a(73),y=a.n(O),g=(a(104),a(23)),N=r.a.createRef(),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(t){t.preventDefault(),e.props.updateRequest(N.current.value)}},r.a.createElement("input",{className:"table-search",placeholder:"\u041f\u043e\u0438\u0441\u043a",ref:N}),r.a.createElement("button",{type:"submit",className:"search-btn"},"\u041d\u0430\u0439\u0442\u0438")))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"display-wrapper"},r.a.createElement("p",{className:"display-description"},"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438: ",this.props.selected))}}]),a}(n.Component);var S=function(e,t){var a=[];return e.forEach((function(e){var n,r={};r.markAndModel=e.mark+" "+e.model,"object"===typeof e.tariffs&&(n=function(e,t,a){var n=Object.keys(t.tariffs);return a.forEach((function(a){n.forEach((function(n){a===n?e[a]=t.tariffs[a].year:void 0===e[a]&&(e[a]="-")}))})),e}(r,e,t)),a.push(n)})),a};var A=function(e,t){var a=[];return e=e.map((function(e){var n=Object.values(e);(n=n.filter((function(e){return e.toString().toLowerCase().includes(t.trim().toLowerCase())}))).length>0&&a.push(e)})),a},T=["\u042d\u043a\u043e\u043d\u043e\u043c","\u041a\u043e\u043c\u0444\u043e\u0440\u0442","\u041a\u043e\u043c\u0444\u043e\u0440\u0442+","\u041c\u0438\u043d\u0438\u0432\u0435\u043d","\u0411\u0438\u0437\u043d\u0435\u0441"],q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getCars=function(){var e=this;y.a.get("https://city-mobil.ru/api/cars").then((function(t){e.setState({cars:t.data.cars})}))},n.updateRequest=function(e){n.setState({request:e})},n.state={request:"",cars:[],selected:"",options:{onRowClick:function(e){e=Object.values(e).filter((function(e){return"-"!==e})).join(" "),this.setState({selected:e+" \u0433\u043e\u0434"})}.bind(Object(j.a)(n))}},n.getCars=n.getCars.bind(Object(j.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCars()}},{key:"render",value:function(){return r.a.createElement("div",{className:"table-container"},r.a.createElement(C,{updateRequest:this.updateRequest}),r.a.createElement(g.BootstrapTable,{data:A(S(this.state.cars,T),this.state.request),options:this.state.options,bordered:!0,hover:!0},r.a.createElement(g.TableHeaderColumn,{isKey:!0,dataSort:!0,dataField:"markAndModel"},"\u041c\u0430\u0440\u043a\u0430 \u0438 \u043c\u043e\u0434\u0435\u043b\u044c"),r.a.createElement(g.TableHeaderColumn,{dataSort:!0,dataAlign:"center",dataField:"\u042d\u043a\u043e\u043d\u043e\u043c"},"\u042d\u043a\u043e\u043d\u043e\u043c"),r.a.createElement(g.TableHeaderColumn,{dataSort:!0,dataAlign:"center",dataField:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442"},"\u041a\u043e\u043c\u0444\u043e\u0440\u0442"),r.a.createElement(g.TableHeaderColumn,{dataSort:!0,dataAlign:"center",dataField:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442+"},"\u041a\u043e\u043c\u0444\u043e\u0440\u0442+"),r.a.createElement(g.TableHeaderColumn,{dataSort:!0,dataAlign:"center",dataField:"\u041c\u0438\u043d\u0438\u0432\u0435\u043d"},"\u041c\u0438\u043d\u0438\u0432\u0435\u043d"),r.a.createElement(g.TableHeaderColumn,{dataSort:!0,dataAlign:"center",dataField:"\u0411\u0438\u0437\u043d\u0435\u0441"},"\u0411\u0438\u0437\u043d\u0435\u0441")),r.a.createElement(k,{selected:this.state.selected}))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("h2",null,"SideBar"))}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{className:"main"},r.a.createElement(w,null),r.a.createElement(q,null)),r.a.createElement(v,null))}}]),a}(n.Component);l.a.render(r.a.createElement(H,null),document.getElementById("root"))},75:function(e,t,a){e.exports=a(144)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.f699dff5.chunk.js.map