var home = {};

home.view = document.querySelector('.home')
home.addStickyButton = home.view.querySelector('button')
home.view.classList.add("off");

home.listPublicStickies = function () {
  var ul = home.view.querySelector('ul');
  ul.innerHTML = '';

  var stickies = retrievePublicStickies();

  for (var i = 0; i < stickies.length; i++) {
    var sticky = stickies[i];

    var li = document.createElement('li');

    var p = document.createElement('p')
    p.innerText = sticky.text
    p.contentEditable = window.email === sticky.user
    p.onkeyup = function (event) {
      try {
        updateStickyText(window.email, sticky.id, event.target.innerText)
      } catch (error) {
        console.error(error.message)
      }
    }

    var strong = document.createElement('strong')
    strong.innerText = sticky.user

    li.appendChild(p)
    li.appendChild(strong)

    ul.appendChild(li)
  }
};

home.addStickyButton.onclick = function (event) {
  try {
    createSticky(window.email, '', 'public')

    home.listPublicStickies()
  } catch (error) {
    console.error(error.message)
  }
}