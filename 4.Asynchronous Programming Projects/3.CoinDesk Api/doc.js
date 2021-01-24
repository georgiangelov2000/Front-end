function loadBitcoin() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let div = '';
    let secondDiv=''
    let informationContainer = document.getElementsByClassName('information')[0];
    let addInfo=document.getElementsByClassName('additionalInformation')[0];
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            let currentVal = data.bpi;
            let values = Object.values(currentVal)
            for (let i = 0; i < values.length; i++) {
                let currentValue = values[i];
                div += `<div>` +
                    `<p class="code"><span>Code:</span>${currentValue.code}</p>` +
                    `<p class="symb"><span>Symbol:</span>${currentValue.symbol}</p>` +
                    `<p class="code"><span>Rate:</span>${currentValue.rate}</p>` + 
                    `<p class="desc"><span>Currency:</span>${currentValue.description}</p>` +
                    `<p class="float"><span>Rate Float:</span>${Math.round(currentValue.rate_float)}</p>` +
                    `</div>`
            }
            informationContainer.innerHTML = div
            console.log(data.time.updated)
            secondDiv+=`<div>`+
            `<p><span>Crypto:</span>${data.chartName}</p>`+
            `<p><span></span>${data.time.updated}</p>`+
            `<p><span>By:</span>${data.disclaimer}</p>`
            addInfo.innerHTML=secondDiv
        })
}
loadBitcoin()