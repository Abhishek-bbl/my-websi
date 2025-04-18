const timeLeftDisplay = document.getElementById("timeLeft");
const lockedBox = document.getElementById("lockedBox");
const gift2Content = document.getElementById("gift2Content");

// 🎯 Target unlock date (April 26, 2025)
const unlockDate = new Date("2025-04-26T00:00:00");

// ⏳ Countdown function
function updateCountdown() {
  const now = new Date();
  const diff = unlockDate - now;

  if (diff <= 0) {
    unlockGift();
    timeLeftDisplay.textContent = "00d 00h 00m 00s";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timeLeftDisplay.textContent =
    `${days.toString().padStart(2, "0")}d ` +
    `${hours.toString().padStart(2, "0")}h ` +
    `${minutes.toString().padStart(2, "0")}m ` +
    `${seconds.toString().padStart(2, "0")}s`;
}

// 🔓 Unlock the gift
function unlockGift() {
  lockedBox.classList.remove("locked");
  lockedBox.classList.add("unlocked");
  lockedBox.addEventListener("click", () => {
    lockedBox.style.display = "none";
    gift2Content.classList.remove("hidden");
  });
}

// ⏱ Recalculate every second
updateCountdown();
const countdownInterval = setInterval(() => {
  updateCountdown();
}, 1000);
