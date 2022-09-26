const Ham = document.getElementsByClassName("hamburger")[0];
const Link = document.getElementsByClassName("links")[0];
const Close = document.getElementsByClassName("close")[0];

Ham.addEventListener("click", () => {
  Ham.style.display = "none";
  Close.style.display = "initial";
  Link.classList.toggle("active");
});
Close.addEventListener("click", () => {
  Close.style.display = "none";
  Link.classList.remove("active");
  Ham.style.display = "initial";
});
