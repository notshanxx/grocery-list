const input = document.querySelector("input")
const saveBtn = document.querySelector("#save-btn")
const pEl = document.querySelector("p")
const list = document.querySelector("#list")
saveBtn.addEventListener('click', function(){
  // check if input have value
  if(input.value){
    add()
  }
}
)

// Adding the list when clicked enter key
document.addEventListener("keyup", ({key}) => {
    if (key === "Enter" && input.value) {
      add()
    }
})



// add the list
// H3 = the list text
// Div = the list items container
// CheckBtn = the check button
// Delete Btn = the delete button

function add(){
  
  let createH3 = document.createElement("h3")
  let createDiv = document.createElement("div")
  let createCheckBtn = document.createElement("img")
  let createDeleteBtn = document.createElement("img")
  
  createCheckBtn.src = "check.svg"
  createCheckBtn.setAttribute("id", "check-btn")
  createCheckBtn.addEventListener('click', () => {
    createDiv.classList.toggle("checked")
  })
  
  createDeleteBtn.src = "trash-2.svg"
  createDeleteBtn.setAttribute("id", "delete-btn")
  createDeleteBtn.addEventListener("click", () =>{ 
    
    
    // Works like magic Delete the list on clicking delete btn
    
    createDiv.style.animation = "deleteanimation .5s cubic-bezier(0.5,0.3,0.3,0.5)"
    
    // Delay .5s when deleting making animation first
    
    setTimeout(() => createDeleteBtn.parentNode.remove(), 500)
    
  })
  
  createH3.textContent = input.value
  //clear input
  input.value = ""
  createH3.setAttribute("id", "list")
  createDiv.setAttribute("class", "item-container")
  
  createDiv.appendChild(createCheckBtn)
  createDiv.appendChild(createH3)
  createDiv.appendChild(createDeleteBtn)
  list.appendChild(createDiv)
}


