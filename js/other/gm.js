function headsOrTails(){
    var throw_coin = Math.floor(Math.random()*2);
    if (throw_coin == 0){
        document.getElementById("coin").innerHTML = "Head";
    } else {
        document.getElementById("coin").innerHTML = "Tail";
    }
}