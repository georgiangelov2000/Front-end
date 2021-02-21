const navigationElement = document.querySelector('nav');
const formElement = document.querySelector('.createForm');

navigationElement.addEventListener('click', changeTheRoute);
formElement.addEventListener('submit', onSubmit);

const router = {
    '/home': document.getElementsByClassName('book-system')[0],
    '/create': document.getElementsByClassName('createForm')[0]
}

const routerMap = (path) => {
    Object.values(router).forEach(section => section.style.display = 'none');
    router[location.pathname].style.display = 'flex';
    switch (path) {
        case '/home':
            renderHomePage()
            break;
    }
};

function redirect(path) {
    history.pushState({}, '', path);
    routerMap(path)
}

function renderHomePage() {
    let booksContainer = document.getElementsByClassName('book-system')[0];
    fetch('https://books-aa699-default-rtdb.firebaseio.com/books.json')
        .then(res => res.json())
        .then((data) => {
            let dataHTML = Object.keys(data).map(x => templateElement(data[x])).join('');
            booksContainer.innerHTML = dataHTML
        });
};

function changeTheRoute(e) {
    if (e.target.tagName != 'A') {
        return;
    }
    e.preventDefault();
    let url = new URL(e.target.href)
    redirect(url.pathname)
};

function onSubmit(e) {
    e.preventDefault();
    let nameBook = formElement.querySelector('#name').value;
    let descriptionBook = formElement.querySelector('#description').value;
    let priceBook = formElement.querySelector('#price').value;
    let imgBook = formElement.querySelector('#image').value;

    let book = {
        imgBook,
        nameBook,
        descriptionBook,
        priceBook,
    };
    fetch('https://books-aa699-default-rtdb.firebaseio.com/books.json', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => redirect('/home'));
}


routerMap(location.pathname)