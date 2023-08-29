let svar = '';
let theNumber = 1 + Math.floor(Math.random() * 100);
let answeredNumber = '';
let previousAnswer = '';
let points = 0;


updateInfo()
function enterPress(event) {
    let writtenNumberStorage;
    if(event.keyCode === 13) {
        writtenNumberStorage = document.getElementById("messages").value;
        document.getElementById("messages").value = '';
        checkNumber(writtenNumberStorage)
    }
}

function checkNumber() {
    previousAnswer = svar + '.';
    if(svar == theNumber){
        
        answeredNumber = 'You guessed: '+ svar + ' That was correct'
        points ++;
        theNumber = 1 + Math.floor(Math.random() * 10);
        previousAnswer = '';
    }
    else{
        if(svar < theNumber){
            answeredNumber = 'You guessed too low. Try again'
            
        }
        else answeredNumber = 'You guessed too high. Try again'
    }

    updateInfo()

}

function updateInfo() {
    document.getElementById("points").innerHTML = `${points}`;
    document.getElementById("lowHigh").innerHTML = `
        <div>${answeredNumber}</div>
        `;
    document.getElementById("info").innerHTML = `
    <div>Previous Guess: ${previousAnswer}</div>
    `;
}