//var power = function(x, y) {
//    let res = x;
//    if(y < 0) {
//        x = 1/x;
//        y = -y;
//    }else if(y == 0) {
//        res = 1;
//    }
//    
//    for(let i = 1; i < y; i++) {
//        res = res * x;
//    }
//    console.log(res);
//}

//power(2, 5);


//function ageCheck(){
//    let age = prompt("Вам більше вісімнадцяти років?");
//    if (age == 'Так' || +age > 17){
//        console.log("Доступ дозволено!");
//    }else{
//        console.log("У доступі відмовлено!");
//    }
//}

//ageCheck();


//function simpleNumberCheck(num){
//    let count = 0;
//    for(let i = 1; i <= num; i++) {
//        if (num % i == 0){
//            count++;
//        }
//    }
//    if (count == 2){
//        return true;
//    }else{
//        return false;
//    }
//}

//console.log(simpleNumberCheck(17));
//console.log(simpleNumberCheck(13));
//console.log(simpleNumberCheck(10));


//function max(){
//    if (arguments.length > 2 && arguments.length < 5){
//        let theBiggest = arguments[0];
//        for (i = 0; i < arguments.length-1; i++){
//            if(theBiggest < arguments[i]){
//                theBiggest = arguments[i];
//            }
//        }
//        console.log(theBiggest);
//    }
//}

//max(5, 15, 2);


//function geometricSequenceSum1(n, q){
//    let s = 1;
//    let num = 1;
//    for (let i = 1; i < n; i++){
//        num = num * q;
//        s = s + num;
//    }
//    console.log(s);
//}
//
//function geometricSequenceSum2(n, q){
//    console.log((1 - Math.pow(q, n))/(1 - q));
//}

//geometricSequenceSum1(5, 2);
//geometricSequenceSum1(4, 3);
//geometricSequenceSum2(5, 2);
//geometricSequenceSum2(4, 3);


//function simpleNumbers(a, b){
//    for (let i = a; i <= b; i++){
//        let count = 0;
//        for(let j = 1; j <= i; j++) {
//            if (i % j == 0){
//                count++;
//            }
//        }
//        if (count == 2){
//            console.log(i);
//        }
//    }
//    
//}

//simpleNumbers(0, 100);


//function getParams(){
//    return arguments.length;
//}

//console.log(getParams(1, 2, 3, 4, 5));
//console.log(getParams());


//function min(){
//    let min = arguments[0];
//    for(let i = 0; i < arguments.length - 1; i++){
//        if(min > arguments[i]){
//            min = arguments[i];
//        }
//    }
//    console.log(min)
//}

//min(12, -5, 48, -43, 0);


//function max(){
//    let max = arguments[0];
//    for(let i = 0; i < arguments.length - 1; i++){
//        if(max < arguments[i]){
//            max = arguments[i];
//        }
//    }
//    console.log(max)
//}

//max(12, -5, 48, -43, 0);


//function luckyTicket(){
//    if (arguments.length == 8){
//        if (arguments[0]+arguments[1]+arguments[2]+arguments[3] == arguments[4]+arguments[5]+arguments[6]+arguments[7]){
//            return true;
//        }else {
//            return false;
//        }
//    }else{
//        alert("Error");
//    }
//}

//console.log(luckyTicket(1, 2, 3, 4, 4, 3, 2, 1));
//console.log(luckyTicket(1, 2, 3, 4, 5, 6, 7, 8));
//console.log(luckyTicket(1, 2, 3, 4, 4, 3));


//function soDifferentNumbers(){
//    let plus = [];
//    let minus = [];
//    let zero = 0;
//    for(i = 0; i < arguments.length-1; i++){
//        if (arguments[i]>0){
//            plus.push(arguments[i]);
//        }else if (arguments[i]<0){
//            minus.push(arguments[i]);
//        }else{
//            zero++;
//        }
//    }
//    console.log("Додатні: ", plus,"  Від'ємні: ", minus, "  Нулів: ", zero);
//}

//soDifferentNumbers(0, 0, 5, 48, -84, -1, -4);