function onpage(){
  if(!sessionStorage.getItem("land")) {
    alert("您还未登录")
    window.location = "login.html";
  }
}
onpage()

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
 function user1(){
  $.ajax({
   type : "GET",
   async : false, //同步请求
   url : "user.html",
   data : {
    
   },
   success:function(dates){
   $("#mainContent").html(dates);//要刷新的div
   },
   error: function() {
         alert("失败，请稍后再试！");
       }
  });
}
function greens(){
  $.ajax({
   type : "GET",
   async : false, //同步请求
   url : "greens.html",
   data : {},
   success:function(dates){
   $("#mainContent").html(dates);//要刷新的div
   },
   error: function() {
         // alert("失败，请稍后再试！");
       }
  });
  
}
function order(){
  $.ajax({
   type : "GET",
   async : false, //同步请求
   url : "order.html",
   data : {},
   success:function(dates){
   $("#mainContent").html(dates);//要刷新的div
   },
   error: function() {
         // alert("失败，请稍后再试！");
       }
  });
}