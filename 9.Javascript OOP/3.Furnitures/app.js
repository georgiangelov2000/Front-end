const htmlElement = {
    "container": () => document.getElementsByClassName('productsContainer')[0]
}
const cart = [];

class Products{
async getProducts() {
    try {
        let result = await fetch("products.json");
        let data = await result.json();

        let products = data.items;
        products = products.map(item => {
            const {title,price} = item.fields;
            const id = item.id;
            const image = item.image.img;
            return {title,price,id,image};
        });
        return products;
        } catch (error) {
            console.log(error);
        }
    }
}

class UserInterface{
    showProducts(products){
        let result="";
        products.forEach(product=>{
            result+=` <div class="article">
            <img src="${product.image}" alt="">
            <h2 id="title">${product.title}</h2>
            <h3 id="price">$${product.price}</h3>
            <h4 id="idNumber">${product.id}</h4>
            <button id="add">Add to cart</button>
        </div> `;
        });
        htmlElement.container().innerHTML=result
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const ui=new UserInterface();
    const products=new Products();

    products.getProducts()
    .then(products=>{
        ui.showProducts(products);
    })
})