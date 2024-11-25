document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('itemInput');
  const addButton = document.getElementById('addButton');
  const list = document.getElementById('list');

  // Play a festive sound when adding or marking an item
  const playSound = () => {
    const audio = new Audio('https://freesound.org/data/previews/496/496564_10241893-lq.mp3');
    audio.play();
  };

  // Add an item to the list
  addButton.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${value}</span>
        <div>
          <button class="mark">🎁 Mark as Bought</button>
          <button class="delete">🗑 Delete</button>
        </div>
      `;
      list.appendChild(listItem);
      playSound();
      input.value = '';  // Clear input field
    }
  });

  // Handle mark and delete actions
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      e.target.closest('li').remove();
    } else if (e.target.classList.contains('mark')) {
      const item = e.target.closest('li').querySelector('span');
      item.style.textDecoration = 'line-through';
      item.style.color = '#777';
      e.target.remove();
      playSound();
    }
  });
});
