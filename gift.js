const c=document.getElementById("floating-hearts");
const gift=document.getElementById("gift");
const gallery=document.getElementById("gallery");
const photos=document.querySelectorAll(".photo");
const nextBtn=document.getElementById("nextBtn");

setInterval(()=>{
 let h=document.createElement("div");
 h.className="heart";
 h.textContent="💖";
 h.style.left=Math.random()*100+"%";
 h.style.fontSize=(10+Math.random()*18)+"px";
 h.style.animationDuration=(5+Math.random()*5)+"s";
 c.appendChild(h);
 setTimeout(()=>h.remove(),10000);
},200);

gift.onclick=()=>{
 document.querySelector(".lid").style.transform="rotate(-120deg)";
 setTimeout(()=>{
   gift.style.display="none";
   gallery.style.display="grid";
   let i=0;
   function show(){
      if(i<photos.length){
         photos[i].style.display="block";
        //  photos[i].animate([{transform:"translateY(80px)",opacity:0},{transform:"translateY(0)",opacity:1}],{duration:700,fill:"forwards"});
//         photos[i].animate(
// [
//     { transform: "translateX(-500px)", opacity: 0 },
//     { transform: "translateX(0)", opacity: 1 }
// ],
// {
//     duration: 700,
//     fill: "forwards",
//     easing: "ease-out"
// });
photos[i].animate(
[
    {
        transform: "translateX(-600px) rotate(-15deg) scale(0.8)",
        opacity: 0
    },
    {
        transform: "translateX(0) rotate(0deg) scale(1)",
        opacity: 1
    }
],
{
    duration: 1000,
    fill: "forwards",
    easing: "ease-out"
});
        i++;
         setTimeout(show,1800);
      }else{
         nextBtn.style.display="inline-block";
      }
   }
   show();
 },900);
};

nextBtn.onclick = () => {
    window.location.href = "letter.html";
};
// ===============================
// MEMORY POPUP
// ===============================

const popup = document.getElementById("memoryPopup");
const popupImg = document.getElementById("popupImg");
const memoryText = document.getElementById("memoryText");
const closePopup = document.getElementById("closePopup");
const nextMemory = document.getElementById("nextMemory");

let currentPhoto = 0;

