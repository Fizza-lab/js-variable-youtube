// singleton // construct sy hmesha singletone bnta h .construct se singletone bnta h literals se singletone ni bnta h.
// agr ham object ko literial ki trh bnty han to singletone ni bnta hai.
// object ko 2 trha se define krty hn construct triky se or literals triky se
// ham jb bi construct triky se bnty hn to wo na singletone me bnty han.
Object.create // to ye construct wala trika hai.

// object literals
const mySym = Symbol("mykey1")
const jsUser = {
 name: "fizza",
 "full name": "fizaa Sahzadi",
 [mySym]: "mykey1", 
 age:  24,
email: "fizza786@gmail.com",
location: "MDK",
isloggedIn:false,
lastlogindays: ["Monday","Tuesday","wednesday","Thursday","Friday","Saturday", "Sunday"],

}   // ye lliterals method hai ye kribrackrt h ye object hai.

//console.log(jsUser);
jsUser.email;
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);
//console.log(typeof jsUser[mySym]);
jsUser.email="hadi786@gmail.com"
jsUser.location="lahore"
//Object.freeze(jsUser)
jsUser.age=28
//console.log(jsUser);
jsUser.greeting = function(){
    //console.log(`Hello Js user ${this.name} my age ${this.age} i live in ${this.location}`);
}
// console.log(jsUser.greeting());
// ham object ko literals bi kar skhty hn or singletoe bi kr skhty hain.constructure me ham singletone use krty h or literal object me ham singletone use ni krty or doseri bt object me me ham ak object ban k symbol kasy find krna h wo bi km kr skhty hn object ko freez kr skhty hn or object me ham na geeting wala km kr skhty hn or this use kr k object me ham koi bi elemtn print krwa skhty hn.
//const tinderuser = new Object()/// ye ak singletone object h.
//console.log(tinderuser);
const tinderuser = {} // or ye none singletone object hai.
//console.log(tinderuser);
tinderuser.id ="12345"
tinderuser.name="Fizaa"
tinderuser.isloggedIn="false"
//console.log(tinderuser);
const regularuser={
    email:"fizza786@gmail.com",
    fullname: {
        username:{
           firstname:"fizza",
           lastname:"shahzadi," }}}
          // console.log(regularuser.fullname.username);
           regularuser.email="hadi786#gmail.com"
           //console.log(regularuser);
         const  obj1 = {1:"a", 2: "b"}
          const  obj2 = {3:"c", 4: "d"}
          const obj4 = {5:"f",6:"g" }
        //const obj3 = Object.assign( {} ,obj1,obj2,obj4);// asssin kr k bi value ly skhty hn
       // console.log(obj3);
       const obj3={...obj1,...obj2}//ye spread kr k bi kr skhty 
       //console.log(obj3);
       const user = [
        {
            id:2,
            email:"hadi786@gmail.com"},
            {
              name:"Fizza",
              location:"lahore",
            }
       ]
       user[1].id
       //console.log(user.id);
//console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
//console.log(tinderuser.hasOwnProperty('name'));
//console.log(tinderuser.isPrototype());
/// objec destructuring
const course ={
  coursename: "chai aur code",
  price:999,
  courseInstructor: "fizza",
}
course.courseInstructor // ye trika bi h ln ye zda perfer ni kiya jta.
const {courseInstructor,coursename,price} = course
//console.log(courseInstructor ,coursename,price);
//console.log(Object.keys(course));
//console.log(Object.values(course));
//console.log(Object.entries(course));
const {courseInstructor:Instructor} = course
//console.log(Instructor); // ye hota destructuring krna.
const {coursename:cour} =course
//console.log(cour);
 
// APIs kya hoty hn kuj values  ati h apk pas backend se ap un value ko kasy lekhty hn
// phy ye value jo h na wo exmalstructure me value ati ti or wo bht he complex hota ta.ab sri ki sri value ati han JSoN se.
// json me keys or value ak string me hoti hai jasa k
{
  "name": "Fizza",
  "coursename": "chai aur code",
  "price": "free"
}
