const htmlElement={
    "submitButton":()=>document.getElementById('submitBtn')
}
htmlElement["submitButton"]().addEventListener('click',postNames);
let url=`https://post-form-21124-default-rtdb.firebaseio.com/users/.json`;
let tbodyElement=document.getElementsByClassName('names')[0];

fetch(url)
.then(res=>res.json())
.then((data)=>{
   let names= Object
   .keys(data)
   .map(key=>  ` <div class="name"> <p data-key=${key}> FirstName: ${data[key].firstName}</p>` + `<p data-key=${key}> SecondName: ${data[key].secondName}</p>`  + `<p data-key=${key}>LastName: ${data[key].lastName}</p> </div>`    ).join('')
    tbodyElement.innerHTML=names;
})


function postNames(e){
    e.preventDefault();
    let fName=document.getElementById('firstName');
    let sName=document.getElementById('secondName');
    let lName=document.getElementById('lastName');

    let newName={
        firstName:fName.value,
        secondName:sName.value,
        lastName:lName.value
    };

    fetch('https://post-form-21124-default-rtdb.firebaseio.com/users/.json',{
            method:'POST',
            body:JSON.stringify(newName)
        })
        .then(res=>res.json())
        .then((data)=>{
           let newPar=document.createElement('p')
           let divElement=document.createElement('div')
           
           newPar.innerText=newName.firstName;
           newPar.dataset['key']=data.name;

           divElement.appendChild(newPar);
        })

}
     