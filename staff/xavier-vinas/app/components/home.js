var home = {}

home.view = document.querySelector(".home")
home.view.classList.add("off")

home.listPublicStickies = function() {
    //accedes a la propiedad ul del html 
    var ul = home.view.querySelector('ul')
    // le asignas un string vacio con el inner 
    ul.innerHTML = ''
    //llamas a la funcion de logic que recorre stickies y mete en una array los publics
    var stickies = retrievePublicStickies()
    //recorro la var stickies que te devuelve los stikies publicos
    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]
    // creo un li 
        var li = document.createElement('li')
    // dentro del li que hemos creado le añades el "text" del objeto stiky
    // y le concateno el "user"(para mostrar el correo en este caso)
        li.innerText = sticky.text + ' (' + sticky.user + ')'
    // cuando haces el append le metes el li que has creado dentro del "ul"
        ul.appendChild(li)
    }
}
    
