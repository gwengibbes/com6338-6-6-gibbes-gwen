var formEl = document.getElementById('add-todo');
var toDoEl = document.getElementById('todo-list');
//Use form submit event//
formEl.onsubmit = function (eventProperties) {
    eventProperties.preventDefault()
    console.log('submitted')
    // Getting the textbox information from the form//
    var input = eventProperties.target[0]
    //Should not add a todo when clicking button without typing value//
    //Should not ad a todo when clicking button if input is filled with only spaces(trim)//
    if (input.value.trim() === '') {
        return
    }
    else {
        //Generate a list item when adding a todo//
        let li = document.createElement('li');
        //Generate button element within list item element when adding todo//
        let button = document.createElement('button');
        //Generate button element containing text of todo when adding todo//
        button.innerHTML = input.value
        //Mark todo as done by striking through text when todo is clicked ONCE//
        button.addEventListener('click', function (singleButtonEventProperties) {
            singleButtonEventProperties.preventDefault()
            //After striking through, the item should be removed from the list//
            if (button.style.textDecoration == 'line-through') {
                li.remove();
                return
            }
            button.style.textDecoration = 'line-through';
            console.log('to do item was clicked')
        });
        //Should remove todo from list when clicking todo TWICE//
        button.addEventListener('dblclick', function (doubleButtonEventProperties) {
            doubleButtonEventProperties.preventDefault()
            //Be able to remove todos from middle of the list// 
            // button.style.textDecoration = 'line-through';
            li.remove()
            console.log('to do item was double clicked')
        });
        //Add multiple todos//
        //When adding the todo item to the list, that item MUST be a button element nested within a li element//
        li.appendChild(button)
        toDoEl.appendChild(li)
        //Set value of input element to empty string after adding todo//
        input.value = ''
    }
}
