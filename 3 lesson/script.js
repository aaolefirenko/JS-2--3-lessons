
  /*     -------------lesson 2-------------- */

/* ГОТОВО
Задача 1. Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить 
в один массив C добавив 
массив B в конец(в начало) A. 
 */
  
  
/* let AAA = [12, 4, 3, 10, 1, 20];
let BBB = [-3, -7, -100, -33];

console.log(AAA, "это - А");
console.log(BBB, "это - В");
let lastArr = AAA.pop();
 */
    //метод spread
/* let CCC1 = [...AAA, ...BBB];
console.log(CCC1, "В в конец А");

let CCC2 = [...BBB, ...AAA];
console.log(CCC2, "А в конец В"); */
  
  
   //метод push   - В в конец А
 
  /*  AAA.push(...BBB);
  
  let CCC3 = AAA;
  console.log(CCC3, "В в конец А");
     */
  
 /*  //метод push   - А в конец В
  BBB.push(...AAA);
  let CCC4 = BBB;
  console.log(CCC4, "А в конец В");
   */
  
  
  
  
  // этот урок пройду тогда, когда придет время!!!!




/* 
// Задача 2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, 
  null, null, null ]
Необходимо сформировать и вывести (document.write) 
игровое поле состоящее из квадратов для крестиков-ноликов  
в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, 
  null ] на поле 2-а крестика, и 1-н нолик. 
  
  

   let setka = [ 1, 0, null, 1, null, 0, 
    null, null, null];


    //let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
let game = document.getElementsByClassName('game');
//let str = ' ';
let i = " ";
let n = " ";
for (let i = 0; i<= setka.length; i++) {
  if (setka[i] == 1) {
    n = "Xjhkjhk";
  } 
  else if (setka[i] == 0) {
    n = "0jhkjhk";
  } 
  else{
    n = null;
  } 
    //if (setka[i]!==undefined) str +=i+' - '+setka[i]+'<br>';
    console.log(n);
}

game.innerHTML = n;
 

 */









  
/* 
  //   Задача 3. ГОТОВО
  //Задан массив  - [12,4,3,10,1,20]. 
  //Удалить из него наименьшее и наибольшее значение. 
  
let arrD = [12,4,3,10,1,20];
  console.log(arrD, "- данные массива ");
  
 let min = arrD[0], max = arrD[0], len = arrD.length;

for (let i = 1; i < len; i++) {
  if (arrD[i] > max) {
    max = arrD[i];
  }
  else if (arrD[i] < min) {
    min = arrD[i];
  }

}  
  
console.log(min, "-min", max, "-max");


let tmpmin = arrD.indexOf(min);
if(tmpmin >= min) {
  arrD.splice(tmpmin,1);
}
let tmpmax = arrD.indexOf(max);
if(tmpmin >= tmpmax) {
  arrD.splice(tmpmin,1);
}
console.log(arrD, "удалены"+ " " + (min) + " " + "и" + " " + (max));


 */

/* 

    //!!!!!!!  адача 4  ГОТОВО
 //   . В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
//Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
//с номерами от 000001 до 999999. 
//«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
//сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
//Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
//теперь раздумывает, как много сувениров потребуется. 
//С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. 



let x = 0;

 for (let i1 = 1; i1 <= 999999; i1++) {
  let tmp = i1.toString().length;
  if (tmp == 1) {
    i1 = "00000" + i1;
      }
      else if (tmp == 2) {
        i1 = "0000" + i1;
      }
      else if (tmp == 3) {
        i1 = "000" + i1;
      }
      else if (tmp == 4) {
        i1 = "00" + i1;
      }
      else if (tmp == 5) {
        i1 = "0" + i1;
      }
      else {};

     let summ61 = "";
     let summ62 = "";
      summ61 = Number(i1[0]) + Number(i1[1]) + Number(i1[2]);
      summ62 = Number(i1[3]) + Number(i1[4]) + Number(i1[5]);
        if(summ61 == summ62) {
          x++;
        console.log(i1, summ61, summ62, (i1[0]) + (i1[1]) + (i1[2]) + (i1[3]) + (i1[4]) + (i1[5]), x);
        }}
 
    */







