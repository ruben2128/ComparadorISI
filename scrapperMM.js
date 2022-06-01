var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var baseurlDataMM= "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/mediamark"
var aplication3 = document.querySelector(".price_MM")
var aplication4 = document.querySelector(".enlace_MM")



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {


    fetch(baseurlDataMM+`?modelo=${ordenador.modelo}` )
    .then(result => result.json())
    .then(data => {
        console.log(data)
        data['ordenadores'].every(element => {

            var mainString = element.product_title.toLowerCase()
            var modelo = ordenador.modelo.toLowerCase()
            if (mainString.includes(modelo)){
                aplication3.innerHTML = element.precio
                aplication4.href = 'https://www.mediamarkt.es'+element.enlace
                return false
            }else{
                aplication3.innerHTML = '-'
                aplication4.classList.toggle("hide", true)
            }
        });
        
    
    

    })
    .catch(err => {
        console.log(err)
    })

    
    

})
.catch(err => console.log(err) )





    