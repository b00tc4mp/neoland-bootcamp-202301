var home = {}

home.view = document.querySelector('.home-view')
home.logoutButton = document.querySelector('.logout-button')
home.addStickyButton = home.view.querySelector('.add-sticky-button')
home.view.classList.add('off')

home.listPublicStickies = function () {
    var ul = home.view.querySelector('ul')
    ul.innerHTML = ''

    var stickies = retrievePublicStickies()

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        var li = document.createElement('li')

        var p = document.createElement('p')
        p.innerText = sticky.text
        p.contentEditable = true
        p.onkeyup = function (event) {
            console.log(event.target.innerText)
        }

        if (sticky.user === window.email) {
            var deleteButton = document.createElement('button')

            deleteButton.innerText = 'x'
            deleteButton.id = sticky.id

            deleteButton.onclick = function (event) {
                var stickyId = event.target.id

                try {
                    deleteSticky(window.email, stickyId)

                    home.listPublicStickies()
                } catch (error) {
                    console.log(error)
                }
            }

            li.appendChild(deleteButton)
        }

        var strong = document.createElement('strong')
        strong.innerText = sticky.user

        li.appendChild(p)
        li.appendChild(strong)

        ul.appendChild(li)
    }
}

home.addStickyButton.onclick = function (event) {
    try {
        createSticky(window.email, '', 'public')

        home.listPublicStickies()
    } catch (error) {
        console.error(error.message)
    }
}

home.logoutButton.onclick = function(event) {
    delete window.email

    home.view.classList.add('off')
    login.view.classList.remove('off')
}