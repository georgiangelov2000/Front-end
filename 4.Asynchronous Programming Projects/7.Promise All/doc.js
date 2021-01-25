function loadSwapi() {
  const firstUrl = fetch('https://swapi.dev/api/people/1/');
  const secondUrl = fetch('https://swapi.dev/api/people/2/');
  let container = document.getElementsByClassName('characters')[0];
  let output = ''
  Promise.all([firstUrl, secondUrl]).then(values => {
    return Promise.all(values.map(val => val.json()));
  }).then(values => {
    const data = values;
    console.log(data)
    let [firstObj, secondObj] = data;
    output += `<div class="firstChar">` +
      `<p>Name:${firstObj.name}</p>` +
      `<pHeight:>${firstObj.height}</p>` +
      `<p>Mass:${firstObj.mass}</p>` +
      `<p>Hair color:${firstObj.hair_color}</p>` +
      `</div>`
    container.innerHTML = output

    output += `<div class="secondChar">` +
      `<p>Name:${secondObj.name}</p>` +
      `<p>Height:${secondObj.height}</p>` +
      `<p>Mass:${secondObj.mass}</p>` +
      `<p>Hair color:${secondObj.hair_color}</p>` +
      `</div>`
    container.innerHTML = output

  }).catch(err => {
    console.log('error');
    container.innerHTML = err;
  })
}
loadSwapi()