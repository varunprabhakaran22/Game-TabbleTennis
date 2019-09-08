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
}


function drawcanvas () {
    
    canvasContext.fillStyle='black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    drawElement(10,paddle1,10,100,'white');
    drawElement(ballPositionX,ballPositionY,10,10,'red');
}