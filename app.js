const svg = document.querySelector("svg");
const header = document.querySelector(".header-right");
console.log(header);

svg.addEventListener("click", () => {
  console.log("clicked");
//   header.style.display = "block !important";
  header.classList.toggle("active")
  console.log(header);
});
