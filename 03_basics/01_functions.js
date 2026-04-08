function sayMyname(){
    console.log("S");
    console.log("A");
    console.log("M");
    
}

//give function reference and then execute
//sayMyname()
//Method 1
//function addtwonumbers(number1,number2){
  //  console.log(number1 + number2)
//}


function addtwonumbers(number1,number2){
   //let result=number1+number2
   //return result
   return number1+number2
}

const result=addtwonumbers(5,9)
//console.log("Result:",result);

function loginUseMessage(username){
    if (!username){
        console.log("Please enter a username")
         return 

    }
    return `${username} just logged in`

}
//console.log(loginUseMessage("Lavanya"))// when no value is pass the returns undefined
// rest operator
function calculateCartPrice(...num1){

    return num1
}
//console.log(calculateCartPrice(200,400,500))
const user={
    username:"Neha",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); 