  //Menu responsive
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

// Setup and start animation
var typed = new Typed('#myName', {
  strings: ['Israt Jahan'],
  typeSpeed: 80,
  showCursor: false
});

//Progressbar animation
function animateProgressBars() {
  const bars = document.querySelectorAll('.skill .line');

  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && !bar.classList.contains('animated')) {
      bar.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars); 

// Wow animation
new WOW().init();

//Scroll Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });