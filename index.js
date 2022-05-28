var baseurl = "https://2v1s89q67i.execute-api.us-west-2.amazonaws.com/dev/ordenadores";
var template = document.querySelector(".template");
var applicationContainer = document.querySelector("[class-ordenador-container]");
var searchInput = document.getElementById("search");

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  ordenadores.forEach(data => {
    const isVisible = data.modelo.toLowerCase().includes(value)
    console.log(data.element.classList.toggle("hide", !isVisible))
    
  });
  


})

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


    applicationContainer.append(card)

    return { modelo: ordenador.modelo, element: card}

  });
})
.catch(err => console.log(err))


    
    