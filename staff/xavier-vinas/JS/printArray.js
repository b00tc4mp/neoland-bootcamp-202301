staff = ['Lau', 'Flor', 'Xa', 'Ju', 'Eli', 'Ma']
var stuff = ['html', 'css', 'js']

function print(array) {
    // TODO iterate array and print each item in console
    
    for (var i = 0; i < array.length; i++) {
        var value = array[i]

        console.log(value)
    }
}

console.log('> print staff')
print(staff)

console.log('> print stuff')
print(stuff)
// VM6211:14 > print staff
// VM6211:10 Lau
// VM6211:10 Flor
// VM6211:10 Xa
// VM6211:10 Ju
// VM6211:10 Eli
// VM6211:10 Ma
// VM6211:17 > print stuff
// VM6211:10 html
// VM6211:10 css
// VM6211:10 js


//    <section class="img">

<img class="img1" src="https://static2.elcorreo.com/www/multimedia/202004/10/media/MM-beatles/9.jpg"
alt="">

<img class="img2" src="https://static2.elcorreo.com/www/multimedia/202004/10/media/MM-beatles/9.jpg"
alt="">


</section>

<section class="band">
<h2><i>THE BAND</i></h2>
<p><i>We love music</i></p>
</section>

<section class="tresFotos">
<article class="Jhon">
<p class="J">John</p>
<img src="https://www.biografiasyvidas.com/biografia/l/fotos/lennon_john_1.jpg" alt=" ">
</article>
<article class="Paul">
<article class="Paul">
<p class="P">Paul</p>
<img src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/paul-mccartney-estuvo-a-punto-de-ser-frodo-y-otras-curiosidades/138103190-1-esl-ES/Paul-McCartney-estuvo-a-punto-de-ser-Frodo-y-otras-curiosidades.jpg"
    alt="">
</article>
<article class="Ringo">
<p class="R">Ringo</p>
<img src="https://i.discogs.com/KGchCvxCqNV_IzXB8XbsvDdnJLyHl1TgGIHekxOMyXw/rs:fit/g:sm/q:90/h:707/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI1OTM1/Mi0xNjYyODkyMzk3/LTkzMzcuanBlZw.jpeg"
    alt="">
</article>
<div>

</section>
<div><h4><i>Add your stickies</i></h4></div>



.img {
  display: flex;
  justify-content: center;
  
  border: 5px solid black;
  gap: 10px;
  border-radius: 5px;
  
}
.img1 {
  width: 50rem;
  height: 30rem;
}

.img2 {
  width: 50rem;
  height: 30rem;
}
.band {
  font-display: flex;
  text-align: center;
  margin-top: 50px;
  background-color: whitesmoke;
}

h2 {
  font-size: 100px;
  ;
}
h4{
  font-size: 50px;
  text-decoration:underline;

}

.tresFotos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border: 5px solid black;
  border-radius: 5px;
  background-color: lightgray;
}

.P,
.J,
.R {
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
  font-family: monospace;
}




nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: whitesmoke;
  padding: 20px;
  width: 100%;
  position: fixed;
  
}

nav a {
  font-family: monospace;
  color: #000000;
  text-decoration: none;
  font-size: 30px;
  padding: 10px;
  display: flex;
  
}
nav button {
  color: gray;
}
