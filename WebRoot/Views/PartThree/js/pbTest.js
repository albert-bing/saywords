/**
 * 
 */

var pdata;
var current_page;
var s = 0; //题目数量
var current_page_number = 3; //当前页码
var question_data = new Array(); // 记录答案的数组
var group = new Array(); //分组数组
$(document)
	.ready(
		function() {
			var xh;
			$.ajax({
				type: "post",
				url: "/partthree/reqPartThree", // 获取所有试题
				async: true,
				success: function(data) {
					limit_group(data);
					pdata = data;
					//console.log(data);
					init(current_page_number); // 第一页渲染数据
					hide_a();
				},
				error: function(r) {
					layer.open({
						type: 1,
						offset: 'auto',
						id: 'layer' + 1,
						content: '<div style="padding: 20px 100px;">服务器暂时无响应，请稍后再试</div>',
						btn: '关闭全部',
						btnAlign: 'c',
						shade: 1,
						yes: function() {
							layer.closeAll();
						}
					});
				}
			});

			//分组
			function limit_group(data) {
				var n = 0;
				for(var i = 0; i < 32; i++) { //一维长度为30
					group[i] = new Array(); //在声明二维
					/*for(var j = 0; j < 6; j++) { //二维长度为5
						group[i][j] = i;
					}*/
				}
				for(var i = 3; i < 32; i++) {
					for(var j = 0; j < data.length; j++) {
						if(data[j].part == i) {
							var k = group[i].length;
							group[i][k] = data[j];
							
						}
					}
				}
				console.log(group);
			}
			// 初始化第1页

			function init(current_page) {

				create_page();
				/*answer_A();*/
			}

			/*初始化第一页*/
			/*start*/
			function create_page() {
				/*alert(group)*/

				for(var i = 0; i < 6; i++) {
					s++; //自动增加id数
					// 创建div
					var ques = document.createElement("div");
					if(i % 2 == 0) {
						ques.setAttribute("style", "background-color:rgba(0,150,136,0.3)");
					}
					ques.setAttribute("class", "tm");
					// 创建问题
					var h = document.createElement("p");
					h.append(s + "." + group[current_page_number][i].stem);
					ques.appendChild(h);

					var option_all = document.createElement("div");
					option_all.setAttribute("class", "option_AB");

					var op_a = document.createElement("div");
					op_a.setAttribute("class", "op_aa");

					// 创建A选项
					var A_input = document.createElement("input");
					A_input.setAttribute("id", "A_input" + s);
					A_input.setAttribute("name", "answer" + s);
					A_input.setAttribute("class", "btn");
					A_input.setAttribute("type", "radio");
					A_input.setAttribute("value", "1");
					if(group[current_page_number][i].ans == 1) {
						A_input.setAttribute("checked", "checked");
					}
					/*if(i == 0 ){
						A_input.setAttribute("checked","checked");
					}*/
					A_input.setAttribute("checked", "checked");
					// 创建A选项内容
					var span_A = document.createElement("div");
					span_A.setAttribute("id", "optionA" + s);
					/*span_A.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_A.append("非常不符");*/
					var label_A = document.createElement("label");
					label_A.setAttribute("for","A_input"+s);
					label_A.setAttribute("class","label_AA");
					label_A.append("非常不符");
					
					span_A.appendChild(label_A);
					
					op_a.appendChild(A_input);
					op_a.appendChild(span_A);
					option_all.appendChild(op_a);
					// 创建换行
					// 创建B选项;
					var op_b = document.createElement("div");
					op_b.setAttribute("class", "op_bb");
					/*op_b.setAttribute("style", "float: right;margin-right: 442px;");*/

					var B_input = document.createElement("input");
					B_input.setAttribute("id", "B_input" + s);
					B_input.setAttribute("name", "answer" + s);
					B_input.setAttribute("type", "radio");
					B_input.setAttribute("class", "btn");
					B_input.setAttribute("value", "2");
					if(group[current_page_number][i].ans == 2) {
						B_input.setAttribute("checked", "checked");
					}
					/*if(i == 1){
						B_input.setAttribute("checked","checked");
					}*/
					B_input.setAttribute("style", "margin-left: 30px");
					option_all.appendChild(B_input);

					// 创建B选项内容
					var span_B = document.createElement("div");
					span_B.setAttribute("id", "optionB" + s);
					/*span_B.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_B.append("较不符合");*/
					var label_B = document.createElement("label");
					label_B.setAttribute("for","B_input"+s);
					label_B.append("较不符合");
					
					span_B.appendChild(label_B);
					
					op_b.appendChild(B_input);
					op_b.appendChild(span_B);
					option_all.appendChild(op_b);

					// 创建C选项;
					var op_c = document.createElement("div");
					op_c.setAttribute("class", "op_cc");
					/*op_c.setAttribute("style", "float: right;margin-right: 442px;");*/

					var C_input = document.createElement("input");
					C_input.setAttribute("id", "C_input" + s);
					C_input.setAttribute("name", "answer" + s);
					C_input.setAttribute("type", "radio");
					C_input.setAttribute("class", "btn");
					C_input.setAttribute("value", "3");
					if(group[current_page_number][i].ans == 3) {
						C_input.setAttribute("checked", "checked");
					}
					/*if(i == 2){
						C_input.setAttribute("checked","checked");
					}*/
					C_input.setAttribute("style", "margin-left: 40px");
					option_all.appendChild(C_input);

					// 创建C选项内容
					var span_C = document.createElement("div");
					span_C.setAttribute("id", "optionC" + s);
					/*span_C.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_C.append("有点不符");*/
					var label_C = document.createElement("label");
					label_C.setAttribute("for","C_input"+s);
					label_C.append("有点不符");
					
					span_C.appendChild(label_C);
					
			
					op_c.appendChild(C_input);
					op_c.appendChild(span_C);
					option_all.appendChild(op_c);

					// 创建D选项;
					var op_d = document.createElement("div");
					op_d.setAttribute("class", "op_dd");
					/*op_d.setAttribute("style", "float: right;margin-right: 442px;");*/

					var D_input = document.createElement("input");
					D_input.setAttribute("id", "D_input" + s);
					D_input.setAttribute("name", "answer" + s);
					D_input.setAttribute("type", "radio");
					D_input.setAttribute("class", "btn");
					D_input.setAttribute("value", "4");
					if(group[current_page_number][i].ans == 4) {
						D_input.setAttribute("checked", "checked");
					}
					/*if(i == 3){
						D_input.setAttribute("checked","checked");
					}*/
					D_input.setAttribute("style", "margin-left: 30px");
					option_all.appendChild(D_input);

					// 创建D选项内容
					var span_D = document.createElement("div");
					span_D.setAttribute("id", "optionD" + s);
					/*span_D.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_D.append("不确定");*/
					var label_D= document.createElement("label");
					label_D.setAttribute("for","D_input"+s);
					label_D.append("不确定");
					
					span_D.appendChild(label_D);
					

					op_d.appendChild(D_input);
					op_d.appendChild(span_D);
					option_all.appendChild(op_d);

					// 创建E选项;
					var op_e = document.createElement("div");
					op_e.setAttribute("class", "op_ee");
					/*op_e.setAttribute("style", "float: right;margin-right: 442px;");*/

					var E_input = document.createElement("input");
					E_input.setAttribute("id", "E_input" + s);
					E_input.setAttribute("name", "answer" + s);
					E_input.setAttribute("type", "radio");
					E_input.setAttribute("class", "btn");
					E_input.setAttribute("value", "5");
					if(group[current_page_number][i].ans == 5) {
						E_input.setAttribute("checked", "checked");
					}
					/*if(i == 4){
						E_input.setAttribute("checked","checked");
					}*/
					E_input.setAttribute("style", "margin-left: 30px");
					option_all.appendChild(E_input);

					// 创建E选项内容
					var span_E = document.createElement("div");
					span_E.setAttribute("id", "optionE" + s);
					/*span_E.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_E.append("有点符合");*/
					var label_E= document.createElement("label");
					label_E.setAttribute("for","E_input"+s);
					label_E.append("有点符合");
					
					span_E.appendChild(label_E);
					

					op_e.appendChild(E_input);
					op_e.appendChild(span_E);
					option_all.appendChild(op_e);

					// 创建F选项;
					var op_f = document.createElement("div");
					op_f.setAttribute("class", "op_ff");
					/*op_e.setAttribute("style", "float: right;margin-right: 442px;");*/

					var F_input = document.createElement("input");
					F_input.setAttribute("id", "F_input" + s);
					F_input.setAttribute("name", "answer" + s);
					F_input.setAttribute("type", "radio");
					F_input.setAttribute("class", "btn");
					F_input.setAttribute("value", "6");
					if(group[current_page_number][i].ans == 6) {
						F_input.setAttribute("checked", "checked");
					}
					/*if(i == 5){
						F_input.setAttribute("checked","checked");
					}*/
					F_input.setAttribute("style", "margin-left: 30px");
					option_all.appendChild(F_input);

					// 创建F选项内容
					var span_F = document.createElement("div");
					span_F.setAttribute("id", "optionF" + s);
					/*span_F.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_F.append("较为符合");*/
					var label_F= document.createElement("label");
					label_F.setAttribute("for","F_input"+s);
					label_F.append("较为符合");
					
					span_F.appendChild(label_F);
					

					op_f.appendChild(F_input);
					op_f.appendChild(span_F);
					option_all.appendChild(op_f);
					// 创建G选项;
					var op_g = document.createElement("div");
					op_g.setAttribute("class", "op_gg");
					/*op_g.setAttribute("style", "float: right;margin-right: 442px;");*/

					var G_input = document.createElement("input");
					G_input.setAttribute("id", "G_input" + s);
					G_input.setAttribute("name", "answer" + s);
					G_input.setAttribute("type", "radio");
					G_input.setAttribute("class", "btn");
					G_input.setAttribute("value", "7");
					if(group[current_page_number][i].ans == 7) {
						F_input.setAttribute("checked", "checked");
					}
					G_input.setAttribute("style", "margin-left: 30px");
					option_all.appendChild(G_input);

					// 创建G选项内容
					var span_G = document.createElement("div");
					span_G.setAttribute("id", "optionG" + s);
					/*span_G.setAttribute("style", "margin-left: 5px;float: right;margin-top: 1px;");
					span_G.append("非常符合");*/
					var label_G= document.createElement("label");
					label_G.setAttribute("for","G_input"+s);
					label_G.append("非常符合");
					
					span_G.appendChild(label_G);
					

					op_g.appendChild(G_input);
					op_g.appendChild(span_G);
					option_all.appendChild(op_g);

					// 追加到parent中
					var parent = document.getElementById("parent");
					parent.appendChild(ques);
					/* from_answer.appendChild(ques); */
					ques.appendChild(option_all);
					ques.appendChild(op_a);
					ques.appendChild(op_b);
					ques.appendChild(op_c);
					ques.appendChild(op_d);
					ques.appendChild(op_e);
					ques.appendChild(op_f);
					ques.appendChild(op_g);

				}
				/*alert(s);*/

			}
			/*end*/
			/* 记录答案 --第一页--*/
			/*---start---*/
			function answer_A() {
				var ss = current_page_number;
				//if(ss==4){ss=ss-1;}
				/*for(var i = 0;i<6;i++){
					alert(ss+":"+i+":"+group[ss][i].ans);
				}*/
				//alert(ss+":"+7+":"+group[ss][6].ans);
				for(var i = (s - 6) + 1; i < 1 + s; i++) {
					var op_AA = $("input[name='answer" + i + "']:checked").val();
					//alert(i+":"+op_AA);
					//alert(current_page_number+":"+group[current_page_number][i-1].ans);
					//alert(ss+":"+i+":"+group[ss][i-1].ans);
					if(op_AA != undefined) {
						//alert(ss+":"+i+":"+group[ss][i-1].ans);
						/*question_data[i] = pdata[i].code + ":" + op_AA;*/
						group[current_page_number][(i - 1) % 6].ans = op_AA;
					}
				}

				/*alert(current_page_number);*/
			}

			/*---end---*/
			/* 记录答案 */
			// 显示按钮
			function show_btn() {
				/*alert("we");*/
				$("#ans").toggle().show();
			}
			//隐藏按钮
			function hide_a() {
				$("#ans").toggle().hide();
			}
			// 消除题目-->到下一页
			var next_page = document.getElementById("next_page");
			next_page.onclick = function() {
				var parent = document.getElementById("parent");
				answer_A();
				//1.判断题是否完成

				/*for(var i = 0;i<6;i++){*/
				if(group[current_page_number][0].ans == 0 || group[current_page_number][1].ans == 0 || group[current_page_number][2].ans == 0 || group[current_page_number][3].ans == 0 || group[current_page_number][4].ans == 0 || group[current_page_number][5].ans == 0) {
					layer.open({
						type: 1,
						offset: 'auto',
						id: 'layer' + 1,
						content: '<div style="padding: 20px 100px;">您还有题目没有作答，请检查并作答</div>',
						btn: '确定',
						btnAlign: 'c',
						shade: 1,
						yes: function() {
							layer.closeAll();
						}
					});
				} else {

					//2.判断是否有重复题
					var ret = re_question();
					if(ret == 0) {
						if(current_page_number == 31) {

						} else {
							$(".tm").remove();
							init(current_page_number++);
						}

					}
				}
				if(current_page_number == 31) {
					show_btn();
				}
			}

			// 返回上一页
			var pre_page = document.getElementById("pre_page");
			pre_page.onclick = function() {
				var parent = document.getElementById("parent");
				answer_A();

				/*init(pdata, i1, i2);*/

				if(current_page_number == 3) {

				} else {
					$(".tm").remove();
					s = s - 12;
					init(current_page_number--);
					if(current_page_number == 30) {
						hide_a();
					}
				}
			}
		});

