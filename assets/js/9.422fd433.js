(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1131:function(e,t,n){"use strict";var i=n(8),r=n(4),o=n(220),s=n(24),a=n(7),l=n(41),c=n(513),u=n(61),f=n(2),d=n(39),g=n(86).f,p=n(36).f,h=n(10).f,m=n(478).trim,v=r.Number,b=v.prototype,w="Number"==l(d(b)),y=function(e){var t,n,i,r,o,s,a,l,c=u(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=m(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(s=(o=c.slice(2)).length,a=0;a<s;a++)if((l=o.charCodeAt(a))<48||l>r)return NaN;return parseInt(o,i)}return+c};if(o("Number",!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(w?f((function(){b.valueOf.call(n)})):"Number"!=l(n))?c(new v(y(t)),n,S):y(t)},I=i?g(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)a(v,N=I[_])&&!a(S,N)&&h(S,N,p(v,N));S.prototype=b,b.constructor=S,s(r,"Number",S)}},1260:function(e,t,n){"use strict";n.r(t);var i=n(382),r=(n(59),n(120),n(1131),n(9),n(56),n(122),n(444),n(222),{getSetView:{resources:{getSetView:{api:{prefix:"/test/",create:"create"},fields:{datetime:{label:"时间",type:"datetime",get:function(e){return console.log("get",e),Number(e.slice(5))},set:function(e){return console.log("set",e),"date:"+(e instanceof Date?e.getTime():e)},view:function(e){return console.log("view",e),e.slice(5)/1e3}},testSelect:{type:"select",label:"字符串多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}}},testArraySelect:{type:"select",label:"数组多选",props:{multiple:!0,options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎"}},get:function(e){return console.log("get",e),"string"==typeof e?e.split(","):e},set:function(e){return console.log("set",e),"string"==typeof e?e.split(","):e}}}}},blocks:{editGetSetView:{data:{datetime:"",testSelect:"",testArraySelect:[]},type:"form",resource:"getSetView",ctx:"edit",style:{width:"50%"},events:{init:"initFn",submit:"@alert @create"},actions:{initFn:function(){var e=this;setTimeout((function(){e.data.datetime="date:1546278503030",e.data.testSelect="a,b",e.data.testArraySelect=["a","b"]}),1e3)},alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("提交的表单数据是："+JSON.stringify(this.data))}))},operations:{submit:{type:"button",label:"提交"}}},viewGetSetView:{data:{datetime:"date:1546278503030",testSelect:"a,b",testArraySelect:["a","b"]},type:"form",resource:"getSetView",ctx:"view",style:{width:"50%"},events:{submit:"@create"}}}}}),o=n(394),s=n.n(o),a=n(393),l=n.n(a),c={mixins:[i.a],mounted:function(){var e=s()(r[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,r[this.blockName]),this.init=!0}},u=n(21),f=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),n("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?n("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=f.exports},381:function(e,t,n){"use strict";var i=n(0),r=(n(387),n(386)),o=n.n(r),s=n(384),a=n.n(s),l=n(392),c=n(388),u=n.n(c),f=(n(389),n(390)),d=n.n(f),g=n(391),p=n.n(g);i.default.use(o.a),i.default.use(a.a),console.log("ams init config"),i.default.use(d.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(l.a,{languages:{javascript:u.a}}),a.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,t,n){"use strict";n(381);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},444:function(e,t,n){"use strict";var i=n(212),r=n(215),o=n(12),s=n(29),a=n(457),l=n(216),c=n(22),u=n(213),f=n(85),d=n(2),g=[].push,p=Math.min,h=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[i];if(!r(e))return t.call(i,e,o);for(var a,l,c,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=new RegExp(e.source,d+"g");(a=f.call(h,i))&&!((l=h.lastIndex)>p&&(u.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&g.apply(u,a.slice(1)),c=a[0].length,p=l,u.length>=o));)h.lastIndex===a.index&&h.lastIndex++;return p===i.length?!c&&h.test("")||u.push(""):u.push(i.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=s(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,r,n):i.call(String(r),t,n)},function(e,r){var s=n(i,e,this,r,i!==t);if(s.done)return s.value;var f=o(e),d=String(this),g=a(f,RegExp),m=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),b=new g(h?f:"^(?:"+f.source+")",v),w=void 0===r?4294967295:r>>>0;if(0===w)return[];if(0===d.length)return null===u(b,d)?[d]:[];for(var y=0,N=0,S=[];N<d.length;){b.lastIndex=h?N:0;var I,_=u(b,h?d:d.slice(N));if(null===_||(I=p(c(b.lastIndex+(h?0:N)),d.length))===y)N=l(d,N,m);else{if(S.push(d.slice(y,N)),S.length===w)return S;for(var x=1;x<=_.length-1;x++)if(S.push(_[x]),S.length===w)return S;N=y=I}}return S.push(d.slice(y)),S}]}),!h)},457:function(e,t,n){var i=n(12),r=n(58),o=n(3)("species");e.exports=function(e,t){var n,s=i(e).constructor;return void 0===s||null==(n=i(s)[o])?t:r(n)}},458:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},478:function(e,t,n){var i=n(29),r="["+n(458)+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),a=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:a(1),end:a(2),trim:a(3)}},513:function(e,t,n){var i=n(6),r=n(123);e.exports=function(e,t,n){var o,s;return r&&"function"==typeof(o=t.constructor)&&o!==n&&i(s=o.prototype)&&s!==n.prototype&&r(e,s),e}}}]);