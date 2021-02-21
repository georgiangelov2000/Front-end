console.log('Before promise');
new Promise(function (success, fail) {
        setTimeout(function () {
            fail('No No!');
        }, 500);
    })
    .then(function (res) {
        console.log(res)
    }).catch(function (error) {
        console.log(error)
    })
    console.log('After promise');