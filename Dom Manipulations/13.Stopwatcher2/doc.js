function timer() {
    let startButton = document.getElementsByTagName('button')[0];
    let inerval;
    
    let hour=0;
    let minutes = 0;
    let seconds = 0

    startButton.addEventListener('click', function () {
        inerval = setInterval(() => {
            let sec = document.getElementsByClassName('seconds')[0];
            let min = document.getElementsByClassName('minutes')[0];
            let hou = document.getElementsByClassName('hour')[0];
            seconds++;
            sec.innerHTML = seconds


        }, 1000);
    })

}