const giftBox = document.getElementById('giftBox');
const lid = document.getElementById('lid');
const giftContent = document.querySelector('.gift-content');
const backBtn = document.getElementById('backBtn');

let opened = false;

giftBox.addEventListener('click', () => {
  if (opened) return; // Prevent multiple clicks
  opened = true;

  lid.classList.add('open'); // add animation class
  giftBox.classList.add('sparkle'); // optional spark effect

  setTimeout(() => {
    giftContent.classList.remove('hidden'); // show the gift content
    giftBox.classList.add('hidden'); // hide the box itself
    backBtn?.classList.remove('hidden'); // show back button if present
  }, 1200);
});
