function addItem() {
    let selectElement = document.getElementById('menu');

    let textElement = document.getElementById('newItemText');

    let valueElement = document.getElementById('newItemValue')

    let newOptionElement = document.createElement('option')
    
    selectElement.appendChild(newOptionElement)
    newOptionElement.textContent = textElement.value;
    textElement.value='';
    valueElement.value='';
}