!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/simon-says/",n(n.s="mdyV")}({QfWi:function(e,n,t){"use strict";function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e){var n=this||{},t=e.call?e(n.p):e;return P(t.unshift?t.raw?C(t,[].slice.call(arguments,1),n.p):t.reduce((function(e,t){return o(e,t&&t.call?t(n.p):t)}),{}):t,m(n.target),n.g,n.o,n.k)}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function _(e){var n=e.size,t=.5*n,r=l(p||(p=c(["\n  z-index:100;\n  overflow: hidden;\n  position:absolute;\n  background-color: black;\n  border-radius: 999px;\n  border:  ","px solid black;\n  color:white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: ","px;\n  width: ","px;\n  display:flex;\n  flex-direction: column;\n  \n  .top-section {\n    height:45%;\n    background-color: #111111;\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    font-size: ","px;\n    padding-bottom:","px;\n  }\n  .bottom-section {\n    height:55%;\n    background-color:#222222;\n  }\n  "])),.04*n,t,t,.045*n,.02*n);return Object(h.a)("div",{class:r},Object(h.a)("div",{class:"top-section"},"SIMON SAYS"),Object(h.a)("div",{class:"bottom-section"}))}function s(e){var n=e.position,t=e.size,r=u(e,E),o=l(d||(d=c(["\n    color: green;\n    fill: currentColor;\n    ","\n\n    ","\n\n  ","\n  "])),2===n?"\n      color: red;\n      transform: rotateZ(90deg);\n    ":void 0,3===n?"\n    color: yellow;\n    transform: rotateZ(270deg);\n  ":void 0,4===n?"\n  color: blue;\n  transform: rotateZ(180deg);\n":void 0),i=.5*t;return Object(h.a)("svg",a({class:o,width:"".concat(i,"px"),height:"".concat(i,"px")},r,{viewBox:"0 0 50 50"}),Object(h.a)("circle",{cx:"50",cy:"50",r:"50"}))}t.r(n);var f,p,d,h=t("hosL"),v=function(e){var n,t=e.selector,r=e.inline,o=e.clientSpecified,i=[],l=document.currentScript||(n=document.getElementsByTagName("script"))[n.length-1];!0===r&&i.push(l.parentNode);return!0!==o||t||(t=function(e){var n=e.attributes,t=null;return Object.keys(n).forEach((function(e){n.hasOwnProperty(e)&&"data-mount-in"===n[e].name&&(t=n[e].nodeValue)})),t}(l)),t&&[].forEach.call(document.querySelectorAll(t),(function(e){i.push(e)})),i},b=function(e,n,t,o,i){n.forEach((function(n){var l=n;if(!l._habitat){l._habitat=!0;var a=function(e,n){void 0===n&&(n={});var t=e.attributes,o=r({},n);return Object.keys(t).forEach((function(e){if(t.hasOwnProperty(e)){var n=t[e].name;if(!n||"string"!=typeof n)return!1;var r=n.split(/(data-props?-)/).pop()||"";n!==(r=r.replace(/-([a-z])/gi,(function(e,n){return n.toUpperCase()})))&&(o[r]=t[e].nodeValue)}})),[].forEach.call(e.getElementsByTagName("script"),(function(e){var n={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type")&&"application/json"!==e.getAttribute("type"))return;try{n=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}r(o,n)}})),o}(n,i)||i;return o&&(l.innerHTML=""),Object(h.c)(Object(h.a)(e,a),l,t)}}))},y=function(e){var n=e;return{render:function(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t=null);var r=e.inline;void 0===r&&(r=!1);var o=e.clean;void 0===o&&(o=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var l=e.defaultProps;void 0===l&&(l={});var a=v({selector:t,inline:r,clientSpecified:i}),u=function(){if(a.length>0){var e=v({selector:t,inline:r,clientSpecified:i});return b(n,e,null,o,l)}};u(),document.addEventListener("DOMContentLoaded",u),document.addEventListener("load",u)}}},g={data:""},m=function(e){return"object"==("undefined"==typeof window?"undefined":i(window))?((e?e.querySelector("#_goober"):window._goober)||o((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g},k=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,x=/\/\*[^]*?\*\/|  +/g,O=/\n+/g,w=function e(n,t){var r="",o="",l="",a=function(a){var c=n[a];"@"==a[0]?"i"==a[1]?r=a+" "+c+";":o+="f"==a[1]?e(c,a):a+"{"+e(c,"k"==a[1]?"":t)+"}":"object"==i(c)?o+=e(c,t?t.replace(/([^,])+/g,(function(e){return a.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,e):e?e+" "+n:n}))})):a):null!=c&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=e.p?e.p(a,c):a+":"+c+";"),u=a};for(var u in n)a(u);return r+(t&&l?t+"{"+l+"}":l)+o},j={},S=function e(n){if("object"==i(n)){var t="";for(var r in n)t+=r+e(n[r]);return t}return n},P=function(e,n,t,r,o){var i,l,a,u=S(e),c=j[u]||(j[u]=function(e){for(var n=0,t=11;n<e.length;)t=101*t+e.charCodeAt(n++)>>>0;return"go"+t}(u));if(!j[c]){var _=u!==e?e:function(e){for(var n,t,r=[{}];n=k.exec(e.replace(x,""));)n[4]?r.shift():n[3]?(t=n[3].replace(O," ").trim(),r.unshift(r[0][t]=r[0][t]||{})):r[0][n[1]]=n[2].replace(O," ").trim();return r[0]}(e);j[c]=w(o?(a=_,(l="@keyframes "+c)in(i={})?Object.defineProperty(i,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[l]=a,i):_,t?"":"."+c)}return function(e,n,t){-1==n.data.indexOf(e)&&(n.data=t?e+n.data:n.data+e)}(j[c],n,r),c},C=function(e,n,t){return e.reduce((function(e,r,o){var l=n[o];if(l&&l.call){var a=l(t),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;l=u?"."+u:a&&"object"==i(a)?a.props?"":w(a,""):!1===a?"":a}return e+r+(null==l?"":l)}),"")},E=(l.bind({g:1}),l.bind({k:1}),["position","size","className"]);!function(e,n,t,r){w.p=n,e,t,r}(h.a);var z="\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml, body {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput, button, textarea, select {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}\n",A=y((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.size;n=n||400;var t=l(f||(f=c(["\n  @import url('https://fonts.googleapis.com/css2?family=Sarpanch:wght@800&display=swap');\n  ","\n  --size: ","px;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  background-color:black;\n  border-radius: 999px;\n  font-family: Sarpanch;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n\n\n  .button-container {\n    display:grid;\n    place-content: center;\n  }\n  .outer-ring {\n    width:100%;\n    height:100%;\n    position:absolute;\n    border: ","px solid black;\n    border-radius: 999px;\n    z-index:100;\n  }\n\n  .vertical-border {\n    position:absolute;\n    height:95%;\n    z-index:50;\n    top:50%;\n    left:50%;\n    width: ","px;\n    transform: translate(-50%, -50%);\n    background-color:black;\n  }\n\n  .horizontal-border {\n    position:absolute;\n    width:95%;\n    z-index:50;\n    top:50%;\n    left:50%;\n    height: ","px;\n    transform: translate(-50%, -50%);\n    background-color:black;\n  }\n\n  "])),z,n,.04*n,.04*n,.04*n);return Object(h.a)("div",{class:t},Object(h.a)(_,{size:.8*n}),Object(h.a)("div",{class:"outer-ring"}),Object(h.a)("div",{class:"vertical-border"}),Object(h.a)("div",{class:"horizontal-border"}),Object(h.a)("div",{class:"button-container"},Object(h.a)(s,{position:1,size:n})),Object(h.a)("div",{class:"button-container"},Object(h.a)(s,{position:2,size:n})),Object(h.a)("div",{class:"button-container"},Object(h.a)(s,{position:3,size:n})),Object(h.a)("div",{class:"button-container"},Object(h.a)(s,{position:4,size:n})))}));A.render({selector:'[data-widget-host="habitat"]',clean:!0})},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function i(e,n,t){var r,o,i,a={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:a[i]=n[i];if(arguments.length>2&&(a.children=arguments.length>3?C.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===a[i]&&(a[i]=e.defaultProps[i]);return l(e,a,r,o,null)}function l(e,n,t,r,o){var i={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++z:o};return null==o&&null!=E.vnode&&E.vnode(i),i}function a(e){return e.children}function u(e,n){this.props=e,this.context=n}function c(e,n){if(null==n)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?c(e):null}function _(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return _(e)}}function s(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!f.__r++||L!==E.debounceRendering)&&((L=E.debounceRendering)||T)(f)}function f(){for(var e;f.__r=A.length;)e=A.sort((function(e,n){return e.__v.__b-n.__v.__b})),A=[],e.some((function(e){var n,t,o,i,l,a;e.__d&&(l=(i=(n=e).__v).__e,(a=n.__P)&&(t=[],(o=r({},i)).__v=i.__v+1,m(a,i,o,n.__n,void 0!==a.ownerSVGElement,null!=i.__h?[l]:null,t,null==l?c(i):l,i.__h),k(t,i),i.__e!=l&&_(i)))}))}function p(e,n,t,r,o,i,u,_,s,f){var p,v,b,y,g,k,x,j=r&&r.__k||N,S=j.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(y=t.__k[p]=null==(y=n[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?l(null,y,null,null,y):Array.isArray(y)?l(a,{children:y},null,null,null):y.__b>0?l(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(b=j[p])||b&&y.key==b.key&&y.type===b.type)j[p]=void 0;else for(v=0;v<S;v++){if((b=j[v])&&y.key==b.key&&y.type===b.type){j[v]=void 0;break}b=null}m(e,y,b=b||M,o,i,u,_,s,f),g=y.__e,(v=y.ref)&&b.ref!=v&&(x||(x=[]),b.ref&&x.push(b.ref,null,y),x.push(v,y.__c||g,y)),null!=g?(null==k&&(k=g),"function"==typeof y.type&&y.__k===b.__k?y.__d=s=d(y,s,e):s=h(e,y,b,j,g,s),"function"==typeof t.type&&(t.__d=s)):s&&b.__e==s&&s.parentNode!=e&&(s=c(b))}for(t.__e=k,p=S;p--;)null!=j[p]&&("function"==typeof t.type&&null!=j[p].__e&&j[p].__e==t.__d&&(t.__d=c(r,p+1)),w(j[p],j[p]));if(x)for(p=0;p<x.length;p++)O(x[p],x[++p],x[++p])}function d(e,n,t){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,n="function"==typeof r.type?d(r,n,t):h(t,r,r,o,r.__e,n));return n}function h(e,n,t,r,o,i){var l,a,u;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(a=i,u=0;(a=a.nextSibling)&&u<r.length;u+=2)if(a==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function v(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||D.test(n)?t:t+"px"}function b(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||v(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||v(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r||e.addEventListener(n,i?g:y,i):e.removeEventListener(n,i?g:y,i);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function y(e){this.l[e.type+!1](E.event?E.event(e):e)}function g(e){this.l[e.type+!0](E.event?E.event(e):e)}function m(e,n,t,o,i,l,c,_,s){var f,d,h,v,b,y,g,m,k,O,w,S=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,_=n.__e=t.__e,n.__h=null,l=[_]),(f=E.__b)&&f(n);try{e:if("function"==typeof S){if(m=n.props,k=(f=S.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:("prototype"in S&&S.prototype.render?n.__c=d=new S(m,O):(n.__c=d=new u(m,O),d.constructor=S,d.render=j),k&&k.sub(d),d.props=m,d.state||(d.state={}),d.context=O,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=S.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,S.getDerivedStateFromProps(m,d.__s))),v=d.props,b=d.state,h)null==S.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==S.getDerivedStateFromProps&&m!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(m,O),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(m,d.__s,O)||n.__v===t.__v){d.props=m,d.state=d.__s,n.__v!==t.__v&&(d.__d=!1),d.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(m,d.__s,O),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,b,y)}))}d.context=O,d.props=m,d.state=d.__s,(f=E.__r)&&f(n),d.__d=!1,d.__v=n,d.__P=e,f=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(v,b)),w=null!=f&&f.type===a&&null==f.key?f.props.children:f,p(e,Array.isArray(w)?w:[w],n,t,o,i,l,c,_,s),d.base=n.__e,n.__h=null,d.__h.length&&c.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,o,i,l,c,s);(f=E.diffed)&&f(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=_,n.__h=!!s,l[l.indexOf(_)]=null),E.__e(e,n,t)}}function k(e,n){E.__c&&E.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){E.__e(e,n.__v)}}))}function x(e,n,t,r,i,l,a,u){var _,s,f,d=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(i=!0),null!=l)for(;y<l.length;y++)if((_=l[y])&&"setAttribute"in _==!!v&&(v?_.localName===v:3===_.nodeType)){e=_,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,u=!1}if(null===v)d===h||u&&e.data===h||(e.data=h);else{if(l=l&&C.call(e.childNodes),s=(d=t.props||M).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=l)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,o){var i;for(i in t)"children"===i||"key"===i||i in n||b(e,i,null,t[i],r);for(i in n)o&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||b(e,i,n[i],t[i],r)}(e,h,d,i,u),f)n.__k=[];else if(y=n.props.children,p(e,Array.isArray(y)?y:[y],n,t,r,i&&"foreignObject"!==v,l,a,l?l[0]:t.__k&&c(t,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);u||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==d.value)&&b(e,"value",y,d.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&b(e,"checked",y,d.checked,!1))}return e}function O(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){E.__e(e,t)}}function w(e,n,t){var r,i;if(E.unmount&&E.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||O(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&w(r[i],n,"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function j(e,n,t){return this.constructor(e,t)}function S(e,n,t){var r,o,l;E.__&&E.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],m(n,e=(!r&&t||n).__k=i(a,null,[e]),o||M,M,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?C.call(n.childNodes):null,l,!r&&t?t:o?o.__e:n.firstChild,r),k(l,e)}function P(e,n){S(e,n,P)}t.d(n,"c",(function(){return S})),t.d(n,"b",(function(){return P})),t.d(n,"a",(function(){return i}));var C,E,z,A,T,L,M={},N=[],D=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;C=N.slice,E={__e:function(e,n,t,r){for(var o,i,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(n){e=n}throw e}},z=0,u.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),s(this))},u.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),s(this))},u.prototype.render=a,A=[],T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f.__r=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL"),o=r.a,i=r.c,l=function(e){return e&&e.default?e.default:e},a=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(t.p)+"sw.js"),"function"==typeof l(t("QfWi"))){var u=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=l(t("QfWi")),n={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(n=JSON.parse(decodeURI(r.innerHTML)).preRenderData||n);var c={preRenderData:n};n.url&&a(n.url);i(o(e,{CLI_DATA:c}),document.body,u)}()}}});
//# sourceMappingURL=bundle.4fc44.js.map