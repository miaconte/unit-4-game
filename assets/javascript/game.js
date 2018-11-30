var tNum = Math.floor(Math.random()*100) +1;
var win = 0;
var loss = 0;
var button1 = Math.floor(Math.random() *15) +1;
var button2 = Math.floor(Math.random() *2) +1;
var button3 = Math.floor(Math.random() *10) +1;
var button4 = Math.floor(Math.random() *3) +1;
var userScore = 0;

function myFunction() {
   tNum =+ Math.floor(Math.random() *100) +1;
   $("#tNum").html(tNum);

$("#button-1").on("click", function() {
      userScore += button1;
      $("#crystalValue").html(button1).hide();
      $("#userScore").html("Value: " + userScore);
});

$("#button-2").on("click", function() {
    userScore += button2;
      $("#crystalValue").html(button2).hide();
      $("#totScore").html("#crystalValue" + button2);
      $("#userScore").html("Value: " + userScore);
});

$("#button-3").on("click", function() {
      userScore += button3;
      $("#crystalValue").html(button3).hide();
      $("#userScore").html("Value: " + userScore);
});

$("#button-4").on("click", function() {
      userScore += button4;
      $("#crystalValue").html(button4).hide();
      $("#userScore").html("Value: " + userScore);
});

   if (userScore === tNum) {
       win++;
       $("#win").text("Win: " + win);
       alert("WINNER!");
       userScore = 0;
       myFunction();
   }

   else if (userScore > tNum)  {
       loss++;
       $("#loss").text("Loss: "  + loss);
       alert("LOSER!");
       userScore = 0;
       myFunction();
   }
};