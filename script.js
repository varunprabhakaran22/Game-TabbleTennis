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
    
    ballPositionY = ballPositionY+ ballSpeedY;
    if(ballPositionY > canvas.height){
        ballSpeedY = -ballSpeedY
    }
    if(ballPositionY < 0){
        ballSpeedY = -ballSpeedY
    }
}


function drawcanvas () {
    
    canvasContext.fillStyle='black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    drawElement(10,paddle1,10,100,'white');
    drawElement(ballPositionX,ballPositionY,10,10,'red');
}


function drawElement(x,y,w,h,color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
 }


 
function mousePosition(x){
    let can=canvas.getBoundingClientRect();
    let root=document.documentElement;
    let movX=x.clientX-can.left-root.scrollLeft;
    let movY=x.clientY-can.top-root.scrollTop;
    return {
        X:movX,
        y:movY
    }
}


