document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = document.querySelector('input').value
    if(value !== '') {
      buildToDo(e.target['new-task-description'].value)
      form.reset()
    } else {}
  })

  function buildToDo(todo){
    let li = document.createElement('li')
    li.textContent=`${todo} `
    li.setAttribute('contenteditable', 'true')
    document.querySelector('#tasks').appendChild(li)
    let btn = document.createElement('button')
    btn.textContent = "x"
    li.appendChild(btn)
    btn.addEventListener('click', handleDelete)
    let select = document.createElement('select')
    let option = document.createElement('option')
    option.text = 'Choose a priority...'
    option.value = 'Choose a priority...'
    select.appendChild(option)
    option = document.createElement('option');
    option.text = 'Urgent'
    option.value = 'Urgent'
    select.appendChild(option)
    option = document.createElement('option');
    option.text = "Secondary"
    option.value = "Secondary"
    select.appendChild(option)
    option = document.createElement('option');
    option.text = "I will get to it eventually"
    option.value = "I will get to it eventually"
    select.appendChild(option)
    li.appendChild(select)
    selectElements = document.querySelectorAll('select')
    output = selectElements[0].value

    //Resetting the li element
    

    // allow delete after li is edited


    //sorting li elements by priority
    

    //alter color based on dropdown selection
    select.addEventListener('change', (e) => {
      let selectedValue = e.target.value;
      let li = e.target.parentNode;
      // Remove all existing color classes
      li.classList.remove('urgent', 'secondary', 'eventually');
      // Add the appropriate color class based on the selected value
      if (selectedValue === 'Urgent') {
        li.classList.add('urgent');
      } else if (selectedValue === 'Secondary') {
        li.classList.add('secondary');
      } else if (selectedValue === 'I will get to it eventually') {
        li.classList.add('eventually');
      }
    });
  }
  function handleDelete(e){
    e.target.parentNode.remove()
  }

//UPdate h1 to h2
let itBeH2 = document.querySelector('h1')
itBeH2.outerHTML = '<h2>' + itBeH2.innerHTML + '</h2>'

//add button class and style - style on css sheet
document.querySelectorAll('input')[1].className = "button"

//update input field styling programatically
document.querySelectorAll('input')[0].className = "input"

  })