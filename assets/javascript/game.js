var targetNumber = Math.floor(Math.random()*101) +1;
var win = 0;
var loss = 0;
var button1 = Math.floor(Math.random() *11) +1;
var button2 = Math.floor(Math.random() *11) +1;
var button3 = Math.floor(Math.random() *11) +1;
var button4 = Math.floor(Math.random() *11) +1;
var userScore = 0;

var images = ["/Users/coding/Documents/unit-4-game/assets/images/bluegem.jpg","/Users/coding/Documents/unit-4-game/assets/images/greengem.jpg", "/Users/coding/Documents/unit-4-game/assets/images/pinkgem.jpg", 
"/Users/coding/Documents/unit-4-game/assets/images/yellowgem.jpg"];

function myFunction() {
   targetNumber =+ Math.floor(Math.random() *101) +1;
   $("#targetNumber").html(targetNumber);



$("#blue").on("click", function() {
	alert( "Alert" );
  	console.log("TEST")
   userScore += blue;
   $("#crystalValue").html(blue).hide();
   $("#userScore").html("Total Score: " + userScore);
});

$("#green").on("click", function() {
   userScore += green;
   $("#crystalValue").html(green).hide();
   $("#totScore").html("#crystalValue" + green);
   $("#userScore").html("Total Score: " + userScore);
});

$("#gems").on("click", function() {
   userScore += button3;
   $("#crystalValue").html(button3).hide();
   $("#userScore").html("Total Score: " + userScore);
});

$("#gems").on("click", function() {
   userScore += button4;
   $("#crystalValue").html(button4).hide();
   $("#userScore").html("Total Score: " + userScore);
});

if (userScore === targetNumber){
   wins++;
}

else {
   loss++;
}

};