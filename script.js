
let canvas;
let canvasContext;
let ballPositionX = 50;
let ballSpeedX = 10;
let ballPositionY=50
let ballSpeedY=4;
let paddle1=250;
const PADDLE_HEIGHT=100;

window.onload=function () {
    canvas = document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    let Speed = 30;
    setInterval(function callBoth() {
        ballMovement();
        drawcanvas();
        
    },1000/Speed)


    canvas.addEventListener('mousemove',function(x){
        let mouPosition=mousePosition(x)
        paddle1=mouPosition.y;
    })

}
function ballMovement() {
    ballPositionX = ballPositionX + ballSpeedX;
    if(ballPositionX > canvas.width){
        ballSpeedX = -ballSpeedX
    }
    if(ballPositionX < 0){

        //ballSpeedX = -ballSpeedX
        reset();
    }


    ballPositionY = ballPositionY+ ballSpeedY;
    if(ballPositionY > canvas.height){
        ballSpeedY = -ballSpeedY
    }
    if(ballPositionY < 0){
        ballSpeedY = -ballSpeedY
    }
    
}
 function drawElement(x,y,w,h,color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
 }

function drawcanvas () {
    
    canvasContext.fillStyle='black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    drawElement(10,paddle1,10,100,'white');
    drawElement(ballPositionX,ballPositionY,10,10,'red');
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

function reset(){
    ballPositionX=canvas.width/2
    ballPositionY=canvas.height/2
}
