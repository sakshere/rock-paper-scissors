let compScore = 0;
let playerScore = 0;
let realMove = "";

let machineMove = "";
function getRandomMove() {
  const options = ["stone", "paper", "scissor"];
  options.forEach((id) => {
    document.getElementById(id).style.backgroundColor = " rgb(126, 196, 196)";
  });

  machineMove = options[Math.floor(Math.random() * options.length)];
  console.log("Machine chose", machineMove);

  document.getElementById(machineMove).style.backgroundColor =
    "rgba(13, 78, 78, 1)";

  return machineMove;
}

function getRealMove() {
  const stone = document.getElementById("stone1");
  const paper = document.getElementById("paper1");
  const scissor = document.getElementById("scissor1");

  const options = ["stone1", "paper1", "scissor1"];
  function resetPlayerChoices() {
    options.forEach((id) => {
      document.getElementById(id).style.backgroundColor = " rgb(126, 196, 196)";
    });
  }

  stone.addEventListener("click", () => {
    resetPlayerChoices();
    realMove = "stone";
    console.log("You chose:", realMove);
    stone.style.backgroundColor = "Green";
    getRandomMove();
    gameRule();
  });

  paper.addEventListener("click", () => {
    resetPlayerChoices();
    realMove = "paper";
    console.log("You chose:", realMove);
    paper.style.backgroundColor = "Green";
    getRandomMove();
    gameRule();
  });

  scissor.addEventListener("click", () => {
    resetPlayerChoices();
    realMove = "scissor";
    console.log("You chose:", realMove);

    scissor.style.backgroundColor = "Green";
    getRandomMove();
    gameRule();
  });
}

function gameRule() {
  let body = document.querySelector("body");
  let nav = document.querySelector("nav");
  let comp = document.getElementById("computer");
  let player = document.getElementById("player");
  let btn = document.getElementById("btn");
  if (machineMove == realMove) {
    body.style.backgroundColor = "grey";
    
    btn.style.backgroundColor = "grey";
    btn.style.color = "black";
    btn.style.fontSize = "20px";
    btn.innerText = "Oh! It's a TIE! ⚖️";
  } else if (
    (machineMove == "stone" && realMove == "paper") ||
    (machineMove == "paper" && realMove == "scissor") ||
    (machineMove == "scissor" && realMove == "stone")
  ) {
    body.style.backgroundColor = "rgba(183, 228, 203, 1)";
    btn.style.backgroundColor = "rgba(183, 228, 203, 1)";
    btn.style.color = "black";
    btn.style.fontSize = "28px";
    btn.innerText = "	✅WIN because  " + realMove + " beats " + machineMove;
    playerScore++;
    console.log("Your Score", playerScore);
    player.innerText = "Your Score :" + playerScore;
  } else {
    body.style.backgroundColor = "#ff7a7aff";
    btn.style.backgroundColor = "	#ff7a7aff";
    btn.style.color = "black";
    btn.style.fontSize = "25px";
    btn.innerText = "❌ LOSE because  " + machineMove + " beats " + realMove;
    compScore++;
    console.log("Computer Score", compScore);
    comp.innerText = "Comp Score :" + compScore;
  }
}

let play = document.getElementById("btn");

play.addEventListener("click", () => {
 
 play.style.fontSize = "20px";         
play.style.color = "white"; 
  play.innerText = "Game is live";
  console.log("Game has started");
  play.style.backgroundColor = "rgba(28, 83, 83, 1)";
  getRealMove();
});
play.addEventListener("dblclick", () => {
  play.innerText = "Start";
  console.log("Game has stopped");
  play.style.backgroundColor = "rgba(0, 0, 0, 1)";
});
