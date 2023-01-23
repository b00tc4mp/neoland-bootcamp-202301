var home = {}

home.view = document.querySelector('.home')
home.addStickyButton= home.view.querySelector('button')
home.view.classList.add('off')

home.listPublicStickies = function () {
  //nombrar la variable del selector ul
  var ul = home.view.querySelector('ul')
  //vaciamos el ul
  ul.innerHTML = ''
  //nombramos la funcion de logic para publicar los stickies publicos
  var stickies = retrievePublicStickies()
  //recorremos los stickies para buscar 
  for (var i = 0; i < stickies.length; i++) {
    var sticky = stickies[i]

    var li = document.createElement('li')
    li.innerText = sticky.text + ' (' + sticky.user + ')'
    ul.appendChild(li)

  }

}
home.addStickyButton.onclick= function(event){
 try {
  createSticky(window.email, '','public')
  home.listPublicStickies()
 } catch (error) {
  console.error(error.message)
 }
}