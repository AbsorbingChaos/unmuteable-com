// light and dark mode toggle

const lightswitch = document.querySelector(".ux__header__icon--lightswitch");
const currentTheme = localStorage.getItem("theme")

if (currentTheme == "dark") {
  document.documentElement.classList.add("darkness");
}

lightswitch.addEventListener("click", function() {
  
  document.documentElement.classList.toggle("darkness");
  
  let theme = "light";
  if (document.documentElement.classList.contains("darkness")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);

});

// menu toggle 

const menubtn = document.querySelector(".ux__header__icon--menu");
const menu = document.querySelector(".ux__header__nav");

menubtn.addEventListener("click", function() {
  menu.classList.toggle("show");
});
