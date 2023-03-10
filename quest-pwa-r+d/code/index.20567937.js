var Wr=Object.defineProperty,qr=Object.defineProperties;var Kr=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Gr=Object.prototype.hasOwnProperty,Xr=Object.prototype.propertyIsEnumerable;var pe=(e,t,r)=>t in e?Wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fe=(e,t)=>{for(var r in t||(t={}))Gr.call(t,r)&&pe(e,r,t[r]);if(he)for(var r of he(t))Xr.call(t,r)&&pe(e,r,t[r]);return e},ve=(e,t)=>qr(e,Kr(t));const Jr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};Jr();const Zr="modulepreload",be={},Yr="/",Qr=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${Yr}${o}`,o in be)return;be[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":Zr,n||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),n)return new Promise((d,a)=>{s.addEventListener("load",d),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=window,Yt=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),me=new WeakMap;class dr{constructor(t,r,o){if(this._$cssResult$=!0,o!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yt&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=me.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&me.set(r,t))}return t}toString(){return this.cssText}}const to=e=>new dr(typeof e=="string"?e:e+"",void 0,Qt),At=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new dr(r,e,Qt)},eo=(e,t)=>{Yt?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),n=ht.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},ge=Yt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return to(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt;const bt=window,_e=bt.trustedTypes,ro=_e?_e.emptyScript:"",ye=bt.reactiveElementPolyfillSupport,Vt={toAttribute(e,t){switch(t){case Boolean:e=e?ro:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ur=(e,t)=>t!==e&&(t==t||e==e),Tt={attribute:!0,type:String,converter:Vt,reflect:!1,hasChanged:ur};class N extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=Tt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){const i=this[t];this[r]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Tt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(ge(n))}else t!==void 0&&r.push(ge(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return eo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=Tt){var n;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:Vt).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=n.getPropertyOptions(i),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:Vt;this._$El=i,this[i]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ur)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}N.finalized=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},ye==null||ye({ReactiveElement:N}),((Rt=bt.reactiveElementVersions)!==null&&Rt!==void 0?Rt:bt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt;const mt=window,I=mt.trustedTypes,$e=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,cr="?"+S,oo=`<${cr}>`,j=document,tt=(e="")=>j.createComment(e),et=e=>e===null||typeof e!="object"&&typeof e!="function",hr=Array.isArray,no=e=>hr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,Ee=/>/g,x=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Se=/"/g,pr=/^(?:script|style|textarea|title)$/i,io=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),rt=io(1),F=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ce=new WeakMap,so=(e,t,r)=>{var o,n;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new at(t.insertBefore(tt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},D=j.createTreeWalker(j,129,null,!1),ao=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":"",s=G;for(let a=0;a<r;a++){const l=e[a];let h,u,c=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===G?u[1]==="!--"?s=we:u[1]!==void 0?s=Ee:u[2]!==void 0?(pr.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=x):u[3]!==void 0&&(s=x):s===x?u[0]===">"?(s=n!=null?n:G,c=-1):u[1]===void 0?c=-2:(c=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?x:u[3]==='"'?Se:Ae):s===Se||s===Ae?s=x:s===we||s===Ee?s=G:(s=x,n=void 0);const _=s===x&&e[a+1].startsWith("/>")?" ":"";i+=s===G?l+oo:c>=0?(o.push(h),l.slice(0,c)+"$lit$"+l.slice(c)+S+_):l+S+(c===-2?(o.push(void 0),a):_)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[$e!==void 0?$e.createHTML(d):d,o]};class ot{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const d=t.length-1,a=this.parts,[l,h]=ao(t,r);if(this.el=ot.createElement(l,o),D.currentNode=this.el.content,r===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(n=D.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(S)){const p=h[s++];if(u.push(c),p!==void 0){const _=n.getAttribute(p.toLowerCase()+"$lit$").split(S),U=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:U[2],strings:_,ctor:U[1]==="."?uo:U[1]==="?"?ho:U[1]==="@"?po:St})}else a.push({type:6,index:i})}for(const c of u)n.removeAttribute(c)}if(pr.test(n.tagName)){const u=n.textContent.split(S),c=u.length-1;if(c>0){n.textContent=I?I.emptyScript:"";for(let p=0;p<c;p++)n.append(u[p],tt()),D.nextNode(),a.push({type:2,index:++i});n.append(u[c],tt())}}}else if(n.nodeType===8)if(n.data===cr)a.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(S,u+1))!==-1;)a.push({type:7,index:i}),u+=S.length-1}i++}}static createElement(t,r){const o=j.createElement("template");return o.innerHTML=t,o}}function z(e,t,r=e,o){var n,i,s,d;if(t===F)return t;let a=o!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[o]:r._$Cu;const l=et(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=z(e,a._$AS(e,t.values),a,o)),t}class lo{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:o},parts:n}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:j).importNode(o,!0);D.currentNode=i;let s=D.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new at(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new fo(s,this,t)),this.v.push(h),l=n[++a]}d!==(l==null?void 0:l.index)&&(s=D.nextNode(),d++)}return i}m(t){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class at{constructor(t,r,o,n){var i;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$C_=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=z(this,t,r),et(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==F&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):no(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==g&&et(this._$AH)?this._$AA.nextSibling.data=t:this.k(j.createTextNode(t)),this._$AH=t}T(t){var r;const{values:o,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ot.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(o);else{const s=new lo(i,this),d=s.p(this.options);s.m(o),this.k(d),this._$AH=s}}_$AC(t){let r=Ce.get(t.strings);return r===void 0&&Ce.set(t.strings,r=new ot(t)),r}O(t){hr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of t)n===r.length?r.push(o=new at(this.S(tt()),this.S(tt()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class St{constructor(t,r,o,n,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)t=z(this,t,r,0),s=!et(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const d=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=z(this,d[o+a],r,a),l===F&&(l=this._$AH[a]),s||(s=!et(l)||l!==this._$AH[a]),l===g?t=g:t!==g&&(t+=(l!=null?l:"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.P(t)}P(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class uo extends St{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===g?void 0:t}}const co=I?I.emptyScript:"";class ho extends St{constructor(){super(...arguments),this.type=4}P(t){t&&t!==g?this.element.setAttribute(this.name,co):this.element.removeAttribute(this.name)}}class po extends St{constructor(t,r,o,n,i){super(t,r,o,n,i),this.type=5}_$AI(t,r=this){var o;if((t=(o=z(this,t,r,0))!==null&&o!==void 0?o:g)===F)return;const n=this._$AH,i=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class fo{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Pe=mt.litHtmlPolyfillSupport;Pe==null||Pe(ot,at),((kt=mt.litHtmlVersions)!==null&&kt!==void 0?kt:mt.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut,Nt;class R extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=so(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return F}}R.finalized=!0,R._$litElement$=!0,(Ut=globalThis.litElementHydrateSupport)===null||Ut===void 0||Ut.call(globalThis,{LitElement:R});const xe=globalThis.litElementPolyfillSupport;xe==null||xe({LitElement:R});((Nt=globalThis.litElementVersions)!==null&&Nt!==void 0?Nt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ve(fe({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function ee(e){return(t,r)=>r!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(e,t,r):vo(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt;((Lt=window.HTMLSlotElement)===null||Lt===void 0?void 0:Lt.prototype.assignedElements)!=null;function gt(e){return e=e||[],Array.isArray(e)?e:[e]}function w(e){return`[Vaadin.Router] ${e}`}function bo(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const _t="module",yt="nomodule",Wt=[_t,yt];function Oe(e){if(!e.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function fr(e){if(!e||!$(e.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!T(e.action)&&!Array.isArray(e.children)&&!T(e.children)&&!$t(t)&&!r.some(o=>$(e[o])))throw new Error(w(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if($(t))Oe(t);else if(Wt.some(o=>o in t))Wt.forEach(o=>o in t&&Oe(t[o]));else throw new Error(w('Expected route bundle to include either "'+yt+'" or "'+_t+'" keys, or both'));e.redirect&&["bundle","component"].forEach(o=>{o in e&&console.warn(w(`Route config "${e.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function Re(e){gt(e).forEach(t=>fr(t))}function Te(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===_t?r.setAttribute("type",_t):t===yt&&r.setAttribute(yt,""),r.async=!0),new Promise((o,n)=>{r.onreadystatechange=r.onload=i=>{r.__dynamicImportLoaded=!0,o(i)},r.onerror=i=>{r.parentNode&&r.parentNode.removeChild(r),n(i)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&o()})}function mo(e){return $(e)?Te(e):Promise.race(Wt.filter(t=>t in e).map(t=>Te(e[t],t)))}function Z(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function $t(e){return typeof e=="object"&&!!e}function T(e){return typeof e=="function"}function $(e){return typeof e=="string"}function vr(e){const t=new Error(w(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const M=new class{};function go(e){const t=e.port,r=e.protocol,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function ke(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||go(t))!==window.location.origin)return;const{pathname:n,search:i,hash:s}=t;Z("go",{pathname:n,search:i,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const _o={activate(){window.document.addEventListener("click",ke)},inactivate(){window.document.removeEventListener("click",ke)}},yo=/Trident/.test(navigator.userAgent);yo&&!T(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function Ue(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:o}=window.location;Z("go",{pathname:t,search:r,hash:o})}const $o={activate(){window.addEventListener("popstate",Ue)},inactivate(){window.removeEventListener("popstate",Ue)}};var K=$r,wo=re,Eo=Po,Ao=gr,So=yr,br="/",mr="./",Co=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function re(e,t){for(var r=[],o=0,n=0,i="",s=t&&t.delimiter||br,d=t&&t.delimiters||mr,a=!1,l;(l=Co.exec(e))!==null;){var h=l[0],u=l[1],c=l.index;if(i+=e.slice(n,c),n=c+h.length,u){i+=u[1],a=!0;continue}var p="",_=e[n],U=l[2],Ir=l[3],jr=l[4],ut=l[5];if(!a&&i.length){var Ot=i.length-1;d.indexOf(i[Ot])>-1&&(p=i[Ot],i=i.slice(0,Ot))}i&&(r.push(i),i="",a=!1);var Fr=p!==""&&_!==void 0&&_!==p,zr=ut==="+"||ut==="*",Vr=ut==="?"||ut==="*",ue=p||s,ce=Ir||jr;r.push({name:U||o++,prefix:p,delimiter:ue,optional:Vr,repeat:zr,partial:Fr,pattern:ce?xo(ce):"[^"+A(ue)+"]+?"})}return(i||n<e.length)&&r.push(i+e.substr(n)),r}function Po(e,t){return gr(re(e,t))}function gr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(o,n){for(var i="",s=n&&n.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){i+=a;continue}var l=o?o[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(h=s(l[u],a),!t[d].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!t[d].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');i+=a.prefix+h;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function A(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function xo(e){return e.replace(/([=!:$/()])/g,"\\$1")}function _r(e){return e&&e.sensitive?"":"i"}function Oo(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Ro(e,t,r){for(var o=[],n=0;n<e.length;n++)o.push($r(e[n],t,r).source);return new RegExp("(?:"+o.join("|")+")",_r(r))}function To(e,t,r){return yr(re(e,r),t,r)}function yr(e,t,r){r=r||{};for(var o=r.strict,n=r.start!==!1,i=r.end!==!1,s=A(r.delimiter||br),d=r.delimiters||mr,a=[].concat(r.endsWith||[]).map(A).concat("$").join("|"),l=n?"^":"",h=e.length===0,u=0;u<e.length;u++){var c=e[u];if(typeof c=="string")l+=A(c),h=u===e.length-1&&d.indexOf(c[c.length-1])>-1;else{var p=c.repeat?"(?:"+c.pattern+")(?:"+A(c.delimiter)+"(?:"+c.pattern+"))*":c.pattern;t&&t.push(c),c.optional?c.partial?l+=A(c.prefix)+"("+p+")?":l+="(?:"+A(c.prefix)+"("+p+"))?":l+=A(c.prefix)+"("+p+")"}}return i?(o||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(o||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,_r(r))}function $r(e,t,r){return e instanceof RegExp?Oo(e,t):Array.isArray(e)?Ro(e,t,r):To(e,t,r)}K.parse=wo;K.compile=Eo;K.tokensToFunction=Ao;K.tokensToRegExp=So;const{hasOwnProperty:ko}=Object.prototype,qt=new Map;qt.set("|false",{keys:[],pattern:/(?:)/});function Ne(e){try{return decodeURIComponent(e)}catch{return e}}function Uo(e,t,r,o,n){r=!!r;const i=`${e}|${r}`;let s=qt.get(i);if(!s){const l=[];s={keys:l,pattern:K(e,l,{end:r,strict:e===""})},qt.set(i,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},n);for(let l=1;l<d.length;l++){const h=s.keys[l-1],u=h.name,c=d[l];(c!==void 0||!ko.call(a,u))&&(h.repeat?a[u]=c?c.split(h.delimiter).map(Ne):[]:a[u]=c&&Ne(c))}return{path:d[0],keys:(o||[]).concat(s.keys),params:a}}function wr(e,t,r,o,n){let i,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=Uo(a,t,!h,o,n),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;d<h.length;){if(!s){const c=h[d];c.parent=e;let p=i.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=wr(c,t.substr(p),r,i.keys,i.params)}const u=s.next(l);if(!u.done)return{done:!1,value:u.value};s=null,d++}return{done:!0}}}}function No(e){if(T(e.route.action))return e.route.action(e)}function Lo(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Mo(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Ho(e,t){const{route:r,path:o}=t;if(r&&!r.__synthetic){const n={path:o,route:r};if(!e.chain)e.chain=[];else if(r.parent){let i=e.chain.length;for(;i--&&e.chain[i].route&&e.chain[i].route!==r.parent;)e.chain.pop()}e.chain.push(n)}}class nt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||No,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Re(t);const r=[...gt(t)];this.root.__children=r}addRoutes(t){return Re(t),this.root.__children.push(...gt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,$(t)?{pathname:t}:t),o=wr(this.root,this.__normalizePathname(r.pathname),this.baseUrl),n=this.resolveRoute;let i=null,s=null,d=r;function a(l,h=i.value.route,u){const c=u===null&&i.value.route;return i=s||o.next(c),s=null,!l&&(i.done||!Lo(h,i.value.route))?(s=i,Promise.resolve(M)):i.done?Promise.reject(vr(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,i.value),Ho(d,i.value),Promise.resolve(n(d)).then(p=>p!=null&&p!==M?(d.result=p.result||p,d):a(l,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Mo(d);if(l?console.warn(h):l=new Error(h),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=this.constructor.__createUrl(t,r).href;if(o.slice(0,r.length)===r)return o.slice(r.length)}}nt.pathToRegexp=K;const{pathToRegexp:Le}=nt,Me=new Map;function Er(e,t,r){const o=t.name||t.component;if(o&&(e.has(o)?e.get(o).push(t):e.set(o,[t])),Array.isArray(r))for(let n=0;n<r.length;n++){const i=r[n];i.parent=t,Er(e,i,i.__children||i.children)}}function He(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function De(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Do(e,t={}){if(!(e instanceof nt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,n)=>{let i=He(r,o);if(!i&&(r.clear(),Er(r,e.root,e.root.__children),i=He(r,o),!i))throw new Error(`Route "${o}" not found`);let s=Me.get(i.fullPath);if(!s){let a=De(i),l=i.parent;for(;l;){const p=De(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=Le.parse(a),u=Le.tokensToFunction(h),c=Object.create(null);for(let p=0;p<h.length;p++)$(h[p])||(c[h[p].name]=!0);s={toPath:u,keys:c},Me.set(a,s),i.fullPath=a}let d=s.toPath(n,t)||"/";if(t.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let u=0;u<l.length;u++){const c=l[u];s.keys[c]||(a[c]=n[c])}const h=t.stringifyQueryParams(a);h&&(d+=h.charAt(0)==="?"?h:`?${h}`)}return d}}let Be=[];function Bo(e){Be.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Be=e}const Io=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},jo=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function Ie(e,t){return e.classList.add(t),new Promise(r=>{if(Io(e)){const o=e.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${n}`),jo(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const Fo=256;function Mt(e){return e!=null}function zo(e){const t=Object.assign({},e);return delete t.next,t}function y({pathname:e="",search:t="",hash:r="",chain:o=[],params:n={},redirectFrom:i,resolver:s},d){const a=o.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:n,redirectFrom:i,getUrl:(l={})=>ft(P.pathToRegexp.compile(Ar(a))(Object.assign({},n,l)),s)}}function je(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Vo(e,t){t.location=y(e);const r=e.chain.map(o=>o.route).indexOf(e.route);return e.chain[r].element=t,t}function pt(e,t,r){if(T(e))return e.apply(r,t)}function Fe(e,t,r){return o=>{if(o&&(o.cancel||o.redirect))return o;if(r)return pt(r[e],t,r)}}function Wo(e,t){if(!Array.isArray(e)&&!$t(e))throw new Error(w(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=gt(e);for(let o=0;o<r.length;o++)fr(r[o]),t.__children.push(r[o])}function ct(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function ft(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Ar(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class P extends nt{constructor(t,r){const o=document.head.querySelector("base"),n=o&&o.getAttribute("href");super([],Object.assign({baseUrl:n&&nt.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const i=P.NavigationTrigger;P.setTriggers.apply(P,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let o=Promise.resolve();T(r.children)&&(o=o.then(()=>r.children(zo(t))).then(i=>{!Mt(i)&&!T(r.children)&&(i=r.children),Wo(i,r)}));const n={redirect:i=>je(t,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(t))return pt(r.action,[t,n],r)}).then(i=>{if(Mt(i)&&(i instanceof HTMLElement||i.redirect||i===M))return i;if($(r.redirect))return n.redirect(r.redirect);if(r.bundle)return mo(r.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(i=>{if(Mt(i))return i;if($(r.component))return n.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const o=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},$(t)?{pathname:t}:t,{__renderId:o});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=y(i),r&&this.__updateBrowserHistory(i,o===1),Z("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const d=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),d.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(o===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(n),ct(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),Z("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(o=>{const i=o!==r?o:t,d=ft(Ar(o.chain),o.resolver)===o.pathname,a=(l,h=l.route,u)=>l.next(void 0,h,u).then(c=>c===null||c===M?d?l:h.parent!==null?a(l,h.parent,c):c:c);return a(o).then(l=>{if(l===null||l===M)throw vr(i);return l&&l!==M&&l!==o?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Vo(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(w(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${bo(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},o=r.chain||[],n=t.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),d=a=>je(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,n.length)&&!(o[a].route!==n[a].route||o[a].path!==n[a].path&&o[a].element!==n[a].element||!this.__isReusableElement(o[a].element,n[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=n.length===o.length&&t.__divergedChainIndex==n.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},o[a]);for(let a=0;a<n.length;a++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},n[a]),o[a].element.location=y(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},o[a])}if(!t.__skipAttach)for(let a=0;a<n.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=y(t,o[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},n[a]),n[a].element&&(n[a].element.location=y(t,n[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,o,n){const i=y(r);return t.then(s=>{if(this.__isLatestRender(r))return Fe("onBeforeLeave",[i,o,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,o,n){const i=y(r,n.route);return t.then(s=>{if(this.__isLatestRender(r))return Fe("onBeforeEnter",[i,o,this],n.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,o){if(r>Fo)throw new Error(w(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:o})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:o=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const i=n?"replaceState":"pushState";window.history[i](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let o=this.__outlet;for(let n=0;n<t.__divergedChainIndex;n++){const i=r&&r.chain[n].element;if(i)if(i.parentNode===o)t.chain[n].element=i,o=i;else break}return o}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(i=>this.__addedByRouter.get(i)&&i!==t.result);let n=o;for(let i=t.__divergedChainIndex;i<t.chain.length;i++){const s=t.chain[i].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===o&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&ct(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ct(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.__isLatestRender(t);o--){const n=r.chain[o].element;if(!!n)try{const i=y(t);pt(n.onAfterLeave,[i,{},r.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ct(n.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const o=t.chain[r].element||{},n=y(t,t.chain[r].route);pt(o.onAfterEnter,[n,{},t.resolver],o)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],n=[],i=t.chain;let s;for(let d=i.length;d>0;d--)if(i[d-1].route.animate){s=i[d-1].route.animate;break}if(r&&o&&s){const d=$t(s)&&s.leave||"leaving",a=$t(s)&&s.enter||"entering";n.push(Ie(r,d)),n.push(Ie(o,a))}return Promise.all(n).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:o,hash:n}=t?t.detail:window.location;$(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:n},!0))}static setTriggers(...t){Bo(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Do(this)),ft(this.__urlForName(t,r),this)}urlForPath(t,r){return ft(P.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:o,hash:n}=$(t)?this.__createUrl(t,"http://a"):t;return Z("go",{pathname:r,search:o,hash:n})}}const qo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,vt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ko(){function e(){return!0}return Sr(e)}function Go(){try{return Xo()?!0:Jo()?vt?!Zo():!Ko():!1}catch{return!1}}function Xo(){return localStorage.getItem("vaadin.developmentmode.force")}function Jo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Zo(){return!!(vt&&Object.keys(vt).map(t=>vt[t]).filter(t=>t.productionMode).length>0)}function Sr(e,t){if(typeof e!="function")return;const r=qo.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const ze=function(e,t){if(window.Vaadin.developmentMode)return Sr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Go());function Yo(){}const Qo=function(){if(typeof ze=="function")return ze(Yo)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Qo();P.NavigationTrigger={POPSTATE:$o,CLICK:_o};var oe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),Ve=new Map,Cr=class{constructor(e,t){if(this._$cssResult$=!0,t!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ve.get(this.cssText);return oe&&e===void 0&&(Ve.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},tn=e=>new Cr(typeof e=="string"?e:e+"",ne),Ct=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new Cr(r,ne)},en=(e,t)=>{oe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},We=oe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return tn(r)})(e):e,Ht,qe=window.trustedTypes,rn=qe?qe.emptyScript:"",Ke=window.reactiveElementPolyfillSupport,Kt={toAttribute(e,t){switch(t){case Boolean:e=e?rn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Pr=(e,t)=>t!==e&&(t==t||e==e),Dt={attribute:!0,type:String,converter:Kt,reflect:!1,hasChanged:Pr},L=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=Dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(We(o))}else e!==void 0&&t.push(We(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return en(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=Dt){var o,n;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const s=((n=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:Kt.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var r,o,n;const i=this.constructor,s=i._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const d=i.getPropertyOptions(s),a=d.converter,l=(n=(o=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&n!==void 0?n:Kt.fromAttribute;this._$Ei=s,this[s]=l(t,d.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Pr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};L.finalized=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Ke==null||Ke({ReactiveElement:L}),((Ht=globalThis.reactiveElementVersions)!==null&&Ht!==void 0?Ht:globalThis.reactiveElementVersions=[]).push("1.3.2");var Bt,V=globalThis.trustedTypes,Ge=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,xr="?"+C,on=`<${xr}>`,W=document,it=(e="")=>W.createComment(e),st=e=>e===null||typeof e!="object"&&typeof e!="function",Or=Array.isArray,nn=e=>{var t;return Or(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Je=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ze=/'/g,Ye=/"/g,Rr=/^(?:script|style|textarea|title)$/i,sn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ie=sn(1),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Qe=new WeakMap,an=(e,t,r)=>{var o,n;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new Pt(t.insertBefore(it(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},B=W.createTreeWalker(W,129,null,!1),ln=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":"",s=X;for(let a=0;a<r;a++){const l=e[a];let h,u,c=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===X?u[1]==="!--"?s=Xe:u[1]!==void 0?s=Je:u[2]!==void 0?(Rr.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=O):u[3]!==void 0&&(s=O):s===O?u[0]===">"?(s=n!=null?n:X,c=-1):u[1]===void 0?c=-2:(c=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?O:u[3]==='"'?Ye:Ze):s===Ye||s===Ze?s=O:s===Xe||s===Je?s=X:(s=O,n=void 0);const _=s===O&&e[a+1].startsWith("/>")?" ":"";i+=s===X?l+on:c>=0?(o.push(h),l.slice(0,c)+"$lit$"+l.slice(c)+C+_):l+C+(c===-2?(o.push(void 0),a):_)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ge!==void 0?Ge.createHTML(d):d,o]},wt=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,i=0;const s=e.length-1,d=this.parts,[a,l]=ln(e,t);if(this.el=wt.createElement(a,r),B.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(o=B.nextNode())!==null&&d.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const u of o.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(C)){const c=l[i++];if(h.push(u),c!==void 0){const p=o.getAttribute(c.toLowerCase()+"$lit$").split(C),_=/([.?@])?(.*)/.exec(c);d.push({type:1,index:n,name:_[2],strings:p,ctor:_[1]==="."?un:_[1]==="?"?hn:_[1]==="@"?pn:xt})}else d.push({type:6,index:n})}for(const u of h)o.removeAttribute(u)}if(Rr.test(o.tagName)){const h=o.textContent.split(C),u=h.length-1;if(u>0){o.textContent=V?V.emptyScript:"";for(let c=0;c<u;c++)o.append(h[c],it()),B.nextNode(),d.push({type:2,index:++n});o.append(h[u],it())}}}else if(o.nodeType===8)if(o.data===xr)d.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(C,h+1))!==-1;)d.push({type:7,index:n}),h+=C.length-1}n++}}static createElement(e,t){const r=W.createElement("template");return r.innerHTML=e,r}};function q(e,t,r=e,o){var n,i,s,d;if(t===k)return t;let a=o!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[o]:r._$Cu;const l=st(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=q(e,a._$AS(e,t.values),a,o)),t}var dn=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:W).importNode(r,!0);B.currentNode=n;let i=B.nextNode(),s=0,d=0,a=o[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Pt(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new fn(i,this,e)),this.v.push(l),a=o[++d]}s!==(a==null?void 0:a.index)&&(i=B.nextNode(),s++)}return n}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Pt=class{constructor(e,t,r,o){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),st(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==k&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):nn(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==m&&st(this._$AH)?this._$AA.nextSibling.data=e:this.k(W.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=wt.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(r);else{const i=new dn(n,this),s=i.p(this.options);i.m(r),this.k(s),this._$AH=i}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new wt(e)),t}S(e){Or(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new Pt(this.M(it()),this.M(it()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},xt=class{constructor(e,t,r,o,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const n=this.strings;let i=!1;if(n===void 0)e=q(this,e,t,0),i=!st(e)||e!==this._$AH&&e!==k,i&&(this._$AH=e);else{const s=e;let d,a;for(e=n[0],d=0;d<n.length-1;d++)a=q(this,s[r+d],t,d),a===k&&(a=this._$AH[d]),i||(i=!st(a)||a!==this._$AH[d]),a===m?e=m:e!==m&&(e+=(a!=null?a:"")+n[d+1]),this._$AH[d]=a}i&&!o&&this.C(e)}C(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},un=class extends xt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===m?void 0:e}},cn=V?V.emptyScript:"",hn=class extends xt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==m?this.element.setAttribute(this.name,cn):this.element.removeAttribute(this.name)}},pn=class extends xt{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=q(this,e,t,0))!==null&&r!==void 0?r:m)===k)return;const o=this._$AH,n=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==m&&(o===m||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},fn=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}},tr=window.litHtmlPolyfillSupport;tr==null||tr(wt,Pt),((Bt=globalThis.litHtmlVersions)!==null&&Bt!==void 0?Bt:globalThis.litHtmlVersions=[]).push("2.2.4");var It,jt,Y=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=an(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return k}};Y.finalized=!0,Y._$litElement$=!0,(It=globalThis.litElementHydrateSupport)===null||It===void 0||It.call(globalThis,{LitElement:Y});var er=globalThis.litElementPolyfillSupport;er==null||er({LitElement:Y});((jt=globalThis.litElementVersions)!==null&&jt!==void 0?jt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se=Ct`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,vn=Ct`
  ${se}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Tr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},bn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mn=e=>(...t)=>({_$litDirective$:e,values:t}),gn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kr=mn(class extends gn{constructor(e){var t;if(super(e),e.type!==bn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const n=e.element.classList;this.et.forEach(i=>{i in t||(n.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((o=this.st)===null||o===void 0?void 0:o.has(i))||(s?(n.add(i),this.et.add(i)):(n.remove(i),this.et.delete(i)))}return k}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ur=Object.defineProperty,_n=Object.defineProperties,yn=Object.getOwnPropertyDescriptor,$n=Object.getOwnPropertyDescriptors,rr=Object.getOwnPropertySymbols,wn=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable,or=(e,t,r)=>t in e?Ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))wn.call(t,r)&&or(e,r,t[r]);if(rr)for(var r of rr(t))En.call(t,r)&&or(e,r,t[r]);return e},ae=(e,t)=>_n(e,$n(t)),f=(e,t,r,o)=>{for(var n=o>1?void 0:o?yn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ur(t,r,n),n},le=e=>t=>typeof t=="function"?((r,o)=>(window.customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){window.customElements.define(r,s)}}})(e,t),An=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ae(lt({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(e,t,r):An(e,t)}function Sn(e){return b(ae(lt({},e),{state:!0}))}var Cn=({finisher:e,descriptor:t})=>(r,o)=>{var n;if(o===void 0){const i=(n=r.originalKey)!==null&&n!==void 0?n:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:ae(lt({},r),{key:i});return e!=null&&(s.finisher=function(d){e(d,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(i,o)}};function Pn(e,t){return Cn({descriptor:r=>{const o={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null),this[n]}}return o}})}var Ft;((Ft=window.HTMLSlotElement)===null||Ft===void 0?void 0:Ft.prototype.assignedElements)!=null;var dt=class extends Y{};f([b()],dt.prototype,"dir",2);f([b()],dt.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gt=class extends dt{constructor(){super(...arguments);this.hasSlotController=new Tr(this,"footer","header","image")}render(){return ie`
      <div
        part="base"
        class=${kr({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Gt.styles=vn;Gt=f([le("sl-card")],Gt);var xn=Ct`
  ${se}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,On=class extends Event{constructor(e){super("formdata");this.formData=e}},Rn=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new On(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const o=this.getAll(e),n=o.indexOf(r.value);n!==-1&&o.splice(n,1),o.push(t),this.set(e,o)}else super.append(e,t);r.value=t}};function Tn(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function nr(){!window.FormData||Tn()||(window.FormData=Rn,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?nr():window.addEventListener("DOMContentLoaded",()=>nr());var J=new WeakMap,kn=class{constructor(e,t){(this.host=e).addController(this),this.options=lt({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>{r.value=o}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),J.has(this.form)||(J.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),J.has(this.form)&&(this.form.reportValidity=J.get(this.form),J.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);!t&&typeof r=="string"&&typeof o!="undefined"&&(Array.isArray(o)?o.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Nr=Symbol.for(""),Un=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Nr)return(r=e)===null||r===void 0?void 0:r._$litStatic$},ir=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:Nr}),sr=new Map,Nn=e=>(t,...r)=>{const o=r.length;let n,i;const s=[],d=[];let a,l=0,h=!1;for(;l<o;){for(a=t[l];l<o&&(i=r[l],(n=Un(i))!==void 0);)a+=n+t[++l],h=!0;d.push(i),s.push(a),l++}if(l===o&&s.push(t[o]),h){const u=s.join("$$lit$$");(t=sr.get(u))===void 0&&(s.raw=s,sr.set(u,t=s)),r=d}return e(t,...r)},zt=Nn(ie);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xt=new Set,Ln=new MutationObserver(Hr),H=new Map,Lr=document.documentElement.dir||"ltr",Mr=document.documentElement.lang||navigator.language,Q;Ln.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Mn(...e){e.map(t=>{const r=t.$code.toLowerCase();H.has(r)?H.set(r,Object.assign(Object.assign({},H.get(r)),t)):H.set(r,t),Q||(Q=t)}),Hr()}function Hr(){Lr=document.documentElement.dir||"ltr",Mr=document.documentElement.lang||navigator.language,[...Xt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Hn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Xt.add(this.host)}hostDisconnected(){Xt.delete(this.host)}dir(){return`${this.host.dir||Lr}`.toLowerCase()}lang(){return`${this.host.lang||Mr}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",n=H.get(o),i=H.get(r);let s;if(n&&n[e])s=n[e];else if(i&&i[e])s=i[e];else if(Q&&Q[e])s=Q[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Dr=class extends Hn{},Dn={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Mn(Dn);var E=e=>e!=null?e:m;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ar(e,t,r){const o=new CustomEvent(t,lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(o),o}var v=class extends dt{constructor(){super(...arguments);this.formSubmitController=new kn(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Tr(this,"[default]","prefix","suffix"),this.localize=new Dr(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,ar(this,"sl-blur")}handleFocus(){this.hasFocus=!0,ar(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?ir`a`:ir`button`;return zt`
      <${t}
        part="base"
        class=${kr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:this.type)}
        name=${E(e?void 0:this.name)}
        value=${E(e?void 0:this.value)}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e&&this.target?"noreferrer noopener":void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?zt`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?zt`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};v.styles=xn;f([Pn(".button")],v.prototype,"button",2);f([Sn()],v.prototype,"hasFocus",2);f([b({reflect:!0})],v.prototype,"variant",2);f([b({reflect:!0})],v.prototype,"size",2);f([b({type:Boolean,reflect:!0})],v.prototype,"caret",2);f([b({type:Boolean,reflect:!0})],v.prototype,"disabled",2);f([b({type:Boolean,reflect:!0})],v.prototype,"loading",2);f([b({type:Boolean,reflect:!0})],v.prototype,"outline",2);f([b({type:Boolean,reflect:!0})],v.prototype,"pill",2);f([b({type:Boolean,reflect:!0})],v.prototype,"circle",2);f([b()],v.prototype,"type",2);f([b()],v.prototype,"name",2);f([b()],v.prototype,"value",2);f([b()],v.prototype,"href",2);f([b()],v.prototype,"target",2);f([b()],v.prototype,"download",2);f([b()],v.prototype,"form",2);f([b({attribute:"formaction"})],v.prototype,"formAction",2);f([b({attribute:"formmethod"})],v.prototype,"formMethod",2);f([b({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2);f([b({attribute:"formtarget"})],v.prototype,"formTarget",2);v=f([le("sl-button")],v);var Bn=Ct`
  ${se}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Jt=class extends dt{constructor(){super(...arguments);this.localize=new Dr(this)}render(){return ie`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Jt.styles=Bn;Jt=f([le("sl-spinner")],Jt);const In=At`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var jn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Br=(e,t,r,o)=>{for(var n=o>1?void 0:o?Fn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&jn(t,r,n),n};let Zt=class extends R{constructor(){super();this.message="Welcome!"}static get styles(){return[In,At`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return rt`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started">
                Documentation on Github</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?rt`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/"}about" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `}};Br([ee()],Zt.prototype,"message",2);Zt=Br([te("app-home")],Zt);var zn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,de=(e,t,r,o)=>{for(var n=o>1?void 0:o?Vn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&zn(t,r,n),n};let Et=class extends R{constructor(){super();this.title="PWA Starter",this.enableBack=!1}static get styles(){return At`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return rt`
      <header>

        <div id="back-button-block">
          ${this.enableBack?rt`<sl-button href="${"/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};de([ee({type:String})],Et.prototype,"title",2);de([ee({type:Boolean})],Et.prototype,"enableBack",2);Et=de([te("app-header")],Et);var Wn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,Kn=(e,t,r,o)=>{for(var n=o>1?void 0:o?qn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Wn(t,r,n),n};const Gn=1>2?"/".slice(1,-1):"/";let lr=class extends R{static get styles(){return At`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new P((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:Gn,animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await Qr(()=>import("./app-about.a141775f.js"),[])}}]}])}render(){return rt`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};lr=Kn([te("app-index")],lr);export{In as a,te as e,At as i,R as s,rt as y};
//# sourceMappingURL=index.20567937.js.map
