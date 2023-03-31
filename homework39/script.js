const emojis = document.querySelectorAll('.emoji');

function updateCount(event) {
  const emoji = event.currentTarget;
  const count = emoji.querySelector('.count');
  count.textContent = parseInt(count.textContent) + 1;
}

emojis.forEach(emoji => {
  emoji.addEventListener('click', updateCount);
});
