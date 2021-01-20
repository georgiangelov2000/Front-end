window.onload = function () {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Plovdiv&appid=ca2ecbb1f0680446fb9f72ca064c3e19'
    let weatherContainer = document.getElementById('weather');
    let cordContainer = document.getElementById('cordinates');
    let mainContainer = document.getElementById('main');
    let cityContainer = document.getElementById('city');
    let containerDate = document.getElementById('time');
    let dateTime=document.getElementById('currentDate')

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            data.weather.forEach((element) => {
                for (let [key, value] of Object.entries(element)) {
                    let par = document.createElement('p');
                    par.textContent += `${key}:${value} \n`;
                    weatherContainer.appendChild(par)
                }
            })
            for (let [key, value] of Object.entries(data.coord)) {
                let par = document.createElement('p');
                par.textContent += `${key}:${value}\n`;
                cordContainer.appendChild(par)
            }
            for (let [key, value] of Object.entries(data.main)) {
                let par = document.createElement('p');
                if (key === 'humidity') {
                    par.textContent += `${key}:${Math.round(value).toFixed(0)}%\n`;
                } else {
                    par.textContent += `${key}:${Math.round(value).toFixed(0)}°C\n`;
                }
                mainContainer.appendChild(par)
            }
            let par = document.createElement('p');
            par.textContent = `${data.name}`
            cityContainer.appendChild(par)
        })
    
}