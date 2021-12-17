﻿<report version="2" needCatchQuShuException="False"><dataSets><dataSet name="数据集1" type="sql" dataSource="testsqlite" fields="[&quot;类别名称&quot;,&quot;雇员名字&quot;,&quot;运货商名称&quot;,&quot;订购日期&quot;,&quot;金额&quot;]">SELECT 类别.类别名称, 雇员.姓氏+ 雇员.名字 AS 雇员名字, 运货商.公司名称 AS 运货商名称, 订单.订购日期,
 ([订单明细].[单价]*[数量]*(1-[折扣])/100)*100 AS 金额
FROM 运货商 INNER JOIN (类别 INNER JOIN (雇员 INNER JOIN (订单 INNER JOIN (产品 INNER JOIN 订单明细 ON 产品.产品ID = 订单明细.产品ID) ON 订单.订单ID = 订单明细.订单ID) ON 雇员.雇员ID = 订单.雇员ID) ON 类别.类别ID = 产品.类别ID) ON 运货商.运货商ID = 订单.运货商</dataSet></dataSets><params /><AllGrids><grid append="cellSpacing=0 cellPadding=0  style=&quot;TABLE-LAYOUT: fixed; MARGIN-TOP: 0px; FONT-SIZE: 11px; Z-INDEX: -5; MARGIN-LEFT: 0px;   BORDER-COLLAPSE: collapse;&quot;" optimize="True" name="main" fix_rows="-1" fix_cols="-1" title="main" CanShow_expr=""><columns><column name="a" width="38" fixed="False" /><column name="b" width="43" fixed="False" /><column name="c" width="75" fixed="False" /><column name="d" width="75" fixed="False" /><column name="e" width="75" fixed="False" /><column name="f" width="75" fixed="False" /><column name="g" width="75" fixed="False" /></columns><rows><row name="1" height="27" fixed="False" /><row name="2" height="25" fixed="False" /><row name="3" height="25" fixed="False" /><row name="4" height="25" fixed="False" /><row name="5" height="25" fixed="False" /><row name="6" height="25" fixed="False" /><row name="7" height="25" fixed="False" /><row name="8" height="25" fixed="False" /></rows><cells><cell displayValueExpr="=@value" name="B1" valueExpr="" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-RIGHT="" BORDER-LEFT="" ITALIC="False" UNDERLINE="False" BOLD="True" FONT-SIZE="15" text-align="center" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="C1:E1" valueExpr="对报表现有数据排名" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-RIGHT="" BORDER-LEFT="" ITALIC="False" UNDERLINE="False" BOLD="True" FONT-SIZE="15" text-align="center" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="A2" valueExpr="年度" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="B2" valueExpr="月份" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="C2" valueExpr="发生额" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="D2" valueExpr="同年度排名" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="E2" valueExpr="全表排名(大到小)" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" extendDirection="row" name="A3:A4" valueExpr="=数据集1.group(year(数据集1.订购日期))" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" extendDirection="row" name="B3" valueExpr="=数据集1.group(month(数据集1.订购日期))" rowsOfPage="0" leftHead="" calcLevel="1" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=formatNumber(@value)" name="C3" valueExpr="=数据集1.sum(数据集1.金额)" rowsOfPage="0" leftHead="" calcLevel="2" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="D3" valueExpr="=range_count(c3[&lt;a3&gt;]{},c3)" rowsOfPage="0" leftHead="" calcLevel="3" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="E3" valueExpr="=range_count(c3[&lt;`0&gt;]{},c3)" rowsOfPage="0" leftHead="" calcLevel="3" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="B4" valueExpr="小计" rowsOfPage="0" leftHead="" calcLevel="1" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=formatNumber(@value)" name="C4" valueExpr="=sum(c3{})" rowsOfPage="0" leftHead="" calcLevel="3" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=@value" name="B5" valueExpr="合计" rowsOfPage="0" leftHead="" calcLevel="0" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /><cell displayValueExpr="=formatNumber(@value)" name="C5" valueExpr="=sum(c4{})" rowsOfPage="0" leftHead="" calcLevel="4" BORDER-LEFT="" BORDER-RIGHT="" BORDER-TOP="" BORDER-BOTTOM="" /></cells></grid></AllGrids><reportName>test:/对报表现有数据排名.cr</reportName><layout>[
    {
        &quot;x&quot;: 0,
        &quot;y&quot;: 0,
        &quot;w&quot;: 24,
        &quot;h&quot;: 15,
        &quot;i&quot;: 0,
        &quot;element&quot;: {
            &quot;type&quot;: &quot;layout_div&quot;,
            &quot;label&quot;: &quot;div布局&quot;,
            &quot;span&quot;: 24,
            &quot;icon&quot;: &quot;icon-group&quot;,
            &quot;display&quot;: true,
            &quot;style&quot;: {
                &quot;height&quot;: &quot;100%&quot;
            },
            &quot;component&quot;: &quot;widget-form-group&quot;,
            &quot;prop&quot;: &quot;_random_&quot;,
            &quot;children&quot;: {
                &quot;column&quot;: [
                    {
                        &quot;type&quot;: &quot;luckySheetProxy&quot;,
                        &quot;label&quot;: &quot;main&quot;,
                        &quot;display&quot;: true,
                        &quot;style&quot;: {
                            &quot;height&quot;: &quot;100%&quot;
                        },
                        &quot;no_use_parent_css&quot;: false,
                        &quot;fit&quot;: true,
                        &quot;page_size&quot;: 20,
                        &quot;page_sizes&quot;: &quot;[20, 50, 100, 200]&quot;,
                        &quot;gridName&quot;: &quot;main&quot;,
                        &quot;span&quot;: 24,
                        &quot;component&quot;: &quot;luckySheetProxy&quot;,
                        &quot;prop&quot;: &quot;1638252111569_78246&quot;,
                        &quot;fresh_ds&quot;: [],
                        &quot;fresh_params&quot;: [],
                        &quot;conditionformat_save&quot;: &quot;[]&quot;,
                        &quot;alternateformat_save&quot;: &quot;[]&quot;
                    }
                ]
            }
        },
        &quot;moved&quot;: false
    }
]</layout><includeFiles /><datasources><dataSource name="dfsd" oledb="0">Dsn=testDb</dataSource></datasources><macros /><pageProperty Orientation="True" paperSize="A4" paperSize_rawKind="9" pageHeight="1169" pageWidth="827" marginLeft="1" marginRight="1" marginTop="1" marginBottom="1" Landscape="False" header="" footer="" /><notebook /><template /><conn_list>testsqlite</conn_list><range_level><level>1</level><gridName>main</gridName><s_row>2</s_row><e_row>3</e_row><s_col>0</s_col><e_col>4</e_col></range_level><range_level><level>2</level><gridName>main</gridName><s_row>2</s_row><e_row>2</e_row><s_col>1</s_col><e_col>4</e_col></range_level><defaultsetting><font>微软雅黑</font><font_size>11</font_size><color>black</color><border_style>gray 1px dotted</border_style></defaultsetting><canExecuteExpr /><cache time="10" /><functions /><script /></report>