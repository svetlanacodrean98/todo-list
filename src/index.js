function createCategory(id, color, title) {
    let category = document.createElement("div")
    category.id = id
    setCategoryStyle(category, color, "200px", "auto")
    let categoryTitle = document.createElement("div")
    categoryTitle.innerHTML = title
    categoryTitle.style.fontSize = "18px"
    category.appendChild(categoryTitle)
    return category
}

function setCategoryStyle(category, color, width, height) {
    category.style.backgroundColor = color
    category.style.width = width
    category.style.height = height
    category.style.display = "flex"
    category.style.flexDirection = "column"
}

let container  = document.getElementById("content")

let todo = createCategory("todo", "pink", "TO DO:")

let input = document.createElement("input")
input.style.backgroundColor = "pink"
todo.appendChild(input)

container.appendChild(todo)


let inProgress = createCategory("inProgress", "#afeeee", "IN PROGRESS:")
container.appendChild(inProgress)


let done = createCategory("done", "#CFFDBC", "DONE:")
container.appendChild(done)


input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let task = document.createElement("div")
        task.classList.add("task")
        task.innerHTML = "● " + input.value
        input.value = ""
        todo.insertBefore(task, input)
        task.addEventListener("click", (event) => {
            if (task.parentNode.id == "todo") {
                inProgress.appendChild(task)
            }
            else if (task.parentNode.id == "inProgress") {
                done.appendChild(task)
            }
        })
    }
})