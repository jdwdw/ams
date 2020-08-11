(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1341:function(t,s,a){"use strict";a.r(s);var n=a(21),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"路由与菜单导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由与菜单导航"}},[t._v("#")]),t._v(" 路由与菜单导航")]),t._v(" "),n("p",[t._v("后台页面的 "),n("code",[t._v("菜单导航")]),t._v(" "),n("code",[t._v("各页面路由")]),t._v(" "),n("code",[t._v("每个页面的内容")]),t._v(" "),n("code",[t._v("页面跳转")]),t._v(" "),n("code",[t._v("菜单权限")]),t._v(" "),n("code",[t._v("面包屑")]),t._v(" 等都可以通过 "),n("code",[t._v("Router")]),t._v(" block 配置")]),t._v(" "),n("p",[t._v("详细api参考："),n("RouterLink",{attrs:{to:"/block/router.html"}},[t._v("Router 导航路由")])],1),t._v(" "),n("h2",{attrs:{id:"配置示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置示例"}},[t._v("#")]),t._v(" 配置示例")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        roles"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    router"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaultBreadcrumb: false, //是否将第一个菜单作为“首页”一直出现在面包屑，默认为 true")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// mode: \'history\', // 配置路由模式，默认为 hash，可选值: "hash" | "history"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// base: '/app/', // 要在history模式下才会发挥作用")]),t._v("\n        routes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                redirect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'menu'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                block"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    hasMenu"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    hidden"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'列表'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                block"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    roles"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'编辑'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        block"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formEdit'")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            roles"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),t._v("， "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'查看'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        block"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formView'")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'外链'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'star-off'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://vipshop.github.io/ams/'")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'跳404'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                redirect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                redirect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'404'")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(751),alt:"example"}})]),t._v(" "),n("h3",{attrs:{id:"菜单导航和路由地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#菜单导航和路由地址"}},[t._v("#")]),t._v(" 菜单导航和路由地址")]),t._v(" "),n("p",[t._v("菜单导航和路由地址是根据 "),n("code",[t._v("router.routes")]),t._v(" 的 "),n("code",[t._v("route")]),t._v(" 配置嵌套配置而成")]),t._v(" "),n("p",[t._v("如 "),n("code",[t._v("列表")]),t._v(" 页的页面路由为 "),n("code",[t._v("/list")]),t._v(" 同时其渲染的block名为 "),n("code",[t._v("list")]),t._v("，菜单项会有一个顶层的 "),n("code",[t._v("列表")]),t._v(" 菜单，其下有两个子菜单："),n("code",[t._v("编辑")]),t._v(" 和 "),n("code",[t._v("查看")]),t._v("，对应的页面路由为 "),n("code",[t._v("/list/edit")]),t._v(" 和 "),n("code",[t._v("/list/view")])]),t._v(" "),n("h3",{attrs:{id:"权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[t._v("#")]),t._v(" 权限控制")]),t._v(" "),n("p",[t._v("每个菜单可以在"),n("code",[t._v("meta")]),t._v("内配置"),n("code",[t._v("roles")]),t._v("，需要 "),n("code",[t._v("data.roles")]),t._v(" 有对应的权限才能看到对应的菜单，如当前权限为 "),n("code",[t._v("edit")]),t._v("，则无法看到 "),n("code",[t._v("查看")]),t._v(" 页（需要具备 "),n("code",[t._v("view")]),t._v(" 或者 "),n("code",[t._v("admin")]),t._v(" ）")]),t._v(" "),n("p",[t._v("如果"),n("code",[t._v("data.roles")]),t._v("变更，可以调用"),n("code",[t._v("this.initRouter()")]),t._v("重置路由表和菜单")]),t._v(" "),n("h3",{attrs:{id:"面包屑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面包屑"}},[t._v("#")]),t._v(" 面包屑")]),t._v(" "),n("p",[t._v("面包屑会根据"),n("code",[t._v("routes")]),t._v("的配置自动生成，点击会跳转对应页面，如有页面不希望点击跳转，可以配置其 "),n("code",[t._v("meta.noRedirect")]),t._v(" 为 "),n("code",[t._v("true")])])])}),[],!1,null,null,null);s.default=r.exports},751:function(t,s,a){t.exports=a.p+"assets/img/block-router-example.6562d993.png"}}]);