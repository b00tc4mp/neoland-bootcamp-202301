function searchGiphy(query, callback) {
    var xhr = new XMLHttpRequest(); //conector html
  
    xhr.onload = function (event) { //respuesta para cuando vuelva la respuesta
      var result = JSON.parse(event.target.response); //convierto el string en objeto con el .parse
  
      callback(result);
    };
  
    // WARN replace YOUR_API_KEY with your api key from giphy
  
    xhr.open(
      "GET",
      "https://api.giphy.com/v1/gifs/search?api_key=zVCDuTIML1CwHv0boTLXAQF0IoxxsMnE&q=" +
        query + 
        "&limit=25&offset=0&rating=g&lang=en" //query es lo que quiero buscar + limite para que me muestre los primeros 25 datos
    );
    xhr.send();
  }