function getUsers() {
    let url = `https://jsonplaceholder.typicode.com/users`
    let usersContainer = document.getElementsByClassName('getUsers')[0]
    let output = '';
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            data.forEach(element => {
                output += `<div class="user">` +
                    `<p>ID: ${element.id}</p>` +
                    `<p>Name: ${element.name}</p>` +
                    `<p>Username: ${element.username}</p>` +
                    `<p>${element.email}</p>` +
                    `</div>`
            });
            usersContainer.innerHTML = output
        })
}
getUsers()