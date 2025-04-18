const card = document.getElementById("card");
const typedText = document.getElementById("typedText");

const lines = [
  "Another year of you —",
  "the girl who makes silence feel safe,",
  "the smile that holds my storms back.",
  "",
  "I wanted to gift you the world,",
  "but all I have is my heart —",
  "and it's always been yours.",
  "",
  "Today isn’t just your birthday.",
  "It’s the day the universe gifted me",
  "a reason to believe in love —",
  "raw, soft, imperfect, and mine.",
  "",
  "You don’t even know it…",
  "but you’ve saved me, so many times.",
  "",
  "I love you more than words.",
  "Happy Birthday, Sneha.",
  "You’ll always be my favorite person."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typedText.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 45);
    } else {
      typedText.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 500);
    }
  }
}

card.addEventListener("click", () => {
  card.classList.add("open");

  setTimeout(() => {
    typeLine();
    launchConfetti();
  }, 1000);
});

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    speed: Math.random() * 3 + 2,
    radius: Math.random() * 6 + 4,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    if (p.y > canvas.height) p.y = -10;
  }
  requestAnimationFrame(drawConfetti);
}

function launchConfetti() {
  drawConfetti();
}
