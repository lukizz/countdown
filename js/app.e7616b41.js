(function(e){function t(t){for(var o,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"11427d30"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"273c":function(e,t,n){e.exports=n.p+"img/baby.ea1497ec.png"},"5c0b":function(e,t,n){"use strict";n("e332")},7328:function(e,t,n){},c7dd:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,null,null),s=c.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"baby",src:n("273c")}}),o("Counter")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counter"},[n("h3",[e._v(e._s(e.days)+" days, "+e._s(e.hours)+" hours and "+e._s(e.minutes)+" minutes")]),n("div",{staticClass:"slider"},[n("span",{style:{marginLeft:e.percentage+"%"}})])])},h=[],b=o["a"].extend({name:"Counter",data:function(){return{countDownDate:new Date("Jan 22, 2022").getTime(),startDate:new Date("Apr 17, 2021").getTime(),now:(new Date).getTime()}},computed:{distance:function(){return this.countDownDate-this.now},days:function(){return Math.floor(this.distance/864e5)},hours:function(){return Math.floor(this.distance%864e5/36e5)},minutes:function(){return Math.floor(this.distance%36e5/6e4)},percentage:function(){return Math.floor(100*(this.countDownDate-this.now)/(this.countDownDate-this.startDate))}}}),m=b,v=(n("d96a"),Object(i["a"])(m,p,h,!1,null,"f2109d40",null)),g=v.exports,w=o["a"].extend({name:"home",components:{Counter:g}}),y=w,_=(n("d79b"),Object(i["a"])(y,f,d,!1,null,"42951bce",null)),j=_.exports;o["a"].use(l["a"]);var O=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),D=n("2f62");o["a"].use(D["a"]);var k=new D["a"].Store({state:{},mutations:{},actions:{}}),x=n("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:O,store:k,render:function(e){return e(s)}}).$mount("#app")},d79b:function(e,t,n){"use strict";n("c7dd")},d96a:function(e,t,n){"use strict";n("7328")},e332:function(e,t,n){}});
//# sourceMappingURL=app.e7616b41.js.map