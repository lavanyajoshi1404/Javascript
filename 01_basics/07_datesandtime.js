// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) 
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Sat Apr 04 2026 08:15:17 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()) //4/4/2026, 8:15:17 AM
console.log(myDate.toLocaleDateString()) //4/4/2026
console.log(myDate.toLocaleTimeString()) //8:15:17 AM

console.log(myDate.toDateString())// Sat Apr 04 2026
console.log(myDate.toTimeString()) //08:15:17 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString()) //2026-04-04T08:15:17.426Z
console.log(myDate.toJSON()) //2026-04-04T08:15:17.426Z
// create new date
//Months start from 0 in js
let myCreatedDate =new Date(2026,0,26)
console.log(myCreatedDate.toDateString())
let myCreatedDatetwo =new Date(2026,0,26,5,3)
console.log(myCreatedDatetwo.toLocaleString())
let mydatethree= new Date("2026-01-14")//01-14-2026 also can be written as
console.log(mydatethree.toLocaleDateString())
/********TimeStamp************/
let myTimeStamp=Date.now()
console.log(myTimeStamp)//this are miliseconds
console.log(mydatethree.getTime())//this also gives miliseconds
//do comparison always in milisecs
//for getting it in secs
console.log(Math.floor(Date.now()/1000))
//other methods
let newDate =new Date();
console.log(newDate.getMonth())
console.log(newDate.getHours())
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday:"long"
})