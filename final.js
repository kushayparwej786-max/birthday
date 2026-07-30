// ===================================
// Elements
// ===================================

const heartsContainer = document.getElementById("floating-hearts");
const petalsContainer = document.getElementById("rose-petals");
const sparklesContainer = document.getElementById("sparkles");
const fireworksContainer = document.getElementById("fireworks");

const typingMessage = document.getElementById("typingMessage");

// ===================================
// Floating Hearts ❤️
// ===================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*20) + "px";

    heart.style.animationDuration = (6 + Math.random()*3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);


// ===================================
// Rose Petals 🌹
// ===================================

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "%";

    petal.style.animationDuration = (6 + Math.random()*4) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,700);


// ===================================
// Sparkles ✨
// ===================================

for(let i=0;i<35;i++){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random()*100 + "%";

    sparkle.style.top = Math.random()*100 + "%";

    sparkle.style.animationDelay = Math.random()*3 + "s";

    sparklesContainer.appendChild(sparkle);

}


// ===================================
// Fireworks 🎆
// ===================================

const fireworkColors = [

    "#ff4d94",
    "#ffd700",
    "#66ccff",
    "#7ed957",
    "#ffffff",
    "#ff9cc9"

];

function createFirework(){

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = Math.random()*100 + "%";

    firework.style.top = Math.random()*70 + "%";

    firework.style.background =

        fireworkColors[
            Math.floor(
                Math.random()*fireworkColors.length
            )
        ];

    fireworksContainer.appendChild(firework);

    setTimeout(()=>{

        firework.remove();

    },1800);

}

setInterval(createFirework,900);


// ===================================
// Typing Message ❤️
// ===================================

const message =

`
Baby...
Mujhe pata hai ki kabhi-kabhi mujhse galtiyan ho jaati hain. Shayad main har baar apni feelings sahi tarah se express nahi kar paata, lekin ek baat hamesha sach rahegi...
Main tumse bahut pyaar karta hoon. ❤️
Kabhi-kabhi main isliye bhi overthink karta hoon ya galti kar deta hoon, kyunki main tumhe khona nahi chahta. Tum meri life ka bahut hi special hissa ho.
Agar maine kabhi bhi kisi baat se tumhara dil dukhaya ho, to please mujhe maaf kar dena. Mera irada kabhi tumhe hurt karne ka nahi tha. 🥺
Main bas itna chahta hoon ki tum hamesha meri zindagi mein raho. Please mujhe kabhi chhod kar mat jaana. Main hamesha tumhara saath dena chahta hoon, har khushi aur har mushkil mein.

I really love you...
Today, Tomorrow, Forever & Ever. ❤️♾️

— Chotu ❤️`;

let index = 0;

function typeMessage(){

    if(index < message.length){

        typingMessage.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage,45);

    }

}

typeMessage();


// ===================================
// Optional Music 🎵
// ===================================

const music = document.getElementById("bgMusic");

if(music){

    music.play().catch(()=>{});

}
// ===================================
// The End Button ❤️
// ===================================

const endBtn = document.getElementById("endBtn");

endBtn.addEventListener("click", () => {

    endBtn.disabled = true;

    endBtn.innerHTML = "❤️ Thank You ❤️";

    heartBurst();

    megaFireworks();

    showFinalMessage();

});


// ===================================
// Heart Burst ❤️
// ===================================

function heartBurst(){

    for(let i=0;i<40;i++){

        const heart = document.createElement("div");

        heart.className = "heart-float";

        heart.innerHTML = Math.random()>0.5 ? "💖" : "💕";

        heart.style.left = (40 + Math.random()*20) + "%";

        heart.style.bottom = "45%";

        heart.style.fontSize =
            (20 + Math.random()*20) + "px";

        heart.style.animationDuration =
            (2 + Math.random()) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}


// ===================================
// Mega Fireworks 🎆
// ===================================

function megaFireworks(){

    let count = 0;

    const blast = setInterval(()=>{

        createFirework();

        createFirework();

        createFirework();

        count++;

        if(count >= 30){

            clearInterval(blast);

        }

    },150);

}


// ===================================
// Final Message ❤️
// ===================================

function showFinalMessage(){

    const box = document.createElement("div");

    box.style.position = "fixed";

    box.style.left = "50%";

    box.style.top = "50%";

    box.style.transform = "translate(-50%,-50%)";

    box.style.background = "rgba(255,255,255,.96)";

    box.style.padding = "35px";

    box.style.borderRadius = "25px";

    box.style.textAlign = "center";

    box.style.boxShadow =
        "0 20px 45px rgba(0,0,0,.25)";

    box.style.zIndex = "9999";

    box.innerHTML = `

        <h2 style="color:#ff4d94;">
            ❤️ Thank You ❤️
        </h2>

        <p style="
            margin-top:15px;
            color:#555;
            line-height:1.8;
            font-size:18px;
        ">

            Thank you for spending
            these beautiful moments.

            <br><br>

            I hope this little surprise
            made you smile.

            <br><br>

            🎂 Happy Birthday Once Again 🎂

            <br><br>

            ❤️ Made With Love ❤️

        </p>

    `;

    document.body.appendChild(box);

}


// ===================================
// Photo Click Animation 📸
// ===================================

const finalPhoto = document.getElementById("finalPhoto");

if(finalPhoto){

    finalPhoto.addEventListener("click",()=>{

        finalPhoto.style.transform =
            "scale(1.08) rotate(3deg)";

        setTimeout(()=>{

            finalPhoto.style.transform =
                "scale(1) rotate(0deg)";

        },300);

    });

}


// ===================================
// Console Message
// ===================================

console.log("❤️ Birthday Website Completed Successfully ❤️");