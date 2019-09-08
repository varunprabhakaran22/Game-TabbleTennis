let canvas;
let canvasContext;
let ballPositionX = 50;
let ballSpeedX = 10;

window.onload=function () {
    canvas = document.getElementById('game');
    canvasContext=canvas.getContext('2d');
}

function ballMovement() {
    ballPositionX = ballPositionX + ballSpeedX;
    if(ballPositionX > canvas.width){
        ballSpeedX = -ballSpeedX
    }