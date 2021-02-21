function attachGradientEvents() {
    let inputGradient = document.getElementById('gradient');

    inputGradient.addEventListener('click', e => {
        let resultElement = document.getElementById('result');

        let offset = e.offsetX;
        let width = e.currentTarget.offsetWidth;

        let percent = (offset / width) * 100;
        resultElement.innerHTML = `${Math.floor(percent)} %`;
    })
}