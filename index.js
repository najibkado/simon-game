var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;

document.addEventListener("keydown", function (event) {
    var a = event.key;
    checkAnswer(userClickPattern.length-1);
    if (a === "a") {
        level++;
    } 
    if (level > 0)
    {
        nextSequence();
    }
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChoosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    

    $(".btn").click(function () {
        var userChosenColour = this.id;
        userClickPattern.push(userChosenColour);
        animatePress(userChosenColour);
        playSound(userChosenColour);
    });

    $("h1").text("Level " + level);
    level++;

}

// $("#"+randomChoosenColor).click(function () {
       
// });

function playSound(key) {
    switch (key) {
        case "red":
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;

            case "yellow":
                var audio = new Audio('sounds/yellow.mp3');
                audio.play();
                break;

                case "blue":
                    var audio = new Audio('sounds/blue.mp3');
                    audio.play();
                    break;

                    case "green":
                        var audio = new Audio('sounds/green.mp3');
                        audio.play();
                        break;
    
        default:
            break;
    }
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    
}

function checkAnswer(currentLevel) {
   if (currentLevel == gamePattern[3]) {
       document.querySelector("body").style.backgroundColor = "Green";
       document.querySelector("h1").textContent = "Correct";
       setTimeout(() => {
           nextSequence();
       }, 1000);
   } else {
   
   }
}
