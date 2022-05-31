var aplication = document.querySelector(".price");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': '85c2b05af8msh4b925bb881faad6p13d0e2jsnc314c174c888'
	}
};

fetch('https://amazon24.p.rapidapi.com/api/product?keyword=ASUS%20ROG%20G713IE-HX011&country=ES&page=1', options)
	.then(response => response.json())
	.then(data => {
		data['docs'].forEach(element => {
			console.log(element.product_title) 
		});

    })
	.catch(err => console.error(err));