/*array*/
  var lastItem = shortArray[shortArray.length - 1];

//Draw as many cats as you want
var drawCats = function (howManyTimes) {
  var i = 0;
  for (i = 0; i < howManyTimes; i++){
    console.log(i + " =^.^=");
  }
};
drawCats(10);
//end

/*array*/
var mynm = ["Nicholas",
           "Andrew",
           "Maxwell",
           "Morgan"];
mynm.join(" ");
//or
mynm[0] + " " + mynm[1] + " " + mynm[2] + " " + mynm[3];
//or
mynm.length;

//Associative Arrays
var postcodes = [];
postcodes ["Armadale"] = 3141;
postcodes ["North Melbourne"] = 3051;

var alphabet =["a",
              "b",
              "c",
               "d",
               "e",
               "f",
               "g",
               "h",
               "i",
               "j",
               "k",
               "l",
               "m",
               "n",
               "o",
               "p",
               "q",
               "r",
               "s",
               "t",
               "u",
               "v",
               "w",
               "x",
               "y",
               "z"
              ];

/* print the elements of an array */
var vowel = ["a", "e", "i", "o", "u", "y"];
var i = 0;

/* Method #1 */
    vowel.forEach ( function(element) {console.log(element);});

/* Method 2 */
    for (i = 0; i < vowel.length; i++){ console.log(vowel[i]); } 

/* Method 3 */
  function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }; vowel.forEach(logArrayElements);
      vowel.forEach ( function (value, index, array) {console.log(index + "index " + value); });

/* Method 4 */
  for (let elements of iterator) { console.log(elements); }
      for (var item in vowel) { console.log(vowel[item]); }


var vowel = ["a", "e", "i", "o", "u", "y"], 
i = 0,
j = 0;

var input = "abracadabra".split("");
for (i = 0; i < input.length; i++){
  console.log(input[i]);
}

function getCount(str) {
  var vowelsCount = 0;
  // some code
}
/* array.forEach() method */
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

/* before */
var items = ['item1', 'item2', 'item3'];
var copy = [];
console.log(copy.length);

for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
  console.log(copy[i]);
}console.log(copy.length);
    /* after */
    var items = ['item1', 'item2', 'item3'];
    var copy = [];
      console.log(copy.length);
    items.forEach(function(item){
      copy.push(item);
        console.log(copy[item]);
    });console.log(copy.length);

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
    
// Обратите внимание на пропуск по индексу 2, там нет элемента, поэтому он не посещается
[2, 5, , 9].forEach(logArrayElements);
  // логи:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9

for (let elements of iterator) { 
  console.log(elements); 
}
// a sample 2-D array 
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}
// a sample 2-D array ES6 version
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (const i in a) 
{
   console.log(`row ${i}`);
   for (const j in a[i]) 
     {
      console.log(` ${a[i][j]}`);
     }
}

function getCount(str) {
  var vowelsCount = 0,
  vowel = ["a", "e", "i", "o", "u" /*"y"*/], 
  item = '';
  
  var input = str.split("");
    
  for (item in input){
    /*console.log( input[item] );*/
    for (let vowel_item in vowel ) {
      /*console.log( vowel[vowel_item] );*/
      if (input[item] == vowel[vowel_item] ){
        vowelsCount++;
      }
    } 
  }
  return vowelsCount;
}
    function getCount(str) {
      return (str.match(/[aeiou]/ig)||[]).length;
          return str.replace(/[^aeiou]/gi, '').length;
    }
function getCount(str) {
var vowelsCount = 0;
var vowels = ["a","e","i","o","u"];
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  } return vowelsCount;
}

function towerBuilder(nFloors) {
  // build here
tower = [];
tower.push("*");

  for (item in tower){
    console.log(tower[item])
    var text = "['" + tower[item] + "']";
    console.log(typeof(text));
    return tower;
  };
}

function towerBuilder(nFloors) {
  // build here
tower = [];
tower.push("*");
  for (let i=1; i < nFloors; i++){
    tower.push("*");
  }

  for (item in tower){
    return tower;
  };
}