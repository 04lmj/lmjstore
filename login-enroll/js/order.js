//判断是否已经登陆
function onpage(){
    if(!sessionStorage.getItem("land")) {
      alert("您还未登录")
      window.location = "login.html";
    }
  }
  onpage()
var op = document.querySelector(".upupdate");
var ada = document.querySelector(".ada");
var us = document.getElementById("name");
var am = document.getElementById("amount");
var ph = document.getElementById("phone");
var pa = document.getElementById("pay");
var id = document.getElementById("id");
var searchpage = document.getElementById("searchpage");
var sea = document.getElementById("sea");
var searchpagetop = document.getElementById("searchpage-top");
var clo = document.getElementById("closepage");
var us1 = document.getElementById("name1");
var am1 = document.getElementById("amount1");
var ph1 = document.getElementById("phone1");
var pa1 = document.getElementById("pay1");
var cen = document.getElementById("button-center");
var page = 1;
var i = 0;
function chagePage(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/order/getInfoByPage_order',
        data:{
            page:page,
            per_page:4
        },
        dataType: "json",
        success:function(res){
            ul1.innerHTML="";
            let data=res.data;
            for(let i =0;i<data.length;i++){
                let a=data[i].pay ==0?"已支付":"未支付";
                ul1.innerHTML+="<li><span>"+data[i].us+"</span><span>"+data[i].amount+"</span><span >"+data[i].phone+"</span><span>"+a+"</span><span style='display: none;'>"+data[i]._id+"</span><button onclick='revise(this)'>修改</button><button onclick='delete1()'>删除</button></li>"
            }
            cen.value = page;
           
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
    console.log("us:  "+data[0].innerHTML);
    us.value=data[0].innerHTML;
    // console.log("amount:  "+data[1].innerHTML);
    // console.log("phone:  "+data[2].innerHTML);
    // console.log("pay:  "+data[3].innerHTML);
    console.log("id:  "+data[4].innerHTML);
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
    url: "http://118.195.129.130:3000/order/allpage_order",
    type: "GET",
    data: {}, 
    dataType: "json",
    success: function (result) {
        console.log(result);
        totalNum = Math.ceil(result.pages / 4);
    },
    error: function (err) {
        console.log(err);
    }
});
//修改订单信息
function yes(){
        $.ajax({
            type:'post',
            url:'http://118.195.129.130:3000/order/update_order',
            data:{
               us:us.value,
               amount:am.value,
               phone:ph.value,
               pay:pa.value,
               _id:id.value
            },
            datatype: "json",
            success:function(res){
                op.style.display = "none";
                
                chagePage()
                console.log(us.value);
                console.log(am.value);
                console.log(ph.value);
                console.log(pa.value);
                console.log(id.value);
                console.log(res);
                alert("修改成功");
            console.log(res);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
    //取消之后消除输入框中的内容

function no(){
        op.style.display = "none";
        us.value = "";
        am.value = "";
        ph.value = "";
        pa.value = "";
    }
var se = document.getElementById("inin")

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
    url:"http://118.195.129.130:3000/order/getInfoByKw_order",
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
            searchpage.innerHTML+="<li><span>"+data[i].us+"</span><span>"+data[i].amount+"</span><span >"+data[i].phone+"</span><span>"+data[i].pay+"</span><span style='display: none;'>"+data[i]._id+"</span></li>"
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
//添加菜单
function add(){
    ada.style.display = "block";
}
function yesadd(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/order/add_order',
        data:{
           us:us1.value,
           amount:am1.value,
           phone:ph1.value,
           pay:pa1.value,
        },
        datatype: "json",
        success:function(res){
            ada.style.display = "none";
            chagePage()
            console.log(us.value);
            console.log(am.value);
            console.log(ph.value);
            console.log(pa.value);
            console.log(id.value);
            console.log(res);
            alert("修改成功");
        console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
}
//取消之后消除输入框中的内容
function noadd(){
    ada.style.display = "none";
    us1.value = "";
    am1.value = "";
    ph1.value = "";
    pa1.value = "";
}
//删除已有的订单
function delete1(){
     let data = document.getElementsByTagName("span");
    let c = data[4].innerHTML;
    $.ajax({
        //type规定请求类型，只有GET和POST两种
        type:"POST",
        //url是请求的路径,这里因为请求的是本地文件使用了相对路径
        url:"http://118.195.129.130:3000/order/del_order",
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