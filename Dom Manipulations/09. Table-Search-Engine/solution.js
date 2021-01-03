function solve() {
   let searchInput = document.getElementById('searchField');
   let searchBtn = document.getElementById('searchBtn');

   searchBtn.addEventListener('click', function () {
      [...document.querySelectorAll('tbody>tr')].forEach(row => {
         if (row.textContent.includes(searchInput.value)) {
            row.classList.add('select')
         } else {
            row.classList.remove('select')
         }
      })
      searchInput.value = ''
   })

}