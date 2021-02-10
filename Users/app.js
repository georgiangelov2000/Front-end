  (async () => {
    let userElement=document.getElementById('users-template') ;
    let partialString = await template.getTemplateString('users');
    template.makePartial('user', partialString);

    let templateFunc = await template.getTemplateFunc('user-list');
    userElement.innerHTML = templateFunc({users});    

    let detailsBtn=document.querySelectorAll('.detailsBtn');

    Array.from(detailsBtn).forEach((btn)=>{
      btn.addEventListener('click',(event)=>{
        let userElement=event.target.parentElement;
        let detailsElement=userElement.querySelector('.info')
        if(detailsElement.style.display==='block'){
          detailsElement.style.display='none';
        }else{
          detailsElement.style.display='block'
        }
      })
    })
})();