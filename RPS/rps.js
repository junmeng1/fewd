$("#result-statement").hide();
var hC;
var bC;
var humanScore = 0;
var botScore = 0;

//Input human choice
$(".actions").click(function(event){
    event.preventDefault();
    hC = $(this).attr("data-type");
    bC = botChoice();
    winner();
    updateSb();
})

//Generate bot choice
function botChoice(){
    var botChoice = Math.random();
    if (botChoice <= 1/3){
        return "rock";
    } else if (botChoice <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Deciding who wins
function winner(){

    if (hC === bC) {
        updateResult(hC, bC);
        $("#winning-statement").html("You are in a tie!");
        $("#result-statement").show();
    }
    if (hC === "rock") {
        if (bC === "paper") {
        updateResult(hC, bC);
        $("#winning-statement").html("The bot wins!");
        botScore += 1;
        } else if (bC === "scissors"){
        updateResult(hC, bC);
        $("#winning-statement").html("You win!");
        $("#result-statement").show();
        humanScore += 1; 
        }
    } else if (hC === "paper") {
        if (bC === "rock") {
            updateResult(hC, bC);
            $("#winning-statement").html("You win!");
            $("#result-statement").show();
            humanScore += 1;
        } else if (bC === "scissors"){
            updateResult(hC, bC);
            $("#winning-statement").html("The bot wins!");
            $("#result-statement").show();
            botScore += 1;
        }
    } else {
        if (bC === "paper") {
            $("#winning-statement").html("You win!");
            $("#result-statement").show();
            humanScore += 1;
        } else if (bC === "rock") {
            $("#winning-statement").html("The bot wins!");
            $("#result-statement").show();
            botScore += 1;
        }
    }
}

//update score statements
function updateResult(hC, bC){
    $("#human-choice").html(hC);
    $("#bot-choice").html(bC);
}

//update scoreboard
function updateSb(){
    $("#human-score").html(humanScore);
    $("#bot-score").html(botScore);
}
