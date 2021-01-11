function cart() {

    let buttonInbox = document.getElementsByTagName('button');
    let arrayInboxBtn = Array.from(buttonInbox);
    let inboxContainer = document.getElementsByClassName('inbox')[0]

    let liElement = document.getElementsByTagName('li');
    let ulLement = document.getElementsByTagName('ul')[0]

    let recMain = document.getElementsByClassName('recipe-main')[0]

    let descriptElement = document.getElementsByTagName('p');
    let arrayDescriptElement = Array.from(descriptElement);

    let array = [];

    for (let i = 0; i < arrayInboxBtn.length; i++) {
        arrayInboxBtn[i].addEventListener('click', function (e) {
            let currentElement = e.target.parentElement;

            let heading = currentElement.children[0].innerText;
            let img = currentElement.children[1].src
            array.push(heading, img, );

            let sectionElement = document.createElement('section');
            let headingElement = document.createElement('h1');
            let imgPar = document.createElement('img');
            let removeButton = document.createElement('button');
            removeButton.className = 'delete'
            removeButton.textContent = 'Remove';

            sectionElement.className = 'product';
            imgPar.src = img;
            headingElement.textContent = heading

            sectionElement.appendChild(headingElement)
            sectionElement.appendChild(imgPar);
            sectionElement.appendChild(removeButton)

            removeButton.addEventListener('click', function () {
                let parent = removeButton.parentNode;
                parent.remove();
            })

            inboxContainer.appendChild(sectionElement)
        })
    }

    for (let j = 0; j < liElement.length; j++) {
        liElement[j].addEventListener('click', function () {
            ulLement.getElementsByClassName('active')[0].classList.remove('active');
            liElement[j].classList.add('active');
            recMain.getElementsByClassName('active')[0].classList.remove('active');
            recMain.getElementsByTagName('div')[j].classList.add('active')
        })
    }

    arrayDescriptElement.forEach((value, index) => {
        value.addEventListener('click', function (e) {
            let parElement = e.currentTarget.parentElement;
            let spanElement = parElement.children[3];
            if (value.textContent == 'description') {
                spanElement.style.display = 'block'
                value.innerHTML = 'Hide description'
            } else if (value.textContent == 'Hide description') {
                spanElement.style.display = 'none';
                value.innerHTML = 'description'
            }
        })
    })
}