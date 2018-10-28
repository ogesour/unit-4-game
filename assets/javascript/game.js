// Global Variables

//wins
var winCounter = 0;

//losses
var lossCount = 0;

//score total
var playerCount = 0;


//crystal numbers
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

//displayed random number between 19- 120
var guessNumber = 0;


//=========================

//functions


//reset the value of diamons
function diamondReset(){
    let crysNum1 = Math.floor(Math.random() * 12) + 1
    crystalOne = crysNum1;

    let crysnum2 = Math.floor(Math.random() * 12) + 1
    crystalTwo = crysnum2;

    let crysnum3 = Math.floor(Math.random() * 12) + 1
    crystalThree = crysnum3;

    let crysnum4 = Math.floor(Math.random() * 12) + 1
    crystalFour = crysnum4;

    playerCount = 0;

    $("#yourCurrentScore").text(playerCount);

    newNumber();


    
    console.log(`crystalRandomNumber is: ${crystalOne}`);
    console.log(`crystalRandomNumber is: ${crystalTwo}`);
    console.log(`crystalRandomNumber is: ${crystalThree}`);
    console.log(`crystalRandomNumber is: ${crystalFour}`);

}
diamondReset();

//finds random number that will be displayed
function newNumber(){
    guessNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#numToMatch").text(guessNumber);
    console.log(guessNumber);
}

function winLose(){
    if(guessNumber === playerCount){
        alert("you Win");
        diamondReset();
        winCounter++;
        $("#wins").text(winCounter);
    }else if(playerCount > guessNumber){
        alert("You LOST");
        diamondReset();
        lossCount++;
        $("loss").text(lossCount);
    }else{
        false;
    };
}
winLose();

function crystalCaller(crystalName, crystalNumber){
    $(crystalName).on('click', function(){
        playerCount += crystalNumber;
        $('#yourCurrentScore').text(playerCount);
        console.log(playerCount);
          
    if(guessNumber === playerCount){
        alert('you win');
        diamondReset();
        winCounter++;
        $('#wins').text(winCounter);
    }else if(playerCount > guessNumber){
        alert('You lost');
        diamondReset();
        lossCount++;
        $('#loss').text(lossCount);
    }

    })
    console.log(crystalNumber);
}

crystalCaller($('#crystalOne'),crystalOne);
crystalCaller($('#crystalTwo'), crystalTwo);
crystalCaller($('#crystalThree'), crystalThree);
crystalCaller($('#crystalFour'), crystalFour);