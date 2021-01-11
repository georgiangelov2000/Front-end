function solve() {
    let inputNumber = document.getElementById('input');
    let selectTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerHTML = 'Hexadecimal';
    selectTo.appendChild(optionBinary);
    selectTo.appendChild(optionHexadecimal)

    let resButton = document.getElementsByTagName('button')[0];

    resButton.addEventListener('click', convert);

    function convert() {
        if (selectTo.value === 'binary') {
            result.value = Number(inputNumber.value).toString(2);
        } else if (selectTo.value === 'hexadecimal') {
            result.value = Number(inputNumber.value).toString(16)
        }else{
            result.value=''
            console.log(result)
        }
    }
}