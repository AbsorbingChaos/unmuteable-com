// menu toggle 



// light and dark mode toggle

const btn = document.querySelector(".ux__header__icon--lightswitch");
const currentTheme = localStorage.getItem("theme")

if (currentTheme == "dark") {
  document.documentElement.classList.add("darkness");
}

btn.addEventListener("click", function() {
  
  document.documentElement.classList.toggle("darkness");
  
  let theme = "light";
  if (document.documentElement.classList.contains("darkness")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);

});