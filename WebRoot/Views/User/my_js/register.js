		function register(){
				var phone = $("#L_phone").val();
				var email = $("#L_photo_num").val();
				var name = $("#L_name").val();
				var pass = $("#L_pass").val();
				var repass = $("#L_re_pass").val();
				
				if(phone !="" && pass != "" && email !="" && name != "" && repass!="") {
					//layer.alert(name);
					$.ajax({
						type:"post",
						url:"/register/selectUserInfo",
						data:{
							"userphone":phone,
							"username":name,
							"useremail":email,
							"userpass":pass
						},
						success:function(r){
							if(r.rId == '1'){
								alert("用户已存在");
							}else{
								$.ajax({
									type:"post",
									url:"/register/insertUserInfo",
									async:false,
									success:function(r){
										if(r.uId == '1'){
											alert("注册成功，点击‘确认’以后进入登录页面");
											location.href = "/Views/User/login.html";
										}else{
											alert("注册失败");
											
										}
										
									},
									error:function(r){
										alert("服务器有误")
									}
								});
							}
						},
						error:function(r){
							layer.alert("服务器有误");
						}
					});
				}else{
					
					layer.msg("请填写注册信息！");
				}
			}