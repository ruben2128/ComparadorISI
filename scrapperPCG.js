var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var baseurlDataPCG= "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/pcgaming"
var aplication5 = document.querySelector(".price_PCG")
var aplication6 = document.querySelector(".enlace_PCG")
aplication5.innerHTML = '-'



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {


    fetch(baseurlDataPCG+`?modelo=${ordenador.modelo}` )
    .then(result => result.json())
    .then(data => {
        data['ordenadores'].every(element => {
            
            var mainString = element.product_title.toLowerCase()
            var modelo = ordenador.modelo.toLowerCase()
            if (mainString != '-'){
                aplication5.innerHTML = element.precio
                aplication6.href = 'https://www.pcgaming365.com'+element.enlace
                return false
            }else{
                aplication6.classList.toggle("hide", true)
            }


            return true
        });
        
    
    

    })
    .catch(err =>{
        aplication6.classList.toggle("hide", true)
        console.log(err)
    })

    
    

})
.catch(err => console.log(err) )





    