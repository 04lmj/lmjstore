window.onload = function () {
            let tab = document.getElementById("tab");
            let leftBtn = document.getElementById("left-btn");
            let rightBtn = document.getElementById("right-btn");
            let list = document.getElementById("list");
            let btn = document.getElementById("btn");
            let tabs = tab.getElementsByTagName("a");
            let btns = btn.getElementsByTagName("a");
            let index = 0;
            let time = null;
            list.onmouseenter = function () {
                clear();
            };
            list.onmouseleave = function () {
                start();
            };
            rightBtn.onclick = function () {
                rightMove();
            };
            leftBtn.onclick = function () {
                leftMove();
            };
            start();

            for (let i = 0; i < btns.length; i++) {
                btns[i].onmouseenter = function () {
                    clear();
                    index = i;
                    list.style.left = -index * 1250 + "px";
                    redBtns(index);
                };
                btns[i].onmouseleave = function () {
                    start();
                }
            }
            function start() {
                time = setInterval(function () {
                    rightMove();
                }, 3000);
            }
            function clear() {
                clearInterval(time);
            }
            function leftMove() {
                index--;
                if (index === -1) {
                    index = 4
                }
                list.style.left = -index * 1250 + "px";
                redBtns(index);
            }
            function rightMove() {
                index++;
                if (index === 5) {
                    index = 0;
                }
                list.style.left = -index * 1250 + "px";
                redBtns(index);
            }
            function redBtns(index) {
                for (let i = 0; i < btns.length; i++) {
                    if (i === index) {
                        btns[i].className = "red";
                    } else {
                        btns[i].className = "white";
                    }
                }
            }
        }
		var top1 = document.querySelector(".right-box");
		var middle = document.querySelector(".right-box-middle");
		var bottom = document.querySelector(".right-box-bottom");
		function changeTop() {
			top1.style.zIndex = 3;
			for (i = 0; i < middle.length; i++)
				middle[i].style.display = "none";
			middle.style.zIndex = 2;
			for (i = 0; i < bottom.length; i++)
				bottom[i].style.display = "none";
			bottom.style.zIndex = 1;
		}
		function changeMiddle() {
			top1.style.zIndex = 2;
			middle.style.zIndex = 3;
			bottom.style.zIndex = 1;
			for (i = 0; i < top1.length; i++)
				top1[i].style.display = "none";
			for (i = 0; i < bottom.length; i++)
				bottom[i].style.display = "none";
		}
		function changeBottom() {
			top1 .style.zIndex = 2;
			middle.style.zIndex = 1;
			bottom.style.zIndex = 3;
		}





































// var index = 0;
// var box = document.getElementsByClassName("container");

// function show_slide(i) {
// 	index += i;
// 	var images = document.getElementsByClassName("image");
// 	var dots = document.getElementsByClassName("dot");
// 	for (i = 0; i < images.length; i++)
// 		images[i].style.display = "none";
// 	for (i = 0; i < dots.length; i++)
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	if (index > images.length - 1)
// 		index = 0;
// 	if (index < 0)
// 		index = images.length - 1;
// 	images[index].style.display = "block";
// 	dots[index].className += " active";
// }
// function autoTimer (){
// 	 timer = setInterval(function () {
// 		 next.onclick();
// 	  },3000);
// 	}
// 	autoTimer();
// 	 var Carousel = document.querySelector(".container");
// 	 Carousel.onmouseover = function () {
// 	 clearInterval(timer); 
// 	}
// 	 Carousel.onmouseleave = function () {
// 		 autoTimer();
// 	 next.onclick();
// 	 }
// window.addEventListener("click", show_slide(index));
var index2 = 0;
function show_slide2(i) {
	index2 += i;
	var images2 = document.getElementsByClassName("image2");
	for (i = 0; i < images2.length; i++)
		images2[i].style.display = "none";
	if (index2 > images2.length - 1)
		index2 = 0;
	if (index2 < 0)
		index2 = images2.length - 1;
	images2[index2].style.display = "block";
}
// function autoTimer2 (){
// 	 timer2 = setInterval(function () {
// 		 you.onclick();
// 	  },3000);
// 	}
// 	autoTimer2();
	//  var Carousel2 = document.querySelector(".roll-img-leftbox");
	//  Carousel.onmouseover = function () {
	//  clearInterval(timer2); 
	// }
	//  Carousel2.onmouseleave = function () {
	// 	 autoTimer2();
	//  you.onclick();
	//  }
window.addEventListener("click", show_slide2(index2));

var index4 = 0;

function show_slide4(i) {
	index4 += i;
	var images4 = document.getElementsByClassName("image4");
	var dots4 = document.getElementsByClassName("dot4");
	for (i = 0; i < images4.length; i++)
		images4[i].style.display = "none";
	for (i = 0; i < dots4.length; i++)
		dots4[i].className = dots4[i].className.replace(" active", "");
	if (index4 > images4.length - 1)
		index4 = 0;
	if (index4 < 0)
		index4 = images4.length - 1;
	images4[index4].style.display = "block";
	dots4[index4].className += " active";
}
window.addEventListener("click", show_slide4(index4));
var top1 = document.querySelector(".right-box");

var middle = document.querySelector(".right-box-middle");
var bottom = document.querySelector(".right-box-bottom");
function changeTop() {
	top1.style.zIndex = 3;
	middle.style.zIndex = 2;
	bottom.style.zIndex = 1;
}
function changeMiddle() {
	top1.style.zIndex = 2;
	middle.style.zIndex = 3;
	bottom.style.zIndex = 1;
}
function changeBottom() {
	top1 .style.zIndex = 2;
	middle.style.zIndex = 1;
	bottom.style.zIndex = 3;
}
let whitebox2 = document.getElementsByClassName("whitebox2");
