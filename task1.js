function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum =  sum + arr[i];
    }
    console.log(sum);
}

arr = [2, 3, 4, 6, 7, 8];
sum(arr);

//////////////////////////////////////////

function mergeArrays(arr, arrToPaste, pos){
    for(let i = 0; i < arrToPaste.length; i++){
        arr.splice((pos +i), 0, arrToPaste[i]);
    }
}

let arr1 = [2, 3, 4, 5, 10, 11, 12, 13];
let arrToPaste = [6, 7, 8, 9];

console.log(arr1);
console.log(arrToPaste);

mergeArrays(arr1, arrToPaste, 4);
console.log(arr1);

////////////////////////////////////////

function indexOf(arr, element){
    let index = arr.indexOf(element);
    if (index < 0){
        return "Такого елементу немає";
    }else{
        return index;
    }
}

console.log(indexOf(arr, 2));
console.log(indexOf(arr, 3));
console.log(indexOf(arr, 222));

//////////////////////////////////////

function getFilteredArr(arr, x){
    return arr.filter(item => item > x);
}

let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(arr2);
arr2 = getFilteredArr(arr2, 3);
console.log(arr2);
console.log('');

//////////////////////////////////////

function noMoRepeat(arr){
    let sortArr = [];
    for(let i = 0; i <arr.length; i++){
        if(!sortArr.includes(arr[i])){
            sortArr.push(arr[i]);
        }
    }
    return sortArr;
}

let arr3 = [1,2, 3, 4, 5, 6, 4, 3, 9, 2, 3, 2, 8];
console.log(arr3);
arr3 = noMoRepeat(arr3);
console.log(arr3);