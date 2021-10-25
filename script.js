var inGameImg = new Array (0, 1, 2);
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var winCounter = 0, winStreak = 0, bestStreak = 0, winning = true;
var chooseImg = shuffle(inGameImg);
$("#button").on("click", function(){
    $(".call_door").each(function() { 
        $(this).attr("src", "images/closed_door.svg")
    });
    $("#button p").text("Good Luck!");
    winCounter = 0;
    chooseImg = shuffle(chooseImg);
})
var opendoor = function (a){
    if (chooseImg[(a-1)] === 0){
        $("#door" + a).attr("src", "images/beach.svg");
        winCounter++;
    }
    else if(chooseImg[(a-1)] === 1){
        $("#door" + a).attr("src", "images/space.svg");
        winCounter++;
    }
    else{
        $("#door" + a).attr("src", "images/robot.svg");
        if (winCounter === 2){
            $("#button p").text("You Win! Play again?");
            winStreak++;
            if (winStreak > bestStreak){
                bestStreak = winStreak;
            };
            $("#win_streak").text(winStreak);
            $("#best_streak").text(bestStreak);
        }
        else {
            $("#button p").text("Game over! Play again?");
            winStreak = 0; 
            $("#win_streak").text(winStreak);
            $("#best_streak").text(bestStreak);
        };
    }
}; 
var object1 = new Object();
object1.name ="la";
object1.age=18;
console.log(object1.name);

var object2 = {
    name: "la",
    age: 18
};
console.log(object2.age);
var arr = [5,3,1,2,4];
var sig = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0){
        sig = sig + arr[i]
    }
}
console.log(sig);
var ham = function(a,b){
    var cap = 1;
    for (let i = 0; i < b; i++) {
        cap = cap*a;     
    }
    return cap;   
}
console.log(ham(2,3));
var nguyento = function(a){
    var count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0){
            count++;
        }
    }    
        if (count > 0){
            return false
        }
        else {
            return true
        }
}
for (let i = 2; i < 101; i++){
      if (nguyento(i)){
          console.log(i)
      }

}
$(".call_door").on("click",function(){
    console.log($(this).attr("id"))
    var id=$(this).attr("id");
    var number=id.substring(id.length-1);
    console.log(number);
    opendoor(number);
})

/*$("#door1").on("click", function(){
    opendoor(1);
})
$("#door2").on("click", function(){
    opendoor(2);
})
$("#door3").on("click", function(){
    opendoor(3);
})
*/