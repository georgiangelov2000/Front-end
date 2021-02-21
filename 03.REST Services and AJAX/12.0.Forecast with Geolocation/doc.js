    window.addEventListener('load', () => {
        let lon;
        let lat;

        let currentName = document.getElementById('name');
        let mainTemperature = document.getElementById('temp');
        let minTemperature = document.getElementById('min');
        let maxTemperature = document.getElementById('max');
        let descriptionElement = document.getElementById('description');
        let iconElement = document.getElementById('icon')
        let toCel=document.getElementById('toCelsius')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                lon = position.coords.longitude;
                lat = position.coords.latitude;

                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ca2ecbb1f0680446fb9f72ca064c3e19&units=metric`;

                fetch(url)
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        let place = data.name;
                        let mainTemp = data.main.temp;
                        let minTemp = data.main.temp_min;
                        let maxTemp = data.main.temp_max;
                        const { description, icon } = data.weather[0];
                        console.log(description)
                        let currentIcon =`http://openweathermap.org/img/wn/${icon}@2x.png`;

                        let toFarenheit = (mainTemp * 9) / 5 + 32;

                        currentName.innerHTML=`Name:${place} `;
                        mainTemperature.innerHTML=`<span>Temperature : </span>${toFarenheit.toFixed(2)}°F`
                        toCel.innerHTML=`<span>°C : </span> ${mainTemp.toFixed(2)} °C`
                        minTemperature.innerHTML=`<span>Min Temperature : </span>${minTemp.toFixed(2)}°C`
                        maxTemperature.innerHTML=`<span>Max Temperature : </span>${maxTemp.toFixed(2)}°C`
                        descriptionElement.innerHTML=`<span>Description : </span>${description}`
                        iconElement.src=currentIcon
                    })

            });
        };
    })