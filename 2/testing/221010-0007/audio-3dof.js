(()=>{"use strict";var e,r={314:(e,r,t)=>{const n=BABYLON,o=Omnitone;var i=t.n(o);const a=Math.PI/2;t.g.AUDIO={Engine:class{constructor(e){this.onCameraMatrixChanged=e=>{e.decompose(void 0,this._.cameraRotationQuaternion),this._.cameraRotationQuaternion.toEulerAnglesToRef(this._.cameraRotation),this.rotationY=this._.cameraRotation.y},this.onAudioEnded=()=>{this._.audioWY.isPlaying||this._.audioZX.isPlaying||(console.debug("Restarting audio"),this._.audioContext.suspend(),this._.audioWY.play(),this._.audioZX.play(),this._.audioContext.resume())},this._=new class{constructor(){this.audioContext=null,this.audioWY=null,this.audioZX=null,this.cameraRotationQuaternion=new n.Quaternion,this.cameraRotation=new n.Vector3,this.rotationTargetY=0,this.adjustedRotationTargetY=0,this.rotationY=0,this.rotationMatrix=new n.Matrix}},e.resume(),e.suspend();const r={autoplay:!1,loop:!1,spatialSound:!1,streaming:!0},t=new n.Sound("normalized-wy","./assets/normalized-wy.mp3",null,null,r),o=new n.Sound("normalized-zx","./assets/normalized-zx.mp3",null,null,r);t.play(),t.stop(),o.play(),o.stop();const a=i().createFOARenderer(e);a.initialize().then((()=>{e.suspend();const r=new ChannelMergerNode(e,{numberOfInputs:4,channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"}),n=t.getSoundGain(),i=o.getSoundGain();n.disconnect(),n.connect(r,0,0),n.connect(r,0,1),i.disconnect(),i.connect(r,0,3),i.connect(r,0,2),r.connect(a.input),a.output.connect(e.destination),a.setRotationMatrix4(this._.rotationMatrix.m);const d=setInterval((()=>{t.isReady()&&o.isReady()&&(clearInterval(d),t.play(),o.play(),e.resume())}))}));const d=.01;let c=!1;setInterval((()=>{Math.abs(this._.adjustedRotationTargetY-this._.rotationY)<d||(c||(c=!0,this._.rotationY=this._.adjustedRotationTargetY),this._.adjustedRotationTargetY<this._.rotationY?this._.rotationY-=d:this._.rotationY<this._.adjustedRotationTargetY&&(this._.rotationY+=d),a&&(n.Matrix.RotationYToRef(this._.rotationY,this._.rotationMatrix),a.setRotationMatrix4(this._.rotationMatrix.m)))}),.1),t.onEndedObservable.add(this.onAudioEnded),o.onEndedObservable.add(this.onAudioEnded),this._.audioContext=e,this._.audioWY=t,this._.audioZX=o}get sequenceTime(){return this._.audioWY.isPlaying?this._.audioWY.currentTime- -.95:0}set rotationY(e){.01<Math.abs(this._.rotationTargetY-e)&&(this._.rotationTargetY=e,this._.adjustedRotationTargetY=e-a)}}}}},t={};function n(e){var o=t[e];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var i=t[e]={exports:{}};try{var a={id:e,module:i,factory:r[e],require:n};n.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}n.m=r,n.c=t,n.i=[],n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"audio-3dof."+n.h()+".hot-update.json",n.h=()=>"d16e27d88ae80e8b86e0",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},n.l=(r,t,o,i)=>{if(e[r])e[r].push(t);else{var a,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==r){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=r),e[r]=[t];var l=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},(()=>{var e,r,t,o,i={},a=n.c,d=[],c=[],s="idle";function u(e){s=e;for(var r=0;r<c.length;r++)c[r].call(null,e)}function l(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return l(e)}))}function p(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check"),n.hmrM().then((function(o){if(!o)return u(m()?"ready":"idle"),null;u("prepare");var i=[];return r=[],t=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,r){return n.hmrC[r](o.c,o.r,o.m,e,t,i),e}),[])).then((function(){return l((function(){return e?f(e):(u("ready"),i)}))}))}))}function h(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var r=t.map((function(r){return r(e)}));t=void 0;var n,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return u("abort"),Promise.resolve().then((function(){throw i[0]}));u("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),u("apply");var a=function(e){n||(n=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var t=0;t<r.length;t++)d.push(r[t])}})),n?(u("fail"),Promise.resolve().then((function(){throw n}))):o?f(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(u("idle"),Promise.resolve(d))}function m(){if(o)return t||(t=[]),Object.keys(n.hmrI).forEach((function(e){o.forEach((function(r){n.hmrI[e](r,t)}))})),o=void 0,!0}n.hmrD=i,n.i.push((function(f){var m,v,y,_,g=f.module,b=function(t,n){var o=a[n];if(!o)return t;var i=function(r){if(o.hot.active){if(a[r]){var i=a[r].parents;-1===i.indexOf(n)&&i.push(n)}else d=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),d=[];return t(r)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var p in t)Object.prototype.hasOwnProperty.call(t,p)&&"e"!==p&&Object.defineProperty(i,p,c(p));return i.e=function(e){return function(e){switch(s){case"ready":return u("prepare"),r.push(e),l((function(){u("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},i}(f.require,f.id);g.hot=(m=f.id,v=g,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){d=v.parents.slice(),e=y?void 0:m,n(m)},active:!0,accept:function(e,r,t){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)_._acceptedDependencies[e[n]]=r||function(){},_._acceptedErrorHandlers[e[n]]=t;else _._acceptedDependencies[e]=r||function(){},_._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)_._declinedDependencies[e[r]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=_._disposeHandlers.indexOf(e);r>=0&&_._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":t=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(o=o||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return s;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:i[m]},e=void 0,_),g.parents=d,g.children=[],d=[],f.require=b})),n.hmrC={},n.hmrI={}})(),n.p="/",(()=>{var e,r,t,o,i={149:0},a={};function d(e){return new Promise(((r,t)=>{a[e]=r;var o=n.p+n.hu(e),i=new Error;n.l(o,(r=>{if(a[e]){a[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,t(i)}}))}))}function c(a){function d(e){for(var r=[e],t={},o=r.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),a=i.id,d=i.chain,s=n.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var u=0;u<s.parents.length;u++){var l=s.parents[u],p=n.c[l];if(p){if(p.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([l]),moduleId:a,parentId:l};-1===r.indexOf(l)&&(p.hot._acceptedDependencies[a]?(t[l]||(t[l]=[]),c(t[l],[a])):(delete t[l],r.push(l),o.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}n.f&&delete n.f.jsonpHmr,e=void 0;var s={},u=[],l={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in r)if(n.o(r,h)){var f,m=r[h],v=!1,y=!1,_=!1,g="";switch((f=m?d(h):{type:"disposed",moduleId:h}).chain&&(g="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(f),a.ignoreUnaccepted||(v=new Error("Aborted because "+h+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(f),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(f),_=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(y)for(h in l[h]=m,c(u,f.outdatedModules),f.outdatedDependencies)n.o(f.outdatedDependencies,h)&&(s[h]||(s[h]=[]),c(s[h],f.outdatedDependencies[h]));_&&(c(u,[f.moduleId]),l[h]=p)}r=void 0;for(var b,E=[],w=0;w<u.length;w++){var I=u[w],x=n.c[I];x&&(x.hot._selfAccepted||x.hot._main)&&l[I]!==p&&!x.hot._selfInvalidated&&E.push({module:I,require:x.hot._requireSelf,errorHandler:x.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,o=u.slice();o.length>0;){var a=o.pop(),d=n.c[a];if(d){var c={},l=d.hot._disposeHandlers;for(w=0;w<l.length;w++)l[w].call(null,c);for(n.hmrD[a]=c,d.hot.active=!1,delete n.c[a],delete s[a],w=0;w<d.children.length;w++){var p=n.c[d.children[w]];p&&(e=p.parents.indexOf(a))>=0&&p.parents.splice(e,1)}}}for(var h in s)if(n.o(s,h)&&(d=n.c[h]))for(b=s[h],w=0;w<b.length;w++)r=b[w],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(e){for(var r in l)n.o(l,r)&&(n.m[r]=l[r]);for(var t=0;t<o.length;t++)o[t](n);for(var i in s)if(n.o(s,i)){var d=n.c[i];if(d){b=s[i];for(var c=[],p=[],h=[],f=0;f<b.length;f++){var m=b[f],v=d.hot._acceptedDependencies[m],y=d.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),p.push(y),h.push(m)}}for(var _=0;_<c.length;_++)try{c[_].call(null,b)}catch(r){if("function"==typeof p[_])try{p[_](r,{moduleId:i,dependencyId:h[_]})}catch(t){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:h[_],error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:h[_],error:r}),a.ignoreErrored||e(r)}}}for(var g=0;g<E.length;g++){var w=E[g],I=w.module;try{w.require(I)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:I,module:n.c[I]})}catch(t){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:I,error:r}),a.ignoreErrored||e(r)}}return u}}}self.webpackHotUpdate=(e,t,i)=>{for(var d in t)n.o(t,d)&&(r[d]=t[d]);i&&o.push(i),a[e]&&(a[e](),a[e]=void 0)},n.hmrI.jsonp=function(e,i){r||(r={},o=[],t=[],i.push(c)),n.o(r,e)||(r[e]=n.m[e])},n.hmrC.jsonp=function(a,s,u,l,p,h){p.push(c),e={},t=s,r=u.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],a.forEach((function(r){n.o(i,r)&&void 0!==i[r]&&(l.push(d(r)),e[r]=!0)})),n.f&&(n.f.jsonpHmr=function(r,t){e&&!n.o(e,r)&&n.o(i,r)&&void 0!==i[r]&&(t.push(d(r)),e[r]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),n(314)})();