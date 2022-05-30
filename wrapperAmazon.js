var aplication = document.querySelector(".price")
const getUrlOrdenador = new URLSearchParams(window.location.search)
id = getUrlOrdenador.get('id')



var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': '85c2b05af8msh4b925bb881faad6p13d0e2jsnc314c174c888'
	}
};

fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {
	
	
	fetch('https://amazon24.p.rapidapi.com/api/product?categoryID=computers&keyword='+ ordenador.modelo +'&country=ES&page=1', options)
		.then(response => response.json())
		.then(data => {
			data['docs'].forEach(element => {

				var mainString = element.product_title.toLowerCase()
				var subString = ordenador.modelo.toLowerCase()

				if(mainString.includes(subString)){
					aplication.innerHTML = element.price
				}

				
				

				
			});
	
		})
		.catch(err => console.error(err));



})
.catch(err => console.log(err) )


