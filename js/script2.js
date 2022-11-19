function setPlayerName(){
    var playerNameDiv = document.getElementById('playerName');
      
    playerNameDiv.innerHTML = document.getElementById('playerNameInput').value;
  
    
      
      // Gömma input field och button
      document.getElementById('divSetPlayerName').style.display = 'none';
    }
  
   function getPlayerName(){
    let name = document.getElementById('playerName');
      
    name = document.getElementById('playerNameInput').value;
    return name
   }
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    // Börja spelet
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    // Spela spelet
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      // Datans options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          // Datans val
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
           
            compareHands(this.textContent, computerChoice);
            // uppdatera bilder
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 500);
          // animation
          playerHand.style.animation = "shakePlayer 0.5s ease";
          computerHand.style.animation = "shakeComputer 0.5s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      if (pScore === 3 || cScore === 3) {
        setTimeout(function () { location.reload(true); }, 1000);
      }
    };
  
    const compareHands = (playerChoice, computerChoice) => {

    const winner = document.querySelector(".winner");
    const player = getPlayerName();
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      // kolla för Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = `${player} Wins`;
            pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
            cScore++;
          updateScore();
          return;
        }
      }
      // Kolla för Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = `${player} Wins`;
          pScore++;
          updateScore();
          return;
        }
      }
      // Kolla för Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = `${player} Wins`;
          pScore++;
          updateScore();
          return;
        }
      }
    };
    
  
    //kalla alla inne funktioner
    startGame();
    playMatch();
  };
  
  //börja spelet funktionen
  game();
