function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function () {
        let currentDay = document.getElementById('days').value;
        document.getElementById('hours').value = currentDay * 24;
        document.getElementById('minutes').value = currentDay * 1440;
        document.getElementById('seconds').value = (currentDay % 3600 % 60)
    })

    hoursBtn.addEventListener('click', function () {
        let hours = document.getElementById('hours').value;
        document.getElementById('hours').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    })
    minutesBtn.addEventListener('click', function () {
        let minutes = document.getElementById('minutes').value;
        document.getElementById('minutes').value = minutes / 60;
        document.getElementById('days').value = minutes / 60 / 24;
        document.getElementById('seconds').value = minutes * 60
    })
    secondsBtn.addEventListener('click', function () {
        let seconds = document.getElementById('seconds').value;
        document.getElementById('seconds').value = seconds / 60 / 60;
        document.getElementById('minutes').value = seconds / 60;
        document.getElementById('seconds').value = seconds / 60 / 60 / 24;
    })
}