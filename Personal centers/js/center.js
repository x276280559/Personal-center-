 	
 	
//饼状图形区
	var myechart = echarts.init(document.getElementById('a'));
	      	//console.log(myechart)
	      	option = {
		    tooltip : {
		        trigger: 'item',
		        confine:'true',
		        position:'inside',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    //图例组件展现了不同系列的标记(symbol)，颜色和名字
	//	    legend: {
	//	        orient : 'vertical',//图例布局的朝向
	//	       x : 'left',
	//	        data:['现金积分','金积分','银积分','AEQr币','AEQC币','AEQC锁仓币','AEQC可交易币']
	//	    },
		    calculable : true,
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : ['40%','60%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : false
		                    },
		                    labelLine : {
		                        show : false
		                    }
		                },
		                //高亮扇形
		                emphasis : {
		                    label : {
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data:[
		                {value:335, name:'现金积分'},
		                {value:310, name:'金积分'},
		                {value:234, name:'银积分'},
		                {value:135, name:'AEQr币'},
		                {value:135, name:'AEQC币'},
		                {value:135, name:'AEQC锁仓币'},
		                {value:135, name:'AEQC可交易币'}
		            ]
		        }
		    ]
		};
		myechart.setOption(option);
		//列表区
	 