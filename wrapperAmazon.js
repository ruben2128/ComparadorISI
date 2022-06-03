var aplication1 = document.querySelector(".price_AM")
var aplication2 = document.querySelector(".enlace_AM")

const getUrlOrdenador = new URLSearchParams(window.location.search)
id = getUrlOrdenador.get('id')

aplication1.innerHTML = '-'




var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': 'd50cab9dc9msh8e8b868e63fa6b7p1b6adejsn4f19b399eedf'
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

				console.log('Amazon: '+mainString)
				console.log('Amazon: '+subString)

				if(mainString.includes(subString)){

					if (element.app_sale_price == null && element.product_detail_url != null){
						aplication1.innerHTML = 'No hay Stock'
					}else{
						aplication1.innerHTML = element.app_sale_price
						aplication2.href = element.product_detail_url
					}
					
					return false
					
				}
				
		

				return true

				
				

				
			});
			if(aplication1.innerHTML == '-'){
				aplication2.classList.toggle("hide", true)
			}
	
		})
		.catch(err => {
			console.error(err)
			aplication2.classList.toggle("hide", true)
		});



})
.catch(err => console.log(err) )


