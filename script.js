const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
const button = document.getElementById("button");

button.addEventListener("click", addTask);
listContainer.addEventListener("click", checkedRemove);

function addTask() {
  if (inputBox.value === "") {
    alert("Please Insert a Valid Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

function checkedRemove(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}
