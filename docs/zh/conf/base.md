# 基本配置

## 报表制作平台的用户登录管理

- admin 用户登录后，在报表组管理中，选登录管理。
 我们通常已经有了成熟的用户管理系统，这时候我们可以直接将已有的用户管理引入到本平台中使用。
::: tip
传入用户名的变量分别是userid和口令password，返回为字典结构，必须有errcode，userid，username。errcode为零，表示验证成功。
:::

~~~js
// 以下是脚本先使用内置字典配置了两个用户：
var userDict={'test':{'password':'password','username':'测试用户1'},
              'test2':{'password':'password','username':'测试用户2'}
             };
if(userDict[userid]!=null ){
  if(password==userDict[userid]['password'])
  	return {'errcode':0,'message':'ok', 'userid':'test','username':userDict[userid]['username'],'old_result':'ok'};
  else
    return {'errcode':1,'message':'error', 'userid':'test','username':userDict[userid]['username'],'old_result':'error'};
}
// 引入外部已有用户管理系统的校验。这里是假设该url 需要使用 form 的post方式提交参数p_userid和p_password，实现验证
var result=web_request({'url':'http://xx.xx.xx.xx/auth/user/login'  
            ,'method':'post','data':{'p_userid':userid,'p_password':password} } );
var json=eval('='+result);	
return {'errcode':json.errcode,'message':json.errmsg, 'userid':json.userid,'username':json.username,'old_result':result};

~~~


## 报表运行前校验

在报表组的任何目录都可以在《设置模板》中设置报表运行前的脚本（后端运行前脚本）。
::: tip
报表运行前后调用的钩子函数，在各个目录和报表中都可以配置。执行时遵循的原则是，先检查整个平台目录下的template.xml中的配置，然后从报表所在报表组中的根目录开始，逐个执行配置语句，配置语句中的变量和函数，在报表真正执行的时候都可以引用到。如果有重复变量或函数，距离报表最近的起作用（我们可以将之前的用临时变量保存，然后就不会被覆盖）。
:::

如果定义了函数before_exec，报表执行前将会先调用他。

~~~js
// 这是一个能力演示。根据情况裁剪添加
function before_exec(){
	var db=openDb('testdb');
	var result=db.select("select fresh_time,load_time from dual");
	db.close();
   if(param.reportName=="test/test111.cr")//遇见这个报表不校验
     return;
	if( __page__.Path=="/f10" or regex_match('f10\\.cr$',param.reportName) 
      or param.reportName in ['t1/b33.cr','t2/a22.cr'])
   {
		var tips=iif(result.is_huizhong,"当前正在汇总，可能数据不准，请稍后重新查询,","")+"使用<load_time,10分钟>,"
				+"本次汇总完成时间"+result.fresh_time.ToString()+",最近数据同步时间"+result.load_time.ToString();
		return {"continue":true,//继续执行标记,可以用来判断是否有权限继续执行
				"cache_id":"report5",//所有缓存的公共标记部分，如果返回null，将不缓存
				"fresh_flag":result.load_time.ToString(),//如果这个值改变就表示当前报表需要刷新了
				"tips":tips//额外的提示信息,
			};
	}else{
		var tips=iif(result.is_huizhong,"当前正在汇总，可能数据不准，请稍后重新查询,","")+"使用<fresh_time，1小时>,"
				+"本次汇总完成时间"+result.fresh_time.ToString()+",最近数据同步时间"+result.load_time.ToString();
		return {"continue":true,//继续执行标记,可以用来判断是否有权限继续执行
				"cache_id":"report6",//所有缓存的公共标记部分，如果返回null，将不缓存
				"fresh_flag":result.fresh_time.ToString(),//如果这个值改变就表示当前报表需要刷新了
				"tips":"===="+tips //额外的提示信息,
			};		
	}
}
~~~
::: warning
**before_exec返回的字典里:**
- **如果包含continue，并且值为false ，报表将不继续执行，向前台返回错误信息。**
- **包含cache_id,并且不为空，将会对报表结果缓存到redis 中。如果没有启动redis，将会报错**
- **如果报表需要缓存，将根据fresh_flag标记报表的基础数据是否改变，从而决定报表是否重新计算**
- tips 是可以被前台接收到的额外提示信息。根据喜好设置内容
:::



## 缺省参数的重置

