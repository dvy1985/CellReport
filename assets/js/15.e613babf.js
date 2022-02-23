(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{402:function(a,t,s){"use strict";s.r(t);var e=s(54),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"内置函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[a._v("#")]),a._v(" 内置函数")]),a._v(" "),s("h2",{attrs:{id:"数据集函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据集函数"}},[a._v("#")]),a._v(" 数据集函数")]),a._v(" "),s("h3",{attrs:{id:"group-分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#group-分组"}},[a._v("#")]),a._v(" group 分组")]),a._v(" "),s("p",[a._v("函数说明：\n根据分组表达式，从数据集中选出符合过滤条件的一组组集。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    datasetName.group( select_exp,[filter_exp] )\n      参数说明：\n      select_exp：\t选出的分组表达式，可以是字段列名。\n      当然也可以是表达式\n      filter_exp: \t数据过滤表达式。\n\n      函数示例：\n      ds1.group( ds1.name )\n      从数据源ds1中选取name字段，并按照name列进行分组，取出每一组第一条记\n      录的name字段的值, 不排序\n\n      ds1.group( ds1.name,ds1.sex=='1').asc()\n      从数据源ds1中选取性别为男性的name字段列的值并升序排列，然后按照name\n      字段进行分组，取出每一组第一条记录的name字段的值\n\n      ds1.group( ds1.name, ds1.sex=='1').desc(ds1.id)\n      从数据源ds1中选取性别为男性的name字段列的值并按id字段降序排列\n\n      返回值：\n      一组数据的集合，该集合供子格计算的时候使用\n")])])]),s("h3",{attrs:{id:"select-清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-清单"}},[a._v("#")]),a._v(" select 清单")]),a._v(" "),s("p",[a._v("类似sql语句中的select，返回指定数据集的行集。每一行的值是selcet_expr的计算结果.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ds.select(select_expr[,cond_expr])\n\nds1.select(ds1.first_name + ds1.last_name)\n\n返回值：\n      一组数据的集合，该集合供子格计算的时候使用\n")])])]),s("h3",{attrs:{id:"唯一值计数-distinct-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一值计数-distinct-count"}},[a._v("#")]),a._v(" 唯一值计数 distinct_count")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" distinct_count(select_expr[,cond_expr])\n")])])]),s("h3",{attrs:{id:"求和-sum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求和-sum"}},[a._v("#")]),a._v(" 求和 sum")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("datasetName.sum( select_exp,[filter_exp] )\n    ds.sum(被累加的表达式，条件)\n    满足条件的数据集中的被累加的表达式的求和\n    \n    根据左顶格和上顶格所拥有的数据集的交集，计算当前单元格的值。下同，不再说明\n")])])]),s("h3",{attrs:{id:"最大值-max"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最大值-max"}},[a._v("#")]),a._v(" 最大值 max")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ds.max( select_exp,[filter_exp] )\nds.sum(被计算的表达式，条件)\n满足条件的数据集中的被累加的表达式的求最大\n")])])]),s("h3",{attrs:{id:"datasetname-min-select-exp-filter-exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-min-select-exp-filter-exp"}},[a._v("#")]),a._v(" datasetName.min( select_exp,[filter_exp] )")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  ds.min(被计算的表达式，条件)\n  满足条件的数据集中的被累加的表达式的求最小\n")])])]),s("h3",{attrs:{id:"datasetname-avg-select-exp-filter-exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-avg-select-exp-filter-exp"}},[a._v("#")]),a._v(" datasetName.avg( select_exp,[filter_exp] )")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  ds.avg(被计算的表达式，条件)\n  满足条件的数据集中的被累加的表达式的求平均\n")])])]),s("h3",{attrs:{id:"datasetname-select1-select-exp-filter-exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-select1-select-exp-filter-exp"}},[a._v("#")]),a._v(" datasetName.select1( select_exp,[filter_exp] )")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("当前分组中符合条件的第一条数据\n")])])]),s("h3",{attrs:{id:"datasetname-colcount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-colcount"}},[a._v("#")]),a._v(" datasetName.colcount()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("函数说明：\n数据集的列数\n语法：\ndatasetName.cols()\n")])])]),s("h3",{attrs:{id:"datasetname-count-filter-exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-count-filter-exp"}},[a._v("#")]),a._v(" datasetName.count(filter_exp)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  ds.count(条件)\n  满足条件的数据集中的个数\n")])])]),s("h3",{attrs:{id:"datasetname-colname-col-pos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-colname-col-pos"}},[a._v("#")]),a._v(" datasetName.colName(col_pos)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  数据集的第col_pos列的名字\n")])])]),s("h3",{attrs:{id:"datasetname-valueforcolname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datasetname-valueforcolname"}},[a._v("#")]),a._v(" datasetName.valueForColName()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  函数说明：\n  取数据集的列\n  datasetName.valueForColName( stringExp )\n  datasetName.valueForColName( intExp )\n  参数说明：\n  stringExp \t返回数据集列名的表达式\n  intExp\t\t返回数据集列号的表达式\n")])])]),s("h3",{attrs:{id:"getdatasourcename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdatasourcename"}},[a._v("#")]),a._v(" getDataSourceName()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  函数说明：\n  取数据集的的数据源名称\n  语法：\n  datasetName.getDataSourceName( )\n")])])]),s("h2",{attrs:{id:"集合函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合函数"}},[a._v("#")]),a._v(" 集合函数")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("计算统计报表的时候，最常用的函数\n数据集的group、select以及下面列出的所有集合函数后可以跟：\n//.where(expr) 条件判断 ,通常用不到这个函数\n//.asc(expr) 升序 不跟参数的时候，就是以当前值做排序\n//.desc(expr) 降序 不跟参数的时候，就是以当前值做排序\n//例如:\nds.group(ds.key).asc()\n\nunion_set(ds.group(ds.key),\n    ds2.group(ds2.key))\n.asc()\n")])])])]),a._v(" "),s("h3",{attrs:{id:"并集-union-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并集-union-set"}},[a._v("#")]),a._v(" 并集 union_set")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  使用方法：union_set([ds.group(ds.key)]+ )\n  对各分组集合的ds.key求并集\n")])])]),s("ul",[s("li",[s("strong",[a._v("可以对任意多的分组做并集。")])]),a._v(" "),s("li",[a._v("该函数应用在多数据集的报表中，能够极大的加快报表的开发速度。在数据集做完归并后，相应的子单元格都可以正确引用到归并后的各个数据集中的数据。")]),a._v(" "),s("li",[a._v("举例："),s("code",[a._v("union_set(ds1.group(ds1.id),ds2,group(ds2.id))")]),a._v("\nds1数据集分组后的数据为:")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("id")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("1")])]),a._v(" "),s("tr",[s("td",[a._v("2")])])])]),a._v(" "),s("p",[a._v("ds2数据集分组后的数据为:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("id")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("2")])]),a._v(" "),s("tr",[s("td",[a._v("3")])])])]),a._v(" "),s("p",[a._v("这两个集合的并集为："),s("code",[a._v("1，2，3")]),a._v("\n在某单元格使用该函数后，报表运算后，从该单元格扩展出3个单元格。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("单元格行号")]),a._v(" "),s("th",[a._v("对应的Ds1的数据分组")]),a._v(" "),s("th",[a._v("对应的Ds2的数据分组")]),a._v(" "),s("th",[a._v("子格运算公式\t运算结果")])])]),a._v(" "),s("tbody",[s("tr",[s("td"),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("=ds1.id+ds2.id")])]),a._v(" "),s("tr",[s("td",[a._v("1")]),a._v(" "),s("td",[a._v("1")]),a._v(" "),s("td",[a._v("空")]),a._v(" "),s("td",[a._v("1")])]),a._v(" "),s("tr",[s("td",[a._v("2")]),a._v(" "),s("td",[a._v("2")]),a._v(" "),s("td",[a._v("2")]),a._v(" "),s("td",[a._v("4")])]),a._v(" "),s("tr",[s("td",[a._v("3")]),a._v(" "),s("td",[a._v("空")]),a._v(" "),s("td",[a._v("3")]),a._v(" "),s("td",[a._v("3")])])])]),a._v(" "),s("h3",{attrs:{id:"交集-intersection-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交集-intersection-set"}},[a._v("#")]),a._v(" 交集 intersection_set")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  使用方法：intersection_set([ds.group(ds.key)]+, (sort)? )\n  对各分组集合的ds.key求交集\n")])])]),s("h3",{attrs:{id:"差集-subtract-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#差集-subtract-set"}},[a._v("#")]),a._v(" 差集 subtract_set")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  使用方法：subtract_set([ds.group(ds.key)]+, (sort)? )\n  以第一个分组为主集合，减去其他各集合的元素\n")])])]),s("h3",{attrs:{id:"左外连接-leftjoin-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左外连接-leftjoin-set"}},[a._v("#")]),a._v(" 左外连接 leftJoin_set")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  leftJoin_set([ds.group(ds.key)]+, (sort)? )\n  以第一个分组为主集合，将后续集合按关键字合并。这个函数将会完全保留主数据集中的所有数据，不管关键字是否重复。\n  其他集合函数\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("除了leftJoin_set，其他集合函数都要保证每个数据集的计算结果是唯一的。只有leftJoin_set 的第一个主数据集的计算结果可以不唯一。其他集合的数据集计算如果使用select，需要自行保证计算结果唯一，否则最终结果在做完集合运算后可能不正确。")])]),a._v(" "),s("h2",{attrs:{id:"集合运算后可接函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合运算后可接函数"}},[a._v("#")]),a._v(" 集合运算后可接函数")]),a._v(" "),s("h3",{attrs:{id:"asc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asc"}},[a._v("#")]),a._v(" asc()")]),a._v(" "),s("p",[a._v("对已经生成的列表做升序计算。如果没有参数，将按集合元素的value计算顺序，有参数就按参数计算结果计算顺序")]),a._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("union_set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ds2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("asc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("asc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"desc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desc"}},[a._v("#")]),a._v(" desc()")]),a._v(" "),s("p",[a._v("对已经生成的列表做降序计算")]),a._v(" "),s("h3",{attrs:{id:"where"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[a._v("#")]),a._v(" where()")]),a._v(" "),s("p",[a._v("对已经生成的列表做降序计算")]),a._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("union_set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ds2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"to-dict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-dict"}},[a._v("#")]),a._v(" to_dict()")]),a._v(" "),s("p",[a._v("将当前生成的列表转换为字典，主键为元素的值\n主要使用在自定义函数中，对数据集做进一步计算。如查找")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ds_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//定义一个全局变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//在所有数据集取数结束，计算报表的单元格前，将会自动调用这个函数")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("_after_calc_dataset_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   ds_dict"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("订单"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("to_dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//字典的key是订单ID，value是group,group.rows是所有订单ID相同的行组成的列表")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("订单ID_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("订单"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("rowno")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" _yc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ds_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("订单"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_yc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//查找`订单ID`对应的group对应有多少条数据")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" _yc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 也可以加条件，注意条件里面的数据集名称要和 函数前的一样。_yc.count(_yc.rowno<=rowno);")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//                                                    ^          ^")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//下面是类似sql中的row_number功能的实现。rowno是原始数据中存放的行号，通过判断行号是否相等来判断是否是同一条数据")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//当然这样的实现很丑陋，但这仅仅是一个功能演示。_yc.count(_yc.rowno<=rowno)也可以实现类似功能")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" idx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" _yc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    idx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("idx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("rowno"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("rowno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  \t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("做好预定义后，我们可以在单元格中引用该函数")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("订单ID_count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("订单"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//计算某个订单号有几条记录")]),a._v("\n")])])]),s("h2",{attrs:{id:"单元格函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元格函数"}},[a._v("#")]),a._v(" 单元格函数")]),a._v(" "),s("h3",{attrs:{id:"ifempty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ifempty"}},[a._v("#")]),a._v(" ifEmpty(,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('  函数说明：\n  从前往后，参数如果不为null或空字符串，就返回当前参数值，如果都是为空，就返回""\n  语法：\n  ifEmpty(ValueExp1, ValueExp2,..... )\n')])])]),s("h3",{attrs:{id:"iif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iif"}},[a._v("#")]),a._v(" iif(,,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  函数说明：\n  根据布尔表达式的不同结果，返回不同的值\n  语法：\n  iif( (条件, 结果,)+,falseValueExp)\n  ***条件结果对*** 可以无限多，找到的第一个条件成立时，返回紧跟其后的结果\n\n例子：iif（param.xxx=='1','x1',param.yyy==2,'x2','x3')\n  解释：当param.xxx==1时,返回 'x1'，param.yyy==2时，返回 'x2'，否则返回'x3'\n  优先判断前面的条件\n")])])]),s("h3",{attrs:{id:"sum-expr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sum-expr"}},[a._v("#")]),a._v(" sum(expr)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("如果参数是集合类型，将对其做累加，其他类型不计算，直接返回\n")])])]),s("h3",{attrs:{id:"max-expr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-expr"}},[a._v("#")]),a._v(" max(expr)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("如果参数是集合类型，将对其计算最大值，其他类型不计算，直接返回\n")])])]),s("h3",{attrs:{id:"min-expr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-expr"}},[a._v("#")]),a._v(" min(expr)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("如果参数是集合类型，将对其计算最小值，其他类型不计算，直接返回\n")])])]),s("h3",{attrs:{id:"avg-expr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avg-expr"}},[a._v("#")]),a._v(" avg(expr)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("如果参数是集合类型，将对其做累加后计算平均值，其他类型不计算，直接返回\n")])])]),s("h3",{attrs:{id:"desc-rank"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desc-rank"}},[a._v("#")]),a._v(" desc_rank()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("参数必须是单元格名称，现在只对只有一个行扩展的情况有效。\n按降序排名。 数字最大的是第一名。 参数填对应单元格。如：第1名有2个重复，下一个名次是3\n")])])]),s("h3",{attrs:{id:"asc-rank"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asc-rank"}},[a._v("#")]),a._v(" asc_rank()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("参数必须是单元格名称，现在只对只有一个行扩展的情况有效。\n按升序排名。数字小大的是第一名。参数填对应单元格。如：第1名有2个重复，下一个名次是3 \n")])])]),s("h3",{attrs:{id:"desc-dense-rank"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#desc-dense-rank"}},[a._v("#")]),a._v(" desc_dense_rank()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("参数必须是单元格名称，现在只对只有一个行扩展的情况有效。\n按降序做密集排名。数字最大的是第一名。参数填对应单元格。如：第1名有两个重复，下一个名次是2 \n")])])]),s("h3",{attrs:{id:"asc-dense-rank"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asc-dense-rank"}},[a._v("#")]),a._v(" asc_dense_rank()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("参数必须是单元格名称，现在只对只有一个行扩展的情况有效。\n按降序做密集排名。数字最小的是第一名。参数填对应单元格。 名次是连续的，如：第1名有两个重复，下一个名次是2  \n")])])]),s("h3",{attrs:{id:"fromto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fromto"}},[a._v("#")]),a._v(" fromto(,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("fromto(开始值，结束值，步长）\n如：fromto(1,20) 缺省步长为1\nfromto(1,20,2)\n通常我们在计算补齐数据的时候使用它作为数据集来计算连续数据，从而达到补齐效果\n")])])]),s("h3",{attrs:{id:"row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[a._v("#")]),a._v(" row()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("函数说明：\n取得当前格所有行的行号\n")])])]),s("h3",{attrs:{id:"col"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#col"}},[a._v("#")]),a._v(" col()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("函数说明：\n取得当前单元格所在列的列号\n")])])]),s("h3",{attrs:{id:"cellcolname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cellcolname"}},[a._v("#")]),a._v(" cellColName()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  函数说明：\n  取得当前单元格所在列的列名\n  语法：\n  cellColName()\n")])])]),s("h3",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[a._v("#")]),a._v(" query(,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  query(数据库连接名字,sql语句)\n")])])]),s("h3",{attrs:{id:"range-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#range-count"}},[a._v("#")]),a._v(" range_count(,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  range_count(单元格列表,值1,是否相等,值2,是否相等)\n  单元格列表中 大于值1 小于 值2的有多少个\n  是否相等：缺省为相等\n")])])]),s("h3",{attrs:{id:"vaule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vaule"}},[a._v("#")]),a._v(" @vaule")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("本单元格的实际值\n")])])]),s("h3",{attrs:{id:"floor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#floor"}},[a._v("#")]),a._v(" floor()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  取带小数点的数字的地板值\n  floor(3.5)=4\n")])])]),s("h3",{attrs:{id:"ceiling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ceiling"}},[a._v("#")]),a._v(" ceiling()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  取带小数点的数字的天板值\n  ceiling(3.5)=3\n")])])]),s("h2",{attrs:{id:"日期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日期函数"}},[a._v("#")]),a._v(" 日期函数")]),a._v(" "),s("h3",{attrs:{id:"date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[a._v("#")]),a._v(" date(,,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  使用方法：date(year,month,day)\n  例如 date(2021,12,1) 结果就是2021年12月1日\n")])])]),s("h3",{attrs:{id:"adddays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adddays"}},[a._v("#")]),a._v(" .AddDays()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  必须是日期型变量才能使用\n  使用方法：date(2014,1,2).AddDays(-1)\n  结果：2014-1-1\n")])])]),s("h3",{attrs:{id:"addmonths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addmonths"}},[a._v("#")]),a._v(" .AddMonths()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  必须是日期型变量才能使用\n  使用方法：date(2014,2,2).AddMonths(-1)\n  结果：2014-1-2\n")])])]),s("h3",{attrs:{id:"addyears"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addyears"}},[a._v("#")]),a._v(" .AddYears()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  必须是日期型变量才能使用\n  使用方法：date(2014,2,2).AddYears(-1)\n  结果：2013-2-2\n")])])]),s("h3",{attrs:{id:"today"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#today"}},[a._v("#")]),a._v(" today()")]),a._v(" "),s("p",[a._v("当天")]),a._v(" "),s("h3",{attrs:{id:"prevday"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevday"}},[a._v("#")]),a._v(" prevDay()")]),a._v(" "),s("p",[a._v("昨天"),s("br"),a._v(" "),s("strong",[a._v("以下函数如果没有参数，就是以当前日期计算，有的话就是按指定日期开始计算")])]),a._v(" "),s("h3",{attrs:{id:"firstdayofyear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firstdayofyear"}},[a._v("#")]),a._v(" firstDayOfYear()")]),a._v(" "),s("p",[a._v("指定日期的当年第一天")]),a._v(" "),s("h3",{attrs:{id:"prevmonth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevmonth"}},[a._v("#")]),a._v(" prevMonth()")]),a._v(" "),s("p",[a._v("上月同一天")]),a._v(" "),s("h3",{attrs:{id:"prevyear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevyear"}},[a._v("#")]),a._v(" prevYear()")]),a._v(" "),s("p",[a._v("上年同一天")]),a._v(" "),s("h3",{attrs:{id:"quaterend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quaterend"}},[a._v("#")]),a._v(" quaterEnd()")]),a._v(" "),s("p",[a._v("本季度最后一天")]),a._v(" "),s("h3",{attrs:{id:"quaterbegin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quaterbegin"}},[a._v("#")]),a._v(" quaterBegin()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("本季度第一天   \n")])])]),s("h3",{attrs:{id:"monthend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monthend"}},[a._v("#")]),a._v(" monthEnd()")]),a._v(" "),s("p",[a._v("本月最后一天")]),a._v(" "),s("h3",{attrs:{id:"monthbegin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monthbegin"}},[a._v("#")]),a._v(" monthBegin()")]),a._v(" "),s("p",[a._v("本月第一天")]),a._v(" "),s("h3",{attrs:{id:"weekbegin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weekbegin"}},[a._v("#")]),a._v(" weekBegin()")]),a._v(" "),s("p",[a._v("本周第一天")]),a._v(" "),s("h3",{attrs:{id:"weekend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weekend"}},[a._v("#")]),a._v(" weekEnd()")]),a._v(" "),s("p",[a._v("本周最后一天")]),a._v(" "),s("h3",{attrs:{id:"weeknum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weeknum"}},[a._v("#")]),a._v(" weekNum()")]),a._v(" "),s("p",[a._v("星期几")]),a._v(" "),s("h3",{attrs:{id:"year"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#year"}},[a._v("#")]),a._v(" year()")]),a._v(" "),s("p",[a._v("年")]),a._v(" "),s("h3",{attrs:{id:"quater"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quater"}},[a._v("#")]),a._v(" quater()")]),a._v(" "),s("p",[a._v("季度")]),a._v(" "),s("h3",{attrs:{id:"month"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#month"}},[a._v("#")]),a._v(" month()")]),a._v(" "),s("p",[a._v("月")]),a._v(" "),s("h3",{attrs:{id:"dayofyear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dayofyear"}},[a._v("#")]),a._v(" dayOfYear()")]),a._v(" "),s("p",[a._v("本年的几天")]),a._v(" "),s("h3",{attrs:{id:"dayofmonth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dayofmonth"}},[a._v("#")]),a._v(" dayOfMonth()")]),a._v(" "),s("p",[a._v("本月的几天")]),a._v(" "),s("h3",{attrs:{id:"hour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hour"}},[a._v("#")]),a._v(" hour()")]),a._v(" "),s("p",[a._v("24小时制的小时")]),a._v(" "),s("h3",{attrs:{id:"minute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minute"}},[a._v("#")]),a._v(" minute()")]),a._v(" "),s("p",[a._v("分钟")]),a._v(" "),s("h3",{attrs:{id:"second"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#second"}},[a._v("#")]),a._v(" second()")]),a._v(" "),s("p",[a._v("秒")]),a._v(" "),s("h3",{attrs:{id:"formatdatetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatdatetime"}},[a._v("#")]),a._v(" formatDatetime()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("格式化日期\nG 年代标志符   y 年   M 月   d 日\nh 时 在上午或下午 (1~12)   H 时 在一天中 (0~23)\nm 分   s 秒   S 毫秒   E 星期   D 一年中的第几天\nF 一月中第几个星期几   w 一年中第几个星期   W 一月中第几个星期\na 上午 / 下午 标记符   k 时 在一天中 (1~24)\nK 时 在上午或下午 (0~11)\nz 时区\n\n缺省格式为：yyyy-MM-dd\n如果第一个参数不是日期类型，那么将使用缺省格式分析该字符串，将之装换为日期后再格式化\n举例：formatDatetime('2007-01-01','yyyy年MM月dd日HH时mm分ss秒')\nformatDatetime('2007-01-01')\n")])])]),s("h2",{attrs:{id:"字符串函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串函数"}},[a._v("#")]),a._v(" 字符串函数")]),a._v(" "),s("h3",{attrs:{id:"replacestr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacestr"}},[a._v("#")]),a._v(" replaceStr(,,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  query(源字符串,被替换字符串,替换字符串)\n")])])]),s("h3",{attrs:{id:"substring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[a._v("#")]),a._v(" substring(,,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  substring(源字符串,开始位置,结束位置)\n")])])]),s("h3",{attrs:{id:"length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[a._v("#")]),a._v(" length()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  length(字符串) 字符串长度\n")])])]),s("h3",{attrs:{id:"indexof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexof"}},[a._v("#")]),a._v(" indexof(,,)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  indexof(目标字符串,被查找字符串,(开始查找的位置)?)\n")])])]),s("h3",{attrs:{id:"isempty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isempty"}},[a._v("#")]),a._v(" isEmpty()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('  isEmpty(目标)\n  如果目标为NULL返回true\n  如果不是字符串,做toString()后作为字符串判断\n  如果是字符串，且等于"",返回true\n')])])]),s("h3",{attrs:{id:"formatnumber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formatnumber"}},[a._v("#")]),a._v(" formatNumber()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('  格式化数字。\n  缺省格式：###########0.##\n  如： formatNumber(1234.567) 输出为 1234.57\n  如要指定格式，在第二个参数写格式。\n  如：formatNumber(1234,567,"#####.0000")输出为：1234.5670\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);