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
var count = 5;
var factorial = 1;
  while(count >= 1){
    factorial = factorial * count;
    count--;
    console.log(factorial + '=' + factorial + '*' + count);
  }
console.log('result ' + factorial);

// del
var factorial = function(number){
  y = number + number;
  console.log(number + '+' + number);
  return y;
}
factorial(5);

// del
var factorial = function(number){
  var result = 1;
    while(number >= 1){
      result = result * number;
      number--;
      console.log(result + '=' + result + '*' + number);
    }
    return result;
}
factorial(5);
