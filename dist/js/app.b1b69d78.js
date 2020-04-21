(function(t){function e(e){for(var _,s,a=e[0],u=e[1],i=e[2],c=0,f=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(_ in u)Object.prototype.hasOwnProperty.call(u,_)&&(t[_]=u[_]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],_=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(_=!1)}_&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var _={},o={app:0},n=[];function s(e){if(_[e])return _[e].exports;var r=_[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=_,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var _ in t)s.d(r,_,function(e){return t[e]}.bind(null,_));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var _=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Calculator")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"calculator"}},[r("div",{attrs:{id:"result"}},[r("div",{attrs:{id:"history"}},[r("p",{attrs:{id:"history-value"}},[t._v(t._s(t.formula))])]),r("div",{attrs:{id:"output"}},[r("p",{attrs:{id:"output-value"}},[t._v(t._s(t.result))])])]),r("div",{attrs:{id:"keyboard"}},[r("button",{staticClass:"operator",on:{click:function(e){return t.drop()}}},[t._v("C")]),r("button",{staticClass:"operator",on:{click:function(e){return t.cleanResult()}}},[t._v("CE")]),r("button",{staticClass:"operator",on:{click:function(e){return t.operate("%")}}},[t._v("%")]),r("button",{staticClass:"operator",on:{click:function(e){return t.operate("/")}}},[t._v("÷")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(7)}}},[t._v("7")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(8)}}},[t._v("8")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(9)}}},[t._v("9")]),r("button",{staticClass:"operator",on:{click:function(e){return t.operate("*")}}},[t._v("×")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(4)}}},[t._v("4")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(5)}}},[t._v("5")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(6)}}},[t._v("6")]),r("button",{staticClass:"operator",on:{click:function(e){return t.operate("-")}}},[t._v("-")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(1)}}},[t._v("1")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(2)}}},[t._v("2")]),r("button",{staticClass:"number",on:{click:function(e){return t.operate(3)}}},[t._v("3")]),r("button",{staticClass:"operator",on:{click:function(e){return t.operate("+")}}},[t._v("+")]),r("button",{staticClass:"empty"}),r("button",{staticClass:"number",on:{click:function(e){return t.operate(0)}}},[t._v("0")]),r("button",{staticClass:"empty"}),r("button",{staticClass:"operator",on:{click:function(e){return t.equal()}}},[t._v("=")])])])])])},a=[],u=r("a97d"),i=u["a"],l=(r("9041"),r("2877")),c=Object(l["a"])(i,s,a,!1,null,null,null),f=c.exports,p={components:{Calculator:f}},d=p,b=Object(l["a"])(d,o,n,!1,null,null,null),m=b.exports,h=r("8c4f");_["a"].use(h["a"]);var v=[],E=new h["a"]({mode:"history",base:"/",routes:v}),g=E,O=r("2f62");_["a"].use(O["a"]);var C=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});_["a"].config.productionTip=!1,new _["a"]({router:g,store:C,render:function(t){return t(m)}}).$mount("#app")},"8a9c":function(t,e,r){},9041:function(t,e,r){"use strict";var _=r("8a9c"),o=r.n(_);o.a},a97d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("8a79"),core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("2ca0"),core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_4__);__webpack_exports__["a"]={name:"Calculator",data:function(){return{formula:"",result:0}},methods:{operate:function(t){console.log("operate.."),this.formula+=t},equal:function equal(){console.log("equal.."),this.result=eval(this.formula)},cleanResult:function(){console.log("cleanResult.."),this.result=0,this.formula=""},cleanAll:function(){console.log("cleanAll.."),this.formula="",this.result=0},drop:function(){console.log("drop.."),this.formula=this.formula.slice(0,-1)},square:function square(){console.log("square.."),console.log(eval(this.formula)),eval(this.formula)<0?this.formula="Can not suqre the negative value":this.result=Math.sqrt(eval(this.formula))},devided:function(){console.log("devided.."),""===this.formula||this.formula.endsWith("+")||(this.formula="1/("+this.formula+")"),this.equal()},toggle:function toggle(){console.log("toggle.."),""===this.formula||this.formula.endsWith("+")||(this.formula.startsWith("-")?this.formula=Math.abs(eval(this.formula)).toString():this.formula="-("+this.formula+")"),this.equal()}}}}});
//# sourceMappingURL=app.b1b69d78.js.map