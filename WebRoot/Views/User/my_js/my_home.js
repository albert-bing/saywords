

/*变量的定义*/
var persondata;// 用户个人信息的记录
var saywordsdata;// 密语记录
var frienddata;// 好友记录
var tb_i = 0;
layui.use(['element','upload'], function() {
		var $ = layui.jquery,
		upload = layui.upload,
		element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
	});
$(document).ready(function() {
	$.ajax({
		type: "post",
		url: "/userlogin/getNavPage",
		success: function(data) {
			persondata = data;
			console.log(data);
			myInfo(data);
		}
	});
	function myInfo(persondata){
		// 获取myInfo的div
		var my_info = document.getElementById("myInfo");
		// 创建一个div用来包裹表单
		var next_info = document.createElement("div");
		next_info.setAttribute("id","next_info");
		// 个人信息div的创新
		var pp_div = document.createElement("div");
		pp_div.setAttribute("class","next_info_p")
		var pp = document.createElement("p");
		pp.append("个人信息");
		pp_div.appendChild(pp);
		
		// 创建info_form表单
		var info_form = document.createElement("form");
		
		// 姓名
		var n_div = document.createElement("div");
		n_div.setAttribute("class","per_div");
		var name_label = document.createElement("label");
		name_label.setAttribute("for","username");
		name_label.setAttribute("class","p_label");
		name_label.append("姓名");
		var name_content = document.createElement("input");
		name_content.setAttribute("id","username");
		name_content.setAttribute("value",persondata[0].username);
		name_content.setAttribute("class","p_input");
		
		n_div.appendChild(name_label);
		n_div.appendChild(name_content);
		
		// 追加到form表单
		info_form.appendChild(n_div);
		
		// 性别
		var s_div = document.createElement("div");
		s_div.setAttribute("class","per_div");
		var sex_label = document.createElement("label");
		sex_label.setAttribute("for","usersex");
		sex_label.setAttribute("class","p_label");
		sex_label.append("性别");
		var sex_content = document.createElement("input");
		sex_content.setAttribute("id","usersex");
		sex_content.setAttribute("value",persondata[0].usersex);
		sex_content.setAttribute("class","p_input");
		
		s_div.appendChild(sex_label);
		s_div.appendChild(sex_content);
		// 追加到form表单
		info_form.appendChild(s_div);
		
		// 电话
		var ph_div = document.createElement("div");
		ph_div.setAttribute("class","per_div");
		var phone_label = document.createElement("label");
		phone_label.setAttribute("for","userphone");
		phone_label.setAttribute("class","p_label");
		phone_label.append("电话");
		var phone_content = document.createElement("input");
		phone_content.setAttribute("id","userphone");
		phone_content.setAttribute("value",persondata[0].userphone);
		phone_content.setAttribute("class","p_input");
		
		ph_div.appendChild(phone_label);
		ph_div.appendChild(phone_content);
		// 追加到form表单
		info_form.appendChild(ph_div);
		
		// 邮件
		var e_div = document.createElement("div");
		e_div.setAttribute("class","per_div");
		var email_label = document.createElement("label");
		email_label.setAttribute("for","useremail");
		email_label.setAttribute("class","p_label");
		email_label.append("邮件");
		var email_content = document.createElement("input");
		email_content.setAttribute("id","useremail");
		email_content.setAttribute("value",persondata[0].useremail);
		email_content.setAttribute("class","p_input");
		
		e_div.appendChild(email_label);
		e_div.appendChild(email_content);
		// 追加到form表单
		info_form.appendChild(e_div);
		
	
		// 所在省份
		var p_div = document.createElement("div");
		p_div.setAttribute("class","per_div");
		var p_label = document.createElement("label");
		p_label.setAttribute("for","province");
		p_label.setAttribute("class","p_label");
		p_label.append("所在省份");
		var p_content = document.createElement("input");
		p_content.setAttribute("id","province");
		p_content.setAttribute("value",persondata[0].province);
		p_content.setAttribute("class","p_input");
		
		p_div.appendChild(p_label);
		p_div.appendChild(p_content);
		// 追加到form表单
		info_form.appendChild(p_div);
		
		// 所在城市
		var c_div = document.createElement("div");
		c_div.setAttribute("class","per_div");
		var c_label = document.createElement("label");
		c_label.setAttribute("for","city");
		c_label.setAttribute("class","p_label");
		c_label.append("所在城市");
		var c_content = document.createElement("input");
		c_content.setAttribute("id","city");
		c_content.setAttribute("value",persondata[0].city);
		c_content.setAttribute("class","p_input");
		
		c_div.appendChild(c_label);
		c_div.appendChild(c_content);
		// 追加到form表单
		info_form.appendChild(c_div);
		
		// 所在地区
		var a_div = document.createElement("div");
		a_div.setAttribute("class","per_div");
		var a_label = document.createElement("label");
		a_label.setAttribute("for","area");
		a_label.setAttribute("class","p_label");
		a_label.append("所在地区");
		var a_content = document.createElement("input");
		a_content.setAttribute("id","area");
		a_content.setAttribute("value",persondata[0].area);
		a_content.setAttribute("class","p_input");
		
		a_div.appendChild(a_label);
		a_div.appendChild(a_content);
		// 追加到form表单
		info_form.appendChild(a_div);
		
		// 详细地址
		var add_div = document.createElement("div");
		add_div.setAttribute("class","per_div");
		var add_label = document.createElement("label");
		add_label.setAttribute("for","address");
		add_label.setAttribute("class","p_label");
		add_label.append("详细地址");
		var add_content = document.createElement("input");
		add_content.setAttribute("id","address");
		add_content.setAttribute("value",persondata[0].useraddress);
		add_content.setAttribute("class","p_input");
		
		add_div.appendChild(add_label);
		add_div.appendChild(add_content);
		
		// 追加到form表单
		info_form.appendChild(add_div);
		
		// 修改按钮
		var p_button = document.createElement("input");
		p_button.setAttribute("type","button");
		p_button.setAttribute("class","btn");
		p_button.setAttribute("id","sub_btn");
		p_button.setAttribute("value","保存修改");
		
		info_form.appendChild(p_button);
		
		// 取消按钮
		var r_button = document.createElement("input");
		r_button.setAttribute("type","button");
		r_button.setAttribute("class","btn");
		r_button.setAttribute("id","res_btn");
		r_button.setAttribute("value","取消修改");
		
		info_form.appendChild(r_button);
		
		// 将form表单追加到div中
		next_info.appendChild(pp_div);
		next_info.appendChild(info_form);
		my_info.appendChild(next_info);
	}
});
/*获取导航栏value的方法*/
function getValue(obj){
		var nav_num = obj.value;// 获取点击的li的value值、
		if(nav_num == 1){
			
		}else{
			$.ajax({
				type:"post",
				url:"/userlogin/getSaywordsInfo",
				data:{
					"nav_num":nav_num
				},
				success:function(data){
					if(nav_num == 2){
						saywordsdata = data;
						
						console.log(data);
					}else{
						frienddata = data;
						if(tb_i == 6){
							
						}else{
							myfriends(frienddata);
						console.log(data);
						}
					}
					
				}
			});
		}
	}
