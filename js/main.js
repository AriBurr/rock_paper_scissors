var playerRock = document.getElementById("player-rock");
var playerPaper = document.getElementById("player-paper");
var playerScissors = document.getElementById("player-scissors");

var opponentRock = document.getElementById("opponent-rock");
var opponentPaper = document.getElementById("opponent-paper");
var opponentScissors = document.getElementById("opponent-scissors");

var win = document.getElementById("win");
var lose = document.getElementById("lose");
var draw = document.getElementById("draw");

var btn = document.getElementById("reset-btn");

var winTotal = 0;
var loseTotal = 0;
var drawTotal = 0;

function startGame() {

  playerRock.addEventListener("click", function(){
    playerRock.classList.add("selection");
    player = "rock";
    getOpponentSelection(player)
    playerResetColors(player);
  });

  playerPaper.addEventListener("click", function(){
    playerPaper.classList.add("selection");
    player = "paper";
    getOpponentSelection(player)
    playerResetColors(player);
  });

  playerScissors.addEventListener("click", function(){
    playerScissors.classList.add("selection");
    player = "scissors";
    getOpponentSelection(player)
    playerResetColors(player);
  });

}

function getOpponentSelection (player) {
  var items = ["rock", "paper", "scissors"];
  opponent = items[Math.floor(Math.random() * items.length)];
  switch (opponent) {
    case "rock":
      opponentRock.classList.add("opponent");
      oppResetColors(opponent);
      break;
    case "paper":
      opponentPaper.classList.add("opponent");
      oppResetColors(opponent);
      break;
    default:
      opponentScissors.classList.add("opponent");
      oppResetColors(opponent);
    }
  compare(player, opponent)
}

function compare(player, opponent) {

  var win = "win";
  var lose = "lose";
  var draw = "draw";

  if (player == "rock") {
    if (opponent == "rock") {
      result = draw;
    } else if (opponent == "paper") {
      result = lose;
    } else {
      result = win;
    }
  } else if (player == "paper") {
    if (opponent == "rock") {
      result = win;
    } else if (opponent == "paper") {
      result = draw;
    } else {
      result = lose;
    }
  } else {
    if (opponent == "rock") {
      result = lose;
    } else if (opponent == "paper") {
      result = win;
    } else {
      result = draw;
    }
  }

  getResults(player, opponent, result)

}

function getResults(player, opponent, outcome) {

  if (outcome == "win") {
    winTotal++
    draw.classList.remove("draw");
    lose.classList.remove("lose");
    win.classList.add("win");
    win.innerHTML = ("<p> Win: " + winTotal + "</p>");
  } else if (outcome == "lose") {
    loseTotal++
    draw.classList.remove("draw");
    win.classList.remove("win");
    lose.classList.add("lose");
    lose.innerHTML = ("<p> Lose: " + loseTotal + "</p>");
  } else {
    drawTotal++
    win.classList.remove("win");
    lose.classList.remove("lose");
    draw.classList.add("draw");
    draw.innerHTML = ("<p> Draw: " + drawTotal + "</p>");
  }

}

function playerResetColors(clicked) {
  if (clicked == "rock") {
    playerPaper.classList.remove("selection");
    playerScissors.classList.remove("selection");
  } else if (clicked == "paper") {
    playerRock.classList.remove("selection");
    playerScissors.classList.remove("selection");
  } else {
    playerRock.classList.remove("selection");
    playerPaper.classList.remove("selection");
  }
}

function oppResetColors(clicked) {
  if (clicked == "rock") {
    opponentPaper.classList.remove("opponent");
    opponentScissors.classList.remove("opponent");
  } else if (clicked == "paper") {
    opponentRock.classList.remove("opponent");
    opponentScissors.classList.remove("opponent");
  } else {
    opponentRock.classList.remove("opponent");
    opponentPaper.classList.remove("opponent");
  }
}

btn.addEventListener("click", function(){
  reset();
});

function reset() {
  winTotal = 0;
  loseTotal = 0;
  drawTotal = 0;

  win.innerHTML = ("<p> Win: 0 </p>");
  lose.innerHTML = ("<p> Lose: 0 </p>");
  draw.innerHTML = ("<p> Draw: 0 </p>");

  playerRock.classList.remove("selection");
  playerPaper.classList.remove("selection");
  playerScissors.classList.remove("selection");
  opponentRock.classList.remove("opponent");
  opponentPaper.classList.remove("opponent");
  opponentScissors.classList.remove("opponent");

  win.classList.remove("win");
  lose.classList.remove("lose");
  draw.classList.remove("draw");

}

startGame();
