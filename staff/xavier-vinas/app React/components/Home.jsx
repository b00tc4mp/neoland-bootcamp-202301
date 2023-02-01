function Home(){









    return <div class="home-view">
    <header>
      

        
        <nav>
            <a className="logo-link" href=""><img class="logo" src="https://cdn-icons-png.flaticon.com/128/431/431249.png"
                alt=""></a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Experience</a>
            <a class="profile-link" href="">Profile</a>
            <button class="logout-button">logout</button>
        </nav>

    </header>


    <main className="home-main">

        <ul className="list-panel">
            <li>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fuga voluptas illo iusto
                    repudiandae
                    fugiat! Saepe, quis. Nisi ea vitae cum sunt et, quae soluta tenetur doloremque, eius neque
                    consectetur!
                </p>
                <strong>pepito@grillo.com</strong>
            </li>
            <li>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fuga voluptas illo iusto
                    repudiandae
                    fugiat! Saepe, quis. Nisi ea vitae cum sunt et, quae soluta tenetur doloremque, eius neque
                    consectetur!
                </p>
                <strong>pepito@grillo.com</strong>
            </li>
            <li>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fuga voluptas illo iusto
                    repudiandae
                    fugiat! Saepe, quis. Nisi ea vitae cum sunt et, quae soluta tenetur doloremque, eius neque
                    consectetur!
                </p>
                <strong>pepito@grillo.com</strong>
            </li>
            <li>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fuga voluptas illo iusto
                    repudiandae
                    fugiat! Saepe, quis. Nisi ea vitae cum sunt et, quae soluta tenetur doloremque, eius neque
                    consectetur!
                </p>
                <strong>pepito@grillo.com</strong>
            </li>



        </ul>
        <div className="profile-panel">
            <form className="update-password-panel">
                <input type="password" name="currentPassword" placeholder="current password">
                <input type="password" name="newPassword" placeholder="new password">
                <input type="password" name="newPasswordConfirm" placeholder="confirm new password">
                <button type="submit">Update password</button>
            </form>
        </div>

    </main>

    <footer>

        <button class="add-button">Add Sticky</button>
    </footer>

</div>
}