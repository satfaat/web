/**/
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";

var myCrazyObject = {
  "name":"A ridiculous object",
  "some array":[7, 9, {purpose: "confusion", number:123}, 3.3],
  "random animal": "Banana Shark"
};
myCrazyObject['some array'];
  // 7,9,[object Object],3.3
  // end

myCrazyObject['some array'][0];
// 7

tst['some array'][2];
// [object Object]

tst['some array'][2].number;
// 123

var myBackpack = {
  food: "bananas",
  equipment: "map",
  clothing: "hat"
};
print(myBackpack.food);

var myBackpack = {
  food: ["bananas", "nuts", "energy bar"],
  equipment: ["map", "compass"],
  clothing: ["hat", "jacket", "scarf"]
};
print(myBackpack.food);

var car = {type:"Fiat", model:"500", color:"white"};
