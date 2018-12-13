

let gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
let revBoard = ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
let x = 0;

function Render(ID) {
    if (ID == 'A1') {
        const A1 = document.getElementById('A1');
        if (gameBoard[x] == 'X') {
            A1.style.color = 'Red';
        } else {
            A1.style.color = 'Blue';
        }
        A1.innerHTML = gameBoard[x];
        A1.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'A2') {
        const A2 = document.getElementById('A2');
        if (gameBoard[x] == 'X') {
            A2.style.color = 'Red';
        } else {
            A2.style.color = 'Blue';
        }
        A2.innerHTML = gameBoard[x];
        A2.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'A3') {
        const A3 = document.getElementById('A3');
        if (gameBoard[x] == 'X') {
            A3.style.color = 'Red';
        } else {
            A3.style.color = 'Blue';
        }
        A3.innerHTML = gameBoard[x];
        A3.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'B1') {
        const B1 = document.getElementById('B1');
        if (gameBoard[x] == 'X') {
            B1.style.color = 'Red';
        } else {
            B1.style.color = 'Blue';
        }
        B1.innerHTML = gameBoard[x];
        B1.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'B2') {
        const B2 = document.getElementById('B2');
        if (gameBoard[x] == 'X') {
            B2.style.color = 'Red';
        } else {
            B2.style.color = 'Blue';
        }
        B2.innerHTML = gameBoard[x];
        B2.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'B3') {
        const B3 = document.getElementById('B3');
        if (gameBoard[x] == 'X') {
            B3.style.color = 'Red';
        } else {
            B3.style.color = 'Blue';
        }
        B3.innerHTML = gameBoard[x];
        B3.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'C1') {
        const C1 = document.getElementById('C1');
        if (gameBoard[x] == 'X') {
            C1.style.color = 'Red';
        } else {
            C1.style.color = 'Blue';
        }
        C1.innerHTML = gameBoard[x];
        C1.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'C2') {
        const C2 = document.getElementById('C2');
        if (gameBoard[x] == 'X') {
            C2.style.color = 'Red';
        } else {
            C2.style.color = 'Blue';
        }
        C2.innerHTML = gameBoard[x];
        C2.disabled = true;
        checkWinner(gameBoard[x]);
    }
    if (ID == 'C3') {
        const C3 = document.getElementById('C3');
        if (gameBoard[x] == 'X') {
            C3.style.color = 'Red';
        } else {
            C3.style.color = 'Blue';
        }
        C3.innerHTML = gameBoard[x];
        C3.disabled = true;
        checkWinner(gameBoard[x]);
    }
}

function inputDisable() {
    let wholeDiv = document.getElementById('test');
    let allButtons = wholeDiv.getElementsByTagName('button');

    for (y = 0; y < allButtons.length; y++) {
        allButtons[y].disabled = true;
    }
}

function inputEnable() {
    let wholeDiv = document.getElementById('test');
    let allButtons = wholeDiv.getElementsByTagName('button');

    for (y = 0; y < allButtons.length; y++) {
        allButtons[y].disabled = false;
    }
}

function checkWinner(Player) {
    const A1 = document.getElementById('A1').innerHTML;
    const A2 = document.getElementById('A2').innerHTML;
    const A3 = document.getElementById('A3').innerHTML;
    const B1 = document.getElementById('B1').innerHTML;
    const B2 = document.getElementById('B2').innerHTML;
    const B3 = document.getElementById('B3').innerHTML;
    const C1 = document.getElementById('C1').innerHTML;
    const C2 = document.getElementById('C2').innerHTML;
    const C3 = document.getElementById('C3').innerHTML;
    x++;

    if (A1 == Player && A2 == Player && A3 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (B1 == Player && B2 == Player && B3 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (C1 == Player && C2 == Player && C3 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (A1 == Player && B2 == Player && C3 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (A1 == Player && B1 == Player && C1 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (A2 == Player && B2 == Player && C2 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (A3 == Player && B3 == Player && C3 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (A3 == Player && B2 == Player && C1 == Player) {
        document.getElementById('results').innerHTML = 'Congrats, ' + Player + ' has won!';
        inputDisable();
    }
    if (x == 9) {
        document.getElementById('results').innerHTML = 'Tie game!';
        inputDisable();
    }


}

function resetGame() {
    document.getElementById('A1').innerHTML = "";
    document.getElementById('A2').innerHTML = "";
    document.getElementById('A3').innerHTML = "";
    document.getElementById('B1').innerHTML = "";
    document.getElementById('B2').innerHTML = "";
    document.getElementById('B3').innerHTML = "";
    document.getElementById('C1').innerHTML = "";
    document.getElementById('C2').innerHTML = "";
    document.getElementById('C3').innerHTML = "";
    document.getElementById('results').innerHTML = '';

    let wholeDiv = document.getElementById('test');
    let allButtons = wholeDiv.getElementsByTagName('button');

    for (y = 0; y < allButtons.length; y++) {
        allButtons[y].disabled = false;
    }
    x = 0;
}



