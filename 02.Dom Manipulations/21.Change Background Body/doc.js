let array = [
    'blue',
    'black',
    'red',
    'orange',
    'yellow',
    'dodgerblue',
    'pink',
    'yellowgreen',
    'grey',
    '#333',
    'violet'
]


document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    let currentColor = array[Math.floor(Math.random() * array.length)]
    document.body.style.backgroundColor = currentColor;
    let color = document.getElementById('color');
    color.textContent = currentColor
    if (color.textContent == 'black' || color.textContent=='#333') {
        color.style.color = 'white'
        document.getElementById('btn').style.backgroundColor = 'white'
        document.getElementById('btn').style.color = 'black'
    } else {
        color.style.color = 'black'
    }

})