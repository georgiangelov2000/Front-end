function getUsers() {
    let url = `https://jsonplaceholder.typicode.com/users`
    let usersContainer = document.getElementsByClassName('getUsers')[0]
    let output = '';
    let userSearch=document.getElementsByTagName('button')[0];

    fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            data.forEach(element => {
                console.log(element)

                output +=`<div class="user">`+
                    `<p>ID: ${element.id}</p>` +
                    `<p>Name: ${element.name}</p>` +
                    `<p>Username: ${element.username}</p>` + 
                    `<p>${element.email}</p>`+
                    `</div>`
            });
            usersContainer.innerHTML=output
        })

        userSearch.addEventListener('click',function(e){
            e.preventDefault();
            let inputElement=document.getElementsByTagName('input')[0]
            let url = `https://jsonplaceholder.typicode.com/${inputElement.value}`
            
        })


}
getUsers()