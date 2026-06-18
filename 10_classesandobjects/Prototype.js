/*
Prototype is a design pattern that allows you to create new objects based on existing ones, serving as a blueprint for creating similar objects. 
It enables you to clone existing objects and modify them without altering the original object. This pattern is particularly useful when the cost of creating a new object is high or when you want to avoid the overhead of creating a new instance from scratch. 
it is a way to create new objects based on existing ones, allowing for the reuse of code and the creation of complex object hierarchies.
js uses prototypal inheritance, which means that objects can inherit properties and methods from other objects.
protytye interview questions and answers:
what is prototype in javascript?
In JavaScript, a prototype is an object that is associated with every function and object by default. It serves as a blueprint for creating new objects and allows for the inheritance of properties and methods. When a new object is created using a constructor function, it inherits properties and methods from the constructor's prototype. This enables code reuse and the creation of complex object hierarchies.
what is the difference between prototype and __proto__ in javascript?
In JavaScript, prototype and __proto__ are related concepts but serve different purposes.
*/ 

let myName="Lavanya   "
console.log(myName.trueLength)


let myHeros=["thor","spiderman","ironman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    ironman:"suit",

    getSpiermanPower:function(){
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength() 
//prototype inheritance is  like kisi aur ke properties ko access karna without copying them, it is like a reference to the original object.
