//Class is a blueprint for creating objects. It defines properties and methods that the created objects will have.
//The constructor is a special method that is called when a new instance of the class is created. 
// It is used to initialize the properties of the object.
//The this keyword refers to the current instance of the class. It is used to access the properties and methods of the object.
//The new keyword is used to create a new instance of the class. It calls the constructor method and returns a new object.
//The class syntax is a more concise and readable way to create objects and handle inheritance compared to the traditional function-based approach. 
// It provides a clear structure for defining properties and methods, making it easier to understand and maintain code.

//class User{
   // constructor(username,email,password){
     //   this.username = username;
       // this.email = email;
        //
        // this.password = password;
    //}
   
   // encryptPassword(){
   //     return `${this.password}abc`
   // }
   // changeusername(){
     //   return `${this.username.toUpperCase()}`
    //}

//}
//const chai= new User("chai","chai@example.com","chai123")
//console.log(chai.changeusername());

//console.log(chai.encryptPassword());

//behind the scenes, when we create a new instance of the User class using the new keyword, the constructor method is called with the provided arguments. 
// The this keyword refers to the newly created object, allowing us to set its properties. 
// The methods defined in the class can be called on the instance, and they have access to the instance's properties through this.

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const tea= new User("tea","tea@example.com","tea123")
console.log(tea.changeusername());

console.log(tea.encryptPassword());