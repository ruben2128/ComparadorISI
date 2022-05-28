var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenador";
var aplication = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')



fetch(baseurl+`?ordenadorId=${id}`)
.then(res => res.json())
.then(data => {

    var prueba =
    `<h1>Modelo: ${data.modelo}</h1>
    <h3>Cpu: ${data.cpu}</h3>
    <h3>Grafica: ${data.grafica}</h3>
    <h3>Almacenamiento: ${data.almacenamiento}</h3>
    <h3>Categoria: ${data.categoria}</h3>
    <h3>Marca: ${data.marca}</h3>
    <h3>Memoria Ram: ${data.memoria_ram}</h3>`;

    aplication.innerHTML += prueba;



})
.catch(err => console.log(err) )





    