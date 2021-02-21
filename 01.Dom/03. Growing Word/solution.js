function growingWord() {
  let exerciseElement = document.getElementById('exercise');
  let lastElement = exerciseElement.lastElementChild;
  let colorElements = document.getElementById('colors')
  if (!lastElement.style.fontSize) {
    lastElement.style.fontSize = '2px';
  } else {
    lastElement.style.fontSize = parseInt(lastElement.style.fontSize) * 2 + 'px';
  }
  let firstColorElement = colorElements.firstElementChild;
  let currentColor = firstColorElement.innerHTML.toLowerCase();
  lastElement.style.color = currentColor;
  colorElements.appendChild(firstColorElement)
}

//Basic web exercise