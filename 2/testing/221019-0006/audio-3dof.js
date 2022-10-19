(()=>{"use strict";var e,t={314:(e,t,r)=>{const n=BABYLON,o=Omnitone;var i=r.n(o);const a=Math.PI/2;r.g.AUDIO={Engine:class{constructor(e){this.onCameraMatrixChanged=e=>{e.decompose(void 0,this._.cameraRotationQuaternion),this._.cameraRotationQuaternion.toEulerAnglesToRef(this._.cameraRotation),this.rotationY=this._.cameraRotation.y},this.onAudioEnded=()=>{this._.audioWY.isPlaying||this._.audioZX.isPlaying||(console.debug("Restarting audio"),this._.audioContext.suspend(),this._.audioWY.play(),this._.audioZX.play(),this._.startTime=this._.audioContext.currentTime,this._.audioContext.resume())},this._=new class{constructor(){this.audioContext=null,this.audioWY=null,this.audioZX=null,this.cameraRotationQuaternion=new n.Quaternion,this.cameraRotation=new n.Vector3,this.rotationTargetY=0,this.adjustedRotationTargetY=0,this.rotationY=0,this.rotationMatrix=new n.Matrix,this.startTime=0}},e.resume(),e.suspend();const t={autoplay:!1,loop:!1,spatialSound:!1,streaming:!0},r=new n.Sound("normalized-wy","./assets/normalized-wy.mp3",null,null,t),o=new n.Sound("normalized-zx","./assets/normalized-zx.mp3",null,null,t);r.play(),r.stop(),o.play(),o.stop();const a=i().createFOARenderer(e);a.initialize().then((()=>{e.suspend();const t=new ChannelMergerNode(e,{numberOfInputs:4,channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"}),n=r.getSoundGain(),i=o.getSoundGain();n.disconnect(),n.connect(t,0,0),n.connect(t,0,1),i.disconnect(),i.connect(t,0,3),i.connect(t,0,2),t.connect(a.input),a.output.connect(e.destination),a.setRotationMatrix4(this._.rotationMatrix.m);const d=setInterval((()=>{r.isReady()&&o.isReady()&&(clearInterval(d),e.suspend(),r.play(),o.play(),this._.startTime=e.currentTime,e.resume())}))}));const d=.01;let c=!1;setInterval((()=>{Math.abs(this._.adjustedRotationTargetY-this._.rotationY)<d||(c||(c=!0,this._.rotationY=this._.adjustedRotationTargetY),this._.adjustedRotationTargetY<this._.rotationY?this._.rotationY-=d:this._.rotationY<this._.adjustedRotationTargetY&&(this._.rotationY+=d),a&&(n.Matrix.RotationYToRef(this._.rotationY,this._.rotationMatrix),a.setRotationMatrix4(this._.rotationMatrix.m)))}),.1),r.onEndedObservable.add(this.onAudioEnded),o.onEndedObservable.add(this.onAudioEnded),this._.audioContext=e,this._.audioWY=r,this._.audioZX=o}get sequenceTime(){return this._.audioWY.isPlaying?this._.audioContext.currentTime-this._.startTime- -.95:0}set rotationY(e){.01<Math.abs(this._.rotationTargetY-e)&&(this._.rotationTargetY=e,this._.adjustedRotationTargetY=e-a)}}}}},r={};function n(e){var o=r[e];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var i=r[e]={exports:{}};try{var a={id:e,module:i,factory:t[e],require:n};n.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}n.m=t,n.c=r,n.i=[],n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"audio-3dof."+n.h()+".hot-update.json",n.h=()=>"f5ea60fd5564143627eb",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,r,o,i)=>{if(e[t])e[t].push(r);else{var a,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==t){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=t),e[t]=[r];var l=(r,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},(()=>{var e,t,r,o,i={},a=n.c,d=[],c=[],s="idle";function u(e){s=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}function l(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return l(e)}))}function h(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check"),n.hmrM().then((function(o){if(!o)return u(m()?"ready":"idle"),null;u("prepare");var i=[];return t=[],r=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,t){return n.hmrC[t](o.c,o.r,o.m,e,r,i),e}),[])).then((function(){return l((function(){return e?f(e):(u("ready"),i)}))}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var n,i=t.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return u("abort"),Promise.resolve().then((function(){throw i[0]}));u("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),u("apply");var a=function(e){n||(n=e)},d=[];return t.forEach((function(e){if(e.apply){var t=e.apply(a);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),n?(u("fail"),Promise.resolve().then((function(){throw n}))):o?f(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(u("idle"),Promise.resolve(d))}function m(){if(o)return r||(r=[]),Object.keys(n.hmrI).forEach((function(e){o.forEach((function(t){n.hmrI[e](t,r)}))})),o=void 0,!0}n.hmrD=i,n.i.push((function(f){var m,v,y,_,g=f.module,b=function(r,n){var o=a[n];if(!o)return r;var i=function(t){if(o.hot.active){if(a[t]){var i=a[t].parents;-1===i.indexOf(n)&&i.push(n)}else d=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),d=[];return r(t)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&"e"!==h&&Object.defineProperty(i,h,c(h));return i.e=function(e){return function(e){switch(s){case"ready":return u("prepare"),t.push(e),l((function(){u("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},i}(f.require,f.id);g.hot=(m=f.id,v=g,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){d=v.parents.slice(),e=y?void 0:m,n(m)},active:!0,accept:function(e,t,r){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)_._acceptedDependencies[e[n]]=t||function(){},_._acceptedErrorHandlers[e[n]]=r;else _._acceptedDependencies[e]=t||function(){},_._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)_._declinedDependencies[e[t]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=_._disposeHandlers.indexOf(e);t>=0&&_._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":r=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,r)})),u("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(o=o||[]).push(m)}},check:h,apply:p,status:function(e){if(!e)return s;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:i[m]},e=void 0,_),g.parents=d,g.children=[],d=[],f.require=b})),n.hmrC={},n.hmrI={}})(),n.p="/",(()=>{var e,t,r,o,i={149:0},a={};function d(e){return new Promise(((t,r)=>{a[e]=t;var o=n.p+n.hu(e),i=new Error;n.l(o,(t=>{if(a[e]){a[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,r(i)}}))}))}function c(a){function d(e){for(var t=[e],r={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),a=i.id,d=i.chain,s=n.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:a};for(var u=0;u<s.parents.length;u++){var l=s.parents[u],h=n.c[l];if(h){if(h.hot._declinedDependencies[a])return{type:"declined",chain:d.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(h.hot._acceptedDependencies[a]?(r[l]||(r[l]=[]),c(r[l],[a])):(delete r[l],t.push(l),o.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}n.f&&delete n.f.jsonpHmr,e=void 0;var s={},u=[],l={},h=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(n.o(t,p)){var f,m=t[p],v=!1,y=!1,_=!1,g="";switch((f=m?d(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(f),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(f),a.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(f),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(f),_=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(y)for(p in l[p]=m,c(u,f.outdatedModules),f.outdatedDependencies)n.o(f.outdatedDependencies,p)&&(s[p]||(s[p]=[]),c(s[p],f.outdatedDependencies[p]));_&&(c(u,[f.moduleId]),l[p]=h)}t=void 0;for(var b,E=[],w=0;w<u.length;w++){var I=u[w],x=n.c[I];x&&(x.hot._selfAccepted||x.hot._main)&&l[I]!==h&&!x.hot._selfInvalidated&&E.push({module:I,require:x.hot._requireSelf,errorHandler:x.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete i[e]})),r=void 0;for(var t,o=u.slice();o.length>0;){var a=o.pop(),d=n.c[a];if(d){var c={},l=d.hot._disposeHandlers;for(w=0;w<l.length;w++)l[w].call(null,c);for(n.hmrD[a]=c,d.hot.active=!1,delete n.c[a],delete s[a],w=0;w<d.children.length;w++){var h=n.c[d.children[w]];h&&(e=h.parents.indexOf(a))>=0&&h.parents.splice(e,1)}}}for(var p in s)if(n.o(s,p)&&(d=n.c[p]))for(b=s[p],w=0;w<b.length;w++)t=b[w],(e=d.children.indexOf(t))>=0&&d.children.splice(e,1)},apply:function(e){for(var t in l)n.o(l,t)&&(n.m[t]=l[t]);for(var r=0;r<o.length;r++)o[r](n);for(var i in s)if(n.o(s,i)){var d=n.c[i];if(d){b=s[i];for(var c=[],h=[],p=[],f=0;f<b.length;f++){var m=b[f],v=d.hot._acceptedDependencies[m],y=d.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),h.push(y),p.push(m)}}for(var _=0;_<c.length;_++)try{c[_].call(null,b)}catch(t){if("function"==typeof h[_])try{h[_](t,{moduleId:i,dependencyId:p[_]})}catch(r){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[_],error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[_],error:t}),a.ignoreErrored||e(t)}}}for(var g=0;g<E.length;g++){var w=E[g],I=w.module;try{w.require(I)}catch(t){if("function"==typeof w.errorHandler)try{w.errorHandler(t,{moduleId:I,module:n.c[I]})}catch(r){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:I,error:t}),a.ignoreErrored||e(t)}}return u}}}self.webpackHotUpdate=(e,r,i)=>{for(var d in r)n.o(r,d)&&(t[d]=r[d]);i&&o.push(i),a[e]&&(a[e](),a[e]=void 0)},n.hmrI.jsonp=function(e,i){t||(t={},o=[],r=[],i.push(c)),n.o(t,e)||(t[e]=n.m[e])},n.hmrC.jsonp=function(a,s,u,l,h,p){h.push(c),e={},r=s,t=u.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],a.forEach((function(t){n.o(i,t)&&void 0!==i[t]&&(l.push(d(t)),e[t]=!0)})),n.f&&(n.f.jsonpHmr=function(t,r){e&&!n.o(e,t)&&n.o(i,t)&&void 0!==i[t]&&(r.push(d(t)),e[t]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),n(314)})();