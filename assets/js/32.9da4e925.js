(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1210:function(e,t,n){"use strict";n.r(t);var i=n(382),s={text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}},o={defaultList:{type:"list",resource:{fields:s},options:{watermark:!0},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]}},customList:{type:"list",resource:{fields:s},options:{watermark:{width:"200px",height:"150px",textAlign:"center",textBaseLine:"middle",font:"18px Microsoft Yahei",fillStyle:"rgba(236, 234, 234, 1)",content:"zebin.wu",rotate:"30",zIndex:1e3}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]}}},a=n(394),c=n.n(a),l=n(393),r=n.n(l),u={mixins:[i.a],mounted:function(){var e=c()(o[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,o[this.blockName]),this.init=!0}},d=n(21),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),n("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?n("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},381:function(e,t,n){"use strict";var i=n(0),s=(n(387),n(386)),o=n.n(s),a=n(384),c=n.n(a),l=n(392),r=n(388),u=n.n(r),d=(n(389),n(390)),m=n.n(d),p=n(391),f=n.n(p);i.default.use(o.a),i.default.use(c.a),console.log("ams init config"),i.default.use(m.a),i.default.use(f.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(l.a,{languages:{javascript:u.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},382:function(e,t,n){"use strict";n(381);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);