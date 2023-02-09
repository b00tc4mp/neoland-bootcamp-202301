document.body.innerHTML = "";

var form = document.createElement("form");
form.classList.add("w-2/6","h-16", "rounded-lg","border-2", "m-8", "flex", "items-center", "justify-center","border-grey", "gap-4");

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
    var imagesContainer = document.createElement("div")

    imagesContainer.classList.add("flex", "flex-wrap", "gap-2","justify-center", "items-center")

    result.data.forEach((item) => {
      var url = item.images.original.url;

      var img = document.createElement("img");
      img.src = url;
      img.classList.add("giphy-image", "border-2", "w-1/4", "h-2/12", "items-center");

      imagesContainer.append(img);
    });

    document.body.append(imagesContainer)
  });

  form.reset();
};

var input = document.createElement("input");
input.classList.add("w-2/5")


input.type = "search";
input.name = "q";
input.placeholder = "Busca en Giphy";

var button = document.createElement("button");
button.innerText = "🔍";

form.append(input, button);
document.body.append(form);