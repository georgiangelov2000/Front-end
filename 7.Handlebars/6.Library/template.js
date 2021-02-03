import books from './data.js';

const elements = {
    booksLibrary: () => document.getElementsByClassName('booksLibrary')[0],
    listElement: () => document.getElementsByClassName('list')[0]
}

fetch('./library.hbs')
    .then((resp) => resp.text())
    .then((booksTemplate) => {
        const template = Handlebars.compile(booksTemplate);
        const resultHTML=template({
            books
        });
        elements.booksLibrary().innerHTML=resultHTML;
    }).catch((e) => console.error(e))

    function bookEvents(){
        elements.booksLibrary().addEventListener('click',(e)=>{
            const {target}=e;
            if(target.tagName==='BUTTON' && target.textContent==='Add to List'){
               const currParentElement=target.parentElement;
               const name=currParentElement.children[0].textContent
               const obj={
                   name
               }
                fetch('./list.hbs')
                .then((res)=>res.text())
                .then((listTemplate)=>{
                    const template=Handlebars.compile(listTemplate);
                    const resultHTML=template({
                        name
                    })
                    elements.listElement().innerHTML=resultHTML
                }).catch((e) => console.error(e))
            }
        })
    }
    bookEvents()
