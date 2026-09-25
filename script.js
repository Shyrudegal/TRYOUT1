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
    toggle.textContent = "Light ☀️";
  } else {
    toggle.textContent = "Dark 🌙";
  }

const hour = new Date().getHours();
let greet = "Thanks for visiting!";
if(hour < 12) greet = "Good morning! Thanks for visiting!";
else if(hour < 18) greet = "Good afternoon! Thanks for visiting!";
else greet = "Good evening! Thanks for visiting!";

console.log(greet);
});