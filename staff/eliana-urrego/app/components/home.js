var home = {}

home.view = document.querySelector('.home-view')
home.logoutButton = document.querySelector('.logout-button')
home.addButton = home.view.querySelector('.add-button')
home.view.classList.add('off')
home.listPanel = home.view.querySelector('.list-panel')
//home.listPanel.classList.add('off')
home.profilePanel = home.view.querySelector('.profile-panel')
home.profilePanel.classList.add('off')
home.updatePasswordPanel = home.profilePanel.querySelector('.update-password-panel')
home.profileLink = home.view.querySelector('.profile-link')
home.logoLink = home.view.querySelector('.logo-link')

home.listPublicStickies = function () {

    home.listPanel.innerHTML = ''

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
            var deleteButton = document.createElement('button');
            deleteButton.innerText = 'x'
            deleteButton.id = sticky.id

            deleteButton.onclick = function (event) {
                var stickyId = event.target.id

                try {
                    deleteSticky(window.email, stickyId);
                    home.listPublicStickies();
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

        home.listPanel.appendChild(li)
    }
}

home.addButton.onclick = function (event) {
    try {
        createSticky(window.email, '', 'public')

        home.listPublicStickies()
    } catch (error) {
        console.error(error.message)
    }
}


home.logoutButton.onclick = function (event) {
    delete window.email

    home.view.classList.add('off')
    login.view.classList.remove('off')
}

home.profileLink.onclick = function (event) {
    event.preventDefault()

    home.listPanel.classList.add('off')
    home.addButton.classList.add('off')
    home.profilePanel.classList.remove('off')
}

home.logoLink.onclick = function (event) {
    event.preventDefault()

    home.profilePanel.classList.add('off')
    home.listPanel.classList.remove('off')
    home.addButton.classList.remove('off')
}

home.updatePasswordPanel.onsubmit = function (event) {
    event.preventDefault()
    var currentPassword = event.target.currentPassword.value
    var newPassword = event.target.newPassword.value
    var newPasswordConfirm = event.target.newPasswordConfirm.value


    try {
        updateUserPassword(window.email, currentPassword, newPassword, newPasswordConfirm)
    } catch (error) {
        console.error(error)
    }
}