var home = {};

home.view = document.querySelector(".home-view");
home.logoutButton = document.querySelector(".logout-button");
home.addButton = home.view.querySelector(".add-button");
home.view.classList.add("off");
home.listPanel = home.view.querySelector(".list-panel");

home.newPasswordMessage = home.view.querySelector(".newPasswordMessage"); //agregue el mensaje en un p y lo apague
home.newPasswordMessage.classList.add("off");


home.profilePanel = home.view.querySelector(".profile-panel")
home.profilePanel.classList.add("off")

home.updatepasswordpanel = home.view.querySelector(".update-password-panel")
home.updatepasswordpanel.classList.add("off");


home.updatePasswordPanel = home.profilePanel.querySelector(".update-password-panel")
home.profileLink = home.view.querySelector(".profile-link")
home.logo = home.view.querySelector(".logo")

home.listPublicStickies = function () {
  home.listPanel.innerHTML = "";

  var stickies = retrievePublicStickies();

  for (var i = 0; i < stickies.length; i++) {
    var sticky = stickies[i];

    var li = document.createElement("li");

    var p = document.createElement("p");
    p.innerText = sticky.text;
    p.contentEditable = window.email === sticky.user;
    p.onkeyup = function (event) {
      //se ejecute algo cuando levantamos el dedo de la tecla
      try {
        updateStickyText(window.email, sticky.id, event.target.innerText); //propiedad que permite acceder al elemento html sobre el cual se disparo el evento
      } catch (error) {
        console.error(error.message);
      }
    };

    var strong = document.createElement("strong");
    strong.innerText = sticky.user;

    if (window.email === sticky.user) {
      var deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerText = "x";
      deleteButton.id = sticky.id; //el boton guarda el id del sticky

      deleteButton.onclick = function (event) {
        try {
          deleteSticky(window.email, event.target.id); //evento cuando se hace click, el target apunta al boton y se trae el id que esta guardado en el boton

          home.listPublicStickies();
        } catch (error) {
          console.error(error.message);
        }
      };

      li.appendChild(deleteButton);
    }

    li.appendChild(p);
    li.appendChild(strong);

    home.listPanel.appendChild(li);
  }
};

home.addButton.onclick = function (event) {
  try {
    createSticky(window.email, "", "public");

    home.listPublicStickies();
  } catch (error) {
    console.error(error.message);
  }
}

home.logoutButton.onclick = function (event) {
  delete window.email

  home.view.classList.add("off")
  login.view.classList.remove("off")
}

home.profileLink.onclick = function(event){
  event.preventDefault()

  home.listPanel.classList.add("off")
  home.addButton.classList.add("off")
  home.profilePanel.classList.remove("off")
  home.updatepasswordpanel.classList.remove("off");
}

home.logo.onclick = function(event){
  event.preventDefault()

  home.profilePanel.classList.add("off")
  home.listPanel.classList.remove("off")
  home.addButton.classList.remove("off")
}

home.updatePasswordPanel.onsubmit = function(event) {
  event.preventDefault()

  var currentPassword = event.target.currentPassword.value
  var newPassword = event.target.newPassword.value
  var newPasswordConfirm = event.target.newPasswordConfirm.value

  try{
  updateUserPassword(window.email, currentPassword, newPassword, newPasswordConfirm)
  home.newPasswordMessage.classList.remove("off")
  home.updatepasswordpanel.reset() //se vacian los inputs

  } catch(error) { 
    home.view.querySelector(".newPasswordMessage").innerText = ("❌ ") + error.message //informa que error hay, le cambia al p el texto
    home.newPasswordMessage.classList.remove("off")
  }

}

