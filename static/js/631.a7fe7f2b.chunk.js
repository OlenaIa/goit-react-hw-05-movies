/*! For license information please see 631.a7fe7f2b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{247:function(t,r,e){e.r(r);var n=e(439),o=e(454),i=e(544),a=e(791),c=e(689),u=e(390),s=e(184);r.default=function(){var t=(0,c.UO)().movieId,r=(0,a.useState)(!0),e=(0,n.Z)(r,2),f=e[0],h=e[1],l=(0,a.useState)([]),p=(0,n.Z)(l,2),d=p[0],v=p[1];return(0,a.useEffect)((function(){t&&(0,u.uV)("/movie",t).then((function(t){v(t.cast)})).catch(u.NI).finally((function(){return h(!1)}))}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Cast:"}),f&&(0,s.jsx)(o.a,{}),0!==d.length?(0,s.jsx)(i.c0,{children:d.map((function(t){var r=t.id,e=t.name,n=t.character,o=t.profile_path;return(0,s.jsxs)(i.iH,{children:[(0,s.jsx)("b",{children:e}),(0,s.jsxs)("p",{children:["Character: ",n]}),(0,s.jsx)("img",{src:o?"http://image.tmdb.org/t/p/w185".concat(o):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:e,width:"100",height:"150"})]},r)}))}):(0,s.jsx)("p",{children:"Sorry! We don't have any information about cast"})]})}},454:function(t,r,e){e.d(r,{a:function(){return u}});var n,o=e(975),i=e(168),a=e(867).ZP.div(n||(n=(0,i.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),c=e(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},544:function(t,r,e){e.d(r,{$j:function(){return f},c0:function(){return u},iH:function(){return s}});var n,o,i,a=e(168),c=e(867),u=c.ZP.ul(n||(n=(0,a.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),s=c.ZP.li(o||(o=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),f=c.ZP.div(i||(i=(0,a.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))},390:function(t,r,e){e.d(r,{Hx:function(){return m},NI:function(){return x},Pu:function(){return s},Y5:function(){return d},bI:function(){return l},uV:function(){return y},vw:function(){return f}});var n=e(861),o=e(243),i=e(686);function a(){a=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(O){s=function(t,r,e){return t[r]=e}}function f(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=f;var l={};function p(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(Z([])));m&&m!==r&&e.call(m,i)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,l;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function Z(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}var c="https://api.themoviedb.org/3",u="43596775cda6588db61d2519acdb98b6",s={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(r,"?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,r){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function t(r,e){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(r,"?api_key=").concat(u,"&query=").concat(e),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,r){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function t(r,e){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(r,"/").concat(e,"?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,r){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function t(r,e){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(r,"/").concat(e,"/credits?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,r){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(a().mark((function t(r,e){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(c).concat(r,"/").concat(e,"/reviews?api_key=").concat(u),t.next=3,o.Z.get(n);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){i.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}}}]);
//# sourceMappingURL=631.a7fe7f2b.chunk.js.map