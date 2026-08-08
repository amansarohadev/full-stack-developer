let score = 0;
let balls = 300;
let scoreDiv = document.getElementById('score');
let ballsDiv = document.getElementById('balls');

function one() {
    score += 1;
    balls -= 1;
    scoreDiv.textContent = score;
    ballsDiv.textContent = balls;
}

function four() {
    score += 4;
    balls -= 1;
    scoreDiv.textContent = score;
    ballsDiv.textContent = balls;
}

function six() {
    score += 6;
    balls -= 1;
    scoreDiv.textContent = score;
    ballsDiv.textContent = balls;
}

function resetScore() {
    score = 0;
    balls = 300;
    scoreDiv.textContent = score;
    ballsDiv.textContent = balls;
}