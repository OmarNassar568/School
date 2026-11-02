let nextPlayer = 'X';
    // Wait until the document loads, this didn't work for me when I did not have this
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('next-lbl').innerText = nextPlayer;
    createGameBoard();
});

function createGameBoard() {
    // Programmatically add a button to each cell c1 through c9
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById('c' + i);
        if (cell) {
            let button = document.createElement('button');
            button.innerText = '[ ]';
            button.addEventListener('click', function(event) {
                takeCell(event);
            });
            cell.appendChild(button);
        }
    }
}

function takeCell(event) {
    let clickedBtn = event.target;
    clickedBtn.innerText = `[${nextPlayer}]`;
    clickedBtn.disabled = true;

    // Switch player turn and update label
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if game is over and display message
    if (isGameOver()) {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver() {
    // Return true if all buttons are disabled
    let btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) {
            return false;
        }
    }
    return true;
}