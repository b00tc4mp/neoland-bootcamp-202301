var home = {}

home.view = document.querySelector('.home')
home.view.classList.add('off')

home.listPublicStickies = function() {
    var ul = home.view.querySelector('ul')
    ul.innerHTML = ''

    var stickies = retrievePublicStickies()

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        var li = document.createElement('li')
        li.innerText = sticky.text + ' (' + sticky.user + ')'

        ul.appendChild(li)
    }
}

