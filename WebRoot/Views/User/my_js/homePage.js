	var thisUrl = document.URL;
	var getVal = thisUrl.split("?")[1];
	var account = getVal.split("=")[1];
$(document).ready(function(){
	
	
		var l_account = document.getElementById("l_account");
		/*var p1 = document.createElement("p");
		p1.append("欢迎");*/
		var account_div = document.getElementById("account");
		account_div.setAttribute("style","float: left;")
		account_div.append(account);
		var p2 = document.createElement("p");
		p2.setAttribute("style","float: right;")
		p2.append("登录");
		//l_account.appendChild(p1);
		l_account.appendChild(account_div);
		l_account.appendChild(p2);
		
		/*检测点击事件*/
		
});

function getHref(obj){
		/*var navUrl = obj.href;
		var UrlValue = navUrl.split("?")[1];
		var num = UrlValue.split("=")[1];*/
		alert(obj.value);
		var nav_item = obj.value;
		$.ajax({
			type:"post",
			url:"/userlogin/getNum",
			async:true,
			data:{
				"num":nav_item
			},
			success:function(r){
				if(r.code == 2){
					location.href= "/Views/User/my_home.html"
				}else if(r.code == 3){
					location.href = "/Views/User/my_friends.html"
				}
			}
		});
	}