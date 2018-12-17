$(document).ready(function() {
	var username;
	// 表单的提前校验
	layui.use(['form', 'layer', 'element'], function() {
		var form = layui.form,
			layer = layui.layer,
			element = layui.element;
		form.on('submit(go)', function(data) {
			if(data.field != null) {
				logon();
				return true;
			} else {
				return false;
			}
		});
	});

	// 密码和账号的校验以及信息的核对
	function logon() {
		var useraccount = $("input[name='useraccount']").val();
		var userpass = $("input[name='userpass']").val();
		var pdata;
		alert(33);
		$.ajax({
			type: "post",
			url: "http://localhost:8888/userlogin/login",
			data: {
				"useraccount": useraccount,
				"userpass": userpass
			},
			success: function(r) {
				alert(r.pId);
				if(r.pId == 1) {
				 location.href = "/Views/User/homePage.html";
				} else {
					alert("账号或者密码错误");

				}
			},
			error: function(r) {
				alert("服务器未响应");
			}
		});
	}
});