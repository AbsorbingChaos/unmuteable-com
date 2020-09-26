const btn = document.querySelector(".ux__header--toggle");

btn.addEventListener("click", function() {
  document.documentElement.classList.toggle("darkness");
});
