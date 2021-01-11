function solve() {
  let inputText = document.getElementById('input').innerText;
  let outputText = document.getElementById('output')
  let sentences = inputText.split('.');

  while (sentences.length > 0) {
    let currPar = sentences.splice(0, 3).join('.');
    let newParEl = document.createElement('p');
    newParEl.innerText = currPar
    outputText.appendChild(newParEl);
  }

}

//Basic Web exercise