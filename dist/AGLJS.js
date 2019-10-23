!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AGLJS=t():n.AGLJS=t()}(window,function(){return o={},r.m=e=[function(n,t){AFB=function(n,t){"object"!=typeof n&&(n={base:n,token:t});function e(n,t){this.token=n,this.uuid=t}var s,o,r={base:n.base||"api",token:n.token||t||"HELLO",host:n.host||window.location.host,url:n.url||void 0},i=r.url||"ws://"+r.host+"/"+r.base,u=void 0,a=r.token;e.prototype={get token(){return a},set token(n){n&&(a=n)},get uuid(){return u},set uuid(n){n&&(u=n)}},s=new e;function c(n,t,e,o){if(t in n){var r=n[t];delete n[t];try{r[o](e)}catch(n){}}}return(o=function(n,t){var e=i,o="?";s.token&&(e=e+"?x-afb-token="+s.token,o="&"),s.uuid&&(e=e+o+"x-afb-uuid="+s.uuid),this.ws=new WebSocket(e,["x-afb-ws-json1"]),this.url=e,this.pendings={},this.awaitens={},this.counter=0,this.ws.onopen=function(n){var t=this.onopen;delete this.onopen,delete this.onabort,t&&t(this)}.bind(this),this.ws.onerror=function(n){var t=this.onabort;t&&(delete this.onopen,delete this.onabort,t&&t(this));this.onerror&&this.onerror(this)}.bind(this),this.ws.onclose=function(n){var t={jtype:"afb-reply",request:{status:"disconnected",info:"server hung up"}};for(var e in this.pendings)try{this.pendings[e][1](t)}catch(n){}this.pendings={},this.onclose&&this.onclose()}.bind(this),this.ws.onmessage=function(n){var t=JSON.parse(n.data),e=t[0],o=t[1],r=t[2];switch(s.token=t[3],e){case 3:c(this.pendings,o,r,0);break;case 4:c(this.pendings,o,r,1);break;case 5:default:!function(n,t,e){var o=n[t];o&&o.forEach(function(n){n(e)});var r=t.indexOf("/");0<=r&&(o=n[t.substring(0,r)])&&o.forEach(function(n){n(e)});(o=n["*"])&&o.forEach(function(n){n(e)})}(this.awaitens,o,r)}}.bind(this),this.onopen=n,this.onabort=t}).prototype={close:function(){this.ws.close(),this.ws.onopen=this.ws.onerror=this.ws.onclose=this.ws.onmessage=this.onopen=this.onabort=function(){}},call:function(r,i,u){return new Promise(function(n,t){var e,o;if(u){if((e=String(u))in this.pendings)throw new Error("pending callid("+e+") exists")}else for(;(e=String(this.counter=4095&this.counter+1))in this.pendings;);this.pendings[e]=[n,t],o=[2,e,r,i],s.token&&o.push(s.token),this.ws.send(JSON.stringify(o))}.bind(this))},onevent:function(n,t){var e=n;(this.awaitens[e]||(this.awaitens[e]=[])).push(t)}},{context:s,ws:o}}},function(n,t,e){"use strict";e.r(t);var o={};e.r(o),e.d(o,"call",function(){return p}),e.d(o,"subscribe",function(){return b}),e.d(o,"init",function(){return v});var r={};e.r(r),e.d(r,"list_controls",function(){return w}),e.d(r,"set_volume",function(){return g}),e.d(r,"on_volume_changed",function(){return m}),e.d(r,"on_controls_changed",function(){return _});var i={};e.r(i),e.d(i,"runnables",function(){return y}),e.d(i,"start",function(){return k});var u={};e.r(u),e.d(u,"current_weather",function(){return x}),e.d(u,"api_key",function(){return j});var s={};e.r(s),e.d(s,"adapter_state",function(){return S}),e.d(s,"managed_objects",function(){return O}),e.d(s,"on_device_changes",function(){return P});var a={};e.r(a),e.d(a,"technologies",function(){return M}),e.d(a,"on_global_state",function(){return L});e(0);var c,f=document.location.hostname,d=document.location.port,h=new URLSearchParams(document.location.search.substring(1)),l=h.get("x-afb-token")||h.get("token")||"HELLO";function p(o,r){return new Promise(function(t,e){var n=new c.ws(function(){n.call(o,r).then(function(n){t(n.response)},function(n){e(n)})},function(){e("ws aborted")})})}function b(r,i,u){return new Promise(function(e,t){var o=new c.ws(function(){o.call(r,i).then(function(n){var t=r.split("/")[0]+"/"+(i.value?i.value:i.event);o.onevent(t,function(n){u(n.data)}),e()},function(n){t(n)})},function(){t("ws aborted")})})}function v(){c=new AFB({host:f+":"+d,token:l})}function w(){return p("audiomixer/list_controls",{})}function g(n,t){return p("audiomixer/volume",{control:n,value:t})}function m(n){return b("audiomixer/subscribe",{event:"volume_changed"},n)}function _(n){return b("audiomixer/subscribe",{event:"controls_changed"},n)}function y(){return p("afm-main/runnables",{})}function k(n){return p("afm-main/start",{id:n})}function x(){return p("weather/current_weather",{})}function j(n){return p("weather/api_key",{value:n})}function S(n){return p("Bluetooth-Manager/adapter_state",n||{})}function O(){return p("Bluetooth-Manager/managed_objects",{})}function P(n){return b("Bluetooth-Manager/subscribe",{value:"device_changes"},n)}function M(){return p("network-manager/technologies",{})}function L(n){return b("network-manager/subscribe",{value:"global_state"},n)}e.d(t,"audiomixer",function(){return r}),e.d(t,"afmMain",function(){return i}),e.d(t,"weather",function(){return u}),e.d(t,"bluetooth",function(){return s}),e.d(t,"network",function(){return a}),e.d(t,"api",function(){return o}),v()}],r.c=o,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=1);function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var e,o});