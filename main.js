const input = document.querySelector("input")
const saveBtn = document.querySelector("#save-btn")
const pEl = document.querySelector("p")
const list = document.querySelector("#list")
saveBtn.addEventListener('click', () => add())

document.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
      add()
    }
})
function add(){
  // Create the list elements
  let createH3 = document.createElement("h3");
  let createDiv = document.createElement("div");
  let createCheckBtn = document.createElement("img");
  let createDeleteBtn = document.createElement("img");
  
  createCheckBtn.src = "check.svg";
  createCheckBtn.setAttribute("id", "check-btn");
  createDeleteBtn.src = "trash-2.svg";
  createDeleteBtn.setAttribute("id", "delete-btn")
  createDeleteBtn.addEventListener("click", () => createDeleteBtn.parentNode.remove() )
  
  createDiv.appendChild(createCheckBtn)
  
  createH3.textContent = input.value;
  createH3.setAttribute("id", "list");
  createDiv.setAttribute("class", "item-container");
  createDiv.appendChild(createH3);
  createDiv.appendChild(createDeleteBtn)
  list.appendChild(createDiv);
}


