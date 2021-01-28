let addButton = document.getElementById('add');
let editButton = document.getElementById('edit');
let currentRow;
let table = document.getElementsByTagName('table')[0]
let deleteButton = document.getElementById('remove')
let errorInfo = document.getElementById('errorInfo')

function checkInput() {
    let firstName = document.getElementById('fName');
    let lastName = document.getElementById('lName');
    let checked = false;
    if (firstName.value === '') {
            errorInfo.innerHTML = 'First Name Cannot be empty'
        checked = true;
    }
    else if (lastName.value === '') {
        errorInfo.innerHTML='Last Name Cannot be empty'
        checked = true;
    }
    return checked
}

addButton.addEventListener('click', function (e) {
    e.preventDefault()

    if (!checkInput()) {
        let newRow = table.insertRow(table.length);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);

        let firstName = document.getElementById('fName');
        let lastName = document.getElementById('lName');

        cell1.innerHTML = firstName.value;
        cell2.innerHTML = lastName.value

        firstName.value = '';
        lastName.value = ''
        selectedRow();
    }

})

function selectedRow() {
    let firstName = document.getElementById('fName');
    let lastName = document.getElementById('lName');

    let table = document.getElementsByTagName('table')[0];
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            currentRow = this.rowIndex;
            firstName.value = this.cells[0].textContent;
            lastName.value = this.cells[1].textContent;
        }
    }
}
selectedRow();

editButton.addEventListener('click', function (e) {
    e.preventDefault();
    let table = document.getElementsByTagName('table')[0]
    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;

    table.rows[currentRow].cells[0].innerHTML = firstName
    table.rows[currentRow].cells[1].innerHTML = lastName

})

deleteButton.addEventListener('click', function (e) {
    e.preventDefault();
    table.deleteRow(currentRow);
})