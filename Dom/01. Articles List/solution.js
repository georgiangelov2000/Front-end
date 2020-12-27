function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	let h2Element = document.createElement('h2');
	h2Element.innerHTML = titleElement.value;
	titleElement.value='';
	
	let parElement = document.createElement('p');
	parElement.innerHTML = contentElement.value;
	contentElement.value=''
	
	let articleElement = document.createElement('article');
	articleElement.appendChild(h2Element);
	articleElement.appendChild(parElement);

	let sectionElement = document.getElementById('articles');
	sectionElement.appendChild(articleElement)
}

//Basic Web exercise