const gamePattern = [];

const userClickedPattern = [];

const buttonColours = ["red","blue","green","yellow"];

let level = 0;

let started = false;

$(document).keypress(()=>{

    if(!started){
       
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
  
});


});

function nextSequence() {
  
level++;

$("#level-title".html("level " + level);

let randomNumber = Math.floor(Math.random () * 4 );
let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

// animation 

$("#" + randomChosenColour).fadeIN(100).fadeOut(100).fadeIN(100);
playSound(randomChosenColour)

}

    
$(".btn").click(()=>{ 
  
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
  
});

// for sound

function playSound (name) {

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();


}

function animatePress(currentColour){
    
    $("." + currentColour).classList.add("pressed");
    
    setTimeout( ()=> {
        $("." + currentColour).classList.remove("pressed");
    },100);
}

