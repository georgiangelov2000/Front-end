import products from './data.js';

const elements = {
    mainContainer: () => document.getElementsByClassName('card')[0],
    button: () => document.getElementsByTagName('button'),
    cardElement: () => document.getElementsByClassName('card')[0],
    listElement: () => document.getElementsByClassName('list')[0]
}


fetch('./template.hbs')
    .then((resp) => resp.text())
    .then((productTemplate) => {
        const template = Handlebars.compile(productTemplate);
        const resultHTML = template({
            products
        });
        elements.mainContainer().innerHTML = resultHTML;
        clickEvent();
    }).catch((e) => console.error(e))

function clickEvent() {
    elements.cardElement().addEventListener('click', (e) => {
        const {target} = e;
        if (target.tagName === 'BUTTON' && target.textContent === 'Click Me') {
            let currentParent = target.parentNode;
            setTimeout(() => {
                currentParent.style.borderColor = 'dodgerblue';
                currentParent.style.boxShadow = 'none';
            }, 1000)
        }
    })
}