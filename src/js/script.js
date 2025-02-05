function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
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

document.addEventListener('DOMContentLoaded', () => {
  showSection('intro'); 
});
