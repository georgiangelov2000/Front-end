function attachEvents() {
    let url=`https://rest-messanger.firebaseio.com/messanger.json`;
    let refreshButton=document.getElementById('refresh');
    refreshButton.addEventListener('click',()=>{
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            Object.values(data).forEach(message=>{
                document.getElementById('messages').textContent +=`${message.author}:${message.content}\n`
            });
        });
        let submitButton=document.getElementById('submit');
        submitButton.addEventListener('click',()=>{
            let author=document.getElementById('author');
            let content=document.getElementById('content')
            fetch(url,
                {method:'POST',body:JSON.stringify({author:author.value, content:content.value}) })
        })
        author.value='';
        content.value='';
    });
}

attachEvents();