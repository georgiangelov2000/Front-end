function focus() {
    let inputs = document.querySelectorAll('input[type="text"]');
    Array.from(inputs).forEach(x => {
        x.addEventListener('focus', function (e) {
            let parentElement = e.currentTarget.parentElement;
            parentElement.classList.add('focused')
        })
        x.addEventListener('blur',function(e){
            let parentElement = e.currentTarget.parentElement;
            parentElement.classList.remove('focused')
        })
    })
}