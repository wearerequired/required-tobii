(window.requiredTobiiWebpackJsonp=window.requiredTobiiWebpackJsonp||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.requiredTobiiWebpackJsonp=window.requiredTobiiWebpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;o.push([2,1]),n()}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){(function(t){var n;n=function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var r=function(e){return e&&e.Math==Math&&e},i=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),o=function(e){try{return!!e()}catch(e){return!0}},a=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,l={f:u&&!c.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:c},s=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,f=function(e){return d.call(e).slice(8,-1)},p="".split,b=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==f(e)?p.call(e,""):Object(e)}:Object,h=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return b(h(e))},g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},y=function(e,t){if(!g(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!g(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!g(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,w=function(e,t){return m.call(e,t)},x=i.document,E=g(x)&&g(x.createElement),A=!a&&!o((function(){return 7!=Object.defineProperty((e="div",E?x.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),S=Object.getOwnPropertyDescriptor,L={f:a?S:function(e,t){if(e=v(e),t=y(t,!0),A)try{return S(e,t)}catch(e){}if(w(e,t))return s(!l.f.call(e,t),e[t])}},O=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},_=Object.defineProperty,C={f:a?_:function(e,t,n){if(O(e),t=y(t,!0),O(n),A)try{return _(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},I=a?function(e,t,n){return C.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e},T=function(e,t){try{I(i,e,t)}catch(n){i[e]=t}return t},P="__core-js_shared__",j=i[P]||T(P,{}),k=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return k.call(e)});var M,N,R,D,q=j.inspectSource,U=i.WeakMap,Y="function"==typeof U&&/native code/.test(q(U)),X=n((function(e){(e.exports=function(e,t){return j[e]||(j[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),z=0,V=Math.random(),H=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++z+V).toString(36)},B=X("keys"),G={},F=i.WeakMap;if(Y){var W=new F,$=W.get,J=W.has,K=W.set;M=function(e,t){return K.call(W,e,t),t},N=function(e){return $.call(W,e)||{}},R=function(e){return J.call(W,e)}}else{var Q=B[D="state"]||(B[D]=H(D));G[Q]=!0,M=function(e,t){return I(e,Q,t),t},N=function(e){return w(e,Q)?e[Q]:{}},R=function(e){return w(e,Q)}}var Z,ee,te={set:M,get:N,has:R,enforce:function(e){return R(e)?N(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!g(t)||(n=N(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=n((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof t||w(o,"name")||I(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==i?(c?!l&&e[t]&&(u=!0):delete e[t],u?e[t]=o:I(e,t,o)):u?e[t]=o:T(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||q(this)}))})),re=i,ie=function(e){return"function"==typeof e?e:void 0},oe=function(e,t){return arguments.length<2?ie(re[e])||ie(i[e]):re[e]&&re[e][t]||i[e]&&i[e][t]},ae=Math.ceil,ce=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?ce:ae)(e)},le=Math.min,se=function(e){return e>0?le(ue(e),9007199254740991):0},de=Math.max,fe=Math.min,pe=function(e,t){var n=ue(e);return n<0?de(n+t,0):fe(n,t)},be=function(e){return function(t,n,r){var i,o=v(t),a=se(o.length),c=pe(r,a);if(e&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===n)return e||c||0;return!e&&-1}},he={includes:be(!0),indexOf:be(!1)},ve=he.indexOf,ge=function(e,t){var n,r=v(e),i=0,o=[];for(n in r)!w(G,n)&&w(r,n)&&o.push(n);for(;t.length>i;)w(r,n=t[i++])&&(~ve(o,n)||o.push(n));return o},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=ye.concat("length","prototype"),we={f:Object.getOwnPropertyNames||function(e){return ge(e,me)}},xe={f:Object.getOwnPropertySymbols},Ee=oe("Reflect","ownKeys")||function(e){var t=we.f(O(e)),n=xe.f;return n?t.concat(n(e)):t},Ae=function(e,t){for(var n=Ee(t),r=C.f,i=L.f,o=0;o<n.length;o++){var a=n[o];w(e,a)||r(e,a,i(t,a))}},Se=/#|\.prototype\./,Le=function(e,t){var n=_e[Oe(e)];return n==Ie||n!=Ce&&("function"==typeof t?o(t):!!t)},Oe=Le.normalize=function(e){return String(e).replace(Se,".").toLowerCase()},_e=Le.data={},Ce=Le.NATIVE="N",Ie=Le.POLYFILL="P",Te=Le,Pe=L.f,je=function(e,t){var n,r,o,a,c,u=e.target,l=e.global,s=e.stat;if(n=l?i:s?i[u]||T(u,{}):(i[u]||{}).prototype)for(r in t){if(a=t[r],o=e.noTargetGet?(c=Pe(n,r))&&c.value:n[r],!Te(l?r:u+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;Ae(a,o)}(e.sham||o&&o.sham)&&I(a,"sham",!0),ne(n,r,a,e)}},ke=Array.isArray||function(e){return"Array"==f(e)},Me=function(e){return Object(h(e))},Ne=function(e,t,n){var r=y(t);r in e?C.f(e,r,s(0,n)):e[r]=n},Re=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),De=Re&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,qe=X("wks"),Ue=i.Symbol,Ye=De?Ue:Ue&&Ue.withoutSetter||H,Xe=function(e){return w(qe,e)||(Re&&w(Ue,e)?qe[e]=Ue[e]:qe[e]=Ye("Symbol."+e)),qe[e]},ze=Xe("species"),Ve=function(e,t){var n;return ke(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!ke(n.prototype)?g(n)&&null===(n=n[ze])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},He=oe("navigator","userAgent")||"",Be=i.process,Ge=Be&&Be.versions,Fe=Ge&&Ge.v8;Fe?ee=(Z=Fe.split("."))[0]+Z[1]:He&&(!(Z=He.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=He.match(/Chrome\/(\d+)/))&&(ee=Z[1]);var We=ee&&+ee,$e=Xe("species"),Je=function(e){return We>=51||!o((function(){var t=[];return(t.constructor={})[$e]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Ke=Xe("isConcatSpreadable"),Qe=9007199254740991,Ze="Maximum allowed index exceeded",et=We>=51||!o((function(){var e=[];return e[Ke]=!1,e.concat()[0]!==e})),tt=Je("concat"),nt=function(e){if(!g(e))return!1;var t=e[Ke];return void 0!==t?!!t:ke(e)};je({target:"Array",proto:!0,forced:!et||!tt},{concat:function(e){var t,n,r,i,o,a=Me(this),c=Ve(a,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(nt(o=-1===t?a:arguments[t])){if(u+(i=se(o.length))>Qe)throw TypeError(Ze);for(n=0;n<i;n++,u++)n in o&&Ne(c,u,o[n])}else{if(u>=Qe)throw TypeError(Ze);Ne(c,u++,o)}return c.length=u,c}});var rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}},it=[].push,ot=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,o=6==e,a=5==e||o;return function(c,u,l,s){for(var d,f,p=Me(c),h=b(p),v=rt(u,l,3),g=se(h.length),y=0,m=s||Ve,w=t?m(c,g):n?m(c,0):void 0;g>y;y++)if((a||y in h)&&(f=v(d=h[y],y,p),e))if(t)w[y]=f;else if(f)switch(e){case 3:return!0;case 5:return d;case 6:return y;case 2:it.call(w,d)}else if(i)return!1;return o?-1:r||i?i:w}},at={forEach:ot(0),map:ot(1),filter:ot(2),some:ot(3),every:ot(4),find:ot(5),findIndex:ot(6)},ct=Object.defineProperty,ut={},lt=function(e){throw e},st=function(e,t){if(w(ut,e))return ut[e];t||(t={});var n=[][e],r=!!w(t,"ACCESSORS")&&t.ACCESSORS,i=w(t,0)?t[0]:lt,c=w(t,1)?t[1]:void 0;return ut[e]=!!n&&!o((function(){if(r&&!a)return!0;var e={length:-1};r?ct(e,1,{enumerable:!0,get:lt}):e[1]=1,n.call(e,i,c)}))},dt=at.filter,ft=Je("filter"),pt=st("filter");je({target:"Array",proto:!0,forced:!ft||!pt},{filter:function(e){return dt(this,e,arguments.length>1?arguments[1]:void 0)}});var bt=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))},ht=at.forEach,vt=bt("forEach"),gt=st("forEach"),yt=vt&&gt?[].forEach:function(e){return ht(this,e,arguments.length>1?arguments[1]:void 0)};je({target:"Array",proto:!0,forced:[].forEach!=yt},{forEach:yt});var mt=he.indexOf,wt=[].indexOf,xt=!!wt&&1/[1].indexOf(1,-0)<0,Et=bt("indexOf"),At=st("indexOf",{ACCESSORS:!0,1:0});je({target:"Array",proto:!0,forced:xt||!Et||!At},{indexOf:function(e){return xt?wt.apply(this,arguments)||0:mt(this,e,arguments.length>1?arguments[1]:void 0)}});var St=[].join,Lt=b!=Object,Ot=bt("join",",");je({target:"Array",proto:!0,forced:Lt||!Ot},{join:function(e){return St.call(v(this),void 0===e?",":e)}});var _t=Je("slice"),Ct=st("slice",{ACCESSORS:!0,0:0,1:2}),It=Xe("species"),Tt=[].slice,Pt=Math.max;je({target:"Array",proto:!0,forced:!_t||!Ct},{slice:function(e,t){var n,r,i,o=v(this),a=se(o.length),c=pe(e,a),u=pe(void 0===t?a:t,a);if(ke(o)&&("function"!=typeof(n=o.constructor)||n!==Array&&!ke(n.prototype)?g(n)&&null===(n=n[It])&&(n=void 0):n=void 0,n===Array||void 0===n))return Tt.call(o,c,u);for(r=new(void 0===n?Array:n)(Pt(u-c,0)),i=0;c<u;c++,i++)c in o&&Ne(r,i,o[c]);return r.length=i,r}});var jt=Object.keys||function(e){return ge(e,ye)},kt=l.f,Mt=function(e){return function(t){for(var n,r=v(t),i=jt(r),o=i.length,c=0,u=[];o>c;)n=i[c++],a&&!kt.call(r,n)||u.push(e?[n,r[n]]:r[n]);return u}},Nt=[Mt(!0),Mt(!1)][0];je({target:"Object",stat:!0},{entries:function(e){return Nt(e)}});var Rt=function(){var e=O(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function Dt(e,t){return RegExp(e,t)}var qt,Ut,Yt={UNSUPPORTED_Y:o((function(){var e=Dt("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:o((function(){var e=Dt("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},Xt=RegExp.prototype.exec,zt=String.prototype.replace,Vt=Xt,Ht=(qt=/a/,Ut=/b*/g,Xt.call(qt,"a"),Xt.call(Ut,"a"),0!==qt.lastIndex||0!==Ut.lastIndex),Bt=Yt.UNSUPPORTED_Y||Yt.BROKEN_CARET,Gt=void 0!==/()??/.exec("")[1];(Ht||Gt||Bt)&&(Vt=function(e){var t,n,r,i,o=this,a=Bt&&o.sticky,c=Rt.call(o),u=o.source,l=0,s=e;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),s=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(u="(?: "+u+")",s=" "+s,l++),n=new RegExp("^(?:"+u+")",c)),Gt&&(n=new RegExp("^"+u+"$(?!\\s)",c)),Ht&&(t=o.lastIndex),r=Xt.call(a?n:o,s),a?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:Ht&&r&&(o.lastIndex=o.global?r.index+r[0].length:t),Gt&&r&&r.length>1&&zt.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var Ft=Vt;je({target:"RegExp",proto:!0,forced:/./.exec!==Ft},{exec:Ft});var Wt=Xe("species"),$t=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Jt="$0"==="a".replace(/./,"$0"),Kt=Xe("replace"),Qt=!!/./[Kt]&&""===/./[Kt]("a","$0"),Zt=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),en=function(e){return function(t,n){var r,i,o=String(h(t)),a=ue(n),c=o.length;return a<0||a>=c?e?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?e?o.charAt(a):r:e?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},tn=(en(!1),en(!0)),nn=function(e,t,n){return t+(n?tn(e,t).length:1)},rn=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==f(e))throw TypeError("RegExp#exec called on incompatible receiver");return Ft.call(e,t)};for(var on in function(e,t,n,r){var i=Xe(e),a=!o((function(){var t={};return t[i]=function(){return 7},7!=""[e](t)})),c=a&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Wt]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return t=!0,null},n[i](""),!t}));if(!a||!c||"replace"===e&&(!$t||!Jt||Qt)||"split"===e&&!Zt){var u=/./[i],l=n(i,""[e],(function(e,t,n,r,i){return t.exec===Ft?a&&!i?{done:!0,value:u.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Jt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Qt}),s=l[0],d=l[1];ne(String.prototype,e,s),ne(RegExp.prototype,i,2==t?function(e,t){return d.call(e,this,t)}:function(e){return d.call(e,this)})}r&&I(RegExp.prototype[i],"sham",!0)}("match",1,(function(e,t,n){return[function(t){var n=h(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=O(e),o=String(this);if(!i.global)return rn(i,o);var a=i.unicode;i.lastIndex=0;for(var c,u=[],l=0;null!==(c=rn(i,o));){var s=String(c[0]);u[l]=s,""===s&&(i.lastIndex=nn(o,se(i.lastIndex),a)),l++}return 0===l?null:u}]})),{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var an=i[on],cn=an&&an.prototype;if(cn&&cn.forEach!==yt)try{I(cn,"forEach",yt)}catch(e){cn.forEach=yt}}function un(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ln(Object(n),!0).forEach((function(t){un(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}if("function"!=typeof window.CustomEvent){var dn=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};dn.prototype=window.Event.prototype,window.CustomEvent=dn}return function e(t){var n=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'],r=[],i={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0},o=[],a={},c=0,u=null,l=null,s=null,d=null,f=null,p={},b=!1,h=!1,v=!1,g=null,y=null,m=null,w=!1,x=!1,E=0,A={},S=null,L=null,O={image:{checkSupport:function(e){return!e.hasAttribute("data-type")&&e.href.match(/\.(png|jpe?g|tiff|tif|gif|bmp|webp|avif|svg|ico)(\?.*)?$/i)},init:function(e,t){var n=document.createElement("figure"),r=document.createElement("figcaption"),i=document.createElement("img"),o=e.querySelector("img"),u=document.createElement("div");n.style.opacity="0",o&&(i.alt=o.alt||""),i.setAttribute("src",""),i.setAttribute("data-src",e.href),n.appendChild(i),a.captions&&("function"==typeof a.captionText?r.textContent=a.captionText(e):"self"===a.captionsSelector&&e.getAttribute(a.captionAttribute)?r.textContent=e.getAttribute(a.captionAttribute):"img"===a.captionsSelector&&o&&o.getAttribute(a.captionAttribute)&&(r.textContent=o.getAttribute(a.captionAttribute)),r.textContent&&(r.id="tobii-figcaption-".concat(c),n.appendChild(r),i.setAttribute("aria-labelledby",r.id),++c)),t.appendChild(n),u.className="tobii__loader",u.setAttribute("role","progressbar"),u.setAttribute("aria-label",a.loadingIndicatorLabel),t.appendChild(u),t.setAttribute("data-type","image")},onPreload:function(e){O.image.onLoad(e)},onLoad:function(e){var t=e.querySelector("img");if(t.hasAttribute("data-src")){var n=e.querySelector("figure"),r=e.querySelector(".tobii__loader");t.onload=function(){e.removeChild(r),n.style.opacity="1"},t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")}},onLeave:function(e){},onCleanup:function(e){}},html:{checkSupport:function(e){return oe(e,"html")},init:function(e,t){var n=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target"),r=document.querySelector(n);if(!r)throw new Error("Ups, I can't find the target ".concat(n,"."));t.appendChild(r),t.setAttribute("data-type","html")},onPreload:function(e){},onLoad:function(e){var t=e.querySelector("video");t&&(t.hasAttribute("data-time")&&t.readyState>0&&(t.currentTime=t.getAttribute("data-time")),a.autoplayVideo&&t.play())},onLeave:function(e){var t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime))},onCleanup:function(e){var t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){var n=t.cloneNode(!0);ae(t),t.load(),t.parentNode.removeChild(t),e.appendChild(n)}}},iframe:{checkSupport:function(e){return oe(e,"iframe")},init:function(e,t){var n=document.createElement("iframe"),r=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target");n.setAttribute("frameborder","0"),n.setAttribute("src",""),n.setAttribute("data-src",r),e.getAttribute("data-width")&&(n.style.maxWidth="".concat(e.getAttribute("data-width"),"px")),e.getAttribute("data-height")&&(n.style.maxHeight="".concat(e.getAttribute("data-height"),"px")),t.appendChild(n),t.setAttribute("data-type","iframe")},onPreload:function(e){},onLoad:function(e){var t=e.querySelector("iframe");t.setAttribute("src",t.getAttribute("data-src"))},onLeave:function(e){},onCleanup:function(e){}},youtube:{checkSupport:function(e){return oe(e,"youtube")},init:function(e,t){var n=document.createElement("div");t.appendChild(n),o[E]=new window.YT.Player(n,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",E),t.setAttribute("data-type","youtube"),E++},onPreload:function(e){},onLoad:function(e){a.autoplayVideo&&o[e.getAttribute("data-player")].playVideo()},onLeave:function(e){1===o[e.getAttribute("data-player")].getPlayerState()&&o[e.getAttribute("data-player")].pauseVideo()},onCleanup:function(e){1===o[e.getAttribute("data-player")].getPlayerState()&&o[e.getAttribute("data-player")].pauseVideo()}}},_=function(e){if(null===document.querySelector('[data-type="youtube"]')||x)I(e);else{if(null===document.getElementById("iframe_api")){var t=document.createElement("script"),n=document.getElementsByTagName("script")[0];t.id="iframe_api",t.src="https://www.youtube.com/iframe_api",n.parentNode.insertBefore(t,n)}-1===r.indexOf(e)&&r.push(e),window.onYouTubePlayerAPIReady=function(){r.forEach((function(e){I(e)})),x=!0}}},C=function(e){return e.hasAttribute("data-group")?e.getAttribute("data-group"):"default"},I=function(e){var t;if(S=C(e),Object.prototype.hasOwnProperty.call(A,S)||(A[S]=(t=i,JSON.parse(JSON.stringify(t))),j()),-1!==A[S].gallery.indexOf(e))throw new Error("Ups, element already added.");if(A[S].gallery.push(e),A[S].elementsLength++,a.zoom&&e.querySelector("img")){var n=document.createElement("div");n.className="tobii-zoom__icon",n.innerHTML=a.zoomText,e.classList.add("tobii-zoom"),e.appendChild(n)}e.addEventListener("click",G),k(e),se()&&S===L&&(ce(),ue())},T=function(e){var t=C(e);if(-1===A[t].gallery.indexOf(e))throw new Error("Ups, I can't find a slide for the element ".concat(e,"."));var n=A[t].gallery.indexOf(e),r=A[t].sliderElements[n];if(se()&&t===L&&n===A[t].currentIndex){if(1===A[t].elementsLength)throw N(),new Error("Ups, I've closed. There are no slides more to show.");0===A[t].currentIndex?U():q()}if(A[t].elementsLength--,a.zoom&&e.querySelector(".tobii-zoom__icon")){var i=e.querySelector(".tobii-zoom__icon");i.parentNode.classList.remove("tobii-zoom"),i.parentNode.removeChild(i)}e.removeEventListener("click",G),r.parentNode.removeChild(r)},P=function(){(u=document.createElement("div")).setAttribute("role","dialog"),u.setAttribute("aria-hidden","true"),u.classList.add("tobii"),u.classList.add(a.theme),(l=document.createElement("button")).className="tobii__btn tobii__btn--previous",l.setAttribute("type","button"),l.setAttribute("aria-label",a.navLabel[0]),l.innerHTML=a.navText[0],u.appendChild(l),(s=document.createElement("button")).className="tobii__btn tobii__btn--next",s.setAttribute("type","button"),s.setAttribute("aria-label",a.navLabel[1]),s.innerHTML=a.navText[1],u.appendChild(s),(d=document.createElement("button")).className="tobii__btn tobii__btn--close",d.setAttribute("type","button"),d.setAttribute("aria-label",a.closeLabel),d.innerHTML=a.closeText,u.appendChild(d),(f=document.createElement("div")).className="tobii__counter",u.appendChild(f),document.body.appendChild(u)},j=function(){A[S].slider=document.createElement("div"),A[S].slider.className="tobii__slider",A[S].slider.setAttribute("aria-hidden","true"),u.appendChild(A[S].slider)},k=function(e){for(var t in O)if(Object.prototype.hasOwnProperty.call(O,t)&&O[t].checkSupport(e)){var n=document.createElement("div"),r=document.createElement("div");n.className="tobii__slide",n.style.position="absolute",n.style.left="".concat(100*A[S].x,"%"),n.setAttribute("aria-hidden","true"),O[t].init(e,r),n.appendChild(r),A[S].slider.appendChild(n),A[S].sliderElements.push(n),++A[S].x;break}},M=function(e){if(L=null!==L?L:S,se())throw new Error("Ups, I'm aleady open.");if(!se()&&(e||(e=0),-1===e||e>=A[L].elementsLength))throw new Error("Ups, I can't find slide ".concat(e,"."));a.hideScrollbar&&(document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open")),ce(),a.close||(d.disabled=!1,d.setAttribute("aria-hidden","true")),g=document.activeElement;var t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),A[L].currentIndex=e,V(),re(),D(A[L].currentIndex),A[L].slider.setAttribute("aria-hidden","false"),u.setAttribute("aria-hidden","false"),ue(),R(A[L].currentIndex+1),R(A[L].currentIndex-1),setTimeout((function(){A[L].slider.classList.add("tobii__slider--animate")}),1e3);var n=new window.CustomEvent("open");u.dispatchEvent(n)},N=function(){if(!se())throw new Error("Ups, I'm already closed.");a.hideScrollbar&&(document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open")),ie(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),g.focus(),Y(A[L].currentIndex),X(A[L].currentIndex),u.setAttribute("aria-hidden","true"),A[L].slider.setAttribute("aria-hidden","true"),A[L].currentIndex=0,A[L].slider.classList.remove("tobii__slider--animate")},R=function(e){if(void 0!==A[L].sliderElements[e]){var t=A[L].sliderElements[e].querySelector("[data-type]"),n=t.getAttribute("data-type");O[n].onPreload(t)}},D=function(e){if(void 0!==A[L].sliderElements[e]){var t=A[L].sliderElements[e].querySelector("[data-type]"),n=t.getAttribute("data-type");A[L].sliderElements[e].classList.add("tobii__slide--is-active"),A[L].sliderElements[e].setAttribute("aria-hidden","false"),O[n].onLoad(t)}},q=function(){if(!se())throw new Error("Ups, I'm closed.");A[L].currentIndex>0&&(Y(A[L].currentIndex),D(--A[L].currentIndex),ue("left"),X(A[L].currentIndex+1),R(A[L].currentIndex-1));var e=new window.CustomEvent("previous");u.dispatchEvent(e)},U=function(){if(!se())throw new Error("Ups, I'm closed.");A[L].currentIndex<A[L].elementsLength-1&&(Y(A[L].currentIndex),D(++A[L].currentIndex),ue("right"),X(A[L].currentIndex-1),R(A[L].currentIndex+1));var e=new window.CustomEvent("next");u.dispatchEvent(e)},Y=function(e){if(void 0!==A[L].sliderElements[e]){var t=A[L].sliderElements[e].querySelector("[data-type]"),n=t.getAttribute("data-type");A[L].sliderElements[e].classList.remove("tobii__slide--is-active"),A[L].sliderElements[e].setAttribute("aria-hidden","true"),O[n].onLeave(t)}},X=function(e){if(void 0!==A[L].sliderElements[e]){var t=A[L].sliderElements[e].querySelector("[data-type]"),n=t.getAttribute("data-type");O[n].onCleanup(t)}},z=function(){y=-A[L=null!==L?L:S].currentIndex*u.offsetWidth,A[L].slider.style.transform="translate3d(".concat(y,"px, 0, 0)"),m=y},V=function(){p={startX:0,endX:0,startY:0,endY:0}},H=function(){var e=p.endX-p.startX,t=p.endY-p.startY,n=Math.abs(e),r=Math.abs(t);e>0&&n>a.threshold&&A[L].currentIndex>0?q():e<0&&n>a.threshold&&A[L].currentIndex!==A[L].elementsLength-1?U():t<0&&r>a.threshold&&a.swipeClose?N():z()},B=function(){w||(w=!0,window.requestAnimationFrame((function(){z(),w=!1})))},G=function(e){e.preventDefault(),L=C(e.currentTarget),M(A[L].gallery.indexOf(e.currentTarget))},F=function(e){e.target===l?q():e.target===s?U():(e.target===d||!1===b&&!1===h&&e.target.classList.contains("tobii__slide")&&a.docClose)&&N(),e.stopPropagation()},W=function(e){var t=Array.prototype.slice.call(u.querySelectorAll(".tobii__btn:not([disabled]), .tobii__slide--is-active + ".concat(n.join(", .tobii__slide--is-active ")))).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})),r=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===r?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||r!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),N()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),q()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),U())},$=function(e){fe(e.target)||(e.stopPropagation(),b=!1,h=!1,v=!0,p.startX=e.touches[0].pageX,p.startY=e.touches[0].pageY,A[L].slider.classList.add("tobii__slider--is-dragging"))},J=function(e){e.stopPropagation(),v&&(e.preventDefault(),p.endX=e.touches[0].pageX,p.endY=e.touches[0].pageY,ne())},K=function(e){e.stopPropagation(),v=!1,A[L].slider.classList.remove("tobii__slider--is-dragging"),p.endX&&H(),V()},Q=function(e){fe(e.target)||(e.preventDefault(),e.stopPropagation(),b=!1,h=!1,v=!0,p.startX=e.pageX,p.startY=e.pageY,A[L].slider.classList.add("tobii__slider--is-dragging"))},Z=function(e){e.preventDefault(),v&&(p.endX=e.pageX,p.endY=e.pageY,ne())},ee=function(e){e.stopPropagation(),v=!1,A[L].slider.classList.remove("tobii__slider--is-dragging"),p.endX&&H(),V()},te=function(){v=!1},ne=function(){Math.abs(p.startX-p.endX)>0&&!h&&A[L].elementsLength>1?(A[L].slider.style.transform="translate3d(".concat(m-Math.round(p.startX-p.endX),"px, 0, 0)"),b=!0,h=!1):Math.abs(p.startY-p.endY)>0&&!b&&a.swipeClose&&(A[L].slider.style.transform="translate3d(".concat(m,"px, -").concat(Math.round(p.startY-p.endY),"px, 0)"),b=!1,h=!0)},re=function(){a.keyboard&&window.addEventListener("keydown",W),window.addEventListener("resize",B),window.addEventListener("popstate",N),u.addEventListener("click",F),a.draggable&&(de()&&(u.addEventListener("touchstart",$),u.addEventListener("touchmove",J),u.addEventListener("touchend",K)),u.addEventListener("mousedown",Q),u.addEventListener("mouseup",ee),u.addEventListener("mousemove",Z),u.addEventListener("contextmenu",te))},ie=function(){a.keyboard&&window.removeEventListener("keydown",W),window.removeEventListener("resize",B),window.removeEventListener("popstate",N),u.removeEventListener("click",F),a.draggable&&(de()&&(u.removeEventListener("touchstart",$),u.removeEventListener("touchmove",J),u.removeEventListener("touchend",K)),u.removeEventListener("mousedown",Q),u.removeEventListener("mouseup",ee),u.removeEventListener("mousemove",Z),u.removeEventListener("contextmenu",te))},oe=function(e,t){return e.getAttribute("data-type")===t},ae=function(e){var t=e.querySelectorAll("src");t&&t.forEach((function(e){e.setAttribute("src","")}))},ce=function(){(a.draggable&&a.swipeClose&&!A[L].slider.classList.contains("tobii__slider--is-draggable")||a.draggable&&A[L].elementsLength>1&&!A[L].slider.classList.contains("tobii__slider--is-draggable"))&&A[L].slider.classList.add("tobii__slider--is-draggable"),!a.nav||1===A[L].elementsLength||"auto"===a.nav&&de()?(l.setAttribute("aria-hidden","true"),l.disabled=!0,s.setAttribute("aria-hidden","true"),s.disabled=!0):(l.setAttribute("aria-hidden","false"),l.disabled=!1,s.setAttribute("aria-hidden","false"),s.disabled=!1),a.counter&&1!==A[L].elementsLength?f.setAttribute("aria-hidden","false"):f.setAttribute("aria-hidden","true")},ue=function(e){z(),f.textContent="".concat(A[L].currentIndex+1,"/").concat(A[L].elementsLength),function(e){(!0===a.nav||"auto"===a.nav)&&!de()&&A[L].elementsLength>1?(l.setAttribute("aria-hidden","true"),l.disabled=!0,s.setAttribute("aria-hidden","true"),s.disabled=!0,1===A[L].elementsLength?a.close&&d.focus():0===A[L].currentIndex?(s.setAttribute("aria-hidden","false"),s.disabled=!1,s.focus()):A[L].currentIndex===A[L].elementsLength-1?(l.setAttribute("aria-hidden","false"),l.disabled=!1,l.focus()):(l.setAttribute("aria-hidden","false"),l.disabled=!1,s.setAttribute("aria-hidden","false"),s.disabled=!1,"left"===e?l.focus():s.focus())):a.close&&d.focus()}(e)},le=function(){se()&&N(),Object.entries(A).forEach((function(e){e[1].gallery.forEach((function(e){T(e)}))})),A={},S=L=null,c=0},se=function(){return"false"===u.getAttribute("aria-hidden")},de=function(){return"ontouchstart"in window},fe=function(e){return-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===l||e===s||e===d};return function(e){a=function(e){return sn(sn({},{selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default"}),e)}(e),u||P();var t=document.querySelectorAll(a.selector);if(!t)throw new Error("Ups, I can't find the selector ".concat(a.selector," on this website."));t.forEach((function(e){_(e)}))}(t),e.open=M,e.previous=q,e.next=U,e.close=N,e.add=_,e.remove=T,e.reset=le,e.destroy=function(){le(),u.parentNode.removeChild(u)},e.isOpen=se,e.slidesIndex=function(){return A[L].currentIndex},e.select=function(e){var t=A[L].currentIndex;if(!se())throw new Error("Ups, I'm closed.");if(se()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===A[L].currentIndex)throw new Error("Ups, slide ".concat(e," is already selected."));if(-1===e||e>=A[L].elementsLength)throw new Error("Ups, I can't find slide ".concat(e,"."))}A[L].currentIndex=e,Y(t),D(e),e<t&&(ue("left"),X(t),R(e-1)),e>t&&(ue("right"),X(t),R(e+1))},e.slidesCount=function(){return A[L].elementsLength},e.selectGroup=function(e){if(se())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(A,e))throw new Error("Ups, I don't have a group called \"".concat(e,'".'));L=e},e.currentGroup=function(){return null!==L?L:S},e.on=function(e,t){u.addEventListener(e,t)},e.off=function(e,t){u.removeEventListener(e,t)},e}},e.exports=n()}).call(this,n(3))},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),a=n.n(o);n(4);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}new a.a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selector:"[data-lightbox]",captionText:function(e){var t=e.nextElementSibling;return t&&t.matches("figcaption")||(t=e.parentNode.nextElementSibling)&&t.matches("figcaption")?t.textContent.trim():null}},window.requiredTobiiOptions))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);