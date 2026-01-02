// Primitive datatype
let numvalue=34
 let nameemploye="Fizza"
 let isloggedIn=false 
 let state;
let storetemp=null
console.log(numvalue,nameemploye,isloggedIn,state,storetemp);
const Id=Symbol('123')
 const anotherId=Symbol('123')
console.log(Id===anotherId);
const bigintNum=23456789321n
console.log(bigintNum);
// Non Primitive datatype
const heros=["Fiza", "sadia","Mahnoor"];
let myobj={
    name:"Fizza",
    age:23,
    EmailId:"hadiabdualhadi@gmail.com",
    }
    console.log(heros);
    console.log(myobj);
const myFunction= function (){ 
    console.log("hello world");
}
console.log(myFunction);
console.log(typeof myobj);
console.log(typeof heros);
console.log(typeof myFunction);