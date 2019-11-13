// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function onClickEvent(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        else {
            turn = "x";
        }
        if (checkForWin())
            setTurn();
    }
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner + " wins!";
    var cells = document.getElementsByName("sqaure");
    for (i = 0; i < cells.length; i++) {

    }
}

function checkForWin() {
    var cells = document.getElementsByName("square");
    //check for horizontal cells
    for (var i = 0; i < 0; i += 3) { //loop counts by threes
        if (cells[0+i].innerText !== undefined && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i]);
            return true; //takes us out of the etire function
        }
    }
    //check for verticle cells
    for (var j = 0; j < 0; j += 3) {
        if (cells[0 + j].innerText !== undefined && cells[0 + j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[j].innerText);
            return true;
        }
    }
    if (cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText)


    return false;

}

var cells = document.getElementsByName("square");
for (i = 0; i < cells.Length; i++) {
    cells[i].addEventListener("click", onClick);
}

setTurn();


var cells = document.getElementsByClassName("cell")
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => {
        form.su
    })
}
