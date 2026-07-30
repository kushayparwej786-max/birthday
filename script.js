// Correct Password
const correctPassword = "1702";

// User Input
let input = "";

// Elements
const buttons = document.querySelectorAll(".keypad button");
const dots = document.querySelectorAll(".dots span");
const card = document.querySelector(".card");

// Update Password Dots
function updateDots() {

    dots.forEach((dot, index) => {

        if(index < input.length){
            dot.style.background = "#ff3d87";
            dot.style.opacity = "1";
        }else{
            dot.style.background = "white";
            dot.style.opacity = ".4";
        }

    });

}

// Button Click
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        // Backspace
        if(value === "⌫"){

            input = input.slice(0,-1);
            updateDots();
            return;

        }

        // Ignore Heart Button
        if(value === "❤️") return;

        // Max 4 Digits
        if(input.length < 4){

            input += value;
            updateDots();

        }

        // Check Password
        if(input.length === 4){

            setTimeout(checkPassword,300);

        }

    });

});

// Check Password
function checkPassword() {

    if (input === correctPassword) {

        // Success Animation
        card.style.transition = "all 0.8s ease";
        card.style.transform = "scale(1.05)";
        card.style.opacity = "0";

        // Open Gift Page
        setTimeout(() => {
            window.location.href = "gift.html";
        }, 800);

    } else {

        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 500);

        input = "";
        updateDots();

    }

}