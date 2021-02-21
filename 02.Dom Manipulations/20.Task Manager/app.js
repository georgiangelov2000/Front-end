function solve() {
    let addBtn = document.getElementById('add');
    let openSection = document.getElementsByTagName('section')[1];
    let progressSection = document.getElementsByTagName('section')[2];
    let completedSec = document.getElementsByTagName('section')[3];
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let taskInput = document.getElementById('task');
        let descriptionArea = document.getElementById('description')
        let textDate = document.getElementById('date');

        if (taskInput.value === '' || descriptionArea.value === '' || textDate.value === '') {
            return;
        }

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.innerText = taskInput.value;

        let pDescription = document.createElement('p');
        pDescription.innerText = `Description ${descriptionArea.value}`;

        let pData = document.createElement('p');
        pData.innerText = `Due Date : ${textDate.value}`

        let div = document.createElement('div');
        div.className = 'flex';

        let buttonStart = document.createElement('button');
        buttonStart.className = 'green';
        buttonStart.innerText = `Start`;

        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'red';
        buttonDelete.innerText = `Delete`;

        buttonDelete.addEventListener('click', (event => deleteArticle(event)))

        buttonStart.addEventListener('click', (event) => {
            let btnFinish = document.createElement('button');
            btnFinish.className = 'orange';
            btnFinish.innerText = 'Finish'

            btnFinish.addEventListener('click', () => {
                article.lastElementChild.remove()
                completedSec.lastElementChild.appendChild(article);
            })

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(btnFinish);
            progressSection.lastElementChild.appendChild(article);
        })

        div.appendChild(buttonStart)
        div.appendChild(buttonDelete)

        article.appendChild(h3)
        article.appendChild(pDescription);
        article.appendChild(pData)
        article.appendChild(div);

        openSection.lastElementChild.appendChild(article)

        taskInput.value = '';
        descriptionArea.value = '';
        textDate.value = '';
    })

    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove();
    }
}