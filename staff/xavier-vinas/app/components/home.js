var home = {};

home.view = document.querySelector(".home");
// me traigo el boton para poner hacer el onclick
home.addStickyButton = home.view.querySelector("button");
home.view.classList.add("off");

home.listPublicStickies = function () {
  //accedes a la propiedad ul del html
  var ul = home.view.querySelector("ul");
  // le asignas un string vacio con el inner
  ul.innerHTML = "";
  //llamas a la funcion de logic que recorre stickies y mete en una array los publics
  var stickies = retrievePublicStickies();
  //recorro la var stickies que te devuelve los stikies publicos
  for (var i = 0; i < stickies.length; i++) {
    var sticky = stickies[i];
    // creo un li
    var li = document.createElement("li");
    // dentro del li que hemos creado le añades el "text" del objeto stiky
    // y le concateno el "user"(para mostrar el correo en este caso)
    var p = document.createElement("p")
    p.innerText = sticky.text
    p.contentEditable = true 
    p.onkeyup = function(event){
      console.log (event.target.innerText)
    }
    var strong = document.createElement("strong")
    strong.innerText = sticky.user

    li.appendChild(p)
    li.appendChild(strong)

    ul.appendChild(li);
  }
};
// le añado oncclick al boton
home.addStickyButton.onclick = function (event) {
  try {
    // guardo en este caso el email en espacio de memoria con string vacio
    createSticky(window.email, "", "public");
    // llamo a la funcion publicstickies
    home.listPublicStickies();
  } catch (error) {
    // control de error
    console.error(error.message);
  }
};
