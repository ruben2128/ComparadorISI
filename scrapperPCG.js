var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var baseurlDataPCG= "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/pcgaming"
var precioPCG = document.querySelector(".price_PCG")
var enlacePCG = document.querySelector(".enlace_PCG")
precioPCG.innerHTML = '-'


//Busqueda del ordenador seleccionado en la base datos
fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {

    //Llamada al scrapper de PCGaming
    fetch(baseurlDataPCG+`?modelo=${ordenador.modelo}` )
    .then(result => result.json())
    .then(data => {
        data['ordenadores'].every(element => {
            
            var mainString = element.product_title.toLowerCase()
            if (mainString != '-'){
                precioPCG.innerHTML = element.precio
                enlacePCG.href = 'https://www.pcgaming365.com'+element.enlace
                return false
            }


            return true
        });
        //Caso de no obtener el pc ocultar boton con enlace
        if(precioPCG.innerHTML == '-'){
            enlacePCG.classList.toggle("hide", true)
        }
        
    
    

    })
    .catch(err =>{
        enlacePCG.classList.toggle("hide", true)
        console.log(err)
    })

    
    

})
.catch(err => console.log(err) )





    