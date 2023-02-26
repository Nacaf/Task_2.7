//Task 2.7
//1
/*function  logGreeting(name){
    console.log(name + " is a JS developer");
}
logGreeting("Najafgulu");*/

//2
/*function activeUser (name) {
    console.log(`"${name} is active now"`);
}
activeUser("Najafgulu");
activeUser("Javad");
activeUser("Ali");*/

//3
/*function maxNumber (x,y,z){
    console.log(Math.max(x,y,z));
};
maxNumber(5,25,15);
maxNumber(50,100,150);
maxNumber(1000,2000,3000);*/

//4
/*
// 1 usd = 75 rub
function sumAllOfAccounts() {
  let usd = +prompt("Введите счет в долларах");
  let rub = +prompt("Введите счет в рублях");
  let sumAll = 75 * usd + rub;
  console.log("Сумма счета в рублях = " + sumAll);
}
sumAllOfAccounts();
*/

//5
function numberToText() {
  let num = +prompt("1-dən 99-a qədər olan ədəd daxil edin");
  let oneToTen = ['bir','iki','uc','dord', 'bes','alti','yeddi','sekkiz','doqquz','on'];
  let elevenToNineteen = ['eleven','twelve','thirteen','fourteen','fiveteen','sixteen','seventeen','eightteen','nineteen'];
  let tenth = ['iyirmi','otuz','qirx','elli', 'altmis','yetmis','seksen','dogsan'];
  
  if (num >= 1 && num <= 10) {
    if(num == 1) {
        console.log(oneToTen[0]);
    } else if (num==2){
        console.log(oneToTen[1]);
    } else if (num==3){
        console.log(oneToTen[2]);
    } else if (num==4){
        console.log(oneToTen[3]);
    } else if (num==5){
        console.log(oneToTen[4]);
    } else if (num==6){
        console.log(oneToTen[5]);
    } else if (num==7){
        console.log(oneToTen[6]);
    } else if (num==8){
        console.log(oneToTen[7]);
    } else if (num==9){
        console.log(oneToTen[8]);
    } else if (num==10){
        console.log(oneToTen[9]);
    } 
    
  } else if (num >= 11 && num <= 19) {
    if(num == 11) {
        console.log(oneToTen[9] + " " +oneToTen[0]);
    } else if (num==12){
        console.log(oneToTen[9] + " " +oneToTen[1]);
    } else if (num==13){
        console.log(oneToTen[9] + " " +oneToTen[2]);
    } else if (num==14){
        console.log(oneToTen[9] + " " +oneToTen[3]);
    } else if (num==15){
        console.log(oneToTen[9] + " " +oneToTen[4]);
    } else if (num==16){
        console.log(oneToTen[9] + " " +oneToTen[5]);
    } else if (num==17){
        console.log(oneToTen[9] + " " +oneToTen[6]);
    } else if (num==18){
        console.log(oneToTen[9] + " " +oneToTen[7]);
    } else if (num==19){
        console.log(oneToTen[9] + " " +oneToTen[8]);
    }
  } else if (num % 10 == 0) {
    if(num == 20) {
        console.log(tenth[0]);
    } else if (num==30){
        console.log(tenth[1]);
    } else if (num==40){
        console.log(tenth[2]);
    } else if (num==50){
        console.log(tenth[3]);
    } else if (num==60){
        console.log(tenth[4]);
    } else if (num==70){
        console.log(tenth[5]);
    } else if (num==80){
        console.log(tenth[6]);
    } else if (num==90){
        console.log(tenth[7]);
    }
  } else {
     console.log("21-29, 31-39, 41-49, 51-59, 61-69, 71-79, 81-89, 91-99 araliqlarinda olan ədəədir");
  }
}
numberToText(); 

//Task 2.7 BONUS


