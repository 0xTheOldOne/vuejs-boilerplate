(function(){var e={482:function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["Hello i18n !!"])},routes:{home:e=>{const{normalize:n}=e;return n(["Home"])},settings:e=>{const{normalize:n}=e;return n(["Settings"])},about:e=>{const{normalize:n}=e;return n(["About"])}}}},627:function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["Salut i18n !!"])},routes:{home:e=>{const{normalize:n}=e;return n(["Accueil"])},settings:e=>{const{normalize:n}=e;return n(["Paramètres"])},about:e=>{const{normalize:n}=e;return n(["À-Propos"])}}}},850:function(e,n,t){"use strict";var r=t(963),o=t(252);function u(e,n,t,r,u,a){var i=(0,o.up)("Menu"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(c)],64)}var a=t(150),i=t(655),c={en:"English",fr:"Français"};function l(){for(var e=[],n=0,t=Object.keys(c);n<t.length;n++){var r=t[n];e.push({code:r,name:c[r]})}return e}function s(e){void 0===e&&(e={});var n={countryCodeOnly:!1},t=(0,i.pi)((0,i.pi)({},n),e),r=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(r){var o=t.countryCodeOnly?r.trim().split(/-|_/)[0]:r.trim();return o}}var d=t(577),f=function(e){return(0,o.dD)("data-v-661dbabf"),e=e(),(0,o.Cn)(),e},m={class:"menu-container"},p={class:"menu-input"},v=f((function(){return(0,o._)("span",{class:"line line1"},null,-1)})),h=f((function(){return(0,o._)("span",{class:"line line2"},null,-1)})),g=f((function(){return(0,o._)("span",{class:"line line3"},null,-1)})),b=[v,h,g],y={class:"container"},w={class:"col"},_=f((function(){return(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col"}," ")],-1)})),k={class:"row"},C={class:"col"};function O(e,n,t,u,a,i){var c=(0,o.up)("router-link"),l=(0,o.up)("I18nLocaleSwitcher");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{class:"checkbox",type:"checkbox",name:"",id:"","onUpdate:modelValue":n[0]||(n[0]=function(n){return e.checked=n})},null,512),[[r.e8,e.checked]]),(0,o._)("div",{class:(0,d.C_)(["lines",{checked:e.checked}])},b,2)]),(0,o._)("div",{class:(0,d.C_)(["menu",{show:e.checked}])},[(0,o._)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.routes,(function(t){return(0,o.wg)(),(0,o.iD)("div",{class:"row",key:t.path},[(0,o._)("div",w,[(0,o.Wm)(c,{to:t.path,onClick:n[1]||(n[1]=function(n){return e.toggleChecked()})},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,d.zw)(t.name?e.getLocalizedRouteName(t.name):""),1)]})),_:2},1032,["to"])])])})),128)),_,(0,o._)("div",k,[(0,o._)("div",C,[(0,o.Wm)(l)])])])],2)])}var L={class:"component"},j={class:"locale"},S=["src"],z=["value"];function E(e,n,t,u,a,i){return(0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",j,[(0,o._)("img",{src:"https://flagcdn.com/16x12/"+e.currentLocale.code+".png"},null,8,S),(0,o.Uk)(" "+(0,d.zw)(e.currentLocale.name),1)]),(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.$i18n.locale=n}),onChange:n[1]||(n[1]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.changeLang&&e.changeLang.apply(e,n)})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.locales,(function(e){return(0,o.wg)(),(0,o.iD)("option",{value:e.code},(0,d.zw)(e.name),9,z)})),256))],544),[[r.bM,e.$i18n.locale]])])}var A=(0,o.aZ)({name:"TemplateComponent",props:{msg:String},data:function(){return{locales:l(),browserLocale:s({countryCodeOnly:!0})}},setup:function(){},computed:{currentLocale:function(){var e,n=this;return null!==(e=this.locales.find((function(e){return e.code==n.$i18n.locale})))&&void 0!==e?e:{code:"en",name:"English"}}},methods:{changeLang:function(){var e=document.querySelector("html");e&&e.setAttribute("lang",this.$i18n.locale)}}}),D=t(744);const N=(0,D.Z)(A,[["render",E],["__scopeId","data-v-7901eb52"]]);var T=N,x=(0,o.aZ)({name:"Menu",components:{I18nLocaleSwitcher:T},data:function(){return{locales:l(),browserLocale:s({countryCodeOnly:!0}),checked:!1}},setup:function(){},computed:{routes:function(){return this.$router.getRoutes()}},methods:{toggleChecked:function(){this.checked=!this.checked},getLocalizedRouteName:function(e){return this.$t("routes."+(null===e||void 0===e?void 0:e.toString()))}}});const Z=(0,D.Z)(x,[["render",O],["__scopeId","data-v-661dbabf"]]);var H=Z,P=(0,o.aZ)({name:"App",components:{Menu:H},data:function(){return{locales:l(),browserLocale:s({countryCodeOnly:!0})}},setup:function(){var e=(0,a.QT)({inheritLocale:!0,useScope:"local"}).t;return{t:e}},mounted:function(){this.browserLocale&&(this.$i18n.locale=this.browserLocale);var e=document.querySelector("html");e&&e.setAttribute("lang",this.$i18n.locale)}});const $=(0,D.Z)(P,[["render",u]]);var M=$,W=t(201),I={class:"view"};function U(e,n,t,r,u,a){var i=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",I,[(0,o.Wm)(i,{msg:"toto"})])}var F={class:"component"};function q(e,n,t,r,u,a){return(0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("p",null,(0,d.zw)(e.msg),1),(0,o._)("p",null,(0,d.zw)(e.$t("message")),1)])}var B=(0,o.aZ)({name:"HelloWorld",props:{msg:String},data:function(){return{locales:l(),browserLocale:s({countryCodeOnly:!0})}},setup:function(){},computed:{},methods:{}});const K=(0,D.Z)(B,[["render",q],["__scopeId","data-v-0896f765"]]);var R=K,V=(0,o.aZ)({name:"HomeView",components:{HelloWorld:R},data:function(){return{}},setup:function(){},computed:{},methods:{}});const Y=(0,D.Z)(V,[["render",U],["__scopeId","data-v-a7090f7a"]]);var Q=Y,G=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:function(){return t.e(390).then(t.bind(t,390))}}],J=(0,W.p7)({history:(0,W.PO)("/vuejs-boilerplate/"),routes:G}),X=J,ee=t(907),ne=(0,ee.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});function te(){var e=t(845),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t).default}})),n}var re=(0,a.o)({legacy:!1,locale:"en",fallbackLocale:"en",messages:te()});t(666);(0,r.ri)(M).use(re).use(ne).use(X).mount("#app")},845:function(e,n,t){var r={"./en.json":482,"./fr.json":627};function o(e){var n=u(e);return t(n)}function u(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=845}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],u=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[r,o,u]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".83219cfc.js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".8286d4b1.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vuejs-boilerplate:";t.l=function(r,o,u,a){if(e[r])e[r].push(o);else{var i,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+u){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+u),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vuejs-boilerplate/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,u.parentNode&&u.parentNode.removeChild(u),o(c)}};return u.onerror=u.onload=a,u.href=n,t?t.parentNode.insertBefore(u,t.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===e||u===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],u=o.getAttribute("data-href");if(u===e||u===n)return o}},r=function(r){return new Promise((function(o,u){var a=t.miniCssF(r),i=t.p+a;if(n(a,i))return o();e(r,i,null,o,u)}))},o={143:0};t.f.miniCss=function(e,n){var t={390:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var a=t.p+t.u(n),i=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,a=r[0],i=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var s=c(t)}for(n&&n(r);l<a.length;l++)u=a[l],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(s)},r=self["webpackChunkvuejs_boilerplate"]=self["webpackChunkvuejs_boilerplate"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(850)}));r=t.O(r)})();
//# sourceMappingURL=app.70446443.js.map