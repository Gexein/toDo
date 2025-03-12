const addTaskForm = document.querySelector('.todo__flex-element-add form');
const select = document.querySelector('form select')
const highBlock = document.querySelector('.todo__high')
const mediumBlock = document.querySelector('.todo__medium')
const lowBlock = document.querySelector('.todo__low')
const dialogDoneList = document.querySelector('.dialog__done-list')
const defaultInputValue = ''
let toDoList = []
let doneList = []
const priorities = { HIGH: 'high', MEDIUM: 'medium', LOW: 'low' }

function addTask(event) {
    event.preventDefault();
    let allTasks = document.querySelectorAll('.checkbox__task')
    if (allTasks !== null) {
        for (element of allTasks) {
            element.remove()
        }
    }
    const taskInput = document.querySelector('form input')
    let taskInputValue = taskInput.value
    if (select.value === 'low') {
        toDoList.push({ task: taskInputValue, priority: priorities.LOW })
    }
    else if (select.value === 'medium') {
        toDoList.push({ task: taskInputValue, priority: priorities.MEDIUM })
    }
    else {
        toDoList.push({ task: taskInputValue, priority: priorities.HIGH })
    }
    event.target.reset()
    for (const obj of toDoList) {
        let blockSample = `<div class="checkbox__task">
                <div class="checkbox__container">
                <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
                    <input type="checkbox" id="task" onclick="changeStatus(event)">
                    <div class="todo__task">${obj.task}</div>
                </div>
                <button type="button" class="delete" onclick="deleteTask(event)">Удалить задачу</button>
            </div>`;
        if (obj.priority === 'low') {
            lowBlock.insertAdjacentHTML('beforeend', blockSample)
        }
        else if (obj.priority === 'medium') {
            mediumBlock.insertAdjacentHTML('beforeend', blockSample)
        }
        else {
            highBlock.insertAdjacentHTML('beforeend', blockSample)
        }
    }
}

addTaskForm.addEventListener('submit', addTask)

function deleteTask(event) {
    const neededTextContent = String(event.target.parentElement.childNodes[1].childNodes[5].textContent)
    const neededPriority = String(event.target.parentElement.parentElement.id);
    toDoList.forEach((obj) => {
        if (obj.task === neededTextContent && obj.priority === neededPriority) {
            let neededIndex = toDoList.indexOf(obj)
            toDoList.splice(neededIndex, 1)
        }
    })
    event.target.parentElement.remove()
}

function changeStatus(event) {
    const neededTextContent = String(event.target.parentElement.childNodes[5].textContent)
    const neededPriority = String(event.target.parentElement.parentElement.parentElement.id);

    toDoList.forEach((obj) => {
        if (obj.task === neededTextContent && obj.priority === neededPriority) {
            let neededIndex = toDoList.indexOf(obj)
            let cutterArray = toDoList.splice(neededIndex, 1)
            doneList = doneList.concat(cutterArray)
        }
    })

    dialogDoneList.insertAdjacentHTML('afterbegin', `<li class="dialog__done-item">${neededTextContent}</li>`)
    event.target.parentElement.parentElement.remove()
}









