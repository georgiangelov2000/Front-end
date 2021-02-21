const form = document.getElementById('myForm').addEventListener('submit', onSubmit)
const courseList = document.getElementById('course-list');
class Course {
    constructor(author, course, description,img) {
        this.author = author;
        this.course = course;
        this.description = description;
        this.img=img
    }
}

class Display {
    static validate() {
        const author = document.getElementById('author').value;
        const course = document.getElementById('course').value;
        const description = document.getElementById('description').value;
        const imgElement = document.getElementById('img').value;
        if (author === '' || course === '' || description === ''||imgElement==='') {
            return false;
        } else {
            let currentCourse = new Course(author, course, description,imgElement)
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${currentCourse.author}</td>
            <td>${currentCourse.course}</td>
            <td>${currentCourse.description}</td>
            <td><img src="${currentCourse.img}"/> </td>
            <td><button id="delete">X</button></td>
            `;
            let table = document.getElementById('course-list')
            table.appendChild(row)
        }
    }

    static message(mess, color) {
        let myMessage = document.createElement('span');
        myMessage.appendChild(document.createTextNode(mess));
        myMessage.className = 'information';
        myMessage.style.color = color;
        const app = document.getElementById('app')
        app.insertBefore(myMessage,document.getElementById('courses-list'));

        setTimeout(() => document.getElementsByClassName('information')[0].remove(), 1000)
    }

    static clearInputs() {
        document.getElementById('author').value = '';
        document.getElementById('course').value = '';
        document.getElementById('description').value = ''
        document.getElementById('img').value = ''
    }

    static deleteParentElement(el) {
        el.parentElement.parentElement.remove();
    }
}


function onSubmit(e) {
    e.preventDefault();
    if (Display.validate() === false) {
        Display.message('Unsuccesfully', 'tomato')
    } else {
        Display.message('Succesfully', 'green')
    }
    Display.clearInputs();

}

courseList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'X') {
        Display.deleteParentElement(e.target)
    }
})