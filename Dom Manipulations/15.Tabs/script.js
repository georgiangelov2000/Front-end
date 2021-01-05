function solve() {
    let linksElement = document.getElementsByClassName('links')[0];
    let tabs = document.getElementsByClassName('tab')[0]
    let liElements = linksElement.getElementsByTagName('li');

    for (let i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener('click', function () {
            linksElement.getElementsByClassName("active")[0].classList.remove('active');
            liElements[i].classList.add("active");
            tabs.getElementsByClassName("active")[0].classList.remove("active");
            tabs.getElementsByTagName("div")[i].classList.add("active");
        })
    }
}