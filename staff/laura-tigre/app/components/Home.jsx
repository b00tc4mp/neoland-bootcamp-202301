function Home (){
    console.log( 'Home -> render')





    return <div className="home-view">
    <header>
      <a className="logo-link" href="">
        <img className="logo" src="img/hello!.png" alt="logo" />
      </a>
      <nav>
        <a className="profile-link" href="">PROFILE</a>
        <button className="logout-button">LOGOUT</button>
      </nav>
    </header>

    <main className="home-main">
      <ul className="list-panel">
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          numquam cumque! Nisi inventore ipsam expedita distinctio temporibus
          fuga velit modi suscipit ad eum. At quo itaque harum quis odio
          omnis?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          consequuntur dolorum, natus mollitia facilis hic voluptatum
          repudiandae aliquam voluptate dolorem magni temporibus veritatis,
          atque ipsum non laborum consequatur iste esse.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ullam magni libero nemo accusamus voluptate hic assumenda incidunt
          numquam perspiciatis corporis rerum provident aperiam dolore, nobis
          ea eaque debitis optio!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          temporibus quos facere veritatis voluptate officiis nostrum
          incidunt, provident, aperiam amet illo quibusdam laboriosam vitae
          facilis repellat eaque ipsum dignissimos quae!
        </li>
        <li>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          dicta nostrum beatae sed facilis omnis repellat est iusto ex quia
          ducimus, rerum natus at maxime. Alias neque eligendi facilis
          suscipit?
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          in tenetur, vitae magnam quibusdam odio quod minus perspiciatis iste
          sapiente ex eos nam quos officiis explicabo consectetur corrupti
          voluptatibus consequatur.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          fuga corrupti itaque repellat dolorum illum est aliquam. Provident,
          illum. Enim blanditiis natus est dolore vitae amet qui, doloribus
          esse quam!
        </li>
      </ul>
      
    </main>
    <footer>
      <button className="add-button">+</button>
    </footer>
  </div>

}