const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const header = document.querySelector(".header");

let lastScroll = 0;

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("show");
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.src = "assets/icons/sun.svg";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.src = "assets/icons/sun.svg";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.src = "assets/icons/moon.svg";
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
