console.log("hello");
var slide = document.getElementById("slider-Container");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");
var line1 = document.getElementById("line-1")
var line2 = document.getElementById("line-2")
var line3 = document.getElementById("line-3")
var line4 = document.getElementById("line-4")
var line5 = document.getElementById("line-5")

let x = 0;

leftArrow.onclick = function(){
    if(x > -1840){
        x= x-460;
        slide.style.transition = "all .4s ease-in-out";
        slide.style.left = x + "px";
    }else{
        x=0
        slide.style.transition = "all 0s";
        slide.style.left = x + "px";
        setTimeout(()=>{
            x=x-460
            slide.style.transition = "all .4s ease-in-out";
            slide.style.left = x + "px";
        },0)
    }
}
rightArrow.onclick = function(){
    if(x < 0){
        x= x+460;
        slide.style.left = x + "px";
    }else{
        x=-1840
        slide.style.transition = "all 0s";
        slide.style.left = x + "px";
        setTimeout(()=>{
            x=x+460
            slide.style.transition = "all .4s ease-in-out";
            slide.style.left = x + "px";
        },0)
    }
}

window.onload = function () {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 380) {
          line1.classList.add("line1");
        }else{
        line1.classList.remove("line1");
      }
      if (document.documentElement.scrollTop > 430) {
        line2.classList.add("line2");
      }else{
        line2.classList.remove("line2");
      }
      if (document.documentElement.scrollTop > 500) {
        line3.classList.add("line3");
      }else{
        line3.classList.remove("line3");
      }
      if (document.documentElement.scrollTop > 550) {
        line4.classList.add("line4");
      }else{
        line4.classList.remove("line4");
      }
      if (document.documentElement.scrollTop > 600) {
        line5.classList.add("line5");
      }else{
        line5.classList.remove("line5");
      }
    };
  };