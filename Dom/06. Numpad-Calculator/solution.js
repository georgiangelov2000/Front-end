function solve() {
    let expressionScreen = document.getElementById("expressionOutput");
    let resultScreen = document.getElementById("resultOutput");
    let keysContainer = document.getElementsByClassName('keys')[0];
    let clearButton = document.getElementsByClassName('clear')[0];
    keysContainer.addEventListener('click', clicked);
    clearButton.addEventListener('click', deleteFunc);

    function deleteFunc() {
        expressionScreen.textContent = "";
        resultScreen.textContent = "";
    }

    function clicked(event) {
        let clickButton = event.target.value;
        switch (clickButton) {
            case "*":
            case "/":
            case "+":
            case "-":
                expressionScreen.textContent += ` ${clickButton} `
                break;
            case "=":
                let [leftOperand, operator, rightOperand] = expressionScreen.textContent.split(' ');

                if (!rightOperand || !operator) {
                    resultScreen.textContent = 'NaN';
                } else {
                    resultScreen.textContent = calculateResult(+leftOperand, operator, +rightOperand)
                }
                break;
            default:
                expressionScreen.textContent += clickButton
        }
    }

    function calculateResult(leftOperand, operator, rightOperand) {
        switch (operator) {
            case "*":
                return leftOperand * rightOperand
            case "/":
                return leftOperand / rightOperand
            case "+":
                return leftOperand + rightOperand
            case "-":
                return leftOperand - rightOperand
        }
    }

}