(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ka=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ra(a){return sa(a,a)}
function sa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ua});
function va(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function wa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
va.prototype.G=function(a){this.i=a};
function xa(a,b){a.j={exception:b,xd:!0};a.h=a.M||a.o}
va.prototype.return=function(a){this.j={return:a};this.h=this.o};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function za(a,b){a.h=b;a.M=0}
function Aa(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Ca(a){this.h=new va;this.i=a}
function Da(a,b){wa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,xa(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Fa(a));return b};
this.throw=function(b){wa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.G):(xa(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ha(new Ga(new Ca(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||fa});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return la});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.fc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.fc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).fc(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).fc(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ta(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ta(k,g)&&ta(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ta(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a){return a}
function bb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
bb(cb,Error);cb.prototype.name="CustomError";var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var eb=globalThis.trustedTypes,fb;function gb(){var a=null;if(!eb)return a;try{var b=function(c){return c};
a=eb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function hb(){fb===void 0&&(fb=gb());return fb}
;function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){var b=hb();return new ib(b?b.createScriptURL(a):a)}
function kb(a){if(a instanceof ib)return a.h;throw Error("");}
;var lb=ra([""]),mb=sa(["\x00"],["\\0"]),nb=sa(["\n"],["\\n"]),ob=sa(["\x00"],["\\u0000"]);function pb(a){return a.toString().indexOf("`")===-1}
pb(function(a){return a(lb)})||pb(function(a){return a(mb)})||pb(function(a){return a(nb)})||pb(function(a){return a(ob)});function qb(a){this.h=a}
qb.prototype.toString=function(){return this.h};
var rb=new qb("about:invalid#zClosurez");function sb(a){this.Ge=a}
function tb(a){return new sb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ub=[tb("data"),tb("http"),tb("https"),tb("mailto"),tb("ftp"),new sb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],vb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function wb(a){if(a instanceof qb)if(a instanceof qb)a=a.h;else throw Error("");else a=vb.test(a)?a:void 0;return a}
;function xb(a,b){b=wb(b);b!==void 0&&(a.href=b)}
;function yb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){var b=hb();return new Bb(b?b.createScript(a):a)}
function Db(a){if(a instanceof Bb)return a.h;throw Error("");}
;function Eb(a){var b=Ab(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Fb(a,b){a.src=kb(b);Eb(a)}
;function Gb(){this.h=Hb[0].toLowerCase()}
Gb.prototype.toString=function(){return this.h};function Ib(a){var b="true".toString(),c=[new Gb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Gb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Jb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Lb(a,b){if(b instanceof ib)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Jb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=wb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Rb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Sb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Tb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ub(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Vb(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Wb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Xb[c])c=Xb[c];else{c=String(c);if(!Xb[c]){var f=/function\s+([^\(]+)/m.exec(c);Xb[c]=f?f[1]:"[Anonymous]"}c=Xb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Wb(a,b){b||(b={});b[Yb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Yb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Wb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Yb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Wb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Yb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Xb={};function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];(e=jc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;var nc=(new Date("2024-01-01T00:00:00Z")).getTime();function oc(a){var b=C.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function pc(a){var b=a.url;a=a.Wh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-nc}
function qc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function rc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function sc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function tc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?tc.apply(null,d):sc(d)}}
;function H(){this.ea=this.ea;this.M=this.M}
H.prototype.ea=!1;H.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function uc(a,b){a.addOnDisposeCallback(Za(sc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
H.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function vc(){var a=wc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:rc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new xc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new xc(f))}))})}
function xc(a){H.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void yc(b)})}
w(xc,H);xc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.vb&&{c:a.vb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
xc.prototype.o=function(a){this.vm.e(a)};
function yc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function zc(a){var b=b===void 0?47:b;var c=[];Ac(a,Bc,6).forEach(function(d){Cc(d,2)<=b&&c.push(Cc(d,1))});
return c}
function Dc(a){var b=b===void 0?47:b;var c=[];Ac(a,Bc,6).forEach(function(d){Cc(d,2)>b&&c.push(Cc(d,1))});
return c}
;var Ec;function Fc(){H.apply(this,arguments);this.j=1;this[Ec]=this.dispose}
w(Fc,H);Fc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Fc.prototype.dispose=function(){--this.j||H.prototype.dispose.call(this)};
Ec=Symbol.dispose;function Gc(a){return{fieldType:2,fieldName:a}}
function Hc(a){return{fieldType:3,fieldName:a}}
;function Ic(a){this.h=a;a.Gc("/client_streamz/bg/frs",Hc("ke"))}
Ic.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Jc(a){this.h=a;a.Gc("/client_streamz/bg/wrl",Hc("mn"),Gc("ac"),Gc("sc"),Hc("rk"),Hc("mk"))}
Jc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Kc(a){this.i=a;a.Kb("/client_streamz/bg/ec",Hc("en"),Hc("mk"))}
Kc.prototype.h=function(a,b){this.i.Ib("/client_streamz/bg/ec",a,b)};
function Lc(a){this.h=a;a.Gc("/client_streamz/bg/el",Hc("en"),Hc("rk"),Hc("mk"))}
Lc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Mc(a){this.i=a;a.Kb("/client_streamz/bg/cec",Gc("ec"),Hc("rk"),Hc("mk"))}
Mc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/cec",a,b,c)};
function Nc(a){this.i=a;a.Kb("/client_streamz/bg/po/csc",Gc("cs"),Hc("rk"),Hc("mk"))}
Nc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/csc",a,b,c)};
function Oc(a){this.i=a;a.Kb("/client_streamz/bg/po/ctav",Hc("av"),Hc("rk"),Hc("mk"))}
Oc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/ctav",a,b,c)};
function Pc(a){this.i=a;a.Kb("/client_streamz/bg/po/cwsc",Hc("su"),Hc("rk"),Hc("mk"))}
Pc.prototype.h=function(a,b,c){this.i.Ib("/client_streamz/bg/po/cwsc",a,b,c)};function Qc(a){D.setTimeout(function(){throw a;},0)}
;var Rc,Sc=F("CLOSURE_FLAGS"),Tc=Sc&&Sc[610401301];Rc=Tc!=null?Tc:!1;function Uc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Vc,Wc=D.navigator;Vc=Wc?Wc.userAgentData||null:null;function Xc(a){return Rc?Vc?Vc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Uc().indexOf(a)!=-1}
;function Yc(){return Rc?!!Vc&&Vc.brands.length>0:!1}
function Zc(){return Yc()?!1:I("Opera")}
function $c(){return I("Firefox")||I("FxiOS")}
function ad(){return Yc()?Xc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Yc()?0:I("Edge"))||I("Silk")}
;function bd(){return Rc?!!Vc&&!!Vc.platform:!1}
function cd(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function dd(a){dd[" "](a);return a}
dd[" "]=function(){};var ed=Zc(),fd=Yc()?!1:I("Trident")||I("MSIE"),gd=I("Edge"),hd=I("Gecko")&&!(Uc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),id=Uc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");id&&I("Mobile");bd()||I("Macintosh");bd()||I("Windows");(bd()?Vc.platform==="Linux":I("Linux"))||bd()||I("CrOS");var jd=bd()?Vc.platform==="Android":I("Android");cd();I("iPad");I("iPod");cd()||I("iPad")||I("iPod");Uc().toLowerCase().indexOf("kaios");$c();var kd=cd()||I("iPod"),ld=I("iPad");!I("Android")||ad()||$c()||Zc()||I("Silk");ad();var md=I("Safari")&&!(ad()||(Yc()?0:I("Coast"))||Zc()||(Yc()?0:I("Edge"))||(Yc()?Xc("Microsoft Edge"):I("Edg/"))||(Yc()?Xc("Opera"):I("OPR"))||$c()||I("Silk")||I("Android"))&&!(cd()||I("iPad")||I("iPod"));var nd={},od=null;function pd(a,b){Qa(a);b===void 0&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=od[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];od[f]===void 0&&(od[f]=e)}}}}
;var td=typeof Uint8Array!=="undefined",ud=!fd&&typeof btoa==="function";function vd(a){if(!ud)return pd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var wd=/[-_.]/g,xd={"-":"+",_:"/",".":"="};function yd(a){return xd[a]||""}
function zd(a){return td&&a!=null&&a instanceof Uint8Array}
var Ad={};function Bd(a,b){Cd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Bd.prototype.sizeBytes=function(){Cd(Ad);var a=this.h;if(a!=null&&!zd(a))if(typeof a==="string")if(ud){wd.test(a)&&(a=a.replace(wd,yd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Dd;function Cd(a){if(a!==Ad)throw Error("illegal external caller");}
;var Ed=void 0;function Fd(a){a=Error(a);Ub(a,"warning");return a}
function Gd(a){if(a!=null){var b;var c=(b=Ed)!=null?b:Ed={};b=c[a]||0;b>=5||(c[a]=b+1,a=Error(),Ub(a,"incident"),Qc(a))}}
;var Hd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Id(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Jd=Id("jas",void 0,!0),Kd=Id(void 0,"1oa"),Ld=Id(void 0,Symbol()),Md=Id(void 0,"0actk"),Nd=Id(void 0,"8utk");Math.max.apply(Math,A(Object.values({lh:1,kh:2,jh:4,oh:8,nh:16,mh:32,Nf:64,qh:128,ih:256,hh:512,Tf:1024,ph:2048,Uf:4096,Of:8192})));var K=Hd?Jd:"Fe",Od={Fe:{value:0,configurable:!0,writable:!0,enumerable:!1}},Pd=Object.defineProperties;function Qd(a,b){Hd||K in a||Pd(a,Od);a[K]|=b}
function Rd(a,b){Hd||K in a||Pd(a,Od);a[K]=b}
;function Sd(){return typeof BigInt==="function"}
;function Td(a){return Array.prototype.slice.call(a)}
;var Ud={};function Vd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Wd,Xd=[];Rd(Xd,55);Wd=Object.freeze(Xd);function Yd(a){if(a&2)throw Error();}
var Zd=Object.freeze({});function $d(a){a.Eh=!0;return a}
;var ae=$d(function(a){return typeof a==="number"}),be=$d(function(a){return typeof a==="string"}),ce=$d(function(a){return typeof a==="boolean"});
function de(){var a=ee;return $d(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var fe=$d(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ge=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function he(a){var b=a;if(be(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ae(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ge?BigInt(a):a=ce(a)?a?"1":"0":be(a)?a.trim()||"0":String(a)}
var ne=$d(function(a){return ge?a>=ie&&a<=je:a[0]==="-"?ke(a,le):ke(a,me)}),le=Number.MIN_SAFE_INTEGER.toString(),ie=ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,me=Number.MAX_SAFE_INTEGER.toString(),je=ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var oe=0,pe=0;function qe(a){var b=a>>>0;oe=b;pe=(a-b)/4294967296>>>0}
function re(a){if(a<0){qe(0-a);var b=z(se(oe,pe));a=b.next().value;b=b.next().value;oe=a>>>0;pe=b>>>0}else qe(a)}
function te(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Sd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ue(c)+ue(a));return c}
function ue(a){a=String(a);return"0000000".slice(a.length)+a}
function ve(){var a=oe,b=pe;b&2147483648?Sd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(se(a,b)),a=b.next().value,b=b.next().value,a="-"+te(a,b)):a=te(a,b);return a}
function se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var we=typeof BigInt==="function"?BigInt.asIntN:void 0,xe=Number.isSafeInteger,ye=Number.isFinite,ze=Math.trunc;function Ae(a){return a.displayName||a.name||"unknown type name"}
function Be(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var Ce=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function De(a){switch(typeof a){case "bigint":return!0;case "number":return ye(a);case "string":return Ce.test(a);default:return!1}}
function Ee(a){if(typeof a!=="number")throw Fd("int32");if(!ye(a))throw Fd("int32");return a|0}
function Fe(a){return a==null?a:Ee(a)}
function Ge(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ye(a)?a|0:void 0}
function He(a){var b=0;b=b===void 0?0:b;if(!De(a))throw Fd("int64");var c=typeof a;switch(b){case 2048:switch(c){case "string":return Ie(a);case "bigint":return String(we(64,a));default:return Je(a)}case 4096:switch(c){case "string":return b=ze(Number(a)),xe(b)?a=he(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Sd()?he(we(64,BigInt(a))):he(Ke(a))),a;case "bigint":return he(we(64,a));default:return xe(a)?he(Le(a)):he(Je(a))}case 0:switch(c){case "string":return Ie(a);case "bigint":return he(we(64,
a));default:return Le(a)}default:return yb(b,"Unknown format requested type for int64")}}
function Me(a){return a==null?a:He(a)}
function Ne(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ke(a){a.indexOf(".");if(Ne(a))return a;if(a.length<16)re(Number(a));else if(Sd())a=BigInt(a),oe=Number(a&BigInt(4294967295))>>>0,pe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");pe=oe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),pe*=1E6,oe=oe*1E6+d,oe>=4294967296&&(pe+=Math.trunc(oe/4294967296),pe>>>=0,oe>>>=0);b&&(b=z(se(oe,pe)),a=b.next().value,b=b.next().value,oe=a,pe=b)}return ve()}
function Le(a){De(a);a=ze(a);if(!xe(a)){re(a);var b=oe,c=pe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Je(a){De(a);a=ze(a);if(xe(a))a=String(a);else{var b=String(a);Ne(b)?a=b:(re(a),a=ve())}return a}
function Ie(a){De(a);var b=ze(Number(a));if(xe(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ke(a)}
function Oe(a){if(a==null)return a;if(typeof a==="bigint")return ne(a)?a=Number(a):(a=we(64,a),a=ne(a)?Number(a):String(a)),a;if(De(a))return typeof a==="number"?Le(a):Ie(a)}
function Pe(a){if(typeof a!=="string")throw Error();return a}
function Qe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Re(a){return a==null||typeof a==="string"?a:void 0}
function Se(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ae(b)+" but got "+(a&&Ae(a.constructor)));}
function Te(a,b,c){if(a!=null&&typeof a==="object"&&a.Rc===Ud)return a;if(Array.isArray(a)){var d=a[K]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Rd(a,e);return new b(a)}}
;function Ue(a){return a}
function Ve(a){return a}
function We(a,b,c,d){return Xe(a,b,c,d,Ye,Ze)}
function $e(a,b,c,d){return Xe(a,b,c,d,af,bf)}
function Xe(a,b,c,d,e,f){if(!c.length&&!d)return 1;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=cf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var G=e(y,t)+f(n,p,v);G<l&&(a=1+y,l=G);n++;t--;v+=cf(y);p=Math.max(p,y)}}b=e(0,0)+f(n,p,v);b<l&&(a=1,l=b);if(d){n=h;p=g;v=m;t=k;for(var J in d)d=+J,isNaN(d)||d>=
1024||(n--,t++,v-=J.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function bf(a,b,c){return c+a*3+(a>1?a-1:0)}
function af(a,b){return(a>1?a-1:0)+(a-b)*4}
function Ze(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Ye(a){return 40+4*a}
function cf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;function df(a,b,c,d){if(Array.isArray(a)){var e=a[K]|0;if(a.length===0&&e&1)return;if(d&&e&2)return a;var f;if(f=d&&c)f=e===0||!!(e&32)&&!(e&64||!(e&16));return f?(Qd(a,34),e&4&&Object.freeze(a),a):ef(a,e,b,c!==void 0,d)}return b(a)}
function ef(a,b,c,d,e){var f=d?!!(b&32):void 0;d=[];var g=a.length,h=!1;if(b&64){if(b&256){g--;var k=a[g];var l=g;Vd(k)}else l=4294967295,k=void 0,g&&Vd(a[g-1]);if(!(e||b&512)){h=!0;var m;var n=((m=ff)!=null?m:Ve)(k?l- -1:b>>14&1023||536870912,-1,a,k);l=n+-1}}else l=4294967295,b&1||(k=g&&a[g-1],Vd(k)?(g--,l=g,n=0):k=void 0);m=void 0;for(var p=0;p<g;p++){var t=a[p];if(t!=null&&(t=df(t,c,f,e))!=null)if(p>=l){var v=void 0;((v=m)!=null?v:m={})[p- -1]=t}else d[p]=t}if(k)for(var x in k)g=k[x],g!=null&&
(g=df(g,c,f,e))!=null&&(p=+x,p<n?d[p+-1]=g:(p=void 0,((p=m)!=null?p:m={})[x]=g));m&&(h?d.push(m):d[l]=m);if(e){var y;c=b&64?(y=n)!=null?y:b>>14&1023||536870912:void 0;y=34;m!=null&&(y|=256);c!==void 0&&(y=y&-16760833|(c&1023)<<14);Rd(d,b&577|y);(a=(b=ab(Ld))?a[b]:void 0)&&(d[Ld]=Td(a))}return d}
function gf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return ne(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(a.Rc===Ud)return hf(a);if(a instanceof Bd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=vd(b)}if(zd(a))return zd(a)&&Gd(Nd),vd(a);return}return a}
var ff;function jf(a,b){b&&(ff=b===Ve||b!==Ue&&b!==We&&b!==$e?Ve:b);try{return hf(a)}finally{ff=void 0}}
function hf(a){a=a.F;return ef(a,a[K]|0,gf,void 0,!1)}
;function L(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=a[K]|0;8192&d||!(64&d)||2&d||kf();if(d&1024)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Vd(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-16760833|(f&1023)<<14;break a}}if(b){h=Math.max(b,e-(d&512?0:
-1));if(h>1024)throw Error("spvt");d=d&-16760833|(h&1023)<<14}}}Rd(a,d);return a}
function kf(){Gd(Md)}
;function lf(a){if(typeof a!=="object"||a===null)return a;if(a.Rc===Ud){var b=a.F,c=b[K]|0;return c&2?a:ef(b,c,lf,!0,!0)}if(a instanceof Bd)return a;if(zd(a))return zd(a)&&Gd(Nd),new Uint8Array(a)}
function mf(a){var b=a.F;if(!((b[K]|0)&2))return a;a=new a.constructor(ef(b,b[K]|0,lf,!0,!0));b=a.F;b[K]&=-3;return a}
;function nf(a,b){a=a.F;return of(a,a[K]|0,b)}
function of(a,b,c){if(c===-1)return null;var d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)return a[e][c];if(d<=e)return a[d]}
function pf(a,b,c){var d=a.F,e=d[K]|0;Yd(e);qf(d,e,b,c);return a}
function qf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>14&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Rd(a,b)):a[f]=d);return b}
function rf(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function sf(a,b,c){var d=a.F,e=d[K]|0;Yd(e);if(b==null)return qf(d,e,3),a;if(!Array.isArray(b))throw Fd();var f=b[K]|0,g=f,h=rf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Td(b),g=0,f=tf(f,e),f=uf(f,e,!0),k=!1);f|=21;h=4&f?2048&f?2048:4096&f?4096:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Td(b),g=0,f=tf(f,e),f=uf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Td(b),f=tf(f,e),f=uf(f,e,!0)),Rd(b,f));qf(d,e,3,b);return a}
function vf(a,b,c,d){a=a.F;var e=a[K]|0;Yd(e);if(d==null){var f=wf(a);if(xf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=wf(a);var g=xf(f,a,e,c);g!==b&&(g&&(e=qf(a,e,g)),f.set(c,b))}qf(a,e,b,d)}
function wf(a){if(Hd){var b;return(b=a[Kd])!=null?b:a[Kd]=new Map}if(Kd in a)return a[Kd];b=new Map;Object.defineProperty(a,Kd,{value:b});return b}
function xf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];of(b,c,g)!=null&&(e!==0&&(c=qf(b,c,e)),e=g)}a.set(d,e);return e}
function yf(a,b,c){a=a.F;var d=a[K]|0,e=of(a,d,c);b=Te(e,b,d);b!==e&&b!=null&&qf(a,d,c,b);return b}
function zf(a,b,c){b=yf(a,b,c);if(b==null)return b;a=a.F;var d=a[K]|0;if(!(d&2)){var e=mf(b);e!==b&&(b=e,qf(a,d,c,b))}return b}
function Ac(a,b,c){var d=void 0===Zd?2:4;var e=a.F[K]|0,f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=of(a,f,c);d=Array.isArray(d)?d:Wd;var k=d[K]|0;h=!!(4&k);if(!h){var l=k;l===0&&(l=tf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<k.length;v++){var y=Te(k[v],b,m);if(y instanceof b){if(!n){var G=!!((y.F[K]|0)&2);p&&(p=!G);t&&(t=G)}k[x++]=y}}x<v&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Rd(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&
k))){rf(k)&&(d=Td(d),k=tf(k,f),f=qf(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=mf(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Rd(b,g);k=g}e===1||e===4&&32&k?rf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:1024,k!==f&&Rd(d,k),Object.freeze(d)):(e===2&&rf(k)&&(d=Td(d),k=tf(k,f),k=uf(k,f,!1),Rd(d,k),f=qf(a,f,c,d)),rf(k)||(c=k,k=uf(k,f,!1),k!==c&&Rd(d,k)));return d}
function Af(a,b,c,d){d!=null?Se(d,b):d=void 0;return pf(a,c,d)}
function Bf(a,b,c,d){var e=a.F,f=e[K]|0;Yd(f);if(d==null)return qf(e,f,c),a;if(!Array.isArray(d))throw Fd();for(var g=d[K]|0,h=g,k=rf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Se(t,b);k||(t=!!((t.F[K]|0)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Td(d),h=0,g=tf(g,f),g=uf(g,f,!0));g!==h&&Rd(d,g);qf(e,f,c,d);return a}
function tf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-1025}
function uf(a,b,c){32&b&&c||(a&=-33);return a}
function Cf(a){a=nf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(we(64,a)):De(a)?c==="string"?Ie(a):b?Je(a):Le(a):void 0;return b}
function Cc(a,b,c){c=c===void 0?0:c;var d;return(d=Ge(nf(a,b)))!=null?d:c}
function Df(a,b){var c=c===void 0?"":c;var d;return(d=Re(nf(a,b)))!=null?d:c}
function Ef(a){var b=b===void 0?0:b;a=nf(a,1);a=a==null?a:ye(a)?a|0:void 0;return a!=null?a:b}
function Ff(a,b,c){return pf(a,b,Qe(c))}
function Gf(a,b,c){c=Qe(c);a=a.F;var d=a[K]|0;Yd(d);qf(a,d,b,c===""?void 0:c)}
function Hf(a,b,c){if(c!=null){if(!ye(c))throw Fd("enum");c|=0}return pf(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
r=M.prototype;r.toJSON=function(){return jf(this)};
r.serialize=function(a){return JSON.stringify(jf(this,a))};
function If(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Qd(b,32);return new a(b)}
r.clone=function(){var a=this,b=a.F;a=new a.constructor(ef(b,b[K]|0,lf,!0,!0));b=a.F;b[K]&=-3;return a};
r.Rc=Ud;r.toString=function(){return this.F.toString()};function Jf(){this.ctor=Kf;this.isRepeated=0;this.h=zf;this.defaultValue=void 0}
Jf.prototype.register=function(){dd(this)};function Lf(a){return function(b){return If(a,b)}}
;function Mf(a){this.F=L(a)}
w(Mf,M);function Nf(a,b){return sf(a,b,Ee)}
;function Of(a){this.F=L(a)}
w(Of,M);var Pf=[1,2,3];function Qf(a){this.F=L(a)}
w(Qf,M);var Rf=[1,2,3];function Sf(a){this.F=L(a)}
w(Sf,M);function Tf(a){this.F=L(a)}
w(Tf,M);function Uf(a){this.F=L(a)}
w(Uf,M);function Vf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Wf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var J=y^v&(x^y);var ca=1518500249}else J=v^x^y,ca=1859775393;else t<60?(J=v&x|y&(v|x),ca=2400959708):(J=v^x^y,ca=3395469782);J=((n<<5|n>>>27)&4294967295)+J+G+ca+p[t]&4294967295;G=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=J}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,je:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Xf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Yf(Vf(d),a,c||null)].join(" "):null}
function Yf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),Zf(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=Zf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Zf(a){var b=Wf();b.update(a);return b.je().toLowerCase()}
;function $f(a){this.h=a||{cookie:""}}
r=$f.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.bf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var ag=new $f(typeof document=="undefined"?null:document);function bg(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new $f(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function cg(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new $f(document)).get(b));return a?Xf(a,c,d):null}
function dg(a){var b=Vf(String(D.location.href)),c=[];if(bg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new $f(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Xf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=cg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=cg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function eg(){}
eg.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
eg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function fg(a){this.F=L(a)}
w(fg,M);function gg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return $a()};
this.i=this.h()}
gg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
gg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
gg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
gg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function hg(a){this.F=L(a)}
w(hg,M);function ig(a){this.F=L(a)}
w(ig,M);function jg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=jg.prototype;r.clone=function(){return new jg(this.x,this.y)};
r.equals=function(a){return a instanceof jg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function kg(a,b){this.width=a;this.height=b}
r=kg.prototype;r.clone=function(){return new kg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function lg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mg(a){var b=ng,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function og(a){for(var b in a)return!1;return!0}
function pg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function rg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tg(a[c]);return b}
var ug="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ug.length;f++)c=ug[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function wg(a,b){this.h=a===xg&&b||""}
wg.prototype.toString=function(){return this.h};
var xg={};new wg(xg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function yg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function zg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Ag(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Bg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cg(a){this.F=L(a)}
w(Cg,M);Cg.prototype.lc=function(){return Ef(this)};function Dg(a){this.F=L(a)}
w(Dg,M);function Eg(a){this.F=L(a)}
w(Eg,M);function Fg(a,b){Bf(a,Dg,1,b)}
;function Gg(a){this.F=L(a)}
w(Gg,M);var Hg=["platform","platformVersion","architecture","model","uaFullVersion"],Ig=new Eg,Jg=null;function Kg(a,b){b=b===void 0?Hg:b;if(!Jg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Dg;f=Ff(f,1,e.brand);return Ff(f,2,e.version)});
Fg(pf(Ig,2,Be(a.mobile)),c);Jg=a.getHighEntropyValues(b)}var d=new Set(b);return Jg.then(function(e){var f=Ig.clone();d.has("platform")&&Ff(f,3,e.platform);d.has("platformVersion")&&Ff(f,4,e.platformVersion);d.has("architecture")&&Ff(f,5,e.architecture);d.has("model")&&Ff(f,6,e.model);d.has("uaFullVersion")&&Ff(f,7,e.uaFullVersion);return f}).catch(function(){return Ig.clone()})}
;function Lg(a){this.F=L(a)}
w(Lg,M);function Mg(a){this.F=L(a,4)}
w(Mg,M);function Ng(a){this.F=L(a,36)}
w(Ng,M);function Og(a){this.F=L(a,19)}
w(Og,M);Og.prototype.Wb=function(a){return Hf(this,2,a)};function Pg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Og;Number.isInteger(a)&&this.h.Wb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Qg(this,new Lg)}
Pg.prototype.Wb=function(a){this.h.Wb(a);return this};
function Qg(a,b){Af(a.h,Lg,1,b);Ef(b)||Hf(b,1,1);a.Wa||(b=Rg(a),Df(b,5)||Ff(b,5,a.locale));a.j&&(b=Rg(a),zf(b,Eg,9)||Af(b,Eg,9,a.j))}
function Sg(a,b){a.i=b}
function Tg(a){var b=b===void 0?Hg:b;var c=a.Wa?void 0:window;c?Kg(c,b).then(function(d){a.j=d;d=Rg(a);Af(d,Eg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Rg(a){a=zf(a.h,Lg,1);var b=zf(a,Gg,11);b||(b=new Gg,Af(a,Gg,11,b));return b}
function Ug(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(yf(zf(a.h,Lg,1),Gg,11)!==void 0){var h=Rg(a);var k=new Cg;k=Hf(k,1,a.i);k=pf(k,2,Be(a.isFinal));d=pf(k,3,Fe(d>0?d:void 0));d=pf(d,4,Fe(f>0?f:void 0));d=pf(d,5,Fe(g>0?g:void 0));f=d.F;g=f[K]|0;d=g&2?d:new d.constructor(ef(f,g,lf,!0,!0));Af(h,Cg,10,d)}a=a.h.clone();h=Date.now().toString();a=pf(a,4,Me(h));b=b.slice();b=Bf(a,Ng,3,b);e&&(a=new hg,e=pf(a,13,Fe(e)),a=new ig,e=Af(a,hg,2,e),
a=new Mg,e=Af(a,ig,1,e),e=Hf(e,2,9),Af(b,Mg,18,e));c&&pf(b,14,Me(c));return b}
;var Vg=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Wg(a){this.h=this.i=this.j=a}
Wg.prototype.reset=function(){this.h=this.i=this.j};
Wg.prototype.getValue=function(){return this.i};function Xg(a){this.F=L(a,8)}
w(Xg,M);var Yg=Lf(Xg);function Kf(a){this.F=L(a)}
w(Kf,M);var Zg=new Jf;function $g(a){H.call(this);var b=this;this.componentId="";this.h=[];this.Pa="";this.pageId=null;this.Qa=this.ha=-1;this.G=this.experimentIds=null;this.Y=this.Z=this.D=this.o=0;this.rb=1;this.timeoutMillis=0;this.oa=!1;this.logSource=a.logSource;this.hb=a.hb||function(){};
this.j=new Pg(a.logSource,a.Wa);this.network=a.network||null;this.mb=a.mb||null;this.bufferSize=1E3;this.P=a.zf||null;this.sessionIndex=a.sessionIndex||null;this.Ob=a.Ob||!1;this.logger=null;this.withCredentials=!a.qd;this.Wa=a.Wa||!1;this.U=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Fa=typeof URLSearchParams!=="undefined"&&!!(new URL(ah())).searchParams&&!!(new URL(ah())).searchParams.set;var c=Hf(new Lg,1,1);Qg(this.j,c);this.u=new Wg(1E4);a=bh(this,a.ld);
this.i=new gg(this.u.getValue(),a);this.xa=new gg(6E5,a);this.Ob||this.xa.start();this.Wa||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Jc()}),document.addEventListener("pagehide",this.Jc.bind(this)))}
w($g,H);function bh(a,b){return a.Fa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=$g.prototype;r.ba=function(){this.Jc();this.i.stop();this.xa.stop();H.prototype.ba.call(this)};
function ch(a){a.P||(a.P=ah());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Fa){a=a.clone();var b=this.rb++;a=pf(a,21,Me(b));this.componentId&&Ff(a,26,this.componentId);b=a;if(Cf(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";pf(b,1,Me(c))}Oe(nf(b,15))==null&&pf(b,15,Me((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),Af(b,fg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Ob||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.oa&&this.U)this.j.i=3,dh(this);else{var d=Date.now();if(this.Qa>d&&this.ha<d)b&&b("throttled");else{this.network&&(typeof this.network.lc==="function"?Sg(this.j,this.network.lc()):this.j.i=0);var e=Ug(this.j,this.h,this.o,this.D,this.mb,this.Z,this.Y),f=this.hb();if(f&&this.Pa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=this.G.compress(d));
var h=gh(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=Yg(t)}catch(y){}if(p){n=Number;var v="-1";v=v===void 0?"0":v;var x;t=(x=Cf(p))!=null?x:v;x=n(t);x>0&&(c.ha=Date.now(),c.Qa=c.ha+x);p=Zg.ctor?Zg.h(p,Zg.ctor,175237375):Zg.h(p,175237375,null);if(p=p===null?void 0:p)p=Cc(p,1,-1),p!==-1&&(c.u=new Wg(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},l=function(n,p){var t=Ac(e,Ng,3);
var v;var x=(v=Oe(nf(e,14)))!=null?v:void 0;v=c.u;v.h=Math.min(3E5,v.h*2);v.i=Math.min(3E5,v.h+Math.round(.1*(Math.random()-.5)*2*v.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Pa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Ob||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.D},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.Bc["Content-Encoding"]="gzip";h.Bc["Content-Type"]="application/binary";h.body=n;h.ce=2;m()},function(){m()}):m()}}}};
function gh(a,b,c){c=c===void 0?a.hb():c;var d={},e=new URL(ch(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,ce:1,Bc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Jc=function(){this.j.isFinal=!0;this.flush();this.j.isFinal=!1};
function dh(a){hh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function hh(a,b){if(a.h.length!==0){var c=new URL(ch(a));c.searchParams.delete("format");var d=a.hb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Ug(a.j,e,a.o,a.D,a.mb,a.Z,a.Y);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function ah(){return"https://play.google.com/log?format=json&hasfast=true"}
;function ih(){this.Wd=typeof AbortController!=="undefined"}
ih.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Wd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,ya(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Bc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
ih.prototype.lc=function(){return 4};function jh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.mb=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(jh,H);function kh(a,b){a.i=b;return a}
function lh(a,b){a.network=b;return a}
function mh(a,b){a.h=b}
function nh(a){a.j=!0;return a}
jh.prototype.qd=function(){this.u=!0;return this};
function oh(a){a.network||(a.network=new ih);var b=new $g({logSource:a.logSource,hb:a.hb?a.hb:dg,sessionIndex:a.sessionIndex,zf:a.Ua,Wa:a.o,Ob:!1,qd:a.u,ld:a.ld,network:a.network});uc(a,b);if(a.i){var c=a.i,d=Rg(b.j);Ff(d,7,c)}b.G=new eg;a.componentId&&(b.componentId=a.componentId);a.mb&&(b.mb=a.mb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new fg),c=b.experimentIds,d=d.serialize(),Ff(c,4,d)):b.experimentIds&&pf(b.experimentIds,4));a.j&&(b.oa=b.U);Tg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Wb&&a.network.Wb(a.logSource);a.network.nf&&a.network.nf(b);return b}
;function ph(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new jh(a,"0"),a.componentId=b,uc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&kh(a,e),g&&lh(a,g),b=oh(a));this.h=b}
w(ph,H);
ph.prototype.flush=function(a){var b=a||[];if(b.length){a=new Uf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Tf;f=Ff(f,1,e.i);var g=qh(e);f=sf(f,g,Pe);g=[];var h=[];for(var k=z(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Kc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Qf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&vf(v,1,Rf,Me(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);vf(v,2,Rf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Sf;p=Af(t,Qf,2,p);t=l;v=[];x=rh(e);for(var y=0;y<x.length;y++){var G=x[y],J=t[y],ca=new Of;switch(G){case 3:vf(ca,1,Pf,Qe(String(J)));break;case 2:G=Number(J);Number.isFinite(G)&&vf(ca,2,Pf,Fe(G));break;case 1:vf(ca,3,Pf,Be(J==="true"))}v.push(ca)}Bf(p,Of,1,v);g.push(p)}}Bf(f,Sf,4,g);c.push(f);e.clear()}Bf(a,Tf,1,c);b=this.h;if(a instanceof Ng)b.log(a);else try{var da=new Ng,Ma=a.serialize();var Kb=Ff(da,8,Ma);b.log(Kb)}catch(ja){}this.h.flush()}};function sh(a){this.h=a}
;function th(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function rh(a){return a.fields.map(function(b){return b.fieldType})}
function qh(a){return a.fields.map(function(b){return b.fieldName})}
r=th.prototype;r.Xd=function(a){var b=C.apply(1,arguments),c=this.Kc(b);c?c.push(new sh(a)):this.Id(a,b)};
r.Id=function(a){var b=this.kd(C.apply(1,arguments));this.h.set(b,[new sh(a)])};
r.Kc=function(){var a=this.kd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.we=function(){var a=this.Kc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.kd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function uh(a,b){th.call(this,a,3,b)}
w(uh,th);uh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.we(b);d&&(c=d.h);this.Id(c+a,b)};function vh(a,b){th.call(this,a,2,b)}
w(vh,th);vh.prototype.record=function(a){this.Xd(a,C.apply(1,arguments))};function wh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
wh.prototype.stopPropagation=function(){this.j=!0};
wh.prototype.preventDefault=function(){this.defaultPrevented=!0};function xh(a,b){wh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
bb(xh,wh);
xh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&xh.Aa.preventDefault.call(this)};
xh.prototype.stopPropagation=function(){xh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
xh.prototype.preventDefault=function(){xh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yh="closure_listenable_"+(Math.random()*1E6|0);var zh=0;function Ah(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.oc=e;this.key=++zh;this.Vb=this.ec=!1}
function Bh(a){a.Vb=!0;a.listener=null;a.proxy=null;a.src=null;a.oc=null}
;function Ch(a){this.src=a;this.listeners={};this.h=0}
Ch.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Dh(a,b,d,e);g>-1?(b=a[g],c||(b.ec=!1)):(b=new Ah(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
Ch.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Dh(e,b,c,d);return b>-1?(Bh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Eh(a,b){var c=b.type;c in a.listeners&&Sb(a.listeners[c],b)&&(Bh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Dh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Vb&&f.listener==b&&f.capture==!!c&&f.oc==d)return e}return-1}
;var Fh="closure_lm_"+(Math.random()*1E6|0),Gh={},Hh=0;function Ih(a,b,c,d,e){if(d&&d.once)Jh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ih(a,b[f],c,d,e);else c=Kh(c),a&&a[yh]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Lh(a,b,c,!1,d,e)}
function Lh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Mh(a);h||(a[Fh]=h=new Ch(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Nh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Vg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Hh++}}
function Nh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ph;return a}
function Jh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Jh(a,b[f],c,d,e);else c=Kh(c),a&&a[yh]?Qh(a,b,c,Ra(d)?!!d.capture:!!d,e):Lh(a,b,c,!0,d,e)}
function Rh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Kh(c),a&&a[yh])?a.i.remove(String(b),c,d,e):a&&(a=Mh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Dh(b,c,d,e)),(c=a>-1?b[a]:null)&&Sh(c))}
function Sh(a){if(typeof a!=="number"&&a&&!a.Vb){var b=a.src;if(b&&b[yh])Eh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Hh--;(c=Mh(b))?(Eh(c,a),c.h==0&&(c.src=null,b[Fh]=null)):Bh(a)}}}
function Oh(a){return a in Gh?Gh[a]:Gh[a]="on"+a}
function Ph(a,b){if(a.Vb)a=!0;else{b=new xh(b,this);var c=a.listener,d=a.oc||a.src;a.ec&&Sh(a);a=c.call(d,b)}return a}
function Mh(a){a=a[Fh];return a instanceof Ch?a:null}
var Th="__closure_events_fn_"+(Math.random()*1E9>>>0);function Kh(a){if(typeof a==="function")return a;a[Th]||(a[Th]=function(b){return a.handleEvent(b)});
return a[Th]}
;function Uh(){H.call(this);this.i=new Ch(this);this.xa=this;this.Z=null}
bb(Uh,H);Uh.prototype[yh]=!0;r=Uh.prototype;r.addEventListener=function(a,b,c,d){Ih(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Rh(this,a,b,c,d)};
function Vh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new wh(b,a):b instanceof wh?b.target=b.target||a:(e=b,b=new wh(c,a),vg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Wh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Wh(g,c,!0,b)&&e,b.j||(e=Wh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Wh(g,c,!1,b)&&e}
r.ba=function(){Uh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Qh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Bh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Wh(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Vb&&g.capture==c){var h=g.listener,k=g.oc||g.src;g.ec&&Eh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Xh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Yh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Yh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Zh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function $h(){this.i=this.h=null}
$h.prototype.add=function(a,b){var c=ai.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
$h.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ai=new Yh(function(){return new bi},function(a){return a.reset()});
function bi(){this.next=this.scope=this.h=null}
bi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
bi.prototype.reset=function(){this.next=this.scope=this.h=null};var ci,di=!1,ei=new $h;function fi(a,b){ci||gi();di||(ci(),di=!0);ei.add(a,b)}
function gi(){var a=Promise.resolve(void 0);ci=function(){a.then(hi)}}
function hi(){for(var a;a=ei.remove();){try{a.h.call(a.scope)}catch(b){Qc(b)}Zh(ai,a)}di=!1}
;function ii(){}
function ji(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ki(a){this.X=0;this.ab=void 0;this.ub=this.Sa=this.parent_=null;this.nc=this.Ic=!1;if(a!=ii)try{var b=this;a.call(void 0,function(c){li(b,2,c)},function(c){li(b,3,c)})}catch(c){li(this,3,c)}}
function mi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
mi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ni=new Yh(function(){return new mi},function(a){a.reset()});
function oi(a,b,c){var d=ni.get();d.i=a;d.h=b;d.context=c;return d}
function pi(a){return new ki(function(b,c){c(a)})}
ki.prototype.then=function(a,b,c){return qi(this,Xh(typeof a==="function"?a:null),Xh(typeof b==="function"?b:null),c)};
ki.prototype.$goog_Thenable=!0;function ri(a,b,c,d){si(a,oi(b||ii,c||null,d))}
r=ki.prototype;r.finally=function(a){var b=this;a=Xh(a);return new Promise(function(c,d){ri(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Dc=function(a,b){return qi(this,null,Xh(a),b)};
r.catch=ki.prototype.Dc;r.cancel=function(a){if(this.X==0){var b=new ti(a);fi(function(){ui(this,b)},this)}};
function ui(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?ui(c,b):(f?(d=f,d.next==c.ub&&(c.ub=d),d.next=d.next.next):vi(c),wi(c,e,3,b)))}a.parent_=null}else li(a,3,b)}
function si(a,b){a.Sa||a.X!=2&&a.X!=3||xi(a);a.ub?a.ub.next=b:a.Sa=b;a.ub=b}
function qi(a,b,c,d){var e=oi(null,null,null);e.child=new ki(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ti?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;si(a,e);return e.child}
r.xf=function(a){this.X=0;li(this,2,a)};
r.yf=function(a){this.X=0;li(this,3,a)};
function li(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.xf,f=a.yf;if(d instanceof ki){ri(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){yi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,xi(a),b!=3||c instanceof ti||zi(a,c))}}
function yi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function xi(a){a.Ic||(a.Ic=!0,fi(a.qe,a))}
function vi(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.ub=null);return b}
r.qe=function(){for(var a;a=vi(this);)wi(this,a,this.X,this.ab);this.Ic=!1};
function wi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.nc;a=a.parent_)a.nc=!1;if(b.child)b.child.parent_=null,Ai(b,c,d);else try{b.j?b.i.call(b.context):Ai(b,c,d)}catch(e){Bi.call(null,e)}Zh(ni,b)}
function Ai(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function zi(a,b){a.nc=!0;fi(function(){a.nc&&Bi.call(null,b)})}
var Bi=Qc;function ti(a){cb.call(this,a)}
bb(ti,cb);ti.prototype.name="cancel";function Ci(a,b){Uh.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.tf,this);this.u=$a()}
bb(Ci,Uh);r=Ci.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.tf=function(){if(this.enabled){var a=$a()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Vh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=$a())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Ci.Aa.ba.call(this);this.stop();delete this.h};function Di(a){H.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Ci(this.flushInterval);this.h.listen("tick",this.Yb,!1,this);uc(this,this.h)}
w(Di,H);r=Di.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ei(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Yb()}
r.Yb=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Fi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Kb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new uh(a,b))};
r.Gc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new vh(a,b))};
function Gi(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Ib=function(a){this.Vd(a,1,C.apply(1,arguments))};
r.Vd=function(a,b){var c=C.apply(2,arguments),d=Gi(this,a);d&&d instanceof uh&&(d.j(b,c),Ei(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Gi(this,a);d&&d instanceof vh&&(d.record(b,c),Ei(this))};
function Fi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Hi(){}
Hi.prototype.serialize=function(a){var b=[];Ii(this,a,b);return b.join("")};
function Ii(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ii(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ji(d,c),c.push(":"),Ii(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ji(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ki={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Li=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ji(a,b){b.push('"',a.replace(Li,function(c){var d=Ki[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ki[c]=d);return d}),'"')}
;function Mi(){Uh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.oa="";this.ha=!1}
bb(Mi,Uh);var Ni=/^https?$/i,Oi=["POST","PUT"],Pi=[];function Qi(a,b,c,d,e,f,g){var h=new Mi;Pi.push(h);b&&h.listen("complete",b);Qh(h,"ready",h.ee);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Mi.prototype;r.ee=function(){this.dispose();Sb(Pi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Xh(Xa(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Ri(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Mb(Oi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.oa&&(this.J.responseType=this.oa);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.wf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Ri(this,g)}};
r.wf=function(){typeof Ka!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Vh(this,"timeout"),this.abort(8))};
function Ri(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Si(a);Ti(a)}
function Si(a){a.P||(a.P=!0,Vh(a,"complete"),Vh(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Vh(this,"complete"),Vh(this,"abort"),Ti(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Ti(this,!0));Mi.Aa.ba.call(this)};
r.Bd=function(){this.ea||(this.U||this.D||this.j?Ui(this):this.Ne())};
r.Ne=function(){Ui(this)};
function Ui(a){if(a.h&&typeof Ka!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if(Vh(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Vi(a))Vh(a,"complete"),Vh(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Si(a)}}finally{Ti(a)}}}
function Ti(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Vh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Vi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=bc(1,String(a.Y)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Ni.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Wi(){}
Wi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Qi(a.url,function(d){d=d.target;if(Vi(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Bc,a.timeoutMillis,a.withCredentials)};
Wi.prototype.lc=function(){return 1};function Xi(a,b){this.logger=a;this.event=b;this.startTime=Yi()}
Xi.prototype.done=function(){this.logger.Sb(this.event,Yi()-this.startTime)};
function Zi(){Fc.apply(this,arguments)}
w(Zi,Fc);function $i(a,b){var c=Yi();b=b();a.Sb("n",Yi()-c);return b}
function aj(){Zi.apply(this,arguments)}
w(aj,Zi);r=aj.prototype;r.Oc=function(){};
r.Bb=function(){};
r.Sb=function(){};
r.Ha=function(){};
r.Ac=function(){};
r.Nd=function(){};
function bj(a){return{rf:new Ic(a),errorCount:new Mc(a),eventCount:new Kc(a),pe:new Lc(a),Zh:new Jc(a),bi:new Nc(a),uh:new Oc(a),ai:new Pc(a)}}
function cj(a,b,c,d){a=nh(lh(kh(new jh(1828,"0"),a),new Wi));b.length&&mh(a,Nf(new Mf,b));d!==void 0&&(a.Ua=d);var e=new ph(1828,"","",!1,"",oh(a));uc(e,a);var f=new Di({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.Yb()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function dj(a,b){H.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(dj,H);function ej(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Yi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Yi(),a.timer=void 0}},b)}}
function fj(a,b,c){Zi.call(this);this.metrics=a;this.Da=b;this.ob=c}
w(fj,Zi);fj.prototype.Oc=function(a){this.metrics.rf.record(a,this.Da)};
fj.prototype.Bb=function(a){this.metrics.eventCount.h(a,this.Da)};
fj.prototype.Sb=function(a,b){this.metrics.pe.record(b,a,this.ob,this.Da)};
fj.prototype.Ha=function(a){this.metrics.errorCount.h(a,this.ob,this.Da)};
function gj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",ob:a.ob||"",kc:a.kc||[],sc:a.sc|0,Ua:a.Ua,uc:a.uc||function(){},
Hb:a.Hb||function(e,f){return cj(e,f,c.uc,c.Ua)}};
b=c.Hb("47",c.kc.concat(b));fj.call(this,bj(b),c.Da,c.ob);var d=this;this.options=c;this.service=b;this.i=!a.Hb;this.h=new dj(function(){return void d.service.Yb()},c.sc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(gj,fj);gj.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Hb("47",this.options.kc.concat(a));this.h=new dj(function(){return void b.service.Yb()},this.options.sc);
this.metrics=bj(this.service)};
gj.prototype.Ac=function(){ej(this.h)};
function Yi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function hj(a){this.F=L(a)}
w(hj,M);function ij(a){this.F=L(a)}
w(ij,M);function jj(a){this.F=L(a,0,"bfkj")}
w(jj,M);var kj=function(a){return $d(function(b){return b instanceof a&&!((b.F[K]|0)&2)})}(jj);function Bc(a){this.F=L(a)}
w(Bc,M);function lj(a){this.F=L(a)}
w(lj,M);var mj=Lf(lj);function nj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function oj(a,b,c){if(a.disable)return new aj;b=b?zc(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,ob:a.ob,kc:a.Ah,sc:a.Kh,Ua:a.Ua,uc:a.uc,Hb:a.Hb};c=b;c=c===void 0?[]:c;return new gj(a,c)}
function pj(a){function b(v,x,y,G){Promise.resolve().then(function(){k.done();h.Ac();h.dispose();g.resolve({Zd:v,qf:x,Re:y,wh:G})})}
function c(v,x,y,G){if(!d.logger.ea){var J="k";x?J="h":y&&(J="u");J!=="k"?G!==0&&(d.logger.Bb(J),d.logger.Sb(J,v)):d.i<=0?(d.logger.Bb(J),d.logger.Sb(J,v),d.i=Math.floor(Math.random()*200)):d.i--}}
H.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new lj;if("challenge"in a&&kj(a.challenge)){var e=Df(a.challenge,4);var f=Df(a.challenge,5);Df(a.challenge,7)&&(this.h=mj(Df(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,y;return B(function(G){if(G.h==1)return G.yield(d.j,2);v=G.i;x=v.qf;(y=x)==null||y();G.h=0})});
this.logger=oj(a.zd||{},this.h,a.xh);uc(this,this.logger);var g=new nj;this.j=g.promise;this.logger.Bb("t");var h=this.logger.share(),k=new Xi(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=zc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Dc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=z(l(e,b,!0,a.Yh,c,[f,m],Df(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(pj,H);pj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Zd;return new Promise(function(e){var f=new Xi(b,"n");d(function(g){f.done();b.Oc(g.length);b.Ac();b.dispose();e(g)},[a.vb,
a.cd,a.Bf,a.dd])})})};
pj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Bb("n");var c=$i(this.logger,function(){return b.u([a.vb,a.cd,a.Bf,a.dd])});
this.logger.Oc(c.length);this.logger.Ac();return c};
pj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Re)==null||c(a)})};function qj(a){if(!a)return null;a=Re(nf(a,4));return a===null||a===void 0?null:jb(a)}
;function rj(){this.promises={};this.h=null}
function sj(){rj.instance||(rj.instance=new rj);return rj.instance}
function tj(a,b){return uj(a,zf(b,hj,1),zf(b,ij,2),Df(b,3))}
function uj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return vj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){vj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function vj(a,b){return b?wj(b):a?xj(a):Promise.resolve()}
function wj(a){return new Promise(function(b,c){var d=zg("SCRIPT"),e=qj(a);Fb(d,e);d.onload=function(){Ag(d);b()};
d.onerror=function(){Ag(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function xj(a){return new Promise(function(b){var c=zg("SCRIPT");if(a){var d=Re(nf(a,6));d=d===null||d===void 0?null:Cb(d)}else d=null;c.textContent=Db(d);Eb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Ag(c);b()})}
;var yj=window;function zj(a){var b=Aj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Bj(){var a=[];zj(function(b){a.push(b)});
return a}
var Aj={Cf:"allow-forms",Df:"allow-modals",Ef:"allow-orientation-lock",Ff:"allow-pointer-lock",Gf:"allow-popups",Hf:"allow-popups-to-escape-sandbox",If:"allow-presentation",Jf:"allow-same-origin",Kf:"allow-scripts",Lf:"allow-top-navigation",Mf:"allow-top-navigation-by-user-activation"},Cj=ji(function(){return Bj()});
function Dj(){var a=Ej(),b={};Nb(Cj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ej(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Fj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Gj=(new Date).getTime();function Hj(a){Uh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Ij(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Jj(this)}
w(Hj,Uh);function Kj(){var a=Lj;Hj.instance||(Hj.instance=new Hj(a));return Hj.instance}
Hj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Hj.instance};
Hj.prototype.ta=function(){return this.h};
function Jj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Ij(a),3):c.yield(Ij(a),3);Jj(a);c.h=0})},3E4)}
function Ij(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Vh(a,"networkstatus-online"):Vh(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.A(3)}})})}
;function Mj(){this.data=[];this.h=-1}
Mj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Mj.prototype.get=function(a){return!!this.data[a]};
function Nj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Oj(){this.blockSize=-1}
;function Pj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
bb(Pj,Oj);Pj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Qj(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Pj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Qj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Qj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Qj(this,e);f=0;break}}this.i=f;this.o+=b}};
Pj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Qj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Rj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Sj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Tj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Rj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Uj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Tj(a,"inverted-hdpi")&&Sj(a,Array.prototype.filter.call(a.classList?a.classList:Rj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Vj(){}
Vj.prototype.next=function(){return Wj};
var Wj={done:!0,value:void 0};Vj.prototype.sb=function(){return this};function Xj(a){if(a instanceof Yj||a instanceof Zj||a instanceof ak)return a;if(typeof a.next=="function")return new Yj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Yj(function(){return a[Symbol.iterator]()});
if(typeof a.sb=="function")return new Yj(function(){return a.sb()});
throw Error("Not an iterator or iterable.");}
function Yj(a){this.h=a}
Yj.prototype.sb=function(){return new Zj(this.h())};
Yj.prototype[Symbol.iterator]=function(){return new ak(this.h())};
Yj.prototype.i=function(){return new ak(this.h())};
function Zj(a){this.h=a}
w(Zj,Vj);Zj.prototype.next=function(){return this.h.next()};
Zj.prototype[Symbol.iterator]=function(){return new ak(this.h)};
Zj.prototype.i=function(){return new ak(this.h)};
function ak(a){Yj.call(this,function(){return a});
this.j=a}
w(ak,Yj);ak.prototype.next=function(){return this.j.next()};function N(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
bb(N,H);r=N.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.ac(a)}return!1};
r.ac=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Sb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.qb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],bk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.ac(c)}}return f!=0}return!1};
function bk(a,b,c){fi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function ck(a){this.h=a}
ck.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Hi).serialize(b))};
ck.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ck.prototype.remove=function(a){this.h.remove(a)};function dk(a){this.h=a}
bb(dk,ck);function ek(a){this.data=a}
function fk(a){return a===void 0||a instanceof ek?a:new ek(a)}
dk.prototype.set=function(a,b){dk.Aa.set.call(this,a,fk(b))};
dk.prototype.i=function(a){a=dk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gk(a){this.h=a}
bb(gk,dk);gk.prototype.set=function(a,b,c){if(b=fk(b)){if(c){if(c<$a()){gk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}gk.Aa.set.call(this,a,b)};
gk.prototype.i=function(a){var b=gk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())gk.prototype.remove.call(this,a);else return b}};function hk(){}
;function ik(){}
bb(ik,hk);ik.prototype[Symbol.iterator]=function(){return Xj(this.sb(!0)).i()};
ik.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function jk(a){this.h=a;this.i=null}
bb(jk,ik);r=jk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){kk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){kk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){kk(this);this.h.removeItem(a)};
r.sb=function(a){kk(this);var b=0,c=this.h,d=new Vj;d.next=function(){if(b>=c.length)return Wj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){kk(this);this.h.clear()};
r.key=function(a){kk(this);return this.h.key(a)};
function kk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Qc(Error("Storage mechanism: Storage unavailable"))}
;function lk(){var a=null;try{a=D.localStorage||null}catch(b){}jk.call(this,a)}
bb(lk,jk);function mk(a,b){this.i=a;this.h=b+"::"}
bb(mk,ik);mk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
mk.prototype.get=function(a){return this.i.get(this.h+a)};
mk.prototype.remove=function(a){this.i.remove(this.h+a)};
mk.prototype.sb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Vj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},nk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ok={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},pk={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
O.pf=function(){nk?(O.pb=Uint8Array,O.Ja=Uint16Array,O.Ud=Int32Array,O.assign(O,ok)):(O.pb=Array,O.Ja=Array,O.Ud=Array,O.assign(O,pk))};
O.pf();var qk=!0;try{new Uint8Array(1)}catch(a){qk=!1}
function rk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.pb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var sk={};sk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var tk={},uk,vk=[],wk=0;wk<256;wk++){uk=wk;for(var xk=0;xk<8;xk++)uk=uk&1?3988292384^uk>>>1:uk>>>1;vk[wk]=uk}tk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^vk[(a^b[d])&255];return a^-1};var yk={};yk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function zk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ak=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Bk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ck=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Dk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ek=Array(576);zk(Ek);var Fk=Array(60);zk(Fk);var Gk=Array(512);zk(Gk);var Hk=Array(256);zk(Hk);var Ik=Array(29);zk(Ik);var Jk=Array(30);zk(Jk);function Kk(a,b,c,d,e){this.Kd=a;this.te=b;this.se=c;this.le=d;this.Le=e;this.vd=a&&a.length}
var Lk,Mk,Nk;function Ok(a,b){this.rd=a;this.Db=0;this.bb=b}
function Pk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Qk(a,b,c){a.ia>16-c?(a.na|=b<<a.ia&65535,Pk(a,a.na),a.na=b>>16-a.ia,a.ia+=c-16):(a.na|=b<<a.ia&65535,a.ia+=c)}
function Rk(a,b,c){Qk(a,c[b*2],c[b*2+1])}
function Sk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Tk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Sk(d[e]++,e))}
function Uk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Gb=0;a.ya=a.matches=0}
function Vk(a){a.ia>8?Pk(a,a.na):a.ia>0&&(a.aa[a.pending++]=a.na);a.na=0;a.ia=0}
function Wk(a,b,c){Vk(a);Pk(a,c);Pk(a,~c);O.tb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Xk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Yk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Xk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Xk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Zk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Nb+d*2]<<8|a.aa[a.Nb+d*2+1];var f=a.aa[a.Nc+d];d++;if(e===0)Rk(a,f,b);else{var g=Hk[f];Rk(a,g+256+1,b);var h=Ak[g];h!==0&&(f-=Ik[g],Qk(a,f,h));e--;g=e<256?Gk[e]:Gk[256+(e>>>7)];Rk(a,g,c);h=Bk[g];h!==0&&(e-=Jk[g],Qk(a,e,h))}}while(d<a.ya)}Rk(a,256,b)}
function $k(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.le,g,h=-1;a.Na=0;a.yb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Gb-=d[k*2+1])}b.Db=h;for(g=a.Na>>1;g>=1;g--)Yk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Yk(a,c,1),d=a.da[1],a.da[--a.yb]=g,a.da[--a.yb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Yk(a,c,1);while(a.Na>=
2);a.da[--a.yb]=a.da[1];g=b.rd;k=b.Db;d=b.bb.Kd;e=b.bb.vd;f=b.bb.te;var l=b.bb.se,m=b.bb.Le,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.yb]*2+1]=0;for(b=a.yb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Gb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Tk(c,h,a.Ka)}
function al(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function bl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Rk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Rk(a,l,a.ja),g--),Rk(a,16,a.ja),Qk(a,g-3,2)):g<=10?(Rk(a,17,a.ja),Qk(a,g-3,3)):(Rk(a,18,a.ja),Qk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function cl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var dl=!1;function el(a,b,c){a.aa[a.Nb+a.ya*2]=b>>>8&255;a.aa[a.Nb+a.ya*2+1]=b&255;a.aa[a.Nc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Hk[c]+256+1)*2]++,a.fb[(b<256?Gk[b]:Gk[256+(b>>>7)])*2]++);return a.ya===a.Rb-1}
;function fl(a,b){a.msg=yk[b];return b}
function gl(a){for(var b=a.length;--b>=0;)a[b]=0}
function hl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.tb(a.output,b.aa,b.Ub,c,a.Eb),a.Eb+=c,b.Ub+=c,a.gd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Ub=0))}
function il(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Hc===2&&(a.K.Hc=cl(a));$k(a,a.qc);$k(a,a.ic);al(a,a.ra,a.qc.Db);al(a,a.fb,a.ic.Db);$k(a,a.nd);for(e=18;e>=3&&a.ja[Dk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Qk(a,b?1:0,3),Wk(a,c,d);else if(a.strategy===4||g===f)Qk(a,2+(b?1:0),3),Zk(a,Ek,Fk);else{Qk(a,4+(b?1:0),3);c=a.qc.Db+1;d=a.ic.Db+1;e+=1;Qk(a,c-257,5);Qk(a,d-1,5);Qk(a,e-4,4);for(f=0;f<e;f++)Qk(a,
a.ja[Dk[f]*2+1],3);bl(a,a.ra,c-1);bl(a,a.fb,d-1);Zk(a,a.ra,a.fb)}Uk(a);b&&Vk(a);a.va=a.v;hl(a.K)}
function P(a,b){a.aa[a.pending++]=b}
function jl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function kl(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Cb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function ll(a){var b=a.la,c;do{var d=a.Sd-a.B-a.v;if(a.v>=b+(b-262)){O.tb(a.window,a.window,b,b,0);a.Cb-=b;a.v-=b;a.va-=b;var e=c=a.pc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.ma===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,O.tb(c,e.input,e.lb,g,f),e.state.wrap===1?e.I=sk(e.I,c,g,f):e.state.wrap===2&&(e.I=tk(e.I,c,g,f)),e.lb+=g,e.nb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.ma!==0)}
function ml(a,b){for(var c;;){if(a.B<262){ll(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=kl(a,c));if(a.T>=3)if(c=el(a,a.v-a.Cb,a.T-3),a.B-=a.T,a.T<=a.Pc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=el(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function nl(a,b){for(var c,d;;){if(a.B<262){ll(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Dd=a.Cb;a.T=2;c!==0&&a.wa<a.Pc&&a.v-c<=a.la-262&&(a.T=kl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Cb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=el(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.jb=0;a.T=2;a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}else if(a.jb){if((c=el(a,0,a.window[a.v-1]))&&il(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.jb=1,a.v++,a.B--}a.jb&&(el(a,0,a.window[a.v-1]),a.jb=0);a.sa=a.v<2?a.v:2;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function ol(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){ll(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=el(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=el(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(il(a,!0),a.K.S===0?3:4):
a.ya&&(il(a,!1),a.K.S===0)?1:2}
function pl(a,b){for(var c;;){if(a.B===0&&(ll(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=el(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function ql(a,b,c,d,e){this.ye=a;this.Ke=b;this.Me=c;this.Je=d;this.ue=e}
var rl;rl=[new ql(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){ll(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,il(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(il(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return il(a,!0),a.K.S===0?3:4;a.v>a.va&&il(a,!1);return 1}),
new ql(4,4,8,4,ml),new ql(4,5,16,8,ml),new ql(4,6,32,32,ml),new ql(4,4,16,16,nl),new ql(8,16,32,32,nl),new ql(8,16,128,128,nl),new ql(8,32,128,256,nl),new ql(32,128,258,1024,nl),new ql(32,258,258,4096,nl)];
function sl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Ub=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Ab=-1;this.cb=this.jd=this.la=0;this.window=null;this.Sd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Pc=this.yd=this.wa=this.B=this.Cb=this.v=this.jb=this.Dd=this.T=this.va=this.Ma=this.La=this.Lc=this.pc=this.R=0;this.ra=new O.Ja(1146);this.fb=new O.Ja(122);this.ja=new O.Ja(78);gl(this.ra);gl(this.fb);gl(this.ja);this.nd=this.ic=this.qc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);gl(this.da);this.yb=this.Na=0;this.depth=new O.Ja(573);gl(this.depth);this.ia=this.na=this.sa=this.matches=this.Gb=this.Oa=this.Nb=this.ya=this.Rb=this.Nc=0}
function tl(a,b){if(!a||!a.state||b>5||b<0)return a?fl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return fl(a,a.S===0?-5:-2);c.K=a;var d=c.Ab;c.Ab=b;if(c.status===42)if(c.wrap===2)a.I=0,P(c,31),P(c,139),P(c,8),c.H?(P(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),P(c,c.H.time&255),P(c,c.H.time>>8&255),P(c,c.H.time>>16&255),P(c,c.H.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(P(c,c.H.extra.length&255),P(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=tk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.jd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;jl(c,e+(31-e%31));c.v!==0&&(jl(c,a.I>>>16),jl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending!==c.za));)P(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=tk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&hl(a),c.pending+2<=c.za&&(P(c,
a.I&255),P(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(hl(a),a.S===0)return c.Ab=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return fl(a,-5);if(c.status===666&&a.ma!==0)return fl(a,-5);if(a.ma!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?pl(c,b):c.strategy===3?ol(c,b):rl[c.level].ue(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Ab=-1),0;if(d===2&&(b===1?(Qk(c,2,3),Rk(c,256,Ek),c.ia===16?(Pk(c,c.na),c.na=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.na&255,c.na>>=8,c.ia-=8)):b!==5&&(Qk(c,0,3),Wk(c,0,0),b===3&&(gl(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),hl(a),a.S===0))return c.Ab=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.I&255),P(c,a.I>>8&255),P(c,a.I>>16&255),P(c,a.I>>24&255),P(c,a.nb&255),P(c,a.nb>>8&255),P(c,a.nb>>16&255),P(c,a.nb>>24&255)):(jl(c,a.I>>>16),jl(c,a.I&65535));hl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ul={};ul=function(){this.input=null;this.nb=this.ma=this.lb=0;this.output=null;this.gd=this.S=this.Eb=0;this.msg="";this.state=null;this.Hc=2;this.I=0};var vl=Object.prototype.toString;
function wl(a){if(!(this instanceof wl))return new wl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new ul;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=fl(b,-2);else{e===8&&(e=9);var k=new sl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.jd=e;k.la=1<<k.jd;k.cb=k.la-1;k.Lc=f+7;k.pc=1<<k.Lc;k.La=k.pc-1;k.Ma=~~((k.Lc+3-1)/3);k.window=new O.pb(k.la*2);k.head=new O.Ja(k.pc);k.Ia=new O.Ja(k.la);k.Rb=1<<f+6;k.za=k.Rb*4;k.aa=new O.pb(k.za);k.Nb=1*k.Rb;k.Nc=3*k.Rb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.nb=b.gd=0;b.Hc=2;c=b.state;c.pending=0;c.Ub=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Ab=0;if(!dl){d=Array(16);for(f=g=0;f<28;f++)for(Ik[f]=g,e=0;e<1<<Ak[f];e++)Hk[g++]=f;Hk[g-1]=f;for(f=g=0;f<16;f++)for(Jk[f]=g,e=0;e<1<<Bk[f];e++)Gk[g++]=f;for(g>>=7;f<30;f++)for(Jk[f]=g<<7,e=0;e<1<<Bk[f]-7;e++)Gk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ek[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ek[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ek[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ek[e*2+1]=8,e++,d[8]++;Tk(Ek,287,d);for(e=0;e<30;e++)Fk[e*2+1]=5,Fk[e*2]=Sk(e,5);Lk=new Kk(Ek,Ak,257,286,15);Mk=new Kk(Fk,
Bk,0,30,15);Nk=new Kk([],Ck,0,19,7);dl=!0}c.qc=new Ok(c.ra,Lk);c.ic=new Ok(c.fb,Mk);c.nd=new Ok(c.ja,Nk);c.na=0;c.ia=0;Uk(c);c=0}else c=fl(b,-2);c===0&&(b=b.state,b.Sd=2*b.la,gl(b.head),b.Pc=rl[b.level].Ke,b.ud=rl[b.level].ye,b.Ad=rl[b.level].Me,b.yd=rl[b.level].Je,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.jb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(yk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=rk(a.dictionary):
vl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=sk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(gl(l.head),l.v=0,l.va=0,l.sa=0),c=new O.pb(l.la),O.tb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.lb;e=a.input;a.ma=g;a.lb=0;a.input=f;for(ll(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;ll(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.jb=0;a.lb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(yk[b]);this.rh=!0}}
wl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=rk(a):vl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.lb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new O.pb(d),c.Eb=0,c.S=d);a=tl(c,e);if(a!==1&&a!==0)return xl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.bd(c.output,c.Eb);b=f;f=f.length;if(f<65537&&(b.subarray&&qk||!b.subarray))b=
String.fromCharCode.apply(null,O.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.bd(c.output,c.Eb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=fl(c,-2):(c.state=null,a=d===113?fl(c,-3):0)):a=-2,xl(this,a),this.ended=!0,a===0;e===2&&(xl(this,0),c.S=0);return!0};
function xl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function yl(a,b){b=b||{};b.gzip=!0;b=new wl(b);b.push(a,!0);if(b.err)throw b.msg||yk[b.err];return b.result}
;function zl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Cb(a):null:null}
function Al(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?jb(a):null:null}
;function Bl(a){return jb(a===null?"null":a===void 0?"undefined":a)}
;function Cl(a){this.name=a}
;var Dl=new Cl("rawColdConfigGroup");var El=new Cl("rawHotConfigGroup");function Fl(a){this.F=L(a)}
w(Fl,M);function Gl(a){this.F=L(a)}
w(Gl,M);Gl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Bd(a,Ad):Dd||(Dd=new Bd(null,Ad));else if(a.constructor!==Bd)if(zd(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Bd(new Uint8Array(a),Ad):Dd||(Dd=new Bd(null,Ad));else throw Error();return pf(this,1,a)};var Hl=new Cl("continuationCommand");var Il=new Cl("webCommandMetadata");var Jl=new Cl("signalServiceEndpoint");var Kl={Sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Pf:"EMBEDDED_PLAYER_MODE_DEFAULT",Rf:"EMBEDDED_PLAYER_MODE_PFP",Qf:"EMBEDDED_PLAYER_MODE_PFL"};var Ll=new Cl("feedbackEndpoint");var ee={Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED"};var Ml=new Cl("shareEndpoint"),Nl=new Cl("shareEntityEndpoint"),Ol=new Cl("shareEntityServiceEndpoint"),Pl=new Cl("webPlayerShareEntityServiceEndpoint");var Ql=new Cl("playlistEditEndpoint");var Rl=new Cl("modifyChannelNotificationPreferenceEndpoint");var Sl=new Cl("unsubscribeEndpoint");var Tl=new Cl("subscribeEndpoint");function Ul(){var a=Vl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Wl(a){E("yt.ads.biscotti.lastId_",a)}
;function Xl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Yl=D.window,Zl,$l,am=(Yl==null?void 0:(Zl=Yl.yt)==null?void 0:Zl.config_)||(Yl==null?void 0:($l=Yl.ytcfg)==null?void 0:$l.data_)||{};E("yt.config_",am);function bm(){Xl(am,arguments)}
function R(a,b){return a in am?am[a]:b}
function cm(a){var b=am.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var dm=[];function em(a){dm.forEach(function(b){return b(a)})}
function fm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gm(b)}}:a}
function gm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),bm("ERRORS",b));em(a)}
function hm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),bm("ERRORS",f))}
;var im=/^[\w.]*$/,jm={q:!0,search_query:!0};function km(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=lm(f[0]||""),h=lm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Tb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(km);l.args=[{key:m,value:f[1],query:a,method:mm===n?"unchanged":n}];jm.hasOwnProperty(m)||hm(l)}}return c}
var mm=String(km);function nm(a){var b=[];lg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function om(a){a.charAt(0)==="?"&&(a=a.substring(1));return km(a,"&")}
function pm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),om(a.length>1?a[1]:a[0])):{}}
function qm(a,b){return rm(a,b||{},!0)}
function rm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=om(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function sm(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(bc(4,b))||null)===(Number(bc(4,a))||null):!0;return a}
function lm(a){return a&&a.match(im)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tm(a){var b=um;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Gj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?yj:g;try{var h=g.history.length}catch(Na){h=0}e.u_his=h;var k;e.u_h=(k=yj.screen)==null?void 0:k.height;var l;e.u_w=(l=yj.screen)==null?void 0:l.width;var m;e.u_ah=(m=yj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=yj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=yj.screen)==null?void 0:p.colorDepth}catch(Na){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Na){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Na){}try{var G=h.innerWidth;var J=h.innerHeight}catch(Na){}try{var ca=h.screenLeft;var da=h.screenTop}catch(Na){}try{G=h.innerWidth,J=h.innerHeight}catch(Na){}try{var Ma=h.screen.availWidth;var Kb=h.screen.availTop}catch(Na){}t=[ca,da,t,v,Ma,Kb,x,y,G,J];try{var ja=(b.h.top||window).document,Ya=
ja.compatMode=="CSS1Compat"?ja.documentElement:ja.body;var Oa=(new kg(Ya.clientWidth,Ya.clientHeight)).round()}catch(Na){Oa=new kg(-12245933,-12245933)}ja=Oa;Oa={};var Pa=Pa===void 0?D:Pa;Ya=new Mj;"SVGElement"in Pa&&"createElementNS"in Pa.document&&Ya.set(0);v=Dj();v["allow-top-navigation-by-user-activation"]&&Ya.set(1);v["allow-popups-to-escape-sandbox"]&&Ya.set(2);Pa.crypto&&Pa.crypto.subtle&&Ya.set(3);"TextDecoder"in Pa&&"TextEncoder"in Pa&&Ya.set(4);Pa=Nj(Ya);Oa.bc=Pa;Oa.bih=ja.height;Oa.biw=
ja.width;Oa.brdim=t.join();b=b.i;b=(Oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Oa.wgl=!!yj.WebGLRenderingContext,Oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var um=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return nm(tm(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var wm="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function xm(){if(!wm)return null;var a=wm();return"open"in a?a:null}
function ym(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function zm(a,b){typeof a==="function"&&(a=fm(a));return window.setTimeout(a,b)}
;var Am="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(Am),["client_dev_set_cookie"]);function S(a){a=Bm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=Bm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Bm(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Cm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Dm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Em="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(Am)),Fm=!1;function Gm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&fm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=xm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Hm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Im(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){hm(n)}}l.send(d);return l}
function Im(a,b){b=b===void 0?{}:b;var c=sm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in Dm){var g=R(Dm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(cc(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=cc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ac(bc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=nm(tm()));return b}
function Jm(a,b){b.method="POST";b.postParams||(b.postParams={});return Km(a,b)}
function Km(a,b){var c=b.format||"JSON";a=Lm(a,b);var d=Mm(a,b),e=!1,f=Nm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=ym(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Om(a,c,k,b.convertToSafeHtml);l&&(l=Pm(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=zm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Lm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qm(a,b);return a}
function Mm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=om(e),vg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):hc(e));f=e||f&&!og(f);!Fm&&f&&b.method!=="POST"&&(Fm=!0,gm(Error("AJAX request with postData should use POST")));return e}
function Om(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qm(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rm(g)})}d&&Sm(e);
return e}
function Sm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=hb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Sm(a[b])}}
function Pm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Qm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Rm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hm(a){var b=window.location.search,c=cc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sm(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=om(b),f={};Nb(Em,function(g){e[g]&&(f[g]=e[g])});
return rm(a,f||{},!1)}
var Nm=Gm;var Tm=[{Qc:function(a){return"Cannot read property '"+a.key+"'"},
vc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Qc:function(a){return"Cannot call '"+a.key+"'"},
vc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Qc:function(a){return a.key+" is not defined"},
vc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Vm={Ya:[],Ta:[{callback:Um,weight:500}]};function Um(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Wm(){this.Ta=[];this.Ya=[]}
var Xm;function Ym(){if(!Xm){var a=Xm=new Wm;a.Ya.length=0;a.Ta.length=0;Vm.Ya&&a.Ya.push.apply(a.Ya,Vm.Ya);Vm.Ta&&a.Ta.push.apply(a.Ta,Vm.Ta)}return Xm}
;var Zm=new N;function $m(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=an(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=an(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=an(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function an(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function bn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=$m(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cn(f+".ve",g,h,k):0;d+=f;d+=cn(e,a[e],b,c);if(d>500)break}}else c[b]=dn(a),d+=c[b].length;else c[b]=dn(a),d+=c[b].length;return d}
function cn(a,b,c,d){c+="."+a;a=dn(b);d[c]=a;return c.length+a.length}
function dn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function en(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function fn(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gn(){this.Ld=!0}
function hn(){gn.instance||(gn.instance=new gn);return gn.instance}
function jn(a,b){a={};var c=[];"USER_SESSION_ID"in am&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=dg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in am||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in am&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var kn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ln(a,b,c,d,e){ag.set(""+a,b,{Tb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function mn(a){return ag.get(""+a,void 0)}
function nn(a,b,c){ag.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function on(){if(S("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!ag.isEnabled())return!1;if(ag.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?ag.set("TESTCOOKIESENABLED","1",{Tb:60,bf:"none",secure:!0}):ag.set("TESTCOOKIESENABLED","1",{Tb:60});if(ag.get("TESTCOOKIESENABLED")!=="1")return!1;ag.remove("TESTCOOKIESENABLED");return!0}
;var pn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",pn);function qn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=mn(this.h);a&&this.parse(a)}
var rn;function sn(){rn||(rn=new qn);return rn}
r=qn.prototype;r.get=function(a,b){tn(a);un(a);a=pn[a]!==void 0?pn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){tn(a);un(a);if(b==null)throw Error("ExpectedNotNull");pn[a]=b.toString()};
function vn(a){return!!((wn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){tn(a);un(a);delete pn[a]};
r.clear=function(){for(var a in pn)delete pn[a]};
function un(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wn(a){a=pn[a]!==void 0?pn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(pn[d]=c.toString())}};var xn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function zn(){var a=D.navigator;return a?a.connection:void 0}
function An(){var a=zn();if(a){var b=xn[a.type||"unknown"]||"CONN_UNKNOWN";a=xn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Bn(){var a=zn();if(a!=null&&a.effectiveType)return yn.hasOwnProperty(a.effectiveType)?yn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(U,Error);function Cn(){try{return Dn(),!0}catch(a){return!1}}
function Dn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function En(){}
function Fn(a,b){return Lj.Ra(a,0,b)}
En.prototype.pa=function(a,b){return this.Ra(a,1,b)};
En.prototype.Jb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Gn=T("web_emulated_idle_callback_delay",300),Hn=1E3/60-3,In=[8,5,4,3,2,1,0];
function Jn(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=z(In),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Fc=a.timeout||1;this.G=Hn;this.D=0;this.xa=this.Oe.bind(this);this.Ec=this.uf.bind(this);this.Pa=this.Yd.bind(this);this.Qa=this.ze.bind(this);this.rb=this.Ve.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.oa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Jn,H);r=Jn.prototype;r.Jb=function(a){var b=$a();Kn(this,a);a=$a()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Jb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Ln(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Mn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Nn(a){return!a.isHidden()&&a.oa}
function Ln(a){if(a.i[8].length){if(a.U)return 4;if(Nn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Nn(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Kn(a,b){try{b()}catch(c){a.Ha(c)}}
function On(a){for(var b=z(In),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.ze=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Pn(this,b);this.ha=!1};
r.uf=function(){Pn(this)};
r.Yd=function(){Qn(this)};
r.Ve=function(a){this.U=!0;var b=Ln(this);b===4&&b!==this.D&&(this.stop(),this.start());Pn(this,void 0,a);this.U=!1};
r.Oe=function(){this.isHidden()||Qn(this);this.h&&(this.stop(),this.start())};
function Qn(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Kn(a,e)}Rn(a);a.u=!1;On(a)&&a.start();b=$a()-b;a.G-=b}
function Rn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Pn(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Kn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Kn(a,c)}while(c&&$a()<b)}a.u=!1;Rn(a);a.G=Hn;On(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Ln(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Gn);break;case 2:this.h=window.setTimeout(this.Ec,this.Fc);break;case 3:this.h=window.requestAnimationFrame(this.rb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Mn(this);this.stop();this.oa&&document.removeEventListener("visibilitychange",this.xa);H.prototype.ba.call(this)};var Sn=F("yt.scheduler.instance.timerIdMap_")||{},Tn=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),Un=0,Vn=0;function Wn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Jn(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Xn(){Yn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(sc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Yn(){Mn(Wn());for(var a in Sn)Sn.hasOwnProperty(a)&&delete Sn[Number(a)]}
function Zn(a,b,c){if(!c)return c=c===void 0,-Wn().Ra(a,b,c);var d=window.setTimeout(function(){var e=Wn().Ra(a,b);Sn[d]=e},c);
return d}
function $n(a){Wn().Jb(a)}
function ao(a){var b=Wn();if(a<0)b.qa(-a);else{var c=Sn[a];c?(b.qa(c),delete Sn[a]):window.clearTimeout(a)}}
function bo(){co()}
function co(){window.clearTimeout(Un);Wn().start()}
function eo(){Wn().pause();window.clearTimeout(Un);Un=window.setTimeout(bo,Tn)}
function fo(){window.clearTimeout(Vn);Vn=window.setTimeout(function(){go(0)},Tn)}
function go(a){fo();var b=Wn();b.o=a;b.start()}
function ho(a){fo();var b=Wn();b.o>a&&(b.o=a,b.start())}
function io(){window.clearTimeout(Vn);var a=Wn();a.o=0;a.start()}
;function jo(){En.apply(this,arguments)}
w(jo,En);function ko(){jo.instance||(jo.instance=new jo);return jo.instance}
jo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):zm(a,c||0)};
jo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
jo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Lj=ko();
S("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Xn),E("yt.scheduler.instance.addJob",Zn),E("yt.scheduler.instance.addImmediateJob",$n),E("yt.scheduler.instance.cancelJob",ao),E("yt.scheduler.instance.cancelAllJobs",Yn),E("yt.scheduler.instance.start",co),E("yt.scheduler.instance.pause",eo),E("yt.scheduler.instance.setPriorityThreshold",go),E("yt.scheduler.instance.enablePriorityThreshold",ho),E("yt.scheduler.instance.clearPriorityThreshold",io),E("yt.scheduler.initialized",
!0));function lo(a){var b=new lk;this.h=(a=b.isAvailable()?a?new mk(b,a):b:null)?new gk(a):null;this.i=document.domain||window.location.hostname}
lo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Hi).serialize(b))}catch(f){return}else e=escape(b);ln(a,e,c,this.i)};
lo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=mn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
lo.prototype.remove=function(a){this.h&&this.h.remove(a);nn(a,"/",this.i)};var mo=function(){var a;return function(){a||(a=new lo("ytidb"));return a}}();
function no(){var a;return(a=mo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var oo=[],po,qo=!1;function ro(){var a={};for(po=new so(a.handleError===void 0?to:a.handleError,a.logEvent===void 0?uo:a.logEvent);oo.length>0;)switch(a=oo.shift(),a.type){case "ERROR":po.Ha(a.payload);break;case "EVENT":po.logEvent(a.eventType,a.payload)}}
function vo(a){qo||(po?po.Ha(a):(oo.push({type:"ERROR",payload:a}),oo.length>10&&oo.shift()))}
function wo(a,b){qo||(po?po.logEvent(a,b):(oo.push({type:"EVENT",eventType:a,payload:b}),oo.length>10&&oo.shift()))}
;function xo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function yo(a){return a.substr(0,a.indexOf(":"))||a}
;var zo=kd||ld;function Ao(a){var b=Uc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Bo={},Co=(Bo.AUTH_INVALID="No user identifier specified.",Bo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bo.MISSING_INDEX="Index not created.",Bo.MISSING_OBJECT_STORES="Object stores not created.",Bo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bo),Do={},Eo=(Do.AUTH_INVALID="ERROR",Do.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Do.EXPLICIT_ABORT="IGNORED",Do.IDB_NOT_SUPPORTED="ERROR",Do.MISSING_INDEX=
"WARNING",Do.MISSING_OBJECT_STORES="ERROR",Do.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Do.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Do.QUOTA_EXCEEDED="WARNING",Do.QUOTA_MAYBE_EXCEEDED="WARNING",Do.UNKNOWN_ABORT="WARNING",Do.INCOMPATIBLE_DB_VERSION="WARNING",Do),Fo={},Go=(Fo.AUTH_INVALID=!1,Fo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fo.EXPLICIT_ABORT=!1,Fo.IDB_NOT_SUPPORTED=!1,Fo.MISSING_INDEX=!1,Fo.MISSING_OBJECT_STORES=!1,Fo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fo.QUOTA_EXCEEDED=!1,Fo.QUOTA_MAYBE_EXCEEDED=!0,Fo.UNKNOWN_ABORT=!0,Fo.INCOMPATIBLE_DB_VERSION=!1,Fo);function Ho(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Co[a]:c;d=d===void 0?Eo[a]:d;e=e===void 0?Go[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ho.prototype)}
w(Ho,U);function Io(a,b){Ho.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Co.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Io.prototype)}
w(Io,Ho);function Jo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jo.prototype)}
w(Jo,Error);var Ko=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Lo(a,b,c,d){b=yo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ho)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ho("QUOTA_EXCEEDED",a);if(md&&e.name==="UnknownError")return new Ho("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jo)return new Ho("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ko.some(function(f){return e.message.includes(f)}))return new Ho("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ho("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Mo(a,b,c){var d=no();return new Ho("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function No(a){if(!a)throw Error();throw a;}
function Oo(a){return a}
function Po(a){this.h=a}
function Qo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qo.all=function(a){return new Qo(new Po(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={zb:0};f.zb<a.length;f={zb:f.zb},++f.zb)Qo.resolve(a[f.zb]).then(function(g){return function(h){d[g.zb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qo.resolve=function(a){return new Qo(new Po(function(b,c){a instanceof Qo?a.then(b,c):b(a)}))};
Qo.reject=function(a){return new Qo(new Po(function(b,c){c(a)}))};
Qo.prototype.then=function(a,b){var c=this,d=a!=null?a:Oo,e=b!=null?b:No;return new Qo(new Po(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Ro(c,c,d,f,g)}),c.i.push(function(){So(c,c,e,f,g)})):c.state.status==="FULFILLED"?Ro(c,c,d,f,g):c.state.status==="REJECTED"&&So(c,c,e,f,g)}))};
Qo.prototype.catch=function(a){return this.then(void 0,a)};
function Ro(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function So(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function To(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qo?To(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Uo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vo(a){return new Promise(function(b,c){Uo(a,b,c)})}
function Wo(a){return new Qo(new Po(function(b,c){Uo(a,b,c)}))}
;function Xo(a,b){return new Qo(new Po(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yo=window,V=Yo.ytcsi&&Yo.ytcsi.now?Yo.ytcsi.now:Yo.performance&&Yo.performance.timing&&Yo.performance.now&&Yo.performance.timing.navigationStart?function(){return Yo.performance.timing.navigationStart+Yo.performance.now()}:function(){return(new Date).getTime()};function Zo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
r=Zo.prototype;r.add=function(a,b,c){return $o(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return $o(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function ap(a,b,c){a=a.h.createObjectStore(b,c);return new bp(a)}
r.delete=function(a,b){return $o(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function cp(a,b,c){return $o(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Wo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $o(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return B(function(y){switch(y.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.A(4);break}g++;k=Math.round(V());ya(y,5);l=a.h.transaction(b,e.mode);G=y.yield;var J=new dp(l);J=ep(J,d);return G.call(y,J,7);case 7:return m=y.i,n=Math.round(V()),fp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:p=Aa(y);t=Math.round(V());v=Lo(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Ho&&!v.h)||g>=f)fp(a,k,t,g,v,b.join(),e),h=v;y.A(2);break;case 4:return y.return(Promise.reject(h))}})}
function fp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ho&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&wo("QUOTA_EXCEEDED",{dbName:yo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ho&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),wo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),gp(a,!1,d,f,b,g.tag),vo(e)):gp(a,!0,d,f,b,g.tag)}
function gp(a,b,c,d,e,f){wo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function bp(a){this.h=a}
r=bp.prototype;r.add=function(a,b){return Wo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Wo(this.h.clear()).then(function(){})};
function hp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Wo(this.h.count(a))};
function ip(a,b){return jp(a,{query:b},function(c){return c.delete().then(function(){return kp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?ip(this,a):Wo(this.h.delete(a))};
r.get=function(a){return Wo(this.h.get(a))};
r.index=function(a){try{return new lp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Jo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function jp(a,b,c){a=a.h.openCursor(b.query,b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function dp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ho;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ep(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return z(d).next().value})}
dp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ho("EXPLICIT_ABORT");};
dp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new bp(a),this.i.set(a,b));return b};
function lp(a){this.h=a}
r=lp.prototype;r.count=function(a){return Wo(this.h.count(a))};
r.delete=function(a){return np(this,{query:a},function(b){return b.delete().then(function(){return kp(b)})})};
r.get=function(a){return Wo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function np(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function op(a,b){this.request=a;this.cursor=b}
function mp(a){return Wo(a).then(function(b){return b?new op(a,b):null})}
function kp(a){a.cursor.continue(void 0);return mp(a.request)}
op.prototype.delete=function(){return Wo(this.cursor.delete()).then(function(){})};
op.prototype.getValue=function(){return this.cursor.value};
op.prototype.update=function(a){return Wo(this.cursor.update(a))};function pp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Zo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,l=c.sf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&wo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:yo(a)});var v=f(),x=new dp(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){wo("IDB_UNEXPECTEDLY_CLOSED",{dbName:yo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function qp(a,b,c){c=c===void 0?{}:c;return pp(a,b,c)}
function rp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),g.yield(Vo(c),4);
if(g.h!=2)return za(g,0);f=Aa(g);throw Lo(f,a,"",-1);})}
;function sp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
sp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return qp(a,b,c)};
sp.prototype.delete=function(a){a=a===void 0?{}:a;return rp(this.name,a)};
function tp(a,b){return new Ho("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function up(a,b){if(!b)throw Mo("openWithToken",yo(a.name));return a.open()}
sp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",ya(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,G=c.options,J=[],ca=z(Object.keys(G.Fb)),da=ca.next();!da.done;da=ca.next()){da=da.value;var Ma=G.Fb[da],Kb=Ma.We===void 0?Number.MAX_VALUE:Ma.We;!(y.h.version>=Ma.Lb)||y.h.version>=Kb||y.h.objectStoreNames.contains(da)||J.push(da)}k=J;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Fb);
m=h.objectStoreNames();if(c.u<T("ytidb_reopen_db_retries",0))return c.u++,h.close(),vo(new Ho("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<T("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return vo(new Ho("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Io(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,tp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Lo(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw tp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,sf:b,upgrade:this.options.upgrade};return this.h=d=a()};var vp=new sp("YtIdbMeta",{Fb:{databases:{Lb:1}},upgrade:function(a,b){b(1)&&ap(a,"databases",{keyPath:"actualName"})}});
function wp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(up(vp,b),2);c=d.i;return d.return($o(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wo(f.h.put(a,void 0)).then(function(){})})}))})}
function xp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(up(vp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function yp(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(up(vp,b),2)):e.h!=3?(d=e.i,e.yield($o(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return jp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return kp(g)})}),3)):e.return(c)})}
function zp(a){return yp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Ap(a,b,c){return yp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Bp(a){var b,c;return B(function(d){if(d.h==1)return b=Dn("YtIdbMeta hasAnyMeta other"),d.yield(yp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Cp,Dp=new function(){}(new function(){});
function Ep(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=no();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zo)f=/WebKit\/([0-9]+)/.exec(Uc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Uc()),f=!(f&&parseInt(f[1],10)>=602));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(wp(d,Dp),4);case 4:return e.yield(xp("yt-idb-test-do-not-use",Dp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Fp(){if(Cp!==void 0)return Cp;qo=!0;return Cp=Ep().then(function(a){qo=!1;var b;if((b=mo())!=null&&b.h){var c;b={hasSucceededOnce:((c=no())==null?void 0:c.hasSucceededOnce)||a};var d;(d=mo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gp(){return F("ytglobal.idbToken_")||void 0}
function Hp(){var a=Gp();return a?Promise.resolve(a):Fp().then(function(b){(b=b?Dp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Ip=0;function Jp(a,b){Ip||(Ip=Lj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Hp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return h.yield(Ap(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(rp(f.actualName),7);case 7:return h.yield(xp(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),vo(g),d=!1;case 4:Lj.qa(Ip),Ip=0,d&&Jp(a,b),h.h=0}})}))}
function Kp(){var a;return B(function(b){return b.h==1?b.yield(Hp(),2):(a=b.i)?b.return(Bp(a)):b.return(!1)})}
new nj;function Lp(a){if(!Cn())throw a=new Ho("AUTH_INVALID",{dbName:a}),vo(a),a;var b=Dn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Mp(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Hp(),2);case 2:g=m.i;if(!g)throw h=Mo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vo(h),h;xo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Lp(a);ya(m,3);return m.yield(wp(k,g),5);case 5:return m.yield(qp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),ya(m,7),m.yield(xp(k.actualName,
g),9);case 9:za(m,8);break;case 7:Aa(m);case 8:throw l;}})}
function Np(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!1,c)}
function Op(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!0,c)}
function Pp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Hp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();xo(a);d=Lp(a);return e.yield(rp(d.actualName,b),3)}return e.yield(xp(d.actualName,c),0)})}
function Qp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(rp(d.actualName,b),2):e.yield(xp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Rp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();xo("LogsDatabaseV2");return d.yield(zp(b),3)}c=d.i;return d.yield(Qp(c,a,b),0)})}
function Sp(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();xo(a);return d.yield(rp(a,b),3)}return d.yield(xp(a,c),0)})}
;function Tp(a,b){sp.call(this,a,b);this.options=b;xo(a)}
w(Tp,sp);function Up(a,b){var c;return function(){c||(c=new Tp(a,b));return c}}
Tp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Op:Np)(a,b,Object.assign({},c))};
Tp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Sp:Pp)(this.name,a)};
function Vp(a,b){return Up(a,b)}
;var Wp={},Xp=Vp("ytGcfConfig",{Fb:(Wp.coldConfigStore={Lb:1},Wp.hotConfigStore={Lb:1},Wp),shared:!1,upgrade:function(a,b){b(1)&&(hp(ap(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),hp(ap(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Yp(a){return up(Xp(),a)}
function Zp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Yp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(cp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function $p(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Yp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(cp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function aq(a){var b,c;return B(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function bq(a){var b,c;return B(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function cq(){H.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(cq,H);cq.prototype.ba=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function dq(){this.h=0;this.i=new cq}
function eq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function fq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Gp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(bq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Zp(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function gq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Gp())?c?h.A(4):h.yield(aq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield($p(c,b,g,d),0)})}
function hq(){if(!dq.instance){var a=new dq;dq.instance=a}a=dq.instance;var b=V()-a.h;if(!(a.h!==0&&b<T("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
dq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function iq(){return"INNERTUBE_API_KEY"in am&&"INNERTUBE_API_VERSION"in am}
function jq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Ae:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ch:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ce:R("INNERTUBE_CONTEXT_HL"),Be:R("INNERTUBE_CONTEXT_GL"),De:R("INNERTUBE_HOST_OVERRIDE")||"",Ee:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Dh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function kq(a){var b={client:{hl:a.Ce,gl:a.Be,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ae}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Cm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=fn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=An())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=Bn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=hq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(om(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function lq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().sh:(a=jn(hn()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var mq=typeof TextEncoder!=="undefined"?new TextEncoder:null,nq=mq?function(a){return mq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var oq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},pq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function qq(a,b){this.version=a;this.args=b}
qq.prototype.serialize=function(){return{version:this.version,args:this.args}};function rq(a,b){this.topic=a;this.h=b}
rq.prototype.toString=function(){return this.topic};var sq=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ac;N.prototype.publish=N.prototype.qb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",sq);var tq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",tq);var uq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",uq);var vq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",vq);
E("ytPubsub2Pubsub2SkipSubKey",null);function wq(a,b){var c=xq();c&&c.publish.call(c,a.toString(),a,b)}
function yq(a){var b=zq,c=xq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(tq[d])try{if(f&&b instanceof rq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Qd){var l=new h;h.Qd=l.version}var m=h.Qd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){gm(y)}},vq[b.toString()]?F("yt.scheduler.instance")?Lj.pa(g):zm(g,0):g())});
tq[d]=!0;uq[b.toString()]||(uq[b.toString()]=[]);uq[b.toString()].push(d);return d}
function Aq(){var a=Bq,b=yq(function(c){a.apply(void 0,arguments);Cq(b)});
return b}
function Cq(a){var b=xq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete tq[c]}))}
function xq(){return F("ytPubsub2Pubsub2Instance")}
;function Dq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&wq("meta_logging_csi_event",{timerName:a,Vh:b})}
;var Eq=void 0,Fq=void 0;function Gq(){Fq||(Fq=Al(R("WORKER_SERIALIZATION_URL")));return Fq||void 0}
function Hq(){var a=Gq();Eq||a===void 0||(Eq=new Worker(kb(a),void 0));return Eq}
;var Iq=T("max_body_size_to_compress",5E5),Jq=T("min_body_size_to_compress",500),Kq=!0,Lq=0,Mq=0,Nq=T("compression_performance_threshold_lr",250),Oq=T("slow_compressions_before_abandon_count",4),Pq=!1,Qq=new Map,Rq=1,Sq=!0;function Tq(){if(typeof Worker==="function"&&Gq()&&!Pq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Qq.get(c.key);d&&(Uq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Qq.delete(c.key))}},b=Hq();
b&&(b.addEventListener("message",a),b.onerror=function(){Qq.clear()},Pq=!0)}}
function Vq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Kq)try{var g=Wq(b);if(g!=null&&(g>Iq||g<Jq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Sq||!S("initial_gzip_use_main_thread"))){Pq||Tq();var h=Hq();if(h&&!e){Qq.set(Rq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Rq});Rq++;return}}var k=yl(nq(b));Uq(k,f,a,c,d)}}catch(l){hm(l),d(a,c)}else d(a,c)}
function Uq(a,b,c,d,e){Sq=!1;var f=V();b.ticks.gelc=f;Mq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Nq&&(Lq++,S("abandon_compression_after_N_slow_zips")?Mq===T("compression_disable_point")&&Lq>Oq&&(Kq=!1):Kq=!1);Xq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Yq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Kq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Wq(g);if(h!=null&&(h>Iq||h<Jq))return a;c=b?{level:1}:void 0;f=yl(nq(g),c);var k=V();e.ticks.gelc=k;if(b){Mq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Nq)if(Lq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Lq/Mq;var l=Oq/T("compression_disable_point");Mq>0&&Mq%T("compression_disable_point")===0&&b>=l&&(Kq=!1)}else Kq=!1;Xq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return hm(m),a}}else return a}
function Wq(a){try{return(new Blob(a.split(""))).size}catch(b){return hm(b),null}}
function Xq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Dq("gel_compression",a,{sampleRate:.1})}
;function Zq(a){a=Object.assign({},a);delete a.Authorization;var b=dg();if(b){var c=new Pj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var $q;function ar(){$q||($q=new lo("yt.innertube"));return $q}
function br(a,b,c,d){if(d)return null;d=ar().get("nextId",!0)||1;var e=ar().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zq(c),requestTime:Math.round(V())};ar().set("nextId",d+1,86400,!0);ar().set("requests",e,86400,!0);return d}
function cr(a){var b=ar().get("requests",!0)||{};delete b[a];ar().set("requests",b,86400,!0)}
function dr(a){var b=ar().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Zq(lq(!1));rg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),er(a,d.method,e,{}));delete b[c]}}ar().set("requests",b,86400,!0)}}
;function fr(a){this.dc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.xb=function(){};
this.now=Date.now;this.Pb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.jc=!!a.jc;var h;this.hc=(h=a.hc)!=null?h:.1;var k;this.xc=(k=a.xc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.xb&&(this.xb=a.xb);a.Pb&&(this.Pb=a.Pb);a.dc&&(this.dc=a.dc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;gr(this)&&(!this.W||this.W("networkless_logging"))&&hr(this)}
function hr(a){gr(a)&&!a.Pb&&(a.h=!0,a.jc&&Math.random()<=a.hc&&a.ga.de(a.V),ir(a),a.fa.ta()&&a.Zb(),a.fa.listen(a.Wc,a.Zb.bind(a)),a.fa.listen(a.Tc,a.od.bind(a)))}
r=fr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&jr(c,d)}).catch(function(e){jr(c,d);
kr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){kr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
kr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.wb(d.id,c.V):e=!0;c.fa.kb&&c.W&&c.W("vss_network_hint")&&c.fa.kb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.wb(d.id,c.V)}).catch(function(g){kr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Zb=function(){var a=this;if(!gr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(jr(a,b),3):(a.od(),c.return());a.i&&(a.i=0,a.Zb());c.h=0})},this.Md))};
r.od=function(){this.Ca.qa(this.i);this.i=0};
function jr(a,b){var c;return B(function(d){switch(d.h){case 1:if(!gr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ie(b.id,a.V),3);case 3:(c=d.i)||a.xb(Error("The request cannot be found in the database."));case 2:if(lr(a,b,a.Fd)){d.A(4);break}a.xb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.wb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=mr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.wb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function mr(a,b){if(!gr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=nr(f);(h=or(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.xc)){m.A(2);break}if(!a.fa.Cc){m.A(3);break}return m.yield(a.fa.Cc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.xc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.wb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.Zb()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.wb(b.id,a.V),2);a.fa.kb&&a.W&&a.W("vss_network_hint")&&a.fa.kb(!0);d(e,f);h.h=0})};
return b}
function lr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ir(a){if(!gr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!lr(a,b,a.Ed)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);ir(a);c.h=0})}):a.fa.ta()&&a.Zb()})}
function kr(a,b){a.Td&&!a.fa.ta()?a.Td(b):a.handleError(b)}
function gr(a){return!!a.V||a.dc}
function nr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function or(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var pr;
function qr(){if(pr)return pr();var a={};pr=Vp("LogsDatabaseV2",{Fb:(a.LogsRequestsStore={Lb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ap(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),hp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return pr()}
;function rr(a){return up(qr(),a)}
function sr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(rr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(cp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();tr(c);return g.return(f)})}
function ur(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(rr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield($o(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return np(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=V();tr(c);return m.return(l)})}
function vr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(rr(b),2);c=d.i;return d.return($o(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function wr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(rr(b),2);e=f.i;return f.return($o(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Wo(h.h.put(k,void 0)).then(function(){return k})):Qo.resolve(void 0)})}))})}
function xr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(rr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function yr(a){var b,c;return B(function(d){if(d.h==1)return d.yield(rr(a),2);b=d.i;c=V()-2592E6;return d.yield($o(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function zr(){B(function(a){return a.yield(Rp(),0)})}
function tr(a){S("nwl_csi_killswitch")||Dq("networkless_performance",a,{sampleRate:1})}
;var Ar={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Br={},Cr=Vp("ServiceWorkerLogsDatabase",{Fb:(Br.SWHealthLog={Lb:1},Br),shared:!0,upgrade:function(a,b){b(1)&&hp(ap(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Dr(a){return up(Cr(),a)}
function Er(a){var b,c;B(function(d){if(d.h==1)return d.yield(Dr(a),2);b=d.i;c=V()-2592E6;return d.yield($o(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function Fr(a){var b;return B(function(c){if(c.h==1)return c.yield(Dr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Gr={},Hr=0;function Ir(a){var b=b===void 0?{}:b;var c=new Image,d=""+Hr++;Gr[d]=c;c.onload=c.onerror=function(){delete Gr[d]};
b.Rh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Jr;function Kr(){Jr||(Jr=new lo("yt.offline"));return Jr}
function Lr(a){if(S("offline_error_handling")){var b=Kr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Kr().set("errors",b,2592E3,!0)}}
;function Mr(){this.h=new Map;this.i=!1}
function Nr(){if(!Mr.instance){var a=F("yt.networkRequestMonitor.instance")||new Mr;E("yt.networkRequestMonitor.instance",a);Mr.instance=a}return Mr.instance}
Mr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Mr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Mr.prototype.removeParams=function(a){return a.split("?")[0]};
Mr.prototype.removeParams=Mr.prototype.removeParams;Mr.prototype.isEndpointCFR=Mr.prototype.isEndpointCFR;Mr.prototype.requestComplete=Mr.prototype.requestComplete;Mr.getInstance=Nr;function Or(){Uh.call(this);var a=this;this.j=!1;this.h=Kj();this.h.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Kr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;gm(d)}Kr().set("errors",{},2592E3,!0)}}})}
w(Or,Uh);function Pr(){if(!Or.instance){var a=F("yt.networkStatusManager.instance")||new Or;E("yt.networkStatusManager.instance",a);Or.instance=a}return Or.instance}
r=Or.prototype;r.ta=function(){return this.h.ta()};
r.kb=function(a){this.h.h=a};
r.xe=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.ne=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Cc=function(a){a=Ij(this.h,a);a.then(function(b){S("use_cfr_monitor")&&Nr().requestComplete("generate_204",b)});
return a};
Or.prototype.sendNetworkCheckRequest=Or.prototype.Cc;Or.prototype.listen=Or.prototype.listen;Or.prototype.enableErrorFlushing=Or.prototype.ne;Or.prototype.getWindowStatus=Or.prototype.xe;Or.prototype.networkStatusHint=Or.prototype.kb;Or.prototype.isNetworkAvailable=Or.prototype.ta;Or.getInstance=Pr;function Qr(a){a=a===void 0?{}:a;Uh.call(this);var b=this;this.h=this.u=0;this.j=Pr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Rr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Vh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Vh(b,"publicytnetworkstatus-offline")})))}
w(Qr,Uh);Qr.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Qr.prototype.kb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Qr.prototype.Cc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Nr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.kb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Rr(a,b){a.rateLimit?a.h?(Lj.qa(a.u),a.u=Lj.pa(function(){a.o!==b&&(Vh(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(Vh(a,b),a.o=b,a.h=V()):Vh(a,b)}
;var Sr;function Tr(){var a=fr.call;Sr||(Sr=new Qr({Ih:!0,zh:!0}));a.call(fr,this,{ga:{de:yr,wb:xr,td:ur,Ie:vr,Xc:wr,set:sr},fa:Sr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;hm(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else gm(b)},
xb:hm,sendFn:Ur,now:V,Td:Lr,Ca:ko(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",jc:!0,hc:.1,xc:T("potential_esf_error_limit",10),W:S,Pb:!(Cn()&&Vr())});this.j=new nj;S("networkless_immediately_drop_all_requests")&&zr();Sp("LogsDatabaseV2")}
w(Tr,fr);function Wr(){var a=F("yt.networklessRequestController.instance");a||(a=new Tr,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Hp().then(function(b){a.V=b;hr(a);a.j.resolve();a.jc&&Math.random()<=a.hc&&a.V&&Er(a.V);S("networkless_immediately_drop_sw_health_store")&&Xr(a)}));
return a}
Tr.prototype.writeThenSend=function(a,b){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.writeThenSend.call(this,a,b)};
Tr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.sendThenWrite.call(this,a,b,c)};
Tr.prototype.sendAndWrite=function(a,b){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.sendAndWrite.call(this,a,b)};
Tr.prototype.awaitInitialization=function(){return this.j.promise};
function Xr(a){var b;B(function(c){if(!a.V)throw b=Mo("clearSWHealthLogsDb"),b;return c.return(Fr(a.V).catch(function(d){a.handleError(d)}))})}
function Ur(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Zr(a,b);if(S("use_request_time_ms_header"))b.headers&&sm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Gm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Gm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new pc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,ke:k.i,ae:oc(k.j,"act=1","ri=1",qc(k))}:k.M&&{version:4,ke:oc(k.j,"dct=1","suid="+k.o,""),ae:oc(k.j,"act=1","ri=1","suid="+k.o)}){var l=ac(bc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(kc),p=jc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(G){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(G){}y=!1}c=y?!0:!1}else c=!1;c||Ir(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Vq(a,b.postBody,b,Km,d)):Vq(a,JSON.stringify(b.postParams),b,Jm,d):Km(a,b)}
function Yr(a,b){S("use_event_time_ms_header")&&sm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Zr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Nr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Nr().requestComplete(a,!0);d(e,f)}}
function Vr(){return cc(document.location.toString())!=="www.youtube-nocookie.com"}
;var $r=!1,as=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:$r};E("ytNetworklessLoggingInitializationOptions",as);function bs(){var a;B(function(b){if(b.h==1)return b.yield(Hp(),2);a=b.i;if(!a||!Cn()&&!S("nwl_init_require_datasync_id_killswitch")||!Vr())return b.A(0);$r=!0;as.isNwlInitialized=$r;return b.yield(Wr().awaitInitialization(),0)})}
;function cs(a){var b=this;this.config_=null;a?this.config_=a:iq()&&(this.config_=jq());Fn(function(){dr(b)},5E3)}
cs.prototype.isReady=function(){!this.config_&&iq()&&(this.config_=jq());return!!this.config_};
function er(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=br(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,J){cr(p);t(G,J)};
c.onFetchSuccess=function(G,J){cr(p);v(G,J)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Wr().writeThenSend(m,g):Wr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Vq(m,y,g,Km,x)}else Vq(m,JSON.stringify(g.postParams),g,Jm,x)}else S("web_all_payloads_via_jspb")?Km(m,g):Jm(m,g)}catch(G){if(G.name==="InvalidAccessError")p&&(cr(p),p=0),hm(Error("An extension is blocking network request."));else throw G;}p&&Fn(function(){dr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&hm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);gm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.De)&&(h=f);var k=a.config_.Ee||!1,l=lq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=qm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?as.isNwlInitialized:$r)?Fp().then(function(n){e(n)}):e(!1)}
;var ds=0,es=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++ds});var gs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ms(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
hs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ng=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ng);var ns=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",ns);
function ps(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&rg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function qs(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ps(a,b,c,d);if(e)return e;e=++ns.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hs(h);if(!Bg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hs(h);
h.currentTarget=a;return c.call(a,h)};
g=fm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),rs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ng[e]=[a,b,c,g,d];return e}
function ss(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in ng){var c=ng[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?rs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ng[b]}}))}
var rs=ji(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ts(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=qs(window,"mousemove",Xa(this.Y,this));a=Xa(this.P,this);typeof a==="function"&&(a=fm(a));this.Z=window.setInterval(a,25)}
bb(ts,H);ts.prototype.Y=function(a){a.h===void 0&&ms(a);var b=a.h;a.i===void 0&&ms(a);this.h=new jg(b,a.i)};
ts.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
ts.prototype.ba=function(){window.clearInterval(this.Z);ss(this.U)};var us={};
function vs(a){var b=a===void 0?{}:a;a=b.Te===void 0?!1:b.Te;b=b.oe===void 0?!0:b.oe;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&ws();qs(document,"keydown",ws);qs(document,"keyup",ws);qs(document,"mousedown",ws);qs(document,"mouseup",ws);a?qs(window,"touchmove",function(){xs("touchmove",200)},{passive:!0}):(qs(window,"resize",function(){xs("resize",200)}),b&&qs(window,"scroll",function(){xs("scroll",200)}));
new ts(function(){xs("mouse",100)});
qs(document,"touchstart",ws,{passive:!0});qs(document,"touchend",ws,{passive:!0})}}
function xs(a,b){us[a]||(us[a]=!0,Lj.pa(function(){ws();us[a]=!1},b))}
function ws(){F("_lact",window)==null&&vs();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ys(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var zs=D.ytPubsubPubsubInstance||new N,As=D.ytPubsubPubsubSubscribedKeys||{},Bs=D.ytPubsubPubsubTopicToKeys||{},Cs=D.ytPubsubPubsubIsSynchronous||{};function Ds(a,b){var c=Es();if(c&&b){var d=c.subscribe(a,function(){function e(){As[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Cs[a]?e():zm(e,0)}catch(g){gm(g)}},void 0);
As[d]=!0;Bs[a]||(Bs[a]=[]);Bs[a].push(d);return d}return 0}
function Fs(a){var b=Es();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete As[c]}))}
function Gs(a,b){var c=Es();c&&c.publish.apply(c,arguments)}
function Hs(a){var b=Es();if(b)if(b.clear(a),a)Is(a);else for(var c in Bs)Is(c)}
function Es(){return D.ytPubsubPubsubInstance}
function Is(a){Bs[a]&&(a=Bs[a],Nb(a,function(b){As[b]&&delete As[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ac;N.prototype.publish=N.prototype.qb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",zs);E("ytPubsubPubsubTopicToKeys",Bs);E("ytPubsubPubsubIsSynchronous",Cs);E("ytPubsubPubsubSubscribedKeys",As);var Js=Symbol("injectionDeps");function Ks(a){this.name=a}
Ks.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ls(a){this.key=a}
function Ms(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ns(a,b){a.i.set(b.zc,b);var c=a.j.get(b.zc);if(c)try{c.Qh(a.resolve(b.zc))}catch(d){c.Oh(d)}}
Ms.prototype.resolve=function(a){return a instanceof Ls?Os(this,a.key,[],!0):Os(this,a,[])};
function Os(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Pd!==void 0)var e=d.Pd;else if(d.Af)e=d[Js]?Ps(a,d[Js],c):[],e=d.Af.apply(d,A(e));else if(d.Od){e=d.Od;var f=e[Js]?Ps(a,e[Js],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Uh||a.h.set(b,e);return e}
function Ps(a,b,c){return b?b.map(function(d){return d instanceof Ls?Os(a,d.key,c,!0):Os(a,d,c)}):[]}
;var Qs;function Rs(){Qs||(Qs=new Ms);return Qs}
;var Ss=window;function Ts(){var a,b;return"h5vcc"in Ss&&((a=Ss.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ss.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ss&&Ss.performance.mark&&Ss.performance.measure?2:0}
function Us(a){var b=Ts();switch(b){case 1:Ss.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ss.performance.mark(a+"-start");break;case 0:break;default:yb(b,"unknown trace type")}}
function Vs(a){var b=Ts();switch(b){case 1:Ss.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ss.performance.mark(c);Ss.performance.measure(a,b,c);break;case 0:break;default:yb(b,"unknown trace type")}}
;var Ws=S("web_enable_lifecycle_monitoring")&&Ts()!==0,Xs=S("web_enable_lifecycle_monitoring");function Ys(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Zs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ko():d;this.j=c;this.scheduler=d;this.i=new nj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={wc:void 0,ib:a.ib},a.ib++)a.wc=this.h[a.ib],c=function(e){return function(){e.wc.Mc();b.h[e.ib].yc=!0;b.h.every(function(f){return f.yc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.wc),d=this.scheduler.Ra(c,d),this.h[a.ib]=Object.assign({},a.wc,{Mc:c,
jobId:d})}
function $s(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.yc||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Mc,10))}
Zs.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.yc||this.scheduler.qa(b.jobId),b.yc=!0;this.i.resolve()};
Zs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function at(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Ws&&Us(this.state)}
r=at.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Ws&&Vs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&($s(this.j),this.j=void 0);bt(this,a,b);this.state=a;Ws&&Us(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ct(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ct(a,b){var c=b.filter(function(e){return dt(a,e)===10}),d=b.filter(function(e){return dt(a,e)!==10});
return a.D.Th?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ze.apply(a,[c].concat(A(e))),2);a.Jd.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.af.apply(a,[c].concat(A(e)));a.Jd.apply(a,[d].concat(A(e)))}}
r.af=function(a){for(var b=C.apply(1,arguments),c=ko(),d=z(a),e=d.next(),f={};!e.done;f={Qb:void 0},e=d.next())f.Qb=e.value,c.Jb(function(g){return function(){et(g.Qb.name);ft(function(){return g.Qb.callback.apply(g.Qb,A(b))});
gt(g.Qb.name)}}(f))};
r.Ze=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=ko(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.cc=void 0;g=function(k){return function(){et(k.Xa.name);var l=ft(function(){return k.Xa.callback.apply(k.Xa,A(b))});
fe(l)?k.cc=S("web_lifecycle_error_handling_killswitch")?l.then(function(){gt(k.Xa.name)}):l.then(function(){gt(k.Xa.name)},function(m){Ys(m);
gt(k.Xa.name)}):gt(k.Xa.name)}}(f);
c.Jb(g);return f.cc?h.yield(f.cc,3):h.A(3)}f={Xa:void 0,cc:void 0};e=d.next();return h.A(2)})};
r.Jd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Mc:function(){et(e.name);ft(function(){return e.callback.apply(e,A(b))});
gt(e.name)},
priority:dt(c,e)}});
d.length&&(this.j=new Zs(d))};
function dt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function et(a){Ws&&a&&Us(a)}
function gt(a){Ws&&a&&Vs(a)}
function bt(a,b,c){Xs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(at.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ft(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ys(b)}}
;function ht(a){at.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var jt;w(ht,at);ht.prototype.i=function(a,b){var c=this;this.h=Fn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
ht.prototype.u=function(a,b){this.h&&(Lj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function kt(){jt||(jt=new ht);return jt}
;var lt=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return lt});function mt(){this.store={};this.h={}}
mt.prototype.storePayload=function(a,b){a=nt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
mt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ot(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
mt.prototype.extractMatchingEntries=function(a){a=ot(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
mt.prototype.getSequenceCount=function(a){a=ot(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ot(a,b){var c=nt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&nt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(pt(b.auth,g[0])){var h=b.isJspb;pt(h===void 0?"undefined":h?"true":"false",g[1])&&pt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),pt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function pt(a,b){return a===void 0||a==="undefined"?!0:a===b}
mt.prototype.getSequenceCount=mt.prototype.getSequenceCount;mt.prototype.extractMatchingEntries=mt.prototype.extractMatchingEntries;mt.prototype.smartExtractMatchingEntries=mt.prototype.smartExtractMatchingEntries;mt.prototype.storePayload=mt.prototype.storePayload;function nt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function qt(a,b){if(a)return a[b.name]}
;var rt=T("initial_gel_batch_timeout",2E3),st=T("gel_queue_timeout_max_ms",6E4),tt=T("gel_min_batch_size",5),ut=void 0;function vt(){this.o=this.h=this.i=0;this.j=!1}
var wt=new vt,xt=new vt,zt=new vt,At=new vt,Bt,Ct=!0,Dt=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Dt);var Et={};function Ft(){var a=F("yt.logging.ims");a||(a=new mt,E("yt.logging.ims",a));return a}
function Gt(a,b){if(a.endpoint==="log_event"){Ht();var c=It(a),d=Jt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Ar[d||""];var f,g,h,k=Rs().resolve(new Ls(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Kt(e.tier);if(k===400){Lt(a,b);return}}Et[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Ft().storePayload(c,a.payload);Mt(b,c,d==="gelDebuggingEvent")}}
function Mt(a,b,c){function d(){Nt({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(ut=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;var f=V(),g=Ot(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Ft().getSequenceCount(b));c>=1E3?d():c>=a?Bt||(Bt=Pt(function(){d();Bt=void 0},0)):f-h>=10&&(Qt(e,b.tier),g.o=f)}
function Lt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Ft().storePayload({isJspb:!1},a.payload);Ht();var c=It(a),d=new Map;d.set(c,[a.payload]);var e=Jt(a.payload)||"";b&&(ut=new b);return new ki(function(f,g){ut&&ut.isReady()?Rt(d,ut,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function It(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Dt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Nt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new ki(function(e,f){var g=Ot(c,d),h=g.j;g.j=!1;St(g.i);St(g.h);g.h=0;ut&&ut.isReady()?d===void 0&&S("enable_web_tiered_gel")?Tt(e,f,a,b,c,300,h):Tt(e,f,a,b,c,d,h):(Qt(c,d),e())})}
function Tt(a,b,c,d,e,f,g){var h=ut;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?Ft().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ft().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(Et)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Ft().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ft().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Et[l];Rt(k,h,a,b,c,!1,g)}
function Qt(a,b){function c(){Nt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Ot(a,b),e=d===At||d===zt?5E3:st;S("web_gel_timeout_cap")&&!d.h&&(e=Pt(function(){c()},e),d.h=e);
St(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Ct&&(e=rt);e=Pt(function(){T("gel_min_batch_size")>0?Ft().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=tt&&c():c()},e);
d.i=e}
function Rt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=tg({context:kq(b.config_||jq())});if(!Qa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Dt[m])&&
Ut(g.batchRequest,m,n);delete Dt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Vt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(p){S("start_client_gcf")&&Lj.pa(function(){return B(function(t){return t.yield(Wt(p),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(p){return function(){p.Sc++;if(e.bypassNetworkless&&p.Sc===1)try{er(b,l,p.batchRequest,Xt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Vc,p.Uc,f)),Ct=!1}catch(t){gm(t),d()}k--;k||c()}}(g);
try{er(b,l,g.batchRequest,Xt(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),Ct=!1}catch(p){gm(p),d()}}}
function Xt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,th:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Yt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Vt(a,b,c){Yt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),bm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ut(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ht(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=Bm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(lt=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",lt),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function Yt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Pt(a,b){return S("transport_use_scheduler")===!1?zm(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Fn(function(){if(kt().currentState==="none")a();else{var c={};kt().install((c.none={callback:a},c))}},b):Fn(a,b)}
function St(a){S("transport_use_scheduler")?Lj.qa(a):window.clearTimeout(a)}
function Wt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=qt(d,El),g=(f=d)==null?void 0:f.hotHashData,h=qt(d,Dl),l=(k=d)==null?void 0:k.coldHashData,(m=Rs().resolve(new Ls(dq)))?g?e?n.yield(fq(m,g,e),2):n.yield(fq(m,g),2):n.A(2):n.return()):l?h?n.yield(gq(m,l,h),0):n.yield(gq(m,l),0):n.A(0)})}
function Ot(a,b){b=b===void 0?200:b;return a?b===300?At:xt:b===300?zt:wt}
function Jt(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Ar[b])return b}
function Kt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Zt=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Zt);
function $t(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ys();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Zt[b]=b in Zt?Zt[b]+1:0,a.sequence={index:Zt[b],groupKey:b},d.endOfSequence&&delete Zt[d.sequenceGroup]);(d.sendIsolatedPayload?Lt:Gt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function uo(a,b,c){c=c===void 0?{}:c;var d=cs;R("ytLoggingEventsDefaultDisabled",!1)&&cs===cs&&(d=null);$t(a,b,d,c)}
;function au(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var bu=new Set,cu=0,du=0,eu=0,fu=[],gu=[],hu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function to(a){iu(a)}
function W(a){iu(a,"WARNING")}
function ju(a){a instanceof Error?iu(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",W(a))}
function iu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(cu>=5))){d=[];e=z(gu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(y){}}d=[].concat(A(fu),A(d));var k=Vb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=bn(a.args[p],"params."+p,c,n),n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=dn(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=dn(t)}if(d.length)for(p=0;p<d.length&&!(n=bn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Ym();c=z(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Jh)){a=d.weight;break a}a=z(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=z(Tm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.vc[p.name])for(e=z(c.vc[p.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Qc(f);break}p.params||(p.params={});a=Ym();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new wg(xg,"sample")).constructor!==
wg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);if(p.sampleWeight!==0&&!bu.has(p.message)){if(g&&S("web_enable_error_204"))ku(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Zm.qb("handleError",p),S("record_app_crashed_web")&&eu===0&&p.sampleWeight===1&&(eu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),uo("appCrashed",
g)),du++):b==="WARNING"&&Zm.qb("handleWarning",p);if(S("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=z(hu);for(c=a.next();!c.done;c=a.next())if(Ao(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!cm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(uo("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Nt(void 0,void 0,!1))}S("suppress_error_204_logging")||
ku(b,p)}try{bu.add(p.message)}catch(y){}cu++}}}
function ku(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Km(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function lu(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function mu(){this.register=new Map}
function nu(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Nh("ABORTED")}
mu.prototype.clear=function(){nu(this);this.register.clear()};
var ou=new mu;var pu=Date.now().toString();
function qu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(pu)for(a=1,b=0;b<pu.length;b++)d[a%16]^=d[(a-1)%16]/4^pu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ru,su=D.ytLoggingDocDocumentNonce_;su||(su=qu(),E("ytLoggingDocDocumentNonce_",su));ru=su;function tu(a){this.h=a}
r=tu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Gl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&pf(a,2,Fe(this.h.veType)),this.h.veCounter!==void 0&&pf(a,6,Fe(this.h.veCounter)),this.h.elementIndex!==void 0&&pf(a,3,Fe(this.h.elementIndex)),this.h.isCounterfactual&&pf(a,5,Be(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Af(a,Gl,7,b)}this.h.youtubeData!==void 0&&Af(a,Fl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function uu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function vu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},bm("client-screen-nonce-store",c));c[b]=a}
function wu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function xu(a){return R(wu(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",xu);function yu(){var a=R("csn-to-ctt-auth-info");a||(a={},bm("csn-to-ctt-auth-info",a));return a}
function zu(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Au(a){a=uu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Au);function Bu(a,b,c){var d=yu();(c=Au(c))&&delete d[c];b&&(d[a]=b)}
function Cu(a){return yu()[a]}
E("yt_logging_screen.getCttAuthInfo",Cu);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==uu(c)||b!==R(wu(c)))if(Bu(a,d,c),vu(a,c),bm(wu(c),b),b=function(){setTimeout(function(){a&&uo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ru,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Du(){var a=sg(Eu),b;return(new ki(function(c,d){a.onSuccess=function(e){ym(e)?c(new Fu(e)):d(new Gu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Gu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Gu("Request timed out","net.timeout",e))};
b=Km("//googleads.g.doubleclick.net/pagead/id",a)})).Dc(function(c){if(c instanceof ti){var d;
(d=b)==null||d.abort()}return pi(c)})}
function Gu(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Gu,cb);function Fu(a){this.xhr=a}
;function Hu(){this.X=0;this.h=null}
Hu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Iu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Ju(a):this};
Hu.prototype.getValue=function(){return this.h};
Hu.prototype.isRejected=function(){return this.X==2};
Hu.prototype.$goog_Thenable=!0;function Ju(a){var b=new Hu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Iu(a){var b=new Hu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Ku(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(dc(a)));return a}
function Lu(a){var b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=rm(a,b||{},!1)}
function Mu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:sm(a)?"same-origin":"cors",credentials:sm(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Nu(){return bg()||(kd||ld)&&Ao("applewebkit")&&!Ao("version")&&(!Ao("safari")||Ao("gsa/"))||jd&&Ao("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ou(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Pu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Kl)if(Kl[d]==c.embeddedPlayerMode){b=Kl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Qu(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ru;this.isTimeout=a instanceof Gu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ti}
w(Qu,cb);Qu.prototype.name="BiscottiError";function Ru(){cb.call(this,"Biscotti ID is missing from server")}
w(Ru,cb);Ru.prototype.name="BiscottiMissingError";var Eu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Su=null;function Tu(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Nu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(qg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Pu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Vl(){var a=Tu();if(a!==void 0)return pi(a);Su||(Su=Du().then(Uu).Dc(function(b){return Vu(2,b)}));
return Su}
function Uu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Ru;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Ru;a=a.id;Wl(a);Su=Iu(a);Wu(18E5,2);return a}
function Vu(a,b){b=new Qu(b);Wl("");Su=Ju(b);a>0&&Wu(12E4,a-1);throw b;}
function Wu(a,b){zm(function(){Du().then(Uu,function(c){return Vu(b,c)}).Dc(ii)},a)}
function Xu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Vl()}catch(b){return pi(b)}}
;var Hb=ra(["data-"]);function Yu(a){a&&(a.dataset?a.dataset[Zu()]="true":Ib(a))}
function $u(a){return a?a.dataset?a.dataset[Zu()]:a.getAttribute("data-loaded"):null}
var av={};function Zu(){return av.loaded||(av.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function bv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sg(b);this.assets=a.assets||{};this.attrs=a.attrs||sg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
bv.prototype.clone=function(){var a=new bv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=sg(c):a[b]=c}return a};var cv=["att/get"],dv=["share/get_share_panel"],ev=["share/get_web_player_share_panel"],fv=["feedback"],gv=["notification/modify_channel_preference"],hv=["browse/edit_playlist"],iv=["subscription/subscribe"],jv=["subscription/unsubscribe"];var kv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",kv);function lv(a){Xl(kv,arguments)}
;function mv(a,b,c){nv(a,b,c===void 0?null:c)}
function ov(a){a=pv(a);var b=document.getElementById(a);b&&(Hs(a),b.parentNode.removeChild(b))}
function qv(a,b){a&&b&&(a=""+Sa(b),(a=rv[a])&&Fs(a))}
function nv(a,b,c){c=c===void 0?null:c;var d=pv(a),e=document.getElementById(d),f=e&&$u(e),g=e&&!f;f?b&&b():(b&&(f=Ds(d,b),b=""+Sa(b),rv[b]=f),g||(e=sv(a,d,function(){$u(e)||(Yu(e),Gs(d),zm(function(){Hs(d)},0))},c)))}
function sv(a,b,c,d){d=d===void 0?null:d;var e=zg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Fb(e,Bl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function pv(a){var b=document.createElement("a");xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var rv={};function tv(a){var b=uv(a),c=document.getElementById(b),d=c&&$u(c);d||c&&!d||(c=vv(a,b,function(){if(!$u(c)){Yu(c);Gs(b);var e=Za(Hs,b);zm(e,0)}}))}
function vv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Bl(a);Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function uv(a){var b=zg("A");xb(b,new qb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function wv(a){var b=C.apply(1,arguments);if(!xv(a)||b.some(function(d){return!xv(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())yv(a,c.value)}
function yv(a,b){for(var c in b)if(xv(b[c])){if(c in a&&!xv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});yv(a[c],b[c])}else if(zv(b[c])){if(c in a&&!zv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Av(a[c],b[c])}else a[c]=b[c];return a}
function Av(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,xv(c)?a.push(yv({},c)):zv(c)?a.push(Av([],c)):a.push(c);return a}
function xv(a){return typeof a==="object"&&!Array.isArray(a)}
function zv(a){return typeof a==="object"&&Array.isArray(a)}
;var Bv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Cv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),xb(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Au()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Dv(a,b,f)}else Dv(a,b)}
function Dv(a,b,c){a=Ev(a);b=b?hc(b):"";c=c||5;Nu()&&ln(a,b,c)}
function Ev(a){for(var b=z(Bv),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Zb(a).toString(36)}
;function Fv(a){qq.call(this,1,arguments);this.csn=a}
w(Fv,qq);var zq=new rq("screen-created",Fv),Gv=[],Hv=0,Iv=new Map,Jv=new Map,Kv=new Map;
function Lv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Mv({cttAuthInfo:Cu(b)||void 0},b),g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(og(k)||!k.trackingParams&&!k.veType)&&W(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Nv(h,b);if(k.veType&&!Jv.has(l)&&!Kv.has(l)&&!e){if(!S("il_attach_cache_limit")||Iv.size<1E3){Iv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&Iv.size>1E3&&W(new U("IL Attach cache exceeded limit"))}h=Nv(c,b);Iv.has(h)?
Ov(c,b):Kv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Pv("visualElementAttached",f,c):a?$t("visualElementAttached",c,a,f):uo("visualElementAttached",c,f)}
function Pv(a,b,c){Gv.push({Se:a,payload:c,Fh:void 0,options:b});Hv||(Hv=Aq())}
function Bq(a){if(Gv){for(var b=z(Gv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,uo(c.Se,c.payload,c.options));Gv.length=0}Hv=0}
function Nv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Ov(a,b){a=Nv(a,b);Iv.has(a)&&(b=Iv.get(a)||[],Lv(b[0],b[1],b[2],[b[3]],!0),Iv.delete(a))}
function Mv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Qv(){try{return!!self.localStorage}catch(a){return!1}}
;function Rv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Sv(a){if(Qv()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Rv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Tv(){if(!Qv())return!1;var a=Dn(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Rv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Uv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Vv(a){if(R("LOGGED_IN",!0)&&Uv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=dc(a),(b=ec(b))?(b=Ev(b),b=(b=mn(b)||null)?om(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Uv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Cv(a,b)}}
;function Wv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Cv(a,b);if(c)return!1;Vv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=ic(a,e);Vv(b);a=void 0;a=a===void 0?ub:a;a:if(f=b+f,a=a===void 0?ub:a,!(f instanceof qb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof sb&&c.Ge(f)){f=new qb(f);break a}f=void 0}g=g.location;f=wb(f||rb);f!==void 0&&(g.href=f);return!0}
;function Xv(a){if(qg(R("PLAYER_VARS",{}))!="1"){a&&Ul();try{Xu().then(function(){},function(){}),zm(Xv,18E5)}catch(b){gm(b)}}}
;var Yv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Zv(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=ac(bc(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=pm(a).theme;return Yv.get(c)||null}catch(d){}return null}
;function $v(){this.h={};if(this.i=on()){var a=mn("CONSISTENCY");a&&aw(this,{encryptedTokenJarContents:a})}}
$v.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];aw(this,a)}};
function aw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&ln("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var bw=window.location.hostname.split(".").slice(-2).join(".");function cw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=dw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ew;function fw(){ew=F("yt.clientLocationService.instance");ew||(ew=new cw,E("yt.clientLocationService.instance",ew));return ew}
r=cw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=dw(this))&&this.h.set("yt-location-playability-token",a,15552E3):ln("YT_CL",JSON.stringify({loctok:a}),15552E3,bw,!0))};
function dw(a){return a.h===void 0?new lo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=dw(this))&&this.h.remove("yt-location-playability-token"):nn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function gw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return iu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=tg(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;sn();var g="USER_INTERFACE_THEME_LIGHT";vn(165)?g="USER_INTERFACE_THEME_DARK":vn(174)?g="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Zv()||g;e.userInterfaceTheme=f;if(!b){if(f=An())e.connectionType=f;S("web_log_effective_connection_type")&&(f=Bn())&&(d.client.effectiveConnectionType=f)}var h;if(S("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}S("web_gcf_hashes_innertube")&&(f=hq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=pm(D.location.href);!S("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},S("kevlar_woffle")&&en.instance&&(k=en.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
fn(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Ma){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Cm();$v.instance||($v.instance=new $v);e=$v.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!S("web_prequest_context_killswitch")&&(m=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=sn();m=vn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?c&&(b=Au())&&(d.clientScreenNonce=b):!b&&(b=Au())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;fw().setLocationOnInnerTubeContext(d);try{var n=tm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=z(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=z(v.value),y=x.next().value,G=x.next().value;n=y;p=G;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+p})}var J,ca;if(((J=d.client)==null?void 0:J.clientName)==="TVHTML5"||((ca=d.client)==null?void 0:ca.clientName)==="TVHTML5_UNPLUGGED"){var da=R("INNERTUBE_CONTEXT");da.adSignalsInfo&&(d.adSignalsInfo.advertisingId=da.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=da.adSignalsInfo.limitAdTracking)}}catch(Ma){iu(Ma)}return d}
;function hw(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function iw(){this.h={}}
iw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
iw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
iw.prototype.set=function(a,b){this.h[a]=b};
iw.prototype.remove=function(a){delete this.h[a]};function jw(){this.mappings=new iw}
jw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
jw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=yb(b)}}return a};
new jw;function kw(a){return function(){return new a}}
;var lw={},mw=(lw.WEB_UNPLUGGED="^unplugged/",lw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",lw.WEB_UNPLUGGED_OPS="^unplugged/",lw.WEB_UNPLUGGED_PUBLIC="^unplugged/",lw.WEB_CREATOR="^creator/",lw.WEB_KIDS="^kids/",lw.WEB_EXPERIMENTS="^experiments/",lw.WEB_MUSIC="^music/",lw.WEB_REMIX="^music/",lw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",lw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",lw);
function nw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=mw[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(mw).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function ow(){}
ow.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?kn:c;var d={context:gw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+nw(this.j());(e=(f=qt(a.commandMetadata,Il))==null?void 0:f.apiUrl)&&(b=e);f=Lu(Ku(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Mu(f),Ga:d,config:a};d.config.Mb?d.config.Mb.identity=c:d.config.Mb={identity:c};return d}iu(new U("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(ow.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function pw(){}
w(pw,ow);function qw(){}
w(qw,pw);qw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Mu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
qw.prototype.j=function(){return[]};
qw.prototype.i=function(){};
qw.prototype.h=function(){};var rw={},sw=(rw.GET_DATASYNC_IDS=kw(qw),rw);function tw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function uw(){var a=tw();a.info||(a.info={});return a.info}
function vw(a){a=tw(a);a.metadata||(a.metadata={});return a.metadata}
function ww(a){a=tw(a);a.tick||(a.tick={});return a.tick}
function xw(a){a=tw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function yw(a){a=xw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function zw(a){var b=tw(a).nonce;b||(b=qu(),tw(a).nonce=b);return b}
;function Aw(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Bw(a){a=a||"";var b=F("ytcsi.reference");b||(Aw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Aw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Cw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);function Dw(a,b){qq.call(this,1,arguments);this.timer=b}
w(Dw,qq);var Ew=new rq("aft-recorded",Dw);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Fw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Fw);function Gw(){this.h=0}
function Hw(){Gw.instance||(Gw.instance=new Gw);return Gw.instance}
Gw.prototype.tick=function(a,b,c,d){Iw(this,"tick_"+a+"_"+b)||uo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Gw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Iw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,uo("latencyActionInfo",a,{cttAuthInfo:c}))};
Gw.prototype.jspbInfo=function(){};
Gw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Iw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,uo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Iw(a,b){Fw[b]=Fw[b]||{count:0};var c=Fw[b];c.count++;c.time=V();a.h||(a.h=Fn(function(){var d=V(),e;for(e in Fw)Fw[e]&&d-Fw[e].time>6E4&&delete Fw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||W(c)),!0):!1}
;var Jw=window;function Kw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Lw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Mw(e.requestStart),e.responseEnd=Mw(e.responseEnd),e.redirectStart=Mw(e.redirectStart),e.redirectEnd=Mw(e.redirectEnd),e.domainLookupEnd=Mw(e.domainLookupEnd),e.connectStart=Mw(e.connectStart),e.connectEnd=
Mw(e.connectEnd),e.responseStart=Mw(e.responseStart),e.secureConnectionStart=Mw(e.secureConnectionStart),e.domainLookupStart=Mw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Mw(a){return Math.round(Nw()+a)}
function Nw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Jw.performance||Jw.mozPerformance||Jw.msPerformance||Jw.webkitPerformance||new Kw;var Ow=!1,Pw=!1,Qw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ii,Y);function Rw(a,b){if(!S("web_csi_action_sampling_enabled")||!tw(b).actionDisabled){var c=Bw(b||"");wv(c.info,a);a.loadType&&(c=a.loadType,vw(b).loadType=c);wv(yw(b),a);c=zw(b);b=tw(b).cttAuthInfo;Hw().info(a,c,b)}}
function Sw(){var a,b,c,d;return((d=Rs().resolve(new Ls(dq))==null?void 0:(a=eq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!tw(c).actionDisabled){var d=zw(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Rs().resolve(new Ls(dq))==null?0:eq())&&!Pw&&(Pw=!0,Z("gcfl",V(),c));var f,g,h;e=(Rs().resolve(new Ls(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Sw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;tw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Rw(f,c));tw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Bw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=xw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=ww(c);e=b||V();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=tw(c).cttAuthInfo;a==="_start"?(a=Hw(),Iw(a,"baseline_"+d)||uo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Hw().tick(a,d,b,f);Tw(c);return e}}}
function Uw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=es+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Vw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Ww(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Ab(document)&&a.setAttribute("nonce",Ab(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Nw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Xw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Mw(b.startTime)),Z("wffe",Mw(b.responseEnd)))}
function Yw(a){var b=Zw("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Zw(b[d],a);if(e)return e}return NaN}
function Zw(a,b){if(a=ww(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Tw(a){var b=Zw("_start",a),c=Yw(a),d=S("enable_cow_info_csi")||!Ow;b&&c&&d&&(wq(Ew,new Dw(Math.round(c-b),a)),Ow=!0)}
function $w(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Rb(a,function(c){return c.name==="first-paint"}))return Mw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Lh;return b?Math.max(0,b):0}
;function ax(a,b){fm(function(){Bw("").info.actionType=a;b&&bm("TIMING_AFT_KEYS",b);bm("TIMING_ACTION",a);var c=Vw();Object.keys(c).length>0&&Rw(c);c={isNavigation:!0,actionType:Cw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Cw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Au())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Uw();if(d===1||d===-1)c.isVisible=!0;vw();uw();
c.loadType="cold";d=uw();var e=Lw(),f=Nw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=$w();d>0&&Z("fpt",d);d=Lw();d.isPerformanceNavigationTiming&&Rw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Nw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Xw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Qw)Qw.hasOwnProperty(h)&&(e=Qw[h],
Ww(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Rw(c);c=xw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=yw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(vw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=ww();e=xw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Zw(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,wv(c,d),wv(k,d),d=!0;d&&Rw(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&bx()&&Yw()&&Tw()})()}
function bx(a){return fm(function(){return cx("_start",a)})()}
function dx(a,b,c){fm(Rw)(a,b,c===void 0?!1:c)}
function ex(a,b,c){return fm(Z)(a,b,c)}
function cx(a,b){return fm(function(){var c=ww(b);return a in c})()}
function fx(a){if(!S("universal_csi_network_ticks"))return"";a=ac(bc(5,a))||"";for(var b=Object.keys(oq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function gx(a){if(!S("universal_csi_network_ticks"))return function(){};
var b=oq[a];return b?(hx(b),function(){var c=S("universal_csi_network_ticks")?(c=pq[a])?hx(c):!1:!1;return c}):function(){}}
function hx(a){return fm(function(){if(cx(a))return!1;ex(a,void 0,void 0);return!0})()}
function ix(a){fm(function(){if(!bx("attestation_challenge_fetch")||cx(a,"attestation_challenge_fetch"))return!1;ex(a,void 0,"attestation_challenge_fetch");return!0})()}
function jx(){fm(function(){var a=zw();requestAnimationFrame(function(){setTimeout(function(){a===zw()&&ex("ol",void 0,void 0)},0)})})()}
var kx=window;kx.ytcsi&&(kx.ytcsi.infoGel=dx,kx.ytcsi.tick=ex);function lx(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(lx,U);var mx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),nx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ox(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Xb||(a.Xb={});a.Xb=Object.assign({},sw,a.Xb)}
function px(a,b,c,d){if(ox.instance!==void 0){if(d=ox.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else ox.instance=new ox(a,b,c,d)}
function qx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?kn:c;var d=rx(a,b);return d?new ki(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}Vv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=sx(h.config,l);n.A(4);break}return n.yield(tx(h.config,l),5);case 5:m=n.i;case 4:e(ux(a,h,m)),n.h=
0}})}):pi(new U("Error: No request builder found for command.",b))}
function vx(a,b){function c(){}
var d="/youtubei/v1/"+nw(cv);var e=e===void 0?{Mb:{identity:kn}}:e;var f=f===void 0?!0:f;c=gx(fx(d));b.context||(b.context=gw(void 0,f));return new ki(function(g){var h,k,l,m,n;return B(function(p){if(p.h==1)return h=Ku(d),k=sm(h)?"same-origin":"cors",a.j.Ld?(l=sx(e,k),p.A(2)):p.yield(tx(e,k),3);p.h!=2&&(l=p.i);m=Lu(Ku(d));n={input:m,Za:Mu(m),Ga:b,config:e};g(ux(a,n,l,c));p.h=0})})}
function wx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=z(mx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function ux(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,y,G,J,ca,da,Ma,Kb,ja,Ya,Oa,Pa,Na,eh,fh,is,js,ks,ls;return B(function(ia){switch(ia.h){case 1:ia.A(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ia.A(4);break}h=b.Ga.context;ia.A(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){ia.A(4);break}m=l.value;return ia.yield(m.Mh(h),9);case 9:l=k.next();ia.A(8);break;case 4:if((n=a.i)==null||!n.Sh(b.input,b.Ga)){ia.A(12);break}return ia.yield(a.i.Hh(b.input,
b.Ga),13);case 13:return p=ia.i,wx(a,p,b),ia.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Ph)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ga),ca=(J=(G=b.Za)==null?void 0:G.headers)!=null?J:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},ca,c)}),da=Object.assign({},b.Za),b.Za.method==="POST"&&(da=Object.assign({},da,{body:y})),((Ma=b.config)==null?0:Ma.Xe)&&ex(b.config.Xe),Kb=function(){return a.fa.fetch(b.input,da,b.config)},t=Kb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ja=ia.i)&&"error"in ja&&((Ya=ja)==null?0:(Oa=Ya.error)==null?0:Oa.details))for(Pa=ja.error.details,Na=z(Pa),eh=Na.next();!eh.done;eh=Na.next())fh=eh.value,(is=fh["@type"])&&nx.indexOf(is)>-1&&(delete fh["@type"],ja=fh);x&&a.h.has(x)&&a.h.delete(x);((js=b.config)==null?0:js.Ye)&&ex(b.config.Ye);if(ja||(ks=a.i)==null||!ks.vh(b.input,b.Ga)){ia.A(15);break}return ia.yield(a.i.Gh(b.input,b.Ga),16);case 16:ja=ia.i;case 15:return wx(a,ja,b),((ls=b.config)==null?0:ls.Ue)&&ex(b.config.Ue),d(),
ia.return(ja||void 0)}})}
function rx(a,b){a:{a=a.u;var c,d=(c=qt(b,Jl))==null?void 0:c.signal;if(d&&a.Xb&&(c=a.Xb[d])){var e=c();break a}var f;if((c=(f=qt(b,Hl))==null?void 0:f.request)&&a.he&&(f=a.he[c])){e=f();break a}for(e in b)if(a.pd[e]&&(b=a.pd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function tx(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Mb)==null?void 0:d.sessionIndex;var h=g.yield;var k=jn(0,{sessionIndex:e});if(!(k instanceof ki)){var l=new ki(ii);li(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},hw(b),f)))})}
function sx(a,b){var c;a=a==null?void 0:(c=a.Mb)==null?void 0:c.sessionIndex;c=jn(0,{sessionIndex:a});return Object.assign({},hw(b),c)}
;var xx=new Ks("INNERTUBE_TRANSPORT_TOKEN");function yx(){}
w(yx,pw);yx.prototype.j=function(){return iv};
yx.prototype.i=function(a){return qt(a,Tl)||void 0};
yx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(yx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zx(){}
w(zx,pw);zx.prototype.j=function(){return jv};
zx.prototype.i=function(a){return qt(a,Sl)||void 0};
zx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(zx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Ax=new Ks("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Bx(a){this.M=a}
w(Bx,pw);Bx.prototype.j=function(){return dv};
Bx.prototype.i=function(a){return qt(a,Nl)||qt(a,Ol)||qt(a,Ml)};
Bx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Bx[Js]=[Ax];function Cx(){}
w(Cx,pw);Cx.prototype.j=function(){return fv};
Cx.prototype.i=function(a){return qt(a,Ll)||void 0};
Cx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Cx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Dx(){}
w(Dx,pw);Dx.prototype.j=function(){return gv};
Dx.prototype.i=function(a){return qt(a,Rl)||void 0};
Dx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ex(){}
w(Ex,pw);Ex.prototype.j=function(){return hv};
Ex.prototype.i=function(a){return qt(a,Ql)||void 0};
Ex.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Fx(){}
w(Fx,pw);Fx.prototype.j=function(){return ev};
Fx.prototype.i=function(a){return qt(a,Pl)};
Fx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Gx=new Ks("FETCH_FN_TOKEN"),Hx=new Ks("PARSE_FN_TOKEN");var Ix=new Ks("NETWORK_SLI_TOKEN");function Jx(a,b,c){this.h=a;this.i=b;this.j=c}
Jx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Kx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){W(k);
if((c==null?0:c.re)&&k instanceof lx&&k.errorType===1)return Promise.reject(k)}))})};
function Kx(a,b,c){if(a.h){var d=ac(bc(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=Yq(c));return new window.Request(b,a)}
Jx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.He)&&a.ok)return If(b.He,e);e=e.replace(")]}'","");if((b==null?0:b.re)&&e)try{var f=d(e)}catch(h){throw new lx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Bh(),c=c.then(function(e){W(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Jx[Js]=[new Ls(Ix),new Ls(Gx),new Ls(Hx)];var Lx=new Ks("NETWORK_MANAGER_TOKEN");var Mx;function Nx(){var a,b;if(!Mx){var c=Rs();Ns(c,{zc:Lx,Od:Jx});var d={pd:{feedbackEndpoint:kw(Cx),modifyChannelNotificationPreferenceEndpoint:kw(Dx),playlistEditEndpoint:kw(Ex),shareEntityEndpoint:kw(Bx),subscribeEndpoint:kw(yx),unsubscribeEndpoint:kw(zx),webPlayerShareEntityServiceEndpoint:kw(Fx)}},e=fw(),f={};e&&(f.client_location=e);a===void 0&&(a=hn());b===void 0&&(b=c.resolve(Lx));px(d,b,a,f);Ns(c,{zc:xx,Pd:ox.instance});Mx=c.resolve(xx)}return Mx}
;function Ox(a){var b=new jj;if(a.interpreterJavascript){var c=zl(a.interpreterJavascript);c=Db(c).toString();var d=new hj;Ff(d,6,c);Af(b,hj,1,d)}else a.interpreterUrl&&(c=Al(a.interpreterUrl),c=kb(c).toString(),d=new ij,Ff(d,4,c),Af(b,ij,2,d));a.interpreterHash&&Gf(b,3,a.interpreterHash);a.program&&Gf(b,4,a.program);a.globalName&&Gf(b,5,a.globalName);a.clientExperimentsStateBlob&&Gf(b,7,a.clientExperimentsStateBlob);return b}
function Px(a){var b={};a=z(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function wc(){if(S("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Qx(a){this.h=a}
Qx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Qx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Qx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Rx(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Qx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Qx(c))}))})}
;var Sx=[],Tx=!1;function Ux(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Nu()){var a=R("PLAYER_VARS",{});if(qg(a)!="1"&&!Pu(a)){var b=function(){Tx=!0;"google_ad_status"in window?bm("DCLKSTAT",1):bm("DCLKSTAT",2)};
try{mv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Sx.push(Lj.pa(function(){if(!(Tx||"google_ad_status"in window)){try{qv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tx=!0;bm("DCLKSTAT",3)}},5E3))}}}
function Vx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Wx(a){this.h=a}
[new Wx("b.f_"),new Wx("j.s_"),new Wx("r.s_"),new Wx("e.h_"),new Wx("i.s_"),new Wx("s.t_"),new Wx("p.h_"),new Wx("s.i_"),new Wx("f.i_"),new Wx("a.b_"),new Wx("a.o_"),new Wx("g.o_"),new Wx("p.i_"),new Wx("p.m_"),new Wx("i.k_"),new Wx("n.k_"),new Wx("i.f_"),new Wx("a.s_"),new Wx("m.c_"),new Wx("n.h_"),new Wx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Xx(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.Xh){var e=new nj;this.h=e.promise;D.ytAtRC&&Lj.Ra(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Yx(null);return h.yield(d.gb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Rx().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.gb(Yx(n))}),m.yield(vc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,eb:Px(k),vm:g,bgChallenge:new jj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,eb:Px(n),vm:g,bgChallenge:new jj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&Zx(this,new Promise(function(f){Fn(function(){f($x(d))},0)}))}
Xx.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Xx.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&Zx(d,$x(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.eb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);ya(n,4);e=!0;if(S("attbs")&&!S("attmusi")){m=k.vm.ed({vb:l});n.A(6);break}return n.yield(k.vm.snapshot({vb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";za(n,3);break;case 4:Aa(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.eb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Vx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),ay(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Yx(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function $x(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:c=Yx(sj().h);if(S("att_fet_ks"))return ya(v,7),v.yield(a.gb(c),9);ya(v,4);return v.yield(by(a,c),6);case 6:g=v.i;e=g.Pe;f=g.Qe;d=g;za(v,3);break;case 4:return Aa(v),W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),cy(a,864E5),v.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Px(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");za(v,3);break;case 7:h=Aa(v);W(h);b++;if(b>=5)return W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),cy(a,864E5),v.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){Fn(function(){x($x(a,
b))},k)}));
case 3:l=Number(f.t)||7200;cy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Ox(d.bgChallenge);ya(v,11);return v.yield(tj(sj(),n),13);case 13:za(v,12);break;case 11:return p=Aa(v),W(p),v.return({challenge:e,eb:f,vm:m,bgChallenge:n});case 12:return ya(v,14),m=new pj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:za(v,10);break;case 14:t=Aa(v),W(t),m=void 0;case 10:return v.return({challenge:e,eb:f,vm:m,bgChallenge:n})}})}
Xx.prototype.gb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.gb(a));ix("att_pna");return d.return(new Promise(function(e){Qh(c,"publicytnetworkstatus-online",function(){b.network.gb(a).then(e)})}))})};
function dy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Px(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Pe:b,Qe:c})}
function by(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.md=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Fn(function(){l(void 0)},k.md)}}(e)),5);
case 5:return ya(h,7),h.yield(a.gb(b),9);case 9:return f=h.i,h.return(dy(f));case 7:c=g=Aa(h),g instanceof Error&&W(g);case 8:d++;e={md:void 0};h.A(2);break;case 4:throw c;}})}
function Zx(a,b){a.h=b}
function ey(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=$x(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function cy(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(ey(a),0):(Fn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function ay(a,b){return new Promise(function(c){Fn(function(){c(b())},a)})}
;function fy(){this.h=Nx()}
fy.prototype.gb=function(a){ix("att_fsr");return vx(this.h,a).then(function(b){ix("att_frr");return b})};function gy(){var a,b,c;return B(function(d){if(d.h==1)return a=Rs().resolve(xx),a?d.yield(qx(a),2):(W(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return W(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.yh;return d.return(c)}W(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function hy(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var iy=D.caches,jy;function ky(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ly(){return B(function(a){if(jy!==void 0)return a.return(jy);jy=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return ya(d,2),d.yield(iy.open("test-only"),4);case 4:return d.yield(iy.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(jy)})}
function my(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(ly(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(iy.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ky(f),h=g.datasyncId,!h||a.includes(h)||b.push(iy.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function ny(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(ly(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Dn("cache contains other");return h.yield(iy.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ky(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function oy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function py(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function qy(a){if(oy()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=py(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function ry(){if(!oy())return!1;var a=Dn(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=py(c.value),c!==void 0&&c!==a)return!0;return!1}
;function sy(){gy().then(function(a){a&&(Jp(a),my(a),Sv(a),qy(a))})}
function ty(){var a=new Qr;Lj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Dn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Jp(h);my(h);Sv(h);qy(h);return g.return()}c=Tv();d=ry();return g.yield(ny(),3);case 3:return e=g.i,g.yield(Kp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?sy():Qh(a,"publicytnetworkstatus-online",sy),g.h=0}})})}
;var uy=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function vy(){this.state=1;this.vm=null;this.h=void 0}
r=vy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=zl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Al(a.interpreterSafeUrl).toString());wy(this,e,d,a.program,b,c)}else W(Error("Cannot initialize botguard without program"))};
function wy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,mv(c,function(){window[g]?xy(a,d,g,e):(a.state=3,ov(c),W(new U("Unable to load Botguard","from "+c)))},f)):b?(f=zg("SCRIPT"),b instanceof Bb?(f.textContent=Db(b),Eb(f)):f.textContent=b,f.nonce=Ab(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?xy(a,d,g,e):(a.state=4,W(new U("Unable to load Botguard from JS")))):W(new U("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function xy(a,b,c,d){a.state=5;var e=!!a.h&&uy.includes(cc(a.h)||"");try{var f=new pj({program:b,globalName:c,zd:{disable:!S("att_web_record_metrics")||!S("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&W(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.hd()?this.Rd({vb:a}):null};
r.dispose=function(){this.Yc(null);this.state=8};
r.hd=function(){return!!this.vm};
r.Rd=function(a){return this.vm.ed(a)};
r.Yc=function(a){sc(this.vm);this.vm=a};function yy(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function zy(){vy.apply(this,arguments)}
w(zy,vy);zy.prototype.Yc=function(a){var b;(b=yy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
zy.prototype.hd=function(){return!!yy()};
zy.prototype.Rd=function(a){return yy().bgvmc(a)};function Ay(a){at.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ay,at);Ay.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ay.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ay.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Ay.prototype.i=function(){this.h=new Map};function By(a){at.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(By,at);By.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
By.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
By.prototype.u=function(a,b){a(b==null?void 0:b.event)};
By.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Cy(){this.o=new Ay;this.u=new By}
Cy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Dy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Dy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Au(c===void 0?0:c)){a=this.client;d=new tu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Nv(d,c);Jv.set(f,!0);Ov(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Mv({cttAuthInfo:Cu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Pv("visualElementGestured",f,d):a?$t("visualElementGestured",d,a,f):uo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Dy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new tu({trackingParams:a}),b,c===void 0?0:c)};
Dy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Au(d);a||(a=(a=xu(d===void 0?0:d))?new tu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Mv({cttAuthInfo:Cu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Pv("visualElementStateChanged",d,b):a?$t("visualElementStateChanged",b,a,d):uo("visualElementStateChanged",b,d))}};
function Ey(a,b){if(b===void 0)for(var c=zu(),d=0;d<c.length;d++)c[d]!==void 0&&Ey(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Lv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Fy(){Cy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||Fn(Gy)}
w(Fy,Cy);Fy.prototype.j=function(){uo("finalPayload",{csn:Au()})};
Fy.prototype.h=function(){nu(ou)};
Fy.prototype.i=function(){var a=Ey;Dy.instance||(Dy.instance=new Dy);a(Dy.instance)};
function Gy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=de();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&uo("genericClientExperimentEvent",{eventType:c});delete am.CLIENT_EXPERIMENT_EVENTS}}
;function Hy(){}
function Iy(){var a=F("ytglobal.storage_");a||(a=new Hy,E("ytglobal.storage_",a));return a}
Hy.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Jy()):d.return()})};
function Jy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Hy);function so(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
so.prototype.Ha=function(a){this.handleError(a)};
so.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ky(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ky(a,b){Iy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Ly(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Ly(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Ly(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var My={},Ny=(My["api.invalidparam"]=2,My.auth=150,My["drm.auth"]=150,My["heartbeat.net"]=150,My["heartbeat.servererror"]=150,My["heartbeat.stop"]=150,My["html5.unsupportedads"]=5,My["fmt.noneavailable"]=5,My["fmt.decode"]=5,My["fmt.unplayable"]=5,My["html5.missingapi"]=5,My["html5.unsupportedlive"]=5,My["drm.unavailable"]=5,My["mrm.blocked"]=151,My["embedder.identity.denied"]=152,My);var Oy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Py(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Qy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(Oy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Ry(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Sy(a){H.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Ty(b));b.sendMessage("onReady");e=z(b.D);for(d=e.next();!d.done;d=e.next())Uy(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Vy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Py(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Qy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Qy(g);break;case "loadPlaylist":case "cuePlaylist":g=Ry(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Py(e)&&Wy(b,Ty(b))}}}};
Xy.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;Yy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Ny[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Yy(this,"onVideoProgress",this.kf.bind(this));Yy(this,"onVolumeChange",this.lf.bind(this));Yy(this,"onApiChange",this.cf.bind(this));Yy(this,"onPlaybackQualityChange",this.gf.bind(this));Yy(this,"onPlaybackRateChange",this.hf.bind(this));Yy(this,"onStateChange",this.jf.bind(this));Yy(this,"onWebglSettingsChanged",this.mf.bind(this));Yy(this,"onCaptionsTrackListChanged",this.df.bind(this));Yy(this,"captionssettingschanged",this.ef.bind(this))}
w(Sy,H);function Wy(a,b){a.sendMessage("infoDelivery",b)}
r=Sy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Uy(this,a):this.D.push(a)};
function Vy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Yy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Ty(a){if(!a.api)return null;var b=a.api.getApiInterface();Sb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.jf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!S("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());Wy(this,a)};
r.gf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Wy(this,a)};
r.hf=function(a){Wy(this,{playbackRate:a})};
r.cf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.lf=function(){Wy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.kf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Wy(this,a)};
r.mf=function(){Wy(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.df=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Wy(this,a)}};
r.ef=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Wy(this,a)}};
function Uy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){W(d)}}}
r.ba=function(){H.prototype.ba.call(this);Xy.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Xy=window;function Zy(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=$y(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=az(g,f))&&bz(d,g,f))}}}}}};
cz.addEventListener("message",this.i);bz(this,"RECEIVING")}
w(Zy,H);r=Zy.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ff.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ff=function(a,b){this.ea||bz(this,a,dz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function $y(a,b){switch(a){case "loadVideoById":return[Qy(b)];case "cueVideoById":return[Qy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Ry(b)];case "cuePlaylist":return[Ry(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function az(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function dz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function bz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),ez.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){cz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var cz=window,ez=window.parent;var fz=new zy;function gz(){return fz.hd()}
function hz(a){a=a===void 0?{}:a;return fz.invoke(a)}
;function iz(a,b,c,d,e){H.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Ec=e;this.Pa=!1;this.api={};this.oa=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Fc=["onReady"];this.lastError=null;this.rb=NaN;this.P={};this.ha=0;this.i=this.o=a;uc(this,this.U);jz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(kz(this),lz(this))}
w(iz,H);r=iz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof bv||(b=new bv(b));this.config=b;this.setConfig(a);lz(this);this.isReady()&&mz(this)}};
function kz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=nz(a);kz(this);if(!this.xa){var b;this.xa=oz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Fj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Fj(Number(a)||a))};
function mz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function pz(a){var b=!0,c=qz(a);c&&a.config&&(b=c.dataset.version===rz(a));return b&&!!F("yt.player.Application.create")}
function lz(a){if(!a.ea&&!a.Y){var b=pz(a);if(b&&(qz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||sz(a);else if(tz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),sz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=uz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?nz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Ec);sz(a)};
a.Y=!0;b?a.G():(mv(rz(a),a.G),(b=vz(a))&&tv(b||""),wz(a)&&!c&&E("yt.player.Application.create",null))}}}
function qz(a){var b=yg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function sz(a){if(!a.ea){var b=qz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!uz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}xz(a)}else a.rb=setTimeout(function(){sz(a)},50)}}
function xz(a){jz(a);a.Pa=!0;var b=qz(a);if(b){a.u=yz(a,b,"addEventListener");a.oa=yz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);mz(a);a.xa&&a.xa(a.api);a.U.qb("onReady",a.api)}
function yz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function jz(a){a.Pa=!1;if(a.oa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.oa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=oz(this,b);d&&(Mb(this.Fc,a)>=0||this.h[a]||(b=zz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=oz(this,b))&&this.U.unsubscribe(a,b)};
function oz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function zz(a,b){function c(d){function e(){if(!a.ea)try{a.U.qb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.ge});g.level="WARNING";throw g;}}
if(uz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
pg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(qz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function tz(a){a.cancel();jz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=qz(a);b&&(pz(a)||!wz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&qv(rz(this),this.G);clearTimeout(this.rb);this.Y=!1};
r.ba=function(){tz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function wz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function rz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function uz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function nz(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?sg(e):e}return b}
;var Az={},Bz="player_uid_"+(Math.random()*1E9>>>0);function Cz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?yg(c):c;var e=Bz+"_"+Sa(c),f=Az[e];if(f&&d)return Dz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new iz(c,e,a,b,void 0);Az[e]=f;f.addOnDisposeCallback(function(){delete Az[f.getId()]});
return f.api}
function Dz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ez=null,Fz=null;
function Gz(){jx();var a=sn(),b=vn(119),c=window.devicePixelRatio>1;if(document.body&&Tj(document.body,"exp-invert-logo"))if(c&&!Tj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Tj(d,"inverted-hdpi")){var e=Rj(d);Sj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Tj(document.body,"inverted-hdpi")&&Uj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=wn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete pn[b]:(c=d.toString(16),pn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in pn)pn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(pn[f])));var f=d.join("&");ln(b,f,63072E3,a.i,c)}}
function Hz(){Iz()}
function Jz(){ex("ep_init_pr");Iz()}
function Iz(){var a=Ez.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Kz(){Ez&&Ez.sendAbandonmentPing&&Ez.sendAbandonmentPing();R("PL_ATT")&&fz.dispose();for(var a=Lj,b=0,c=Sx.length;b<c;b++)a.qa(Sx[b]);Sx.length=0;ov("//static.doubleclick.net/instream/ad_status.js");Tx=!1;bm("DCLKSTAT",0);tc(Fz);Ez&&(Ez.removeEventListener("onVideoDataChange",Hz),Ez.destroy())}
;ex("ep_init_eps");E("yt.setConfig",bm);E("yt.config.set",bm);E("yt.setMsg",lv);E("yt.msgs.set",lv);E("yt.logging.errors.log",iu);
E("writeEmbed",function(){ex("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Xv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);S("embeds_enable_new_csi")||ax("embed",["ol"]);c=hy();if(!c.serializedForcedExperimentIds){var d=pm(window.location.href);d.forced_experiments&&
(c.serializedForcedExperimentIds=d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?ax("watch",["pbs","pbu","pbp"]):S("embeds_enable_new_csi")&&(a.args&&Ou(a.args)?ax("video_preview",["ol"]):ax("embed_no_video",["ep_init_pr"]));Ez=Cz(a,c);Ez.addEventListener("onVideoDataChange",Hz);Ez.addEventListener("onReady",Jz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Fz=new Sy(Ez):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Fz=new Zy(Ez,a,b));Ux();S("ytidb_create_logger_embed_killswitch")||
ro();a={};Fy.h||(Fy.h=new Fy);Fy.h.install((a.flush_logs={callback:function(){Nt()}},a));
bs();S("ytidb_clear_embedded_player")&&Lj.pa(function(){Nx();ty()});
S("enable_rta_manager")&&Fn(function(){var f=new fy;var g={preload:!S("enable_rta_npi")},h;typeof g==="boolean"?h={preload:g}:typeof g==="undefined"?h={preload:!0}:h=g;g=new Qr;Xx.instance=new Xx(f,h,g);f=Xx.instance;h=f.i.bind(f);E("yt.aba.att",h);f=f.j.bind(f);E("yt.aba.att2",f)});
ex("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||gz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||hz);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Vx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Wv);E("yt.util.activity.init",F("yt.util.activity.init")||vs);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ys);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||ws);window.addEventListener("load",fm(function(){Gz()}));
window.addEventListener("pageshow",fm(function(a){a.persisted||Gz()}));
window.addEventListener("pagehide",fm(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Kz():a.persisted||Kz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=cm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ge)f||(f={}),f.componentStack=au(m)}f&&lu(e,f);g?iu(e):W(e)}};
Bi=ju;window.addEventListener("unhandledrejection",function(a){ju(a.reason)});
Nb(R("ERRORS")||[],function(a){iu.apply(null,a)});
bm("ERRORS",[]);ex("ep_init_epe");}).call(this);
