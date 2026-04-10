document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  // Toggle principal
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
    toggleIcon();
  });

  // Fonction icône (hamburger ↔ croix)
  function toggleIcon() {
    if (mainNav.classList.contains("open")) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  }

  // Fermer au clic sur lien
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function() {
      mainNav.classList.remove('open');
      toggleIcon();
    });
  });

  // Fermer en cliquant dehors (sur overlay)
  mainNav.addEventListener('click', function(e) {
    if (e.target === mainNav) {
      mainNav.classList.remove('open');
      toggleIcon();
    }
  });
});