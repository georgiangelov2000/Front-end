let form = document.getElementById('myForm').addEventListener('submit', addBooks);
document.querySelector('#book-list').addEventListener('click',deleteBook)

class Book {
    constructor(name, description, author) {
        this.name = name;
        this.description = description;
        this.author = author;
    }
}

class USERINTERFACE{
    static displayBooks(){
        const books=setStore.getBook();
        books.forEach((book)=>USERINTERFACE.bookToList(book));
    }
    static bookToList(book){
        const list=document.querySelector('#book-list')
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.name}</td>
        <td>${book.description}</td>
        <td>${book.author}</td>
        <td><button>Delete</button></td>
        `;
        list.appendChild(row);
    }
    static removeBook(el){
        if(el.tagName==='BUTTON' && el.textContent==='Delete'){
            el.parentElement.parentElement.remove();
        }
    }
    static clearInputs(){
        document.querySelector('#name').value='';
        document.querySelector('#description').value='';
        document.querySelector('#author').value='';
    }
    static informationMessage(infoMessage){
        const message=document.createElement('span');
        message.appendChild(document.createTextNode(infoMessage));
        message.className='myMessage';
        const mainElement=document.querySelector('#app');
        mainElement.insertBefore(message,form);
        setTimeout(() => document.querySelector('.myMessage').remove(), 3000);
    }
}

class setStore{
    static getBook(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }
    static addBook(book){
        const books=setStore.getBook();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }
}


function addBooks(event) {
    event.preventDefault();
     const name = document.querySelector('#name').value;
     const description = document.querySelector('#description').value;
     const author = document.querySelector('#author').value;
 
     if(name==='' || description==='' || author===''){
         USERINTERFACE.informationMessage('Unsuccesfelly added book');
         return;
     }else{
     const book = new Book(name, description, author);
     USERINTERFACE.informationMessage('Successfully added book');
     USERINTERFACE.bookToList(book);
     setStore.addBook(book);
    }
     USERINTERFACE.clearInputs();
 }

 function deleteBook(e){
    USERINTERFACE.removeBook(e.target)
}
