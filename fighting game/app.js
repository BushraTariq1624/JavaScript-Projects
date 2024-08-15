var char = document.getElementById("char")
var right=0
var char2= document.getElementById("char2")
var left=0
function animation(){
    console.log(event.keyCode);
    if(event.keyCode===39 && right < 700){
        char.src="images/forward.gif"
        right=right+10
        char.style.left= right +"px"
        setTimeout(function(){
            char.src="images/static.png"
        },1000)
    }
    if(event.keyCode===37 && right >10){
        char.src="images/backward.gif"
        right=right-10
        char.style.left=right+"px"
        setTimeout(function(){
            char.src="images/static.png"
        },1000)
    }
    if(event.keyCode===38){
        char.src="images/attack1.gif"
        char.style.height="250px"
        char.style.width="200px"
        setTimeout(function(){
            char.src="images/static.png"
            char.style.height="200px"
            char.style.width="150px"
        },1000);
    }
    if(event.keyCode===40){
        char.src="images/slave.gif"
        char.style.height="350px"
        char.style.width="300px"
        setTimeout(function(){
            char.src="images/static.png"
            char.style.height="200px"
            char.style.width="150px"
        },2000);
    }
    if(event.keyCode===65 && left<700){
        char2.src="images/eagle-sp6.gif"
        left=left+10
        char2.style.right=left +"px"
        setTimeout(function(){
            char2.src="images/eagle-sp7.gif"
        },1000)
    }
    if(event.keyCode===68 && left > 10){
        char2.src="images/eagle-sp4.gif"
        left=left-10;
        char2.style.right=left+"px"
        setTimeout(function(){
            char2.src="images/eagle-sp7.gif"
        },1000)
    }
    if(event.keyCode===87){
        char2.src="images/eagle-taunt.gif"
        setTimeout(function(){
            char2.src="images/eagle-sp7.gif"
        },1000)
    }
    if(event.keyCode===83){
        char2.src="images/eagle-cv-super2.gif"
        char2.style.height="300px"
        char2.style.width="250px"
        setTimeout(function(){
            char2.src="images/eagle-sp7.gif"
            char2.style.height="200px"
            char2.style.width="150px"
        },1000)
    }
}
window.onkeydown = animation