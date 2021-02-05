function loadUsers() {

    let url = 'https://api.github.com/users';
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            let output = '';
            data.forEach(element => {
                output +=
                    '<div class="user">' +
                    '<img src="' + element.avatar_url + '" width="70" height="70">' +
                    '<ul>' +
                    '<li>ID: ' + element.id + '</li>' +
                    '<li>Login: ' + element.login + '</li>' +
                    '</ul>' +
                    '</div>';
            });
            document.getElementsByClassName('users')[0].innerHTML=output
        })

}
loadUsers()