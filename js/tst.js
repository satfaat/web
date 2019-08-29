set_timeout (wake_up_user, 5000); // 1000 milliseconds = 1 second
function wake_up_user(){
    alert("Are you going to stare")
}

var price = 28.99;
var discount = 10;
var total = price - (price * (discount / 100));
if (total > 25){
    freeShipping();
}

var count = 10;
while (count > 0){
    juggle();
    count = count - 1;
}

var dog = {name: "Rover", weight: 35};
if (dog.weight > 30){
    alert("woof woof");
} else {
    alert("woof");
}

var scoops=5;
while (scoops > 0) {
    document.write('another scoop! ');
    //alert('another scoop!');
    scoops -= 1;
}