function multiplyBy5(num){
   
    return num*5;
}

multiplyBy5.power = 2; 

console.log(multiplyBy5(10)); //50
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //' [Function: Function]


function createuser(username ,score){
       this.username=username;//this is a reference to the object that is being created by the constructor function
       this.score=score;//this is a reference to the object that is being created by the constructor function
}

createuser.prototype.increment=function(){
   this.score++;
}

createuser.prototype.login=function(){
    console.log(`${this.username} has logged in`);
    }

const user1= new createuser("hiteshh",8);
const user2= new createuser("javascript",10);

console.log(user1);
console.log(user2);

user1.increment();
console.log(user1.score); //9

user1.login(); //hiteshh has logged in
user2.login(); //javascript has logged in

//new keyword creates a new object and sets the value of this to that new object.
//  It also sets the prototype of the new object to the constructor function's prototype property.
//  It also returns the new object from the constructor function.
//  In the above code, we have created a constructor function called createuser which takes in two parameters username and score. 
// We have also added two methods to the prototype of the createuser constructor function, increment and login. 
// We then created two instances of the createuser constructor function, user1 and user2, and called the increment and login methods on them.
//  The new keyword is used to create a new instance of an object that has the properties and methods defined in the constructor function.
/*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/ 
