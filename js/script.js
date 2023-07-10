//Balloon POP Typing Game

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var gameCanvas = document.querySelector('#gameCanvas');
var gameCtx = gameCanvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var gameWidth = gameCanvas.width = window.innerWidth;
var gameHeight = gameCanvas.height = window.innerHeight;

var popImage = document.getElementById('popImage');

// Starting step
var pg = 0;
var totalPg = 100;

var updatePgBar = () => {

    var loader = () => {
        var loaderImg = new Image();
        loaderImg.src = "./img/Loaderimg.png";
        loaderImg.onload = function () {
            ctx.drawImage(loaderImg, 0, 0, canvas.width, canvas.height);
        };
    };
    // Function Invoking
    loader();

    // Calculate the progress bar width
    const pgWidth = (pg / totalPg / 3) * canvas.width;

    // Draw the progress bar
    ctx.fillStyle = "blue";
    ctx.fillRect(width / 3.30, height / 1.76, pgWidth, 19);

    //Progress to compvare
    if (pg >= totalPg) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Loading screen Image
        const backgroundImage = new Image();
        backgroundImage.src = './img/bg5.jpg';
        backgroundImage.onload = function () {
            // Draw the background image on the canvas
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        };

        var image = new Image();
        image.src = './img/cloud.png';
        var x = 0;
        var y = 0;

        function animate() {
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, x, y, 400, 170);
            ctx.drawImage(image, x + 340, y - 10, 350, 140);
            ctx.drawImage(image, x + 700, y + 5, 400, 170);
            ctx.drawImage(image, x + 1010, y, 170, 100);
            ctx.drawImage(image, x + 1160, y + 5, 300, 170);
            ctx.drawImage(image, x + 1380, y - 15, 250, 120);
            x += 1;
            if (x > canvas.width) {
                x = -image.width;
            };
            drawButton();
            requestAnimationFrame(animate);

        };
        animate();
        var backgroundAudio = document.getElementById('backgroundAudio')
        backgroundAudio.play();
    };
};

// Start the game and update the progress bar
function startGame() {
    // Simulate the progress increment
    const increment = 4;
    const interval = setInterval(() => {
        // Increase the progress
        pg += increment;

        // Update the progress bar and main screen
        updatePgBar();
        // Check if the progress is compvare
        if (pg >= totalPg) {
            // Game is compvare, stop the interval
            clearInterval(interval);
        }
    }, 250); // Duration
}
startGame();

var image = new Image();
image.src = "./img/bg5.jpg";
image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

var buttonX = width / 2.7; // starting position of button from left
var buttonY = height / 1.25; // starting position of button from top
var buttonWidth = 440; // Width of the button
var buttonHeight = 130; // Height of the button

image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

function drawButton() {
    //T
    var imageA1 = new Image();
    imageA1.src = "./img/T.png";
    ctx.drawImage(imageA1, width - width / 1.4, height - height / 1.1, 100, 200);
    // Y
    var imageA1 = new Image();
    imageA1.src = "./img/Y.png";
    ctx.drawImage(imageA1, width - width / 1.55, height - height / 1.1, 100, 200);
    // P
    var imageA1 = new Image();
    imageA1.src = "./img/P.png";
    ctx.drawImage(imageA1, width - width / 1.74, height - height / 1.1, 100, 200);
    // I
    var imageA1 = new Image();
    imageA1.src = "./img/I.png";
    ctx.drawImage(imageA1, width - width / 1.98, height - height / 1.1, 100, 200);
    // N
    var imageA1 = new Image();
    imageA1.src = "./img/N.png";
    ctx.drawImage(imageA1, width - width / 2.3, height - height / 1.1, 100, 200);
    // G
    var imageA1 = new Image();
    imageA1.src = "./img/G.png";
    ctx.drawImage(imageA1, width - width / 2.75, height - height / 1.1, 100, 200);
    // B
    var imageA1 = new Image();
    imageA1.src = "./img/B.png";
    ctx.drawImage(imageA1, width / 4, height / 3, 100, 200);
    // A
    var imageA1 = new Image();
    imageA1.src = "./img/A.png";
    ctx.drawImage(imageA1, width / 3.1, height / 3, 100, 200);
    // L
    var imageA1 = new Image();
    imageA1.src = "./img/L.png";
    ctx.drawImage(imageA1, width / 2.55, height / 3, 100, 200);
    // L
    var imageA1 = new Image();
    imageA1.src = "./img/L1.png";
    ctx.drawImage(imageA1, width / 2.16, height / 3, 100, 200);
    // O
    var imageA1 = new Image();
    imageA1.src = "./img/O.png";
    ctx.drawImage(imageA1, width / 1.87, height / 3, 100, 200);
    // O
    var imageA1 = new Image();
    imageA1.src = "./img/O1.png";
    ctx.drawImage(imageA1, width / 1.65, height / 3, 100, 200);
    // N
    var imageA1 = new Image();
    imageA1.src = "./img/N.png";
    ctx.drawImage(imageA1, width / 1.48, height / 3, 100, 200);


    ctx.fillStyle = "rgba(240, 240, 240, 0.0)"; // Button background color
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    ctx.font = "80px Berlin Sans FB";
    ctx.strokeStyle = "#36ADE8";
    ctx.lineWidth = 10;
    ctx.strokeText("StartGame", buttonX + 9, buttonY + buttonHeight / 2 + 6);
    ctx.fillStyle = "white";
    ctx.fillText("StartGame", buttonX + 9, buttonY + buttonHeight / 2 + 6);
}

