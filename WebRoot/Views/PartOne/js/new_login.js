			$(function() {
				validateRule();
			});
			layui.use(['element', 'layer'], function() {
				var element = layui.element;
				var layer = layui.layer;
				var $ = layui.jquery();
			});

			function check_infomation() {}
			$.validator.setDefaults({
				submitHandler: function() {
					logon();
				}
			});
			// 用于用户的信息核对的数组
			var pdata;
			// 密码和账号的校验以及信息的核对
			function logon() {
				var username = $("input[name='username']").val().trim();
				var password = $("input[name='password']").val().trim();
				/* alert(username);
				alert(password); */
				$.ajax({
					type: "post",
					url: "http://localhost:9999/partone/logon",
					data: {
						"username": username,
						"password": password
					},

					success: function(r) {
						if(r.code == 0) {
							$.ajax({
								type: "post",
								url: "http://localhost:9999/partone/getSchool",
								success: function(data) {
									//alert(123);
									pdata = data;
									console.log(data);
									check_infomation(pdata);
								}
							});

							//location.href = '/partone/sendPBIntro';
						} else {
							$('#content').html('用户名或密码错误');
							$('#alert').modal();
						}

					},
					error: function(r) {
						$('#content').html('服务器无响应');
						$('#alert').modal();
					}
				});
			}
			// 校验函数的实现
			function check_infomation(pdata) {
				layer.open({
					type: 1,
					offset: 'auto',
					id: 'layer' + 1,
					title: '<p style="font-size:18px;font-weight:500;margin-left:148px;">请确认您的信息</p>',
					content: '<div style="padding: 20px 100px;">' +
						'<div style="width:230px;height:25px;"><label>学校:</label><input type="text" value="' + pdata[0].schoolname + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>学号:</label><input type="text" value="' + pdata[0].studentNO + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>姓名:</label><input type="text" value="' + pdata[0].name + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>性别:</label><input type="text" value="' + pdata[0].gender + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>年级:</label><input type="text" value="' + pdata[0].grade + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>班级:</label><input type="text" value="' + pdata[0].clsname + '" style="float:right;"></div><br>' +
						'<div style="width:230px;height:25px;"><label>出生日期:</label><input type="text" value="' + pdata[0].birthday + '" style="float:right;"></div>' +
						'</div>',
					btn: ['确定', '重新输入'],
					btnAlign: 'c',
					shade: 0.5,
					area: ['425px', '430px'],
					yes: function() {
						/*location.href = '/partone/sendPBIntro';
						layer.closeAll();*/
						if(pdata[0].part == '1'){
							location.href = '/partone/sendPBIntro';
							layer.closeAll();
						}else if(pdata[0].part == '40'){
							alert(pdata[0].part)
							location.href = '/partfour/sendPBIntro3';
							layer.closeAll();
						}else{
							location.href = '/partthree/sendPBIntro2';
							layer.closeAll();
						}
					}
				});
			}

			function validateRule() {

				$("#logonForm").validate({
					rules: {
						username: {
							required: true
						},
						password: {
							required: true
						}
					},
					messages: {
						username: {
							required: "请输入您的用户名",
						},
						password: {
							required: "请输入您的密码",
						}
					}
				})
			}