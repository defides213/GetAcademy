
const randomOutput = document.getElementById("oracleBubbleText");
const inputQuestion = document.getElementById("questionInput");
const answerArray = [
    "No", "Yes",". . .","Ha Ha Ha Ha","Eventually","Never","Maybe"];
let randomAnswer;


function answerShallProvide() {
    inputQuestion.value = "";
    let randomIndex = Math.round(Math.random()* (answerArray.length - 1));
    document.getElementById("oracleBubble").classList.remove("oracleBubbleOpacity");
    randomOutput.innerHTML = answerArray[randomIndex];
    inputQuestion.readOnly = true
    inputQuestion.disabled = true
    console.log(randomIndex);
    setTimeout(function() {
        inputQuestion.readOnly = false
        inputQuestion.disabled = false
        document.getElementById("oracleBubble").classList.add("oracleBubbleOpacity");
    }, 1500);
}