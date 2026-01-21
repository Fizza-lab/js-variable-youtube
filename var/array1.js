const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]
marvel_heros.push(dc_heros)// ais ko ham use kr ry h marve-heros k andr he dc heros add kr deti hai.
//console.log(marvel_heros);
marvel_heros.pop()
//console.log(marvel_heros);
//console.log(marvel_heros[3]);
const allHeros= marvel_heros .concat(dc_heros)// asi ko ham jb use krty ha to dono array join ho kr ak new aray hmy dy deti hai.
//console.log(allHeros); 
const all_new_heros = [...marvel_heros, ...dc_heros] // ye hmera spread operater 
// console.log(all_new_heros);
const another_Array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(Infinity)
//console.log(real_another_array);
//console.log(typeof real_another_array);
Array.isArray("fizza")
//console.log(Array.isArray("fizza"));// ye question krny k lye k ye ak array h k ni.
//console.log(Array.from("fizza")); // is ko ham array me convert krny k lye use kry h
// console.log(Array.of("fizza"));
let score1 = 100
let score2 = 200
let score3 = 400
console.log(Array.of(score1,score2,score3));
