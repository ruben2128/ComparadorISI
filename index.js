
var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenadores";
var template = document.querySelector(".template");
var applicationContainer = document.querySelector("[class-ordenador-container]");
var searchInput = document.getElementById("search");
const coleccion = document.getElementsByClassName("check1");
const miarray = [...coleccion];
const coleccion2 = document.getElementsByClassName("check2");
const miarray2 = [...coleccion2];
const pcs=[];

for(i of miarray){
  i.addEventListener("change", a => {
    if(!a.target.checked){
      ordenadores.forEach(data => {
        console.log(data.element.classList.toggle("hide", false))
      });
    }
    else{
    const valu = a.target.value.toLowerCase()
    ordenadores.forEach(data => {
      const isVisibl = data.cpu.toLowerCase().includes(valu)
      pcs.push(data.element)
      console.log(data.element.classList.toggle("hide", !isVisibl))
    
    });
    }
  }
)
}

for(i of miarray2){

  i.addEventListener("change", a => {
    if(!a.target.checked){
      ordenadores.forEach(data => {
        console.log(data.element.classList.toggle("hide", false))
      });
    }
    else{
    const valu = a.target.value.toLowerCase()
    ordenadores.forEach(data => {
      const isVisibl = data.ram.toLowerCase().includes(valu)
      pcs.push(data.element)
      console.log(data.element.classList.toggle("hide", !isVisibl))
    
    });
    }
  }
)
}

//Funcion de la barra de busqueda 
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  ordenadores.forEach(data => {
    const isVisible = data.modelo.toLowerCase().includes(value)
    console.log(data.element.classList.toggle("hide", !isVisible))
  });
}
)

//Obtención de todos los ordenadores de la base de datos y muestra en la vista 
fetch(baseurl)
.then(res => res.json())
.then(data => {
  ordenadores = data['ordenadores'].map(ordenador => {

    const application = template.content;

    const card = application.cloneNode(true).children[0]

    card.id =  ordenador.modelo

    var buy = card.querySelector(".buy")

    buy.href = `./ordenador.html?id=${ordenador.ordenadorId}`

    var modelo = card.querySelector(".modelo")
    modelo.innerHTML = ordenador.modelo

    var srcPhoto = card.querySelector(".mouse")
    srcPhoto.src = ordenador.photo_url


    applicationContainer.append(card)

    return { modelo: ordenador.modelo, element: card, cpu: ordenador.cpu, ram: ordenador.memoria_ram}

  });
})
.catch(err => console.log(err))

    
    