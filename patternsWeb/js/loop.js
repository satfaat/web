/*Ada Lovelace The Enchantress of Numbers*/
// IF ELSE
//======

// While
//======

/*
while
for
for in
forEach
*/

while (){
  console.log("");
  i++;
}

var sheepCounted=0;
  while (sheepCounted<10){
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
  };
console.log("Zzzzzzzzz");

++++++
END WHILE
|
|
FOR
===

for (var sheepCounted = 0; sheepCounted<10; sheepCounted++){
  console.log("I have counted " + sheepCounted + "sheep!");
};

for (var x=2; x<10000; x*=2){
  console.log(x);
};

var animals = ["Cat", "fish", "lemur", "komodo dragon"];
  for (i=0; i<animals.length; i++){
    animals[i] = "Awesome " + animals[i];
    console.log(animals[i]);
  };

var groceries = [
  'apples',
  'yogurt',
  'toothpaste'];

for (var element of groceries){
  print (element);
};

//++++++
//END FOR

var randomString = "";
var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
               "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
              ];
  for (i=0; i<6; i++){
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    //console.log(randomString);
  }
  console.log(randomString);

var randomString = "";
var i = 0;

var alphabet =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
               "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
              ];
  while (i<6){
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    i++;
  }
  console.log(randomString);

//error
var input = "Javascript is awesome";
var output = "";
  for (i=0; i<input.length; i++){
    output += input[i];
    if (input[i] === "a"){
      output[i] = "4";
    }if (input[i] === "e"){
      output[i] = "3";
    }if (input[i] === "i"){
      output[i] = "1";
    }
    console.log(output);
  }
//end error

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}
