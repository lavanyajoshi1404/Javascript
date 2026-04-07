//const tinderUser= new Object()//singleton object
const tinderUser={}//non-singleton object
tinderUser.id="123abc"
tinderUser.name="Sammmy"
tinderUser.isLoggedIn=false

///console.log(tinderUser)

const regularUser={
    email:"joshicheetah.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choundary"

        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

//****Combining of objects */
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// 1 method:const obj3={obj1,obj2}
// Method 2
//const obj3=Object.assign({},obj1,obj2)//(target,source)
//console.log(obj3)

//Method 3
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))