// HTML Element constants
const addButton = document.querySelector('.add-task-button')
const taskTable = document.getElementById('todo-table')
const taskWarning = document.getElementById('task-warning')
const deadlineWarning = document.getElementById('deadline-warning')

function toggleMenu(){
    const menu = document.querySelector('.card')
    if(menu.style.display == "none") menu.style.display = "block"
    else menu.style.display = "none"
}

function createRowEl(taskName, taskDueDate){
    var newRow = taskTable.insertRow(-1)
    var taskDesc = newRow.insertCell(0)
    var taskDate = newRow.insertCell(1)
    var taskStatus = newRow.insertCell(2)
    var taskActions = newRow.insertCell(3)

    taskDesc.innerHTML = taskName
    taskDate.innerHTML = taskDueDate
    taskStatus.innerHTML = "To be done"
    taskActions.innerHTML = "<div class='action' onclick='deleteTask(event)'>Delete</div> | <div class='action' onclick='markComplete(event)'>Mark Complete</div>"
}

function markComplete(e){
    // status cell element
    const statusCell = e.srcElement.parentElement.parentElement.cells[2]
    statusCell.innerHTML = "Complete"
    statusCell.style.color = "green"
}

function deleteTask(e){
    // task row element
    const taskRow = e.srcElement.parentElement.parentElement
    taskRow.remove()

}

addButton.addEventListener('click', () => {
    const taskName = document.getElementById('taskDesc').value.trim()
    const taskDueDate = document.getElementById('deadline').value
    
    // if the task description is missing
    if(taskName == ""){
        taskWarning.style.display = "block"
    }
    if(taskDueDate == ""){
        deadlineWarning.style.display = "block"
    }
    if(taskName != "" && taskDueDate != ""){
        // remove warnings if theyre there
        taskWarning.style.display = "none"
        deadlineWarning.style.display = "none"

        // create a row and append to table 
        createRowEl(taskName, taskDueDate)

        // toggle menu
        toggleMenu()

    }
})