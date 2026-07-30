// ===============================
// Elements
// ===============================

const floatingHearts = document.getElementById("floating-hearts");
const floatingBalloons = document.getElementById("floating-balloons");
const sparkles = document.getElementById("sparkles");

const blowBtn = document.getElementById("blowBtn");
const cutBtn = document.getElementById("cutBtn");

const flames = document.querySelectorAll(".flame");

// ===============================
// Floating Hearts ❤️
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.animationDuration = (6 + Math.random()*3) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);


// ===============================
// Floating Balloons 🎈
// ===============================

const colors=["red","pink","white"];

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon "+colors[Math.floor(Math.random()*3)];

    balloon.style.left=Math.random()*100+"%";

    balloon.style.animationDuration=(8+Math.random()*4)+"s";

    floatingBalloons.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },12000);

}

setInterval(createBalloon,1800);


// ===============================
// Sparkles ✨
// ===============================

for(let i=0;i<35;i++){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"%";

    s.style.top=Math.random()*100+"%";

    s.style.animationDelay=Math.random()*3+"s";

    sparkles.appendChild(s);

}


// ===============================
// Blow Candles 🌬
// ===============================

blowBtn.addEventListener("click",()=>{

    flames.forEach(flame=>{

        flame.classList.add("off");

    });

    blowBtn.disabled=true;

    cutBtn.disabled=false;

});
// ===============================
// Cake Cut + Celebration
// ===============================

const cake = document.getElementById("cake");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const confettiContainer = document.getElementById("confetti");

// ===============================
// Cut Cake 🔪
// ===============================

cutBtn.addEventListener("click",()=>{

    cake.classList.add("cut");

    createConfetti();

    message.classList.add("show");

    cutBtn.disabled = true;

});


// ===============================
// Confetti 🎉
// ===============================

const confettiColors = [

    "#ff4f97",
    "#ffb6d9",
    "#ffd700",
    "#7ed957",
    "#66ccff",
    "#ffffff"

];

function createConfetti(){

    for(let i=0;i<180;i++){

        const piece =
        document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
        Math.random()*100 + "%";

        piece.style.background =
        confettiColors[
            Math.floor(
                Math.random()*confettiColors.length
            )
        ];

        piece.style.animationDuration =
        (2 + Math.random()*3) + "s";

        piece.style.animationDelay =
        (Math.random()*0.5) + "s";

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}


// ===============================
// Optional Birthday Music 🎵
// ===============================

// Agar HTML me audio tag add karoge:
//
// <audio id="birthdayMusic"
// src="music/happy-birthday.mp3"></audio>
//
// to ye automatically play karega.

const music =
document.getElementById("birthdayMusic");

if(music){

    cutBtn.addEventListener("click",()=>{

        music.play().catch(()=>{});

    });

}


// ===============================
// Continue Button ➜ Celebration
// ===============================

nextBtn.addEventListener("click",()=>{

    window.location.href="celebration.html";

});