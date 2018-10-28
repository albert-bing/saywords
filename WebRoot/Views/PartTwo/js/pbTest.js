/**
 * 
 */
			var pdata;
			var n,m;//中间变量 n 开始页 ，m 结束页
			//第一页
			var i1 = 0,
				i2 = 15;
			//第二页
			var j1 = 15,
				j2 = 30;
			//第三页
			var j3 = 30,
				j4 = 45;
			//第四页
			var j5 = 45,
				j6 = 60;
			//第五页
			var j7 = 60,
				j8 = 75;
			//第六页
			var j9 = 75,
				j10 = 90;
			//第七页
			var j11 = 90,
				j12 = 105;
			//第八页
			var j13 = 105,
				j14 = 120;
			//第九页
			var j15 = 120,
				j16 = 135;
			//第十页
			var j17 = 135,
				j18 = 150;
			//第十一页
			var j19 = 150;
				j20 = 165;
			//第十二页
			var j21 = 165;
				j22 = 173;
			var limit_page_number = 1;//当前页码
			var question_data = new Array(); // 记录答案的数组
			$(document)
				.ready(
					function() {
						var xh;
						$.ajax({
							type: "post",
							url: "/parttwo/reqPartTwo", // 获取所有试题
							async: true,
							success: function(data) {
								
								pdata = data;
								init(data, i1, i2,limit_page_number); // 第一页渲染数据
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

						function init(pdata, n1, m1, limit_page_number) {
								m=m1;
								n=n1;
								if(limit_page_number == 1){
									create_page(pdata,i1,i2,limit_page_number);
									answer_A(pdata,i1,i2);
								}
								if(limit_page_number == 2){
									create_page(pdata,j1,j2,limit_page_number);
									answer_A(pdata,j1,j2);
								}
								if(limit_page_number == 3){
									create_page(pdata,j3,j4,limit_page_number);
									answer_A(pdata,j3,j4);
								}
								if(limit_page_number == 4){
									create_page(pdata,j5,j6,limit_page_number);
									answer_A(pdata,j5,j6);
								}
								if(limit_page_number == 5){
									create_page(pdata,j7,j8,limit_page_number);
									answer_A(pdata,j7,j8);
								}
								if(limit_page_number == 6){
									create_page(pdata,j9,j10,limit_page_number);
									answer_A(pdata,j9,j10,limit_page_number);
								}
								if(limit_page_number == 7){
									create_page(pdata,j11,j12,limit_page_number);
									answer_A(pdata,j11,j12);
								}
								if(limit_page_number == 8){
									create_page(pdata,j13,j14,limit_page_number);
									answer_A(pdata,j13,j14);
								}
								if(limit_page_number == 9){
									create_page(pdata,j15,j16,limit_page_number);
									answer_A(pdata,j15,j16);
								}
								if(limit_page_number == 10){
									create_page(pdata,j17,j18,limit_page_number);
									answer_A(pdata,j17,j18,limit_page_number);
								}
								if(limit_page_number == 11){
									create_page(pdata,j19,j20,limit_page_number);
									answer_A(pdata,j19,j20,limit_page_number);
								}
								if(limit_page_number == 12){
									create_page(pdata,j21,j22,limit_page_number);
									answer_A(pdata,j21,j22,limit_page_number);
								}
						}

						/*初始化第一页*/
						/*start*/
						function create_page(pdata,n,m,limit_page_number){
							/*var p = 
							for(int i=0;i<pdata[])*/
							for(var i = n; i < m; i++) {
								// 创建div
								var ques = document.createElement("div");
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
								/*op_a.setAttribute("style", "float: left;");*/
								// 创建A选项
								var A_input = document.createElement("input");
								A_input.setAttribute("id", "A_input" + i);
								A_input.setAttribute("name", "answer" + i);
								A_input.setAttribute("class", "btn");
								A_input.setAttribute("type", "radio");
								A_input.setAttribute("value", "1");
								//A_input.setAttribute("checked","");
								if(pdata[i].ans==1){
								A_input.setAttribute("checked","checked");
								}

								// 创建A选项内容
								var span_A = document.createElement("div");
								span_A.setAttribute("id", "optionA" + i);
								span_A.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
								//span_A.append("从不");
								/* option_all.appendChild(span_A); */
								var label_A = document.createElement("label");
								label_A.setAttribute("for","A_input" + i);
								label_A.append("从不");
								
								span_A.appendChild(label_A);
								
								op_a.appendChild(A_input);
								op_a.appendChild(span_A);
								option_all.appendChild(op_a);
								// 创建换行
								/*
								 * var hh = document.createElement("br");
								 * span_A.insertBefore(hh,
								 * span_A.nextElementSibling);
								 */
								// 创建B选项;
								var op_b = document.createElement("div");
								op_b.setAttribute("class", "op_bb");
								/*op_b.setAttribute("style", "margin-right: 357px;");*/
								
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
								/*B_input.setAttribute("style", "margin-left: -42px");*/
								option_all.appendChild(B_input);

								// 创建B选项内容
								var span_B = document.createElement("div");
								span_B.setAttribute("id", "optionB" + i);
								span_B.setAttribute("style", "float:right;margin-left: 5px;margin-top: 1px;");
								//span_B.append("有时");
								/* option_all.appendChild(span_B); */
								var label_B = document.createElement("label");
								label_B.setAttribute("for","B_input" + i);
								label_B.append("有时");
								
								span_B.appendChild(label_B);
								
								op_b.appendChild(B_input);
								op_b.appendChild(span_B);
								option_all.appendChild(op_b);
								
								// 创建C选项;
								var op_c = document.createElement("div");
								op_c.setAttribute("class", "op_cc");
								/*op_c.setAttribute("style", "float: left;margin-right: 442px;");*/
								
								var C_input = document.createElement("input");
								C_input.setAttribute("id", "C_input" + i);
								C_input.setAttribute("name", "answer" + i);
								C_input.setAttribute("type", "radio");
								C_input.setAttribute("class", "btn");
								C_input.setAttribute("value", "3");
								if(pdata[i].ans==3){
									C_input.setAttribute("checked","checked");
									}
								/*C_input.setAttribute("style", "margin-left: 30px");*/
								option_all.appendChild(C_input);

								// 创建C选项内容
								var span_C= document.createElement("div");
								span_C.setAttribute("id", "optionC" + i);
								span_C.setAttribute("style", "float:right;margin-left: 5px;margin-top: 1px;");
								//span_C.append("经常");
								/* option_all.appendChild(span_B); */
								var label_C = document.createElement("label");
								label_C.setAttribute("for","C_input" + i);
								label_C.append("经常");
								
								span_C.appendChild(label_C);
								
								op_c.appendChild(C_input);
								op_c.appendChild(span_C);
								option_all.appendChild(op_c);
								
								// 创建D选项;
								var op_d = document.createElement("div");
								op_d.setAttribute("class", "op_dd");
								/*op_d.setAttribute("style", "float: left;margin-right: 442px;");*/
								
								var D_input = document.createElement("input");
								D_input.setAttribute("id", "D_input" + i);
								D_input.setAttribute("name", "answer" + i);
								D_input.setAttribute("type", "radio");
								D_input.setAttribute("class", "btn");
								D_input.setAttribute("value", "4");
								if(pdata[i].ans==4){
									D_input.setAttribute("checked","checked");
									}
								/*D_input.setAttribute("style", "margin-left: 30px");*/
								option_all.appendChild(D_input);

								// 创建D选项内容
								var span_D= document.createElement("div");
								span_D.setAttribute("id", "optionD" + i);
								span_D.setAttribute("style", "float:right;margin-left: 5px;margin-top: 1px;");
								//span_D.append("总是");
								/* option_all.appendChild(span_B); */
								var label_D = document.createElement("label");
								label_D.setAttribute("for","D_input" + i);
								label_D.append("总是");
								
								span_D.appendChild(label_D);
								
								op_d.appendChild(D_input);
								op_d.appendChild(span_D);
								option_all.appendChild(op_d);
								/*
								if(pdata[i].optionNumber==2){
									
								}
								else if(pdata[i].optionNumber==4){
									create c,d
									update span_a span b
								}else if(pdata[i].optionNumber==7){
									c,d,e,f,g
									update span_a span_b
								}*/
								// 追加到parent中
								var parent = document.getElementById("parent");
								parent.appendChild(ques);
								/* from_answer.appendChild(ques); */
								ques.appendChild(option_all);
								ques.appendChild(op_a);
								ques.appendChild(op_b);
								ques.appendChild(op_c);
								ques.appendChild(op_d);
							}
						}
						/*end*/
						/*检查是否有题目没有做完*/
						function chenck_finish(pdata, n1, m1) {
							var flag = 1;
							for(var i = n1; i < m1; i++) {
								var op_AA = $("input[name='answer" + i + "']:checked").val();
								/*alert(op_AA);*/
								if(op_AA == undefined) {
									//alert(12);
									flag = 0;
									layer.open({
											type: 1,
											offset: 'auto',
											id: 'layerDemo' + 1,
											content: '<div style="padding: 20px 50px;line-height:30px;">您还有题目没有作答，请检查并作答 </div>',
											btn: '确定',
											btnAlign: 'c',
											shade: 0.5,
											area: ['330px', '180px']
										});
								}
							}
							return flag;
						}
						/* 记录答案 --第一页--*/
						/*---start---*/
						function answer_A(pdata,n1,m1) {
							/*alert(n);*/
							for(var i = n1; i < m1; i++) {
								var op_AA = $("input[name='answer"+i+"']:checked").val();
								/*alert(op_AA);*/
								if(op_AA!=undefined){
								question_data[i] = pdata[i].code+":"+op_AA;
								
								pdata[i].ans = op_AA;
								}
							}
							/*alert(pdata[1].ans);*/
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
						// 消除题目-->到下一页
						var next_page = document.getElementById("next_page");
						next_page.onclick = function() {
							var parent = document.getElementById("parent");
							/*alert(n,m);*/
							if(limit_page_number < 12){
							var flag = chenck_finish(pdata, n, m);
							if(flag == 0){
								chenck_finish(pdata, n, m);
							}else{
								answer_A(pdata,n,m);
							if(limit_page_number<12){
								limit_page_number++;
								$(".tm").remove();
								init(pdata,n+15,m+15,limit_page_number);
								if(limit_page_number==12){
									show_btn();
								}
							}else{
								limit_page_number = 12;
								$(".tm").remove();
								init(pdata,n,m,limit_page_number);
								}
							}
							}else{
								alert("已经是最后一页了。");
							}
						}
						
						// 返回上一页
						var pre_page = document.getElementById("pre_page");
						pre_page.onclick = function() {
							var parent = document.getElementById("parent");
							answer_A(pdata,n,m);
							/*alert(pdata[2].ans);*/
							if(limit_page_number>1){
								limit_page_number--;
								$(".tm").remove();
								init(pdata,n-15,m-15,limit_page_number);
								if(limit_page_number==11){
									hide_a();
								}
							}else{
								limit_page_number = 1;
								$(".tm").remove();
								/*alert(limit_page_number);*/
								init(pdata,i1,i2,limit_page_number);
							}
						}
						});
						
		layui.use('element', function() {
			var $ = layui.jquery,
				element = layui.element; // Tab的切换功能，切换事件监听等，需要依赖element模块
			$(document).ready(function() {
				var second = 2200;
				var n = 0;
				timer = setInterval(function() {
					n++;
					if(n > 100) {
						n = 100;
						clearInterval(timer);
						alert("37分钟的答题时间已到");
					}
					element.progress('demo', n + '%');
				}, 22000);
			});

		});
		
		function answer_A(pdata,n1,m1) {
							/*alert(n);*/
							for(var i = n1; i < m1; i++) {
								var op_AA = $("input[name='answer"+i+"']:checked").val();
								/*alert(op_AA);*/
								if(op_AA!=undefined){
								question_data[i] = pdata[i].code+":"+op_AA;
								
								pdata[i].ans = op_AA;
								}
							}
							/*alert(pdata[1].ans);*/
						}
		//显示导语
			function showView_c(){
				window.open(
				layer.open({
					type:1
					,offset:'auto'
					,id:'layerDemo'+1
					,content: '<div style="padding: 20px 50px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Part 2共有130题，每个题目描述的都是人们在日常生活中的行为表现或者真实感受，请根据您最近一年的实际情况，判断自己在这些行为上的发生频率。<br /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如：<div style="border:1px black solid;widtn:800px,height:200px;">1. 即使当我一个人的时候，我还是觉得有人在看着我。 <br /> &nbsp;&nbsp;&nbsp; O 从不    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O 有时    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O 经常  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      O 总是</div><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如果这种情况对你来说从未发生过，请点击“从不”；如果偶尔会发生，请点击“有时”；如果时不时地就会发生，请点击“经常”；如果这种情况总是伴随着您，请点击“总是”。 </div>'
					,btn:'确定'
					,btnAlign:'c'
					,shade:0.5
					,area:['600px','450px']
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
					,content: '<div style="padding: 20px 50px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Part 2共有130题，每个题目描述的都是人们在日常生活中的行为表现或者真实感受，请根据您最近一年的实际情况，判断自己在这些行为上的发生频率。<br /><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如：<div style="border:1px black solid;widtn:800px,height:200px;">1. 即使当我一个人的时候，我还是觉得有人在看着我。 <br /> &nbsp;&nbsp;&nbsp; O 从不    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O 有时    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    O 经常  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      O 总是</div><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如果这种情况对你来说从未发生过，请点击“从不”；如果偶尔会发生，请点击“有时”；如果时不时地就会发生，请点击“经常”；如果这种情况总是伴随着您，请点击“总是”。 </div>'
					,btn:'确定'
					,btnAlign:'c'
					,shade:0.5
					,area:['600px','450px']
				});
			}
		//提交试卷
		function verifyPaper(){
			//alert(11);
			answer_A(pdata,n,m);
		/*
		 * alert('ss'); alert(pdata[0].ans);
		 */
			for(var i=0; i<173; i++){
				
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
			function tjPaper() {
				
				// alert(JSON.stringify(question_data));
				$.ajax({
					type: "post",
					url: "http://localhost:9999/parttwo/submitPaper",
					async: true,
					data: JSON.stringify(question_data),
					dataType: "json",
					success : function(r) {
						if (r.code == 0) {
							layer.open({
						        type: 1
						        ,offset: 'auto' 
						        ,id: 'layerDemo'+1 
						        ,content: '<div style="padding: 20px 100px;">交卷成功,请勿重复提交。测试结束，感谢您的参与。</div>'
						        ,btn: '确认'
						        ,btnAlign: 'c' 
						        ,shade: 0.5 
						        ,yes: function(){
						          layer.closeAll();
						         //location.href = 'http://localhost:9999/Views/PartThree/pbIntro2.html';
						        // location.href = 'http://localhost:9999/Views/PartOne/login.html';
						        location.href = '/Views/success.html';
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