function solve() {
    let sendButton = document.getElementsByClassName('sendMessage')[0];
    sendButton.addEventListener('click', function () {

        let message = document.getElementById('message');
        let list = document.getElementsByTagName('ul')[0];
        let deleteButton = document.createElement('button');
        let done = document.createElement('button');
        let secondList = document.getElementsByTagName('ul')[1];
        done.className = "success";
        done.textContent = 'Done'
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete'


        let newElement = document.createElement('li');
        newElement.textContent = message.value;
        newElement.appendChild(deleteButton)
        newElement.appendChild(done)
        list.appendChild(newElement)
        newElement.className='listElement'
        message.value=''


        newElement.style.listStyle = 'none'


        deleteButton.addEventListener('click', function (e) {
            let currentElement = deleteButton.parentElement;
            currentElement.remove();
        })

        done.addEventListener('click', function () {
            let doneElement = done.parentElement;
            doneElement.removeChild(done);
            doneElement.removeChild(deleteButton)
            let doneLiElement = document.createElement('li');
            doneLiElement.classList.add = 'doneLiElement';
            doneLiElement.innerHTML = doneElement.innerHTML;
            doneLiElement.appendChild(deleteButton)
            secondList.appendChild(doneLiElement)
            doneLiElement.style.listStyle = 'none'
            doneLiElement.className='doneElement'
        })

    })
}