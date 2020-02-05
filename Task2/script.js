
document.getElementById("bodyBackgroundWhite").onclick = function(){
    document.body.style.backgroundColor = "white";
}
document.getElementById("bodyBackgroundRed").onclick = function(){
    document.body.style.backgroundColor = "red";
} 
document.getElementById("bodyBackgroundBlack").onclick = function(){
    document.body.style.backgroundColor = "black";
}
document.getElementById("bodyBackgroundBlue").onclick = function(){
    document.body.style.backgroundColor = "blue";
}
document.getElementById("bodyBackgroundYellow").onclick = function(){
    document.body.style.backgroundColor = "yellow";
}
document.getElementById("bodyBackgroundGreen").onclick = function(){
    document.body.style.backgroundColor = "green";
}
//
//
document.getElementById("backgroundWhite").onclick = function(){
    document.getElementById("links").style.backgroundColor = "white";
}
document.getElementById("backgroundRed").onclick = function(){
    document.getElementById("links").style.backgroundColor = "red";
} 
document.getElementById("backgroundBlack").onclick = function(){
    document.getElementById("links").style.backgroundColor = "black";
}
document.getElementById("backgroundBlue").onclick = function(){
    document.getElementById("links").style.backgroundColor = "blue";
}
document.getElementById("backgroundYellow").onclick = function(){
    document.getElementById("links").style.backgroundColor = "yellow";
}
document.getElementById("backgroundGreen").onclick = function(){
    documgetElementById("links").style.backgroundColor = "green";
}
//
//
document.getElementById("divBackgroundWhite").onclick = function(){
    document.getElementById("div").style.backgroundColor = "white";
}
document.getElementById("divBackgroundRed").onclick = function(){
    document.getElementById("div").style.backgroundColor = "red";
} 
document.getElementById("divBackgroundBlack").onclick = function(){
    document.getElementById("div").style.backgroundColor = "black";
}
document.getElementById("divBackgroundBlue").onclick = function(){
    document.getElementById("div").style.backgroundColor = "blue";
}
document.getElementById("divBackgroundGreen").onclick = function(){
    document.getElementById("div").style.backgroundColor = "green";
}
document.getElementById("divBackgroundYellow").onclick = function(){
    document.getElementById("div").style.backgroundColor = "yellow";
}
//
//
document.getElementById("h1Left").onclick = function(){
    document.getElementById("h1").style.justifyContent = "flex-start";
}
document.getElementById("h1Centre").onclick = function(){
    document.getElementById("h1").style.justifyContent = "center";
} 
document.getElementById("h1Right").onclick = function(){
    document.getElementById("h1").style.justifyContent = "flex-end";
}


document.getElementById("fontMonospace").onclick = function(){
    document.body.style.fontFamily = "monospace";
} 
document.getElementById("fontInherit").onclick = function(){
    document.body.style.fontFamily = "inherit";
}
document.getElementById("fontCursive").onclick = function(){
    document.body.style.fontFamily = "cursive";
}
document.getElementById("fontSans-serif").onclick = function(){
    document.body.style.fontFamily = "sans-serif";
}
document.getElementById("fontFantasy").onclick = function(){
    document.body.style.fontFamily = "fantasy";
}


document.getElementById("colorWhite").onclick = function(){
    document.getElementById("links").style.color = "white";
}
document.getElementById("colorRed").onclick = function(){
    document.getElementById("links").style.color = "red";
} 
document.getElementById("colorBlack").onclick = function(){
    document.getElementById("links").style.color = "black";
}
document.getElementById("colorBlue").onclick = function(){
    document.getElementById("links").style.color = "blue";
}
document.getElementById("colorYellow").onclick = function(){
    document.getElementById("links").style.color = "yellow";
}
document.getElementById("colorGreen").onclick = function(){
    document.getElementById("links").style.color = "green";
}


document.getElementById("divColorWhite").onclick = function(){
    document.getElementById("div").style.color = "white";
}
document.getElementById("divColorRed").onclick = function(){
    document.getElementById("div").style.color = "red";
} 
document.getElementById("divColorBlack").onclick = function(){
    document.getElementById("div").style.color = "black";
}
document.getElementById("divColorBlue").onclick = function(){
    document.getElementById("div").style.color = "blue";
}
document.getElementById("divColorYellow").onclick = function(){
    document.getElementById("div").style.color = "yellow";
}
document.getElementById("divColorGreen").onclick = function(){
    document.getElementById("div").style.color = "green";
}

document.getElementById("div100").onclick = function(){
    document.getElementById("div").style.fontWeight = "100";
}
document.getElementById("div200").onclick = function(){
    document.getElementById("div").style.fontWeight = "200";
}
document.getElementById("div300").onclick = function(){
    document.getElementById("div").style.fontWeight = "300";
}
document.getElementById("div400").onclick = function(){
    document.getElementById("div").style.fontWeight = "400";
}
document.getElementById("div500").onclick = function(){
    document.getElementById("div").style.fontWeight = "500";
}
document.getElementById("div600").onclick = function(){
    document.getElementById("div").style.fontWeight = "600";
}
document.getElementById("div700").onclick = function(){
    document.getElementById("div").style.fontWeight = "700";
}
document.getElementById("div800").onclick = function(){
    document.getElementById("div").style.fontWeight = "800";
}
document.getElementById("div900").onclick = function(){
    document.getElementById("div").style.fontWeight = "900";
}

document.getElementById("mark1").onclick = function(){
    for(let i = 0; i < document.getElementsByTagName("li").length; i++){
        document.getElementsByTagName("li")[i].style.listStyleType = "circle";
    }
}
document.getElementById("mark2").onclick = function(){
    for(let i = 0; i < document.getElementsByTagName("li").length; i++){
        document.getElementsByTagName("li")[i].style.listStyleType = "disc";
    }
}
document.getElementById("mark3").onclick = function(){
    for(let i = 0; i < document.getElementsByTagName("li").length; i++){
        document.getElementsByTagName("li")[i].style.listStyleType = "square";
    }
}
let link = prompt("Ваш улюблений сайт?")
document.write(link);