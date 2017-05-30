(function(){for(var i,_,j="function"==typeof Object.defineProperties?Object.defineProperty:function(re,se,te){re!=Array.prototype&&re!=Object.prototype&&(re[se]=te.value)},o="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,s=["Number","MIN_SAFE_INTEGER"],$=0;$<s.length-1;$++)_=s[$],_ in o||(o[_]={}),o=o[_];var _a=s[s.length-1];-9007199254740991!=o[_a]&&j(o,_a,{configurable:!0,writable:!0,value:-9007199254740991});var Xb=this,Yb=function(re){return void 0!==re},Zb=function(re){var se=typeof re;if("object"==se){if(re){if(re instanceof Array)return"array";if(re instanceof Object)return se;var te=Object.prototype.toString.call(re);if("[object Window]"==te)return"object";if("[object Array]"==te||"number"==typeof re.length&&"undefined"!=typeof re.splice&&"undefined"!=typeof re.propertyIsEnumerable&&!re.propertyIsEnumerable("splice"))return"array";if("[object Function]"==te||"undefined"!=typeof re.call&&"undefined"!=typeof re.propertyIsEnumerable&&!re.propertyIsEnumerable("call"))return"function"}else return"null";}else if("function"==se&&"undefined"==typeof re.call)return"object";return se},$b=function(re,se){this.code="storage/"+re,this.message="Firebase Storage: "+se,this.serverResponse=null,this.name="FirebaseError"};(function(){function re(){}var se=Error;re.prototype=se.prototype,$b.b=se.prototype,$b.prototype=new re,$b.a=function(te,ue){for(var we=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)we[xe-2]=arguments[xe];return se.prototype[ue].apply(te,we)}})();var _b=function(){return new $b("unknown","An unknown error occurred, please check the error payload for server response.")},ac=function(){return new $b("canceled","User canceled the upload/download.")},bc=function(){return new $b("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},cc=function(re,se,te){return new $b("invalid-argument","Invalid argument in `"+se+"` at index "+re+": "+te)},dc=function(){return new $b("app-deleted","The Firebase app was deleted.")},ec=function(re,se){return new $b("invalid-format","String does not match format '"+re+"': "+se)},fc=function(re){throw new $b("internal-error","Internal error: "+re)},gc="https://firebasestorage.googleapis.com",hc=function(re){if("undefined"!==typeof firebase)return new firebase.Promise(re);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.")},ic=function(re,se){return-1!==re.indexOf(se)},jc=function(re,se,te){function ue(){Ce||(Ce=!0,se.apply(null,arguments))}function ve(Ee){ze=setTimeout(function(){ze=null,re(we,2===Be)},Ee)}function we(Ee){if(!Ce)if(Ee)ue.apply(null,arguments);else if(2===Be||Ae)ue.apply(null,arguments);else{64>ye&&(ye*=2);var Ge;1===Be?(Be=2,Ge=0):Ge=1E3*(ye+Math.random()),ve(Ge)}}function xe(Ee){De||(De=!0,Ce||(null===ze?Ee||(Be=1):(Ee||(Be=2),clearTimeout(ze),ve(0))))}var ye=1,ze=null,Ae=!1,Be=0,Ce=!1,De=!1;return ve(0),setTimeout(function(){Ae=!0,xe(!0)},te),xe},kc=function(re,se){for(var te in re)Object.prototype.hasOwnProperty.call(re,te)&&se(te,re[te])},lc=function(re){var se={};return kc(re,function(te,ue){se[te]=ue}),se},mc=function(re,se,te,ue){this.l=re,this.b={},this.method=se,this.headers={},this.body=null,this.m=te,this.c=this.a=null,this.f=[200],this.i=[],this.timeout=ue,this.g=!0},nc=function(re){var se=encodeURIComponent,te="?";return kc(re,function(ue,ve){ue=se(ue)+"="+se(ve),te=te+ue+"&"}),te=te.slice(0,-1)},oc=function(re,se,te,ue,ve,we,xe,ye,ze,Ae,Be){this.F=re,this.D=se,this.A=te,this.u=ue,this.B=ve.slice(),this.s=we.slice(),this.m=this.o=this.c=this.b=null,this.g=this.i=!1,this.v=xe,this.l=ye,this.f=Ae,this.G=Be,this.C=ze;var Ce=this;this.w=hc(function(De,Ee){Ce.o=De,Ce.m=Ee,qc(Ce)})},pc=function(re,se,te){this.b=re,this.c=se,this.a=!!te},qc=function(re){function te(ve,we){var xe=ue.o;ve=ue.m;var ye=we.c;if(we.b)try{var ze=ue.v(ye,Vd(ye));Yb(ze)?xe(ze):xe()}catch(Ae){ve(Ae)}else null===ye?(we=we.a?ue.g?dc():ac():new $b("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),ve(we)):(we=_b(),ze=Vd(ye),we.serverResponse=ze,ue.l?ve(ue.l(ye,we)):ve(we))}var ue=re;re.i?te(0,new pc(!1,null,!0)):re.c=jc(function(ve,we){function xe(ye){ue.f(ye.loaded,ye.lengthComputable?ye.total:-1)}we?ve(!1,new pc(!1,null,!0)):(we=new Rd,we.h.withCredentials=ue.G,ue.b=we,null!==ue.f&&Yb(we.h.upload)&&we.h.upload.addEventListener("progress",xe),Sd(we,ue.F,ue.D,ue.u,ue.A).then(function(ye){null!==ue.f&&Yb(ye.h.upload)&&ye.h.upload.removeEventListener("progress",xe),ue.b=null;var ze=0===Td(ye),Ae=Ud(ye);if(!(ze=!ze))var ze=ic([408,429],Ae),Be=ic(ue.s,Ae),ze=500<=Ae&&600>Ae||ze||Be;ze?(ye=2===Td(ye),ve(!1,new pc(!1,null,ye))):ve(!0,new pc(ic(ue.B,Ae),ye))}))},te,re.C)};oc.prototype.a=function(){return this.w},oc.prototype.cancel=function(re){this.i=!0,this.g=re||!1,null!==this.c&&(0,this.c)(!1),null!==this.b&&this.b.abort()};var rc=function(re,se,te){var ue=nc(re.b),ue=re.l+ue,ve=re.headers?lc(re.headers):{};return null!==se&&0<se.length&&(ve.Authorization="Firebase "+se),ve["X-Firebase-Storage-Version"]="webjs/"+("undefined"===typeof firebase?"AppManager":firebase.SDK_VERSION),new oc(ue,re.method,ve,re.body,re.f,re.i,re.m,re.a,re.timeout,re.c,te)},sc=function(re){this.b=firebase.Promise.reject(re)};sc.prototype.a=function(){return this.b},sc.prototype.cancel=function(){};var tc=function(re,se){this.bucket=re,this.path=se},uc=function(re){var se=encodeURIComponent;return"/b/"+se(re.bucket)+"/o/"+se(re.path)},vc=function(re){var se;try{se=wc(re)}catch(te){return new tc(re,"")}if(""===se.path)return se;throw new $b("invalid-default-bucket","Invalid default bucket '"+re+"'.")},wc=function(re){for(var se=null,te=[{M:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,H:{bucket:1,path:3},L:function(xe){"/"===xe.path.charAt(xe.path.length-1)&&(xe.path=xe.path.slice(0,-1))}},{M:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,H:{bucket:1,path:3},L:function(xe){xe.path=decodeURIComponent(xe.path)}}],ue=0;ue<te.length;ue++){var ve=te[ue],we=ve.M.exec(re);if(we){se=we[ve.H.bucket],(we=we[ve.H.path])||(we=""),se=new tc(se,we),ve.L(se);break}}if(null==se)throw new $b("invalid-url","Invalid URL '"+re+"'.");return se},xc=function(){this.a={},this.b=Number.MIN_SAFE_INTEGER},yc=function(re,se){function te(){delete ve.a[ue]}var ue=re.b;re.b++,re.a[ue]=se;var ve=re;se.a().then(te,te)},zc=function(re){kc(re.a,function(se,te){te&&te.cancel(!0)}),re.a={}},Ac=function(re){return Yb(re)&&null!==re},Bc=function(re){return"string"===typeof re||re instanceof String},Cc=function(){return"undefined"!==typeof Blob},Dc=function(re,se,te,ue,ve){this.a=re,this.g=null,null!==this.a&&(re=this.a.options,Ac(re)&&(re=re.storageBucket||null,this.g=null==re?null:vc(re).bucket)),this.s=se,this.o=te,this.l=ve,this.m=ue,this.c=12E4,this.b=6E4,this.i=new xc,this.f=!1},Ec=function(re){return null!==re.a&&Ac(re.a.INTERNAL)&&Ac(re.a.INTERNAL.getToken)?re.a.INTERNAL.getToken().then(function(se){return Ac(se)?se.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};Dc.prototype.bucket=function(){if(this.f)throw dc();return this.g};var Fc=function(re,se,te){return re.f?new sc(dc()):(se=re.o(se,te,null===re.a,re.l),yc(re.i,se),se)},Gc=function(re,se){return se=se.split("/").filter(function(te){return 0<te.length}).join("/"),0===re.length?se:re+"/"+se},Hc=function(re){var se=re.lastIndexOf("/",re.length-2);return-1===se?re:re.slice(se+1)},Ic=function(re,se){return se},Jc=function(re,se,te,ue){this.c=re,this.b=se||re,this.writable=!!te,this.a=ue||Ic},Kc=null,Lc=function(){if(Kc)return Kc;var re=[new Jc("bucket"),new Jc("generation"),new Jc("metageneration"),new Jc("name","fullPath",!0)],se=new Jc("name");return se.a=function(te,ue){return!Bc(ue)||2>ue.length?ue:Hc(ue)},re.push(se),se=new Jc("size"),se.a=function(te,ue){return Ac(ue)?+ue:ue},re.push(se),re.push(new Jc("timeCreated")),re.push(new Jc("updated")),re.push(new Jc("md5Hash",null,!0)),re.push(new Jc("cacheControl",null,!0)),re.push(new Jc("contentDisposition",null,!0)),re.push(new Jc("contentEncoding",null,!0)),re.push(new Jc("contentLanguage",null,!0)),re.push(new Jc("contentType",null,!0)),re.push(new Jc("metadata","customMetadata",!0)),re.push(new Jc("downloadTokens","downloadURLs",!1,function(te,ue){if(!(Bc(ue)&&0<ue.length))return[];var ve=encodeURIComponent;return ue.split(",").map(function(we){var xe=te.fullPath,xe="https://firebasestorage.googleapis.com/v0/b/"+ve(te.bucket)+"/o/"+ve(xe);return we=nc({alt:"media",token:we}),xe+we})})),Kc=re},Mc=function(re,se){Object.defineProperty(re,"ref",{get:function(){return se.s(se,new tc(re.bucket,re.fullPath))}})},Nc=function(re,se){for(var we,te={},ue=se.length,ve=0;ve<ue;ve++)we=se[ve],we.writable&&(te[we.c]=re[we.b]);return JSON.stringify(te)},Oc=function(re){if(!re||"object"!==typeof re)throw"Expected Metadata object.";for(var se in re){var te=re[se];if("customMetadata"===se){if("object"!==typeof te)throw"Expected object for 'customMetadata' mapping.";}else if(null!=te&&"object"===typeof te)throw"Mapping for '"+se+"' cannot be an object."}},Pc=function(re,se,te){for(var ue=se.length,ve=se.length,we=0;we<se.length;we++)if(se[we].b){ue=we;break}if(!(ue<=te.length&&te.length<=ve))throw ue===ve?(se=ue,ue=1===ue?"argument":"arguments"):(se="between "+ue+" and "+ve,ue="arguments"),new $b("invalid-argument-count","Invalid argument count in `"+re+"`: Expected "+se+" "+ue+", received "+te.length+".");for(we=0;we<te.length;we++)try{se[we].a(te[we])}catch(xe){if(xe instanceof Error)throw cc(we,re,xe.message);throw cc(we,re,xe)}},Qc=function(re,se){var te=this;this.a=function(ue){te.b&&!Yb(ue)||re(ue)},this.b=!!se},Rc=function(re,se){return function(te){re(te),se(te)}},Sc=function(re,se){function te(ve){if(!("string"===typeof ve||ve instanceof String))throw"Expected string."}var ue;return ue=re?Rc(te,re):te,new Qc(ue,se)},Tc=function(){return new Qc(function(re){if(!(re instanceof Uint8Array||re instanceof ArrayBuffer||Cc()&&re instanceof Blob))throw"Expected Blob or File."})},Uc=function(){return new Qc(function(re){if(!(("number"===typeof re||re instanceof Number)&&0<=re))throw"Expected a number 0 or greater."})},Vc=function(re,se){return new Qc(function(te){if(!(null===te||Ac(te)&&te instanceof Object))throw"Expected an Object.";Ac(re)&&re(te)},se)},Wc=function(){return new Qc(function(re){if(null!==re&&"function"!=Zb(re))throw"Expected a Function."},!0)},Xc=function(re){return function(){var se=[];Array.prototype.push.apply(se,arguments),firebase.Promise.resolve(!0).then(function(){re.apply(null,se)})}},Yc=String.prototype.trim?function(re){return re.trim()}:function(re){return re.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Zc=function(re,se){return re<se?-1:re>se?1:0},$c;a:{var _c=Xb.navigator;if(_c){var ad=_c.userAgent;if(ad){$c=ad;break a}}$c=""}var bd=function(re,se){var te=nd;return Object.prototype.hasOwnProperty.call(te,re)?te[re]:te[re]=se(re)},cd=-1!=$c.indexOf("Opera"),dd=-1!=$c.indexOf("Trident")||-1!=$c.indexOf("MSIE"),ed=-1!=$c.indexOf("Edge"),fd=-1!=$c.indexOf("Gecko")&&(-1==$c.toLowerCase().indexOf("webkit")||-1!=$c.indexOf("Edge"))&&-1==$c.indexOf("Trident")&&-1==$c.indexOf("MSIE")&&-1==$c.indexOf("Edge"),gd=-1!=$c.toLowerCase().indexOf("webkit")&&-1==$c.indexOf("Edge"),hd;a:{var id="",jd=function(){var re=$c;return fd?/rv\:([^\);]+)(\)|;)/.exec(re):ed?/Edge\/([\d\.]+)/.exec(re):dd?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(re):gd?/WebKit\/(\S+)/.exec(re):cd?/(?:Version)[ \/]?(\S+)/.exec(re):void 0}();if(jd&&(id=jd?jd[1]:""),dd){var kd,ld=Xb.document;if(kd=ld?ld.documentMode:void 0,null!=kd&&kd>parseFloat(id)){hd=kd+"";break a}}hd=id}var md=hd,nd={},od=function(re){return bd(re,function(){for(var se=0,te=Yc(md+"").split("."),ue=Yc(re+"").split("."),ve=Math.max(te.length,ue.length),we=0;0==se&&we<ve;we++){var xe=te[we]||"",ye=ue[we]||"";do{if(xe=/(\d*)(\D*)(.*)/.exec(xe)||["","","",""],ye=/(\d*)(\D*)(.*)/.exec(ye)||["","","",""],0==xe[0].length&&0==ye[0].length)break;se=Zc(0==xe[1].length?0:parseInt(xe[1],10),0==ye[1].length?0:parseInt(ye[1],10))||Zc(0==xe[2].length,0==ye[2].length)||Zc(xe[2],ye[2]),xe=xe[3],ye=ye[3]}while(0==se)}return 0<=se})},pd=function(){var se=Xb.BlobBuilder||Xb.WebKitBlobBuilder;if(Yb(se)){for(var se=new se,te=0;te<arguments.length;te++)se.append(arguments[te]);return se.getBlob()}if(se=Array.prototype.slice.call(arguments),te=Xb.BlobBuilder||Xb.WebKitBlobBuilder,Yb(te)){for(var te=new te,ue=0;ue<se.length;ue++)te.append(se[ue],void 0);se=te.getBlob(void 0)}else if(Yb(Xb.Blob))se=new Blob(se,{});else throw Error("This browser doesn't seem to support creating Blobs");return se},qd=function(re,se,te){return Yb(te)||(te=re.size),re.webkitSlice?re.webkitSlice(se,te):re.mozSlice?re.mozSlice(se,te):re.slice?fd&&!od("13.0")||gd&&!od("537.1")?(0>se&&(se+=re.size),0>se&&(se=0),0>te&&(te+=re.size),te<se&&(te=se),re.slice(se,te-se)):re.slice(se,te):null},rd={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},sd=function(re){switch(re){case"raw":case"base64":case"base64url":case"data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},td=function(re,se){this.data=re,this.a=se||null},ud=function(re,se){switch(re){case"raw":return new td(vd(se));case"base64":case"base64url":return new td(wd(re,se));case"data_url":re=new xd(se);var te;if(re.a)te=wd("base64",re.c);else{try{te=decodeURIComponent(re.c)}catch(ue){throw ec("data_url","Malformed data URL.")}te=vd(te)}return new td(te,new xd(se).b);}throw _b()},vd=function(re){for(var ue,se=[],te=0;te<re.length;te++)if(ue=re.charCodeAt(te),127>=ue)se.push(ue);else if(2047>=ue)se.push(192|ue>>6,128|63&ue);else if(55296!=(64512&ue))56320==(64512&ue)?se.push(239,191,189):se.push(224|ue>>12,128|63&ue>>6,128|63&ue);else if(te<re.length-1&&56320==(64512&re.charCodeAt(te+1))){var ve=re.charCodeAt(++te),ue=65536|(1023&ue)<<10|1023&ve;se.push(240|ue>>18,128|63&ue>>12,128|63&ue>>6,128|63&ue)}else se.push(239,191,189);return new Uint8Array(se)},wd=function(re,se){switch(re){case"base64":var te=-1!==se.indexOf("-"),ue=-1!==se.indexOf("_");if(te||ue)throw ec(re,"Invalid character '"+(te?"-":"_")+"' found: is it base64url encoded?");break;case"base64url":if(te=-1!==se.indexOf("+"),ue=-1!==se.indexOf("/"),te||ue)throw ec(re,"Invalid character '"+(te?"+":"/")+"' found: is it base64 encoded?");se=se.replace(/-/g,"+").replace(/_/g,"/");}var ve;try{ve=atob(se)}catch(we){throw ec(re,"Invalid character found")}for(re=new Uint8Array(ve.length),se=0;se<ve.length;se++)re[se]=ve.charCodeAt(se);return re},xd=function(re){var se=re.match(/^data:([^,]+)?,/);if(null===se)throw ec("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");if(se=se[1]||null,this.a=!1,this.b=null,null!=se){var te=se.length-7;this.b=(this.a=0<=te&&se.indexOf(";base64",te)==te)?se.substring(0,se.length-7):se}this.c=re.substring(re.indexOf(",")+1)},yd=function(re,se){Cc()&&re instanceof Blob?(this.j=re,se=re.size,re=re.type):(re instanceof ArrayBuffer?(se?this.j=new Uint8Array(re):(this.j=new Uint8Array(re.byteLength),this.j.set(new Uint8Array(re))),se=this.j.length):(se?this.j=re:(this.j=new Uint8Array(re.length),this.j.set(re)),se=re.length),re=""),this.a=se,this.b=re};yd.prototype.type=function(){return this.b},yd.prototype.slice=function(re,se){return Cc()&&this.j instanceof Blob?(re=qd(this.j,re,se),null===re?null:new yd(re)):(re=new Uint8Array(this.j.buffer,re,se-re),new yd(re,!0))};var zd=function(){var se=[];if(Array.prototype.push.apply(se,arguments),Cc())return se=se.map(function(we){return we instanceof yd?we.j:we}),new yd(pd.apply(null,se));var se=se.map(function(we){return Bc(we)?ud("raw",we).data:we.j}),te=0;se.forEach(function(we){te+=we.byteLength});var ue=new Uint8Array(te),ve=0;return se.forEach(function(we){for(var xe=0;xe<we.length;xe++)ue[ve++]=we[xe]}),new yd(ue,!0)},Ad=function(re,se,te){"function"==Zb(re)||Ac(se)||Ac(te)?(this.b=re,this.error=se||null,this.a=te||null):(this.b=re.next||null,this.error=re.error||null,this.a=re.complete||null)},Bd=function(re){if(!re)throw _b()},Cd=function(re,se){return function(te,ue){var ve;a:{try{ve=JSON.parse(ue)}catch(ye){ve=null;break a}te=typeof ve,ve="object"==te&&null!=ve||"function"==te?ve:null}if(null===ve)ve=null;else{te={type:"file"},ue=se.length;for(var xe,we=0;we<ue;we++)xe=se[we],te[xe.b]=xe.a(te,ve[xe.c]);Mc(te,re),ve=te}return Bd(null!==ve),ve}},Dd=function(re){return function(se,te){return se=401===Ud(se)?new $b("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===Ud(se)?new $b("quota-exceeded","Quota for bucket '"+re.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===Ud(se)?new $b("unauthorized","User does not have permission to access '"+re.path+"'."):te,se.serverResponse=te.serverResponse,se}},Ed=function(re){var se=Dd(re);return function(te,ue){var ve=se(te,ue);return 404===Ud(te)&&(ve=new $b("object-not-found","Object '"+re.path+"' does not exist.")),ve.serverResponse=ue.serverResponse,ve}},Fd=function(re,se,te){var ue=uc(se);return re=new mc(gc+"/v0"+ue,"GET",Cd(re,te),re.c),re.a=Ed(se),re},Gd=function(re,se){var te=uc(se);return re=new mc(gc+"/v0"+te,"DELETE",function(){},re.c),re.f=[200,204],re.a=Ed(se),re},Hd=function(re,se,te){return te=te?lc(te):{},te.fullPath=re.path,te.size=se.a,te.contentType||(re=se&&se.type()||"application/octet-stream",te.contentType=re),te},Id=function(re,se,te,ue,ve){var ye,we="/b/"+encodeURIComponent(se.bucket)+"/o",xe={"X-Goog-Upload-Protocol":"multipart"};ye="";for(var ze=0;2>ze;ze++)ye+=Math.random().toString().slice(2);if(xe["Content-Type"]="multipart/related; boundary="+ye,ve=Hd(se,ue,ve),ze=Nc(ve,te),ue=zd("--"+ye+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ze+"\r\n--"+ye+"\r\nContent-Type: "+ve.contentType+"\r\n\r\n",ue,"\r\n--"+ye+"--"),null===ue)throw bc();return re=new mc(gc+"/v0"+we,"POST",Cd(re,te),re.b),re.b={name:ve.fullPath},re.headers=xe,re.body=ue.j,re.a=Dd(se),re},Jd=function(re,se,te,ue){this.current=re,this.total=se,this.I=!!te,this.metadata=ue||null},Kd=function(re,se){var te;try{te=re.h.getResponseHeader("X-Goog-Upload-Status")}catch(ue){Bd(!1)}return Bd(ic(se||["active"],te)),te},Ld=function(re,se,te,ue,ve){var we="/b/"+encodeURIComponent(se.bucket)+"/o",xe=Hd(se,ue,ve);return ve={name:xe.fullPath},we=gc+"/v0"+we,ue={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":ue.a,"X-Goog-Upload-Header-Content-Type":xe.contentType,"Content-Type":"application/json; charset=utf-8"},te=Nc(xe,te),re=new mc(we,"POST",function(ye){Kd(ye);var ze;try{ze=ye.h.getResponseHeader("X-Goog-Upload-URL")}catch(Ae){Bd(!1)}return Bd(Bc(ze)),ze},re.b),re.b=ve,re.headers=ue,re.body=te,re.a=Dd(se),re},Md=function(re,se,te,ue){return re=new mc(te,"POST",function(ve){var xe,we=Kd(ve,["active","final"]);try{xe=ve.h.getResponseHeader("X-Goog-Upload-Size-Received")}catch(ye){Bd(!1)}return ve=xe,isFinite(ve)&&(ve+=""),ve="string"==typeof ve?/^\s*-?0x/i.test(ve)?parseInt(ve,16):parseInt(ve,10):NaN,Bd(!isNaN(ve)),new Jd(ve,ue.a,"final"===we)},re.b),re.headers={"X-Goog-Upload-Command":"query"},re.a=Dd(se),re.g=!1,re},Nd=function(re,se,te,ue,ve,we,xe,ye){var ze=new Jd(0,0);if(xe?(ze.current=xe.current,ze.total=xe.total):(ze.current=0,ze.total=ue.a),ue.a!==ze.total)throw new $b("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var Ae=xe=ze.total-ze.current;0<ve&&(Ae=Math.min(Ae,ve));var Be=ze.current;if(ve={"X-Goog-Upload-Command":Ae===xe?"upload, finalize":"upload","X-Goog-Upload-Offset":ze.current},xe=ue.slice(Be,Be+Ae),null===xe)throw bc();return te=new mc(te,"POST",function(Ce,De){var He,Ee=Kd(Ce,["active","final"]),Fe=ze.current+Ae,Ge=ue.a;return He="final"===Ee?Cd(se,we)(Ce,De):null,new Jd(Fe,Ge,"final"===Ee,He)},se.b),te.headers=ve,te.body=xe.j,te.c=ye||null,te.a=Dd(re),te.g=!1,te},Od={STATE_CHANGED:"state_changed"},Pd={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},Qd=function(re){return"running"===re||"pausing"===re||"canceling"===re?"running":"paused"===re?"paused":"success"===re?"success":"canceled"===re?"canceled":"error"===re?"error":"error"},Rd=function(){var re=this;this.h=new XMLHttpRequest,this.b=0,this.c=hc(function(se){re.h.addEventListener("abort",function(){re.b=2,se(re)}),re.h.addEventListener("error",function(){re.b=1,se(re)}),re.h.addEventListener("load",function(){se(re)})}),this.a=!1},Sd=function(re,se,te,ue,ve){if(re.a)throw fc("cannot .send() more than once");return re.a=!0,re.h.open(te,se,!0),Ac(ve)&&kc(ve,function(we,xe){re.h.setRequestHeader(we,xe.toString())}),Ac(ue)?re.h.send(ue):re.h.send(),re.c},Td=function(re){if(!re.a)throw fc("cannot .getErrorCode() before sending");return re.b},Ud=function(re){if(!re.a)throw fc("cannot .getStatus() before sending");try{return re.h.status}catch(se){return-1}},Vd=function(re){if(!re.a)throw fc("cannot .getResponseText() before sending");return re.h.responseText};Rd.prototype.abort=function(){this.h.abort()};var Wd=function(){},Xd=function(re,se,te,ue,ve,we){this.b=re,this.i=se,this.f=te,this.a=ue,this.g=ve,this.c=we};i=Xd.prototype,i.X=function(){return this.b},i.sa=function(){return this.i},i.pa=function(){return this.f},i.ka=function(){return this.a},i.Y=function(){if(Ac(this.a)){var re=this.a.downloadURLs;return Ac(re)&&Ac(re[0])?re[0]:null}return null},i.ra=function(){return this.g},i.na=function(){return this.c};var Yd=function(re,se,te,ue,ve,we){var xe=this;this.O=re,this.c=se,this.o=te,this.f=ve,this.i=void 0===we?null:we,this.u=ue,this.l=0,this.G=this.w=!1,this.B=[],this.U=262144<this.f.a,this.b="running",this.a=this.A=this.g=null,this.m=1,this.s=function(ye){xe.a=null,xe.m=1,"storage/canceled"===ye.code?(xe.w=!0,he(xe)):(xe.g=ye,ge(xe,"error"))},this.N=function(ye){xe.a=null,"storage/canceled"===ye.code?he(xe):(xe.g=ye,ge(xe,"error"))},this.D=this.v=null,this.F=hc(function(ye,ze){xe.v=ye,xe.D=ze,$d(xe)}),this.F.then(null,function(){})},Zd=function(re){var se=re.l;return function(te){fe(re,se+te)}},$d=function(re){"running"===re.b&&null===re.a&&(re.U?null===re.A?ae(re):re.w?be(re):re.G?de(re):ce(re):ee(re))},_d=function(re,se){Ec(re.c).then(function(te){switch(re.b){case"running":se(te);break;case"canceling":ge(re,"canceled");break;case"pausing":ge(re,"paused");}})},ae=function(re){_d(re,function(se){var te=Ld(re.c,re.o,re.u,re.f,re.i);re.a=Fc(re.c,te,se),re.a.a().then(function(ue){re.a=null,re.A=ue,re.w=!1,he(re)},re.s)})},be=function(re){var se=re.A;_d(re,function(te){var ue=Md(re.c,re.o,se,re.f);re.a=Fc(re.c,ue,te),re.a.a().then(function(ve){re.a=null,fe(re,ve.current),re.w=!1,ve.I&&(re.G=!0),he(re)},re.s)})},ce=function(re){var se=262144*re.m,te=new Jd(re.l,re.f.a),ue=re.A;_d(re,function(ve){var we;try{we=Nd(re.o,re.c,ue,re.f,se,re.u,te,Zd(re))}catch(xe){return re.g=xe,void ge(re,"error")}re.a=Fc(re.c,we,ve),re.a.a().then(function(xe){33554432>262144*re.m&&(re.m*=2),re.a=null,fe(re,xe.current),xe.I?(re.i=xe.metadata,ge(re,"success")):he(re)},re.s)})},de=function(re){_d(re,function(se){var te=Fd(re.c,re.o,re.u);re.a=Fc(re.c,te,se),re.a.a().then(function(ue){re.a=null,re.i=ue,ge(re,"success")},re.N)})},ee=function(re){_d(re,function(se){var te=Id(re.c,re.o,re.u,re.f,re.i);re.a=Fc(re.c,te,se),re.a.a().then(function(ue){re.a=null,re.i=ue,fe(re,re.f.a),ge(re,"success")},re.s)})},fe=function(re,se){var te=re.l;re.l=se,re.l!==te&&ie(re)},ge=function(re,se){if(re.b!==se)switch(se){case"canceling":re.b=se,null!==re.a&&re.a.cancel();break;case"pausing":re.b=se,null!==re.a&&re.a.cancel();break;case"running":var te="paused"===re.b;re.b=se,te&&(ie(re),$d(re));break;case"paused":re.b=se,ie(re);break;case"canceled":re.g=ac(),re.b=se,ie(re);break;case"error":re.b=se,ie(re);break;case"success":re.b=se,ie(re);}},he=function(re){switch(re.b){case"pausing":ge(re,"paused");break;case"canceling":ge(re,"canceled");break;case"running":$d(re);}};Yd.prototype.C=function(){return new Xd(this.l,this.f.a,Qd(this.b),this.i,this,this.O)},Yd.prototype.P=function(re,se,te,ue){function ve(Be){try{return void xe(Be)}catch(Ce){}try{if(ye(Be),!(Yb(Be.next)||Yb(Be.error)||Yb(Be.complete)))throw""}catch(Ce){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties."}}function we(Be){return function(Ce,De,Ee){null!==Be&&Pc("on",Be,arguments);var Fe=new Ad(Ce,De,Ee);return ze.B.push(Fe),ke(ze,Fe),function(){var Ge=ze.B,He=Ge.indexOf(Fe);-1!==He&&Ge.splice(He,1)}}}var xe=Wc().a,ye=Vc(null,!0).a;Pc("on",[Sc(function(){if("state_changed"!==re)throw"Expected one of the event types: [state_changed]."}),Vc(ve,!0),Wc(),Wc()],arguments);var ze=this,Ae=[Vc(function(Be){if(null===Be)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";ve(Be)}),Wc(),Wc()];return Yb(se)||Yb(te)||Yb(ue)?we(null)(se,te,ue):we(Ae)},Yd.prototype.then=function(re,se){return this.F.then(void 0===re?null:re,void 0===se?null:se)},Yd.prototype["catch"]=function(re){return this.then(null,re)};var ie=function(re){je(re),Array.prototype.slice.call(re.B).forEach(function(se){ke(re,se)})},je=function(re){if(null!==re.v){var se=!0;switch(Qd(re.b)){case"success":Xc(re.v.bind(null,re.C()))();break;case"canceled":case"error":Xc(re.D.bind(null,re.g))();break;default:se=!1;}se&&(re.v=null,re.D=null)}},ke=function(re,se){switch(Qd(re.b)){case"running":case"paused":null!==se.b&&Xc(se.b.bind(se,re.C()))();break;case"success":null!==se.a&&Xc(se.a.bind(se))();break;case"canceled":case"error":null!==se.error&&Xc(se.error.bind(se,re.g))();break;default:null!==se.error&&Xc(se.error.bind(se,re.g))();}};Yd.prototype.T=function(){Pc("resume",[],arguments);var re="paused"===this.b||"pausing"===this.b;return re&&ge(this,"running"),re},Yd.prototype.R=function(){Pc("pause",[],arguments);var re="running"===this.b;return re&&ge(this,"pausing"),re},Yd.prototype.cancel=function(){Pc("cancel",[],arguments);var re="running"===this.b||"pausing"===this.b;return re&&ge(this,"canceling"),re};var le=function(re,se){this.a=re,this.location=se instanceof tc?se:wc(se)};le.prototype.toString=function(){return Pc("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path};var me=function(re,se){return new le(re,se)};i=le.prototype,i.J=function(re){Pc("child",[Sc()],arguments);var se=Gc(this.location.path,re);return me(this.a,new tc(this.location.bucket,se))},i.ma=function(){var re;if(re=this.location.path,0==re.length)re=null;else{var se=re.lastIndexOf("/");re=-1===se?"":re.slice(0,se)}return null===re?null:me(this.a,new tc(this.location.bucket,re))},i.oa=function(){return me(this.a,new tc(this.location.bucket,""))},i.W=function(){return this.location.bucket},i.ha=function(){return this.location.path},i.la=function(){return Hc(this.location.path)},i.qa=function(){return this.a.m},i.aa=function(re,se){return Pc("put",[Tc(),new Qc(Oc,!0)],arguments),ne(this,"put"),new Yd(this,this.a,this.location,Lc(),new yd(re),se)},i.ba=function(re,se,te){Pc("putString",[Sc(),Sc(sd,!0),new Qc(Oc,!0)],arguments),ne(this,"putString");var ue=ud(Ac(se)?se:"raw",re),ve=te?lc(te):{};return!Ac(ve.contentType)&&Ac(ue.a)&&(ve.contentType=ue.a),new Yd(this,this.a,this.location,Lc(),new yd(ue.data,!0),ve)},i.Z=function(){Pc("delete",[],arguments),ne(this,"delete");var re=this;return Ec(this.a).then(function(se){var te=Gd(re.a,re.location);return Fc(re.a,te,se).a()})},i.K=function(){Pc("getMetadata",[],arguments),ne(this,"getMetadata");var re=this;return Ec(this.a).then(function(se){var te=Fd(re.a,re.location,Lc());return Fc(re.a,te,se).a()})},i.ca=function(re){Pc("updateMetadata",[new Qc(Oc,void 0)],arguments),ne(this,"updateMetadata");var se=this;return Ec(this.a).then(function(te){var ue=se.a,ve=se.location,we=re,xe=Lc(),ye=uc(ve),ye=gc+"/v0"+ye,we=Nc(we,xe),ue=new mc(ye,"PATCH",Cd(ue,xe),ue.c);return ue.headers={"Content-Type":"application/json; charset=utf-8"},ue.body=we,ue.a=Ed(ve),Fc(se.a,ue,te).a()})},i.$=function(){return Pc("getDownloadURL",[],arguments),ne(this,"getDownloadURL"),this.K().then(function(re){if(re=re.downloadURLs[0],Ac(re))return re;throw new $b("no-download-url","The given file does not have any download URLs.")})};var ne=function(re,se){if(""===re.location.path)throw new $b("invalid-root-operation","The operation '"+se+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")},oe=function(re,se,te){this.a=new Dc(re,function(ue,ve){return new le(ue,ve)},rc,this,se),this.c=re,Yb(te)?this.b=vc(te):null!=this.a.bucket()&&(this.b=new tc(this.a.bucket(),"")),this.f=new pe(this)};i=oe.prototype,i.da=function(re){if(Pc("ref",[Sc(function(te){if(/^[A-Za-z]+:\/\//.test(te))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null===this.b)throw Error("No Storage Bucket defined in Firebase Options.");var se=new le(this.a,this.b);return Yb(re)?se.J(re):se},i.ea=function(re){return Pc("refFromURL",[Sc(function(se){if(!/^[A-Za-z]+:\/\//.test(se))throw"Expected full URL but got a child path, use ref instead.";try{wc(se)}catch(te){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new le(this.a,re)},i.ja=function(){return this.a.b},i.ga=function(re){Pc("setMaxUploadRetryTime",[Uc()],arguments),this.a.b=re},i.ia=function(){return this.a.c},i.fa=function(re){Pc("setMaxOperationRetryTime",[Uc()],arguments),this.a.c=re},i.V=function(){return this.c},i.S=function(){return this.f};var pe=function(re){this.a=re};pe.prototype.b=function(){var re=this.a.a;re.f=!0,re.a=null,zc(re.i)};var qe=function(re,se,te){Object.defineProperty(re,se,{get:te})};le.prototype.toString=le.prototype.toString,le.prototype.child=le.prototype.J,le.prototype.put=le.prototype.aa,le.prototype.putString=le.prototype.ba,le.prototype["delete"]=le.prototype.Z,le.prototype.getMetadata=le.prototype.K,le.prototype.updateMetadata=le.prototype.ca,le.prototype.getDownloadURL=le.prototype.$,qe(le.prototype,"parent",le.prototype.ma),qe(le.prototype,"root",le.prototype.oa),qe(le.prototype,"bucket",le.prototype.W),qe(le.prototype,"fullPath",le.prototype.ha),qe(le.prototype,"name",le.prototype.la),qe(le.prototype,"storage",le.prototype.qa),oe.prototype.ref=oe.prototype.da,oe.prototype.refFromURL=oe.prototype.ea,qe(oe.prototype,"maxOperationRetryTime",oe.prototype.ia),oe.prototype.setMaxOperationRetryTime=oe.prototype.fa,qe(oe.prototype,"maxUploadRetryTime",oe.prototype.ja),oe.prototype.setMaxUploadRetryTime=oe.prototype.ga,qe(oe.prototype,"app",oe.prototype.V),qe(oe.prototype,"INTERNAL",oe.prototype.S),pe.prototype["delete"]=pe.prototype.b,oe.prototype.capi_=function(re){gc=re},Yd.prototype.on=Yd.prototype.P,Yd.prototype.resume=Yd.prototype.T,Yd.prototype.pause=Yd.prototype.R,Yd.prototype.cancel=Yd.prototype.cancel,Yd.prototype.then=Yd.prototype.then,Yd.prototype["catch"]=Yd.prototype["catch"],qe(Yd.prototype,"snapshot",Yd.prototype.C),qe(Xd.prototype,"bytesTransferred",Xd.prototype.X),qe(Xd.prototype,"totalBytes",Xd.prototype.sa),qe(Xd.prototype,"state",Xd.prototype.pa),qe(Xd.prototype,"metadata",Xd.prototype.ka),qe(Xd.prototype,"downloadURL",Xd.prototype.Y),qe(Xd.prototype,"task",Xd.prototype.ra),qe(Xd.prototype,"ref",Xd.prototype.na),Od.STATE_CHANGED="state_changed",Pd.RUNNING="running",Pd.PAUSED="paused",Pd.SUCCESS="success",Pd.CANCELED="canceled",Pd.ERROR="error",rd.RAW="raw",rd.BASE64="base64",rd.BASE64URL="base64url",rd.DATA_URL="data_url",function(){if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",function(te,ue,ve){return new oe(te,new Wd(),ve)},{TaskState:Pd,TaskEvent:Od,StringFormat:rd,Storage:oe,Reference:le},void 0,!0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.")}()}).call(this);