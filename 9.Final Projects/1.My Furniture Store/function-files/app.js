const htmlElements = {
    'templateElement': () => document.getElementsByClassName('products-template')[0],
    'cartTemplate': () => document.getElementsByClassName('cart-template')[0]
}
htmlElements.templateElement().addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Buy') {
        const parent = e.target.parentElement;
        const name = parent.children[1].innerText;
        const price = parent.children[3].innerText;
        let cart = []
        if(!cart.includes(name)){
            cart.push(name)
        }
        let div=document.createElement('div');
        let nameP=document.createElement('p')
        let priceP=document.createElement('p')
        nameP.textContent=name
        priceP.textContent=price
        div.appendChild(nameP)
        div.appendChild(priceP)
        console.log(div)
        htmlElements.cartTemplate().appendChild(div);
//        let result=`Added ${name} ${price} to the cart . \n`;
    }
})
