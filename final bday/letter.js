


// 🌌 Animated Night Sky
const canvas = document.getElementById("nightSky");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 150 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.3,
  alpha: Math.random(),
  speed: Math.random() * 0.005 + 0.001
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha <= 0 || star.alpha >= 1) star.speed = -star.speed;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

drawStars();

// 💌 Letter Typing
const typingText = document.querySelector('.typed-text');
const lines = [
  "My Dummi,\n\nI don’t even know where to begin. There’s so much I feel — and so little I’ve ever said. You’ve been in my heart every single day. Through the smiles, through the silence, through the pain I never let anyone see… you were always there.",
  
  "There were days I felt completely lost — like I was drowning inside, but I still smiled for the world. Because deep down, I still had one hope — you.",
  
  "I waited, I broke, I healed a little, and then broke again. But I never gave up on you. Never once.",
  
  "Every time you looked away, I still looked for you. Every time you stayed silent, I still listened for your voice. Every time you drifted, I still held on tighter — even if it hurt.",
  
  "You were never just someone to me. You were the only one. I never needed grand moments. I only wanted you — your laugh, your tiny smiles, the way you said my name… those small things meant the world to me.",
  
  "And even today, when we’re not the same, when I don’t know what tomorrow looks like… I still carry every memory like a treasure.",
  
  "I don’t know if we’ll ever be what we used to be. But I do know this: You’ll always be a part of me — the part that felt everything deeply, the part that loved without asking anything back.",
  
  "I miss you. I always will.\n\nYours… no matter what,\nAbhi"
];

  

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typingText.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      typingText.innerHTML += "\n\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 600);
    }
  }
}

window.onload = () => {
  typeLine();
};
