!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/simon-says/",t(t.s="mdyV")}({QfWi:function(e,t,n){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e){let t=this||{},n=e.call?e(t.p):e;return R(n.unshift?n.raw?I(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>r(e,n&&n.call?n(t.p):n)),{}):n,U(t.target),t.g,t.o,t.k)}function l(e){return new Promise((t=>{e.onended=function(){e.onended=null,t()},e.play()}))}function _(e,t){j.options.__h&&j.options.__h(G,e,Y||t),Y=0;var n=G.__H||(G.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function u(e){return Y=1,c(p,e)}function c(e,t,n){var o=_(Q++,2);return o.t=e,o.__c||(o.__=[n?n(t):p(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=G),o.__}function a(){for(var e;e=K.shift();)if(e.__P)try{e.__H.__h.forEach(s),e.__H.__h.forEach(f),e.__H.__h=[]}catch(t){e.__H.__h=[],j.options.__e(t,e.__v)}}function s(e){var t=G,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),G=t}function f(e){var t=G;e.__c=e.__(),G=t}function p(e,t){return"function"==typeof t?t(e):t}function d(e,t){for(var n in t)e[n]=t[n];return e}function h(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}function v(e){this.props=e}function y(){this.__u=0,this.t=null,this.__b=null}function m(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function b(){this.u=null,this.o=null}function g(){}function k(){return this.cancelBubble}function O(){return this.defaultPrevented}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t.indexOf(n=i[o])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function C({size:e}){const t=.5*e,n=i(be||(be=ke`
    z-index: 100;
    overflow: hidden;
    position: absolute;
    background-color: black;
    border-radius: 999px;
    border: ${0}px solid black;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${0}px;
    width: ${0}px;
    display: flex;
    flex-direction: column;

    .top-section {
      height: 45%;
      background-color: #111111;
      display: flex;
      justify-content: center;
      align-items: end;
      font-size: ${0}px;
      padding-bottom: ${0}px;
    }
    .bottom-section {
      height: 55%;
      background-color: #222222;
    }
  `),.04*e,t,t,.045*e,.02*e);return Object(j.h)("div",{class:n},Object(j.h)("div",{class:"top-section"},"SIMON SAYS"),Object(j.h)("div",{class:"bottom-section"}))}function S(e){let{position:t,size:n,onClick:o}=e,r=x(e,ye);const[_,c]=u(),a=i(ge||(ge=ke`
    color: green;
    .idle {
      opacity: 50%;
    }
    .clicking {
      opacity: 100%;
    }

    fill: currentColor;
    ${0}

    ${0}

  ${0}
  `),2===t?"\n      color: red;\n      transform: rotateZ(90deg);\n    ":void 0,3===t?"\n    color: yellow;\n    transform: rotateZ(270deg);\n  ":void 0,4===t?"\n  color: blue;\n  transform: rotateZ(180deg);\n":void 0),s=.5*n;return Object(j.h)("div",{class:a},Object(j.h)("svg",w({onClick:async function(){c(!0);const e=function(e){switch(e){case 1:return l(V);case 2:return l(B);case 3:return l(q);case 4:return l(Z)}}(t);o&&o(t),await e,console.log("prom"),c(!1)},class:""+(_?"clicking":"idle"),width:`${s}px`,height:`${s}px`},r,{viewBox:"0 0 50 50"}),Object(j.h)("circle",{cx:"50",cy:"50",r:"50"})))}n.r(t);var j=n("hosL"),P=function(e){var t,n=e.selector,o=e.inline,r=e.clientSpecified,i=[],l=document.currentScript||(t=document.getElementsByTagName("script"))[t.length-1];!0===o&&i.push(l.parentNode);return!0!==r||n||(n=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach((function(e){t.hasOwnProperty(e)&&"data-mount-in"===t[e].name&&(n=t[e].nodeValue)})),n}(l)),n&&[].forEach.call(document.querySelectorAll(n),(function(e){i.push(e)})),i},E=function(e,t,n,r,i){t.forEach((function(t){var l=t;if(!l._habitat){l._habitat=!0;var _=function(e,t){void 0===t&&(t={});var n=e.attributes,r=o({},t);return Object.keys(n).forEach((function(e){if(n.hasOwnProperty(e)){var t=n[e].name;if(!t||"string"!=typeof t)return!1;var o=t.split(/(data-props?-)/).pop()||"";t!==(o=o.replace(/-([a-z])/gi,(function(e,t){return t.toUpperCase()})))&&(r[o]=n[e].nodeValue)}})),[].forEach.call(e.getElementsByTagName("script"),(function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type")&&"application/json"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}o(r,t)}})),r}(t,i)||i;return r&&(l.innerHTML=""),Object(j.render)(Object(j.h)(e,_),l,n)}}))},A=function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var o=e.inline;void 0===o&&(o=!1);var r=e.clean;void 0===r&&(r=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var l=e.defaultProps;void 0===l&&(l={});var _=P({selector:n,inline:o,clientSpecified:i}),u=function(){if(_.length>0){var e=P({selector:n,inline:o,clientSpecified:i});return E(t,e,null,r,l)}};u(),document.addEventListener("DOMContentLoaded",u),document.addEventListener("load",u)}}};let T,z,H,L={data:""},U=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||r((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||L,N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,D=(e,t)=>{let n="",o="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+l+";":o+="f"==i[1]?D(l,i):i+"{"+D(l,"k"==i[1]?"":t)+"}":"object"==typeof l?o+=D(l,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=D.p?D.p(i,l):i+":"+l+";")}return n+(t&&r?t+"{"+r+"}":r)+o},W={},F=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+F(e[n]);return t}return e},R=(e,t,n,o,r)=>{let i=F(e),l=W[i]||(W[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!W[l]){let t=i!==e?e:(e=>{let t,n,o=[{}];for(;t=N.exec(e.replace($,""));)t[4]?o.shift():t[3]?(n=t[3].replace(M," ").trim(),o.unshift(o[0][n]=o[0][n]||{})):o[0][t[1]]=t[2].replace(M," ").trim();return o[0]})(e);W[l]=D(r?{["@keyframes "+l]:t}:t,n?"":"."+l)}return((e,t,n)=>{-1==t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(W[l],t,o),l},I=(e,t,n)=>e.reduce(((e,o,r)=>{let i=t[r];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":D(e,""):!1===e?"":e}return e+o+(null==i?"":i)}),"");i.bind({g:1}),i.bind({k:1});const V=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound1.mp3");V.loop=!1;const B=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound2.mp3");B.loop=!1;const q=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound3.mp3");q.loop=!1;const Z=new Audio("https://danyo1399.github.io/simon-says/assets/simonSound4.mp3");Z.loop=!1;var Q,G,J,Y=0,K=[],X=j.options.__b,ee=j.options.__r,te=j.options.diffed,ne=j.options.__c,oe=j.options.unmount;j.options.__b=function(e){G=null,X&&X(e)},j.options.__r=function(e){ee&&ee(e),Q=0;var t=(G=e.__c).__H;t&&(t.__h.forEach(s),t.__h.forEach(f),t.__h=[])},j.options.diffed=function(e){te&&te(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==K.push(t)&&J===j.options.requestAnimationFrame||((J=j.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),re&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);re&&(t=requestAnimationFrame(n))})(a)),G=null},j.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(s),e.__h=e.__h.filter((function(e){return!e.__||f(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],j.options.__e(n,e.__v)}})),ne&&ne(e,t)},j.options.unmount=function(e){oe&&oe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{s(e)}catch(e){t=e}})),t&&j.options.__e(t,n.__v))};var re="function"==typeof requestAnimationFrame;(v.prototype=new j.Component).isPureReactComponent=!0,v.prototype.shouldComponentUpdate=function(e,t){return h(this.props,e)||h(this.state,t)};var ie=j.options.__b;j.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ie&&ie(e)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var le=j.options.__e;j.options.__e=function(e,t,n,o){if(e.then)for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);le(e,t,n,o)};var _e=j.options.unmount;j.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),_e&&_e(e)},(y.prototype=new j.Component).__c=function(e,t){var n=t.__c,o=this;null==o.t&&(o.t=[]),o.t.push(n);var r=m(o.__v),i=!1,l=function(){i||(i=!0,n.__R=null,r?r(_):_())};n.__R=l;var _=function(){if(!--o.__u){if(o.state.__e){var e=o.state.__e;o.__v.__k[0]=function e(t,n,o){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,o)})),t.__c&&t.__c.__P===n&&(t.__e&&o.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=o)),t}(e,e.__c.__P,e.__c.__O)}var t;for(o.setState({__e:o.__b=null});t=o.t.pop();)t.forceUpdate()}},u=!0===t.__h;o.__u++||u||o.setState({__e:o.__b=o.__v.__k[0]}),e.then(l,l)},y.prototype.componentWillUnmount=function(){this.t=[]},y.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,o){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=d({},t)).__c&&(t.__c.__P===o&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,o)}))),t}(this.__b,n,o.__O=o.__P)}this.__b=null}var r=t.__e&&Object(j.createElement)(j.Fragment,null,e.fallback);return r&&(r.__h=null),[Object(j.createElement)(j.Fragment,null,t.__e?null:e.children),r]};var ue=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(b.prototype=new j.Component).__e=function(e){var t=this,n=m(t.__v),o=t.o.get(e);return o[0]++,function(r){var i=function(){t.props.revealOrder?(o.push(r),ue(t,e,o)):r()};n?n(i):i()}},b.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(j.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){ue(e,n,t)}))};var ce="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ae=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,se="undefined"!=typeof document,fe=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};j.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(j.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var pe=j.options.event;j.options.event=function(e){return pe&&(e=pe(e)),e.persist=g,e.isPropagationStopped=k,e.isDefaultPrevented=O,e.nativeEvent=e};var de={configurable:!0,get:function(){return this.class}},he=j.options.vnode;j.options.vnode=function(e){var t=e.type,n=e.props,o=n;if("string"==typeof t){var r=-1===t.indexOf("-");for(var i in o={},n){var l=n[i];se&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in n&&null==l||("defaultValue"===i&&"value"in n&&null==n.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!fe(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():r&&ae.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===l&&(l=void 0),o[i]=l)}"select"==t&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(j.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)}))),"select"==t&&null!=o.defaultValue&&(o.value=Object(j.toChildArray)(n.children).forEach((function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),e.props=o,n.class!=n.className&&(de.enumerable="className"in n,null!=n.className&&(o.class=n.className),Object.defineProperty(o,"className",de))}e.$$typeof=ce,he&&he(e)};var ve=j.options.__r;j.options.__r=function(e){ve&&ve(e),e.__c};const ye=["position","size","onClick","className"];let me,be,ge,ke=e=>e;!function(e,t,n,o){D.p=t,T=e,z=n,H=o}(j.h);const Oe="\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml, body {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput, button, textarea, select {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}\n";A((function({size:e}={}){function t(){}const n=i(me||(me=ke`
    @import url("https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&display=swap");
    ${0}
    --size: ${0}px;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: black;
    border-radius: 999px;
    font-family: Sarpanch;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .button-container {
      display: grid;
      place-content: center;
    }
    .outer-ring {
      width: 100%;
      height: 100%;
      position: absolute;
      border: ${0}px solid black;
      border-radius: 999px;
      z-index: 100;
      pointer-events: none;
    }

    .vertical-border {
      position: absolute;
      height: 95%;
      z-index: 50;
      top: 50%;
      left: 50%;
      width: ${0}px;
      transform: translate(-50%, -50%);
      background-color: black;
    }

    .horizontal-border {
      position: absolute;
      width: 95%;
      z-index: 50;
      top: 50%;
      left: 50%;
      height: ${0}px;
      transform: translate(-50%, -50%);
      background-color: black;
    }
  `),Oe,e=e||400,.04*e,.07*e,.07*e);return Object(j.h)("div",{class:n},Object(j.h)(C,{size:.8*e}),Object(j.h)("div",{class:"outer-ring"}),Object(j.h)("div",{class:"vertical-border"}),Object(j.h)("div",{class:"horizontal-border"}),Object(j.h)("div",{class:"button-container"},Object(j.h)(S,{position:1,onClick:t,size:e})),Object(j.h)("div",{class:"button-container"},Object(j.h)(S,{position:2,onClick:t,size:e})),Object(j.h)("div",{class:"button-container"},Object(j.h)(S,{position:3,onClick:t,size:e})),Object(j.h)("div",{class:"button-container"},Object(j.h)(S,{position:4,onClick:t,size:e})))})).render({selector:'[data-widget-host="habitat"]',clean:!0})},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var o,r,i,_={};for(i in t)"key"==i?o=t[i]:"ref"==i?r=t[i]:_[i]=t[i];if(arguments.length>2&&(_.children=arguments.length>3?z.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===_[i]&&(_[i]=e.defaultProps[i]);return l(e,_,o,r,null)}function l(e,t,n,o,r){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++L:r};return null==r&&null!=H.vnode&&H.vnode(i),i}function _(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__?a(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!p.__r++||M!==H.debounceRendering)&&((M=H.debounceRendering)||$)(p)}function p(){for(var e;p.__r=N.length;)e=N.sort((function(e,t){return e.__v.__b-t.__v.__b})),N=[],e.some((function(e){var t,n,r,i,l,_;e.__d&&(l=(i=(t=e).__v).__e,(_=t.__P)&&(n=[],(r=o({},i)).__v=i.__v+1,O(_,i,r,t.__n,void 0!==_.ownerSVGElement,null!=i.__h?[l]:null,n,null==l?a(i):l,i.__h),w(n,i),i.__e!=l&&s(i)))}))}function d(e,t,n,o,r,i,_,c,s,f){var p,d,v,m,b,g,k,w=o&&o.__k||F,x=w.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(u,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=w[p])||v&&m.key==v.key&&m.type===v.type)w[p]=void 0;else for(d=0;d<x;d++){if((v=w[d])&&m.key==v.key&&m.type===v.type){w[d]=void 0;break}v=null}O(e,m,v=v||W,r,i,_,c,s,f),b=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=h(m,s,e):s=y(e,m,v,w,b,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=a(v))}for(n.__e=g,p=x;p--;)null!=w[p]&&("function"==typeof n.type&&null!=w[p].__e&&w[p].__e==n.__d&&(n.__d=a(o,p+1)),S(w[p],w[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function h(e,t,n){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):y(n,o,o,r,o.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function y(e,t,n,o,r,i){var l,_,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(_=i,u=0;(_=_.nextSibling)&&u<o.length;u+=2)if(_==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||R.test(t)?n:n+"px"}function b(e,t,n,o,r){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||m(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](H.event?H.event(e):e)}function k(e){this.l[e.type+!0](H.event?H.event(e):e)}function O(e,t,n,r,i,l,_,a,s){var f,p,h,v,y,m,b,g,k,O,w,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,a=t.__e=n.__e,t.__h=null,l=[a]),(f=H.__b)&&f(t);try{e:if("function"==typeof C){if(g=t.props,k=(f=C.contextType)&&r[f.__c],O=f?k?k.props.value:f.__:r,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?t.__c=p=new C(g,O):(t.__c=p=new c(g,O),p.constructor=C,p.render=j),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,C.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,h)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&_.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=O,p.props=g,p.state=p.__s,(f=H.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),w=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(e,Array.isArray(w)?w:[w],t,n,r,i,l,_,a,s),p.base=t.__e,t.__h=null,p.__h.length&&_.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,r,i,l,_,s);(f=H.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=a,t.__h=!!s,l[l.indexOf(a)]=null),H.__e(e,t,n)}}function w(e,t){H.__c&&H.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){H.__e(e,t.__v)}}))}function x(e,t,n,o,i,l,_,u){var c,s,f,p=n.props,h=t.props,v=t.type,y=0;if("svg"===v&&(i=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,u=!1}if(null===v)p===h||u&&e.data===h||(e.data=h);else{if(l=l&&z.call(e.childNodes),s=(p=n.props||W).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=l)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,o,r){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],o);for(i in t)r&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],o)}(e,h,p,i,u),f)t.__k=[];else if(y=t.props.children,d(e,Array.isArray(y)?y:[y],t,n,o,i&&"foreignObject"!==v,l,_,l?l[0]:n.__k&&a(n,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&r(l[y]);u||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&b(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&b(e,"checked",y,p.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){H.__e(e,n)}}function S(e,t,n){var o,i;if(H.unmount&&H.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){H.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&S(o[i],t,"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function P(e,t,n){var o,r,l;H.__&&H.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,l=[],O(t,e=(!o&&n||t).__k=i(u,null,[e]),r||W,W,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?z.call(t.childNodes):null,l,!o&&n?n:r?r.__e:t.firstChild,o),w(l,e)}function E(e,t){P(e,t,E)}function A(e,t,n){var r,i,_,u=o({},e.props);for(_ in t)"key"==_?r=t[_]:"ref"==_?i=t[_]:u[_]=t[_];return arguments.length>2&&(u.children=arguments.length>3?z.call(arguments,2):n),l(e.type,u,r||e.key,i||e.ref,null)}function T(e,t){var n={__c:t="__cC"+D++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return E})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return _})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return A})),n.d(t,"createContext",(function(){return T})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return H}));var z,H,L,U,N,$,M,D,W={},F=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;z=F.slice,H={__e:function(e,t,n,o){for(var r,i,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(t){e=t}throw e}},L=0,U=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=u,N=[],$="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,D=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:i,hydrate:l}=o,_=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw-esm.js"),"function"==typeof _(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=_(n("QfWi")),o={};const l=document.querySelector('[type="__PREACT_CLI_DATA__"]');l&&(o=JSON.parse(decodeURI(l.innerHTML)).preRenderData||o);const c={preRenderData:o};o.url&&u(o.url);i(r(t,{CLI_DATA:c}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.6d60f.esm.js.map