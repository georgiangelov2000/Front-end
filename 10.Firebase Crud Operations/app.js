
const htmlElement={
    'form':()=>document.getElementsByTagName('form')[0],
    'firstName':()=>document.getElementById('firstname'),
    'password':()=>document.getElementById('password'),
    'textArea':()=>document.getElementById('text-area'),
    'review':()=>document.getElementsByClassName('review')[0]
}
htmlElement.form().addEventListener('submit',(e)=>{
    e.preventDefault();

    const input={
        firstName:htmlElement.firstName().value,
        password:htmlElement.password().value,
        textArea:htmlElement.textArea().value,
    }

    if(input.firstName.value==='' && input.lastName.value===''||input.textArea.value===''){
        return ;
    }else{
        fetch(`https://spa-app-505ca-default-rtdb.firebaseio.com/message.json`,{
            method:'POST',
            header:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(input)
        }).then(res=>res.json())
        .then((data)=>{
            let byUser=document.createElement('p')
            let message=document.createElement('p');
            let divElement=document.createElement('div')

            byUser.innerText=input.firstName;
            message.innerText+=input.textArea;

            divElement.appendChild(byUser)
            divElement.appendChild(message)
           htmlElement.review().appendChild(divElement);
        })
    }
})