function re_question() {
	//判断重复题
	var re_data = [];
	var flag = 0;
	for(var i = 0; i < 6; i++) {
		if(group[current_page_number][i].seq > 0) {
			continue;
		}
		for(var j = i + 1; j < 6; j++) {

			if(group[current_page_number][i].ans == group[current_page_number][j].ans) {
				re_data[j] = group[current_page_number][j];
				//alert('s');
				flag = 1;
			}
		}
		if(flag == 1) {
			//re_data.unshift(group[current_page_number][i]);
			re_data[i] = group[current_page_number][i];
			break;
		}
	}
	if(flag == 1) {
		re_question_ok(re_data);
	}
	return flag;
}

function re_question_ok(re_data) {
	var seq = [];
	var option_index = [];
	var form_data = '<form>';

	for(var k = 0; k < re_data.length; k++) {
		if(re_data[k] != undefined) {
			option_index.push(k);

			form_data += '<div id="' + k + '"><input type=radio name="re" value="' + k + '">' + re_data[k].stem + '</div><br/>';
		}
	}

	form_data += '</form>';
	/*alert(form_data);*/
	var content = '<div style="padding: 20px 0px;">' +
		'<div class="layui-card"> ' +
		'<div class = "layui-card-header" > ' +
		'<strong>请在以下题目中，选择最符合您实际情况的描述： </strong>' +
		'</div>' +
		'<div class = "layui-card-body" >' +
		form_data +
		'</div>' +
		'</div>' +
		'</div > ';
	layer.open({
		type: 1,
		offset: 'auto',
		id: 'layer' + 1,
		title: '您有多道题目选项重复,我们需要再次确认',
		area: ['600px', '400px'],
		content: content,
		btn: ['确定', '我想改变选择'],
		btnAlign: 'c',
		shade: 1,
		yes: function() {
			function comp(a) {
				for(var i = 0; i < option_index.length; i++) {
					for(var j = 0; j < a.length; j++) {
						if(a[j] == option_index[i]) {
							break;
						}
					}
					if(j == a.length) {
						return option_index[i];
					}
				}
			};

			var re_name = $("input[name='re']:checked").val();
			if(re_name == undefined) {
				layer.alert('请选择');
				return;
			}
			$("#" + re_name).remove();
			seq.push(re_name);
			/*alert(option_index.length);*/

			if(seq.length == option_index.length - 1) {
				for(var k = 0; k < seq.length; k++) {
					/*alert(seq[k]);*/
					group[current_page_number][seq[k]].seq = k + 1;
					var ind = parseInt(seq[k]) + 1 + (current_page_number - 3) * 6;
					for(var j = 0; j < 7; j++) { //源代码：for(var j=0; j<7; j++){
						$("input[name=answer" + ind).get(j).disabled = true;
					}
				}
				var ret = comp(seq);
				group[current_page_number][ret].seq = k + 1;
				var ind = parseInt(ret) + 1 + (current_page_number - 3) * 6;
				for(var j = 0; j < 7; j++) {
					$("input[name=answer" + ind).get(j).disabled = true;
				}

				layer.closeAll();
			}
		}
	});
}
layui.use('element', function() {
	var $ = layui.jquery,
		element = layui.element; // Tab的切换功能，切换事件监听等，需要依赖element模块
	$(document).ready(function() {
		var second = 2700;
		var n = 0;
		timer = setInterval(function() {
			n++;
			if(n > 100) {
				n = 100;
				clearInterval(timer);
				alert("45分钟的答题时间已到");
			}
			element.progress('demo', n + '%');
		}, 27000);
	});

});
/*---start---*/
function answer_A() {
	var ss = current_page_number;
	//if(ss==4){ss=ss-1;}
	/*for(var i = 0;i<6;i++){
		alert(ss+":"+i+":"+group[ss][i].ans);
	}*/
	//alert(ss+":"+7+":"+group[ss][6].ans);
	for(var i = (s - 6) + 1; i < 1 + s; i++) {
		var op_AA = $("input[name='answer" + i + "']:checked").val();
		//alert(i+":"+op_AA);
		//alert(current_page_number+":"+group[current_page_number][i-1].ans);
		//alert(ss+":"+i+":"+group[ss][i-1].ans);
		if(op_AA != undefined) {
			//alert(ss+":"+i+":"+group[ss][i-1].ans);
			/*question_data[i] = pdata[i].code + ":" + op_AA;*/
			group[current_page_number][(i - 1) % 6].ans = op_AA;
		}
	}

	/*alert(current_page_number);*/
}

