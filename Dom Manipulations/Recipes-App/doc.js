function cart() {
    let buttonInbox = document.getElementsByTagName('button');
    let arrayInboxBtn = Array.from(buttonInbox);
    let inboxContainer = document.getElementsByClassName('inbox')[0]

    let liElement = document.getElementsByTagName('li');
    let ulLement = document.getElementsByTagName('ul')[0]

    let recMain = document.getElementsByClassName('recipe-main')[0]


    let array = [];

    for (let i = 0; i < arrayInboxBtn.length; i++) {
        arrayInboxBtn[i].addEventListener('click', function (e) {
            let currentElement = e.currentTarget.parentElement;

            let heading = currentElement.children[0].innerText;
            let img = currentElement.children[1].src
            let descript = currentElement.children[2].innerText;

            array.push(heading, img, descript);

            let sectionElement = document.createElement('section');
            let headingElement = document.createElement('h1');
            let imgPar = document.createElement('img');
            let des = document.createElement('p');
            let removeButton=document.createElement('button');
            removeButton.className='delete'
            removeButton.textContent='Remove';

            sectionElement.className = 'product';

            headingElement.textContent = heading
            imgPar.src = `${img}`
            des.textContent = descript
            
            sectionElement.appendChild(headingElement)
            sectionElement.appendChild(imgPar);
            sectionElement.appendChild(des);
            sectionElement.appendChild(removeButton)

            removeButton.addEventListener('click',function(){
                let parent=removeButton.parentNode;
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

}