let form = document.getElementById('myForm').addEventListener('submit', addBooks);
//document.querySelector('#book-list').addEventListener('click',deleteBook)

class Book {
    constructor(name, description, author,isbn,file) {
        this.name = name;
        this.description = description;
        this.author = author;
        this.isbn=isbn;
        this.file=file;
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
        <td>${book.isbn}</td>
        <img src="${book.file}" />
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
        document.querySelector('#isbn').value='';
        document.querySelector('#file').value='';
    }
    static informationMessage(infoMessage){
        const message=document.createElement('span');
        message.appendChild(document.createTextNode(infoMessage));
        message.className='myMessage';
        const mainElement=document.querySelector('#app');
        const table=document.querySelector('#myTable');
        mainElement.insertBefore(message,table);

        if(message.textContent==='Unsuccesfelly added book'){
            message.style.color='tomato'
        }else{
            message.style.color='green'
        }

        setTimeout(() => document.querySelector('.myMessage').remove(), 1000);
    }
}

class setStore{
    static getBook(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'))
           // console.log(books)
        }
        return books;
    }
    static addBook(book){
       // console.log(book)
        const books=setStore.getBook();
       // console.log(books)
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }
    static removeBook(isbn){
        const books=setStore.getBook();
        books.forEach((book,index)=>{
            if(book.isbn===isbn){
                books.splice(index,1)
            }
        });
        localStorage.setItem('books',JSON.stringify(books))
    }
}

document.addEventListener('DOMContentLoaded', USERINTERFACE.displayBooks);


function addBooks(event) {
    event.preventDefault();
     const name = document.querySelector('#name').value;
     const description = document.querySelector('#description').value;
     const author = document.querySelector('#author').value;
     const isbn = document.querySelector('#isbn').value;
     const file=document.querySelector('#file').value;
     if(name==='' || description==='' || author==='' ||isbn===''||file===''){
         USERINTERFACE.informationMessage('Unsuccesfelly added book');
         return;
     }else{
     const book = new Book(name, description, author,isbn,file);
     USERINTERFACE.bookToList(book);
     setStore.addBook(book);
     USERINTERFACE.informationMessage('Successfully added book');
    }
     USERINTERFACE.clearInputs();
 }
 /*function deleteBook(e){
    USERINTERFACE.removeBook(e.target)
}
*/
document.querySelector('#book-list').addEventListener('click',(e)=>{
    USERINTERFACE.removeBook(e.target)
    setStore.removeBook(e.target.parentElement.previousElementSibling.textContent);
    USERINTERFACE.informationMessage('Succesfully deleted book')
})