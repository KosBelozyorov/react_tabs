(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(8),r=a.n(i),s=a(2),l=a(3),o=a(5),u=a(4),m=a(6),b=a(1),p=a.n(b),v=(p.a.shape({title:p.a.string,content:p.a.string}),p.a.arrayOf(p.a.shape({title:p.a.string,content:p.a.string}).isRequired).isRequired,a(16),function(t){var e=t.title,a=t.isActive,n=t.onClick,i=a?"tabs-list__item tabs-list__item--active":"tabs-list__item";return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:i,key:e,onClick:function(){return n(e)}},e))}),f=(a(17),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).onClickTabItem=function(t){return a.setState({activeTab:t})},a.state={activeTab:a.props.tabs[0].title},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.tabs;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs"},c.a.createElement("ul",{className:"tabs-list"},e.map(function(e){var a=e.title,n=e.content,i=t.onClickTabItem,r=t.state.activeTab;return c.a.createElement(v,{key:a,title:a,content:n,isActive:a===r,onClick:i})})),c.a.createElement("div",{className:"tab-content"},e.map(function(e){var a=e.title,n=e.content;if(a===t.state.activeTab)return c.a.createElement("p",{key:a,className:"tab-content__item"},n)}))))}}]),e}(n.Component)),h=(a(18),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"".concat(t.length," tabs")),c.a.createElement(f,{tabs:t}))}}]),e}(n.Component));r.a.render(c.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.b8ba4d62.chunk.js.map