// ===============================
// Floating Hearts ❤️
// ===============================

const floatingHearts = document.getElementById("floating-hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (6 + Math.random() * 3) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart,350);


// ===============================
// Floating Balloons 🎈
// ===============================

const balloonContainer =
document.getElementById("floating-balloons");

const colors = ["red","pink","white"];

function createBalloon(){

    const balloon =
    document.createElement("div");

    balloon.className =
    "balloon " +
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.left =
    Math.random()*100 + "%";

    balloon.style.animationDuration =
    (8 + Math.random()*5) + "s";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },13000);

}

setInterval(createBalloon,1800);


// ===============================
// Sparkles ✨
// ===============================

const sparkleContainer =
document.getElementById("sparkles");

for(let i=0;i<35;i++){

    const sparkle =
    document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
    Math.random()*100 + "%";

    sparkle.style.top =
    Math.random()*100 + "%";

    sparkle.style.animationDelay =
    Math.random()*3 + "s";

    sparkleContainer.appendChild(sparkle);

}


// ===============================
// Game Elements
// ===============================

const gameArea =
document.getElementById("gameArea");

const player =
document.getElementById("player");

const heartContainer =
document.getElementById("heartContainer");


// ===============================
// Mouse Control 🧸
// ===============================

gameArea.addEventListener("mousemove",(e)=>{

    const rect =
    gameArea.getBoundingClientRect();

    let x =
    e.clientX - rect.left;

    x =
    Math.max(40,
    Math.min(rect.width-40,x));

    player.style.left = x + "px";

});


// ===============================
// Mobile Touch Control 📱
// ===============================

gameArea.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    const rect =
    gameArea.getBoundingClientRect();

    let x =
    e.touches[0].clientX - rect.left;

    x =
    Math.max(40,
    Math.min(rect.width-40,x));

    player.style.left = x + "px";

},{passive:false});


// ===============================
// Falling Hearts ❤️
// ===============================

function createFallingHeart(){

    const heart =
    document.createElement("div");

    heart.className =
    "falling-heart";

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random()*95 + "%";

    heart.style.animationDuration =
    (2.5 + Math.random()) + "s";

    heartContainer.appendChild(heart);

}

setInterval(createFallingHeart,900);
// ===============================
// Score & Timer
// ===============================

const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const winBox = document.getElementById("winBox");
const nextBtn = document.getElementById("nextBtn");

let score = 0;
let timeLeft = 30;
let gameOver = false;

// ===============================
// Collision Detection
// ===============================

function checkCollision(){

    if(gameOver) return;

    const playerRect =
    player.getBoundingClientRect();

    const hearts =
    document.querySelectorAll(".falling-heart");

    hearts.forEach((heart)=>{

        const heartRect =
        heart.getBoundingClientRect();

        if(

            playerRect.left < heartRect.right &&
            playerRect.right > heartRect.left &&
            playerRect.top < heartRect.bottom &&
            playerRect.bottom > heartRect.top

        ){

            heart.remove();

            score++;

            scoreText.innerHTML = score;

            // Win

            if(score >= 5){

                gameOver = true;

                clearInterval(timerInterval);

                winBox.classList.add("show");

            }

        }

    });

}

setInterval(checkCollision,40);


// ===============================
// Remove Missed Hearts
// ===============================

setInterval(()=>{

    if(gameOver) return;

    document
    .querySelectorAll(".falling-heart")
    .forEach((heart)=>{

        const top =
        parseFloat(getComputedStyle(heart).top);

        if(top > gameArea.offsetHeight + 60){

            heart.remove();

        }

    });

},500);


// ===============================
// Timer
// ===============================

const timerInterval =
setInterval(()=>{

    if(gameOver) return;

    timeLeft--;

    timerText.innerHTML = timeLeft;

    if(timeLeft <= 0){

        clearInterval(timerInterval);

        gameOver = true;

        alert("⏰ Time Over!\nTry Again ❤️");

        location.reload();

    }

},1000);


// ===============================
// Continue Button
// ===============================

nextBtn.addEventListener("click",()=>{

    window.location.href="cake.html";

});