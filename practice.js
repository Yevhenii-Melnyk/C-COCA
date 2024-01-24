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

// Задание 22
// function minmax(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }
// console.log(minmax(1, 11))

// Задание 23
// let now = new Date(2012, 1, 20, 3, 12)
// alert(now)

// Задание 24
// function getWeekDate(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()]
// }
// let date = new Date(2024, 0, 17);
// alert(getWeekDate(date))

// Задание 25
// let date = new Date(2024, 0, 17)
// function getLocalDay(date) {
//     let day = date.getDay()
//     if (day == 0) {day = 7}
//     return day;
// }
// console.log(getLocalDay(date))

// Задание 26
// let date = new Date(2015, 0, 2);
// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() + days);
//   return dateCopy.getDate();
// }
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// Задание 27
// function getLastDayOfMotsh(year, month) {
//     let date = new Date(year, month +1, 0);
//     return date.getDate();
// }
// alert( getLastDayOfMotsh(2012, 9) )

// Задание 28
// function getSecondToday() {
//     let now = new Date ();
//     let today = new Date (now.getFullYear(), now.getMonth(), now.getDate());
//     let deff = now - today;
//     return Math.round(deff/1000);
// }
// alert(getSecondToday() );

// function getSecondsToday() {
//     let d = new Date();
//     return (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
// }
// alert(getSecondsToday() );

// Задание 29
// function getSecondToTomarow() {
//     let now = new Date();
//     let tomarow = new Date (now.getFullYear(), now.getMonth(), now.getDate()+1);
//     let deff = now - tomarow;
//     return Math.round(deff / 1000);
// }
// alert(getSecondToTomarow())

// function getSecondToTomarow() {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;

//     return totalSecondsToday - totalSecondsInADay;
// }
// alert(getSecondToTomarow())

// Задание 30
// let str = 'I am string';
// console.log (str.length);
// console.log (str.charAt(0));
// console.log (str.charCodeAt(0));

// let string = 'Hello, my name is Yevhenii';
// console.log (string.toUpperCase ());

// let string1 = "Please locate where locate occurs!";
// let pos = string1.indexOf("!");
// console.log(pos);
// let poz = string1.includes("where");
// console.log(poz);
// console.log(string1.startsWith("Ple"));
// console.log(string1.endsWith("rs!"));

// let string2 = "   It's a new world!   ";
// console.log(string2.trim());

// let string3 = "Corectly";
// console.log(string3.substring(0,5));
// console.log(string3.slice(2,-2));

// console.log('a' > 'Z');

// let string4 = "Please make sure that the app id is set correct";
// console.log(string4.search("the"));

// string5 = "Please visit Microsoft!";
// console.log(string5);
// let n = string5.replace("Microsoft", "Google");
// console.log(n);

// // Задание 31
// let str = "lorem ipsum is simply dummy";
// console.log(str.replace("l", "L"))

function batterstr(n, b) {
    let n = "Sebptember is a bad month for me"
    let b = "My birthday is a very happy day. It's october month"
    return(Math.max(n, b))
}

console.log(batterstr)