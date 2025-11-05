const toggleBtn = document.getElementById("toggleBtn");
const navbarContent = document.getElementById("navbarSupportedContent");

toggleBtn.addEventListener("click", () => {
  navbarContent.classList.toggle("show");
});
