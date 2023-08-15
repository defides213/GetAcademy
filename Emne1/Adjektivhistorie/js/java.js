const output1 = document.getElementById("outputStory1");
const output2 = document.getElementById("outputStory2");
const output3 = document.getElementById("outputStory3");
const output4 = document.getElementById("outputStory4");
let word_1 = "___";
let word_2 = "___";
let word_3 = "___";
let word_4 = "___";
buildStoryfunction();
// buildStory();

// function buildStory() {
//     output.innerHTML = `Once upon a time there was a ${word_1} 
//     that didn't have a great time along with the other ${word_2}.
//     he used to enjoy ${word_3} a lot, however that all changed after the
//     ${word_4}
//     `;
// }

function firstWordChoice(choice) {
    word_1 = choice.innerHTML;
    buildStoryfunction();
}

function secondWordChoice(choice) {
    word_2 = choice.innerHTML;
    buildStoryfunction();
}

function thirdWordChoice(choice) {
    word_3 = choice.innerHTML;
    buildStoryfunction();
}

function fourthWordChoice(choice) {
    word_4 = choice.innerHTML;
    buildStoryfunction();
}

let array = [];
array.push(word_1, word_2, word_3, word_4);

function buildStoryfunction() {
    output1.innerHTML = `Once upon a time there was a ${word_1}`;
    if(word_1 === "Cockroach" || word_1 === "Mantaray") {
        output2.innerHTML = `that didn't have a great time along with the other ${word_2}. `;
        if(word_2 === "Humans" || word_2 === "Crabs") {
            output3.innerHTML = `he used to enjoy ${word_3} a lot,`; 
            if(word_3 === "Backflips" || word_3 === "Moonwalks") {
                output4.innerHTML = `however that all changed after the ${word_4}`;
                if(word_4 === "Purge" || word_4 === "Fall") {
                    overlayComplete();
                }
            }
        }
    }
}

function overlayComplete() {
    document.getElementById("overlayID").style.display = "block";
    document.getElementById("overlayCompleteStory").innerHTML = `Once upon a time there was a ${word_1} that didn't have a great time 
    along with the other ${word_2}.
    he used to enjoy ${word_3} a lot, however that all changed after the
    ${word_4}`;
}

function resetStory() {
    location.reload();
}