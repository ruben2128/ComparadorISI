var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var baseurlDataMM= "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/mediamark"
var precioMM = document.querySelector(".price_MM")
var enlaceMM = document.querySelector(".enlace_MM")
precioMM.innerHTML = '-'


//Busqueda del ordenador seleccionado en la base datos
fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {

    //LLamada al scrapper de MediaMarkt
    fetch(baseurlDataMM+`?modelo=${ordenador.modelo}` )
    .then(result => result.json())
    .then(data => {
        data['ordenadores'].every(element => {

            var productTitle = element.product_title.toLowerCase()
            var modelo = ordenador.modelo.toLowerCase()
            var cpuLC = ordenador.cpu.toLowerCase()
            var cpu = cpuLC.split(" ")
            var match

            //Primer filtro - La cpu Debe aparecer en el titulo del producto
            if( cpu[0] == 'intel'){
                match = productTitle.split(/[, ]+/).find(elemento => {
                    if(elemento.includes(cpu[1])){
                        return true
                    }
                });
            }else if (cpu[0] == 'amd'){
                match = productTitle.split(/[, ]+/).find(elemento => {
                    if(elemento.includes(cpu[3])){
                        return true
                    }
                });
            }
            


            //Segundo filtro el modelo debe aparecer en el titulo del producto    
            if (productTitle.includes(modelo) && match != undefined){
                precioMM.innerHTML = element.precio
                enlaceMM.href = 'https://www.mediamarkt.es'+element.enlace
                return false
            }

            return true


        });
        //Caso de no obtener el pc ocultar boton con enlace
        if(precioMM.innerHTML == '-'){
            enlaceMM.classList.toggle("hide", true)
        }
    

    })
    .catch(err => {
        console.log(err)
        enlaceMM.classList.toggle("hide", true)

    })

    
    

})
.catch(err => console.log(err) )











    