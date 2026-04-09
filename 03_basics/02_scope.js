// avoid var 
let a=300


 if(true){
    let a=10
    const b=20
   // console.log("INNER:",a)
 }


//console.log(a);
//console.log(b);
//console.log(a);

function one(){
   const username ="hitesh"

   function two(){
      const website ="youtube"
     // console.log(username);
   }
   //console.log(website);

   two()
}
//one()
if(true){
   const username="hitesh"
   if(username == "hitesh"){
      const website="youtube"
     // console.log(username+website)
   }
}
/*******************Interesting******************** */

function addone(num){
   return num+1;

}
console.log(addone(5))
const addTwo=function(num){
   return num+2


}
console.log(addTwo(9))