/*实现好友的列表的方法*/
function myfriends(frienddata){
	/*获取myfriends的div*/
	var my_friends = document.getElementById("myfriends");
	/*创建一个div用来包裹table好友列表*/
	var d_table = document.createElement("div");
	d_table.setAttribute("id","pre_table");
	/*创建table*/
	var tb = document.createElement("table");
	tb.setAttribute("id","tab");
	/*创建表头*/
	var tb_tr0 = document.createElement("tr");
	for(; tb_i < 6; tb_i++){
		var tb_td = document.createElement("th");
		tb_td.setAttribute("id","tb_td"+tb_i);
		tb_td.setAttribute("class","tb_td");
		if(tb_i == 0){
			tb_td.append("姓名");
		}
		if(tb_i == 1){
			tb_td.append("性别");	
		}
		if(tb_i == 2){
			tb_td.append("账号");
		}
		if(tb_i == 3){
			tb_td.append("星座");	
		}
		if(tb_i == 4){
			tb_td.append("成为密友时间");	
		}
		if(tb_i == 5){
			tb_td.append("更多");	
		}
		tb_tr0.appendChild(tb_td);
	}
	/*将表头添加进table里面去*/
	tb.appendChild(tb_tr0);
	/*添加密友数据*/
	var i = 0
	for( i =0 ;i < frienddata.length;i++){
		var tb_tr = document.createElement("tr");
		for(var j = 0;j < 6;j++){
			var tb_td = document.createElement("td");
			
			tb_td.setAttribute("class","tb_td");
			if(j == 0){
				tb_td.append(frienddata[i].f_name);
			}
			if(j == 1){
				tb_td.append(frienddata[i].f_sex);
			}
			if(j == 2){
				tb_td.append(frienddata[i].f_account);
			}
			if(j == 3){
				tb_td.append(frienddata[i].f_constellation);
			}
			if(j == 4){
				var time = (frienddata[i].addtime).split(" ")[0];
				tb_td.append(time);
			}
			if(j == 5){
				tb_td.setAttribute("id","tb_td"+j);
				tb_td.append("详细信息");
				detailed_info(frienddata);
				/*var td_btn = document.createElement("input");
					td_btn.setAttribute("type","button");
					td_btn.setAttribute("value","详细信息");
					td_btn.setAttribute("id","tb_td"+j);
					//td_btn.setAttribute("onclick",detailed_info());
				tb_td.appendChild(td_btn);*/
			}
			tb_tr.appendChild(tb_td);
		}
		tb_tr0.append(tb_tr);
		tb.appendChild(tb_tr);
	}
	d_table.appendChild(tb);
	my_friends.appendChild(d_table);
	
	function detailed_info(frienddata){
	$("#tb_td5").click(function(){
		alert(123);
	});
	}
}

/*添加好友*/
function show_add(){
	layer.open({
		type:1,
		offset:'auto',
		title:'添加密友',
		id:'layer'+1,
		content:'<div style="width:80%;height:50px;border:1px red solid;margin:20px auto;"><form><label for="add_account">账号</label><input type="text" id="add_account" name="addaccount" placeholder="请输入账号"/></form></div>',
		btn:['添加','取消'],
		btnAlign:'c',
		shade:'0.5',
		area:"300px;500px",
		anim: 4,
		yes:function(){
			var addaccount = $("input[name='addaccount']").val().trim();
			$.ajax({
				type:"post",
				url:"/friends/isExistFriend",
				async:true,
				data:{
					"addaccount":addaccount
				},
				success:function(r){
					if(r.pid == 1){
						layer.msg("添加成功");
						/*layer.closeAll();*/
					}else if(r.pid == -1){
						layer.msg("用户不存在");
					}else if(r.pid == 2){
						layer.msg("已经是密友啦");
					}
				},
				error:function(r){
					layer.msg("服务器无响应！");
				}
			});
		},
		error:function(){
			layer.closeAll();
		}
		
	});
}


	

