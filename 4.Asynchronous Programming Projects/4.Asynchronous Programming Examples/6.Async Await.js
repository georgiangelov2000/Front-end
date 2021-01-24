async function myFunction(url) {
    url = 'https://swapi.dev/api/people/1/';
    try {
        const response = await fetch(url);
        console.log(await response.json()
        );
    } 
    catch (err) {
        console.log(err)
    }
}
myFunction()