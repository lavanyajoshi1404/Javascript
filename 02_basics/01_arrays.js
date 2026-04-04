/*arrays-The Array object, as with arrays in other programming languages, 
 enables storing a collection of multiple items under a single variable name,
 and has members for performing common array operations.*/
//array has sqaure brackets and elements can be of different types
//javascript arrays are resizeable and can contain a mix of datatypes
//Array elements cannot be accesed using arbitary strings as indexes,but must be accsed
//using nonnegative integers as indexes
//ways to declare arrays
const myArr=[9,8,7,6,5,4]
const myheroes=["shakti","batman","nagraj"]
console.log(myArr[2])
// Array Methods
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(0)
myArr.shift() //shift array value and add value at 0th position
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
const newArr=myArr.join()//it adds array elements but the type is string
console.log(myArr)
console.log(typeof newArr)
//slice ,splice
//splice manipulate original array and sice dont
console.log("A",myArr)

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)
const myn2=myArr.splice(1,3)

console.log(myn2)