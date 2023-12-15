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
// let result;
// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

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


// Задание 10
// let i = 0;
// while (++i < 5) alert( i );  Будет от 1 до 4

// let i = 0;
// while (i++ < 5) alert( i ); Будет от 1 до 5
// Есть разница между этими примерами


// Задание 11
// for (let i = 0; i < 5; i++) alert( i ); Будет от 0 до 4
// for (let i = 0; i < 5; ++i) alert( i ); Будет от 0 до 4
// Нет разницы между этими примерами

// Задание 12
// for (let i = 2; i <= 10; i++) 
// if (i % 2 == 0) {
//     alert (i);    
// }

// Задание 13
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!`  );
//   i++;
// }

// Задание 14
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);


// Задание 15
// for(let i = 20; i >= -10; i-- ){
//     console.log(i)
// }

// let k = 15
// while (k <= 30) {
//     console.log(k++);
// }

// let u = 32
// do{ console.log (u++) } 
// while( u <= 40);


// Задание 16
// for ( let i = 1; i < 10; i++)
// {
//     console.log(i**2)
// }


// Задание 17
// let i = 1
// while(i < 10){
//     console.log(`${i**2}`);
//     i++;
// }


// Задание 18
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   console.log(checkAge ())

// function checkAge(age) {
//     return (age > 18) ? true : confirm ('Родители разрешили?')
// }
// console.log(checkAge ())

// function checkAge (age){
//     return (age > 18) || confirm ('Родители разрешили?')
// }
// console.log(checkAge ())


// Задание 19
// let min = function(a, b) {
//     if( a < b) {
//         return (a);
//     }
//     else {return (b)}
// }
// console.log(min(171, 171))

// function min (a, b){
//     return (a < b) ? a : b
// }
// console.log(min(32, 91))


// Задание 20
// function max(a, b) {
//     if (a > b) {
//         return (a)
//     }
//     else {
//         return (b)
//     }
// }
// console.log(max(91, 92))

// let max = function(a, b){
//     return  (a > b) ? a : b
// }
// console.log(max(71, 24))

// Задание 21
//  const num = prompt('Загадайте число от 1 до 10');
//  function checkNumber(otherNum) {
//     const answer = prompt('Какое число загадал игрок 1?')
//     if (otherNum === answer) {
//         return console.log ('Вы победили!')
//     }
//     if (answer === null || answer === ""){
//         return console.log('Вы проиграли!')
//     }
//     else{
//         console.log('Неправильно!')
//     }
//     checkNumber(otherNum)
//  }
//  checkNumber(num)

