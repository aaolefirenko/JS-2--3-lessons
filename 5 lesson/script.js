
//lesson 5
/* 
1. Написать функцию сравнения двух массивов. Функция принимает на 
вход два массива, сравнивает их и возвращает true, если массивы 
равны и false, если не равны. */ 

/* let friends = ['Вася', 'Петя', 'Маша', 'Саша']

function comprasion(a, b) {
  let res = a.join() == b.join();
  if(res == true){
    return true
  }else{
    return 'false' , '879' 
  }
}
let reg = /^jhfj/
console.log(reg)
let a = [20, 20, 30, 41];
let b = [20, 20, 30, 40];
comprasion(a,b) */



//'------------------------------------------------------------------------------

/* 2. Напишите функцию range, принимающую три аргумента, два обязательных: 
начало и конец диапазона, третий аргумент - необязательный 
(если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, 
включая начальное и конечное. Например, вызов функции range(1, 10, 2) 
должен будет вернуть [1, 3, 5, 7, 9].
 */
/* 
let obj = {
  start:1,
  end:2
}
let arr2 = [,2]

 let a = 1;
let b = 10;
let c = prompt('Введите цифру от 1- 10 или просто нажмите "Ок"');
c = Number(c);
console.log(c)
if (!c) {
  c = 1
// как здесь сразу записать, что есл и с == андеф и это тру, то ... без элсе короче????
} 
console.log(c) */
/*function range(3argum ) {
      if(3argum это объект){
        let start = 3argum.test
      }else if(3rgum это массив){
        let start = 3aargum[0]
      }else if (3argum.length){

      }
     let arr = [];
 
    for (i = start; i <= end; i = i + step) {
      console.log(i);
      arr.push(i);
    }
  

    return arr;
  }  

console.log(range(a, b, c));  */
//'------------------------------------------------------------------------------


 
/* 
3. Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы 
(в виде массива), Место обучения. Написать отдельную функцию, которой передается
объект студент, а она выводит его содержимое.
 */

/*

let studentObject = {
    Name: 'alex',
    surname: 'olefir',
    age: 32,
    //interest: 'js',
	interest: ['js', 'mt', 'ph'],
    studyPlace: 'street'
  }  

function studentInfo(studentObject) {
  	let arr = [];
	for (let key in studentObject){
	let res = key + ' = ' + studentObject[key];
	//console.log(res);
	arr.push(res);} 
		
		console.log(arr);
	return arr
	 
} 
 
studentInfo(studentObject);
*/

//'------------------------------------------------------------------------------

/* 4* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно. */

/*
//let a = [а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я];
let a = ['б', 'в', 'г', 'д', 'ж', 'з', 'к'];

let b = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
let c = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
//let arrN = [3, 4, 5];




let rand_a = Math.floor(Math.random() * a.length);
let rand_a1 = Math.floor(Math.random() * a.length);
let rand_a2 = Math.floor(Math.random() * a.length);
let rand_b = Math.floor(Math.random() * b.length);
let rand_b1 = Math.floor(Math.random() * b.length);
let rand_b2 = Math.floor(Math.random() * b.length);




						//let arrNum = [1, 2]; // 1 - rand_a, 2 - rand_b
						//console.log(arrNum);

function getRandomAB(min, max) { //выбор ГЛАС/НЕГЛАС
	
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let RezgetRandomAB = getRandomAB(1, 2);

function getRandomN(min, max) { //выбор кол-ва букв 3-5
	
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let RezgetRandomN = getRandomN(3, 5);



						//console.log(getRandomAB(arrNum[0], arrNum[1]));
						//console.log(RezgetRandomAB);


						//if ((RezgetRandomAB == 1 && getRandomNum(3, 5) == 3)){
if (RezgetRandomAB == 1 && RezgetRandomN == 3){
	console.log(a[rand_a], b[rand_b], a[rand_a1], 'попал в 3. начало с соглас');
	}
else ;
if (RezgetRandomAB == 1 && RezgetRandomN == 4) {
	console.log(a[rand_a], b[rand_b], a[rand_a1], b[rand_b1], 'попал в 4. начало с соглас');
	}
else ;
if (RezgetRandomAB == 1 && RezgetRandomN == 5) {
	console.log(a[rand_a], b[rand_b], a[rand_a1], b[rand_b1], a[rand_a2], 'попал в 5. начало с соглас');
	}
else ;	
if (RezgetRandomAB == 2 && RezgetRandomN == 3){
	console.log(b[rand_b], a[rand_a], b[rand_b1], 'попал в 3. начало с глас');
	}
else ;
if (RezgetRandomAB == 2 && RezgetRandomN == 4) {
	console.log(b[rand_b], a[rand_a], b[rand_b1], b[rand_b1], 'попал в 4. начало с глас');
	}
else ;
if (RezgetRandomAB == 2 && RezgetRandomN == 5) {
	console.log(b[rand_b], a[rand_a], b[rand_b1], a[rand_a1], b[rand_b2], 'попал в 5. начало с глас');
	} else;

*/

//'----------------------END----------------------------------------------









/*else (RezgetRandomAB == 0) {
	//console.log(a[rand_a], b[rand_b], a[rand_a1], b[rand_b1], a[rand_a2], 'попал');
	if (getRandomNum(3, 5) == 3) {
		console.log(b[rand_b], a[rand_a], b[rand_b1], 'попал в 3. начало с глас');
	}
	if (getRandomNum(3, 5) == 4) {
		console.log(b[rand_b], a[rand_a], b[rand_b1], b[rand_b1], 'попал в 4. начало с глас');
	}
	if (getRandomNum(3, 5) == 5) {
		console.log(b[rand_b], a[rand_a], b[rand_b1], a[rand_a1], b[rand_b2], 'попал в 5. начало с глас');
	}
	
	(console.log(b[rand_b], a[rand_a], b[rand_b1], a[rand_a1], b[rand_b2])) */
	
	
	
	
	
	


		






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
console.log(a);
 */


// 2. Дана строка и символ. Удвоить каждое вхождение 
//заданного символа в строку.


/* let str1 = "apple"; 
let str2 = prompt('Введите любую букву');
let regexp = new RegExp(str2, "ig");
console.log('было', str1 + ',', 'стало', str1.replace(regexp, str2+str2));
  */
 


// 3. Проверить что введенный пароль удовлетворяет 
//следующим условиям сложности:
//ok- длинна от 9 символов;
//ok- содержит обязательно английские буквы верхнего и нижнего регистра;
//- содержит более двух цифр;
//- содержит обязательно один из неалфавитных символов (например, !, $, #, %).



 /* let pass = prompt(`Введите пароль с учетом обязательного содержания: 
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
 
console.log(error); */





//4** Нечёткий поиск:
//Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
//Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
//перепутанной буквой, например: "Срида". Написать программу, которая 
//позволяет с использованием регулярного выражения найти в строке-словаре 
//введённое пользователем слово (не смотря на одну ошибку в слове) и 
//вывести исправленное слово пользователю, например: "Среда".  */

/* let str = 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье';
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
} */