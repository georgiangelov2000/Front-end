function weatherApp() {
    const url = `api.openweathermap.org/data/2.5/weather?q=Plovdiv&appid=ca2ecbb1f0680446fb9f72ca064c3e19`;
    const httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('loadend', function () {
        console.log(this)
    })
    httpRequest.open('GET', url);
    httpRequest.send();
}