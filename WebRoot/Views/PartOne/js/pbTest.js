/**
 * 
 */

			var pdata;
			var i1 = 0,
				i2 = 15;
			var j1 = 15,
				j2 = 28;
			var limit_page_number = 1;
			var question_data = new Array(); // 记录答案的数组
			$(document)
				.ready(
					function() {
						var xh;
						$.ajax({
							type: "post",
							url: "/partone/reqPartOne", // 获取所有试题
							async: true,
							success: function(data) {
								pdata = data;
								console.log(data);
								init(data, i1, i2); // 第一页渲染数据
								hide_a();
							},
							error : function(r) {
								layer.open({
							        type: 1
							        ,offset: 'auto' 
							        ,id: 'layer'+1 
							        ,content: '<div style="padding: 20px 100px;">服务器暂时无响应，请稍后再试</div>'
							        ,btn: '关闭全部'
							        ,btnAlign: 'c'
							        ,shade: 0.5
							        ,yes: function(){
							          layer.closeAll();
							        }
							      });
							}
						});

						// 初始化第1页

						function init(pdata, i1, i2) {
							for(var i = i1; i < i2; i++) {
								// 创建div
								var ques = document.createElement("div");
								// 给题目添加背景颜色
								if(i%2==0){
									ques.setAttribute("style","background-color:rgba(0,150,136,0.3)");
								}
								ques.setAttribute("class", "tm");
								// 创建问题
								var h = document.createElement("p");
								h.append(i + 1 + "." + pdata[i].stem);
								ques.appendChild(h);


								var option_all = document.createElement("div");
								option_all.setAttribute("class", "option_AB");

								var op_a = document.createElement("div");
								op_a.setAttribute("class", "op_aa");
								op_a.setAttribute("style", "float: left;");
								// 创建A选项
								var A_input = document.createElement("input");
								A_input.setAttribute("id", "A_input" + i);
								A_input.setAttribute("name", "answer" + i);
								A_input.setAttribute("class", "btn");
								A_input.setAttribute("type", "radio");
								A_input.setAttribute("value", "1");
								A_input.setAttribute("checked","");
								if(pdata[i].ans==1){
								A_input.setAttribute("checked","checked");
								}

								// 创建A选项内容
								var span_A = document.createElement("div");
								span_A.setAttribute("id", "optionA" + i);
								span_A.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;cursor: pointer;");
								//span_A.setAttribute("onClick","optionA"+i+".checked=true");
								/*span_A.append("是");*/
								var label_A = document.createElement("label");
								label_A.setAttribute("for","A_input" + i);
								label_A.append("是");
								
								span_A.appendChild(label_A);
								/* option_all.appendChild(span_A); */

								op_a.appendChild(A_input);
								op_a.appendChild(span_A);
								option_all.appendChild(op_a);
								// 创建换行
								/*
								 * var hh = document.createElement("br");
								 * span_A.insertBefore(hh,
								 * span_A.nextElementSibling);
								 */

								var op_b = document.createElement("div");
								op_b.setAttribute("class", "op_bb");
								op_b.setAttribute("style", "float: right;margin-right: 800px;");
								// 创建B选项;
								var B_input = document.createElement("input");
								B_input.setAttribute("id", "B_input" + i);
								B_input.setAttribute("name", "answer" + i);
								B_input.setAttribute("type", "radio");
								B_input.setAttribute("class", "btn");
								B_input.setAttribute("value", "2");
								//B_input.setAttribute("checked","");
								if(pdata[i].ans==2){
									B_input.setAttribute("checked","checked");
									}
								B_input.setAttribute("style", "margin-left: 30px");
								option_all.appendChild(B_input);

								// 创建B选项内容
								var span_B = document.createElement("div");
								span_B.setAttribute("id", "optionB" + i);
								span_B.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
								/*span_B.append("否");*/
								/* option_all.appendChild(span_B); */
								var label_B = document.createElement("label");
								label_B.setAttribute("for","B_input" + i);
								label_B.append("否");
								
								span_B.appendChild(label_B);

								op_b.appendChild(B_input);
								op_b.appendChild(span_B);
								option_all.appendChild(op_b);
								// 追加到parent中
								var parent = document.getElementById("parent");
								parent.appendChild(ques);
								/* from_answer.appendChild(ques); */
								ques.appendChild(option_all);
								ques.appendChild(op_a);
								ques.appendChild(op_b);
							}
						}


						/* 记录答案 */
						/*---start---*/
						function anwser_A() {
							for(var i = i1; i < i2; i++) {
								var op_AA = $("input[name='answer" + i + "']:checked").val();
								if(op_AA!=undefined){
								question_data[i] = pdata[i].code+":"+op_AA;
								pdata[i].ans = op_AA;
								}
							}
						/* alert(question_data); */
						}
						/*---end---*/
						/* 记录答案 */
						// 显示按钮
						function show_btn(){
							/*alert("we");*/
							$("#ans").toggle().show();
						}
						//隐藏按钮
						function hide_a(){
							$("#ans").toggle().hide();
						}
						// 消除题目-->下一页
						var next_page = document.getElementById("next_page");
						next_page.onclick = function() {
							var parent = document.getElementById("parent");
							/*
							 * var child_all =
							 * document.getElementsByClassName("tm");
							 * child_all.remove();
							 */
							anwser_A();
							if(limit_page_number>=2){
								alert("已经是最后一页了。");
							}else{
								limit_page_number++;
								$(".tm").remove();
								create_page(pdata, j1, j2);
							}
							show_btn();
						}

						// 增加题目
						function create_page(pdata, j1, j2) {

							for(var j = j1; j < j2; j++) {
								// 创建div
								var ques = document.createElement("div");
								if(j%2==0){
									ques.setAttribute("style","background-color:rgba(0,150,136,0.3)");
								}
								ques.setAttribute("class", "tm");
								// 创建问题
								var h = document.createElement("p");
								h.append(j + 1 + "." + pdata[j].stem);
								ques.appendChild(h);
								/*
								 * h.innerHtml(i1+"."+pdata.STEM);
								 * ques.appendChild(h);
								 */

								var option_all = document.createElement("div");
								option_all.setAttribute("class", "option_AB");

								var op_a = document.createElement("div");
								op_a.setAttribute("class", "op_aa");
								op_a.setAttribute("style", "float: left;");
								// 创建A选项
								var A_input = document.createElement("input");
								A_input.setAttribute("id", "A_input" + j);
								A_input.setAttribute("name", "answer" + j);
								A_input.setAttribute("type", "radio");
								A_input.setAttribute("value", "1");
								A_input.setAttribute("checked","");
								if(pdata[j].ans==1){
									A_input.setAttribute("checked","checked");
									}
								// A_input.setAttribute("checked","checked");
								/* option_all.appendChild(A_input); */

								// 创建A选项内容
								var span_A = document.createElement("div");
								span_A.setAttribute("id", "optionA" + j);
								span_A.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
								/*span_A.append("是");*/
								/* option_all.appendChild(span_A); */
								var label_A = document.createElement("label");
								label_A.setAttribute("for","A_input" + j);
								label_A.append("是");
								
								span_A.appendChild(label_A);

								op_a.appendChild(A_input);
								op_a.appendChild(span_A);
								option_all.appendChild(op_a);

								var op_b = document.createElement("div");
								op_b.setAttribute("class", "op_bb");
								op_b.setAttribute("style", "float: right;margin-right: 800px;");

								// 创建B选项;
								var B_input = document.createElement("input");
								B_input.setAttribute("id", "B_input" + j);
								B_input.setAttribute("name", "answer" + j);
								B_input.setAttribute("type", "radio");
								B_input.setAttribute("value", "2");
								if(pdata[j].ans==2){
									B_input.setAttribute("checked","checked");
									}
								B_input.setAttribute("style", "margin-left: 30px");


								// 创建B选项内容
								var span_B = document.createElement("div");
								span_B.setAttribute("id", "optionB" + j);
								span_B.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
								/*span_B.append("否");*/
								/* option_all.appendChild(span_B); */
								var label_B = document.createElement("label");
								label_B.setAttribute("for","B_input" + j);
								label_B.append("否");
								
								span_B.appendChild(label_B);

								op_b.appendChild(B_input);
								op_b.appendChild(span_B);
								option_all.appendChild(op_b);
								// 追加到parent中
								var par = document.getElementById("parent");
								par.appendChild(ques);
								ques.appendChild(option_all);
								ques.appendChild(op_a);
								ques.appendChild(op_b);
							}
							var tj = document.getElementById("TJ");
							tj.style.display = 'block';
						}

						/* 记录答案 */
						/*---start---*/
						function anwser_B() {
							for(var i = j1; i < j2; i++) {
								var op_AA = $("input[name='answer" + i + "']:checked").val();
								if(op_AA!=undefined){
								question_data[i] = pdata[i].code+':'+op_AA;
								pdata[i].ans = op_AA;
								}
							}
							// alert(question_data);
						}
						/*---end---*/
						/* 记录答案 */

						// 返回上一页
						var pre_page = document.getElementById("pre_page");
						pre_page.onclick = function() {
							var parent = document.getElementById("parent");
							anwser_B();
							if(limit_page_number<=1){
								
							}else{
								limit_page_number--;
								$(".tm").remove();
								init(pdata, i1, i2);
							}
							hide_a();
						}
					});
		
		layui.use('element', function() {
			var $ = layui.jquery,
				element = layui.element; // Tab的切换功能，切换事件监听等，需要依赖element模块
			$(document).ready(function() {
				var second = 480;
				var n = 0;
				timer = setInterval(function() {
					n++;
					if(n > 100) {
						n = 100;
						clearInterval(timer);
						alert("8分钟的答题时间已到");
					}
					element.progress('demo', n + '%');
				}, 4800);
			});
		});
		function anwser_B() {
			for(var i = j1; i < j2; i++) {
				var op_AA = $("input[name='answer" + i + "']:checked").val();
				if(op_AA!=undefined){
				question_data[i] = pdata[i].code+':'+op_AA;
				pdata[i].ans = op_AA;
				}
			}
			// alert(question_data);
		}
		function anwser_A() {
			for(var i = i1; i < i2; i++) {
				var op_AA = $("input[name='answer" + i + "']:checked").val();
				if(op_AA!=undefined){
				question_data[i] = pdata[i].code+":"+op_AA;
				pdata[i].ans = op_AA;
				}
			}
		/* alert(question_data); */
		}
		
		function verifyPaper(){
			anwser_A();
			anwser_B();
		/*
		 * alert('ss'); alert(pdata[0].ans);
		 */
			for(var i=0; i<28; i++){
				
				if(pdata[i].ans==0){
					
					layer.open({
				        type: 1
				        ,offset: 'auto' 
				        ,id: 'layer'+1 
				        ,content: '<div style="padding: 20px 100px;">还有题目未完成</div>'
				        ,btn: '关闭全部'
				        ,btnAlign: 'c' 
				        ,shade: 0.5
				        ,yes: function(){
				          layer.closeAll();
				        }
				      });
					return 0;
				}
			}
			tjPaper();
		}
			//显示导语
			function showView_c(){
				window.open(
				layer.open({
					type:1
					,offset:'auto'
					,id:'layerDemo'+1
					,content: '<div style="padding: 20px 50px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Part 1共有28题，每个题目描述的都是人们在日常生活中的行为表现或者真实感受，请根据您最近一年的实际情况，判断自己是否具有这些特征。<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如：<br/><div style="border:1px black solid">1. 有时，当我独自一人的时候，也会听到别人喊我名字。<br />   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O是    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O否</div> <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果这件事情在你身上曾经发生过，请点击“是”；如果没有发生过，请点击“否”。</div>'
					,btn:'确定'
					,btnAlign:'c'
					,shade:0.5
					,area:['550px','450px']
				})
				);
			}
			// 定时器，来控制弹出框的时间的
			setTimeout("showView_c()",100);
			function showView(){
				layer.open({
					type:1
					,offset:'auto'
					,id:'layerDemo'+1
					,content: '<div style="padding: 20px 50px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Part 1共有28题，每个题目描述的都是人们在日常生活中的行为表现或者真实感受，请根据您最近一年的实际情况，判断自己是否具有这些特征。<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如：<br/><div style="border:1px black solid">1. 有时，当我独自一人的时候，也会听到别人喊我名字。<br />   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O是    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O否</div> <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果这件事情在你身上曾经发生过，请点击“是”；如果没有发生过，请点击“否”。</div>'
					,btn:'确定'
					,btnAlign:'c'
					,shade:0.5
					,area:['550px','450px']
				});
			}
			//提交试卷
			function tjPaper() {
				
				// alert(JSON.stringify(question_data));
				$.ajax({
					type: "post",
					url: "http://localhost:9999/partone/submitPaper",
					async: true,
					data: JSON.stringify(question_data),
					dataType: "json",
					success : function(r) {
						if (r.code == 0) {
							layer.open({
						        type: 1
						        ,offset: 'auto' 
						        ,id: 'layerDemo'+1 
						        ,content: '<div style="padding: 20px 95px;">交卷成功,请勿重复提交。Part 1测试已结束，请您继续完成Part 2测试。</div>'
						        ,btn: '确定'
						        ,btnAlign: 'c' 
						        ,shade: 0.5 
						        ,yes: function(){
						          layer.closeAll();
						         location.href = 'http://localhost:9999/parttwo';
						         //location.href = 'http://localhost:9999/Views/PartOne/login.html';
						        }
						      });
						} else {
							layer.open({
						        type: 1
						        ,offset: 'auto' 
						        ,id: 'layerDemo'+1 
						        ,content: '<div style="padding: 20px 100px;">交卷失败，请重新提交</div>'
						        ,btn: '关闭全部'
						        ,btnAlign: 'c' 
						        ,shade: 0.5 
						        ,yes: function(){
						          layer.closeAll();
						        }
						      });
						}

					},
					error : function(r) {
						layer.open({
					        type: 1
					        ,offset: 'auto' 
					        ,id: 'layerDemo'+1 
					        ,content: '<div style="padding: 20px 100px;">服务器暂时无响应，请稍后提交</div>'
					        ,btn: '关闭全部'
					        ,btnAlign: 'c' 
					        ,shade: 0.5 
					        ,yes: function(){
					          layer.closeAll();
					        }
					      });
					}
				});
			}
			layui.use(['element', 'layer'], function() {
				var element = layui.element;
				var layer = layui.layer;

				// 监听折叠
				/*
				 * element.on('collapse(test)', function(data) {
				 * layer.msg('展开状态：' + data.show); });
				 */
			});