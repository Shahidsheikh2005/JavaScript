// console="rahul";
// console.log(console);
// Console="rahul";
// console.log(Console);
// var age=29;
// var age=15;
// var age=86;
// console.log(age);


// const age=29;
// const age=15;
// const age=86;
// console.log(age);
//---------------------------------------------------------------

//Variabel's

//  {let a="hello";
//  console.log(a)
// }
 
 
//  {const a="hello";
//  console.log(a)
//  }
//-----------------------------------------------------------

// Data Type's

// let age=45;

// let fname="rahul";

//let isfollow=true;

//let price=100.99;

//Undefined

//let x=undefined;

//Null

//let x=null;

//Big Int

//let x= BigInt("123");
// console.log(x)

//Symbol

// let y = Symbol("hello");
// console.log(y)


//String

// let fname="rahul";
// let lname="xyz";
// console.log(fname);
// console.log(lname);

//Number

// let age=24;
// console.log(age);
// let rollNo=256;
// console.log(rollNo);

//Float

// let per=99.9;
// console.log(per);
// let weight=56.8;
// console.log(weight);

//Boolean 

// let follow=true;
// console.log(follow);
// let unfollow=false;
// console.log(unfollow);

// let x=undefined;
// console.log(x);
// let y=null;
// console.log(y);
//----------------------------------------------------------------------------------------------------------

//Object

// const student={
//     fname:"rahul",
//     age:20,
//     marks:230,
//     cgpa:78.99,
//     ispass:true
// }
// student["fname"]="rohit";
// console.log(student.fname)

//----------------------------------------------------------------------------------------------------------------------

//Practice Question

// const pen={
//     name:'Parker Classic Gold Ball Pen',
//     rating:4.50,
//     offer:true,
//     price:455
// }
// console.log(pen);

// const std={
//     fname:'shahid',
//     lname:'sheikh',
//     roll_no:456,
//     pass:true,
//     per:70.67,
// }
// console.log(std)

//---------------------------------------------------------------------------------------------------------


//Arithmatic Operators

// let a=5;
// let b=2;
// let c=a+b;
// console.log(c);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);

//-----------------------------------------------------------------------------------------------------------

//Modules Operators

// console.log("a%b=",a%b);
// console.log("a**b",a**b);

//------------------------------------------------------------------------------------------------------------------

//Unary Operator

// let a=5;
// let b=2;
// console.log("a=",a);
// console.log("b=",b);
// // console.log("a++=",a++);//Post Increment
// // console.log(a)
// //console.log("++a=",++a);//Pre Increment
// console.log("a--",a--);//Post Decrement
// //console.log("--a",--a);//Pre Decrement//
// console.log(a);

//--------------------------------------------------------------------------------------------------

//Assignment Operators

// let a=5;
// console.log(a+=4)
// console.log(a-=4)
// console.log(a*=4)
// console.log(a/=4)

//--------------------------------------------------------------------------------------------------------------

//Comparison operators

// let a=5;
//let b=6;
// console.log(a==4)
// console.log(a<=4)
// console.log(a>=4)
// console.log(a===b)

//---------------------------------------------------------------------------------------------------

//Logical Operator

//AND

// let a=6;
// let b=5;
// let cond1=a>b;
// let cond2= a===6;
// console.log("Cond1 && cond2",cond1 && cond2)

//OR 

// let a=6;
// let b=5;
// let cond1=a>b;
// let cond2= a===6;
// console.log("Cond1 || cond2",cond1 || cond2)

//NOT 

// let a=6;
// let b=5;
// let cond1=a<b;
// let cond2= a===6;
// console.log("!(a<b)=",!(a<b));
// console.log("!(a===b)=",!(a===b));

// let a=15;
// let b=10;
// let c=40;
// console.log("check if(a+b)>c",(a+b)>c)


//Condition check 
//Take three numbers :a=15,b=20,c=40.
//------------------------------------------------------------------------------------------------------------------
//Home Work

//  1.check if(a+b)>c amd print the result ;

// let a=5;
// let b=7;
// let c=16;
// let d=(a+b)>c;
// if((a+b)>c){
//     console.log(d +" is valid")
// }
// //  2.if true,check if the sum (a+b)is even using logical operators;
// else if((a+b)%2 ===0){
//     console.log((a+b) + "its even and valid")
// }
// else{
//     console.log("its not valid")
// }
//-------------------------------------------------------------------------------------------

