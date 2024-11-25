document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('itemInput');
  const addButton = document.getElementById('addButton');
  const list = document.getElementById('list');

  // Play a festive sound when adding or marking an item
  const playSound = () => {
    const audio = new Audio('https://freesound.org/data/previews/496/496564_10241893-lq.mp3');
    audio.play();
  };

  // Load the saved list from localStorage when the page is opened
  const loadList = () => {
    const savedList = JSON.parse(localStorage.getItem('christmasList')) || [];
    savedList.forEach(item => {
      addListItem(item.name, item.purchased);
    });
  };

  // Save the list to localStorage
  const saveList = () => {
    const listItems = [];
    document.querySelectorAll('li').forEach(li => {
      const name = li.querySelector('span').textContent;
      const purchased = li.querySelector('span').style.textDecoration === 'line-through';
      listItems.push({ name, purchased });
    });
    localStorage.setItem('christmasList', JSON.stringify(listItems));
  };

  // Add an item to the list
  const addListItem = (name, purchased = false) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span style="text-decoration: ${purchased ? 'line-through' : 'none'}; color: ${purchased ? '#777' : '#333'}">${name}</span>
      <div>
        <button class="mark">🎁 Mark as Bought</button>
        <button class="delete">🗑 Delete</button>
      </div>
    `;
    list.appendChild(listItem);
    saveList();
  };

  addButton.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
      addListItem(value);
      playSound();
      input.value = '';  // Clear input field
    }
  });

  // Handle mark and delete actions
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      e.target.closest('li').remove();
      saveList();
    } else if (e.target.classList.contains('mark')) {
      const item = e.target.closest('li').querySelector('span');
      item.style.textDecoration = item.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      item.style.color = item.style.textDecoration === 'line-through' ? '#777' : '#333';
      saveList();
      playSound();
    }
  });

  // Load the list when the page loads
  loadList();
});