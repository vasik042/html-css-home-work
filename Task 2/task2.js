let name = prompt("Введіть імя");
if (name == "Імя" || name == "Ім'я" || name == "імя" || name == "ім'я"){
    let password = prompt("А який у вас пароль?");
    if(password == "ЛОГОС"){
        alert("Ласкаво просимо!");
    }else if (!password){
        alert("Вхід скасовано");
    }else{
        alert("Пароль невірний");
}
}else if (!name){
    alert("Вхід скасовано");
}else{
    alert("Я вас не знаю");
}