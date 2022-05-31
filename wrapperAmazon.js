var aplication1 = document.querySelector(".price_AM")
var aplication2 = document.querySelector(".enlace_AM")

const getUrlOrdenador = new URLSearchParams(window.location.search)
id = getUrlOrdenador.get('id')



var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': '0762b494d5msh8a2cd53b2ddde36p1ae593jsn142775843ac4'
	}
};

fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {
	
	
	fetch('https://amazon24.p.rapidapi.com/api/product?categoryID=computers&keyword='+ ordenador.modelo +'&country=ES&page=1', options)
		.then(response => response.json())
		.then(data => {
			data['docs'].every(element => {

				


				var mainString = element.product_title.toLowerCase()
				var subString = ordenador.modelo.toLowerCase()
				console.log(element)

				if(mainString.includes(subString)){
					aplication1.innerHTML = element.app_sale_price
					aplication2.href = element.product_detail_url

					if (element.app_sale_price == null && element.product_detail_url != null){
						aplication1.innerHTML = 'No hay Stock'
					}

					return false
				
				
				
				}else{

					aplication1.innerHTML = element.app_sale_price
					aplication2.href = element.product_detail_url

					if (element.app_sale_price == null && element.product_detail_url != null){
						aplication1.innerHTML = 'No hay Stock'
					}

					return false
					
				}

				

				
				

				
			});
	
		})
		.catch(err => console.error(err));



})
.catch(err => console.log(err) )


