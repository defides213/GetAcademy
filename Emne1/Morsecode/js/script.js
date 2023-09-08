const inputText = document.getElementById("textInput");

const alphabetArray = "abcdefghijklmnopqrstuvwxyz ";
const morseCodeArray =  [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '/',];
let fromInput = " ";
let translatedToMorse = " ";

function translator(fromInput) {
    fromInput = inputText.value.toUpperCase();

    for(letter of inputText.value) {
        let singleLetter = letter;
        let letterINdex = alphabetArray.indexOf(singleLetter);
        translatedToMorse += morseCodeArray[letterINdex] + " ";
    }

    document.getElementById("tranlationBox").innerHTML = `${translatedToMorse}`;

    translatedToMorse = "/";
}