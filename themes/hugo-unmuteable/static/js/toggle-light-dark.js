const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function() {
  document.documentElement.classList.toggle("darkness");
});
