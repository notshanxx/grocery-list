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

document.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
      add()
    }
})
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
    createDiv.style.animation = "deleteanimation .5s cubic-bezier(0.5,0.3,0.3,0.5)"
    setTimeout((arg) => createDeleteBtn.parentNode.remove(), 500)
    
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


