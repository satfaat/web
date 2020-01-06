99*123;

var highFives=0;
++highFives; //1
++highFives; //2
++highFives; //3

highFives++ //0
highFives++ //1
highFives; //2

var score=10;
score +=7; // score+7
score -=3; // score-7

// factorial
var factorial = function(number) {
	var result = 1;
	while(number >= 1) {
		result = result * number;
		number--;
		console.log(result + '=' + result + '*' + number);
	}
	return result;
}
factorial(7);
/*
7=7*6
42=42*5
210=210*4
840=840*3
2520=2520*2
5040=5040*1
5040=5040*0
5040
*/

// del
let count = 5, factorial = 1;
  while(count >= 1){
    /*factorial = factorial * count;*/
    factorial *=count; 
    count--;
    console.log(factorial + '=' + factorial + '*' + count);
  }
console.log('result ' + factorial);

// del
let number = prompt("Enter number: ");
var factorial = function(number){
  y = number + number;
  console.log(number + '+' + number);
  return y;
}
factorial(5);

// del

let factorial_my = function(number){
  let number = prompt("Enter number: ");
  let result = 1;
  if (number == 0){
    return document.write(result);
  } else {
      while(number >= 1){
        result = result * number;
        number--;
        console.log(result + '=' + result + '*' + number);
        //document.write(result + '=' + result + '*' + number);
      }
      return /*result*/ document.write(result);
  }
}
factorial_my(5);

/* n * (n - 1) */
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    /*return factorial(n - 1) * n;*/
    /*return document.write(factorial(n - 1) * n);*/
    return factorial(n - 1) * n;
  }
}
document.write(factorial(5) + " ");
// or 
console.log(factorial(5) + " ");

  function fuctorial_3(n){
    let count = 1;
    let max = n;
      while (count <= (max - 1)){
        n = n * count;
        count++;
      }
      document.write(n + " ");
  }
fuctorial_3(n);

let total = 0, count = 1;
  while (count <= 10) {
    total += count;
    count += 1;
  }
  console.log(total); // 55
  // or
  console.log(sum(range(1, 10))); // 55

  var base = 2;
  function addTwo(input){
    return parseInt(input) + base;
  }