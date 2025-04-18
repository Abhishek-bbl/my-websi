const loginBtn = document.getElementById("loginBtn");
const hintBtn = document.getElementById("hintBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const responseText = document.getElementById("responseText");

const correctPassword = "Luv Kush";  // Strict casing
let wrongAttempts = 0;

const funnyLines = [
  "Try again, Moon Lover 🌙",
  "That’s not it... but I like your confidence 😉",
  "It’s written in our memories... remember? 📝",
  "Close… but love needs precision ❤️",
  "She knows this place more than she knows me!",
  "Hint? Try clicking the button maybe 👀",
  "Nope! Think where we *sat*  💫"
];

const hint = "It’s the garden that has both our names… 💞 (2 words, Case-sensitive)";

loginBtn.addEventListener("click", () => {
  const enteredPassword = password.value.trim();
  if (enteredPassword === correctPassword) {
    responseText.textContent = "✨ Unlocked with love!";
    setTimeout(() => {
      window.location.href = "features.html";
    }, 1000);
  } else {
    responseText.textContent = funnyLines[wrongAttempts] || "Try again with more love 💖";
    wrongAttempts++;
  }
});

hintBtn.addEventListener("click", () => {
  responseText.textContent = hint;
});

// 💖 Heart Particles
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array.from({ length: 30 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 20 + 8,
  speed: Math.random() * 0.4 + 0.2,
  opacity: Math.random() * 0.5 + 0.3
}));

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.fillStyle = `rgba(255,105,180,${h.opacity})`;
    ctx.font = `${h.size}px serif`;
    ctx.fillText('💖', h.x, h.y);
    h.y -= h.speed;
    if (h.y < -20) {
      h.y = canvas.height + 20;
      h.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();
