//Rendering Elements in Functions
window.onload=function(){

const parentElements={
    'sofaBedsContainer':()=>document.getElementById('sofabeds'),
    'kitchensContainer':()=>document.getElementById('kitchens'),
    'entranceHallContainer':()=>document.getElementById('entrance-hall')
}

async function renderSofaBeds(url){
    url=`./products-data/sofabeds.json`;
    const response=await fetch(url);
    const data=await response.json();
    let obj={};
    let output='';
    for(let element of data){
        const imageEl=element.imgSrc;
        const nameEl=element.name;
        const descriptionEl=element.description;
        const priceEl=element.price;
         obj={
            imageEl,
            nameEl,
            descriptionEl,
            priceEl
        }
        output+=
        `<div class="product">`+
        `<img src="${obj.imageEl}" alt="">`+
        `<p class="nameElement"><small>Name:</small>${obj.nameEl}</p>`+
        `<p class="descriptionElement"><small>Description:</small>${obj.descriptionEl}</p>`+
        `<p class="priceElement">${obj.priceEl}</p>`+
        `<button class="buyButton">Buy</button>`+
        `</div>`
        parentElements.sofaBedsContainer().innerHTML=output;
    }
}


async function renderKitchens(url){
    url=`./products-data/kitchens.json`;
    const response=await fetch(url);
    const data=await response.json();
    let output='';
    for(let element of data){
        const imageEl=element.imgSrc;
        const nameEl=element.name;
        const descriptionEl=element.description;
        const priceEl=element.price;
        const obj={
            imageEl,
            nameEl,
            descriptionEl,
            priceEl
        }
        output+=`<div class="product">`+
        `<img src="${obj.imageEl}" alt="">`+
        `<p class="nameElement"><small>Name:</small>${obj.nameEl}</p>`+
        `<p class="descriptionElement"><small>Description:</small>${obj.descriptionEl}</p>`+
        `<p class="priceElement">${obj.priceEl}</p>`+
        `<button class="buyButton">Buy</button>`+
        `</div>`
        parentElements.kitchensContainer().innerHTML=output
    }
}


async function entranceHall(url){
    url=`./products-data/entrance-hall.json`;
    const response=await fetch(url);
    const data=await response.json();
    let output='';
    for(let element of data){
        const imageEl=element.imgSrc;
        const nameEl=element.name;
        const descriptionEl=element.description;
        const priceEl=element.price;
        const obj={
            imageEl,
            nameEl,
            descriptionEl,
            priceEl
        }
        output+=`<div class="product">`+
        `<img src="${obj.imageEl}" alt="">`+
        `<p class="nameElement"><small>Name:</small>${obj.nameEl}</p>`+
        `<p class="descriptionElement"><small>Description:</small>${obj.descriptionEl}</p>`+
        `<p class="priceElement">${obj.priceEl}</p>`+
        `<button class="buyButton">Buy</button>`+
        `</div>`
        parentElements.entranceHallContainer().innerHTML=output
    }
}

function renderingElements(){
    renderSofaBeds()
    renderKitchens()
    entranceHall()
}
renderingElements()

}