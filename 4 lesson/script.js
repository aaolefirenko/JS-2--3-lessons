
//lesson 4



//1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.

/*
let str1 = prompt('введите число');
RegExp = /[0-9]/g;

console.log(str1.match(RegExp));
let a = 0;
//let temp = str1.length;
for (let i = 0; i < str1.length; i++){
  a = a + Number(str1[i]);
}
console.log(a);*/


// 2. Дана строка и символ. Удвоить каждое вхождение
//заданного символа в строку.


 /*let str1 = "apple";
let str2 = prompt('Введите любую букву');
let regexp = new RegExp(str2, "ig");
console.log('было', str1 + ',', 'стало', str1.replace(regexp, str2+str2));*/



// 3. Проверить что введенный пароль удовлетворяет
//следующим условиям сложности:
//ok- длинна от 9 символов;
//ok- содержит обязательно английские буквы верхнего и нижнего регистра;
//- содержит более двух цифр;
//- содержит обязательно один из неалфавитных символов (например, !, $, #, %).
/*
* не работает.
* р12345678 - не проходит проверку и пишето что у меня нет прописной буквы, а она есть
* р12345678ЫЫ - не проходит проверку пишет что нет букв прописных и заглавных,а они есть
* про спецсимволы вообще не слова почему-то
* */


  /*let pass = prompt(`Введите пароль с учетом обязательного содержания:
- минимум 9 символов;
- английских букв верхнего и нижнего регистра;
- более двух цифр;
- одного из неалфавитных символов (например, !, $, #, %).
`);
let error = '';
//условие -  длинна от 9 символов;
if (pass.length < 9) {
  //alert('минимум 9 символов!');
  error = error + 'Должно быть минимум 9 символов!\n';
}

//условие - содержит более двух цифр;
let control_d = /\d/g;
if (pass.match(control_d)) {
  if (pass.match(control_d).length >= 3) {
    //alert('ок 1-99');
  } else {
   // alert('Должно быть минимум 3 цифры');
    error = error + 'Должно быть минимум 3 цифры!\n';
  }

} else {
  //alert('Должно быть минимум 3 цифры');
  error = error + 'Должно быть минимум 3 цифры!\n';
}

//условие - обязательно английские буквы верхнего регистра

let control_AZ = /[A-Z]/g;
if (pass.match(control_AZ)) {

  //alert('ок A-Z');
} else {

  //alert('Должны быть буквы. Латинские! Минимум одна заглавная');
  error = error + 'Должны быть буквы. Латинские! Минимум одна заглавная!\n';
}
//условие - обязательно английские буквы нижнего регистра
let control_az = /[a-z]/g;
if (pass.match(control_az)) {

  //alert('ок a-z');
} else {

  //alert('Должны быть буквы. Латинские! Минимум одна прописная');
  error = error + 'Должны быть буквы. Латинские! Минимум одна прописная!\n';
}

//условие - обязат. один из неалфавит симв(напр, !, $, #, %).
let control_W = /\W/;
if (pass.match(control_W)) {
  //console.log('ок znak');
  //alert('ок znak');
} else {

 // alert('Должен быть хотя бы один знак, кроме букв и цифр');
  error = error + 'Должен быть хотя бы один знак, кроме букв и цифр!\n';
}

console.log(error);*/





//4** Нечёткий поиск:
//Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница
//Суббота Воскресенье". Пользователь вводит слово из словаря с одной
//перепутанной буквой, например: "Срида". Написать программу, которая
//позволяет с использованием регулярного выражения найти в строке-словаре
//введённое пользователем слово (не смотря на одну ошибку в слове) и
//вывести исправленное слово пользователю, например: "Среда".  */


/*
* Не работает. у тебя поиск идет только центру слова. А надо что бы пользователь ошибся в 1 любой букве
* хоть в первой и функция предлогает ему варинт автозамены. А у тебя к примеру
* если ввести слово "Подонок" то выдаст 2 слова вообще. То есть что бы
* Кторник
* Впорник
* Втарник
* Вточник
* Вторпик
* Вторнек
* Вторниг
* приводили все ко Вторник. Но только 1 буква ошибочная
* */
 /*let str = 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье';
let day1 = 'Понедельник', day2 = 'Вторник', day3 = 'Среда', day4 = 'Четверг',
    day5 = 'Пятница', day6 = 'Суббота', day7 = 'Воскресенье';

    let strinput = prompt(`Введите любой день недели в формате:
	Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье
	и сделайте специально одну ошибку в середине слова`);

RegExp = /^п[(а-я, a-z)]*к/i;    //пн
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day1), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^в[(а-я, a-z)]*к/i;      //вт
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day2), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^ср[(а-я, a-z)]*а/i;       //ср
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day3), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^ч[(а-я, a-z)]*г/i;      //чт
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day4), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^п[(а-я, a-z)]*а/i;      //пт
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day5), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^су[(а-я, a-z)]*а/i;      //сб
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day6), '...Сработала автозамена для ' + '"'+ strinput +'"');
}
RegExp = /^в[(а-я, a-z)]*е/i;      //вс
if (RegExp.test(strinput)) {
	console.log(strinput.replace(RegExp, day7), '...Сработала автозамена для ' + '"'+ strinput +'"');
}*/



