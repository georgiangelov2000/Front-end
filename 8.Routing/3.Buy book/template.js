const templateElement = (data) => `
<div class="product">
                <img src="${data.imgBook}" alt="" />
                <p id="nameBook">Name:${data.nameBook}</p>
                <p id="descriptionBook">Description:${data.descriptionBook}</p>
                <p id="priceBook">Price:${data.priceBook}$</p>
</div>
`;