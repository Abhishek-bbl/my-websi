const scenes = document.querySelectorAll(".memory-scene");

// Hide all scenes initially
scenes.forEach(scene => scene.style.display = "none");

// Show scene by ID with typing
function showSceneById(id) {
  scenes.forEach(scene => scene.style.display = "none");
  const targetScene = document.getElementById(id);
  targetScene.style.display = "block";

  // Handle typing animation
  const typed = targetScene.querySelector(".typed-text");
  if (typed) {
    const fullText = typed.dataset.fulltext || typed.textContent.trim();
    typed.dataset.fulltext = fullText; // Save it once
    typeText(typed, fullText); // Start typing
  }
}

// Typing function
function typeText(element, text, delay = 35) {
  let index = 0;
  element.textContent = '';
  const interval = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(interval);
  }, delay);
}

// Handle button clicks
document.querySelectorAll(".next-btn, .back-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    if (targetId) showSceneById(targetId);
  });
});

// Show the first scene initially (Scene 1)
showSceneById("scene-1");
