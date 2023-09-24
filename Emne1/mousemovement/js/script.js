const flashlight = document.getElementById("flashlight");
const pages = document.getElementById("page");
const background = document.getElementById("backgroundImg");

let coordsX;
let coordsY;  
document.getElementById("gameboard").addEventListener("mousemove", function(event) {
    console.log(event)
    coordsY = event.clientY - 210;
    coordsX = event.clientX - 360;
    document.getElementById("flashlight").style.top = coordsY + "px";
    document.getElementById("flashlight").style.left = coordsX + "px";
    pageAppear();
})

let currentPage = 0;
let pagesFoundPoints = 0;
function pageAppear() {
    if(verifyPage(0, 113, 163, 30, 90) || 
    verifyPage(1, 580, 620, 100, 130) ||
    verifyPage(2, 980, 1020, 490, 530) ||
    verifyPage(3, 1180, 1220, 540, 570) ||
    verifyPage(4, 1180, 1220, 100, 130) ||
    verifyPage(5, 180, 220, 550, 570) ||
    verifyPage(6, 520, 560, 200, 230) ||
    verifyPage(7, 200, 220, 190, 210)
    ) {
        showPages()  
    }
}

function verifyPage(page, minX, maxX, minY, maxY) {
    return currentPage === page && coordsX >= minX && coordsX <= maxX && coordsY >= minY && coordsY <= maxY;
}

function showPages() {
    pages.style.display = "block";
    pages.style.opacity = "5%";
}

function clickPage() {
    currentPage++;
    pagesFoundPoints++;
    updatePoints();
    pages.style.opacity = "0%";
    switch(currentPage) {
        case 1:
        movePage(600, 120);
        break;
        case 2:
        movePage(1000, 500);
        break;
        case 3:
        movePage(1200, 550);
        break;
        case 4:
        movePage(1200, 120);
        break;
        case 5:
        movePage(200, 560);
        break;
        case 6:
        movePage(540, 220);
        break;
        case 7:
        movePage(210, 200);
        break;
    }
    if(currentPage === 8) {
        document.getElementById("overlayW").style.display = "block";
    }
}

function movePage(X, Y) {
    pages.style.top = Y + "px";
    pages.style.left = X + "px";
}


function updatePoints() {
    document.getElementById("pagesFound").innerHTML = `📜Pages Found: ${pagesFoundPoints}`
}

function restartGame() {
    currentPage = 0; 
    pages.style.top = 60 + "px";
    pages.style.left = 143 + "px";
    pagesFoundPoints = 0;
    document.getElementById("overlayW").style.display = "none";
    updatePoints()
}