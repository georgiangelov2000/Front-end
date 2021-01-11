function solve() {
    let date = new Date();
    let hourElement = document.getElementsByClassName('hours')[0];
    let minutesElement = document.getElementsByClassName('minutes')[0];
    let secondsElement = document.getElementsByClassName('seconds')[0]
    let daysElement = document.getElementsByClassName('day')[0];

    let daySpan = document.createElement('span')
    let hourSpan = document.createElement('span');
    let minutesSpan = document.createElement('span');
    let secondsSpan = document.createElement('span');


    hourSpan.className = 'hSpan';
    minutesSpan.className = 'mSpan';
    secondsSpan.className = 'sSpan';
    daySpan.className = 'dSpan';

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (minutes < 9) {
        minutes = `0${minutes}`
    }
    if (seconds < 9) {
        seconds = `0${seconds}`
    }

    hourSpan.textContent = `${hour}:`
    minutesElement.textContent = `${minutes}:`;
    secondsSpan.textContent = `${seconds}`

    hourElement.appendChild(hourSpan);
    minutesElement.appendChild(minutesSpan);
    secondsElement.appendChild(secondsSpan);

    let array = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let currentDay = array[date.getDay()];
    daySpan.textContent = `${currentDay}-`
    daysElement.appendChild(daySpan)

}