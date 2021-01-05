function solve() {
   let tr = document.getElementsByTagName('tr');
   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', function (e) {
         let element = e.target.parentNode.style;
         if (element.backgroundColor == '' || element.backgroundColor == undefined) {
            element.backgroundColor = `#413f5e`
         } else {
            element.backgroundColor = ''
         }
      })
   })
}