canvas.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
    if (
        mouseX > buttonX &&
        mouseX < buttonX + buttonWidth &&
        mouseY > buttonY &&
        mouseY < buttonY + buttonHeight
    ) {

        // Load the background image
        const backgroundImage = new Image();
        backgroundImage.src = './img/bg5.jpg';
        backgroundImage.onload = function () {            
        };
        //New


        // Balloon variables
        var balloons = [];
        var balloonImages = ['./img/balloon1.png', './img/balloon2.png', './img/balloon3.png', './img/balloon4.png', './img/balloon5.png', './img/balloon6.png', './img/balloon7.png'];

        // Game Score variables
        var score = 0;
        var balloonsPassed = 0;

        // Add event listener for key presses
        document.addEventListener('keydown', keyDownHandler, false);

        // Create a balloon object
        function createBalloon() {
            var balloon = {
                x: Math.random() * (gameCanvas.width - 50),
                y: gameCanvas.height,
                image: getRandomBalloonImage(),
                text: getRandomvarter()
            };
            balloons.push(balloon);
        }

        // Generate a random varter
        function getRandomvarter() {
            var varters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return varters[Math.floor(Math.random() * varters.length)];
        }

        // Get a random balloon image URL
        function getRandomBalloonImage() {
            return balloonImages[Math.floor(Math.random() * balloonImages.length)];
        }

        // Check if the typed varter matches the balloon varter
        function checkvarter(varter) {
            for (var i = 0; i < balloons.length; i++) {
                if (balloons[i].text === varter) {
                    // Show the pop image at the balloon's position
                    showPopImage(balloons[i].x, balloons[i].y);
                    balloons.splice(i, 1);
                    score++;
                    return true;
                }
            }
            return false;
        }

        // Show the pop image at the given position
        function showPopImage(x, y) {
            // Position the pop image at the balloon's location
            popImage.style.position = 'absolute';
            popImage.style.transform = `translate(${x}px, ${y}px)`;

            // Make the pop image visible
            popImage.style.visibility = 'visible';

            // Hide the pop image after 500 milliseconds
            setTimeout(function () {
                popImage.style.visibility = 'hidden';
            }, 500);
        }

        // Handle key down events
        function keyDownHandler(event) {
            var varter = String.fromCharCode(event.keyCode);
            if (checkvarter(varter)) {
                console.log('Pop!');
            }
        }
        //new

        function gameLoop() {
            canvas.style.display = 'none';
            gameCanvas.style.display = 'block';
            // Render the background image
            gameCtx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            //new
            // Move and draw balloons
            for (var i = 0; i < balloons.length; i++) {
                var balloon = balloons[i];
                balloon.y -= 2;

                // Draw the balloon image
                var balloonImage = new Image();
                balloonImage.src = balloon.image;
                gameCtx.drawImage(balloonImage, balloon.x - 42, balloon.y - 70, 85, 190);

                //new
                // Draw the varter inside the balloon
                gameCtx.font = 'bold 30px Arial'; // Set font style and size
                gameCtx.fillStyle = 'white'; // Set text color
                gameCtx.strokeStyle = 'black'; // Set text stroke color
                gameCtx.lineWidth = 1.5; // Set stroke width
                gameCtx.textAlign = 'center';
                gameCtx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // Set shadow color
                gameCtx.shadowBlur = 4; // Set shadow blur radius
                gameCtx.shadowOffsetX = 2; // Set shadow offset along X-axis
                gameCtx.shadowOffsetY = 2; // Set shadow offset along Y-axis
                gameCtx.fillText(balloon.text, balloon.x, balloon.y - 15);
                gameCtx.strokeText(balloon.text, balloon.x, balloon.y - 15);

                // Check if ten balloons have passed
                if (balloonsPassed >= 10) {
                    // Stop the game or perform any other actions
                    console.log('Game Over');
                    Swal.fire(
                        'Game Over',
                        'Your Score is ' + score + '<br> <h1>Thank You Anil Sir</h1>',
                        'success'
                    );
                    return; // Exit the update function
                }

                // Check if balloon has reached the top of the screen
                if (balloon.y < 0) {
                    balloons.splice(i, 1);
                    console.log('Missed!');
                    balloonsPassed++;
                }

            }
            // Display the score
            gameCtx.font = '30px Arial';
            gameCtx.fillStyle = 'black';
            gameCtx.textAlign = 'left';
            gameCtx.fillText('Score: ' + score, 10, 30);

            // Create new balloons every second
            if (Math.random() < 0.02) {
                createBalloon();
            }
            requestAnimationFrame(gameLoop);

        }
        gameLoop();

    }
}
);  