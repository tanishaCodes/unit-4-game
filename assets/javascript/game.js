//GLOBAL VARIABLES FUNCTIONS
//=========================================
//Crystal Variables
var crystal = {
    green:
    {
        name: "Green",
        value: 0
    },
    multicolored:
    {
        name: "Multicolored",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    }
};

// Scores Current and Target
var currentScore    = 0;
var targetScore     = 0;

//Wins and Losses
var winCount        = 0;
var lossCount       = 0;

//FUNCTIONS
//=========================================
//Helper function for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts and restarts the game
var startGame = function() {
    //Reset current score
    currentScore = 0;
    //Set new target scor (between 19 and 120)
    targetScore = getRandom(19, 120);

    //Set different values for each of the crystals (betreen 1 and 12)
    crystal.green.value         = getRandom(1, 12);
    crystal.multicolored.value  = getRandom(1, 12);
    crystal.purple.value        = getRandom(1, 12);
    crystal.blue.value          = getRandom(1, 12);

    //Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    //Testing Console
    console.log("-----------------")
    console.log("Target Score: " + targetScore);
    console.log("Green: " + crystal.green.value + " | Multicolored: " + crystal.multicolored.value + " | Purple: " + crystal.purple.value + " | Blue: " + crystal.blue.value);
    console.log("-----------------")
}

//Respond to clicks on the crystals
var addValues = function(crystal) {

    //Change currentScore
    currentScore = currentScore + crystal.value;

    //Change the HTML to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    //Call the checkWin function
    checkWin();

    //Testing
    console.log("Your score: " + currentScore);
}

//Check if user won or lost and reset the game
var checkWin = function() {

    //Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry. You lost!");
        console.log("You lost");

    //Add to loss counter
        lossCount++;

    //Change Loss Count HTML
        $("#lossCount").html(lossCount);

    //Restart the game
        startGame();
    }

    else if(currentScore == targetScore) {
        alert("Congratulations! You won!");
        console.log("You Won!");

    //Add to the Win Counter
        winCount++;

    //Change Win Count HTML
        $("#winCount").html(winCount);

    //Restart the game
        startGame();
    }
}
//MAIN PROCESS
//=========================================

//Starts the game the first time
startGame();

$("#green").on("click", function() {
    addValues(crystal.green);
});

$("#multicolored").on("click", function() {
    addValues(crystal.multicolored);
});

$("#purple").on("click", function() {
    addValues(crystal.purple);
});

$("#blue").on("click", function() {
    addValues(crystal.blue);
})