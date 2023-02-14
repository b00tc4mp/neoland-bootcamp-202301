function Home(props) {
    console.log('Home -> render')

    return <div className="home-view">
        <header>
            <a className="logo-link" href=""><img className="logo" src="images/mylogo.png" alt="logo" /></a>

            <nav>
                <a className="profile-link" href="">Profile</a>
                <button className="logout-button">Logout</button>
            </nav>
        </header>

        <main className="home-main">
            <ul className="list-panel">
                <li>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quibusdam enim commodi, ut possimus repellat consequatur ratione
                        soluta suscipit magni incidunt! In non voluptatem rerum molestias
                        quas nihil voluptatibus deserunt placeat.
                    </p>
                    <strong>pepito@grillo.com</strong>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quibusdam enim commodi, ut possimus repellat consequatur ratione
                        soluta suscipit magni incidunt! In non voluptatem rerum molestias
                        quas nihil voluptatibus deserunt placeat?
                    </p>
                    <strong>pepito@grillo.com</strong>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quibusdam enim commodi, ut possimus repellat consequatur ratione
                        soluta suscipit magni incidunt! In non voluptatem rerum molestias
                        quas nihil voluptatibus deserunt placeat?
                    </p>
                    <strong>pepito@grillo.com</strong>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quibusdam enim commodi, ut possimus repellat consequatur ratione
                        soluta suscipit magni incidunt! In non voluptatem rerum molestias
                        quas nihil voluptatibus deserunt placeat?
                    </p>
                    <strong>pepito@grillo.com</strong>
                </li>
                <li>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quibusdam enim commodi, ut possimus repellat consequatur ratione
                        soluta suscipit magni incidunt! In non voluptatem rerum molestias
                        quas nihil voluptatibus deserunt placeat?
                    </p>
                    <strong>pepito@grillo.com</strong>
                </li>
            </ul>

        </main>
        <footer>
            <button className="add-button">+</button>
        </footer>
    </div>
}