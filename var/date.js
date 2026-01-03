// // let myDate = new Date()
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleDateString());
// // console.log(typeof myDate);
// // let myCreatedDate=new Date(2025,0,23);
// // console.log(myCreatedDate.toDateString());
// // console.log(myCreatedDate.toJSON());
// // console.log(myCreatedDate.toLocaleDateString());
// // let mytimeStamp=Date.now()
// // console.log(mytimeStamp);
// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));
// // let newDate=new Date()
// // console.log(newDate);
// // console.log(newDate.getMonth()+1);
// // console.log(newDate.getDay());
// // newDate.localString('dafault',{
// //     weekday:"long"
// // })
// /// Paractice///
//  let myDate=new Date()
//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toJSON());
//  let myCreatedDate=new Date(2023,2,10)
//  console.log(myCreatedDate);
//  console.log(myCreatedDate.toDateString());
//  console.log(myCreatedDate.toLocaleDateString());
// let mytimeStamp= Date.now()
// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);

// //`${newDate.getDate} and the time ${newDate.getHours}`

// newDate.toLocaleString('default',{
//     weekday:'long'
// })
/// Paratice ///
let newDate=new Date()
console.log(newDate);
console.log(typeof newDate);
console.log(newDate.getTime());
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toLocaleDateString());// ye tb sb se zda useful hota h jb hamy date day month or year asy chye.
let myDate=new Date(2023,2,10)
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
let anotherDate=new Date(2025,0,1)
console.log(anotherDate);
console.log(anotherDate.getMonth()+12);
// Timestamp jb ham ne exact value dekhni ho.
let myTimestamp= Date.now()
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000)); //agr hmere decimal me value ati h pr agr hamy wo value choti value me chye to pr ham ye use krty.
let myCreatedDate= new Date(2025,0,10)
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getMonth()+1);
console.log(typeof new Date);
console.log(myCreatedDate.getFullYear());