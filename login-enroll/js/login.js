var username = document.getElementById("username");
var pass = document.getElementById("password");
	function enroll(){
		window.location="enroll.html";
	}
	function login(){
		var us = username.value;
		var ps = pass.value;
	  // 验证  空值判断  
	  if (!us || !ps) {    
		  alert('账号或密码不能为空')    
		  return  
	  }
	  $.ajax({
		//type规定请求类型，只有GET和POST两种
		type:"POST",
		//url是请求的路径,这里因为请求的是本地文件使用了相对路径
		url:"http://118.195.129.130:3000/user/login",
		//data是我们要传的值，里传的是一个对象
		 data:{
		 us:username.value,
		 ps:pass.value
		},
		dataType: "json",
		//success是请求成功后执行的函数
		success:function(result){
			sessionStorage.setItem("land",true);
			if(result.err == "0"){
				console.log(result);
			    window.location = "backstage.html";
			}
			else{
				alert("账号或密码错误");
			}
		},
		//error是请求失败之后执行的函数
		error:function(err){
			console.log(err);
		}
	})
	}