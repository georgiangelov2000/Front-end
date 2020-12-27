function toggle() {
    let divElement = document.getElementById('extra')
    let buttonElement = document.getElementsByClassName('button')[0];
    if (buttonElement.textContent == 'More') {
        divElement.style.display = 'block'
        buttonElement.innerHTML='Less'
    } else if (buttonElement.textContent == 'Less') {
        divElement.style.display = 'none'
        buttonElement.innerHTML='More'
    }
}