function lockedProfile() {
    let btnsArray = [...document.getElementsByTagName('button')];
    btnsArray.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        let button = event.target;
        let profile = button.parentElement;
        let moreInformation = profile.getElementsByTagName('div')[0];
        let status = profile.querySelector('input[type="radio"]:checked').value;

        if (status === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it'
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more'
            }
        }
    }
}