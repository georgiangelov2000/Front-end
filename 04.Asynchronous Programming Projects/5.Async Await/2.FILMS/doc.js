async function myFunction(url) {
    url = 'database.json';
    let output='';
    let container=document.getElementsByClassName('films')[0];
    try {
        const response = await fetch(url);
        const data= await response.json();
        console.log(data);
        data.forEach(element => {
           output+=`<div class="film">`+
           `<img src="${element.src}" width="100%">`+
           `<p>Name <span>${element.name}</span></p>`+
           `<p>Year <span>${element.year}</span></p>`+
           `<p>Budget <span>${element.budget}</span></p>`+
           `<p>Box-office <span>${element.office}</span></p>`+
           `<ul>`+
           `<p class="stars">Stars</p>`+
           `<li></span>${element.starring[0]}</li>`+
           `<li>${element.starring[1]}</li>`+
           `<li>${element.starring[2]}</li>`+
           `<li>${element.starring[3]}</li>`+
           `</div>`
        });
        container.innerHTML=output;        
    } 
    catch (err) {
        err='Not found'
        alert(err);
    }

}
myFunction()