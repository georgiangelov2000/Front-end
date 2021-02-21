let form = document.getElementById('myForm');
let selectedRow = null

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    let readData = formData();
    if (selectedRow == null) {
        newRow(readData);
    } else {
        update(readData)
    }
    resetInputs();
}

function formData() {
    let readDataInputs = {};
    readDataInputs["firstName"] = document.getElementById('firstName').value;
    readDataInputs["lastName"] = document.getElementById('lastName').value;
    readDataInputs["city"] = document.getElementById('city').value;
    readDataInputs["addr"] = document.getElementById('addr').value;

    return readDataInputs
}

function newRow(data) {
    let table = document.getElementById('myTable').getElementsByTagName('tbody')[0]
    let row = table.insertRow(table.length)

    cell1 = row.insertCell(0);
    cell1.innerHTML = data.firstName;

    cell2 = row.insertCell(1);
    cell2.innerHTML = data.lastName;

    cell3 = row.insertCell(2);
    cell3.innerHTML = data.city;

    cell4 = row.insertCell(3);
    cell4.innerHTML = data.addr;

    cell4 = row.insertCell(4);
    cell4.innerHTML = `<button onClick="editForm(this)">Edit</button>
                     <button onClick="deleteFunc(this)">Delete</button>`
}

function resetInputs() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('city').value = '';
    document.getElementById('addr').value = '';
}

function editForm(td) {
    selectedRow = td.parentElement.parentElement
    document.getElementById('firstName').value = selectedRow.cells[0].textContent;
    document.getElementById('lastName').value = selectedRow.cells[1].textContent;
    document.getElementById('city').value = selectedRow.cells[2].textContent;
    document.getElementById('addr').value = selectedRow.cells[3].textContent;
}

function update(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.addr;
}

function deleteFunc(td){
    row=td.parentElement.parentElement
    document.getElementById('myTable').deleteRow(row.rowIndex)
    resetInputs()
}