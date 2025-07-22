// Typing effect for tagline
const tagline = "Web Developer • Designer • Creator";
const taglineElem = document.getElementById("tagline");
taglineElem.textContent = ""; // Clear initial text

let idx = 0;
function typeTagline() {
  if (idx < tagline.length) {
    taglineElem.textContent += tagline[idx];
    idx++;
    setTimeout(typeTagline, 70);
  }
}
typeTagline();

// Smooth scrolling for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      window.scrollTo({
        top: target.offsetTop - 40, // adjust offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
let darkMode = true; // default is dark mode

themeToggle.addEventListener('click', function() {
  darkMode = !darkMode;
  document.body.classList.toggle('lightmode', !darkMode);
  themeIcon.textContent = darkMode ? "🌙" : "☀️";
});

// Optional: preserve theme across reloads (uncomment to enable)
// if(localStorage.getItem('theme') === 'light') {
//   document.body.classList.add('lightmode');
//   themeIcon.textContent = "☀️";
//   darkMode = false;
// }
// themeToggle.addEventListener('click', function() {
//   localStorage.setItem('theme', darkMode ? 'dark' : 'light');
// });
