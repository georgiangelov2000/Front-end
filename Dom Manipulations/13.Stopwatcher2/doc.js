function timer() {
    let startButton = document.getElementsByTagName('button')[0];
    let stopButton = document.getElementsByTagName('button')[1]
    let inerval;

    let hour = 0;
    let minutes = 0;
    let seconds = 0

    startButton.addEventListener('click', function () {
        startButton.disabled = true;
        stopButton.disabled = false;
        inerval = setInterval(() => {
            let sec = document.getElementsByClassName('seconds')[0];
            let min = document.getElementsByClassName('minutes')[0];
            let hou = document.getElementsByClassName('hour')[0];
            seconds++;
            if (seconds <= 9) {
                sec.innerHTML = ` <small>Seconds</small> 0${seconds}`
            }
            if (seconds >= 10) {
                sec.innerHTML = ` <small>Seconds</small> ${seconds}`
            }
            if (seconds >= 59) {
                seconds = 0
                minutes++;
                min.innerHTML = ` <small>Minutes</small> 0${minutes}:`
            }
            if (minutes <= 9) {
                min.innerHTML = `<small>Minutes</small> 0${minutes}:`
            }
            if (minutes >= 10) {
                min.innerHTML = ` <small>Minutes</small> ${minutes}:`
            }
            if (minutes >= 59) {
                hour++;
                minutes = 0;
                hou.innerHTML = ` <small>Hours</small> ${hour}:`
            }
        }, 10);
    })

    stopButton.addEventListener('click', function () {
        stopButton.disabled = true;
        startButton.disabled = false;
        clearInterval(inerval)
    })

}