const memories = [

"𝐌𝐨𝐯𝐢𝐞 𝐤𝐡𝐚𝐭𝐚𝐦 𝐡𝐨 𝐠𝐚𝐲𝐢...𝐥𝐞𝐤𝐢𝐧 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐭𝐡 𝐛𝐢𝐭𝐚𝐲𝐚 𝐡𝐮𝐚 𝐡𝐚𝐫 𝐞𝐤 𝐦𝐨𝐦𝐞𝐧𝐭 𝐦𝐞𝐫𝐢 𝐥𝐢𝐟𝐞 𝐤𝐢 𝐬𝐚𝐛𝐬𝐞 𝐤𝐡𝐮𝐛𝐬𝐮𝐫𝐚𝐭 𝐦𝐞𝐦𝐨𝐫𝐲 𝐫𝐚𝐡𝐞𝐠𝐚. 🕊️❤️",

"𝐘𝐞 𝐡𝐚𝐦𝐚𝐫𝐢 𝐥𝐚𝐬𝐭 𝐦𝐞𝐦𝐨𝐫𝐲 𝐭𝐡𝐢... 🥹 𝐉𝐚𝐛 𝐡𝐮𝐦 𝐚𝐩𝐧𝐞 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐫𝐞𝐬𝐭𝐚𝐮𝐫𝐚𝐧𝐭 𝐦𝐞𝐢𝐧 𝐦𝐢𝐥𝐞 𝐭𝐡𝐞. 𝐔𝐬𝐤𝐞 𝐛𝐚𝐚𝐝 𝐭𝐮𝐦 𝐊𝐨𝐥𝐤𝐚𝐭𝐚 𝐜𝐡𝐚𝐥𝐢 𝐠𝐚𝐲𝐢. 𝐒𝐚𝐜𝐡 𝐤𝐚𝐡𝐮𝐧, 𝐦𝐚𝐢𝐧𝐞 𝐭𝐮𝐦𝐡𝐞 𝐛𝐚𝐡𝐮𝐭 𝐦𝐢𝐬𝐬 𝐤𝐢𝐲𝐚.𝐖𝐨 𝐝𝐢𝐧, 𝐰𝐨 𝐩𝐚𝐥, 𝐚𝐮𝐫 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐚𝐭𝐡 𝐛𝐢𝐭𝐚𝐲𝐚 𝐡𝐮𝐚 𝐡𝐚𝐫 𝐞𝐤 𝐦𝐨𝐦𝐞𝐧𝐭... 𝐦𝐞𝐫𝐢 𝐥𝐢𝐟𝐞 𝐤𝐢 𝐬𝐚𝐛𝐬𝐞 𝐤𝐡𝐮𝐛𝐬𝐮𝐫𝐚𝐭 𝐲𝐚𝐚𝐝𝐨𝐧 𝐦𝐞𝐢𝐧 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐫𝐚𝐡𝐞𝐠𝐚. ❤️🥹🌸",

"𝐘𝐞 𝐩𝐡𝐨𝐭𝐨 𝐃𝐚𝐤𝐬𝐡𝐢𝐧𝐞𝐬𝐰𝐚𝐫 𝐊𝐚𝐥𝐢 𝐌𝐚𝐧𝐝𝐢𝐫, 𝐊𝐨𝐥𝐤𝐚𝐭𝐚 𝐤𝐢 𝐡𝐚𝐢. 𝐘𝐚𝐡𝐚𝐧 𝐡𝐮𝐦 𝐝𝐨𝐧𝐨 𝐬𝐚𝐚𝐭𝐡 𝐝𝐚𝐫𝐬𝐡𝐚𝐧 𝐤𝐚𝐫𝐧𝐞 𝐠𝐚𝐲𝐞 𝐭𝐡𝐞. 𝐌𝐚𝐢𝐧𝐞 𝐌𝐚𝐚 𝐊𝐚𝐥𝐢 𝐬𝐞 𝐬𝐢𝐫𝐟 𝐞𝐤 𝐡𝐢 𝐝𝐮𝐚 𝐦𝐚𝐚𝐧𝐠𝐢 𝐭𝐡𝐢—𝐭𝐮𝐦𝐡𝐚𝐫𝐢 𝐡𝐚𝐫 𝐤𝐡𝐮𝐬𝐡𝐢, 𝐡𝐚𝐫 𝐬𝐚𝐩𝐧𝐚 𝐚𝐮𝐫 𝐡𝐚𝐫 𝐦𝐚𝐧𝐳𝐢𝐥 𝐩𝐨𝐨𝐫𝐢 𝐡𝐨. 𝐁𝐡𝐚𝐠𝐰𝐚𝐧 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐭𝐮𝐦𝐡𝐚𝐫𝐚 𝐬𝐚𝐚𝐭𝐡 𝐝𝐞𝐧 𝐚𝐮𝐫 𝐭𝐮𝐦𝐡𝐚𝐫𝐢 𝐳𝐢𝐧𝐝𝐚𝐠𝐢 𝐤𝐨 𝐤𝐡𝐮𝐬𝐡𝐢𝐲𝐨𝐧 𝐬𝐞 𝐛𝐡𝐚𝐫 𝐝𝐞𝐧. 𝐘𝐞 𝐩𝐚𝐥 𝐦𝐞𝐫𝐢 𝐳𝐢𝐧𝐝𝐚𝐠𝐢 𝐤𝐢 𝐬𝐚𝐛𝐬𝐞 𝐩𝐲𝐚𝐚𝐫𝐢 𝐲𝐚𝐚𝐝𝐨𝐧 𝐦𝐞𝐢𝐧 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐫𝐚𝐡𝐞𝐠𝐚. ❤️🙏 💖",

"𝐘𝐞 𝐩𝐡𝐨𝐭𝐨 𝐊𝐨𝐥𝐤𝐚𝐭𝐚 𝐤𝐞 𝐮𝐬𝐬 𝐩𝐚𝐫𝐤 𝐤𝐢 𝐡𝐚𝐢, 𝐣𝐚𝐡𝐚𝐧 𝐡𝐮𝐦 𝐝𝐨𝐧𝐨 𝐬𝐚𝐚𝐭𝐡 𝐠𝐡𝐨𝐨𝐦𝐧𝐞 𝐠𝐚𝐲𝐞 𝐭𝐡𝐞. 𝐖𝐨 𝐜𝐡𝐡𝐨𝐭𝐢 𝐬𝐢 𝐰𝐚𝐥𝐤, 𝐭𝐮𝐦𝐡𝐚𝐫𝐢 𝐦𝐮𝐬𝐤𝐚𝐚𝐧, 𝐚𝐮𝐫 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐚𝐭𝐡 𝐛𝐢𝐭𝐚𝐲𝐚 𝐡𝐮𝐚 𝐡𝐚𝐫 𝐩𝐚𝐥... 𝐦𝐞𝐫𝐢 𝐳𝐢𝐧𝐝𝐚𝐠𝐢 𝐤𝐢 𝐬𝐚𝐛𝐬𝐞 𝐤𝐡𝐨𝐨𝐛𝐬𝐮𝐫𝐚𝐭 𝐲𝐚𝐚𝐝𝐨𝐧 𝐦𝐞𝐢𝐧 𝐬𝐞 𝐞𝐤 𝐡𝐚𝐢. 𝐊𝐚𝐚𝐬𝐡 𝐚𝐢𝐬𝐞 𝐡𝐢 𝐚𝐮𝐫 𝐛𝐡𝐢 𝐛𝐚𝐡𝐮𝐭 𝐬𝐚𝐚𝐫𝐞 𝐩𝐚𝐥 𝐡𝐮𝐦 𝐬𝐚𝐚𝐭𝐡 𝐣𝐞𝐞 𝐬𝐚𝐤𝐞𝐢𝐧. ❤️🌿 ✨",

"𝐘𝐞 𝐩𝐡𝐨𝐭𝐨 𝐮𝐬𝐬 𝐝𝐢𝐧 𝐤𝐢 𝐡𝐚𝐢 𝐣𝐚𝐛 𝐡𝐮𝐦 𝐝𝐨𝐧𝐨 𝐬𝐚𝐚𝐭𝐡 𝐦𝐚𝐥𝐥 𝐠𝐚𝐲𝐞 𝐭𝐡𝐞. 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐬𝐞 𝐳𝐲𝐚𝐝𝐚 𝐭𝐮𝐦𝐡𝐚𝐫𝐚 𝐬𝐚𝐚𝐭𝐡 𝐦𝐞𝐫𝐞 𝐥𝐢𝐲𝐞 𝐬𝐩𝐞𝐜𝐢𝐚𝐥 𝐭𝐡𝐚. 𝐓𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐚𝐭𝐡 𝐛𝐢𝐭𝐚𝐲𝐚 𝐡𝐮𝐚 𝐡𝐚𝐫 𝐩𝐚𝐥 𝐦𝐞𝐫𝐢 𝐥𝐢𝐟𝐞 𝐤𝐢 𝐬𝐚𝐛𝐬𝐞 𝐤𝐡𝐨𝐨𝐛𝐬𝐮𝐫𝐚𝐭 𝐦𝐞𝐦𝐨𝐫𝐢𝐞𝐬 𝐦𝐞𝐢𝐧 𝐬𝐞 𝐞𝐤 𝐡𝐚𝐢. 𝐘𝐞 𝐲𝐚𝐚𝐝𝐞𝐢𝐧 𝐡𝐚𝐦𝐞𝐬𝐡𝐚 𝐦𝐞𝐫𝐞 𝐝𝐢𝐥 𝐤𝐞 𝐤𝐚𝐫𝐞𝐞𝐛 𝐫𝐚𝐡𝐞𝐧𝐠𝐢.** ❤️🛍️ ❤️",

"𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐦𝐮𝐬𝐤𝐚𝐚𝐧 𝐦𝐞𝐢𝐧 𝐦𝐞𝐫𝐢 𝐝𝐮𝐧𝐢𝐲𝐚 𝐛𝐚𝐬𝐭𝐢 𝐡𝐚𝐢, 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐞𝐤 𝐧𝐚𝐳𝐚𝐫 𝐦𝐞𝐢𝐧 𝐦𝐞𝐫𝐢 𝐤𝐡𝐮𝐬𝐡𝐢 𝐜𝐡𝐡𝐮𝐩𝐢 𝐡𝐚𝐢. 𝐊𝐚𝐚𝐬𝐡 𝐲𝐞 𝐩𝐚𝐥 𝐤𝐚𝐛𝐡𝐢 𝐤𝐡𝐚𝐭𝐚𝐦 𝐧𝐚 𝐡𝐨, 𝐊𝐲𝐨𝐧𝐤𝐢 𝐭𝐮𝐦𝐡𝐚𝐫𝐞 𝐬𝐚𝐚𝐭𝐡 𝐡𝐢 𝐦𝐞𝐫𝐢 𝐳𝐢𝐧𝐝𝐚𝐠𝐢 𝐩𝐮𝐫𝐢 𝐡𝐚𝐢 ❤️",

];

photos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        currentPhoto=index;

        popup.style.display="flex";

        popupImg.src=photo.src;

        memoryText.innerHTML=memories[index];

        if(index===photos.length-1){

            nextMemory.innerHTML="🎁 Next Surprise ❤️";

        }else{

            nextMemory.innerHTML="➡️ Next Memory";

        }

    });

});

closePopup.onclick=()=>{

    popup.style.display="none";

};

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

};

nextMemory.onclick=()=>{

    if(currentPhoto===photos.length-1){

        window.location.href="letter.html";

        return;

    }

    currentPhoto++;

    popupImg.src=photos[currentPhoto].src;

    memoryText.innerHTML=memories[currentPhoto];

    if(currentPhoto===photos.length-1){

        nextMemory.innerHTML="🎁 Next Surprise ❤️";

    }else{

        nextMemory.innerHTML="➡️ Next Memory";

    }

};