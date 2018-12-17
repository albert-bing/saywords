			$(function() {
				validateRule();
			});
			layui.use(['element', 'layer'], function() {
				var element = layui.element;
				var layer = layui.layer;
				var $ = layui.jquery();
			});

			
			$.validator.setDefaults({
				submitHandler: function() {
					login();
				}
			});
			// 用于用户的信息核对的数组
			var pdata;
			// 密码和账号的校验以及信息的核对
			function login() {
				var useraccount = $("input[name='useraccount']").val().trim();
				var password = $("input[name='password']").val().trim();
				//alert(useraccount);
				$.ajax({
					type: "post",
					url: "/userlogin/logon",
					data: {
						"useraccount": useraccount,
						"password": password
					},
					success: function(data) {
						//alert(data);
						pdata = data;
						console.log(pdata);
						if(pdata[0].userid == -1){
							layer.msg('账户或密码错误！');
						}else{
							location.href = "/userlogin/sendHomePage?account="+pdata[0].useraccount;
						}

					},
					error: function(r) {
						$('#content').html('服务器无响应');
						$('#alert').modal();
					}
				});
			}
		

			function validateRule() {

				$("#logonForm").validate({
					rules: {
						useraccount: {
							required: true
						},
						password: {
							required: true
						}
					},
					messages: {
						useraccount: {
							required: "请输入您的用户名",
						},
						password: {
							required: "请输入您的密码",
						}
					}
				})
			}