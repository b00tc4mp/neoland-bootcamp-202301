document.body.innerHTML = "";

var form = document.createElement("form");

form.onsubmit = (event) => {
  event.preventDefault();

  // MOMENTO DE LIMPIAR LOS RESULTADOS ANTERIORES

  // 1. LLEGAR A CADA UNA DE LAS IMÁGENES Y
  var images = document.querySelectorAll(".giphy-image");

  // 2. EJECUTAR EL MÉTODO REMOVE SOBRE CADA UNA DE LAS IMÁGENES
  for (var i = 0; i < images.length; i++) {
    images[i].remove();
  }

  var query = event.target.q.value;

  searchGiphyAndRenderResults(query);

  form.reset();
};

var input = document.createElement("input");

input.type = "search";
input.name = "q";
input.placeholder = "buscar aquí";

var button = document.createElement("button");
button.innerText = "Busca con Giphy";

form.append(input, button);
document.body.append(form);

function searchGiphyAndRenderResults(query) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function (event) {
    var result = JSON.parse(event.target.response);

    result.data.forEach((item) => {
      var url = item.images.original.url;

      var img = document.createElement("img");
      img.src = url;
      img.classList.add("giphy-image");

      document.body.append(img);
    });
  };

  // WARN replace YOUR_API_KEY with your api key from giphy

  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?api_key=zVCDuTIML1CwHv0boTLXAQF0IoxxsMnE&q=" +
      query +
      "&limit=25&offset=0&rating=g&lang=en"
  );
  xhr.send();
}
