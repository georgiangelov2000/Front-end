function addItem() {
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText')
    liElement.className = 'listElement';
    liElement.textContent = inputElement.value;
    ulElement.appendChild(liElement);
    inputElement.value = ''
    let deleteButton = document.createElement('span');
    deleteButton.textContent = ' Delete ';
    liElement.appendChild(deleteButton);

    deleteButton.style.color = 'red';
    deleteButton.style.cursor = 'pointer'
    deleteButton.addEventListener('click', deleteElement);

    function deleteElement() {
        let parent = deleteButton.parentElement;
        parent.remove();
    }
}