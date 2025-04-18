const scenes = document.querySelectorAll(".celebration-scene");
let currentScene = 0;

// Hide all scenes first
scenes.forEach(scene => scene.classList.remove("active"));

// Show the first one
scenes[currentScene].classList.add("active");

// Function to switch scenes
function showScene(index) {
  scenes.forEach(scene => scene.classList.remove("active"));
  scenes[index].classList.add("active");

  // If it’s scene 5 (last), type letter text
  if (index === 4) {
    const letterPara = document.getElementById("birthdayLetter");
    const fullText = letterPara.textContent;
    letterPara.textContent = '';
    typeText(letterPara, fullText, 35);
  }
}

// Button Events
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const nextIndex = Array.from(scenes).findIndex(sc => sc.id === targetId);
    if (nextIndex !== -1) {
      currentScene = nextIndex;
      showScene(currentScene);
    }
  });
});

document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const backIndex = Array.from(scenes).findIndex(sc => sc.id === targetId);
    if (backIndex !== -1) {
      currentScene = backIndex;
      showScene(currentScene);
    }
  });
});

// Typing animation
function typeText(element, text, delay = 35) {
  let index = 0;
  element.textContent = '';
  const interval = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(interval);
  }, delay);
}

// Start with first scene
showScene(currentScene);
