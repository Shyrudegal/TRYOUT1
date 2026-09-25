const text = "Hello, Welcome to my little world.";
let index = 0;
const typedEl = document.getElementById("typed-text");

function typeWriter() {
  if (typedEl && index < text.length) {
    typedEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Dark mode
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "Light";
  } else {
    toggle.textContent = "Dark";
  }
});