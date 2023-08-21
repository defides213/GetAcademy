function playSounds(selectedSound) {
    changeAudioFile(selectedSound);
    document.getElementById("audio-mixer").play();
}

function changeAudioFile(file) {
    document.getElementById("audio-mixer").src = file;
}