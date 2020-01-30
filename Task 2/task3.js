let num = prompt("Введіть номер місяця");

if (num > 0 && num < 13){
    switch (num) {
    case '1':
        alert ("Січень");
        break;
    case '2':
        alert ("Лютий");
        break;
    case '3':
        alert ("Березень");
        break;
    case '4':
        alert ("Квітень");
        break;
    case '5':
        alert ("Травень");
        break;
    case '6':
        alert ("Червень");
        break;
    case '7':
        alert ("Липень");
        break;
    case '8':
        alert ("Серпень");
        break;
    case '9':
        alert ("Вересень");
        break;
    case '10':
        alert ("Жовтень");
        break;
    case '11':
        alert ("Листопад");
        break;
    case '12':
        alert ("Грудень");
        break;
    }
}else{
    alert("Ви ввели неправильне число");
}
