// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("active")));

// Smooth scroll for nav
const headerHeight = document.querySelector(".header").offsetHeight;
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute("href").substring(1));
    if(target){
      window.scrollTo({ top: target.offsetTop - headerHeight, behavior: "smooth" });
    }
  });
});

// Menu drag scroll (mobile & desktop)
const menuWrapper = document.querySelector(".menu-wrapper");
let isDown = false;
let startX, scrollLeft;

if(menuWrapper){
  menuWrapper.addEventListener("mousedown", e => {
    isDown = true;
    menuWrapper.classList.add("active-drag");
    startX = e.pageX - menuWrapper.offsetLeft;
    scrollLeft = menuWrapper.scrollLeft;
  });
  menuWrapper.addEventListener("mouseleave", () => isDown = false);
  menuWrapper.addEventListener("mouseup", () => isDown = false);
  menuWrapper.addEventListener("mousemove", e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - menuWrapper.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    menuWrapper.scrollLeft = scrollLeft - walk;
  });
}

// Order buttons
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => alert("Thanks for your order! We'll prepare it shortly ☕"));
});
