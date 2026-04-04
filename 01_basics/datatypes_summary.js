// 1.Primitive 
/* 7 types (all theses types are call-by value)
String,Number,Boolean,null,undefined,Symbol,BigInt(for scientific values)
//2.Reference(Non -Primitive)
Array,Objects,Functions
**JavaScript is a dynamically typed language
*/
const id =Symbol('123')
const anotherid=Symbol('123')

console.log(id==anotherid)
const bigNumber=59756278778n //=>bigInt
//Array ,Objects,functions
//Arrays
const heros=["shaktiman","naagraj","doga"]
const diff=null;
//objects
let myObj={
    name:"Lavanya",
    age:22,

}
//functions

const myfunction=function(){
    console.log("Hello world");

}

//function to determine the dataype
console.log(typeof myfunction)//=>function
console.log(typeof diff)//=>'object'
/*Return type of variables in JavaScript
=======================
 Primitive Datatypes
---------------------------------------------------
       Number =>     number
       String  =>        string
       Boolean  =>    boolean
       null  =>             object
       undefined  =>  undefined
       Symbol  =>      symbol
       BigInt  =>         bigint
========================
 Non-primitive Datatypes
---------------------------------------------
       Arrays  =>       object
       Function  =>  function
       Object  =>       object*/  

       //++++++++++++++++++++++++++++++++++++++++++++++++++
       //Types of Memory 1.Stack Memory 2.Heap Memory
       /* Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original. */ 
/*let myyoutubename ="js.com"
let anothername= myyoutubename
anothername="chaijs.com"
console.log(anothername)
console.log(myyoutubename)
//so value is not given copy is given */

let user = {
    email: "lavanyajoshi.com",
    upi: "user@ybl"
}

let usertwo = user;
usertwo.email = "youtb.com";

console.log(user);
console.log(usertwo);
//In heap they get the same reference(make update in original value )