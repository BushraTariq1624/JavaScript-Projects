var char = document.getElementById("char")
var right=0
function animation(){
    console.log(event.keyCode);
    if(event.keyCode===39 && right < 500){
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
        },1200);
    }
    if(event.keyCode===40){
        char.src="images/attack2.gif"
        char.style.height="350px"
        char.width="300px"
        setTimeout(function(){
            char.src="images/static.png"
            char.style.height="200px"
            char.style.width="150px"
        },2000);
    }
}

window.onkeydown = animation