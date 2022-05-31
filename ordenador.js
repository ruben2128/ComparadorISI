var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var aplication = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(data => {
    var modelo = data.modelo;
    modelo = modelo.toUpperCase();

    
    var imagen= `<img src="${data.photo_url}" height=700px width=700px>`;
    aplication.innerHTML +=imagen;


    var prueba =
    `<div class="col-1-text">
    <div class="modelo">
    ${modelo}
    </div>
    <div class="resto">
    <h1>CPU:</h1> <div class="sub-texto">${data.cpu} </div> <br>
    <h1>Grafica:</h1> <div class="sub-texto"> ${data.grafica} </div> <br>
    <h1>Almacenamiento:</h1> <div class="sub-texto">${data.almacenamiento} </div> <br>
    <h1>Categoria:</h1> <div class="sub-texto">${data.categoria} </div> <br>
    <h1>Marca:</h1> <div class="sub-texto">${data.marca} </div> <br>
    <h1>Memoria Ram:</h1> <div class="sub-texto">${data.memoria_ram}</div> <br></div>`;

    aplication.innerHTML +=prueba;
    

})
.catch(err => console.log(err) )





    