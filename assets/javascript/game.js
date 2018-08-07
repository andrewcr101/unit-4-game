//Initalizing global variables
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


//reset and start game function
var ResetAndStart = function() {

$(".crystals").empty();

//crystal images
var images  = [
    './assets/images/crystal-1.jpg',
    './assets/images/crystal-2.jpg', 
    './assets/images/crystal-3.jpg', 
    './assets/images/crystal-4.png'];

//random variable
random_result = Math.floor(Math.random() * (120 - 19)) + 19;

$("#result").html('Total Target: ' + random_result);

//for loop for the crystal images and assigning them a value between 1 and 12
for (var i = 0; i < 4; i++){
    
    var random = (Math.floor(Math.random()*12)+1);
    console.log(random);
    var crystal =  $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        });
    $(".crystals").append(crystal);
    
}
$("#previous").html("Total Score: " + previous);
$("#win").html("You Won: " + win);
$("#lost").html("You Lost: " + lost);
}

//calling function for reset and start
ResetAndStart();

//This is where the clicking take place, when clicking on image
$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random')); //number is changed to an integer
    previous += num;
    $("#previous").html("Total Score: " + previous);
    console.log(previous);
    if(previous > random_result){
        lost++;
        $("#lost").html("You Lost: " + lost);
        previous = 0;
        ResetAndStart();
    
    }else if (previous === random_result){
        win++;
        $("#win").html("You Won: " + win);
        previous = 0;
        ResetAndStart();
    }


    
});