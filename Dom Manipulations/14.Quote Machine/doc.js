function randomQuotes() {
    let quotes = [{
            quote: 'Ако искаш нещо, което никога не си имал, трябва да направиш нещо, което никога досега не си правил.',
            aut: 'Томас Джеферсън',
        },
        {
            quote: 'Въпросът не е кой ще ми позволи. Въпросът е кой ще се опита да ме спре.',
            aut: 'Айн  Ранд',
        },
        {
            quote: 'Запомни твоето тяло е твоят роб. То работи за теб.',
            aut: 'Джак Лалейн',
        },
        {
            quote: 'Това е природата на хората, все пак. Пропускаме основите и после се ядосваме когато секси нещицата не проработят.',
            aut: 'Мартин Руни',
        },
        {
            quote: 'Погрижи се за тялото си. Това е единственото място,на което можеш  да живееш.',
            aut: 'Джим Рон',
        },
        {
            quote: 'Колкото повече се потиш на тренировка, толкова по-малко ще кървиш по-време на битка.',
            aut: 'Военоморски сили',
        },
        {
            quote: 'Трудностите, които срещаме днес определят това, кои ще бъдем ние утре.',
            aut: 'Леонардо Да Винчи',
        },
        {
            quote: 'Ако не си готов да вървиш докрай, защо изобщо си започнал?.',
            aut: 'Джо Намат'
        },
        {
            quote: 'Шампионите играят, дотогава, докато не получат това, което им трябва.',
            aut: 'Люи Симънс'
        },
        {
            quote: 'Чувалите не отвръщат на ударите.',
            aut: 'Брус Лий'
        },
        {
            quote: 'Най-ценното, което ти дава спорта е възможността да провериш на какво си способен.',
            aut: ' Олга Корбут'
        }
    ]

    let btn = document.getElementsByTagName('button')[0];
    let currentQuote = document.getElementsByClassName('quote')[0];
    let currentAuthor = document.getElementsByClassName('author')[0];
    btn.addEventListener('click', function () {
        let randomQuote = Math.floor(Math.random() * quotes.length);
        currentQuote.innerHTML = quotes[randomQuote].quote;
        currentAuthor.innerHTML = quotes[randomQuote].aut;
    })

}