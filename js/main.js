// Contact form logic
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formMessage = document.getElementById("formMessage");

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Sending...";
  formMessage.style.color = "black";

  setTimeout(() => {
    formMessage.textContent = "Thanks! Your message has been sent.";
    formMessage.style.color = "green";
    this.reset();
  }, 1000);
});

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Dark/Light mode toggle logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
