const board = document.getElementById("output");

showBoard()
function showBoard() {
    board.innerHTML =
        piecesRow('light', 'dark', 'black',)
        + pawnRow('dark', 'light', 'black')
        + blankWhiteRow()
        + blankDarkRow()
        + blankWhiteRow()
        + blankDarkRow()
        + pawnRow('light', 'dark', 'white')
        + piecesRow('dark', 'light', 'white',)
        ;

}

function piecesRow(color1, color2, pieceColor) {
    return `
        <div class="${color1}Square ${pieceColor}Piece">♜</div>
        <div class="${color2}Square ${pieceColor}Piece">♞</div>
        <div class="${color1}Square ${pieceColor}Piece">♝</div>
        <div class="${color2}Square ${pieceColor}Piece">♛</div>
        <div class="${color1}Square ${pieceColor}Piece">♚</div>
        <div class="${color2}Square ${pieceColor}Piece">♝</div>
        <div class="${color1}Square ${pieceColor}Piece">♞</div>
        <div class="${color2}Square ${pieceColor}Piece">♜</div>  
    `;
}

function pawnRow(color1, color2, pawnColor) {
    return `            
        <div class="${color1}Square ${pawnColor}Piece">♟</div>
        <div class="${color2}Square ${pawnColor}Piece">♟</div>
        <div class="${color1}Square ${pawnColor}Piece">♟</div>
        <div class="${color2}Square ${pawnColor}Piece">♟</div>
        <div class="${color1}Square ${pawnColor}Piece">♟</div>
        <div class="${color2}Square ${pawnColor}Piece">♟</div>
        <div class="${color1}Square ${pawnColor}Piece">♟</div>
        <div class="${color2}Square ${pawnColor}Piece">♟</div>            
    `;
}

function blankDarkRow() {
    return blankRow('dark', 'light');
}

function blankWhiteRow() {
    return blankRow('light', 'dark');
}

function blankRow(color1, color2) {
    return createBlankSquare(color1)
        + createBlankSquare(color2)
        + createBlankSquare(color1)
        + createBlankSquare(color2)
        + createBlankSquare(color1)
        + createBlankSquare(color2)
        + createBlankSquare(color1)
        + createBlankSquare(color2);
}

function createBlankSquare(color) {
    return createSquare(color, '');
}

function createSquare(color, content) {
    return `<div class="${color}Square">${content}</div>`;
}   