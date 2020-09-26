const btn = document.querySelector(".ux__header--toggle");
const currentTheme = localstorage.getItem("theme")

if (currentTheme == "dark") {
  document.body.classList.add("darkness");
}

btn.addEventListener("click", function() {
  
  document.documentElement.classList.toggle("darkness");
  
  let theme = "light";
  if (document.body.classList.contains("darkness")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);

});