function solve() {
  let linkElements = document.querySelectorAll('.link-1 a')
  for (let element of linkElements) {
    element.addEventListener('click', onClickElement)
  }

  function onClickElement(e) {
    let parElement = e.currentTarget.nextElementSibling;
    console.log(parElement)
    let visitedCount = Number(parElement.innerText.split(' ')[1]);
    console.log(visitedCount)
    visitedCount++
    parElement.innerText = `visited ${visitedCount} times`
  }
}

//Basic Web exercise