var a =10;
let b=20;
const c=30;
d=40;


console.log(typeof(d));


//data type

let num=100;
let str="hello world";
let und;
let nul=null;
let bool=true;

let a=20;
let e=50;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);
console.log(x/y);

function add(p,q){
    return p+q;

}
console.log(add(10,20));

//arrow function

 const multiply=(p,q)=>p*q;
 console.log("arrow function", multiply(5,5));
//array
 let arr=[10,20,30,40];
 console.log(arr[0]);
 arr.push(20);
 arr.pop()
 console.log(arr);

 //object

 let student={
    name:"vikas",
    age:20,
    course:"b.tech"
 };
   

 let today =new Date();


 console.time("test");
 for (let i=0; i<10000;i++){}
console.timeEnd("test");

console.count("a")
console.count("a")
console.count("a")
console.count("b")
console.count("a")
console.count("c")
console.count("a")   

//table

let students={name:"vikas", age:"25",course:"cse"};
console.table(students);


//mathn functionn


console.log(Math.random());

//string
text="hellow world";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("java"));


//type conversionn

let strnum="123";
let convert=Number(strnum);
console.log(convert);



//Nan

console.log(isNaN("abc"));
console.log(isNaN(123));

//dom manipulation


setTimeout(()=>{
    console.log("executed after 2 second");

},2000);

//try catch


try{
    let result=x/0;
    console.log(result);

}catch(error){
    console.log("error");
}