- 在《设置模板》中设置报表运行前的脚本（后端运行前脚本）添加代码：
 
~~~js
function resetDefaultParam(name){
	if(name=='branch_no')//如果参数名是branch_no ，那么缺省参数就是改wei xxxxx
		return 'xxxxx';
}
~~~

## 前端隔行变色和条件颜色的配置

全局缺省配置，在安装目录的template.xml的footer2中。可以视情况修改
每个目录都可以设置该目录下的所有文件（包含子目录中的）的缺省显示样式。
如果报表不想使用缺省样式，可以点报表上面的黄色条带，然后将右面的是否使用全局样式取消掉。

~~~js
// 控制条件格式，如果列名按正则表达式匹配上了，就用条件样式控制当前列的显示。其他样式例子：
////{column_match:".*(累计)" ,val:'{"type":"dataBar","cellrange":[{"left":283,"width":88,"top":117,"height":25,"left_move":283,"width_move":88,"top_move":117,"height_move":25,"row":[4,4],"column":[3,3],"row_focus":4,"column_focus":3}],"format":["red","#ffffff"]}' },
window.luckysheet_conditionformat=[
		{column_match:".*(占比|率)\$" ,val:'{"type":"colorGradation","cellrange":[{ "row":[0,1],"column":[1,1] }],"format":["rgb(248, 105, 107)", "rgb(255, 235, 132)", "rgb(99, 190, 123)"] }' },
	]

//控制表头、隔行变色等。需要修改的是format 中的有关内容，其他不宜修改。
// head 表头 one 奇数行 two 偶数行 fc 字体颜色 bc 单元格的背景色 foot 表尾
window.luckysheet_alternateformat_save='{"cellrange":{"row":[0,8],"column":[-1,-1]},"format":{"head":{"fc":"#000","bc":"#dff0d8"},"one":{"fc":"#000","bc":"#ffffff"},"two":{"fc":"#000","bc":"#dff0d8"},"foot":{"fc":"#000","bc":"#cef3bf"}},"hasRowHeader":true,"hasRowFooter":false}'

~~~

## 前端的公共数据
- 前端组件的《编辑内容》中，可以使用以下参数引用后端传过来的数据.可以通过添加《动态模板》，将以下代码片段复制到内容里面做测试，以便找到适合自己使用的代码。
~~~js
    context.clickedEle['test'] //点击test 元素后选中的数据，这里的元素指的是页面上的可点击单元。
    //结构为:{data:deepClone(cur_data[0]),cell:cell.innerText,column}
    
    context.report_result.dataSet //sql 结果数据，只有在设计预览状态，或设置变量_need_dataset_=True时才会有这个数据 
    // 内部为多个array ，每一个代表的都是数据集。如 context.report_result.dataSet['test'][0] 是数组。 里面才是真正的数据,第一行是表头，其他是数据
    // 可以简写：
	dataset('累计')

    context.report_result.data['main'] //页面上名字叫main 的报表数据。
    // 格式为：{columns:[],tableData:[],colName_lines:[0,2],extend_lines:[4,22]} ,
    // tableData 存放的所有单元格的数据。colName_lines 列标题起止范围，extend_lines 明细行起止范围
    
    self 配置
    
~~~
::: tip
如果运行时需要数据集的数据，但没有被传给前台，请在后端运行前设置中，加代码：`var _need_dataset_=true; `
:::

## 前端动态模板数据设置
### 动态模板中可能会用到的数据转换
| 表达式 | 解释  |
|-------|-------|
|`dataset('累计')[0]`  | 取数据集：累计 的列名 |
| `dataset('累计').slice(1)` | 取数据集的数据 |
|`Enumerable.from(dataset('累计')).skip(1).select(x=> {return {'name':x[0],value:x[1]} }).toArray()` | 转换数据集累计中的数据为对象：name属性对应第一列，value对应第二列 ，最后转换为数组返回|
~~~html
<dv-scroll-board :config="{
            header: dataset('累计')[0],
            data: dataset('累计').slice(1)
          }" style="width:100%;height:100%;" />


<dv-capsule-chart :config="{
  data: Enumerable.from(dataset('累计')).skip(1).select(x=> {return {'name':x[0],value:x[1]} }).toArray()
}" style="width:100%;height:100%" /> 