/*---end---*/
/* 记录答案 */
//显示导语
function showView() {
	layer.open({
		type: 1,
		offset: 'auto',
		id: 'layerDemo' + 1,
		content: '<div style="padding: 10px 50px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！欢迎您参加心理健康测评系统中的积极心理品质测试！<br/ >' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面是一些有关您的生活习惯、兴趣爱好、行为倾向等的调查题目，目的是了解您的个性特点等方面。人们的个性差异很大，没有好与坏、对与错之分，因而请您不要有所顾忌，不必在意他人的看法或评判，要根据自己最近一年的实际情况真实作答。<br />' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本测试共有146题，请根据题目的描述与您自己的符合程度点击相应的选项。<br/>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如：如果您做了如下判断：<br/><br/>' +
			'<img src="Views/PartThree/img/showview.png"/><br/><br/>'
			/*+'<table style="border:1px black solid"><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.大多数同学认为我热情、容易接近。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O 非常不符合  O 不符合  O 有些不符合 O 不确定  O 有些符合 <input type="radio" checked="checked"/> 符合  O 非常符合</td></tr></table><br/>'
			+'<table style="border:1px black solid"><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.我和父母相处得很好。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" checked="checked"/> 非常不符合  O 不符合  O 有些不符合 O 不确定  O 有些符合 O符合  O 非常符合</td></tr></table><br/>'*/
			+
			'表示您认为“我和父母相处得很好”是非常不符合自己的实际情况，但是比较认同“大多数同学认为我热情、容易接近”的说法。' +
			'<br/>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每一页有6个题目，请尽量选择不同的选项。系统会自动筛选出选项相同的题目，请您进一步判断哪一个题目更符合您的实际情况。<br/>' +
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请认真作答，不要跳过任何一道题。</div>',
		btn: '确定',
		btnAlign: 'c',
		shade: 0.5,
		area: ['1000px', '550px']
	});
}
//提交试卷
function verifyPaper() {
	answer_A();
	var k = 0;
	for(var i = 3; i < 32; i++) {
		for(var j = 0; j < 6; j++) {
			question_data[k++] = group[i][j].code + ":" + group[i][j].ans + "/" + group[i][j].seq;

			if(group[i][j].ans == 0) {
				//alert(i + ":" + j + "=" + group[i][j].ans);
				layer.open({
					type: 1,
					offset: 'auto',
					id: 'layer' + 1,
					content: '<div style="padding: 20px 100px;">还有题目未完成</div>',
					btn: '关闭全部',
					btnAlign: 'c',
					shade: 1,
					yes: function() {
						layer.closeAll();
					}
				});
				return 0;
			}
		}
	}
	tjPaper();
}

