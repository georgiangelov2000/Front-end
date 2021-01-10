function solve() {

    var input, filter, cards, cardContainer, title, i;
    input = document.getElementsByClassName('form-control')[0];
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}