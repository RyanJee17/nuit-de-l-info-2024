// Charger les données du JSON
const questionsData = [
    {
        id: 1,
        question: "Où est la réponse 1 ?",
        answers: ["La réponse 1", "La réponse 2", "La réponse 3", "La réponse 4"],
        correct: 0,
        mp3_link_id: 4
    },
    {
        id: 2,
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Lyon", "Marseille", "Nice"],
        correct: 0,
        mp3_link_id: 5
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];

function displayQuestion(index) {
    if (index < 0 || index >= questionsData.length) return;
    const question = questionsData[index];
    console.log("La bordel de question :", question)
    const questionContainer = document.querySelector("form");

    // Afficher la question
    questionContainer.querySelector("h1").textContent = `Question ${index + 1}`;
    questionContainer.querySelector("div h2").textContent = question.question;

    // Afficher les réponses
    const answersContainer = document.querySelector(".grid-answers");
    answersContainer.innerHTML = "";
    question.answers.forEach((answer, i) => {
        answersContainer.innerHTML += `
            <div>
                <input type="radio" id="rep${i}" name="answers" value="${i}">
                <label for="rep${i}">${answer}</label>
            </div>`;
    });
}

document.getElementById("prev").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        saveAnswer();
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
});

document.getElementById("next").addEventListener("click", () => {
    console.log(currentQuestionIndex);
    console.log(questionsData.length -1);
    if (currentQuestionIndex < questionsData.length - 1) {
        saveAnswer();
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        calculateScore();
    }
});

// Sauvegarder la réponse actuelle
function saveAnswer() {
    const selectedAnswer = document.querySelector("input[name='answers']:checked");
    userAnswers[currentQuestionIndex] = selectedAnswer ? parseInt(selectedAnswer.value) : null;
}

// Vérifier les réponses et calculer le score
function calculateScore() {
    let score = 0;
    questionsData.forEach((question, index) => {
        if (userAnswers[index] === question.correct) score++;
    });

    // Redirection ou affichage du score
    alert(`Votre score est ${score}/${questionsData.length}`);
    window.location.href = "results.html"; // Redirige vers une page de résultats
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut
    const selectedAnswer = document.querySelector("input[name='answers']:checked");

    if (!selectedAnswer) {
        alert("Veuillez sélectionner une réponse !");
        return;
    }

    const isCorrect = parseInt(selectedAnswer.value) === questionsData[currentQuestionIndex].correct;

    document.querySelectorAll("label").forEach((label, i) => {
        label.style.backgroundColor =
            i === questionsData[currentQuestionIndex].correct
                ? "#9ee454"
                : i === parseInt(selectedAnswer.value)
                ? "#9b2d2e"
                : "";
    });

    if (isCorrect) {
        const mp3Path = questionsData[currentQuestionIndex].mp3_link_id
            ? `path_to_mp3/${questionsData[currentQuestionIndex].mp3_link_id}.mp3`
            : null;
        if (mp3Path) {
            const player = document.createElement("audio");
            player.src = mp3Path;
            player.controls = true;
            document.querySelector("form").appendChild(player);
        }
    }
});

displayQuestion(0)