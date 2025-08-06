const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");
const button = document.getElementById("button");

button.addEventListener("click", addTask);

function addTask(e) {
  if (inputBox.value === "") {
    alert("Please Insert a Valid Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
