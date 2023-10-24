let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target['new-task-description'].value)
    form.reset()
})

function buildToDo(todo){
    let li = document.createElement('li')
    li.textContent = `${todo} `
    document.querySelector('#tasks').appendChild(li)
    let btn = document.createElement('button')
    li.appendChild(btn)
    btn.addEventListener('click', handleDelete)
    btn.textContent = " x "
    form.reset();

}

function handleDelete(e){
    e.target.parentNode.remove()
}

//UPdate h1 to h2
let itBeH2 = document.querySelector('h1')
itBeH2.outerHTML = '<h2>' + itBeH2.innerHTML + '</h2>'

//add button class and style - style on css sheet
document.querySelectorAll('input')[1].className = "button"

