var firebase=function(b){function g(k){if(j[k])return j[k].exports;var q=j[k]={i:k,l:!1,exports:{}};return b[k].call(q.exports,q,q.exports,g),q.l=!0,q.exports}var j={};return g.m=b,g.c=j,g.i=function(k){return k},g.d=function(k,q,w){g.o(k,q)||Object.defineProperty(k,q,{configurable:!1,enumerable:!0,get:w})},g.n=function(k){var q=k&&k.__esModule?function(){return k.default}:function(){return k};return g.d(q,"a",q),q},g.o=function(k,q){return Object.prototype.hasOwnProperty.call(k,q)},g.p="",g(g.s=11)}([function(b,g,j){"use strict";(function(k){Object.defineProperty(g,"__esModule",{value:!0});var q;if(void 0!==k)q=k;else if("undefined"!=typeof self)q=self;else try{q=Function("return this")()}catch(x){throw new Error("polyfill failed because global object is unavailable in this environment")}var w=q.Promise||j(8);g.local={Promise:w,GoogPromise:w}}).call(g,j(1))},function(b){var j=function(){return this}();try{j=j||Function("return this")()||(0,eval)("this")}catch(k){"object"==typeof window&&(j=window)}b.exports=j},function(b,g,j){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var k=j(5),q=(0,k.createFirebaseNamespace)();g.default=q,b.exports=g.default},function(b,g){"use strict";function q(x,y){if(!(y instanceof Object))return y;switch(y.constructor){case Date:return new Date(y.getTime());case Object:void 0===x&&(x={});break;case Array:x=[];break;default:return y;}for(var z in y)y.hasOwnProperty(z)&&(x[z]=q(x[z],y[z]));return x}Object.defineProperty(g,"__esModule",{value:!0}),g.deepCopy=function(x){return q(void 0,x)},g.deepExtend=q,g.patchProperty=function(x,y,z){x[y]=z}},function(b,g){"use strict";function k(A,B){if(!(A instanceof B))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(g,"__esModule",{value:!0});var w=function(){function A(B,C){for(var E,D=0;D<C.length;D++)E=C[D],E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(B,E.key,E)}return function(B,C,D){return C&&A(B.prototype,C),D&&A(B,D),B}}();g.patchCapture=function(A){var B=x;return x=A,B};var x=Error.captureStackTrace,y=function A(B,C){if(k(this,A),this.code=B,this.message=C,x)x(this,z.prototype.create);else{var D=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return D.stack}})}};y.prototype=Object.create(Error.prototype),y.prototype.constructor=y,y.prototype.name="FirebaseError";var z=g.ErrorFactory=function(){function A(B,C,D){k(this,A),this.service=B,this.serviceName=C,this.errors=D,this.pattern=/\{\$([^}]+)}/g}return w(A,[{key:"create",value:function(B,C){void 0===C&&(C={});var D=this.errors[B],E=this.service+"/"+B,F;F=void 0===D?"Error":D.replace(this.pattern,function(I,J){var K=C[J];return void 0===K?"<"+J+"?>":K.toString()}),F=this.serviceName+": "+F+" ("+E+").";var G=new y(E,F);for(var H in C)C.hasOwnProperty(H)&&"_"!==H.slice(-1)&&(G[H]=C[H]);return G}}]),A}()},function(b,g,j){"use strict";function k(H,I){if(!(H instanceof I))throw new TypeError("Cannot call a class as a function")}function q(){function H(O){O=O||D;var P=K[O];return void 0===P&&w("no-app",{name:O}),P}function I(O,P){Object.keys(L).forEach(function(Q){var R=J(O,Q);null!==R&&M[R]&&M[R](P,O)})}function J(O,P){if("serverAuth"===P)return null;var Q=P,R=O.options;return"auth"===P&&(R.serviceAccount||R.credential)&&(Q="serverAuth","serverAuth"in L||w("sa-not-supported")),Q}var K={},L={},M={},N={__esModule:!0,initializeApp:function(O,P){void 0===P?P=D:"string"==typeof P&&""!==P||w("bad-app-name",{name:P+""}),void 0!==K[P]&&w("duplicate-app",{name:P});var Q=new E(O,P,N);return K[P]=Q,I(Q,"create"),void 0!=Q.INTERNAL&&void 0!=Q.INTERNAL.getToken||(0,y.deepExtend)(Q,{INTERNAL:{getUid:function(){return null},getToken:function(){return C.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),Q},app:H,apps:null,Promise:C,SDK_VERSION:"3.9.0",INTERNAL:{registerService:function(O,P,Q,R,S){L[O]&&w("duplicate-service",{name:O}),L[O]=S?P:function(U,V){return P(U,V,D)},R&&(M[O]=R);var T;return T=function(U){return void 0===U&&(U=H()),"function"!=typeof U[O]&&w("invalid-app-argument",{name:O}),U[O]()},void 0!==Q&&(0,y.deepExtend)(T,Q),N[O]=T,T},createFirebaseNamespace:q,extendNamespace:function(O){(0,y.deepExtend)(N,O)},createSubscribe:z.createSubscribe,ErrorFactory:A.ErrorFactory,removeApp:function(O){I(K[O],"delete"),delete K[O]},factories:L,useAsService:J,Promise:B.local.GoogPromise,deepExtend:y.deepExtend}};return(0,y.patchProperty)(N,"default",N),Object.defineProperty(N,"apps",{get:function(){return Object.keys(K).map(function(O){return K[O]})}}),(0,y.patchProperty)(H,"App",E),N}function w(H,I){throw G.create(H,I)}Object.defineProperty(g,"__esModule",{value:!0});var x=function(){function H(I,J){for(var L,K=0;K<J.length;K++)L=J[K],L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(I,L.key,L)}return function(I,J,K){return J&&H(I.prototype,J),K&&H(I,K),I}}();g.createFirebaseNamespace=q;var y=j(3),z=j(6),A=j(4),B=j(0),C=B.local.Promise,D="[DEFAULT]",E=function(){function H(I,J,K){var L=this;k(this,H),this.firebase_=K,this.isDeleted_=!1,this.services_={},this.name_=J,this.options_=(0,y.deepCopy)(I);var M="credential"in this.options_,N="serviceAccount"in this.options_;if(M||N){var O=N?"serviceAccount":"credential";"undefined"!=typeof console&&console.log("The '"+O+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.")}Object.keys(K.INTERNAL.factories).forEach(function(P){var Q=K.INTERNAL.useAsService(L,P);if(null!==Q){var R=L.getService.bind(L,Q);(0,y.patchProperty)(L,P,R)}})}return x(H,[{key:"delete",value:function(){var I=this;return new C(function(J){I.checkDestroyed_(),J()}).then(function(){I.firebase_.INTERNAL.removeApp(I.name_);var J=[];return Object.keys(I.services_).forEach(function(K){Object.keys(I.services_[K]).forEach(function(L){J.push(I.services_[K][L])})}),C.all(J.map(function(K){return K.INTERNAL.delete()}))}).then(function(){I.isDeleted_=!0,I.services_={}})}},{key:"getService",value:function(I,J){this.checkDestroyed_(),void 0===this.services_[I]&&(this.services_[I]={});var K=J||D;if(void 0===this.services_[I][K]){var L=this.firebase_.INTERNAL.factories[I](this,this.extendApp.bind(this),J);return this.services_[I][K]=L,L}return this.services_[I][K]}},{key:"extendApp",value:function(I){(0,y.deepExtend)(this,I)}},{key:"checkDestroyed_",value:function(){this.isDeleted_&&w("app-deleted",{name:this.name_})}},{key:"name",get:function(){return this.checkDestroyed_(),this.name_}},{key:"options",get:function(){return this.checkDestroyed_(),this.options_}}]),H}();E.prototype.name&&E.prototype.options||E.prototype.delete||console.log("dc");var G=new A.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."})},function(b,g,j){"use strict";function k(E,F){if(!(E instanceof F))throw new TypeError("Cannot call a class as a function")}function x(E,F){if("object"!==(void 0===E?"undefined":z(E))||null===E)return!1;var G=!0,H=!1,I;try{for(var J,L,K=F[Symbol.iterator]();!(G=(J=K.next()).done);G=!0)if(L=J.value,L in E&&"function"==typeof E[L])return!0}catch(M){H=!0,I=M}finally{try{!G&&K.return&&K.return()}finally{if(H)throw I}}return!1}function y(){}Object.defineProperty(g,"__esModule",{value:!0});var z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(E){return typeof E}:function(E){return E&&"function"==typeof Symbol&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},A=function(){function E(F,G){for(var I,H=0;H<G.length;H++)I=G[H],I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(F,I.key,I)}return function(F,G,H){return G&&E(F.prototype,G),H&&E(F,H),F}}();g.createSubscribe=function(E,F){var G=new D(E,F);return G.subscribe.bind(G)},g.async=function(E,F){return function(){for(var G=arguments.length,H=Array(G),I=0;I<G;I++)H[I]=arguments[I];C.resolve(!0).then(function(){E.apply(void 0,H)}).catch(function(J){F&&F(J)})}};var B=j(0),C=B.local.Promise,D=function(){function E(F,G){var H=this;k(this,E),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=C.resolve(),this.finalized=!1,this.onNoObservers=G,this.task.then(function(){F(H)}).catch(function(I){H.error(I)})}return A(E,[{key:"next",value:function(F){this.forEachObserver(function(G){G.next(F)})}},{key:"error",value:function(F){this.forEachObserver(function(G){G.error(F)}),this.close(F)}},{key:"complete",value:function(){this.forEachObserver(function(F){F.complete()}),this.close()}},{key:"subscribe",value:function(F,G,H){var I=this,J;if(void 0===F&&void 0===G&&void 0===H)throw new Error("Missing Observer.");J=x(F,["next","error","complete"])?F:{next:F,error:G,complete:H},void 0===J.next&&(J.next=y),void 0===J.error&&(J.error=y),void 0===J.complete&&(J.complete=y);var K=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{I.finalError?J.error(I.finalError):J.complete()}catch(L){}}),this.observers.push(J),K}},{key:"unsubscribeOne",value:function(F){void 0!==this.observers&&void 0!==this.observers[F]&&(delete this.observers[F],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(F){if(!this.finalized)for(var G=0;G<this.observers.length;G++)this.sendOne(G,F)}},{key:"sendOne",value:function(F,G){var H=this;this.task.then(function(){if(void 0!==H.observers&&void 0!==H.observers[F])try{G(H.observers[F])}catch(I){"undefined"!=typeof console&&console.error&&console.error(I)}})}},{key:"close",value:function(F){var G=this;this.finalized||(this.finalized=!0,void 0!==F&&(this.finalError=F),this.task.then(function(){G.observers=void 0,G.onNoObservers=void 0}))}}]),E}()},function(b){function j(){throw new Error("setTimeout has not been defined")}function k(){throw new Error("clearTimeout has not been defined")}function q(I){if(B===setTimeout)return setTimeout(I,0);if((B===j||!B)&&setTimeout)return B=setTimeout,setTimeout(I,0);try{return B(I,0)}catch(J){try{return B.call(null,I,0)}catch(K){return B.call(this,I,0)}}}function w(I){if(C===clearTimeout)return clearTimeout(I);if((C===k||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(I);try{return C(I)}catch(J){try{return C.call(null,I)}catch(K){return C.call(this,I)}}}function x(){G&&E&&(G=!1,E.length?F=E.concat(F):H=-1,F.length&&y())}function y(){if(!G){var I=q(x);G=!0;for(var J=F.length;J;){for(E=F,F=[];++H<J;)E&&E[H].run();H=-1,J=F.length}E=null,G=!1,w(I)}}function z(I,J){this.fun=I,this.array=J}function A(){}var B,C,D=b.exports={};!function(){try{B="function"==typeof setTimeout?setTimeout:j}catch(I){B=j}try{C="function"==typeof clearTimeout?clearTimeout:k}catch(I){C=k}}();var E,F=[],G=!1,H=-1;D.nextTick=function(I){var J=Array(arguments.length-1);if(1<arguments.length)for(var K=1;K<arguments.length;K++)J[K-1]=arguments[K];F.push(new z(I,J)),1!==F.length||G||q(y)},z.prototype.run=function(){this.fun.apply(null,this.array)},D.title="browser",D.browser=!0,D.env={},D.argv=[],D.version="",D.versions={},D.on=A,D.addListener=A,D.once=A,D.off=A,D.removeListener=A,D.removeAllListeners=A,D.emit=A,D.binding=function(){throw new Error("process.binding is not supported")},D.cwd=function(){return"/"},D.chdir=function(){throw new Error("process.chdir is not supported")},D.umask=function(){return 0}},function(b,g,j){(function(k){!function(q){function w(){}function x(G,H){return function(){G.apply(H,arguments)}}function y(G){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof G)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],E(G,this)}function z(G,H){for(;3===G._state;)G=G._value;return 0===G._state?void G._deferreds.push(H):void(G._handled=!0,y._immediateFn(function(){var I=1===G._state?H.onFulfilled:H.onRejected;if(null===I)return void(1===G._state?A:B)(H.promise,G._value);var J;try{J=I(G._value)}catch(K){return void B(H.promise,K)}A(H.promise,J)}))}function A(G,H){try{if(H===G)throw new TypeError("A promise cannot be resolved with itself.");if(H&&("object"==typeof H||"function"==typeof H)){var I=H.then;if(H instanceof y)return G._state=3,G._value=H,void C(G);if("function"==typeof I)return void E(x(I,H),G)}G._state=1,G._value=H,C(G)}catch(J){B(G,J)}}function B(G,H){G._state=2,G._value=H,C(G)}function C(G){2===G._state&&0===G._deferreds.length&&y._immediateFn(function(){G._handled||y._unhandledRejectionFn(G._value)});for(var H=0,I=G._deferreds.length;H<I;H++)z(G,G._deferreds[H]);G._deferreds=null}function D(G,H,I){this.onFulfilled="function"==typeof G?G:null,this.onRejected="function"==typeof H?H:null,this.promise=I}function E(G,H){var I=!1;try{G(function(J){I||(I=!0,A(H,J))},function(J){I||(I=!0,B(H,J))})}catch(J){if(I)return;I=!0,B(H,J)}}var F=setTimeout;y.prototype.catch=function(G){return this.then(null,G)},y.prototype.then=function(G,H){var I=new this.constructor(w);return z(this,new D(G,H,I)),I},y.all=function(G){var H=Array.prototype.slice.call(G);return new y(function(I,J){function K(N,O){try{if(O&&("object"==typeof O||"function"==typeof O)){var P=O.then;if("function"==typeof P)return void P.call(O,function(Q){K(N,Q)},J)}H[N]=O,0==--L&&I(H)}catch(Q){J(Q)}}if(0===H.length)return I([]);for(var L=H.length,M=0;M<H.length;M++)K(M,H[M])})},y.resolve=function(G){return G&&"object"==typeof G&&G.constructor===y?G:new y(function(H){H(G)})},y.reject=function(G){return new y(function(H,I){I(G)})},y.race=function(G){return new y(function(H,I){for(var J=0,K=G.length;J<K;J++)G[J].then(H,I)})},y._immediateFn="function"==typeof k&&function(G){k(G)}||function(G){F(G,0)},y._unhandledRejectionFn=function(G){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",G)},y._setImmediateFn=function(G){y._immediateFn=G},y._setUnhandledRejectionFn=function(G){y._unhandledRejectionFn=G},void 0!==b&&b.exports?b.exports=y:q.Promise||(q.Promise=y)}(this)}).call(g,j(10).setImmediate)},function(b,g,j){(function(k,q){!function(w,x){"use strict";function y(I){"function"!=typeof I&&(I=new Function(""+I));for(var J=Array(arguments.length-1),K=0;K<J.length;K++)J[K]=arguments[K+1];var L={callback:I,args:J};return E[D]=L,C(D),D++}function z(I){delete E[I]}function A(I){var J=I.callback,K=I.args;switch(K.length){case 0:J();break;case 1:J(K[0]);break;case 2:J(K[0],K[1]);break;case 3:J(K[0],K[1],K[2]);break;default:J.apply(x,K);}}function B(I){if(F)setTimeout(B,0,I);else{var J=E[I];if(J){F=!0;try{A(J)}finally{z(I),F=!1}}}}if(!w.setImmediate){var C,D=1,E={},F=!1,G=w.document,H=Object.getPrototypeOf&&Object.getPrototypeOf(w);H=H&&H.setTimeout?H:w,"[object process]"==={}.toString.call(w.process)?function(){C=function(I){q.nextTick(function(){B(I)})}}():function(){if(w.postMessage&&!w.importScripts){var I=!0,J=w.onmessage;return w.onmessage=function(){I=!1},w.postMessage("","*"),w.onmessage=J,I}}()?function(){var I="setImmediate$"+Math.random()+"$",J=function(K){K.source===w&&"string"==typeof K.data&&0===K.data.indexOf(I)&&B(+K.data.slice(I.length))};w.addEventListener?w.addEventListener("message",J,!1):w.attachEvent("onmessage",J),C=function(K){w.postMessage(I+K,"*")}}():w.MessageChannel?function(){var I=new MessageChannel;I.port1.onmessage=function(J){B(J.data)},C=function(J){I.port2.postMessage(J)}}():G&&"onreadystatechange"in G.createElement("script")?function(){var I=G.documentElement;C=function(J){var K=G.createElement("script");K.onreadystatechange=function(){B(J),K.onreadystatechange=null,I.removeChild(K),K=null},I.appendChild(K)}}():function(){C=function(I){setTimeout(B,0,I)}}(),H.setImmediate=y,H.clearImmediate=z}}("undefined"==typeof self?void 0===k?this:k:self)}).call(g,j(1),j(7))},function(b,g,j){function k(w,x){this._id=w,this._clearFn=x}var q=Function.prototype.apply;g.setTimeout=function(){return new k(q.call(setTimeout,window,arguments),clearTimeout)},g.setInterval=function(){return new k(q.call(setInterval,window,arguments),clearInterval)},g.clearTimeout=g.clearInterval=function(w){w&&w.close()},k.prototype.unref=k.prototype.ref=function(){},k.prototype.close=function(){this._clearFn.call(window,this._id)},g.enroll=function(w,x){clearTimeout(w._idleTimeoutId),w._idleTimeout=x},g.unenroll=function(w){clearTimeout(w._idleTimeoutId),w._idleTimeout=-1},g._unrefActive=g.active=function(w){clearTimeout(w._idleTimeoutId);var x=w._idleTimeout;0<=x&&(w._idleTimeoutId=setTimeout(function(){w._onTimeout&&w._onTimeout()},x))},j(9),g.setImmediate=setImmediate,g.clearImmediate=clearImmediate},function(b,g,j){b.exports=j(2)}]);