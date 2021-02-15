
class AppNavbar extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        const template=document.querySelector('template');
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallBack(){
        console.log('element added to the dom')
    }
    disconnectedCallback(){
        console.log('Element removed from the dom')
    }
}
window.customElements.define('app-navbar',AppNavbar)