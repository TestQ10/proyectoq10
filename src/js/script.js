function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";

  if (navLinks.style.display === "flex") {
    navLinks.addEventListener('click', function hideOnClick() {
      navLinks.style.display = "none";
      navLinks.removeEventListener('click', hideOnClick); 
    });
  }
}

function hideSections() {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
}

function showSection(sectionId) {
  hideSections();
  const section = document.getElementById(sectionId);
  section.style.display = 'block'; 
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('intro'); 
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    if (button.textContent.includes("¡Afíliate ahora!")) {
      button.addEventListener("click", openPopup);
    }
  });
});


