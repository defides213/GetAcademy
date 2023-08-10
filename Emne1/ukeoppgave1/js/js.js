
function changecolor(color) {
    document.body.style.backgroundColor = color;
}

function showHobbies() {
    document.getElementById("list-hobbies").innerHTML = `
    Gaming <br>
    3D modeling <br>
    Programming <br>
    Jogging <br>
    `;
}
function closeHobbies() {
    document.getElementById("list-hobbies").innerHTML = ``;
}