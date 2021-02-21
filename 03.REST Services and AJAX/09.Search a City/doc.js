function displayWeather() {
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', findFuncution);

    function findFuncution(event) {
        event.preventDefault();
        let inputFilter = document.getElementById('search');
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputFilter.value}&appid=ca2ecbb1f0680446fb9f72ca064c3e19`
        let pEl = document.getElementById('city');
        let temperatureMax = document.getElementById('max');
        let temperatureMin = document.getElementById('min')
        let stateContent = document.getElementById('state');
        let desc = document.getElementById('description');
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                {
                    pEl.textContent = data.name
                    temperatureMax.innerHTML = ` <span>Max:</span> ${Math.floor(data.main.temp_max - 273.15)}°C`;
                    temperatureMin.innerHTML = `<span>Min:</span> ${Math.floor(data.main.temp_min - 273.15)}°C `;
                    data.weather.forEach((element) => {
                        stateContent.innerHTML = `<span>State:${element.main}</span>`;
                        desc.innerHTML = `<span>Description:</span> ${element.description}`
                    })
                }
            }).catch((error)=>alert('Not found'))
            inputFilter.value='';


        }
    }
    displayWeather();