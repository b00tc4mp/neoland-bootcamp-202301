function Home() {


    return <div className="home-view">
        <header>
            <a className="logo" href=""><img className="pluma"
                src="https://icons-for-free.com/download-icon-tweet+post+twitter+write+icon-1320196019185766457_512.png"
                alt="Posts"></img></a>

            <nav className="menu">

                <a className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
            <ul className="list-panel">
                <li>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, fuga voluptas illo iusto
                        repudiandae fugiat! Saepe, quis. Nisi ea vitae cum sunt et, quae soluta tenetur doloremque, eius
                        neque consectetur!</p> <strong> </strong>
                </li>
                <li>
                    <p>Temporibus soluta qui, praesentium vel, nesciunt officia, adipisci minus quos sequi atque rem. Ad
                        temporibus libero obcaecati in, odit vitae enim aperiam. Perferendis voluptates architecto
                        labore? Culpa fuga illum numquam.</p> <strong> </strong>
                </li>
                <li>
                    <p>Atque, natus? Voluptatum veniam, soluta, at, explicabo voluptate quidem saepe veritatis nemo
                        culpa earum ipsam fugit? Culpa officia molestiae nostrum cumque pariatur quia provident ipsam
                        perferendis, quod sint libero dignissimos.</p> <strong> </strong>
                </li>
                <li>
                    <p>Praesentium atque laudantium, quod laborum eligendi, natus animi tempora numquam aut doloremque
                        labore id ipsa asperiores perferendis ad cumque obcaecati. Laboriosam eius quidem odio sunt
                        blanditiis, vel quasi tempora molestiae?</p> <strong> </strong>
                </li>
                <li>
                    <p>Omnis quidem nesciunt, minima totam soluta sapiente sunt architecto aspernatur excepturi error,
                        facilis porro recusandae. Doloribus ut distinctio temporibus error vero? Totam omnis quo vero,
                        odio voluptatibus perferendis iste consequatur.</p> <strong> </strong>
                </li>
                <li>
                    <p>Sit similique eaque ab delectus! Ex aperiam reiciendis sequi perferendis, expedita aliquam libero
                        odit modi quidem quod inventore quisquam, amet ad molestiae! Tempore quo saepe sed, eius
                        praesentium odit! Alias?</p> <strong> </strong>
                </li>
                <li>
                    <p>Eveniet numquam nam dolores veniam molestias error incidunt ducimus, voluptatum aperiam dolorem
                        nobis tempora ipsum blanditiis laboriosam porro distinctio ipsam explicabo doloribus praesentium
                        corrupti. Commodi alias iste ipsam architecto velit.</p> <strong> </strong>
                </li>
                <li>
                    <p>Consequatur blanditiis laborum beatae! Vero similique et sunt hic architecto? Excepturi neque,
                        quo quisquam vitae voluptatem quod inventore maiores ullam pariatur sit, qui quam,
                        necessitatibus quaerat error doloremque amet distinctio.</p> <strong> </strong>
                </li>
                <li>
                    <p>Quam ut voluptas inventore quos iure dolore ducimus deleniti reiciendis expedita excepturi
                        dolorum deserunt ipsa iste, fugiat quas doloremque itaque incidunt assumenda ipsum saepe vero?
                        Illo ab ad placeat totam.</p> <strong> </strong>
                </li>
                <li>
                    <p>Unde ipsum, consequatur aliquid porro expedita impedit tenetur voluptate obcaecati laudantium
                        dolores, soluta distinctio repellendus praesentium suscipit id odio, cupiditate nulla! Minus
                        nesciunt assumenda quaerat, quos modi ut quisquam culpa?</p> <strong> </strong>
                </li>
            </ul>

            <div className="profile-panel">
                <form className="update-password-panel">
                    <input type="password" name="currentPassword" placeholder="Current password" />
                    <input type="password" name="newPassword" placeholder="New password" />
                    <input type="password" name="newPasswordConfirm" placeholder="Confirm new password" />
                    <button className="update-password" type="submit"> Update password</button>
                </form>
                <p className="newPasswordMessage">✅ Contraseña cambiada con éxito</p>
            </div>

        </main>

        <footer>
            <button className="add-button">+</button>
        </footer>
    </div>
}