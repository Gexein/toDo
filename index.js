const addTaskForm = document.querySelector('.todo__flex-element-add form');
const select = document.querySelector('form select')
const highBlock = document.querySelector('.todo__high')
const mediumBlock = document.querySelector('.todo__medium')
const lowBlock = document.querySelector('.todo__low')
const defaultInputValue = ''
let toDoList = [
    { task: 'Побрить ноги', priority: 'low' },
    { task: 'Проветрить шкаф', priority: 'low' },
    { task: 'Приготовить лягушачьи лапки', priority: 'medium' },
    { task: 'Доказать всем, что ты хороший', priority: 'medium' },
    { task: 'Сходить на концерт Газманова', priority: 'high' },
    { task: 'Поспать', priority: 'high' }
]

const priorities = { HIGH: 'high', MEDIUM: 'medium', LOW: 'low' }


// Это первая версия кода 

// function addTask(event) {
//     event.preventDefault();
//     const taskInput = document.querySelector('form input')
//     let taskInputValue = taskInput.value
// let blockSample = `<div class="checkbox__task">
//                     <div class="checkbox__container">
//                     <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
//                         <input type="checkbox" id="task">
//                         <div class="todo__task"> ${taskInputValue}
//                         </div>
//                     </div>
//                     <button type="button">Удалить задачу</button>
//                 </div>`
//     if (select.value === 'low') {
//         lowBlock.insertAdjacentHTML('beforeend', blockSample)
//     }
//     else if (select.value === 'medium') {
//         mediumBlock.insertAdjacentHTML('beforeend', blockSample)
//     }
//     else {
//         highBlock.insertAdjacentHTML('beforeend', blockSample)
//     }
//     event.target.reset()
// }

// Это новая версия кода 
for (const obj of toDoList) {
    console.log(obj.task)
}

function addTask(event) {
    event.preventDefault();
    // let blockSample = `<div class="checkbox__task">
    //                 <div class="checkbox__container">
    //                 <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
    //                     <input type="checkbox" id="task">
    //                     <div class="todo__task">` + toDoList.task.task + `</div>
    //                 </div>
    //                 <button type="button">Удалить задачу</button>
    //             </div>`;

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
        if (obj.priority === 'low') {
            lowBlock.insertAdjacentHTML('beforeend', `<div class="checkbox__task">
                <div class="checkbox__container">
                <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
                    <input type="checkbox" id="task">
                    <div class="todo__task">${obj.task}</div>
                </div>
                <button type="button">Удалить задачу</button>
            </div>`)
        }
        else if (obj.priority === 'medium') {
            mediumBlock.insertAdjacentHTML('beforeend', `<div class="checkbox__task">
            <div class="checkbox__container">
            <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
                <input type="checkbox" id="task">
                <div class="todo__task">${obj.task}</div>
            </div>
            <button type="button">Удалить задачу</button>
        </div>`)
        }
        else {
            highBlock.insertAdjacentHTML('beforeend', `<div class="checkbox__task">
            <div class="checkbox__container">
            <div class="checkbox__tip-left">Нажмите сюда, если задача выполнена</div>
                <input type="checkbox" id="task">
                <div class="todo__task">${obj.task}</div>
            </div>
            <button type="button">Удалить задачу</button>
        </div>`)
        }
    }

}
function deleteTask(event) {

}


addTaskForm.addEventListener('submit', addTask)

