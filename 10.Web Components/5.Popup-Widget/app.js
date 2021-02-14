const template = document.createElement('template');
template.innerHTML =`
<style> 
span{
    display:none
}
</style>
<div>
        <h1>Click on icon to see text</h1>
    <div class="info"> 
        <span> <slot name="pop" /> </span>
    </div>
</div>
`


class Popup extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerHTML=this.getAttribute('text')
    }
}
window.customElements.define('popup-text', Popup)
