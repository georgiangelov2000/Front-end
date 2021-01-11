function deleteByEmail() {
    let inputEmail = document.getElementsByTagName('input')[0].value;
    let trElements = document.getElementsByTagName('tr');
    let trDeleted = '';
    let result = document.getElementById('result');
    for (let tr of trElements) {
        let tdElement = tr.children[1];
        if (tdElement.textContent == inputEmail) {
            trDeleted = tr;
            result.innerText = 'Deleted'
            trDeleted.parentNode.removeChild(trDeleted);
            console.log(trDeleted)
            return;
        }
    }
    result.textContent='Not found'
}