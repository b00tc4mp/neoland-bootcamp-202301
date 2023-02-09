function searchGiphy(query, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function (event) {
    var result = JSON.parse(event.target.response);

    callback(result);
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
