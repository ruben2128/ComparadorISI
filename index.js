
var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenadores";
var template = document.querySelector(".template");
var applicationContainer = document.querySelector("[class-ordenador-container]");
var searchInput = document.getElementById("search");
const coleccion = document.getElementsByClassName("check");
const miarray = [...coleccion];
var pc=[];



for(i of miarray){
  i.addEventListener("change", a => {

    if(!a.target.checked){
      location.reload()
    }
    else{
    const valu = a.target.value.toLowerCase()

    if(valu=="sobremesa" || valu=="portatil"){
      var i=0
      ordenadores.forEach(data => {

        const isVisibl = data.categoria.toLowerCase().includes(valu)
        if(isVisibl){
          pc[i]=true;
        }
        else{
          pc[i]=false;
        }
        i=i+1;
      });
    }

    if(valu=="hp" || valu=="msi" || valu=="asus" || valu=="huawei" || valu=="dell" || valu=="lenovo" || valu=="acer" || valu=="apple" || valu=="microsoft" || valu=="samsung"){
      var i=0
      ordenadores.forEach(data => {

        const isVisibl = data.marca.toLowerCase().includes(valu)
        if(isVisibl && pc[i]==true){
          pc[i]=true;
        }
        else{
          pc[i]=false;
        }
        i=i+1;
      });
    }

    if(valu=="intel" || valu=="amd" || valu=="apple"){
      var i=0
      ordenadores.forEach(data => {

        const isVisibl = data.cpu.toLowerCase().includes(valu)
        if(isVisibl && pc[i]==true){
          pc[i]=true;
        }
        else{
          pc[i]=false;
        }
        i=i+1;
      });
    }

    if(valu=="8" || valu=="16" || valu=="32"){
      var i=0
      ordenadores.forEach(data => {

        const isVisibl = data.ram.toLowerCase().includes(valu)
        if(isVisibl && pc[i]==true){
          pc[i]=true;
        }
        else{
          pc[i]=false;
        }
        i=i+1;
      });
    }
    var i=0
    ordenadores.forEach(data => {
      if(!pc[i]){
        console.log(data.element.classList.toggle("hide", true))
      }
      i=i+1
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

    return { modelo: ordenador.modelo, element: card, cpu: ordenador.cpu, ram: ordenador.memoria_ram, marca:ordenador.marca, categoria:ordenador.categoria}

  });
})
.catch(err => console.log(err))


