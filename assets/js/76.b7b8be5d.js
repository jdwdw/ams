(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1213:function(e,o,i){"use strict";i.r(o);var t=i(382),s={videoField1:{type:"form",resource:{fields:{videoFieldA:{type:"video",label:"视频"},videoFieldB:{type:"video",label:"视频",tip:"不超过500kb",successUrlKey:"url",check:{maxSizeInKB:500}},videoFieldC:{type:"video",label:"视频",successUrlKey:"url",props:{"button-label":"自定义"}}}},ctx:"edit"}},n=i(394),a=i.n(n),l=i(393),c=i.n(l),d={mixins:[t.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,s[this.blockName]),this.init=!0}},r=i(21),u=Object(r.a)(d,(function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=u.exports},381:function(e,o,i){"use strict";var t=i(0),s=(i(387),i(386)),n=i.n(s),a=i(384),l=i.n(a),c=i(392),d=i(388),r=i.n(d),u=(i(389),i(390)),f=i.n(u),m=i(391),g=i.n(m);t.default.use(n.a),t.default.use(l.a),console.log("ams init config"),t.default.use(f.a),t.default.use(g.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,o,i){"use strict";i(381);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);