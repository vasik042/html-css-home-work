document.getElementById("div").onmouseover = function(){
    document.getElementById("div1").style.zIndex = 0;
}

document.getElementById("div").onmouseout = function(){
    document.getElementById("div1").style.zIndex = 100;
}

document.getElementById("div").onmousedown = function(){
    document.getElementById("div2").style.zIndex = 0;
}

document.getElementById("div").onmouseup = function(){
    document.getElementById("div2").style.zIndex = 10;
}