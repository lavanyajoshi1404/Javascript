 const user={
    username :"hitesh",
    price:999,

    welcomeMessage : function (){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
//This means current context

//user.welcomeMessage()
//user.username="sam"

//console.log(this)
/**"this refers to the object that calls the function.
Inside an object method (using a normal function), this points to the object.
In a normal function called directly, this refers to the global object (or undefined in strict mode).
Arrow functions do not have their own this; they inherit it from the surrounding scope."
 */
/*function chai(){
    let username ="hitesh"
    console.log(this.username)
}
chai( )//=>username*/
const chai= () => {
    let username ="hitesh"
    console.log(this);
} 
// chai()
//Method1
/*const addTwo= (num1,num2) =>{
    return num1+num2
}*/
//Method2
//to return object wrapped it in parenthesis
const addTwo= (num1,num2) => ({username :"hitesh"})
console.log(addTwo(6,9))