var colors =['red','blue', 'green', 'pink', 'yellow', 'crimson', 'grey'];
let i = 0;

document.getElementById("div").onmouseover = function(){
    document.getElementById("div").style.backgroundColor = colors[i];
    i++;
    if (i == colors.length){
        i = 0;
    }
}

document.getElementById("div").onmouseout = function(){
    document.getElementById("div").style.backgroundColor = 'blueviolet';
}
