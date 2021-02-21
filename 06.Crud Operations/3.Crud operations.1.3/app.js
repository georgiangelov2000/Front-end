const ul = document.getElementById('list');
let form = document.getElementById('myForm');

form.addEventListener('submit', sendMessage);

function sendMessage(e) {
    e.preventDefault();
    let textInput = document.getElementById('myText').value;
    if (textInput === '') {
       alert('Enter the input please!')
    } else {
        const liElement = document.createElement('li')
        const spanElement = document.createElement('span')
        const editElement = document.createElement('button')
        const deleteElement = document.createElement('button')
        editElement.textContent = 'edit';
        deleteElement.textContent = 'remove';
        spanElement.textContent = textInput;
        liElement.appendChild(spanElement);
        liElement.appendChild(editElement);
        liElement.appendChild(deleteElement);
        document.getElementById('list').appendChild(liElement);
        form.reset();

    }
}


ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        if (button.textContent === 'edit') {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span)
            button.textContent = 'save'
        } else if (button.textContent === 'save') {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit'
        } else if (button.textContent === 'remove') {
            ul.removeChild(li);
        }
    }
})