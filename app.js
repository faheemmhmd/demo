const toast = document.querySelector('#toast');
const toastText = document.querySelector('#toastText');
let toastTimer;

function showToast(message) {
  toastText.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelector('#exploreButton').addEventListener('click', () => {
  document.querySelector('#gestures').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#configureButton').addEventListener('click', () => showToast('Shake twice is ready to configure'));
document.querySelector('#scanButton').addEventListener('click', () => showToast('Device capabilities refreshed'));
document.querySelector('#showAll').addEventListener('click', () => {
  document.querySelector('.extra').classList.toggle('show-extra');
  const item = document.querySelector('.extra');
  item.style.display = item.style.display === 'grid' ? '' : 'grid';
});
document.querySelectorAll('.shortcut').forEach((shortcut) => {
  shortcut.addEventListener('click', () => showToast(`${shortcut.dataset.name} added to your gestures`));
});
