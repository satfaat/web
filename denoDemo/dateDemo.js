import * as mod from "https://deno.land/std@0.182.0/datetime/mod.ts";


console.log("Vanila JS")
console.log(Date.now())

let today = new Date().toLocaleDateString();
console.log(today);

let datePlus = new Date();
datePlus.setDate(datePlus.getDate() + 7);
let dateBackward = datePlus.toLocaleDateString();
console.log(dateBackward);

let datePlus5Month = new Date();
datePlus5Month.setMonth(datePlus5Month.getMonth() + 4);
let dateForward = datePlus5Month.toISOString().slice(0,10);
console.log(dateForward);

console.log("Deno date")
