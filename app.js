let button = document.querySelector("#button");
// let button = document.getElementById("button");
console.log(button);
button.addEventListener("click", function () {
  console.log("click");

  let menuDeroulant = document.querySelector("#menu-deroulant");
  menuDeroulant.classList.toggle("open");
});
function myFunction(x) {
    x.classList.toggle("change");
}
