function solve() {
   let textArea = document.getElementsByTagName('textarea')[0];
   let buttonElement = document.getElementsByClassName('add-product');
   let arrayAddBtn = Array.from(buttonElement);
   let totalPrice = 0;
   let list = [];
   for (let i = 0; i < arrayAddBtn.length; i++) {
      arrayAddBtn[i].addEventListener('click', function (e) {
         let currentElement = e.target.parentElement;
         let currentBrand = currentElement.previousElementSibling.children[0].innerHTML;
         let currentPrice = Number(currentElement.nextElementSibling.innerHTML)
         if (!list.includes(currentBrand)) {
            list.push(currentBrand)
         }
         let result = `Added ${currentBrand} for ${currentPrice} to the cart . \n`;
         totalPrice += Number(currentPrice);
         textArea.value += result
      });
   }
   let checkOut = document.getElementsByClassName('checkout')[0];
   checkOut.addEventListener('click', function () {
      let finalString = `You Bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textArea.value += finalString
      disableButtons();
   })

   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true)
   }
}