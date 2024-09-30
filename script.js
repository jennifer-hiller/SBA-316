const ulElm = document.getElementById("list"); // get element by id
function countLiElms() {
  const liElms = ulElm.querySelectorAll("li"); // get elements using querySelectorAll
  let count = 0;
  liElms.forEach((li) => {
    // iterate
    count++;
  }); // I know there was a better way around this but I wanted to get that loop in
  document.getElementById("total").textContent = count; // textContent
}
document.addEventListener("DOMContentLoaded", countLiElms);
document.getElementById("createNew").addEventListener("click", () => {
  // event listener
  const li = document.createElement("li"); // createElement
  const liElms = ulElm.querySelectorAll("li"); // querySelectorAll
  const count = liElms.length;
  li.textContent = `item${count + 1}`;
  document.getElementById("list").appendChild(li); // appendChild
  countLiElms();
});
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed"); // modify class
  }
});
const form1Elm = document.getElementById("form1");
form1Elm.addEventListener("submit", (event) => {
  // event listener
  event.preventDefault();
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  if (lastName === "") {
    // DOM-based validation
    alert("You need to add a last name");
    return;
  }
  alert(`Hello, ${name} ${lastName}!`); // BOM alert
});
const radioElm = document.getElementById("modify");
const checkBoxElm = document.getElementById("disable");
checkBoxElm.addEventListener("change", () => {
  // event listener
  if (checkBoxElm.checked) {
    radioElm.setAttribute("disabled", true); // modify attribute
  } else {
    radioElm.removeAttribute("disabled"); // modify attribute
  }
});
const screenSizeButton = document.querySelector(".screenSizeButton");
screenSizeButton.addEventListener("click", () => {
  // event listener
  alert(`The screen size is ${window.innerWidth}x${window.innerHeight}`); // BOM: window innerWidth and innerHeight
});
document.getElementById("changeColor").addEventListener("click", () => {
  // event listener
  const nextSibling = document.getElementById("changeColor").nextElementSibling; // nextElementSibling
  nextSibling.style.color = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; // modify style
});
const htmlTemplate = document.getElementById("htmlTemplate"); // html templating
const clonedTemplate = htmlTemplate.content.cloneNode(true);
document.body.appendChild(clonedTemplate);
