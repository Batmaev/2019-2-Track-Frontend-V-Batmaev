(window["webpackJsonptrack-mail-2019"]=window["webpackJsonptrack-mail-2019"]||[]).push([[0],{14:function(e,n,t){var r=t(48).default;e.exports=r()},32:function(e,n,t){e.exports=t.p+"static/media/logo.795fb555.svg"},36:function(e,n,t){e.exports=t(47)},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),o=t(20),i=t(14),u=t.n(i),l=t(11),d=t(28),s=t(29),E=t(34),m=t(30),f=t(35),p=t(12);function v(){var e=Object(l.a)(["\n  font-size: large;\n"]);return v=function(){return e},e}var h=p.a.p(v());var O=function(e){var n=e.increment,t=e.incrementIfOdd,r=e.decrement,c=e.counter;return a.a.createElement("section",null,a.a.createElement(h,null,"To get started, edit ",a.a.createElement("code",null,"src/routes/index.js "),"and save to reload."),a.a.createElement("p",null,"Clicked: ",c," times ",a.a.createElement("button",{onClick:n},"+")," ",a.a.createElement("button",{onClick:r},"-")," ",a.a.createElement("button",{onClick:t},"Increment if odd")))},g=t(9);var b=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).increment=function(){t.props.dispatch({type:g.a.INCREMENT_COUNTER})},t.decrement=function(){t.props.dispatch({type:g.a.DECREMENT_COUNTER})},t.incrementIfOdd=function(){u.a.getState().counter%2!==0&&u.a.dispatch({type:g.a.INCREMENT_COUNTER})},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(O,{counter:this.props.counter,increment:this.increment,decrement:this.decrement,incrementIfOdd:this.incrementIfOdd})}}]),n}(a.a.Component);var N=Object(o.b)((function(e){return{counter:e.counter}}))(b),C=t(32),T=t.n(C),R=t(16);function j(){var e=Object(l.a)(["\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: #fff;\n\n  .redux-logo {\n    animation: "," infinite 20s linear;\n    height: 80px;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return w=function(){return e},e}var k=(new Date).getFullYear(),y=Object(R.b)(w()),I=p.a.div(j(),y);var x=function(){return a.a.createElement(I,null,a.a.createElement("img",{src:T.a,className:"redux-logo",alt:"logo"}),a.a.createElement("h2",null,"Track Mail.Ru, ",k))},M=t(50),U=t(5);function _(){var e=Object(l.a)(["\n  text-align: center;\n"]);return _=function(){return e},e}var D=p.a.div(_()),B=Object(U.a)();var J=function(){return a.a.createElement(M.b,{history:B},a.a.createElement(D,null,a.a.createElement(x,null),a.a.createElement(M.c,null,a.a.createElement(M.a,{path:"/",component:N}))))};t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(a.a.createElement(o.a,{store:u.a},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t(27),c=t(9),o=0;var i=Object(r.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch((arguments.length>1?arguments[1]:void 0).type){case c.a.INCREMENT_COUNTER:return e+1;case c.a.DECREMENT_COUNTER:return e-1;default:return e}}});t.d(n,"default",(function(){return d}));var u=[a.a],l=[r.a.apply(void 0,u)];function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.d.apply(void 0,[i,e].concat(l))}},9:function(e,n,t){"use strict";n.a={INCREMENT_COUNTER:"INCREMENT_COUNTER",DECREMENT_COUNTER:"DECREMENT_COUNTER"}}},[[36,1,2]]]);
//# sourceMappingURL=main.401700c0.chunk.js.map