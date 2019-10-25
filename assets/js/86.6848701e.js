(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1186:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目嵌入"}},[t._v("#")]),t._v(" 项目嵌入")]),t._v(" "),a("h2",{attrs:{id:"已有项目嵌入ams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已有项目嵌入ams"}},[t._v("#")]),t._v(" 已有项目嵌入AMS")]),t._v(" "),a("h3",{attrs:{id:"iframe嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe嵌入"}},[t._v("#")]),t._v(" iframe嵌入")]),t._v(" "),a("p",[t._v("利用iframe可以嵌入外部域名网页的特性，可以已经运行的项目中嵌入使用AMS开发的网页，详见："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe",target:"_blank",rel:"noopener noreferrer"}},[t._v("iframe"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"局部组件嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局部组件嵌入"}},[t._v("#")]),t._v(" 局部组件嵌入")]),t._v(" "),a("p",[t._v("可以使用区块名name引用方式："),a("router-link",{attrs:{to:"/api/block.html#使用-block"}},[t._v("使用block >>")])],1),t._v(" "),a("h3",{attrs:{id:"完整页面嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整页面嵌入"}},[t._v("#")]),t._v(" 完整页面嵌入")]),t._v(" "),a("p",[t._v("如果AMS项目是多个页面，直接设置"),a("router-link",{attrs:{to:"/block/router.html#/"}},[t._v("Route")]),t._v("中meta的hasMenu为false，通过隐藏导航菜单面包屑得到多个单独的AMS页面")],1),t._v(" "),a("h2",{attrs:{id:"ams嵌入已有项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ams嵌入已有项目"}},[t._v("#")]),t._v(" AMS嵌入已有项目")]),t._v(" "),a("h3",{attrs:{id:"iframe嵌入-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe嵌入-2"}},[t._v("#")]),t._v(" iframe嵌入")]),t._v(" "),a("p",[t._v("利用iframe可以嵌入外部域名网页的特性，可以已经运行的项目中嵌入使用非AMS开发的网页，详见："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe",target:"_blank",rel:"noopener noreferrer"}},[t._v("iframe"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iframeBlock: {\n  type: 'component',\n  options: {\n    is: 'iframe'\n  },\n  props: {\n    src: 'http://xxx.vip.com/id=11',\n    frameborder: 0\n  }\n}\n")])])]),a("h3",{attrs:{id:"vue动态组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue动态组件"}},[t._v("#")]),t._v(" vue动态组件")]),t._v(" "),a("p",[t._v("利用vue的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态组件"),a("OutboundLink")],1),t._v("特性，并结合ams的"),a("router-link",{attrs:{to:"/block/component.html"}},[t._v("动态区块 component")]),t._v("，可以引入使用vue注册的组件")],1),t._v(" "),a("p",[t._v("步骤一：在main.js等项目入口注册一个"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue组件"),a("OutboundLink")],1),t._v("，组件命名为"),a("code",[t._v("button-counter")])]),t._v(" "),a("p",[t._v("步骤二：注册一个ams动态区块，options的is命名为vue的组件名"),a("code",[t._v("button-counter")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ams-button-counter-block'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button-counter'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("步骤三：如果引入组件需要用到ams内部的数据，可以通过在props中传参，即可向vue组件的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("props"),a("OutboundLink")],1),t._v("传递参数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ams-button-counter-block'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button-counter'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"router配置component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router配置component"}},[t._v("#")]),t._v(" router配置component")]),t._v(" "),a("p",[t._v("方式一：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" outsideFile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./outside-file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'引入外部文件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cases-outside'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue文件引入A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fileA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outsideFile\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("方式二：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'引入外部文件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cases-outside'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vue文件引入B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fileB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./outside-file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"多种框架混用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多种框架混用"}},[t._v("#")]),t._v(" 多种框架混用")]),t._v(" "),a("p",[t._v("包含普通Vue、ncform和AMS组成的在线Demo演示："),a("a",{attrs:{href:"https://jsbin.com/nizuvigije/1/edit?html,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看Demo"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("只能适用于ams或ncform在单独的页面运行，暂不支持在ams中配置ncform的组件")])])])}),[],!1,null,null,null);s.default=e.exports}}]);