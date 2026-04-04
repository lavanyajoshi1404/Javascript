const score=400
 
const balance = new Number(100);//explicitly defined it is number
console.log(balance)
//method to convert number to string
console.log(balance.toString())
//when we convert it to string we get string additional properties
// toFixed property

console.log(balance.toFixed(2))
const otherName =23.4968
//Precision Property
console.log(otherName.toPrecision(2))
//toLocaleString Method-add commas according US standards and en-IN is use for indian standards
const hundreds=100000
console.log(hundreds.toLocaleString())
//********************MATHS*********************//
//In javascript maths is an object which has many properties
console.log(Math)
//to make positive abs is used
console.log(Math.abs(-4))
//round to round the digits
console.log(Math.round(4.86))
//for top values ceil method is used and for bottom floor is used
console.log(Math.ceil(4.2))
console.log(Math.floor(4.45))
console.log(Math.min(4,2,6,8))//to find min and max values
console.log(Math.max(4,9,7,8))
// Math.random gives always values between 0 and 1
console.log(Math.random())
//formula for math.random
const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)