function tjPaper() {

	$.ajax({
		type: "post",
		url: "http://localhost:9999/partthree/submitPaper",
		async: true,
		data: JSON.stringify(question_data),
		dataType: "json",
		success: function(r) {
			if(r.code == 0) {
				layer.open({
					type: 1,
					offset: 'auto',
					id: 'layerDemo' + 1,
					content: '<div style="padding: 20px 100px;">交卷成功,请勿重复提交。测试结束，感谢您的参与。</div>',
					btn: '关闭全部',
					btnAlign: 'c',
					shade: 1,
					yes: function() {
						layer.closeAll();
						location.href = '/Views/PartOne/login.html';
					}
				});
			} else {
				layer.open({
					type: 1,
					offset: 'auto',
					id: 'layerDemo' + 1,
					content: '<div style="padding: 20px 100px;">交卷失败，请重新提交</div>',
					btn: '关闭全部',
					btnAlign: 'c',
					shade: 1,
					yes: function() {
						layer.closeAll();
					}
				});
			}

		},
		error: function(r) {
			layer.open({
				type: 1,
				offset: 'auto',
				id: 'layerDemo' + 1,
				content: '<div style="padding: 20px 100px;">服务器暂时无响应，请稍后提交</div>',
				btn: '关闭全部',
				btnAlign: 'c',
				shade: 1,
				yes: function() {
					layer.closeAll();
				}
			});
		}
	});
}
layui.use(['element', 'layer'], function() {
	var element = layui.element;
	var layer = layui.layer;

});