(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1268:function(e,l,t){"use strict";t.r(l);var o=t(382),s={a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"},a={selectField1:{type:"form",resource:{fields:{selectFieldA:{type:"select",label:"下拉选择",props:{placeholder:"请选择",clearable:!0,options:s}},selectFieldB:{type:"select",label:"单选",props:{placeholder:"请选择",clearable:!0,multiple:!1,options:s}},selectFieldC:{type:"select",label:"带默认值",default:"a,c",props:{placeholder:"请选择",clearable:!0,options:s}},selectFieldD:{type:"select",label:"可搜索",props:{placeholder:"请输入关键字搜索",clearable:!0,filterable:!0,options:s}},selectFieldE:{type:"select",label:"纯展示",default:"a,c",props:{options:s},ctx:"view"},selectFieldF:{type:"select",label:"超出隐藏",default:"a,c,d,e",props:{options:s},collapseLimit:2,ctx:"view"}}},ctx:"edit"},selectField2:{type:"form",resource:{fields:{selectFieldA:{type:"select",label:"下拉选择",props:{"select-all":!0,placeholder:"请选择",clearable:!0,options:s}}}},ctx:"edit"}},i=t(394),c=t.n(i),n=t(393),r=t.n(n),d={mixins:[o.a],mounted:function(){var e=c()(a[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,a[this.blockName]),this.init=!0}},p=t(21),f=Object(p.a)(d,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);l.default=f.exports},381:function(e,l,t){"use strict";var o=t(0),s=(t(387),t(386)),a=t.n(s),i=t(384),c=t.n(i),n=t(392),r=t(388),d=t.n(r),p=(t(389),t(390)),f=t.n(p),u=t(391),m=t.n(u);o.default.use(a.a),o.default.use(c.a),console.log("ams init config"),o.default.use(f.a),o.default.use(m.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(n.a,{languages:{javascript:d.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,l,t){"use strict";t(381);l.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);