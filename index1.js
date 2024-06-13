// function add(...a){//seprator opr.
//     console.log(a)
// }
// add(10,"rashika",20)

// function add(b,...a){//seprator opr.
//     console.log(b)
// }
// add(10,"rashika",20)

// (                                    //ANONYMOS Function
//     ()=>{
//         console.log("hello")
//     }
// )()

// let str="hello is my name";
// console.log(str[3])
// console.log(str.length)

// const obj ={"key":"val","first name":"rajat"}
// console.log(obj.key)
// console.log(obj["first name"])

// arrow function
// const result = (a,b)=>{
//     return(b);
// }
// console.log(result(10,29))

// let num ="120"
// console.log( typeof  parseInt(num))   //parse used to change datatype

// const obj ={
//     "key":"value","name":"rashi", age:function(){
//         return"56";
//     }
// }
// console.log(obj["key"])
// console.log(obj["name"])
// console.log(obj.age());

// const obj=["rashi",20,{"name":"rajat","surname":"singh"},"one",[1,"you",2]]
// console.log(obj[0])
// console.log(obj[2]["surname"])
// console.log(obj[4][1])
// console.log(obj[2])

// const name= 'it"s hello'
// console.log(name);
// let ischeck =true
// console.log(ischeck);

// let person = {"key":"val",fun:function(){
// return "obj"}
// }
// console.log(person.key);
// console.log(person["key"]);
// console.log(person.fun());

// function add(num){
//     // console.log("my pocket money is "+(num+num)+ " in current time");
//     console.log(`my pocket money is ${num+num} in current time` );
// }
// add(100)

//  let age=16
//  if(age>=18){
//     console.log("can vote");
//  }
//  else{
//     console.log("can not vote");
//  }

// let age =15
// if(age>18){
//     console.log("greater than 18");
// }
// else if(age == 18){
//     console.log("equal tp 18");
// }
// else{
//     console.log("less than 18");
// }

// let str = "thr";
// switch(str){
//     case"mon":
//     console.log("today is mon");
//     break;
//     case"tue":
//     console.log("today is tue");
//     break;
//     case"wed":
//     console.log("today is wed");
//     break;
//     default:
//         console.log("invalid ");
// }

// let i=0;
// while(i<5){                              //loops
//     console.log("hello");
//     i++;
// }

// let i=5;                                 //while loop
// while(i>0){
//     console.log("hello");
//     i-- ;
// }

// let i=0;
// while(i<=10){
//     console.log(i*2);
//     i++;
// }

// let i=5;
// while(i<=50){
//     console.log(i);
//     i=i+5;
// }

// let i=0;
// do{
//     console.log(i);                          //do while
//     i++;
// }
// while (i<5)

// let i=0;
// do{
//     console.log(i*2);
//     i++;
// }
// while (i<=10)

// let i;
// for(i=0;i<5;i++){
//     console.log(i + " "+"hello rashi");
// }

// let i;
// for(i=0;i<=10;i++){                              //for loop
//     console.log(`2*${i} = ${2*i}`);
// }

let date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());                //month starts with 0