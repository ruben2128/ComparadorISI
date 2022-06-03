var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var baseurlDataMM= "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/mediamark"
var aplication3 = document.querySelector(".price_MM")
var aplication4 = document.querySelector(".enlace_MM")
aplication3.innerHTML = '-'



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(ordenador => {


    fetch(baseurlDataMM+`?modelo=${ordenador.modelo}` )
    .then(result => result.json())
    .then(data => {
        data['ordenadores'].every(element => {

            var mainString = element.product_title.toLowerCase()
            var modelo = ordenador.modelo.toLowerCase()
            var cpuLC = ordenador.cpu.toLowerCase()
            var cpu = cpuLC.split(" ")

            console.log(mainString.split(/[, ]+/))
            console.log(cpu)

            var match
            if( cpu[0] == 'intel'){
                match = mainString.split(/[, ]+/).find(elemento => {
                    if(elemento.includes(cpu[1])){
                        return true
                    }
                });
            }else if (cpu[0] == 'amd'){
                match = mainString.split(/[, ]+/).find(elemento => {
                    if(elemento.includes(cpu[3])){
                        return true
                    }
                });
                console.log('amd')
            }
            

            console.log(match)



            if (mainString.includes(modelo) && match != undefined){
                aplication3.innerHTML = element.precio
                aplication4.href = 'https://www.mediamarkt.es'+element.enlace
                return false
            }

            return true


        });
        
        console.log(aplication3.innerHTML)
        if(aplication3.innerHTML == '-'){
            aplication4.classList.toggle("hide", true)
        }
    

    })
    .catch(err => {
        console.log(err)
        aplication4.classList.toggle("hide", true)

    })

    
    

})
.catch(err => console.log(err) )











    