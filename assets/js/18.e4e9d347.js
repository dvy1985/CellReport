(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{405:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"更多的数据集类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多的数据集类型"}},[s._v("#")]),s._v(" 更多的数据集类型")]),s._v(" "),a("p",[s._v("来自于数据库中的数据，一个sql 可以返回多个数据集(某些数据库引擎不支持)，例如以下语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 产品"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("产品ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 产品"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("产品名称\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 产品\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 类别ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$leibie$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" 类别"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("类别ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 类别"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("类别名称\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 类别"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("当前数据集使用的是第一个数据集中的数据。如果我们想使用第二个数据集中的数据，这时候就需要我们新建下面这个类型的数据集")]),s._v(" "),a("h2",{attrs:{id:"来自其他数据集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自其他数据集"}},[s._v("#")]),s._v(" 来自其他数据集")]),s._v(" "),a("p",[s._v("这里所有有多个数据集返回的数据集名称都会显示，挑选出我们打算引出的数据集，选中正确的序号，就可以像正常数据集一样使用了。\n"),a("img",{attrs:{src:"/img/from_dataset.png",alt:"demo"}})]),s._v(" "),a("h2",{attrs:{id:"来自于excel文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自于excel文件"}},[s._v("#")]),s._v(" 来自于excel文件")]),s._v(" "),a("p",[s._v("一些计划数等数据，通常不会长久保存到数据库中，这时候我们可以直接将excel文件中的数据引入到当前报表中。引入后，我们可以在上面的sql输入框中输入sql（不输入sql 的话，就是原始excel中的数据），对取过来的数据，做进一步的加工或筛选。语法为sqlite的语法。")]),s._v(" "),a("h2",{attrs:{id:"来自api调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自api调用"}},[s._v("#")]),s._v(" 来自API调用")]),s._v(" "),a("p",[s._v("我们可以使用内置函数直接调用API服务（或类似API服务的web服务）。通常我们使用的是函数"),a("code",[s._v("web_request")]),s._v("\n如果需要token等与登录有关的信息，请使用该函数模拟登录。返回的json 数据将会被转换为内部可用的数据集。数据正确取过来后，与sql数据集一样正常使用，没有区别。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("web_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"API网址"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用你的地址替换这里")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'method'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'post'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可用方法: get ,post")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'branch_no'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'410000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用form提交,不需要的话，用null替换冒号后的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用json提交，json 和data 不能同时有值，至少有一个是null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'headers'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 语句必须以逗号结束")]),s._v("\n")])])]),a("h2",{attrs:{id:"来自组件报表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自组件报表"}},[s._v("#")]),s._v(" 来自组件报表")]),s._v(" "),a("p",[s._v("我们的报表很多后，有些指标会在多个报表中出现，这时候如果我们每次制作报表都将这些指标的加工重做一遍，将会造成：")]),s._v(" "),a("ul",[a("li",[s._v("多个报表间同一指标的数据可能不一致")]),s._v(" "),a("li",[s._v("维护复杂，工作量大\n这时候我们可以使用该模式，将已有指标的报表直接引入到当前报表中使用")])]),s._v(" "),a("h2",{attrs:{id:"内存数据-sqlite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存数据-sqlite"}},[s._v("#")]),s._v(" 内存数据(sqlite)")]),s._v(" "),a("p",[s._v("在将所有数据都取到报表引擎后，我们有时候还要再做一些进一步的加工改造，这时候我们可以使用这个类型的数据集，将所有其他数据集当成表，来做进一步的查询。如：已有数据集: ds1、ds2。 我们新建的数据集ds3可以这样写sql:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("selct "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" ds1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" ds2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" ds1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ds2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("不要在这个数据集中引用自己，否则循环引用，会报错。")])]),s._v(" "),a("p",[s._v("这种类似的数据集，总是在其他所有数据集取数完毕后计算。不用关注计算顺序。")]),s._v(" "),a("h2",{attrs:{id:"来自html的table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自html的table"}},[s._v("#")]),s._v(" 来自html的table")]),s._v(" "),a("p",[s._v("很少用到，未实现")])])}),[],!1,null,null,null);t.default=e.exports}}]);