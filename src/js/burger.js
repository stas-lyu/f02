// document.querySelector(".trigger").onclick = function () {
//   OpenBurger();
// };
document.querySelector(".trigger").addEventListener("click", function Open() {
  document.getElementById("menu").classList.toggle("show");
});
