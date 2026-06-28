const loadingScreen = document.getElementById("loadingScreen");
const homeScreen = document.getElementById("homeScreen");
const questionScreen = document.getElementById("questionScreen");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");

const progress = document.getElementById("progress");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const cats = document.querySelectorAll(".cat");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const funnyText = document.getElementById("funnyText");

const walkingCat = document.getElementById("walkingCat");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

// ----------------------
// Loading Screen
// ----------------------

let loading = 0;

const loader = setInterval(() => {

    loading++;

    progress.style.width = loading + "%";

    if (loading >= 100) {

        clearInterval(loader);

        loadingScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");

    }

}, 25);

// ----------------------
// Music
// ----------------------

musicToggle.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicToggle.innerHTML = "🔊 MUSIC";

    } else {

        music.pause();
        musicToggle.innerHTML = "🔇 MUSIC";

    }

});

// ----------------------
// Open Question Screen
// ----------------------

cats.forEach(cat => {

    cat.addEventListener("click", () => {

        homeScreen.classList.add("hidden");
        questionScreen.classList.remove("hidden");

    });

});

// ----------------------
// No Button Runs Away
// ----------------------

const funnyMessages = [

    "Nice try 😂",
    "The kitties said no 😹",
    "You can't catch me!",
    "Click YES instead ❤️",
    "Mission Impossible 😎"

];

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 180 - 90;

    noBtn.style.transform = `translate(${x}px,${y}px)`;

    funnyText.innerHTML =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

});

// ----------------------
// YES Button
// ----------------------

yesBtn.addEventListener("click", () => {

    questionScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");

    startLetter();

});

// ----------------------
// Letter Animation
// ----------------------

function startLetter() {

    envelope.style.opacity = "0";
    letter.style.display = "none";
    letterText.innerHTML = "";

    setTimeout(() => {

        envelope.style.opacity = "1";

    }, 7000);

    envelope.onclick = () => {

        envelope.style.display = "none";

        letter.style.display = "block";
        letter.classList.add("fadeIn");

        typeLetter();

    };

}

// ----------------------
// Typing Effect
// ----------------------

const message = `Hi Twin ❤️

Thank you for always being here.

You make my days brighter,
my smiles bigger,
and my heart happier.

No matter what happens,
I'll always care about you.

Stay happy.
Stay amazing.

Love you always. ❤️`;

function typeLetter() {

    let i = 0;

    const typer = setInterval(() => {

        letterText.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {

            clearInterval(typer);

            setTimeout(() => {

                letterScreen.classList.add("hidden");
                finalScreen.classList.remove("hidden");

                celebrate();

            }, 2500);

        }

    }, 40);

}

// ----------------------
// Hearts
// ----------------------

function celebrate() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 300);

}