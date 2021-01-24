console.log('Before promise')

new Promise(function (success, fail) {
        setTimeout(function () {
            success('Yes  Yes ! ')
        }, 500)
    })
    .then(function (res) {
        console.log(`The answer is : ` + res)
    });
    
console.log('After promise')