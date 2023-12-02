// const age = prompt("Сколько вам лет?");


// function checkAge(usersAge){
//     console.log("userAge", usersAge)
//     if (!usersAge){
//         return console.log("Вы не ввели возраст!")
//     }
//     if(usersAge >= 18){
//        return console.log("Проходите!") }
//         else{
//         console.log("Доступ запрещен!")
//     }
// }

// checkAge(age);

//----------------------------------------------------------

// const ready = confirm ("Вы готовы войти?");


// if(ready){
//         const newName = prompt("Введите ваше имя")
//         console.log(`Ваше имя: ${newName}`)
//     } 

// else{
//     console.log("Вы не вошли")
// }

//----------------------------------------------------------
/*Практика*/


// Задание 1
// let num = prompt ();
// if(num > 0 ){
//  console.log("1")
// }
// if(num < 0){
//  console.log("1")
// }
// else{ 
// console.log ("0")
// }


// Задание 2
// var a = 1;
// var n;
// if (a> 0) {n = true; }
// else {n = false; }
// console.log(n)

// n = (a = 1 > 0) ? true : false;
// console.log(n)


// Задание 3
//  a = 5; b = 3;
//  alert ((a>b) && (a===b))
// alert (true && 0 && ('a' < 'Z'))
//  alert ((a>b) || true || ('2'==2) || (false == ''))
// alert ((a<b) && (0 == false))
//  alert (!(2==2) || (true && ''))


// Задание 4
// let programinName = prompt ('Какое официальное название JavaScript?', '')

// if (programinName == 'ECMAScript') {
//     alert ('Верно!')
// }
// else {
//     alert ('Не знаете? ECMAScript!')
// }


// Задание 5
// result = (a + b < 4) ? 'Мало' :  'Много';


// Задание 6
// let message = (login == 'Сотрудник') ? 'Привет!':
// (login == 'Директор') ? 'Здравствуйте!' :
// (login == '') ? 'Нет логина' : 
// '';


// Задание 7
// if (browser == Edge) {
//     alert("You've got the Edge!")
// }
// else if (browser == Chrome || browser == Firefox || browser == Safari || browser == Opera){
//     alert ('Okay we support these browsers too')
// }
// else{
//     alert ('We hope that this page looks ok!')
// }


// Задание 8
// let number = +prompt('Введите число между 0 и 3', '')
// switch (number) {
//     case '0':
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//     default:
//         break;
// }


// Задание 9
// let number = +prompt('Введите число 1, 2 или 3', '')
// switch (number) {
//     case 1:
//         console.log('a')
//         break;
//     case 2:
//         console.log('b')
//         break;
//     case 3:
//         console.log('c')
//         break;

//     default: console.log('z')
//         break;
// }