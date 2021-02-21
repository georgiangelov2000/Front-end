let sendBtn = document.getElementById('send');
sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let info=document.getElementById('currentNumber');

    let inp = document.getElementById('inpNumber').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + inp);

    xhr.onload = function () {
        if(this.status==200 && inp!=''){
            info.style.display='block'
            info.innerHTML=this.responseText;
        }
    }

    xhr.send();
})