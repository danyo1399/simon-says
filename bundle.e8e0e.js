!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(e){return n[e]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/simon-says/",e(e.s="mdyV")}({QfWi:function(n,e,t){"use strict";function r(){return r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function l(n){var e=this||{},t=n.call?n(e.p):n;return Z(t.unshift?t.raw?Q(t,[].slice.call(arguments,1),e.p):t.reduce((function(n,t){return o(n,t&&t.call?t(e.p):t)}),{}):t,R(e.target),e.g,e.o,e.k)}function u(n){return new Promise((function(e){n.onended=function(){n.onended=null,e()},n.play()}))}function _(n){switch(n){case 1:return u(G);case 2:return u(J);case 3:return u(Y);case 4:return u(K)}}function c(n,e){L.i.__h&&L.i.__h(nn,n,tn||e),tn=0;var t=nn.__H||(nn.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function a(n){return tn=1,s(h,n)}function s(n,e,t){var r=c(X++,2);return r.t=n,r.__c||(r.__=[t?t(e):h(void 0,e),function(n){var e=r.t(r.__[0],n);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=nn),r.__}function f(){for(var n;n=rn.shift();)if(n.__P)try{n.__H.__h.forEach(p),n.__H.__h.forEach(d),n.__H.__h=[]}catch(e){n.__H.__h=[],L.i.__e(e,n.__v)}}function p(n){var e=nn,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),nn=e}function d(n){var e=nn;n.__c=n.__(),nn=e}function h(n,e){return"function"==typeof e?e(n):e}function v(n){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(n)}function y(n,e){for(var t in e)n[t]=e[t];return n}function b(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var r in e)if("__source"!==r&&n[r]!==e[r])return!0;return!1}function m(n){this.props=n}function g(){this.__u=0,this.t=null,this.__b=null}function k(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function O(){this.u=null,this.o=null}function w(){}function x(){return this.cancelBubble}function S(){return this.defaultPrevented}function j(){return j=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},j.apply(this,arguments)}function P(n,e,t,r,o,i,l){try{var u=n[i](l),_=u.value}catch(n){return void t(n)}u.done?e(_):Promise.resolve(_).then(r,o)}function C(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){function i(n){P(u,r,o,i,l,"next",n)}function l(n){P(u,r,o,i,l,"throw",n)}var u=n.apply(e,t);i(void 0)}))}}function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,u=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);l=!0);}catch(n){u=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return E(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function T(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function U(n){var e=n.size,t=.5*e,r=l(xn||(xn=z(["\n    z-index: 100;\n    overflow: hidden;\n    position: absolute;\n    background-color: black;\n    border-radius: 999px;\n    border: ","px solid black;\n    color: white;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: ","px;\n    width: ","px;\n    display: flex;\n    flex-direction: column;\n\n    .top-section {\n      height: 45%;\n      background-color: #111111;\n      display: flex;\n      justify-content: center;\n      align-items: end;\n      font-size: ","px;\n      padding-bottom: ","px;\n    }\n    .bottom-section {\n      height: 55%;\n      background-color: #222222;\n    }\n  "])),.04*e,t,t,.045*e,.02*e);return Object(L.g)("div",{class:r},Object(L.g)("div",{class:"top-section"},"SIMON SAYS"),Object(L.g)("div",{class:"bottom-section"}))}function H(n){function e(){return(e=C((function*(){s(!0);var n=_(t);o&&o(t),yield n,console.log("prom"),s(!1)}))).apply(this,arguments)}var t=n.position,r=n.size,o=n.onClick,i=T(n,jn),u=A(a(),2),c=u[0],s=u[1],f=l(Sn||(Sn=z(["\n    color: green;\n    .idle {\n      opacity: 50%;\n    }\n    .clicking {\n      opacity: 100%;\n    }\n\n    fill: currentColor;\n    ","\n\n    ","\n\n  ","\n  "])),2===t?"\n      color: red;\n      transform: rotateZ(90deg);\n    ":void 0,3===t?"\n    color: yellow;\n    transform: rotateZ(270deg);\n  ":void 0,4===t?"\n  color: blue;\n  transform: rotateZ(180deg);\n":void 0),p=.5*r;return Object(L.g)("div",{class:f},Object(L.g)("svg",j({onClick:function(){return e.apply(this,arguments)},class:"".concat(c?"clicking":"idle"),width:"".concat(p,"px"),height:"".concat(p,"px")},i,{viewBox:"0 0 50 50"}),Object(L.g)("circle",{cx:"50",cy:"50",r:"50"})))}t.r(e);var L=t("hosL"),N=function(n){var e,t=n.selector,r=n.inline,o=n.clientSpecified,i=[],l=document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];!0===r&&i.push(l.parentNode);return!0!==o||t||(t=function(n){var e=n.attributes,t=null;return Object.keys(e).forEach((function(n){e.hasOwnProperty(n)&&"data-mount-in"===e[n].name&&(t=e[n].nodeValue)})),t}(l)),t&&[].forEach.call(document.querySelectorAll(t),(function(n){i.push(n)})),i},M=function(n,e,t,o,i){e.forEach((function(e){var l=e;if(!l._habitat){l._habitat=!0;var u=function(n,e){void 0===e&&(e={});var t=n.attributes,o=r({},e);return Object.keys(t).forEach((function(n){if(t.hasOwnProperty(n)){var e=t[n].name;if(!e||"string"!=typeof e)return!1;var r=e.split(/(data-props?-)/).pop()||"";e!==(r=r.replace(/-([a-z])/gi,(function(n,e){return e.toUpperCase()})))&&(o[r]=t[n].nodeValue)}})),[].forEach.call(n.getElementsByTagName("script"),(function(n){var e={};if(n.hasAttribute("type")){if("text/props"!==n.getAttribute("type")&&"application/json"!==n.getAttribute("type"))return;try{e=JSON.parse(n.innerHTML)}catch(n){throw new Error(n)}r(o,e)}})),o}(e,i)||i;return o&&(l.innerHTML=""),Object(L.j)(Object(L.g)(n,u),l,t)}}))},D=function(n){var e=n;return{render:function(n){void 0===n&&(n={});var t=n.selector;void 0===t&&(t=null);var r=n.inline;void 0===r&&(r=!1);var o=n.clean;void 0===o&&(o=!1);var i=n.clientSpecified;void 0===i&&(i=!1);var l=n.defaultProps;void 0===l&&(l={});var u=N({selector:t,inline:r,clientSpecified:i}),_=function(){if(u.length>0){var n=N({selector:t,inline:r,clientSpecified:i});return M(e,n,null,o,l)}};_(),document.addEventListener("DOMContentLoaded",_),document.addEventListener("load",_)}}},W={data:""},R=function(n){return"object"==("undefined"==typeof window?"undefined":i(window))?((n?n.querySelector("#_goober"):window._goober)||o((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||W},F=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,I=/\/\*[^]*?\*\/|  +/g,V=/\n+/g,B=function n(e,t){var r="",o="",l="",u=function(u){var c=e[u];"@"==u[0]?"i"==u[1]?r=u+" "+c+";":o+="f"==u[1]?n(c,u):u+"{"+n(c,"k"==u[1]?"":t)+"}":"object"==i(c)?o+=n(c,t?t.replace(/([^,])+/g,(function(n){return u.replace(/(^:.*)|([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,n):n?n+" "+e:e}))})):u):null!=c&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=n.p?n.p(u,c):u+":"+c+";"),_=u};for(var _ in e)u(_);return r+(t&&l?t+"{"+l+"}":l)+o},$={},q=function n(e){if("object"==i(e)){var t="";for(var r in e)t+=r+n(e[r]);return t}return e},Z=function(n,e,t,r,o){var i,l,u,_=q(n),c=$[_]||($[_]=function(n){for(var e=0,t=11;e<n.length;)t=101*t+n.charCodeAt(e++)>>>0;return"go"+t}(_));if(!$[c]){var a=_!==n?n:function(n){for(var e,t,r=[{}];e=F.exec(n.replace(I,""));)e[4]?r.shift():e[3]?(t=e[3].replace(V," ").trim(),r.unshift(r[0][t]=r[0][t]||{})):r[0][e[1]]=e[2].replace(V," ").trim();return r[0]}(n);$[c]=B(o?(u=a,(l="@keyframes "+c)in(i={})?Object.defineProperty(i,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[l]=u,i):a,t?"":"."+c)}return function(n,e,t){-1==e.data.indexOf(n)&&(e.data=t?n+e.data:e.data+n)}($[c],e,r),c},Q=function(n,e,t){return n.reduce((function(n,r,o){var l=e[o];if(l&&l.call){var u=l(t),_=u&&u.props&&u.props.className||/^go/.test(u)&&u;l=_?"."+_:u&&"object"==i(u)?u.props?"":B(u,""):!1===u?"":u}return n+r+(null==l?"":l)}),"")},G=(l.bind({g:1}),l.bind({k:1}),new Audio("https://danyo1399.github.io/simon-says/assets/simonSound1.mp3"));G.loop=!1;var J=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound2.mp3");J.loop=!1;var Y=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound3.mp3");Y.loop=!1;var K=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound4.mp3");K.loop=!1;var X,nn,en,tn=0,rn=[],on=L.i.__b,ln=L.i.__r,un=L.i.diffed,_n=L.i.__c,cn=L.i.unmount;L.i.__b=function(n){nn=null,on&&on(n)},L.i.__r=function(n){ln&&ln(n),X=0;var e=(nn=n.__c).__H;e&&(e.__h.forEach(p),e.__h.forEach(d),e.__h=[])},L.i.diffed=function(n){un&&un(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(1!==rn.push(e)&&en===L.i.requestAnimationFrame||((en=L.i.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(r),an&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);an&&(e=requestAnimationFrame(t))})(f)),nn=null},L.i.__c=function(n,e){e.some((function(n){try{n.__h.forEach(p),n.__h=n.__h.filter((function(n){return!n.__||d(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],L.i.__e(t,n.__v)}})),_n&&_n(n,e)},L.i.unmount=function(n){cn&&cn(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{p(n)}catch(n){e=n}})),e&&L.i.__e(e,t.__v))};var an="function"==typeof requestAnimationFrame;(m.prototype=new L.a).isPureReactComponent=!0,m.prototype.shouldComponentUpdate=function(n,e){return b(this.props,n)||b(this.state,e)};var sn=L.i.__b;L.i.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),sn&&sn(n)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var fn=L.i.__e;L.i.__e=function(n,e,t,r){if(n.then)for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e);fn(n,e,t,r)};var pn=L.i.unmount;L.i.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&!0===n.__h&&(n.type=null),pn&&pn(n)},(g.prototype=new L.a).__c=function(n,e){var t=e.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var o=k(r.__v),i=!1,l=function(){i||(i=!0,t.__R=null,o?o(u):u())};t.__R=l;var u=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(e,t,r){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return n(e,t,r)})),e.__c&&e.__c.__P===t&&(e.__e&&r.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=r)),e}(n,n.__c.__P,n.__c.__O)}var e;for(r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()}},_=!0===e.__h;r.__u++||_||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(l,l)},g.prototype.componentWillUnmount=function(){this.t=[]},g.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),e.__c.__H=null),null!=(e=y({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return n(e,t,r)}))),e}(this.__b,t,r.__O=r.__P)}this.__b=null}var o=e.__e&&Object(L.e)(L.b,null,n.fallback);return o&&(o.__h=null),[Object(L.e)(L.b,null,e.__e?null:n.children),o]};var dn=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(O.prototype=new L.a).__e=function(n){var e=this,t=k(e.__v),r=e.o.get(n);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),dn(e,n,r)):o()};t?t(i):i()}},O.prototype.render=function(n){this.u=null,this.o=new Map;var e=Object(L.k)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},O.prototype.componentDidUpdate=O.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){dn(n,t,e)}))};var hn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,vn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,yn="undefined"!=typeof document,bn=function(n){return("undefined"!=typeof Symbol&&"symbol"==v(Symbol())?/fil|che|rad/i:/fil|che|ra/i).test(n)};L.a.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(L.a.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var mn=L.i.event;L.i.event=function(n){return mn&&(n=mn(n)),n.persist=w,n.isPropagationStopped=x,n.isDefaultPrevented=S,n.nativeEvent=n};var gn={configurable:!0,get:function(){return this.class}},kn=L.i.vnode;L.i.vnode=function(n){var e=n.type,t=n.props,r=t;if("string"==typeof e){var o=-1===e.indexOf("-");for(var i in r={},t){var l=t[i];yn&&"children"===i&&"noscript"===e||"value"===i&&"defaultValue"in t&&null==l||("defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!bn(t.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&vn.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===l&&(l=void 0),r[i]=l)}"select"==e&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(L.k)(t.children).forEach((function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)}))),"select"==e&&null!=r.defaultValue&&(r.value=Object(L.k)(t.children).forEach((function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value}))),n.props=r,t.class!=t.className&&(gn.enumerable="className"in t,null!=t.className&&(r.class=t.className),Object.defineProperty(r,"className",gn))}n.$$typeof=hn,kn&&kn(n)};var On=L.i.__r;L.i.__r=function(n){On&&On(n),n.__c};var wn,xn,Sn,jn=["position","size","onClick","className"];!function(n,e,t,r){B.p=e,n,t,r}(L.g);var Pn="\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml, body {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput, button, textarea, select {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}\n",Cn=D((function(){function n(){}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size;t=t||400;var r=l(wn||(wn=z(['\n    @import url("https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&display=swap");\n    ',"\n    --size: ","px;\n    position: relative;\n    width: var(--size);\n    height: var(--size);\n    background-color: black;\n    border-radius: 999px;\n    font-family: Sarpanch;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .button-container {\n      display: grid;\n      place-content: center;\n    }\n    .outer-ring {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      border: ","px solid black;\n      border-radius: 999px;\n      z-index: 100;\n      pointer-events: none;\n    }\n\n    .vertical-border {\n      position: absolute;\n      height: 95%;\n      z-index: 50;\n      top: 50%;\n      left: 50%;\n      width: ","px;\n      transform: translate(-50%, -50%);\n      background-color: black;\n    }\n\n    .horizontal-border {\n      position: absolute;\n      width: 95%;\n      z-index: 50;\n      top: 50%;\n      left: 50%;\n      height: ","px;\n      transform: translate(-50%, -50%);\n      background-color: black;\n    }\n  "])),Pn,t,.04*t,.07*t,.07*t);return Object(L.g)("div",{class:r},Object(L.g)(U,{size:.8*t}),Object(L.g)("div",{class:"outer-ring"}),Object(L.g)("div",{class:"vertical-border"}),Object(L.g)("div",{class:"horizontal-border"}),Object(L.g)("div",{class:"button-container"},Object(L.g)(H,{position:1,onClick:n,size:t})),Object(L.g)("div",{class:"button-container"},Object(L.g)(H,{position:2,onClick:n,size:t})),Object(L.g)("div",{class:"button-container"},Object(L.g)(H,{position:3,onClick:n,size:t})),Object(L.g)("div",{class:"button-container"},Object(L.g)(H,{position:4,onClick:n,size:t})))}));Cn.render({selector:'[data-widget-host="habitat"]',clean:!0})},hosL:function(n,e,t){"use strict";function r(n,e){for(var t in e)n[t]=e[t];return n}function o(n){var e=n.parentNode;e&&e.removeChild(n)}function i(n,e,t){var r,o,i,u={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:u[i]=e[i];if(arguments.length>2&&(u.children=arguments.length>3?z.call(arguments,2):t),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===u[i]&&(u[i]=n.defaultProps[i]);return l(n,u,r,o,null)}function l(n,e,t,r,o){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++H:o};return null==o&&null!=U.vnode&&U.vnode(i),i}function u(){return{current:null}}function _(n){return n.children}function c(n,e){this.props=n,this.context=e}function a(n,e){if(null==e)return n.__?a(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e)return t.__e;return"function"==typeof n.type?a(n):null}function s(n){var e,t;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if(null!=(t=n.__k[e])&&null!=t.__e){n.__e=n.__c.base=t.__e;break}return s(n)}}function f(n){(!n.__d&&(n.__d=!0)&&L.push(n)&&!p.__r++||M!==U.debounceRendering)&&((M=U.debounceRendering)||N)(p)}function p(){for(var n;p.__r=L.length;)n=L.sort((function(n,e){return n.__v.__b-e.__v.__b})),L=[],n.some((function(n){var e,t,o,i,l,u;n.__d&&(l=(i=(e=n).__v).__e,(u=e.__P)&&(t=[],(o=r({},i)).__v=i.__v+1,O(u,i,o,e.__n,void 0!==u.ownerSVGElement,null!=i.__h?[l]:null,t,null==l?a(i):l,i.__h),w(t,i),i.__e!=l&&s(i)))}))}function d(n,e,t,r,o,i,u,c,s,f){var p,d,v,b,m,g,k,w=r&&r.__k||R,x=w.length;for(t.__k=[],p=0;p<e.length;p++)if(null!=(b=t.__k[p]=null==(b=e[p])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?l(null,b,null,null,b):Array.isArray(b)?l(_,{children:b},null,null,null):b.__b>0?l(b.type,b.props,b.key,null,b.__v):b)){if(b.__=t,b.__b=t.__b+1,null===(v=w[p])||v&&b.key==v.key&&b.type===v.type)w[p]=void 0;else for(d=0;d<x;d++){if((v=w[d])&&b.key==v.key&&b.type===v.type){w[d]=void 0;break}v=null}O(n,b,v=v||W,o,i,u,c,s,f),m=b.__e,(d=b.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,b),k.push(d,b.__c||m,b)),null!=m?(null==g&&(g=m),"function"==typeof b.type&&b.__k===v.__k?b.__d=s=h(b,s,n):s=y(n,b,v,w,m,s),"function"==typeof t.type&&(t.__d=s)):s&&v.__e==s&&s.parentNode!=n&&(s=a(v))}for(t.__e=g,p=x;p--;)null!=w[p]&&("function"==typeof t.type&&null!=w[p].__e&&w[p].__e==t.__d&&(t.__d=a(r,p+1)),j(w[p],w[p]));if(k)for(p=0;p<k.length;p++)S(k[p],k[++p],k[++p])}function h(n,e,t){for(var r,o=n.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=n,e="function"==typeof r.type?h(r,e,t):y(t,r,r,o,r.__e,e));return e}function v(n,e){return e=e||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){v(n,e)})):e.push(n)),e}function y(n,e,t,r,o,i){var l,u,_;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(null==t||o!=i||null==o.parentNode)n:if(null==i||i.parentNode!==n)n.appendChild(o),l=null;else{for(u=i,_=0;(u=u.nextSibling)&&_<r.length;_+=2)if(u==o)break n;n.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function b(n,e,t){"-"===e[0]?n.setProperty(e,t):n[e]=null==t?"":"number"!=typeof t||F.test(e)?t:t+"px"}function m(n,e,t,r,o){var i;n:if("style"===e)if("string"==typeof t)n.style.cssText=t;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||b(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||b(n.style,e,t[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r||n.addEventListener(e,i?k:g,i):n.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in n)try{n[e]=null==t?"":t;break n}catch(n){}"function"==typeof t||(null!=t&&(!1!==t||"a"===e[0]&&"r"===e[1])?n.setAttribute(e,t):n.removeAttribute(e))}}function g(n){this.l[n.type+!1](U.event?U.event(n):n)}function k(n){this.l[n.type+!0](U.event?U.event(n):n)}function O(n,e,t,o,i,l,u,a,s){var f,p,h,v,y,b,m,g,k,O,w,S=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(s=t.__h,a=e.__e=t.__e,e.__h=null,l=[a]),(f=U.__b)&&f(e);try{n:if("function"==typeof S){if(g=e.props,k=(f=S.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,t.__c?m=(p=e.__c=t.__c).__=p.__E:("prototype"in S&&S.prototype.render?e.__c=p=new S(g,O):(e.__c=p=new c(g,O),p.constructor=S,p.render=P),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,S.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||e.__v===t.__v){p.props=g,p.state=p.__s,e.__v!==t.__v&&(p.__d=!1),p.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(n){n&&(n.__=e)})),p.__h.length&&u.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,b)}))}p.context=O,p.props=g,p.state=p.__s,(f=U.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=n,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(b=p.getSnapshotBeforeUpdate(v,y)),w=null!=f&&f.type===_&&null==f.key?f.props.children:f,d(n,Array.isArray(w)?w:[w],e,t,o,i,l,u,a,s),p.base=e.__e,e.__h=null,p.__h.length&&u.push(p),m&&(p.__E=p.__=null),p.__e=!1}else null==l&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=x(t.__e,e,t,o,i,l,u,s);(f=U.diffed)&&f(e)}catch(n){e.__v=null,(s||null!=l)&&(e.__e=a,e.__h=!!s,l[l.indexOf(a)]=null),U.__e(n,e,t)}}function w(n,e){U.__c&&U.__c(e,n),n.some((function(e){try{n=e.__h,e.__h=[],n.some((function(n){n.call(e)}))}catch(n){U.__e(n,e.__v)}}))}function x(n,e,t,r,i,l,u,_){var c,s,f,p=t.props,h=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){n=c,l[y]=null;break}if(null==n){if(null===v)return document.createTextNode(h);n=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,_=!1}if(null===v)p===h||_&&n.data===h||(n.data=h);else{if(l=l&&z.call(n.childNodes),s=(p=t.props||W).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!_){if(null!=l)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===n.innerHTML)||(n.innerHTML=f&&f.__html||""))}if(function(n,e,t,r,o){var i;for(i in t)"children"===i||"key"===i||i in e||m(n,i,null,t[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===e[i]||m(n,i,e[i],t[i],r)}(n,h,p,i,_),f)e.__k=[];else if(y=e.props.children,d(n,Array.isArray(y)?y:[y],e,t,r,i&&"foreignObject"!==v,l,u,l?l[0]:t.__k&&a(t,0),_),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);_||("value"in h&&void 0!==(y=h.value)&&(y!==n.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&m(n,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==n.checked&&m(n,"checked",y,p.checked,!1))}return n}function S(n,e,t){try{"function"==typeof n?n(e):n.current=e}catch(n){U.__e(n,t)}}function j(n,e,t){var r,i;if(U.unmount&&U.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||S(r,null,e)),null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){U.__e(n,e)}r.base=r.__P=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],e,"function"!=typeof n.type);t||null==n.__e||o(n.__e),n.__e=n.__d=void 0}function P(n,e,t){return this.constructor(n,t)}function C(n,e,t){var r,o,l;U.__&&U.__(n,e),o=(r="function"==typeof t)?null:t&&t.__k||e.__k,l=[],O(e,n=(!r&&t||e).__k=i(_,null,[n]),o||W,W,void 0!==e.ownerSVGElement,!r&&t?[t]:o?null:e.firstChild?z.call(e.childNodes):null,l,!r&&t?t:o?o.__e:e.firstChild,r),w(l,n)}function A(n,e){C(n,e,A)}function E(n,e,t){var o,i,u,_=r({},n.props);for(u in e)"key"==u?o=e[u]:"ref"==u?i=e[u]:_[u]=e[u];return arguments.length>2&&(_.children=arguments.length>3?z.call(arguments,2):t),l(n.type,_,o||n.key,i||n.ref,null)}function T(n,e){var t={__c:e="__cC"+D++,__:n,Consumer:function(n,e){return n.children(e)},Provider:function(n){var t,r;return this.getChildContext||(t=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&t.some(f)},this.sub=function(n){t.push(n);var e=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),e&&e.call(n)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}t.d(e,"j",(function(){return C})),t.d(e,"h",(function(){return A})),t.d(e,"e",(function(){return i})),t.d(e,"g",(function(){return i})),t.d(e,"b",(function(){return _})),t.d(e,"f",(function(){return u})),t.d(e,"a",(function(){return c})),t.d(e,"c",(function(){return E})),t.d(e,"d",(function(){return T})),t.d(e,"k",(function(){return v})),t.d(e,"i",(function(){return U}));var z,U,H,L,N,M,D,W={},R=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;z=R.slice,U={__e:function(n,e,t,r){for(var o,i,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(n)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),l=o.__d),l)return o.__E=o}catch(e){n=e}throw n}},H=0,c.prototype.setState=function(n,e){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof n&&(n=n(r({},t),this.props)),n&&r(t,n),null!=n&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),f(this))},c.prototype.render=_,L=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,D=0},mdyV:function(n,e,t){"use strict";t.r(e);var r=t("hosL"),o=r.g,i=r.j,l=function(n){return n&&n.default?n.default:n},u=function(n){return"/"===n[n.length-1]?n:n+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(t.p)+"sw.js"),"function"==typeof l(t("QfWi"))){var _=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var n=l(t("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var c={preRenderData:e};e.url&&u(e.url);i(o(n,{CLI_DATA:c}),document.body,_)}()}}});
//# sourceMappingURL=bundle.e8e0e.js.map