//Conditional statement

// let mode="pink";
// let color;
// if(mode==="dark"){
//     color="Black";
// }if(mode==="light"){
//     color="White"
// }else if(mode==="green"){
//     color="green"
// }else if(mode==="pink"){
//     color="pink"
// }
// else{
//     color="Blue";
// }
// console.log(color)


//Another Ex.

// let age=17;
// if(age>=18){
//     console.log("You can vote bro")
// }else{
//     console.log("You can not vote")
// }

//Else if

// let age=45;
// if(age<=18){
//     console.log("junior")
// }else if(age>60){
//     console.log("senior")
// }else{
//     console.log("middle")
// }

//Ex

// let num=10;
// if(num%2 ===0){
//     console.log(num,"even number");
// }else{
//     console.log(num,"Is odd");
// }

//Ex
//2. Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, c
// 50-59, D
// 0-49, F

// let score= 78;
// let grade;
// if(score>=90 && score>=100){
//     grade="A"
// }
// if(score>=70 && score>=89){
//     grade="B"
// }
// if(score>=60 && score>=69){
//     grade="C"
// }
// if(score>=50 && score>=59){
//     grade="D"
// }
// console.log(grade)
//--------------------------------------------------------------------------------------------------------
//Home Work

//write a program that determines wheather a given number is positive or nigative.

// let num= -4;
// if (num > 0) {
//     console.log(num , " is Positive.");
// } else if (num < 0) {
//     console.log(num ," is Negative.");
// } else {
//     console.log(num , " is Zero.");
// }

//write a program that determine21`s if a year is leap year or not.
// let mon=27
// if (mon < 28) {
//     console.log(mon + " is leap year.");
// } else if (mon > 28) {
//     console.log(mon + " is not leap year.");
// } else {
//     console.log(mon + " is Zero.");
// }
//---------------------------------------------------------------------------------------------------------------

//Ternary opeartor

// let age=25;
// let result=age>18?"adult":"not adult";
// console.log(result);

//GET user to input a number using prompt("enter a number")check if a number is mutiple of five or not.

// let num=prompt("enter a number");
// if(num%5 ===0){
//     console.log(num,"multiple of five");
// }else{
//     console.log(num,"not divisible")
// }

//write a code which can give greats to a students accordig to there scores;
// 90-100,a 70 -89,b 60-69,c 50-59,d 

// let score=prompt("Enter score");
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
// }
// if(score>=70 && score<=89){
//     grade="B";
// }
// if(score>=60 && score<=69){
//     grade="C";
// }
// if(score>=50 && score<=59){
//     grade="D";
// }
// if(score>=0 && score<=49){
//     grade="fail";
// }
// console.log(grade)

//Loops

// for(let count = 1; count <= 4; count++){
//     console.log("rahul")
// }

// let sum=0;
// let n=7;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum)


//While loop

// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

//1.print the numbers from 0-15.
// for(let i = 1; i < 5; i++){
//     console.log("i =",i)
// }

//2.print the odd numbers from 7-31.
// for (let num = 7; num <= 31; num += 2) {
//     console.log(num); // Print the odd number
// }

//3.print the even number from 10-20.
// let num=10;
// while(num <=20){
//     console.log(num);
//     num +=2;
// }


//while

//1.print the numbers from 1-10 usin while loop in js.
// let i = 1;
// while(i<=10){
//     console.log("i =",i)
//     i++;
// }
//2.claculate factorial using while loop.

//3.reversing numbers with while loop.

//do while 
// let i = 1;
// do{
//     console.log("i =",i);
//     i++;
// }while(i <= 10)

//for of loop

// let str="rahul";
// for(let i of str){
//     console.log("i =",i)
// }
// let std={
//     name:"shahid",
//     age:20,
//     cgpa:5.7,
//     isPass:true,
// };
// for(let i in std){
//     console.log("i =", std[i])
// }
//print all even num from 0-100.
//----------------------------------------------------------------------------------------------------------

//Array 

// let marks=[97,83,54,38];
// console.log(marks);
// console.log(marks.length);

