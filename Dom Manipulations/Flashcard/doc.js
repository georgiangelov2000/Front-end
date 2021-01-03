function card() {

    let showContainer = document.getElementById('show');
    let containerElement = document.getElementsByClassName('container')[0]
    let exitButton=document.getElementById('exit');

    showContainer.addEventListener('click', function () {
        let interval;
        interval = setTimeout(function () {
            containerElement.style.display = 'block'
        }, 1000)
    })

    exitButton.addEventListener('click',function(){
        let interval;
        interval=setTimeout(function(){
            containerElement.style.display='none';
        },1000)
    })


    let btn = document.getElementById('sendBtn');
    let inputName = document.getElementById('name');

    let inputDescription = document.getElementById('description')

    btn.addEventListener('click', function () {
        let divContainer = document.createElement('div');
        let h2Element = document.createElement('h2');
        let spanElement = document.createElement('span');
        let deleteBtn = document.createElement('button');
        let editButton=document.createElement('button');
        let doneButton=document.createElement('button');

        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'delete';

        editButton.textContent='Edit'
        editButton.className='editBtn';

        doneButton.textContent='Done';
        doneButton.className='doneBtn'

        divContainer.className = 'content'

        h2Element.textContent = inputName.value;
        spanElement.textContent = inputDescription.value;

        divContainer.appendChild(h2Element);
        divContainer.appendChild(spanElement);
        divContainer.appendChild(deleteBtn);
        divContainer.appendChild(editButton);
        divContainer.appendChild(doneButton)
        inputName.value = '';
        inputDescription.value = '';

        document.body.appendChild(divContainer);

        deleteBtn.addEventListener('click',function(e){
            let parent=deleteBtn.parentNode;
            parent.remove()
        })

        editButton.addEventListener('click',function(e){
            h2Element.contentEditable=true;
            spanElement.contentEditable=true;
            h2Element.style.background="#dddbdb";
            spanElement.style.background="#dddbdb"
        })

        doneButton.addEventListener('click',function(e){
            h2Element.contentEditable=false;
            spanElement.contentEditable=false;
            h2Element.style.background="white";
            spanElement.style.background="white";
        })

    })

}