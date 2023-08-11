/*! For license information please see 884.9779584e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{454:function(t,e,r){r.d(e,{a:function(){return u}});var n,o=r(975),i=r(766),a=r(867).ZP.div(n||(n=(0,i.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),c=r(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},884:function(t,e,r){r.r(e);var n=r(439),o=r(454),i=r(791),a=r(689),c=r(87),u=r(390),s=r(558),l=r(184);e.default=function(){var t,e,r=(0,a.UO)().movieId,f=(0,i.useState)(!0),h=(0,n.Z)(f,2),p=h[0],d=h[1],v=(0,i.useState)(null),y=(0,n.Z)(v,2),g=y[0],x=y[1],m=(0,a.TH)();console.log("location MovieDetails",m);var w=(0,i.useRef)(null!==(t=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies");return console.log("backLinkRef",w),(0,i.useEffect)((function(){r&&(0,u.Y5)("/movie",r).then((function(t){console.log(t),x(t)})).catch(u.NI).finally((function(){return d(!1)}))}),[r]),(0,l.jsxs)(s.dE,{children:[(0,l.jsx)(s.Fg,{to:w.current,children:"<<<< BACK"}),(0,l.jsx)("h2",{children:"Movie Details:"}),p&&(0,l.jsx)(o.a,{}),g&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.O2,{children:[(0,l.jsx)("img",{src:"http://image.tmdb.org/t/p/w342".concat(g.poster_path),alt:g.title,width:"200"}),(0,l.jsxs)(s.UE,{children:[(0,l.jsx)("h3",{children:g.original_title}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Release date:"})," ",g.release_date]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Genres:"})," ",g.genres.map((function(t){return"".concat(t.name.toLowerCase()," | ")}))]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Ranking:"})," ",g.vote_average]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Overview:"})," ",g.overview]})]})]}),(0,l.jsx)("h3",{children:"Additional information:"}),(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(a.j3,{})})]})]})}},558:function(t,e,r){r.d(e,{Fg:function(){return h},O2:function(){return p},UE:function(){return d},Z:function(){return v},dE:function(){return f}});var n,o,i,a,c,u=r(766),s=r(867),l=r(87),f=s.ZP.section(n||(n=(0,u.Z)(["\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n"]))),h=(0,s.ZP)(l.rU)(o||(o=(0,u.Z)(["\n  color: red;\n  font-weight: 700;\n  padding: 6px;\n  border: 1px solid red;\nwidth: 100px;\n  &.active {\n    color: orange;\n  }\n"]))),p=s.ZP.div(i||(i=(0,u.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),d=s.ZP.div(a||(a=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nwidth: 400px;\n"]))),v=s.ZP.ul(c||(c=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nfont-weight: 500;\ntext-decoration: underline;\n"])))},390:function(t,e,r){r.d(e,{Hx:function(){return x},NI:function(){return w},Pu:function(){return s},Y5:function(){return d},bI:function(){return h},uV:function(){return y},vw:function(){return l}});var n=r(861),o=r(243),i=r(686);function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(Z([])));x&&x!==e&&r.call(x,i)&&(y=x);var m=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function Z(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),s(m,u,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var c="https://api.themoviedb.org/3",u="43596775cda6588db61d2519acdb98b6",s={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c).concat(e,"?api_key=").concat(u),t.next=3,o.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function t(e,r){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(e,"?api_key=").concat(u,"&query=").concat(r),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function t(e,r){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(e,"/").concat(r,"?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function t(e,r){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(e,"/").concat(r,"/credits?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(a().mark((function t(e,r){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(e,"/").concat(r,"/reviews?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){i.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}}}]);
//# sourceMappingURL=884.9779584e.chunk.js.map