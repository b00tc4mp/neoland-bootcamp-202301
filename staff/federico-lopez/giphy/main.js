document.body.innerHTML = "";

var form = document.createElement("form");
form.classList.add("border-2", "border-red-500");

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

  searchGiphy(query, (result) => {
    result.data.forEach((item) => {
      var url = item.images.original.url;

      var img = document.createElement("img");
      img.src = url;
      img.classList.add("giphy-image", "border-2", "border-black");

      document.body.append(img);
    });
  });

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
