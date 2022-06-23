var canvas = document.getElementById('gameCanvas');

var ctx = canvas.getContext('2d'); 

document.addEventListener("keydown",keyDownHandler);


var ballRadius=10;

var paddleWidth = 70;
var paddleHeight = 15;
var paddleX = (canvas.width-paddleWidth)/2;
var leftPressed = false;
var rightPressed = false;

//setInterval구현

setInterval( draw , 10 )

var x = canvas.width/2;

var y = canvas.height-30;

var dx = -3;

var dy = -3; 

 

function drawBall( ){ 



     ctx.beginPath( );

     ctx.arc( x , y , ballRadius , 0, Math.PI * 2 );

     ctx.fillStyle = 'tomato';

     ctx.fill( );

     ctx.closePath( );

}

function drawPaddle() {
     ctx.beginPath();
     ctx.rect( paddleX, canvas.height-paddleHeight , paddleWidth, paddleHeight );
     ctx.fillStyle = 'blue';
     ctx.fill();
     ctx.closePath();
}

function draw( ) {

     ctx.clearRect( 0 , 0 , canvas.width , canvas.height );
     drawBall( );
     drawPaddle();

     if ( y + dy < ballRadius || y + dy > canvas.height - ballRadius ) {

        dy = -dy;

    }else if( x + dx < ballRadius || x + dx > canvas.width - ballRadius ) {

                dx = -dx;

    }
    if(leftPressed && paddleX > 0) {
        paddleX -= 5;
    }else if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    }

     x += dx;

     y += dy;

}

function keyDownHandler(e) {

    if(e.keyCode == 39) {
        rightPressed = true;
        leftPressed = false;
    }else if(e.keyCode == 37) {
        leftPressed = true;
        rightPressed = false;
    }
}
