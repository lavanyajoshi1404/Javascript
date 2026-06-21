//call is a method of function object which is used to invoke a function with a given this value and arguments provided individually.
//The call() method allows you to call a function with a specified this value and arguments provided one by one.
//relation between call and prototype is that call method can be used to borrow methods from other objects and use them in the context of the current object. This is possible because the call method allows you to specify the this value for the function being called, which can be set to any object, including an object that has a different prototype than the current object.
//relation between call,bind and apply is that all three methods are used to invoke functions with a specified this value, but they differ in how they handle arguments. The call() method takes arguments individually, the apply() method takes arguments as an array, and the bind() method returns a new function with a specified this value and optional arguments.
//The call() method is used to invoke a function with a specified this value and arguments provided individually. It allows you to borrow methods from other objects and use them in the context of the current object. The apply() method is similar to call(), but it takes arguments as an array instead of individually. The bind() method returns a new function with a specified this value and optional arguments, allowing you to create a new function that can be called later with the same this value and arguments.
//The call() method is useful when you want to invoke a function with a specific this value and arguments, while the apply() method is useful when you want to invoke a function with an array of arguments. The bind() method is useful when you want to create a new function that can be called later with the same this value and arguments.

function SetUsername(username){
    this.username=username;
}

function createUser(username,email,password){
    SetUsername.call(this,username);//call method is used to invoke the SetUsername function with the current this value and the provided username argument. This allows the createUser function to inherit the properties and methods of the SetUsername function, effectively setting the username property of the new object being created by createUser. 
    this.email=email;
    this.password=password;

}

const chai=new createUser("chai","chai@example.com","password123");
console.log(chai);