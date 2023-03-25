//判断用户是否已经登陆
function onpage(){
    if(!sessionStorage.getItem("land")) {
      alert("您还未登录")
      window.location = "login.html";
    }
  }
  onpage()
  
var op = document.querySelector(".upupdate");
var age = document.getElementById("age");
var sex = document.getElementById("sex");
var id = document.getElementById("id");
var us = document.getElementById("name");
var ph = document.getElementById("phone");
var searchpage = document.getElementById("searchpage");
var sea = document.getElementById("sea");
var searchpagetop = document.getElementById("searchpage-top");
var clo = document.getElementById("closepage");
var cen = document.getElementById("button-center");
var page = 1;
var i = 0;
function chagePage(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/users/getInfoByPage_users',
        data:{
            page:page,
            per_page:4
        },
        dataType: "json",
        success:function(res){
            ul1.innerHTML="";
            let data=res.data;
            for(let i =0;i<data.length;i++){
                let a = data[i].sex ==0?"男":"女";
                ul1.innerHTML+="<li><span>"+data[i].us+"</span><span>"+data[i].age+"</span><span >"+a+"</span><span>"+data[i].phone+"</span><span style='display: none;'>"+data[i]._id+"</span><button onclick='revise(this)'>修改</button><button onclick='revise(this)'>删除</button></li>"
            }
            console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
}
chagePage()
function revise(event){
    op.style.display = "block";
    let data=event.parentNode.getElementsByTagName('span')
    // let data = document.getElementsByTagName("span")
    id.value=data[4].innerHTML;
}
//分页按钮
function button(num) {
    i = 0;
    page += num;
    if(page <= 0) {
        page = totalNum;
    } else if(page > totalNum) {
        page = 1;
    }
    cen.value = page;
    console.log(page);
    chagePage();
}
$.ajax({
    url: "http://118.195.129.130:3000/users/allpage_users",
    type: "GET",
    data: {}, 
    dataType: "json",
    success: function (result) {
        console.log(result);
        //获取所能达到的最大页数
        totalNum = Math.ceil(result.pages / 4);
    },
    error: function (err) {
        console.log(err);
    }
});

//修改用户信息
function yes(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/user/mod',
        data:{
           _id:id.value,
           us:us.value,
           phone:ph.value,
           age:age.value,
           sex:sex.value
        },
        datatype: "json",
        success:function(res){
            op.style.display = "none";
            
            chagePage()
            // console.log(us.value);
            // console.log(id.value);
            // console.log(age.value);
            // console.log(sex.value);
            // console.log(res);
            alert("修改成功");
        console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
}
//取消之后删除输入框中所输入的内容
function no(){
    op.style.display = "none";
    us.value = "";
    age.value= "";
    ph.value = "";
    sex.value = "";
}
var se = document.getElementById("inin");
function search(){
console.log(se.value)
var a = se.value;
// 验证  空值判断  
if (!a) {    
    alert('搜索框不能为空')    
    return  
}
$.ajax({
    //type规定请求类型，只有GET和POST两种
    type:"POST",
    //url是请求的路径,这里因为请求的是本地文件使用了相对路径
    url:"http://118.195.129.130:3000/users/getInfoByKw_users",
    //data是我们要传的值，里传的是一个对象(因为这里我们并不需要传值，所以就把值注掉了)
    data:{
        kw:se.value
    },
    dataType: "json",
    //success是请求成功后执行的函数
    success:function(res){
        searchpage.style.display= "block";
        sea.style.display= "block";
        searchpagetop.style.display= "block";
        clo.style.display= "block";
        searchpage.innerHTML="";
        let data=res.data;
        for(let i =0;i<data.length;i++){
            let a = data[i].sex ==0?"男":"女";
            searchpage.innerHTML+="<li><span>"+data[i].us+"</span><span>"+data[i].age+"</span><span >"+a+"</span><span>"+data[i].phone+"</span><span style='display: none;'>"+data[i]._id+"</span></li>"
        }
        console.log(res);
    },
    //error是请求失败之后执行的函数
    error:function(err){
        console.log(err)
    }
})
}
function closepage(){
    searchpage.style.display= "none";
    sea.style.display= "none";
    searchpagetop.style.display= "none";
    clo.style.display= "none";
}

//删除用户信息
function delete1(){
    let data = document.getElementsByTagName("span");
   let c = data[4].innerHTML;
   $.ajax({
       //type规定请求类型，只有GET和POST两种
       type:"POST",
       //url是请求的路径,这里因为请求的是本地文件使用了相对路径
       url:"http://118.195.129.130:3000/users/del_users",
       //data是我们要传的值，里传的是一个对象(因为这里我们并不需要传值，所以就把值注掉了)
       data:{   
            _id:c
       },
       dataType: "json",
       //success是请求成功后执行的函数
       success:function(result){
           console.log(c);
           chagePage()
           console.log(result);
       },
       //error是请求失败之后执行的函数
       error:function(err){
           console.log(err)
       }
   })

}