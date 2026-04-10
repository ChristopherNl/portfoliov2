// On récupère le bouton et le menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

// On ajoute un écouteur d’événement au clic
menuToggle.addEventListener("click", function () {
  // On bascule la classe open sur le nav
  mainNav.classList.toggle("open");
});