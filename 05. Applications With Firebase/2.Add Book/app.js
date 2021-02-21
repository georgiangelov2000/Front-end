const htmlElements = {
    'loadBooks': () => document.getElementById('loadBooks'),
    'inputTitle': () => document.getElementById('title'),
    'inputAuthor': () => document.getElementById('author'),
    'inputIsbn': () => document.getElementById('isbn'),
    'submitBtn': () => document.getElementById('submit'),

    'tableContainer': () => document.querySelector('table > tbody'),

    'errorInfo':()=>document.getElementById('error-notification'),

    'editForm':()=>document.getElementById('editForm'),

    'editTitle':()=>document.getElementById('edit-title'),
    'editAuthor':()=>document.getElementById('edit-author'),
    'editIsbn':()=>document.getElementById('edit-isbn'),
    'editBtn':()=>document.getElementById('edit'),

}

htmlElements['loadBooks']().addEventListener('click', fetchAllBooks);
htmlElements['submitBtn']().addEventListener('click',createBook);
htmlElements['editBtn']().addEventListener('click',editBook)

function fetchAllBooks() {
    fetch('https://add-book-application-default-rtdb.firebaseio.com/Books/.json')
        .then(res => res.json())
        .then(getBooks)
        .catch(handleError)
}

//function GetBook
function getBooks(booksData) {
    const booksContainer = htmlElements['tableContainer']();

    if(booksContainer.innerHTML!=''){
        booksContainer.innerHTML='';
    }

    Object
        .keys(booksData)
        .forEach((bookId) => {
            console.log(bookId)
            const {title,author,isbn} = booksData[bookId];

            const tableRow = createElement('tr', '', {}, {},
                createElement('td', title, {}, {}),
                createElement('td', author, {}, {}),
                createElement('td', isbn, {}, {}),
                createElement('td', '', {}, {},
                    createElement('button','Edit',{'data-key':bookId},{click:loadBookByID}),
                    createElement('button','Delete',{'data-key':bookId},{click:deleteElement})));

                    booksContainer.appendChild(tableRow)
        })
}

function deleteElement(){
    const id=this.getAttribute('data-key');
    const initObj={
        method:'DELETE'
    };
    fetch(`https://add-book-application-default-rtdb.firebaseio.com/Books/${id}/.json`,initObj)
    .then(fetchAllBooks)
    .catch(handleError);
}

//Function Handler error
function handleError(err) {

    const errorContainer =  htmlElements['errorInfo']();
    errorContainer.style.display='block';
    errorContainer.textContent=err.message

    setTimeout(()=>{
        errorContainer.style.display='none'
    },1000)
}

function createBook(e){
    e.preventDefault();

    const titleInput=htmlElements['inputTitle']();
    const authorInput=htmlElements['inputAuthor']();
    const isbnInput=htmlElements['inputIsbn']();

    if(titleInput.value!==''&& authorInput.value!==''&& isbnInput.value !==''){
        const initObj={
            method:'POST',
            header:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:titleInput.value,
                author:author.value,
                isbn:isbnInput.value
            })
        }
        fetch('https://add-book-application-default-rtdb.firebaseio.com/Books/.json',initObj)
        .then(fetchAllBooks)
        .catch(handleError)

        titleInput.value='';
        authorInput.value=''
        isbnInput.value=''
    }else{
    const error={message:''};

    if(titleInput.value===''){
        error.message+='Title must not  be empty '
    }if(authorInput.value===''){
        error.message+='Author must not be empty! '
    }if(isbnInput.valie===''){
        error.message+='ISBN must not be empty!'
    }
    handleError(error)
    }
}

function loadBookByID(){
    const id=this.getAttribute('data-key');
    fetch(`https://add-book-application-default-rtdb.firebaseio.com/Books/${id}.json`)
    .then(res=>res.json())
    .then(({title,author,isbn})=>{
        htmlElements["editTitle"]().value=title
        htmlElements["editAuthor"]().value=author
        htmlElements["editIsbn"]().value=isbn
        htmlElements['editForm']().style.display='block';
        htmlElements['editBtn']().setAttribute('data-key',id);
    })
    .catch(handleError)
}

function editBook(e){
    e.preventDefault();
    const titleInput=htmlElements['editTitle']();
    const authorInput=htmlElements['editAuthor']();
    const isbnInput=htmlElements['editIsbn']();

    if(titleInput.value!=='' && authorInput.value!=='' && isbnInput!==''){
        const id=this.getAttribute('data-key');

        const initObj={
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title:titleInput.value, author:authorInput.value, isbn:isbnInput.value})
        }
        htmlElements['editForm']().style.display='none';
        fetch(`https://add-book-application-default-rtdb.firebaseio.com/Books/${id}.json`,initObj)
        .then(fetchAllBooks)
        .catch(handleError)
    }else{

        const error={message:""};

        if(titleInput.value===''){
            error.message+='Title must not  be empty '
        }if(authorInput.value===''){
            error.message+='Author must not be empty! '
        }if(isbnInput.valie===''){
            error.message+='ISBN must not be empty!'
        }
        handleError(error)
    }
}


//Function CreateElement

function createElement(type, text, attributes, events, ...children) {
    const domElement = document.createElement(type);
    if (text !== '') {
        domElement.textContent = text;
    }
    Object.entries(attributes)
        .forEach(([attrKey, attrValue]) => {
            domElement.setAttribute(attrKey, attrValue);
        });
    Object.entries(events)
        .forEach(([eventName, eventHnadler]) => {
            domElement.addEventListener(eventName, eventHnadler)
        })
    children.forEach((child) => {
        domElement.appendChild(child)
    });
    return domElement;
}