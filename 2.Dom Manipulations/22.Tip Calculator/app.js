const domElements = {
    "submitBtn": () => document.getElementById('calculate')
}

domElements['submitBtn']().addEventListener('click', calculate);

function calculate(event) {
    event.preventDefault();
    let billInp = document.getElementById('bill').value;
    let tipInp = document.getElementById('tip').value;
    let numberOfPeople = document.getElementById('people').value;

    let percantage=tipInp/100;

    let resultTip = (billInp * percantage);
    let total = Number(billInp) + Number(resultTip);
    let totalPerPerson=total/numberOfPeople;
    let tipPerPerson=resultTip/numberOfPeople;

    console.log(totalPerPerson)
    console.log(total)
    console.log(billInp)
    console.log(resultTip)
    console.log(tipPerPerson)

    document.getElementById('tipResult').innerHTML=`Tip:${resultTip}`;
    document.getElementById('totalPerPerson').innerHTML=`Total Per Person : ${totalPerPerson}`;
    document.getElementById('totalAmount').innerHTML=`Total Amount: ${total}`;
    document.getElementById('tipPerPerson').innerHTML=`Tip Per Person:${tipPerPerson}`

}