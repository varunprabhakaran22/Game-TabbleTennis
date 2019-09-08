// declaring the required variables
let canvas;
let canvasContext;
let ballPositionX = 50;
let ballSpeedX = 20;
let ballPositionY=50
let ballSpeedY=10;
let paddle1=250;
let paddle2=250;
let playerScore=0
let computerScore=0
let paddleThickness=10;
const PADDLE_HEIGHT=100;
 
window.onload=function () {
    canvas = document.getElementById('game');
    canvasContext=canvas.getContext('2d');
    // setting the speed of the ball
    let Speed = 30;
    setInterval(function callBoth() {
        //calling the functions 
        ballMovement();
        drawcanvas();
        // setting the time to call the functions
    },1000/Speed)

    //event listener to detect the position of the mouse
    canvas.addEventListener('mousemove',function(x){
        let mouPosition=mousePosition(x)
        //getting the value of the mouse
        paddle1=mouPosition.y;
        paddle2=mouPosition.y;
    })

}
  //changing the ball position (X,Y) 
function ballMovement() {
    ballPositionX = ballPositionX + ballSpeedX;
    if(ballPositionX > canvas.width){
        if((ballPositionY>paddle2)&&(ballPositionY<paddle2+PADDLE_HEIGHT)){
            ballSpeedX = -ballSpeedX
            playerScore++
        }
            else{
                reset();
                computerScore++
                
            }
        
    }
    if(ballPositionX < 0){
        if((ballPositionY>paddle1)&&(ballPositionY<paddle1+PADDLE_HEIGHT)){
        ballSpeedX = -ballSpeedX
        playerScore++
    }
        else{
            reset();
            computerScore++
        }
        
    }


    ballPositionY = ballPositionY+ ballSpeedY;
    if(ballPositionY > canvas.height){
        ballSpeedY = -ballSpeedY
    }
    if(ballPositionY < 0){
        ballSpeedY = -ballSpeedY
    }
    
}

//function to draw in canvas
 function drawElement(x,y,w,h,color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,w,h);
 }

 // function to draw elements in canvas
function drawcanvas () {
    
    canvasContext.fillStyle='black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    drawElement(10,paddle1,paddleThickness,100,'white');
    drawElement(canvas.width-paddleThickness,paddle2,paddleThickness,100,'white');
    drawElement(ballPositionX,ballPositionY,10,10,'white');
    canvasContext.fillStyle='#ffffff'
    canvasContext.font='38px'
    canvasContext.fillText("playerScore",100,80)
    canvasContext.fillText(playerScore,100,100)
    canvasContext.fillText("ComputerScore",canvas.width-200,80)
    canvasContext.fillText(computerScore,canvas.width-200,100)
}


//getting the position of the mouse point values based on inbuildd function
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
//reset function to reset the ball to center
function reset(){
    ballPositionX=canvas.width/2
    ballPositionY=canvas.height/2
    ballSpeedX = -ballSpeedX;
}
