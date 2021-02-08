const htmlElements = {
    'templateElement': () => document.getElementsByClassName('products-template')[0],
    'cartTemplate': () => document.getElementById('cart-template'),
    'checkOut': () => document.querySelectorAll('.result>button')[0]
}
let cart = [];
let totalPrice = 0;
htmlElements.templateElement().addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Buy') {
        const parent = e.target.parentElement;
        const name = parent.children[1].innerText;
        const price = parent.children[3].innerText;
        if (!cart.includes(name)) {
            cart.push(name)
        }
        let result = `Added ${name} for ${price} to the cart . \n`;
        totalPrice += Number(price);
        htmlElements.cartTemplate().value += result
    }
})

htmlElements.checkOut().addEventListener('click', function () {
    let finalString = `You Bought <p> ${cart.join(', ')} </p> for <p> ${totalPrice.toFixed(2)} </p>.`;
    htmlElements.cartTemplate().innerHTML += finalString;
})