//Llamada a a la api de Amazon

var precioAM = document.querySelector(".price_AM")
var enlaceAM = document.querySelector(".enlace_AM")

const getUrlOrdenador = new URLSearchParams(window.location.search)
id = getUrlOrdenador.get('id')

precioAM.innerHTML = '-'




var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
		'X-RapidAPI-Key': '57463641c5msha4890aebd91a6d0p158290jsna7033c07e58a'
	}
};

//Busqueda del ordenador seleccionado en la base datos
fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {
	
	//Llamada a la api de amazon
	fetch('https://amazon24.p.rapidapi.com/api/product?categoryID=computers&keyword='+ ordenador.modelo +'&country=ES&page=1', options)
		.then(response => response.json())
		.then(data => {
			data['docs'].every(element => {

				var productTitle = element.product_title.toLowerCase()
				var modeloString = ordenador.modelo.toLowerCase()

				//Filtro de integracion de datos - El título del producto contiene el nombre del modelo del pc 
				if(productTitle.includes(modeloString)){

					if (element.app_sale_price == null && element.product_detail_url != null){
						precioAM.innerHTML = 'No hay Stock'
					}else{
						precioAM.innerHTML = element.app_sale_price
						enlaceAM.href = element.product_detail_url
					}
					
					return false
					
				}
				
		

				return true

				
				

				
			});
			//Caso de no obtener el pc ocultar boton con enlace
			if(precioAM.innerHTML == '-'){
				enlaceAM.classList.toggle("hide", true)
			}
	
		})
		.catch(err => {
			console.error(err)
			enlaceAM.classList.toggle("hide", true)
		});



})
.catch(err => console.log(err) )


