// Charger les données du JSON
const questionsData = [
    {
        id: 1,
        question: "Quel est le rôle principal des océans dans le système Terre ?",
        answers: ["Ils stockent principalement des minéraux précieux.", "Ils régulent le climat en stockant de la chaleur et des gaz.", "Ils génèrent de l’oxygène uniquement via la photosynthèse terrestre.", "Ils sont principalement un réservoir d’eau douce."],
        correct: 2,
        mp3_link_id: 2
    },
    {
        id: 2,
        question: "Quelle est la principale menace pour les océans liée au réchauffement climatique ?",
        answers: ["L’augmentation de la salinité des océans.", "La stratification des eaux, qui limite les échanges de gaz et de nutriments.", "La diminution des courants océaniques.", "L’acidification des eaux de surface."],
        correct: 2,
        mp3_link_id: 3
    },
    {
        id: 3,
        question: "Comment le carbone est-il séquestré par la pompe biologique marine ?",
        answers: ["Par la \"neige marine\" qui se dépose au fond des océans.", "Par la production de CO2 par le phytoplancton.", "Par l'absorption du carbone dans les courants marins.", "Par l’accumulation de sédiments sur les plages."],
        correct: 1,
        mp3_link_id: 4
    }
    ,
    {
        id: 4,
        question: "Quels sont les principaux acteurs de la pompe biologique de carbone ?",
        answers: ["Les diatomées et les coccolithophoridés, qui produisent des coquilles minérales.", "Les baleines et les poissons, qui consomment du phytoplancton.", "Les algues rouges, qui produisent de l'oxygène.", "Les bactéries, qui décomposent le zooplancton."],
        correct: 1,
        mp3_link_id: 5
    }
    ,
    {
        id: 5,
        question: "Comment la pompe biologique marine contribue-t-elle à la régulation du climat ?",
        answers: ["Elle séquestre le carbone pendant des milliers d'années.", "Elle émet du CO2 dans l'atmosphère pour accélérer le réchauffement climatique.", "Elle réduit la production de phytoplancton en raison du réchauffement des océans.", "Elle transforme l'oxygène en carbone pour aider à la photosynthèse."],
        correct: 1,
        mp3_link_id: 6
    }
    ,
    {
        id: 6,
        question: "Quelle est la principale différence entre la pompe physique et la pompe biologique dans le transport du carbone dans les océans ?",
        answers: ["La pompe physique capte moins de carbone que la pompe biologique.", "La pompe biologique séquestre le carbone pour des périodes plus courtes que la pompe physique.", "La pompe physique capture rapidement le carbone mais ne le séquestre que pour de courtes périodes.", "La pompe biologique dissout le CO2 dans les eaux profondes plus efficacement que la pompe physique."],
        correct: 3,
        mp3_link_id: 7
    }
    ,
    {
        id: 7,
        question: "Quelles sont les principales différences entre les régions océaniques en termes de plancton et de pompe biologique marine ?",
        answers: ["Les zones subtropicales sont riches en plancton, tandis que l'Atlantique Nord est pauvre en plancton.", "La pompe biologique est plus active dans les régions subtropicales en raison de la faible stratification des eaux.", "L'Atlantique Nord est très riche en phytoplancton, ce qui entraîne une forte activité de la pompe biologique, grâce à un mélange hivernal des eaux.", "Les zones subtropicales ont un mélange hivernal plus fort, ce qui entraîne une plus grande production de phytoplancton."],
        correct: 3,
        mp3_link_id: 8
    },
    {
        id: 8,
        question: "Quels facteurs influencent l'efficacité de la pompe biologique marine et comment peuvent-ils être affectés par le réchauffement climatique ?",
        answers: ["La taille du phytoplancton et la vitesse de la photosynthèse, qui sont influencées par les courants océaniques.", "La température de l'eau et la taille du phytoplancton, qui affectent la vitesse de chute de la neige marine et la consommation de celle-ci par les organismes.", "La profondeur de l'océan et la salinité de l'eau, qui ralentissent le transport de carbone vers les fonds marins.", "La quantité de zooplancton et la concentration en oxygène, qui n'ont aucune relation avec la température de l'eau."],
        correct: 2,
        mp3_link_id: 9
    },
    {
        id: 9,
        question: "Quel impact l’exploitation des grands fonds et la pêche en grands fonds peuvent-elles avoir sur la pompe biologique du carbone ?",
        answers: ["Elles augmentent la quantité de neige marine, ce qui renforce l'efficacité de la pompe biologique.", "Elles perturbent la séquestration du carbone en remettant la neige marine en suspension, ce qui réduit l'efficacité du processus.", "Elles favorisent la croissance du phytoplancton, augmentant ainsi la production de neige marine.", "Elles n'ont aucun impact sur le processus de séquestration du carbone, car seules les températures influencent la pompe biologique."],
        correct: 2,
        mp3_link_id: 10
    }
];

const audioData = [
    {
        "mp3_link_id": 2,
        "path": "../../assets/audio/FRED2.mp3"
    }, {
        "mp3_link_id": 3,
        "path": "../../assets/audio/FRED3.mp3"
    }, {
        "mp3_link_id": 4,
        "path": "../../assets/audio/FRED4.mp3"
    }, {
        "mp3_link_id": 5,
        "path": "../../assets/audio/FRED5.mp3"
    }, {
        "mp3_link_id": 6,
        "path": "../../assets/audio/FRED6.mp3"
    }, {
        "mp3_link_id": 7,
        "path": "../../assets/audio/FRED7.mp3"
    }, {
        "mp3_link_id": 8,
        "path": "../../assets/audio/FRED8.mp3"
    }, {
        "mp3_link_id": 9,
        "path": "../../assets/audio/FRED9.mp3"
    }, {
        "mp3_link_id": 10,
        "path": "../../assets/audio/FRED10.mp3"
    }]

let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];

function displayQuestion(index) {
    if (index < 0 || index >= questionsData.length) return;
    const question = questionsData[index];
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
    console.log(questionsData.length - 1);
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
    window.location.href = "../"; // Redirige vers une page de résultats
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
        // Récupérer l'id 
        const id = questionsData[currentQuestionIndex].mp3_link_id

        const audio = audioData.find(audio => audio.mp3_link_id === id);
        const mp3Path = audio ? audio.path : null;

        if (mp3Path) {
            const player = document.createElement("audio");
            player.src = mp3Path;
            player.controls = true;
            document.querySelector("form").appendChild(player);
        }
    }
});

displayQuestion(0)