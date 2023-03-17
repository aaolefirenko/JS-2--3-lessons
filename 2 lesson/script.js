

  /*     -------------lesson 2-------------- */

/*     задача 1*/
/*
  var n = prompt ("Введите номер месяца от 1-12");
  console.log(n);
  if (n == 2 || n == 1 || n == 12) {
      alert ((n)+" - зима");
    }else if (n >= 3 && n <= 5) {
      alert ((n)+" - весна");
    }else if (n >= 6 && n <= 8) {
      alert ((n)+" - лето");
    } else if (n >= 9 && n <= 11) {
    alert ((n)+" - осень");
    } else {
    alert ("Введенные данные некорректны!")
    }
*/    









    /*   задача 2

    dm = 1;
    km = 2;
    m = 3;
    mm = 4;
    sm = 5;
    


var x = prompt ("Задай единицу измерения цифрой от 1-5, где: 1 - дм, 2 - км, 3 - м, 4 - мм, 5 - см");
var l = prompt ("Задай величину");


    if (x = 1) {
      //alert ((l)*0,1);
      var rez = l*0.1;
      alert ((rez.toFixed(5))+ "  м");
      console.log((rez.toFixed(5))+ " м"); 
    }
    if (x = 2) {
      //alert ((l)*1000);
      var rez = l*1000;
      alert ((rez.toFixed(5))+ " м");
      console.log((rez.toFixed(5)) + " м");
    }
    if (x = 3) {
      //alert (l);
      var rez = l;
      alert ((rez)+ " м");
      console.log((rez) + " м");
    }
    if (x = 4) {
      //alert ((l)*0,001);
      var rez = l*0.001;
      alert ((rez.toFixed(5))+ " м");
      console.log((rez.toFixed(5)) + " м");
    }
    if (x = 5) {
      //alert ((l)*0,01);
      var rez = l*0.01;
      alert ((rez.toFixed(5))+ " м");
      console.log((rez.toFixed(5)) + " м");
    }
    else {
      alert ("Введенные данные некорректны!")
    }


      //что насчет else if ????? 

    */





          //    задача 3

    /*
    var numXXX = prompt ("Задай значение от '-999' до '999'");
    var text1 = 'нулевое';
    var text2 = 'число';
    var text3 = 'положительное';
    var text4 = 'отрицательное';
    var text5 = 'однозначное';
    var text6 = 'двузначное';
    var text7 = 'трехзначное';

    if (numXXX == 0) {
      console.log((text1) + (text2));
    }
    if (numXXX >= 10 && numXXX < 100) {
      console.log((text3) + ' ' + (text6) + ' ' + (text2));
    }
    if (numXXX > 0 && numXXX < 10) {
      console.log((text3) + ' ' + (text5) + ' ' + (text2));
    }
    if (numXXX >= 100 && numXXX < 1000) {
      console.log((text3) + ' ' + (text7) + ' ' + (text2));
    }
    if (numXXX <= -10 && numXXX > -100) {
      console.log((text4) + ' ' + (text6) + ' ' + (text2));
    }
    if (numXXX < 0 && numXXX > -10) {
      console.log((text4) + ' ' + (text5) + ' ' + (text2));
    }
    if (numXXX <= -100 && numXXX > -1000) {
      console.log((text4) + ' ' + (text7) + ' ' + (text2));
    }
    else {
      alert ("Введенные данные некорректны!")
    }

    */









    //задача 4 

/*
let n = 20;
let a = 3;
let b = 5;
for (let i1 = 1; i1 <= n; i1++) {  
  if (i1 % a == 0) {
    console.log( i1 + ' Three' );
  }
}
for (let i2 = 1; i2 <= n; i2++) {
  if (i2 % b == 0 && i2 % a > 0) {
  console.log( i2 + ' Five, not three' );
  }
}
*/







//задача 5
//год, номер которого кратен 400, — високосный;
//остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
//остальные годы, номер которых кратен 4, — високосные[5];
//все остальные годы — невисокосные.

// или 
//Число должно делиться на 4 без остатка, кроме тех чисел, 
//которые оканчиваются на два 00. Такие числа должны 
//делиться на 400 без остатка целым числом, а не 
//дробью. 1900:400=4,75

/*
let a = prompt("Введите год");
if (a % 100 == 0 && a % 400 == 0 ) {
  console.log ((a) + " - высокосный");
} 
else if (a % 100 > 0 && a % 4 == 0 ) {
  console.log ((a) + " - тоже високосный");
}
else {
  console.log (" невисокосный ");
}

*/




/* 
//задача 6



let tarelka = 5;
let milo = 13;


  for (let i1 = tarelka, i2 = milo; i1 >= 0 , i2 >= 0; i2=i2-0.5, i1--) {
    console.log('Тарелка, шт.:' + ' ' + (i1) + ' ' + 'Мыло, шт.:' + ' ' +  (i2));
      if (i2 == 0){
        // console.log('Тарелок осталос' + ', шт.:' + (i1) + '. ' + 'Мыло закончилос!');
      }else if(i1 == 0){
        console.log('Тарелки закончилис!' + ' ' + 'Мыло осталос, шт.:' + ' ' +  (i2));
      }
  
  }

 */

 