<dv-conical-column-chart :config="{
  data: Enumerable.from(dataset('累计')).skip(1).select(x=> {
      return {'name':x[0],'value':x[1]} 
    }).toArray()
}" style="width:100%;height:100%" /> 
~~~

### charts中可能会用到的数据转换

- 内置了已经转换好的数据：valid_data （有效数据，参看chart文档中的dataset）
- series_type 自动转换过来的序列类型

## 前端页面css和js脚本

style标签包起来的部分，将会在报表展现前注入当前页面的样式表中
```
<style>
  #report_app .vue-grid-item:not(.vue-grid-placeholder) {
    background: rgb(255, 254, 254);
    border: 0px solid black;
}
#report_app {
  background-color:#fff ;
}
#report_app .data-progress{
  background-color:#fff ;
}
</style>
```

- script标签包起来的部分，将会在报表展现前执行，如果script中定义了函数`after_report_show_hook`,那么这个函数将会在报表显示后执行
- 可以访问变量_this来动态修改里面的内容。如果不知道结构，我们可以在这个里面加入console.infp(_this)，查看控制台就可以了解内部结构。
- _this.result 代表的就是报表查询结果。
- _this.result.pc_form 如果定义了该变量，那么pc端显示的form将会使用这个定义来显示
- - _this.result.mobile_form 如果定义了该变量，那么移动端显示的form将会使用这个定义来显示
```
<script> 
function after_show_report_hook(){
  	console.info("function report_after_show exec")
}

if(_this.crisMobile)
  window.convert_col_to_button=true //如果是移动端，那么如果只有一个报表，并且 是多行列头的情况下，设置这个参数控制将列转换为标签按钮的形式
console.info(_this) //d打印_this的内容到控制台。这仅仅是测试，生产期间最好不要执行
</script>
```
::: warning
如果在pc_form或mobile_form中也需要script，那么将form内的script改为dyn_script。否则正则匹配script将会匹配不正确从而导致脚本失效。
:::

## 前端动态模板
- 在页面上添加的动态模板，内部脚本是经过简化的vue格式。主要区别是：script中定义的data、methods、computed会直接注入当前模板中，其他vue属性暂时不支持。
- 由于是内置脚本模式，所以不支持import语句，不支持data使用函数返回（但和data函数的作用是一样的，都是只对实例模式，定义的属性不会被共享）。
- style 将是scoped的，style的处理是将每个css前动态加上 了id名称，所以对模板外的其他网页部分没有影响。
- 为避免data、methods中的名字和系统内部定义的名字冲突，最好将data、methods中的名字加上一个固定前缀，如： my_ 。
- export default  用return替代

``` html
<template>
<div class="cr-data-box">
  <div class="item"  @click="my_sayHi2">
    <div class="item-icon" style="background-color: rgb(49, 180, 141);">
        <i class="el-icon-warning"></i>
    </div> 
    <div class="item-info">
        <span class="title" style="color: rgb(49, 180, 141);">12,332</span>
        <div class="info">{{my_test_computed}}错误日志{{my_t_data1 }}</div>
    </div> 
  </div>
</div> 
</template>
<script>
   return {
     data:{
       my_t_data1:'test_data1',
       my_t_data2:'test_data2',
       my_cnt:0,
     },
     computed:{
       my_test_computed(){
        return this.my_t_data1+'_'+this.my_cnt 
       }
     },
     methods:{
         my_sayHi2() { 
            this.my_t_data1='test_'+this.my_cnt;
            this.my_cnt++
        },
         my_sayHi3() { 
            //console.info(this.context.clickedEle['test'])
            console.log("Hi3333"); 
        }
     }
   }
</script>
<style>
.cr-data-box{
  height: 100%;
}
.cr-data-box .item { 
    position: relative;
    margin: 0 auto 10px;
    width: 96%;
    display: flex;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid gray
}
.cr-data-box .item-icon {
    width: 100px;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
}
.cr-data-box .item-icon i {
    font-size: 48px!important;
}
.cr-data-box .item-info {
    border-radius: 0 5px 5px 0;
    border: 1px solid #eee;
    border-left: none;
    background-color: #fff;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.cr-data-box .item-info .title {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
}
.cr-data-box .item-info .info {
    color: #999;
    font-size: 14px; 
    text-align: center;
}
</style>
```
