document.getElementById("helloBtn").addEventListener("click", function() {
  alert("Hello! Thanks for visiting Bhullar Preet’s biography page 🚀");
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// Typing effect for header name
const text = "Bhullar Preet";
const typingElement = document.querySelector(".typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // typing speed (150ms per letter)
  }
}

typeEffect();
