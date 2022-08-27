const input = document.querySelector("input")
const saveBtn = document.querySelector("#save-btn")
const pEl = document.querySelector("p")
const list = document.querySelector("#list")

// Local Storage
let savedList = []
let checkedList = []

let lastEnteredListFromLocalStorage  = JSON.parse(localStorage.getItem("last-entered-list"))

let lastCheckedListFromLocalStorage  = JSON.parse(localStorage.getItem("last-checked-list"))


if(lastEnteredListFromLocalStorage && lastCheckedListFromLocalStorage){
 savedList = lastEnteredListFromLocalStorage
 checkedList = lastCheckedListFromLocalStorage
}








//retrieve last entered list and checked list from local Storage

window.onload = () => {
  
  for (var i = 0; i < savedList.length; i++) {
    
    add(savedList[i])
    
    
    console.log(savedList[i])
    
  }
  
  
  setTimeout( () => {
    
    for (var i = 0; i < checkedList.length; i++) {
    
      if (checkedList[i] === true) {
    
        list.children[i].classList.add("checked")
    
        console.log("checked")
    
      } else if (checkedList[i] === false) {
    
        list.children[i].classList.remove("checked")
        console.log("unchecked")
    
      }
  }}, 700 )
  
  
  
}



// LISTEN FOR CLICK
saveBtn.addEventListener('click', function(){
  // check if input have the same value
  if(savedList.includes(input.value)){
    alert("duplicate list")
  }else if(input.value){
    add(input.value)
  }
}
)

// Adding the list when clicked enter key
document.addEventListener("keyup", ({key}) => {
    if (key === "Enter" && input.value) {
      add(input.value)
    }
})



// add the list
// H3 = the list text
// Div = the list items container
// CheckBtn = the check button
// Delete Btn = the delete button
// inputValue = input.value

function add(inputValue){
  
  let createH3 = document.createElement("h3")
  let createDiv = document.createElement("div")
  let createCheckBtn = document.createElement("img")
  let createDeleteBtn = document.createElement("img")
  
  createCheckBtn.src = "check.svg"
  createCheckBtn.setAttribute("id", "check-btn")
  
  createDeleteBtn.src = "trash-2.svg"
  createDeleteBtn.setAttribute("id", "delete-btn")
  
  createH3.textContent = inputValue
  
  // save to LocalStorage
  saveToSavedList()
  
  
  
  
  
  // DELETE FUNCTIONS
  
  createDeleteBtn.addEventListener("click", () =>{ 
    
    // Delete the list from local storage
      let index = savedList.indexOf(createH3.textContent)
      savedList.splice(index, 1)
      checkedList.splice(index, 1)
      localStorage.removeItem("last-entered-list")
      localStorage.removeItem("last-checked-list")
      
      localStorage.setItem("last-checked-list", JSON.stringify(checkedList))
      localStorage.setItem("last-entered-list", JSON.stringify(savedList))
      
    
    
    
    // Delete the list on clicking delete btn
    
    createDiv.style.animation = "deleteanimation .5s cubic-bezier(0.5,0.3,0.3,0.5)"
    
    // Delay .5s when deleting making animation first
    
    setTimeout(() => createDeleteBtn.parentNode.remove(), 500)
  //  console.log(createH3.value)
   // console.log(createDeleteBtn.parentNode.createH3.value)
    

    
    
  })
  
  
  
  
  
  
  
  //  CHECK FUNCTIONS
  
    createCheckBtn.addEventListener('click', () => {
    
      
      let index = savedList.indexOf(createH3.textContent)
      
      console.log(savedList.includes(createH3.textContent))
       console.log(index)
       
      if (checkedList[index] === false) {
        checkedList.splice(index, 1, true)
        localStorage.removeItem("last-checked-list")
        localStorage.setItem("last-checked-list", JSON.stringify(checkedList))
        createDiv.classList.add("checked")
      }else if(checkedList[index] === true){
        checkedList.splice(index, 1, false)
        localStorage.removeItem("last-checked-list")
        localStorage.setItem("last-checked-list", JSON.stringify(checkedList))
        createDiv.classList.remove("checked")
      }
    
    
    
  })

  
  
  
  //clear input
  input.value = ""
  createH3.setAttribute("id", "list")
  createDiv.setAttribute("class", "item-container")
  
  createDiv.appendChild(createCheckBtn)
  createDiv.appendChild(createH3)
  createDiv.appendChild(createDeleteBtn)
  list.appendChild(createDiv)
  
}


function saveToSavedList() {
  
  if(input.value){
  
   savedList.push(input.value)
   localStorage.setItem("last-entered-list", JSON.stringify(savedList))
   
   checkedList.push(false)
   localStorage.setItem("last-checked-list", JSON.stringify(checkedList))
}

}




