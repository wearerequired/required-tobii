(window.requiredTobiiWebpackJsonp=window.requiredTobiiWebpackJsonp||[]).push([[1],[,function(e,t,r){}]]),function(e){function t(t){for(var n,a,s=t[0],d=t[1],l=t[2],c=0,p=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var d=r[s];0!==i[d]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={0:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.requiredTobiiWebpackJsonp=window.requiredTobiiWebpackJsonp||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=d;o.push([2,1]),r()}([function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r(1),new function e(t){const r=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'],n=[],i={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0},o=[];let a={},s=0,d=null,l=null,u=null,c=null,p=null,b={},h=!1,m=!1,g=!1,f=null,y=null,v=null,w=!1,x=!1,A=0,E={},L=null,_=null;const I={image:{checkSupport:e=>!e.hasAttribute("data-type")&&e.href.match(/\.(png|jpe?g|tiff|tif|gif|bmp|webp|avif|svg|ico)(\?.*)?$/i),init(e,t){const r=document.createElement("figure"),n=document.createElement("figcaption"),i=document.createElement("img"),o=e.querySelector("img"),d=document.createElement("div");r.style.opacity="0",o&&(i.alt=o.alt||""),i.setAttribute("src",""),i.setAttribute("data-src",e.href),r.appendChild(i),a.captions&&("function"==typeof a.captionText?n.textContent=a.captionText(e):"self"===a.captionsSelector&&e.getAttribute(a.captionAttribute)?n.textContent=e.getAttribute(a.captionAttribute):"img"===a.captionsSelector&&o&&o.getAttribute(a.captionAttribute)&&(n.textContent=o.getAttribute(a.captionAttribute)),n.textContent&&(n.id="tobii-figcaption-"+s,r.appendChild(n),i.setAttribute("aria-labelledby",n.id),++s)),t.appendChild(r),d.className="tobii__loader",d.setAttribute("role","progressbar"),d.setAttribute("aria-label",a.loadingIndicatorLabel),t.appendChild(d),t.setAttribute("data-type","image")},onPreload(e){I.image.onLoad(e)},onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const r=e.querySelector("figure"),n=e.querySelector(".tobii__loader");t.onload=()=>{e.removeChild(n),r.style.opacity="1"},t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")},onLeave(e){},onCleanup(e){}},html:{checkSupport:e=>ie(e,"html"),init(e,t){const r=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target"),n=document.querySelector(r);if(!n)throw new Error(`Ups, I can't find the target ${r}.`);t.appendChild(n),t.setAttribute("data-type","html")},onPreload(e){},onLoad(e){const t=e.querySelector("video");t&&(t.hasAttribute("data-time")&&t.readyState>0&&(t.currentTime=t.getAttribute("data-time")),a.autoplayVideo&&t.play())},onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime))},onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const r=t.cloneNode(!0);oe(t),t.load(),t.parentNode.removeChild(t),e.appendChild(r)}}},iframe:{checkSupport:e=>ie(e,"iframe"),init(e,t){const r=document.createElement("iframe"),n=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target");r.setAttribute("frameborder","0"),r.setAttribute("src",""),r.setAttribute("data-src",n),e.getAttribute("data-width")&&(r.style.maxWidth=e.getAttribute("data-width")+"px"),e.getAttribute("data-height")&&(r.style.maxHeight=e.getAttribute("data-height")+"px"),t.appendChild(r),t.setAttribute("data-type","iframe")},onPreload(e){},onLoad(e){const t=e.querySelector("iframe");t.setAttribute("src",t.getAttribute("data-src"))},onLeave(e){},onCleanup(e){}},youtube:{checkSupport:e=>ie(e,"youtube"),init(e,t){const r=document.createElement("div");t.appendChild(r),o[A]=new window.YT.Player(r,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",A),t.setAttribute("data-type","youtube"),A++},onPreload(e){},onLoad(e){a.autoplayVideo&&o[e.getAttribute("data-player")].playVideo()},onLeave(e){1===o[e.getAttribute("data-player")].getPlayerState()&&o[e.getAttribute("data-player")].pauseVideo()},onCleanup(e){1===o[e.getAttribute("data-player")].getPlayerState()&&o[e.getAttribute("data-player")].pauseVideo()}}},C=e=>{if(null===document.querySelector('[data-type="youtube"]')||x)S(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===n.indexOf(e)&&n.push(e),window.onYouTubePlayerAPIReady=()=>{n.forEach(e=>{S(e)}),x=!0}}},O=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",S=e=>{if(L=O(e),Object.prototype.hasOwnProperty.call(E,L)||(E[L]=JSON.parse(JSON.stringify(i)),P()),-1!==E[L].gallery.indexOf(e))throw new Error("Ups, element already added.");if(E[L].gallery.push(e),E[L].elementsLength++,a.zoom&&e.querySelector("img")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=a.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",V),k(e),le()&&L===_&&(ae(),se())},T=e=>{const t=O(e);if(-1===E[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const r=E[t].gallery.indexOf(e),n=E[t].sliderElements[r];if(le()&&t===_&&r===E[t].currentIndex){if(1===E[t].elementsLength)throw N(),new Error("Ups, I've closed. There are no slides more to show.");0===E[t].currentIndex?U():X()}if(E[t].elementsLength--,a.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",V),n.parentNode.removeChild(n)}},P=()=>{E[L].slider=document.createElement("div"),E[L].slider.className="tobii__slider",E[L].slider.setAttribute("aria-hidden","true"),d.appendChild(E[L].slider)},k=e=>{for(const t in I)if(Object.prototype.hasOwnProperty.call(I,t)&&I[t].checkSupport(e)){const r=document.createElement("div"),n=document.createElement("div");r.className="tobii__slide",r.style.position="absolute",r.style.left=100*E[L].x+"%",r.setAttribute("aria-hidden","true"),I[t].init(e,n),r.appendChild(n),E[L].slider.appendChild(r),E[L].sliderElements.push(r),++E[L].x;break}},j=e=>{if(_=null!==_?_:L,le())throw new Error("Ups, I'm aleady open.");if(!le()&&(e||(e=0),-1===e||e>=E[_].elementsLength))throw new Error(`Ups, I can't find slide ${e}.`);a.hideScrollbar&&(document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open")),ae(),a.close||(c.disabled=!1,c.setAttribute("aria-hidden","true")),f=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),E[_].currentIndex=e,$(),re(),M(E[_].currentIndex),E[_].slider.setAttribute("aria-hidden","false"),d.setAttribute("aria-hidden","false"),se(),q(E[_].currentIndex+1),q(E[_].currentIndex-1),setTimeout(()=>{E[_].slider.classList.add("tobii__slider--animate")},1e3);const r=new window.CustomEvent("open");d.dispatchEvent(r)},N=()=>{if(!le())throw new Error("Ups, I'm already closed.");a.hideScrollbar&&(document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open")),ne(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),f.focus(),Y(E[_].currentIndex),z(E[_].currentIndex),d.setAttribute("aria-hidden","true"),E[_].slider.setAttribute("aria-hidden","true"),E[_].currentIndex=0,E[_].slider.classList.remove("tobii__slider--animate")},q=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");I[r].onPreload(t)},M=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");E[_].sliderElements[e].classList.add("tobii__slide--is-active"),E[_].sliderElements[e].setAttribute("aria-hidden","false"),I[r].onLoad(t)},X=()=>{if(!le())throw new Error("Ups, I'm closed.");E[_].currentIndex>0&&(Y(E[_].currentIndex),M(--E[_].currentIndex),se("left"),z(E[_].currentIndex+1),q(E[_].currentIndex-1));const e=new window.CustomEvent("previous");d.dispatchEvent(e)},U=()=>{if(!le())throw new Error("Ups, I'm closed.");E[_].currentIndex<E[_].elementsLength-1&&(Y(E[_].currentIndex),M(++E[_].currentIndex),se("right"),z(E[_].currentIndex-1),q(E[_].currentIndex+1));const e=new window.CustomEvent("next");d.dispatchEvent(e)},Y=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");E[_].sliderElements[e].classList.remove("tobii__slide--is-active"),E[_].sliderElements[e].setAttribute("aria-hidden","true"),I[r].onLeave(t)},z=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");I[r].onCleanup(t)},D=()=>{_=null!==_?_:L,y=-E[_].currentIndex*d.offsetWidth,E[_].slider.style.transform=`translate3d(${y}px, 0, 0)`,v=y},$=()=>{b={startX:0,endX:0,startY:0,endY:0}},H=()=>{const e=b.endX-b.startX,t=b.endY-b.startY,r=Math.abs(e),n=Math.abs(t);e>0&&r>a.threshold&&E[_].currentIndex>0?X():e<0&&r>a.threshold&&E[_].currentIndex!==E[_].elementsLength-1?U():t<0&&n>a.threshold&&a.swipeClose?N():D()},B=()=>{w||(w=!0,window.requestAnimationFrame(()=>{D(),w=!1}))},V=e=>{e.preventDefault(),_=O(e.currentTarget),j(E[_].gallery.indexOf(e.currentTarget))},W=e=>{e.target===l?X():e.target===u?U():(e.target===c||!1===h&&!1===m&&e.target.classList.contains("tobii__slide")&&a.docClose)&&N(),e.stopPropagation()},J=e=>{const t=Array.prototype.slice.call(d.querySelectorAll(".tobii__btn:not([disabled]), .tobii__slide--is-active + "+r.join(", .tobii__slide--is-active "))).filter(e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),n=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===n?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||n!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),N()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),X()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),U())},G=e=>{ce(e.target)||(e.stopPropagation(),h=!1,m=!1,g=!0,b.startX=e.touches[0].pageX,b.startY=e.touches[0].pageY,E[_].slider.classList.add("tobii__slider--is-dragging"))},R=e=>{e.stopPropagation(),g&&(e.preventDefault(),b.endX=e.touches[0].pageX,b.endY=e.touches[0].pageY,te())},F=e=>{e.stopPropagation(),g=!1,E[_].slider.classList.remove("tobii__slider--is-dragging"),b.endX&&H(),$()},K=e=>{ce(e.target)||(e.preventDefault(),e.stopPropagation(),h=!1,m=!1,g=!0,b.startX=e.pageX,b.startY=e.pageY,E[_].slider.classList.add("tobii__slider--is-dragging"))},Q=e=>{e.preventDefault(),g&&(b.endX=e.pageX,b.endY=e.pageY,te())},Z=e=>{e.stopPropagation(),g=!1,E[_].slider.classList.remove("tobii__slider--is-dragging"),b.endX&&H(),$()},ee=()=>{g=!1},te=()=>{Math.abs(b.startX-b.endX)>0&&!m&&E[_].elementsLength>1?(E[_].slider.style.transform=`translate3d(${v-Math.round(b.startX-b.endX)}px, 0, 0)`,h=!0,m=!1):Math.abs(b.startY-b.endY)>0&&!h&&a.swipeClose&&(E[_].slider.style.transform=`translate3d(${v}px, -${Math.round(b.startY-b.endY)}px, 0)`,h=!1,m=!0)},re=()=>{a.keyboard&&window.addEventListener("keydown",J),window.addEventListener("resize",B),window.addEventListener("popstate",N),d.addEventListener("click",W),a.draggable&&(ue()&&(d.addEventListener("touchstart",G),d.addEventListener("touchmove",R),d.addEventListener("touchend",F)),d.addEventListener("mousedown",K),d.addEventListener("mouseup",Z),d.addEventListener("mousemove",Q),d.addEventListener("contextmenu",ee))},ne=()=>{a.keyboard&&window.removeEventListener("keydown",J),window.removeEventListener("resize",B),window.removeEventListener("popstate",N),d.removeEventListener("click",W),a.draggable&&(ue()&&(d.removeEventListener("touchstart",G),d.removeEventListener("touchmove",R),d.removeEventListener("touchend",F)),d.removeEventListener("mousedown",K),d.removeEventListener("mouseup",Z),d.removeEventListener("mousemove",Q),d.removeEventListener("contextmenu",ee))},ie=(e,t)=>e.getAttribute("data-type")===t,oe=e=>{const t=e.querySelectorAll("src");t&&t.forEach(e=>{e.setAttribute("src","")})},ae=()=>{(a.draggable&&a.swipeClose&&!E[_].slider.classList.contains("tobii__slider--is-draggable")||a.draggable&&E[_].elementsLength>1&&!E[_].slider.classList.contains("tobii__slider--is-draggable"))&&E[_].slider.classList.add("tobii__slider--is-draggable"),!a.nav||1===E[_].elementsLength||"auto"===a.nav&&ue()?(l.setAttribute("aria-hidden","true"),l.disabled=!0,u.setAttribute("aria-hidden","true"),u.disabled=!0):(l.setAttribute("aria-hidden","false"),l.disabled=!1,u.setAttribute("aria-hidden","false"),u.disabled=!1),p.setAttribute("aria-hidden",a.counter&&1!==E[_].elementsLength?"false":"true")},se=e=>{D(),p.textContent=`${E[_].currentIndex+1}/${E[_].elementsLength}`,(e=>{(!0===a.nav||"auto"===a.nav)&&!ue()&&E[_].elementsLength>1?(l.setAttribute("aria-hidden","true"),l.disabled=!0,u.setAttribute("aria-hidden","true"),u.disabled=!0,1===E[_].elementsLength?a.close&&c.focus():0===E[_].currentIndex?(u.setAttribute("aria-hidden","false"),u.disabled=!1,u.focus()):E[_].currentIndex===E[_].elementsLength-1?(l.setAttribute("aria-hidden","false"),l.disabled=!1,l.focus()):(l.setAttribute("aria-hidden","false"),l.disabled=!1,u.setAttribute("aria-hidden","false"),u.disabled=!1,"left"===e?l.focus():u.focus())):a.close&&c.focus()})(e)},de=()=>{le()&&N(),Object.entries(E).forEach(e=>{e[1].gallery.forEach(e=>{T(e)})}),E={},L=_=null,s=0},le=()=>"false"===d.getAttribute("aria-hidden"),ue=()=>"ontouchstart"in window,ce=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===l||e===u||e===c;return(e=>{a=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),d||(d=document.createElement("div"),d.setAttribute("role","dialog"),d.setAttribute("aria-hidden","true"),d.classList.add("tobii"),d.classList.add(a.theme),l=document.createElement("button"),l.className="tobii__btn tobii__btn--previous",l.setAttribute("type","button"),l.setAttribute("aria-label",a.navLabel[0]),l.innerHTML=a.navText[0],d.appendChild(l),u=document.createElement("button"),u.className="tobii__btn tobii__btn--next",u.setAttribute("type","button"),u.setAttribute("aria-label",a.navLabel[1]),u.innerHTML=a.navText[1],d.appendChild(u),c=document.createElement("button"),c.className="tobii__btn tobii__btn--close",c.setAttribute("type","button"),c.setAttribute("aria-label",a.closeLabel),c.innerHTML=a.closeText,d.appendChild(c),p=document.createElement("div"),p.className="tobii__counter",d.appendChild(p),document.body.appendChild(d));const t=document.querySelectorAll(a.selector);if(!t)throw new Error(`Ups, I can't find the selector ${a.selector} on this website.`);t.forEach(e=>{C(e)})})(t),e.open=j,e.previous=X,e.next=U,e.close=N,e.add=C,e.remove=T,e.reset=de,e.destroy=()=>{de(),d.parentNode.removeChild(d)},e.isOpen=le,e.slidesIndex=()=>E[_].currentIndex,e.select=e=>{const t=E[_].currentIndex;if(!le())throw new Error("Ups, I'm closed.");if(le()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===E[_].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=E[_].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}E[_].currentIndex=e,Y(t),M(e),e<t&&(se("left"),z(t),q(e-1)),e>t&&(se("right"),z(t),q(e+1))},e.slidesCount=()=>E[_].elementsLength,e.selectGroup=e=>{if(le())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(E,e))throw new Error(`Ups, I don't have a group called "${e}".`);_=e},e.currentGroup=()=>null!==_?_:L,e.on=(e,t)=>{d.addEventListener(e,t)},e.off=(e,t)=>{d.removeEventListener(e,t)},e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({selector:"[data-lightbox]",captionText:function(e){var t=e.nextElementSibling;return t&&"FIGCAPTION"===t.tagName||(t=e.parentNode.nextElementSibling)&&"FIGCAPTION"===t.tagName?t.textContent.trim():null}},window.requiredTobiiOptions))}]);