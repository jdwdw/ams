(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1067:function(t,e,n){"use strict";n.r(e);var o=n(126),i=(n(964),n(966),n(234),n(967),{getSetView:{resources:{getSetView:{api:{prefix:"/test/",create:"create"},fields:{datetime:{label:"时间",type:"datetime",get:function(t){return console.log("get",t),Number(t.slice(5))},set:function(t){return console.log("set",t),"date:"+(t instanceof Date?t.getTime():t)},view:function(t){return console.log("view",t),t.slice(5)/1e3}},testSelect:{type:"select",label:"字符串多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}}},testArraySelect:{type:"select",label:"数组多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}},get:function(t){return console.log("get",t),"string"==typeof t?t.split(","):t},set:function(t){return console.log("set",t),"string"==typeof t?t.split(","):t}}}}},blocks:{editGetSetView:{data:{datetime:"",testSelect:"",testArraySelect:[]},type:"form",resource:"getSetView",ctx:"edit",style:{width:"50%"},events:{init:"initFn",submit:"@alert @create"},actions:{initFn:function(){var t=this;setTimeout((function(){t.data.datetime="date:1546278503030",t.data.testSelect="a,b",t.data.testArraySelect=["a","b"]}),1e3)},alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){alert("提交的表单数据是："+JSON.stringify(this.data))}))},operations:{submit:{type:"button",label:"提交"}}},viewGetSetView:{data:{datetime:"date:1546278503030",testSelect:"a,b",testArraySelect:["a","b"]},type:"form",resource:"getSetView",ctx:"view",style:{width:"50%"},events:{submit:"@create"}}}}}),r=n(138),a=n.n(r),s=n(137),c=n.n(s),l={mixins:[o.a],mounted:function(){var t=a()(i[this.blockName]);this.configCode=c()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},u=n(1),f=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),n("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?n("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=f.exports},125:function(t,e,n){"use strict";var o=n(0),i=(n(131),n(130)),r=n.n(i),a=n(128),s=n(136),c=n(132),l=n.n(c),u=(n(133),n(134)),f=n.n(u),p=n(135),g=n.n(p);o.default.use(r.a),o.default.use(a.default),console.log("ams init config"),o.default.use(f.a),o.default.use(g.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(s.a,{languages:{javascript:l.a}}),a.default.config({resource:{api:{withCredentials:!1}}})},126:function(t,e,n){"use strict";n(125);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}},264:function(t,e,n){var o=n(64),i=n(21),r=n(38),a=n(265),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var i={},s=r((function(){return!!a[t]()||"​"!="​"[t]()})),c=i[t]=s?e(f):a[t];n&&(i[n]=c),o(o.P+o.F*s,"String",i)},f=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},265:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},268:function(t,e,n){var o=n(19),i=n(269).set;t.exports=function(t,e,n){var r,a=e.constructor;return a!==n&&"function"==typeof a&&(r=a.prototype)!==n.prototype&&o(r)&&i&&i(t,r),t}},269:function(t,e,n){var o=n(19),i=n(18),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(70)(Function.call,n(209).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},964:function(t,e,n){"use strict";n(965);var o=n(18),i=n(196),r=n(10),a=/./.toString,s=function(t){n(23)(RegExp.prototype,"toString",t,!0)};n(38)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},965:function(t,e,n){n(10)&&"g"!=/./g.flags&&n(20).f(RegExp.prototype,"flags",{configurable:!0,get:n(196)})},966:function(t,e,n){var o=Date.prototype,i=o.toString,r=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(23)(o,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},967:function(t,e,n){"use strict";var o=n(3),i=n(14),r=n(66),a=n(268),s=n(74),c=n(38),l=n(226).f,u=n(209).f,f=n(20).f,p=n(264).trim,g=o.Number,d=g,m=g.prototype,h="Number"==r(n(92)(m)),b="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,i,r=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>i)return NaN;return parseInt(c,o)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(h?c((function(){m.valueOf.call(n)})):"Number"!=r(n))?a(new d(v(e)),n,g):v(e)};for(var y,_=n(10)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)i(d,y=_[w])&&!i(g,y)&&f(g,y,u(d,y));g.prototype=m,m.constructor=g,n(23)(o,"Number",g)}}}]);