(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1226:function(e,t,a){"use strict";a.r(t);var i=a(382),l={datetimerangeField1:{type:"form",resource:{fields:{datetimerangeFieldA:{type:"datetimerange",label:"日期时间",props:{placeholder:"请选择日期时间"}},datetimerangeFieldB:{type:"datetimerange",label:"带默认值",default:"1547568120000,1551290400000",props:{placeholder:"请选择日期时间"}},datetimerangeFieldC:{type:"datetimerange",label:"纯展示",default:"1547568120000,1551290400000",ctx:"view"}}},ctx:"edit"},datetimerangeField2:{type:"form",resource:{fields:{datetimerangeFieldA:{type:"datetimerange",label:"日期",props:{placeholder:"请选择日期",type:"daterange"}},datetimerangeFieldB:{type:"datetimerange",label:"带默认值",default:"1547568120000,1551290400000",props:{placeholder:"请选择日期",type:"daterange"}},datetimerangeFieldC:{type:"datetimerange",label:"纯展示",default:"1547568120000,1551290400000",ctx:"view",props:{type:"daterange"}}}},ctx:"edit"},datetimerangeField3:{type:"form",resource:{fields:{datetimerangeFieldA:{type:"datetimerange",label:"日期",props:{placeholder:"请选择日期",type:"dates"}},datetimerangeFieldC:{type:"datetimerange",label:"纯展示",default:"1547568120000,1551290400000",ctx:"view",props:{type:"dates"}}}},ctx:"edit"},datetimerangeField4:{type:"form",resource:{fields:{datetimerangeFieldA:{type:"datetimerange",label:"日期时间",props:{"value-format":"yyyy-MM-dd HH:mm:ss"},default:["2019-03-16 00:00:00","2019-04-24 00:00:00"]},datetimerangeFieldC:{type:"datetimerange",label:"纯展示",default:["2019-03-16 00:00:00","2019-04-24 00:00:00"],ctx:"view",props:{"value-format":"yyyy-MM-dd HH:mm:ss"}}}},ctx:"edit"}},n=a(394),o=a.n(n),d=a(393),s=a.n(d),r={mixins:[i.a],mounted:function(){var e=o()(l[this.blockName]);this.configCode=s()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,l[this.blockName]),this.init=!0}},c=a(21),m=Object(c.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},381:function(e,t,a){"use strict";var i=a(0),l=(a(387),a(386)),n=a.n(l),o=a(384),d=a.n(o),s=a(392),r=a(388),c=a.n(r),m=(a(389),a(390)),p=a.n(m),g=a(391),f=a.n(g);i.default.use(n.a),i.default.use(d.a),console.log("ams init config"),i.default.use(p.a),i.default.use(f.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(s.a,{languages:{javascript:c.a}}),d.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,t,a){"use strict";a(381);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);