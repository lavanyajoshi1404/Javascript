const accountId =101
let acccountEmail="lavanyajoshi@14gmail.com"
var accountPassword="Password"
accountCity="Nagpur"
let accountState;
//if we not declare a value to a variable then it is undefined

//accountId=2// not allowed cannot be changed
//console.log(accountId);
//var not use now have global scope not block scope
/*
prefer not to use var because issue in block scope and functional scope
*/
acccountEmail="hchc@gmail.com"
accountPassword="123"
accountCity="abbc"
// different method for console
console.table([accountId,acccountEmail,accountPassword,accountCity,accountState])