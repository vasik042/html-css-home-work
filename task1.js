function someFunction(){
    let a = +prompt("Введіть 1 число");
    let b = +prompt("Введіть 2 число");

    if (a > b){
        let c = a;
        a = b;
        b = c;
    }
    if (a % 1 > 0){
        a = a + (1 - a % 1);
    }
    if (b % 1 > 0){
        b = b - (1 - b % 1);
    }
    if (a % 1 < 0){
        a = a - (1 - a % 1);
    }
    if (b % 1 < 0){
        b = b + (1 - b % 1);
    }
    for (let i = a; i <= b; i++){
        if (i % 2 == 1 || i % 2 == -1){
        console.log(i);
    }
}
    
someFunction();

    
function fibonachi(num){
    let a = 1;
    let b = 1;
    for (let i = 0; i < num; i++){
        if (i == 0){
            console.log(1);
        }else if(i == 1){
            console.log(1);
        }else{
            if (i % 2 == 1){
                b = b + a;
                console.log(b);
            }else{
                a = a + b;
                console.log(a);
            }
        }
    }
}

fibonachi(10);
