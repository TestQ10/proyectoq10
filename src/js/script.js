function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";

  if (navLinks.style.display === "flex") {
    navLinks.addEventListener("click", function hideOnClick() {
      navLinks.style.display = "none";
      navLinks.removeEventListener("click", hideOnClick);
    });
  }
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/*document.getElementById('openIntro').addEventListener('click', function() {
  console.log('openIntro');
  openPopup(); 
});*/

function openPopup(e) {
  e.preventDefault();
  console.log('openPopup');
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.querySelectorAll('.open').forEach(button => {
  console.log('button', button);
  button.addEventListener('click', openPopup);
});

document.addEventListener("DOMContentLoaded", () => {
  showSection("intro");
});
