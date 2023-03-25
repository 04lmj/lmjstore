//判断是否已经登录
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
var price = document.getElementById("price");
var typeid = document.getElementById("typeid");
var typename = document.getElementById("typename");
var id = document.getElementById("id");
var desc = document.getElementById("desc");
var searchpage = document.getElementById("searchpage");
var sea = document.getElementById("sea");
var searchpagetop = document.getElementById("searchpage-top");
var clo = document.getElementById("closepage");
var us1 = document.getElementById("name1");
var price1 = document.getElementById("price1");
var typeid1 = document.getElementById("typeid1");
var typename1 = document.getElementById("typename1");
var desc1 = document.getElementById("desc1");
var cen = document.getElementById("button-center");
var page = 1;
var i = 0;
function chagePage(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/food/getInfoByPage',
        data:{
            page:page,
            per_page:4
        },
        dataType: "json",
        success:function(res){
            ul1.innerHTML="";
            let data=res.data;
            for(let i =0;i<data.length;i++){
                let b = data[i].typeid;
                if(b ==0){
                    b = "面";
                }
                if(b ==1){
                    b = "米";
                }
                if(b ==2){
                   b= "饮品";
                }
                if(b ==3){
                    b = "水果";
                }
                ul1.innerHTML+="<li><span>"+data[i].name+"</span><span>"+b+"</span><span >"+data[i].price+"</span><span>"+data[i].desc+"</span><span>"+data[i].typename+"</span><span style='display: none;'>"+data[i]._id+"</span><button onclick='revise(this)'>修改</button><button onclick='delete1()'>删除</button></li>"
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
    console.log("us:  "+data[0].innerHTML);
    console.log("amount:  "+data[1].innerHTML);
    console.log("phone:  "+data[2].innerHTML);
    console.log("pay:  "+data[3].innerHTML);
    console.log("id:  "+data[4].innerHTML);
    id.value=data[5].innerHTML;
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
    // document.getElementById("input-search").value = "";
}
$.ajax({
    url: "http://118.195.129.130:3000/food/allpage",
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
//修改菜品信息
function yes(){
        $.ajax({
            type:'post',
            url:'http://118.195.129.130:3000/food/update',
            data:{
               name:us.value,
               price:price.value,
               desc:desc.value,
               typeid:typeid.value,
               typename:typename.value,
               _id:id.value
            },
            datatype: "json",
            success:function(res){
                op.style.display = "none";
                
                chagePage()
                console.log(res);
                alert("修改成功");
            console.log(res);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
//取消后清除输入框中所输入的信息
function no(){
        op.style.display = "none";
        price.value = "";
        desc.value = "";
        typeid.value = "";
        typename.value = "";
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
    url:"http://118.195.129.130:3000/food/getInfoByKw",
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
            let b = data[i].typeid;
            if(b ==0){
                b = "面";
            }
            if(b ==1){
                b = "米";
            }
            if(b ==2){
               b= "饮品";
            }
            if(b ==3){
                b = "水果";
            }
            searchpage.innerHTML+="<li><span>"+data[i].name+"</span><span>"+b+"</span><span >"+data[i].price+"</span><span>"+data[i].typename+"</span><span>"+data[i].desc+"</span><span style='display: none;'>"+data[i]._id+"</span></li>"
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
//添加菜品信息
function add(){
    ada.style.display = "block";
}
function yesadd(){
    $.ajax({
        type:'post',
        url:'http://118.195.129.130:3000/food/add',
        data:{
            name:us1.value,
            price:price1.value,
            desc:desc1.value,
            typeid:typeid1.value,
            typename:typename1.value,
        },
        datatype: "json",
        success:function(res){
            ada.style.display = "none";
            chagePage()
            // console.log(us.value);
            // console.log(am.value);
            // console.log(ph.value);
            // console.log(pa.value);
            // console.log(id.value);
            console.log(res);
            alert("修改成功");
        console.log(res);
        },
        error:function(err){
            console.log(err);
        }
    })
}
//取消后删除输入框中所输入的数据
function noadd(){
    ada.style.display = "none";
    us1.value = "";
    price1.value = "";
    desc1.value = "";
    typeid1.value = "";
    typename1.value = "";
}
//删除菜品信息
function delete1(){
    let data = document.getElementsByTagName("span");
   let c = data[5].innerHTML;
   $.ajax({
       //type规定请求类型，只有GET和POST两种
       type:"POST",
       //url是请求的路径,这里因为请求的是本地文件使用了相对路径
       url:"http://118.195.129.130:3000/food/del",
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