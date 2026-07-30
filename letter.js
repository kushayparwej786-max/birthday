// ===============================
// Floating Hearts ❤️
// ===============================

const heartContainer = document.getElementById("floating-hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💕";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.animationDuration = (6 + Math.random()*4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,350);


// ===============================
// Floating Balloons 🎈
// ===============================

const balloonContainer = document.getElementById("floating-balloons");

const balloonColors=["red","pink","white"];

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon " +
        balloonColors[Math.floor(Math.random()*balloonColors.length)];

    balloon.style.left=Math.random()*100+"%";

    balloon.style.animationDuration=(8+Math.random()*5)+"s";

    balloonContainer.appendChild(balloon);

    setTimeout(()=>balloon.remove(),13000);

}

setInterval(createBalloon,1500);


// ===============================
// Sparkles ✨
// ===============================

const sparkleContainer=document.getElementById("sparkles");

for(let i=0;i<35;i++){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"%";

    s.style.top=Math.random()*100+"%";

    s.style.animationDelay=Math.random()*3+"s";

    sparkleContainer.appendChild(s);

}


// ===============================
// Letter Message ❤️
// ===============================

const message=`💌 Happy Birthday! 🎂✨
Aaj tumhara birthday hai, aur is khaas din par main dil se tumhare liye sirf khushiyan hi maangta hoon. ❤️
Kabhi socha nahi tha ki itne saare chhote-chhote pal meri zindagi ki sabse khoobsurat yaadein ban jaayenge. Movie ka woh din, hamara favorite restaurant, Dakshineswar Kali Mandir mein saath ki gayi woh dua, park ki woh chhoti si walk, mall ki shopping... aur tumhare saath bitaya hua har ek lamha mere dil mein hamesha ke liye bas gaya hai. 🥹
Har photo sirf ek tasveer nahi hai, balki ek ehsaas hai... ek kahani hai... jo hamesha mujhe tumhari yaad dilati rahegi. Jab bhi in yaadon ko dekhta hoon, dil mein ek alag si muskaan aa jaati hai. ❤️
Maine Maa Kali se uss din sirf ek hi dua maangi thi—tum hamesha khush raho, tumhare har sapne poore hon, aur tumhari zindagi pyaar, sukoon aur muskurahaton se hamesha bhari rahe. 🙏✨
Shayad waqt badalta rahe, raaste alag ho jaayein... lekin tumhare saath bitaye hue woh khoobsurat pal meri life ki sabse precious memories rahenge. Un yaadon ke liye main hamesha thankful rahunga. 🤍
Aaj tumhare birthday par bas itna hi kehna chahta hoon...
Khush rehna, muskurate rehna aur apni zindagi mein hamesha aage badhte rehna. Tumhari har khushi mere liye hamesha special rahegi. 🌸
✨ Happy Birthday Once Again! 🎂❤️
With Lots of Love & Best Wishes,
— Chotu ❤️`;


// ===============================
// Elements
// ===============================

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letter");

const letterText=document.getElementById("letterText");

const nextBtn=document.getElementById("nextBtn");


// ===============================
// Envelope Open Animation
// ===============================

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    createBurst();

    setTimeout(()=>{

        envelope.style.display="none";

        letter.style.display="block";

        typeWriter();

    },1500);

});


// ===============================
// Heart Burst ❤️
// ===============================

function createBurst(){

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="55%";

        heart.style.fontSize=(18+Math.random()*12)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="1s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${(Math.random()-0.5)*500}px,
            ${(Math.random()-0.5)*500}px)
            scale(0)`;

            heart.style.opacity="0";

        },50);

        setTimeout(()=>heart.remove(),1200);

    }

}


// ===============================
// Typewriter
// ===============================

let index=0;

function typeWriter(){

    if(index<message.length){

        letterText.innerHTML+=message.charAt(index);

        index++;

        setTimeout(typeWriter,30);

    }

    else{

        nextBtn.style.display="inline-block";

    }

}


// ===============================
// Next Page
// ===============================

nextBtn.addEventListener("click",()=>{

    window.location.href="game.html";

});