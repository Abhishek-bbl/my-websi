const typingText = document.getElementById("typingText");
const textOverlay = document.getElementById("textOverlay");
const endOverlay = document.getElementById("endOverlay");
const bgVideo = document.getElementById("bgVideo");
const letterBtn = document.getElementById("toLetterBtn");
const moonLineElement = document.getElementById("moonLine");

const introLines = [
  "This isn't just because I said I'd bring you the moon...",
  "It's because I needed to remind you...",
  "Even the moon pales in front of your glow."
];

const moonLines = [
  "Craters? Cute. But have you seen her dimples?",
  "You glow once a month. She glows every time she smiles.",
  "You reflect the sun. She creates her own light.",
  "You orbit the Earth. I orbit her.",
  "You're cold and distant. She’s warm and annoyingly close to my heart.",
  "People write songs about you. I write paragraphs about her eyes.",
  "You're full of holes. She’s full of smiles… and one killer dimple.",
  "You disappear for days. She ignores me for hours — and still wins.",
  "You just hang in the sky… she stays in my thoughts.",
  "You reflect light, she gives me reason to smile.",
  "You're just the moon… she's my whole sky.",
  "Even clouds move for you. I’d move mountains for her.",
  "Sorry moon, you tried — but she wins. Every time."
];


let lineIndex = 0;
let charIndex = 0;

function typeIntro() {
  if (lineIndex < introLines.length) {
    if (charIndex < introLines[lineIndex].length) {
      typingText.textContent += introLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeIntro, 70);
    } else {
      typingText.innerHTML += "\n\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeIntro, 800);
    }
  }
}

function showMoonLines(index = 0) {
  if (index < moonLines.length) {
    moonLineElement.textContent = moonLines[index];
    moonLineElement.style.opacity = 1;

    moonTimeout = setTimeout(() => {
      moonLineElement.style.opacity = 0;
    
      // Show next line after 2s pause
      moonTimeout = setTimeout(() => {
        showMoonLines(index + 1);
      }, 2000);
    
    }, 5000); // Show each line for 5 seconds
    // Show each line for 3s
  }
}

// INIT
window.onload = () => {
  setTimeout(() => {
    typeIntro();
  }, 1000);

  setTimeout(() => {
    textOverlay.classList.remove("visible");
    textOverlay.classList.add("hidden");
    bgVideo.classList.add("blurred");
    bgVideo.play();

    showMoonLines();

    // Reveal button after moon lines finish
    const totalDuration = moonLines.length * 7000;
    setTimeout(() => {
      endOverlay.classList.remove("hidden");
      endOverlay.classList.add("visible");
      letterBtn.style.display = "block";
    }, totalDuration);
  }, 20000); // Delay for intro completion
};

letterBtn.addEventListener("click", () => {
  window.location.href = "letter.html";
});

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (bgVideo.paused) {
    bgVideo.play();
    toggleBtn.textContent = "⏸ Pause";
  } else {
    bgVideo.pause();
    toggleBtn.textContent = "▶️ Play";
  }
});
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");

  // Attempt to play after a short delay (or wrap inside a user event)
  setTimeout(() => {
    music.volume = 0.4; // Optional: adjust volume
    music.play().catch(err => {
      console.log("Autoplay blocked. Waiting for user interaction...");
    });
  }, 1000);
});
