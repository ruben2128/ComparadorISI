var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var aplication = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(data => {

    var imagen= `<img src="${data.photo_url}" height=400px width=400px>`;
    aplication.innerHTML +=imagen;

    var prueba =
    `<article><h1>Modelo:</h1> ${data.modelo}<br>
    <h1>Cpu:</h1> ${data.cpu}<br>
    <h1>Grafica:</h1> ${data.grafica}<br>
    <h1>Almacenamiento:</h1> ${data.almacenamiento}<br>
    <h1>Categoria:</h1> ${data.categoria}<br>
    <h1>Marca:</h1> ${data.marca}<br>
    <h1>Memoria Ram:</h1> ${data.memoria_ram}</article>`;

    aplication.innerHTML +=prueba;
    

})
.catch(err => console.log(err) )





    