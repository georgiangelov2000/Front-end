const template = document.createElement('template');
template.innerHTML=`
<style> 
.red{
    background:tomato;
    border:none;
    padding:20px;
    font-weight:bold
}
.success{
    background:lightgreen;
    border:none;
    padding:20px;
    font-weight:bold
}
.warning{
    background:yellow;
    border:none;
    padding:20px;
    font-weight:bold
}
</style>
<button> </button>
`
class ButtonTemplate extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('button').innerText=this.getAttribute('name');
        this.shadowRoot.querySelector('button').className=this.getAttribute('type')
    }
}
window.customElements.define('button-template',ButtonTemplate)