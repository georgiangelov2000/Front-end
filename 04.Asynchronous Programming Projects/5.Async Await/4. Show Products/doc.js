async function loadProducts(url) {
    let output = ''
    url = 'products.json';
    const response = await fetch(url);
    const data = await response.json();
    for (element of data) {
        output += `<div class="product">` +
            `<img src="${element.src}">` +
            `<p><span>Name </span>${element.name}</p>` +
            `<p><span>Price </span>${element.price}</p>` +
            `<p><span>Color </span>${element.color}</p>` +
            `<p><span>Material </span>${element.material}</p>` +
            `<p><span>Code </span>${element.code}</p>` +
            `</div>`
    }
    document.getElementsByClassName('products')[0].innerHTML = output   
}
loadProducts();