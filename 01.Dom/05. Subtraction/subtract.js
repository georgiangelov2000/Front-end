function subtract() {
    let firstElement = document.getElementById('firstNumber');
    let secondElement = document.getElementById('secondNumber');
    let res = document.getElementById('result');
    res.innerHTML = Number(firstElement.value) - Number(secondElement.value)
}