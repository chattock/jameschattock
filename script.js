function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showPopup() {
  document.getElementById('cvPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('cvPopup').style.display = 'none';
}