//Looping Array

// let heros=["ironman","hulk","batman","thor"];
// for(let idx = 0 ; idx <= heros.length ; idx++){
//     console.log(heros[idx])
// }

//Another Ex

// let heros=["ironman","hulk","batman","thor"];
// for(let hero of heros){
//     console.log(heros)
// }

//for a given array with marks of students [85,97,44,37,76,60]find the average marks of entire class.
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum/ marks.length;
//     console.log(`avg marks of class= ${avg}`);


// //for a given array with prices of five items.
// // 250,645,300,900,50. all items have an offer of 10% off change the array to store final price after applying offer;
// let items =[250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i] - offer ;
//     console.log(`value after offer is ${items[i]}`);
//     i++;
// }

//Arrays Method

//Push 

// let vagiees=["potato","tomato","onion"];
// vagiees.push("chips","paneer");
// console.log(vagiees);


//POP

// let vagiees=["potato","tomato","onion"];
// // vagiees.pop();
// let deletedVaggie=vagiees.pop();
// console.log(vagiees);
// console.log("deleted",deletedVaggie);

//ToStrings

// let vagiees=["potato","tomato","onion"];
// console.log(vagiees);
// console.log(vagiees.toString());

//Concat

//This joins multiple at in one array
// let marvelHeros  = ["thor","spiderman","ironmain"];
// let dcheros = ["superman","batman"];
// let indian = ["krish","shaktiman"];

// let heros = marvelHeros.concat(dcheros,indian );
// console.log(heros);

//Unshift 

//This add item in array at the starting 
// let marvelHeros  = ["thor","spiderman","ironmain"];
// marvelHeros.unshift("antman");
// console.log(marvelHeros);
 
//Shift
//This delete the item from starting
// let marvelHeros  = ["thor","spiderman","ironmain"];
// let val = marvelHeros.shift();
// console.log("deleted",val);

//Slice
//This method gives us small peice of arraty
// let marvelHeros  = ["thor","spiderman","ironmain"];
// console.log(marvelHeros);

// console.log(marvelHeros.slice());

//Splice
//chnage orignal array (add,remove,replace)

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);

//Element add
// arr.splice(2,0,101);

//Delet 
// arr.splice(3,1);

//replace
// arr.splice(3,1,101);

//ex
// let companies = ["micro-soft","google","ibm","netflix"];
//1
// compinies.shift();
//2
// compinies.splice(2,1,"ola");
//3
// companies.push("amazon")
// console.log(companies);

//----------------------------------------------------------------------------------------------------
//String

//Templee 
// let obj={
//     item:"pen",
//     price:10
// }
// console.log(`the cost of`,obj.item,"the price of",obj.price,"rupees");
// console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
// console.log(output);

//escap

// console.log("rahul \n kumar");
// console.log("rahul \t kumar");

//String method in js

//toUppercase

//str.toUppercase
// let str="rahul";
// str.toUpperCase();
// console.log(str)

//toLowercase

// let str="RAHUL";
// let newstr=str.toLowerCase();
// console.log(newstr)

//Trim

// let str="    Rahul   of Kumar    ";
// console.log(str.trim());

//----------------------------------------------------------------------------------
//Function

// function Myfunction(msg){
//     console.log("welcome too js");
//     console.log("learn js");
// }
// Myfunction();


// function Myfunction(msg){
//     console.log(msg);
// }
// Myfunction("hello");

//Sum of two num

// function sum(x,y){
//     console.log(x+y);
// }

// function sum(x,y){
//     s = x + y;
//     return s;
// }
// let val = sum(1,2);
// console.log(val)


//Arrow function

// const arrowSum=(a,b)=>{
//     console.log(a + b)
// }

// const arrowSum=(a,b)=>{
//     console.log(a / b)
// }



//create a funcion using the function keyword that take a string as an argument .and returns the number of vovels in a strings .


// function countvowel(str){
//     let count= 0;
//  for( const char of str){
//     if(char==="a" || char==="e" ||char==="i" || char==="o" || char==="u"){
//     count++;
//         }
//     }
//     console.log(count);
// }

//For each Loop

// let arr=[1,2,3,4,5,6,7,];
// arr.forEach((val)=>{
//     console.log(val);
// })