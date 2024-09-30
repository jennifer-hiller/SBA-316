const ulElm = document.getElementById("list");
function countLiElms() {
  const liElms = ulElm.querySelectorAll("li");
  let count = 0;
  liElms.forEach((li) => {
    count++;
  }); // I know there was a better way around this but I wanted to get that loop in
  document.getElementById("total").textContent = count;
}
document.addEventListener("DOMContentLoaded", countLiElms);
document.getElementById("createNew").addEventListener("click", () => {
  const li = document.createElement("li");
  const count = ulElm.querySelectorAll("li").length;
  li.textContent = `item${count + 1}`;
  document.getElementById("list").appendChild(li);
  countLiElms();
});
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
const form1Elm = document.getElementById("form1");
form1Elm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElm = document.getElementById("name");
  const name = inputElm.value;
  alert(`Hello, ${name}!`);
});
const radioElm = document.getElementById("modify");
const checkBoxElm = document.getElementById("disable");
checkBoxElm.addEventListener("change", () => {
  if (checkBoxElm.checked) {
    radioElm.setAttribute("disabled", true);
  } else {
    radioElm.removeAttribute("disabled");
  }
});
const screenSizeButton = document.querySelector(".screenSizeButton");
screenSizeButton.addEventListener("click", () => {
  alert(`The screen size is ${window.innerWidth}x${window.innerHeight}`);
});
document.getElementById("changeColor").addEventListener("click", () => {
  const nextSibling = document.getElementById("changeColor").nextElementSibling;
  nextSibling.style.color = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});
