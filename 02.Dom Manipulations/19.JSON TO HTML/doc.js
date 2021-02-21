let productsDate = [{
        name: 'HELLY HANSEN Обувки THE FORESTER',
        description: 'Premium Eva- ергономична подметка с изключително мек и лек материал, който осигурява лекота при носене и пълен комфорт на крака.',
        img:'/images/boots.jpg'
    },
    {
        name: 'HIGH COLORADO Обувки ROBIN UNISEX',
        description:'Зимни обувки подходящи за градски условия при студено, но сухо време.',
        img:'/images/boots2.jpg'
    },
    {
        name: 'NIKE Обувки REVOLUTION 5',
        description: 'Мъжките Nike Revolution 5 омекотяват всяка Ваша стъпка благодарение на пяната в междинната подметка. ',
        img:'/images/boots3.jpg'
    }
]
document.getElementsByClassName('app')[0].innerHTML = `
<h1>JSON TO HTML</h1>
${productsDate.map(function(element){
    return ` 
    <div class="product">
    <div class="image">
    <img src="${element.img}">
    </div>
    <h1>${element.name}</h1>
    <p>${element.description}</p>
    </div>
    `
}).join('')}
`