let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;

// Initialize all boxes
boxes.forEach(box => {
box.innerHTML = "";
box.addEventListener("click", () => {
if (!isGameOver && box.textContent === "") {
box.textContent = turn;
checkWin();
checkDraw();
if (!isGameOver) changeTurn();
}
});
});

function changeTurn() {
turn = turn === "X" ? "O" : "X";
document.querySelector(".bg").style.left = turn === "X" ? "0" : "85px";
}

function checkWin() {
const winConditions = [
[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
];

winConditions.forEach(condition => {
const [a, b, c] = condition;
const valA = boxes[a].textContent;
const valB = boxes[b].textContent;
const valC = boxes[c].textContent;

if (valA !== "" && valA === valB && valA === valC) {
isGameOver = true;
document.querySelector("#results").textContent = `${turn} wins`;
document.querySelector("#play-again").style.display = "inline";

[a, b, c].forEach(i => {
boxes[i].style.backgroundColor = "#08D9D6";
boxes[i].style.color = "#000";
});
}
});
}

function checkDraw() {
if (!isGameOver) {
const isDraw = Array.from(boxes).every(box => box.textContent !== "");
if (isDraw) {
isGameOver = true
document.querySelector("#results").textContent = "Draw";
document.querySelector("#play-again").style.display = "inline";
}
}
}

document.querySelector("#play-again").addEventListener("click", () => {
isGameOver = false;
turn = "X";
document.querySelector(".bg").style.left = "0";
document.querySelector("#results").textContent = "";
document.querySelector("#play-again").style.display = "none";
boxes.forEach(box => {
box.textContent = "";
box.style.removeProperty("background-color");
box.style.color = "#fff";
});
});
