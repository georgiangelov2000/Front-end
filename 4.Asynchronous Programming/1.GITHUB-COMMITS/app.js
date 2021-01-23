function loadCommits() {
    let usernameInput=document.getElementById('username').value;
    let repoInput=document.getElementById('repo').value

    let list=document.getElementById('commits')

    fetch(`https://api.github.com/repos/${usernameInput}/${repoInput}/commits`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
       let commits=data.map(x=>`<li>${x.commit.author.name}:${x.commit.message}</li>`).join('')
        list.innerHTML=commits
    }).catch((err)=>{
        list.innerHTML=`<li>${err.status} (${err.statusText}) </li>`
    })
}