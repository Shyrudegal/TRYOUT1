const welcomeTest = "Hello, Welcome! to my little world."; 
const typedE1 = document.querySelector('p');
let index = 0;

if(typedE1){
    const originalText = typedE1.textContent;
    typedE1.textContent = "";
    function typeWriter() {
        if (index < welcomeTest.length) {
            typedE1.textContent += welcomeTest.charAt(index);
            index++;
            setTimeout(typeWriter, 60);
        }
      }
    typeWriter();
}

const themeBtn = document.createElement('button');
themeBtn.textContent = '🌙 Dark';
themeBtn.style.cssText = 'position: fixed; top: 15px; right: 15px; padding: 7px 14px; border-radius: 20px; border: none; cursor: pointer; background: #ff8c42; color:white; z-index:999;';
document.body.appendChild(themeBtn);

themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
} 

const hour = new Date().getHours();
let greet = "";
if (hour < 12) greet = "Good Morning☀️";
else if (hour < 18) greet = "Good Afternoon🌤️";
else greet = "Good Evening🌙";
console.log(greet + " - cilla's portfolio viewed");