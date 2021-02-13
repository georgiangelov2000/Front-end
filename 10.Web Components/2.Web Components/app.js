const template = document.createElement('template');
template.innerHTML = `
<style>
    h3{
        color:coral;
    }
    .user-card{
        background:lightgray;
        width:30%;
        margin-top:10px;
        color:dodgerblue;
        font-weight:bold;
        font-size:2rem;
    }
    #toggle-info{
        border:none;
        padding:10px;
        background:dodgerblue;
        color:white;
        font-weight:bold
    }
</style>
<div class="user-card">
    <img src="" alt="" /> 
    <h3></h3>
    <div class="info">
        <p><slot name="email"/></p>
        <p><slot name="phone"/></p>
    </div>
    <button id="toggle-info">Hide Info</button>
</div>
`;
class userCard extends HTMLElement {
    constructor() {
        super();
        
        this.showInfo=true;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src=this.getAttribute('avatar')
    }

    toggleInfo(){
        this.showInfo= !this.showInfo;
        const info=this.shadowRoot.querySelector('.info');
        const toggleBtn=this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo){
            info.style.display='block';
            toggleBtn.innerText='Hide Info';
        }else{
            info.style.display='none';
            toggleBtn.innerTexts='Show Info';
        }
    }

    connectedCallback(){
     this.shadowRoot.querySelector('#toggle-info').addEventListener
     ('click',()=>this.toggleInfo());
    };

    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();
    }
}
window.customElements.define('user-card', userCard);