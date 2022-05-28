var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var application = document.querySelector(".template");
var container = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(data => {

    const content = application.content;
    
    const card = content.cloneNode(true)

    card.querySelector(".modelo").innerHTML = 'Modelo: '+data.modelo
    card.querySelector(".cpu").innerHTML = 'CPU: '+data.cpu
    card.querySelector(".grafica").innerHTML = 'Gráfica: '+data.grafica
    card.querySelector(".almacenamiento").innerHTML = 'Almacenamiento: '+data.almacenamiento
    card.querySelector(".categoria").innerHTML = 'Categoria: '+data.categoria
    card.querySelector(".marca").innerHTML = 'Marca: '+data.marca
    card.querySelector(".memoria_ram").innerHTML = 'Memoria Ram: '+data.memoria_ram


    container.append(card)



})
.catch(err => console.log(err) )





    