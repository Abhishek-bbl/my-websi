document.addEventListener("DOMContentLoaded", () => {
  // 🌸 Only if on index.html
  const startBtn = document.getElementById("startBtn");
  const landingPage = document.querySelector(".landing-page");

  if (startBtn && landingPage) {
    const bgMusic = document.getElementById("bg-music");
    const windSound = document.getElementById("wind-sound");

    startBtn.addEventListener("click", () => {
      landingPage.classList.add("fade-out");

      // Music fade in
      if (bgMusic && windSound) {
        bgMusic.volume = 0;
        bgMusic.play();
        windSound.volume = 0.2;
        windSound.play();

        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 0.4) {
            vol += 0.01;
            bgMusic.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 100);
      }

      setTimeout(() => {
        window.location.href = "features.html";
      }, 1000);
    });
  }

  // 🎬 Scene navigation (only runs on timeline.html)
  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  function updateScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
    currentScene = index;
    updateProgress();
  }

  function updateProgress() {
    const progress = ((currentScene + 1) / scenes.length) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }

  const nextBtns = document.querySelectorAll(".next-btn");
  const backBtns = document.querySelectorAll(".back-btn");

  nextBtns.forEach(btn =>
    btn.addEventListener("click", () => {
      if (currentScene < scenes.length - 1) {
        updateScene(currentScene + 1);
        scenes[currentScene].scrollIntoView({ behavior: "smooth" });
      }
    })
  );

  backBtns.forEach(btn =>
    btn.addEventListener("click", () => {
      if (currentScene > 0) {
        updateScene(currentScene - 1);
        scenes[currentScene].scrollIntoView({ behavior: "smooth" });
      }
    })
  );

  if (scenes.length > 0) {
    updateScene(0); // initial scene
  }

  // ❤️ Heart particle animation (canvas)
  const heartCanvas = document.getElementById("heartCanvas");
  if (heartCanvas) {
    const heartCtx = heartCanvas.getContext("2d");
    heartCanvas.width = window.innerWidth;
    heartCanvas.height = window.innerHeight;
    let heartParticles = [];

    function createHeart() {
      heartParticles.push({
        x: Math.random() * heartCanvas.width,
        y: heartCanvas.height + 10,
        size: Math.random() * 8 + 2,
        speed: Math.random() * 1 + 0.5,
        alpha: 1,
        drift: (Math.random() - 0.5) * 2,
      });
    }

    function drawHeartParticles() {
      heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
      heartParticles.forEach((heart, index) => {
        heartCtx.globalAlpha = heart.alpha;
        heartCtx.fillStyle = "pink";
        heartCtx.beginPath();
        heartCtx.moveTo(heart.x, heart.y);
        heartCtx.bezierCurveTo(
          heart.x + heart.size / 2,
          heart.y - heart.size / 2,
          heart.x + heart.size,
          heart.y + heart.size / 3,
          heart.x,
          heart.y + heart.size
        );
        heartCtx.bezierCurveTo(
          heart.x - heart.size,
          heart.y + heart.size / 3,
          heart.x - heart.size / 2,
          heart.y - heart.size / 2,
          heart.x,
          heart.y
        );
        heartCtx.fill();

        heart.y -= heart.speed;
        heart.x += heart.drift;
        heart.alpha -= 0.005;

        if (heart.alpha <= 0) {
          heartParticles.splice(index, 1);
        }
      });
    }

    function animateHearts() {
      drawHeartParticles();
      requestAnimationFrame(animateHearts);
    }

    setInterval(createHeart, 200);
    animateHearts();

    window.addEventListener("resize", () => {
      heartCanvas.width = window.innerWidth;
      heartCanvas.height = window.innerHeight;
    });
  }

  // 💖 Emoji heart float animation (emoji canvas)
  const emojiCanvas = document.getElementById("heartBackground");
  if (emojiCanvas) {
    const emojiCtx = emojiCanvas.getContext("2d");
    emojiCanvas.width = window.innerWidth;
    emojiCanvas.height = window.innerHeight;

    let emojiHearts = [];
    for (let i = 0; i < 30; i++) {
      emojiHearts.push({
        x: Math.random() * emojiCanvas.width,
        y: Math.random() * emojiCanvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function drawEmojiHearts() {
      emojiCtx.clearRect(0, 0, emojiCanvas.width, emojiCanvas.height);
      emojiHearts.forEach((heart) => {
        emojiCtx.beginPath();
        emojiCtx.fillStyle = `rgba(255, 105, 180, ${heart.opacity})`;
        emojiCtx.font = `${heart.size}px serif`;
        emojiCtx.fillText("❤️", heart.x, heart.y);
        heart.y -= heart.speed;
        if (heart.y < -20) heart.y = emojiCanvas.height + 20;
      });
      requestAnimationFrame(drawEmojiHearts);
    }

    drawEmojiHearts();

    window.addEventListener("resize", () => {
      emojiCanvas.width = window.innerWidth;
      emojiCanvas.height = window.innerHeight;
    });
  }
});
