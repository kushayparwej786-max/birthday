// ===================================
// Elements
// ===================================

const floatingHearts = document.getElementById("floating-hearts");
const floatingBalloons = document.getElementById("floating-balloons");
const sparkles = document.getElementById("sparkles");
const confetti = document.getElementById("confetti");

const typingText = document.getElementById("typingText");


// ===================================
// Floating Hearts ❤️
// ===================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
        (18 + Math.random()*18) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*3) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);


// ===================================
// Floating Balloons 🎈
// ===================================

const colors = ["red","pink","white"];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className =
        "balloon " +
        colors[Math.floor(Math.random()*3)];

    balloon.style.left =
        Math.random()*100 + "%";

    balloon.style.animationDuration =
        (8 + Math.random()*4) + "s";

    floatingBalloons.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },12000);

}

setInterval(createBalloon,1800);


// ===================================
// Sparkles ✨
// ===================================

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

    sparkles.appendChild(sparkle);

}


// ===================================
// Confetti 🎉
// ===================================

const confettiColors = [

    "#ff4d94",
    "#ffb6d9",
    "#ffd700",
    "#7ed957",
    "#66ccff",
    "#ffffff"

];

function createConfetti(){

    for(let i=0;i<120;i++){

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random()*100 + "%";

        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];

        piece.style.animationDuration =
            (2 + Math.random()*3) + "s";

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}

// Start Confetti Automatically

createConfetti();


// ===================================
// Typing Animation 💖
// ===================================

const message =

`Happy Birthday, Beautiful! ❤️

🌹 Can I Tell You Something? 🌹

Pata hi nahi chala...
kab tum meri aadat ban gayi.

Aaj bas dil ki ek baat kehni hai...

Main chahta hoon ki
meri har nayi memory mein
sirf tum hi saath ho. ❤️
Will you be a special part of my life? 🌹💍`;

let index = 0;

function typeText(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeText,45);

    }

}

typeText();


// ===================================
// Optional Music 🎵
// ===================================

const music =
document.getElementById("birthdayMusic");

if(music){

    music.play().catch(()=>{});

}
// ===================================
// Final Surprise Button 💌
// ===================================

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {

    nextBtn.innerHTML = "✨ Opening Surprise...";

    nextBtn.disabled = true;

    nextBtn.style.opacity = "0.8";

    // Small delay before opening next page

    setTimeout(() => {

        window.location.href = "final.html";

    }, 1800);

});


// ===================================
// Extra Confetti Every Few Seconds 🎉
// ===================================

setInterval(() => {

    createConfetti();

}, 5000);


// ===================================
// Floating Hearts Burst ❤️
// ===================================

function heartBurst(){

    for(let i = 0; i < 20; i++){

        const heart = document.createElement("div");

        heart.className = "heart-float";

        heart.innerHTML = "💖";

        heart.style.left = (40 + Math.random()*20) + "%";

        heart.style.bottom = "45%";

        heart.style.fontSize = (20 + Math.random()*20) + "px";

        heart.style.animationDuration = (2 + Math.random()) + "s";

        floatingHearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}

// Every 8 seconds

setInterval(heartBurst,8000);


// ===================================
// Photo Click Effect 📸
// ===================================

const photo = document.getElementById("birthdayPhoto");

photo.addEventListener("click",()=>{

    photo.style.transform = "scale(1.08) rotate(3deg)";

    setTimeout(()=>{

        photo.style.transform = "scale(1) rotate(0deg)";

    },300);

});


// ===================================
// Gifts Click Animation 🎁
// ===================================

document.querySelectorAll(".gift").forEach(gift=>{

    gift.addEventListener("click",()=>{

        gift.style.transform="scale(1.3) rotate(15deg)";

        gift.innerHTML="💖";

        setTimeout(()=>{

            gift.style.transform="";

        },300);

    });

});


// ===================================
// Welcome Message
// ===================================

console.log("🎉 Celebration Page Loaded Successfully ❤️");