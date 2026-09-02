function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const n = Math.floor(Math.random() * 3) + 1;
        if (n === 1) {
            return "rock";
        } else if (n === 2) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getHumanChoice() {
        const escolha = Number(prompt("Escolha 1 para rock, 2 para paper ou 3 para scissors"));
        if (escolha === 1) {
            return "rock";
        } else if (escolha === 2) {
            return "paper";
        } else if (escolha === 3) {
            return "scissors";
        } else {
            return undefined;
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Empatoooooou!");
        } else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            computerScore += 1;
            console.log("O computador venceu a rodada!");
        } else {
            humanScore += 1;
            console.log("O usuário venceu a rodada!!");
        }

        console.log(`Computador: ${computerChoice} x Humano: ${humanChoice}`);
        console.log(`Placar — Computador: ${computerScore} x Humano: ${humanScore}`);
    }

    console.log("Início de jogo — melhor de 5 rodadas");

    let rodada = 1;

    while (rodada <= 5) {
        const humanSelection = getHumanChoice();

        if (humanSelection === undefined) {
            console.log("Seleção inválida. Esta rodada não conta.");
            continue;
        }

        console.log(`--- Rodada ${rodada} de 5 ---`);

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        rodada += 1;
    }

    console.log(`Fim de jogo. Placar final — Computador: ${computerScore} x Humano: ${humanScore}`);

    if (humanScore > computerScore) {
        console.log("O campeão é o usuário!");
    } else if (computerScore > humanScore) {
        console.log("O campeão é o computador!");
    } else {
        console.log("Empate: não houve campeão.");
    }
}

playGame()
