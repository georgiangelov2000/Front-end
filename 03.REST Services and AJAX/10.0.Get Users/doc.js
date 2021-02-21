function output() {

    let xhr = new XMLHttpRequest();
    let url = 'database.json';
    xhr.open('GET', url);
    xhr.addEventListener('loadend', function () {
        let list = JSON.parse(this.responseText);
        let outputEl = '';
        for (let el in list) {
            outputEl += '<ul>' +
                '<li>ID: ' + list[el].id + '</li>' +
                '<li>Name: ' + list[el].name + '</li>' +
                '<li>Town: ' + list[el].city + '</li>' +
                '</ul>';
        }
        document.body.innerHTML = outputEl
    })
    xhr.send();



}
output()