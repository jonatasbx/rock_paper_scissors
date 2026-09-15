const btnContainer = document.getElementById("buttons");
const guessList = document.getElementById("guessList");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Empate!";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return "Computador venceu a rodada!";
  } else {
    humanScore++;
    return "Você venceu a rodada!";
  }
}

btnContainer.addEventListener("click", (event) => {
  // Garante que o clique foi em um botão
  if (event.target.tagName !== "BUTTON") return;

  // Pega o texto do botão em minúsculo (ex: "rock", "paper", "scissors")
  const humanChoice = event.target.textContent.trim().toLowerCase();
  const computerChoice = getComputerChoice();

  const roundOutcome = playRound(humanChoice, computerChoice);

  const li = document.createElement("li");
  li.textContent = `Você: ${humanChoice} | Computador: ${computerChoice}`;

  // Exibe a jogada atual no elemento guessList
  guessList.appendChild(li)

  // Atualiza o resultado e placar
  result.textContent = `${roundOutcome} (Placar: Você ${humanScore} x ${computerScore} Computador)`;
});
