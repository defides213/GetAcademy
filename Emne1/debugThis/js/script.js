const outputDiv = document.getElementById("output");
const questionArray = [
    {
        question: "Hva er verdens største landpattedyr?",
        answers: {
            a: "Rød kjempekenguru",
            b: "Blåhval",
            c: "Elefant"
        },
        correctAnswer: "Elefant"

    },
    {
        question: "Hva er HEX koden for hvit?",
        answers: {
            a: "#000",
            b: "#FFF",
            c: "#AAA"
        },
        correctAnswer: "#FFF"

    },
    {
        question: "Hva er tyngst av en kilo mel, en kilo bly og en kilo fjær?",
        answers: {
            a: "BLY.",
            b: "Fjær, det er det flere av i en kilo",
            c: "Lurespørsmål!"
        },
        correctAnswer: "Lurespørsmål!"

    },
];
let currentQuestion;
let correctAnswerCounter = 0;
let rightOrWrong = "";
let hideOrShow = "none";

showQuiz();
function showQuiz() {
    let randomQuestionIndex = Math.floor(Math.random() * questionArray.length)

    outputDiv.innerHTML = `Number of Correct Answers: ${correctAnswerCounter}
    </br>${questionArray[randomQuestionIndex].question} </br>
        `;
    for (let answer in questionArray[randomQuestionIndex].answers) {
        outputDiv.innerHTML += `
            <li onclick="checkAnswer(this.innerText, ${randomQuestionIndex})">
            ${questionArray[randomQuestionIndex].answers[answer]} 
            </li>`;
    }
}
function showHideResult() {
    outputDiv.innerHTML += `
        <div style="display: ${hideOrShow}"> Der hadde du ${rightOrWrong}!</div>
        `;
}

function checkAnswer(selectedAnswer, randomIndex) {
    hideOrShow = "block";
    rightOrWrong = "feil";
    showQuiz();
    if (selectedAnswer === questionArray[randomIndex].correctAnswer) {
        rightOrWrong = "rett";
        correctAnswerCounter++;

    }
    showHideResult();
    console.log(selectedAnswer);
    console.log(randomIndex);
}