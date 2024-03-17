const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';

let gameOver = false;

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = currentPlayer;
            cell.classList.add(currentPlayer);

            if (checkWinner(currentPlayer)) {
                alert(`${currentPlayer} wins!`);
                gameOver = true;
            } else if ([...cells].every((cell) => cell.textContent !== '')) {
                alert('It\'s a draw!');
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombos.some((combo) => {
        return combo.every((index) => cells[index].classList.contains(player));
    });
}