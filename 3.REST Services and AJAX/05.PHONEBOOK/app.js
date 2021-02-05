function attachEvents() {
 
    const getPostUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const ulElement = document.getElementById('phonebook');
 
 
    btnLoad.addEventListener('click', getList);
 
 
    btnCreate.addEventListener('click', () => {
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');
 
        let obj = {
            person: person.value,
            phone: phone.value,
        }
        
        let jsonObj = JSON.stringify(obj);
        fetch(getPostUrl, { method: "POST", body: jsonObj });
 
        person.value = '';
        phone.value = '';
 
        getList();
    });
 
    function getList() {
        fetch(getPostUrl)
            .then((response) => response.json())
            .then((data) => {
 
                Object.keys(data).forEach((key) => {
                    let li = document.createElement('li');
                    li.innerHTML = `${data[key].person}:${data[key].phone}`;
                    let deleteBtn = document.createElement('button');
                    let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;
                    deleteBtn.textContent = 'Delete';
 
                    deleteBtn.addEventListener('click', () => {
                        fetch(deleteUrl, { method: "DELETE" });
                    });
 
                    ulElement.innerHTML = '';
                    li.appendChild(deleteBtn);
                    ulElement.appendChild(li);
                });
 
            });
    }
}
 
attachEvents();