// Floating emoji hearts 💕
const emojiCanvas = document.getElementById('heartBackground');
const ctx = emojiCanvas.getContext('2d');

emojiCanvas.width = window.innerWidth;
emojiCanvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * emojiCanvas.width,
    y: Math.random() * emojiCanvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, emojiCanvas.width, emojiCanvas.height);
  hearts.forEach(heart => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 105, 180, ${heart.opacity})`;
    ctx.font = `${heart.size}px serif`;
    ctx.fillText('❤️', heart.x, heart.y);
    heart.y -= heart.speed;
    if (heart.y < -20) heart.y = emojiCanvas.height + 20;
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();

window.addEventListener("resize", () => {
  emojiCanvas.width = window.innerWidth;
  emojiCanvas.height = window.innerHeight;
});
// Background music player
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("globalMusic");

  // Auto-play workaround
  const playMusic = () => {
    music.volume = 0.4;
    music.play().catch(() => {
      console.log("Waiting for user interaction to play music.");
    });
  };

  playMusic();

  // Optional: resume music from same position when navigating
  music.currentTime = sessionStorage.getItem('musicTime') || 0;

  // Save position before leaving page
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem('musicTime', music.currentTime);
  });
});
