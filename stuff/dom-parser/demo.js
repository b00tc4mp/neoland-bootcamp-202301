// go to https://www.google.com/search?q=hola
// inside browser inspector console run:

var results = document.querySelectorAll('.yuRUbf')

for (var i = 0; i < results.length; i++) {
    var result = results[i]

    var a = result.querySelector('a')
    var url = a.href

    var h3 = result.querySelector('h3')
    var title = h3.innerText

    console.log(title, url)
}
// VM217:12 HOLA.com, diario de actualidad, moda y belleza https://www.hola.com/
// VM217:12 La historia detrás de '¡Hola!', la 'biblia' de la prensa del corazón - El País https://elpais.com/elpais/2019/09/18/gente/1568818291_689295.html#:~:text=50%20millones%20de%20lectores%20en,permitiera%20pasar%20m%C3%A1s%20tiempo%20juntos.
// VM217:12 La revista ¡HOLA! adelanta su edición y saldrá a la venta este martes https://www.hola.com/actualidad/20180812128350/hola-revista-venta-martes-adelanto/#:~:text=retomar%C3%A1%20su%20d%C3%ADa%20de%20distribuci%C3%B3n,tu%20punto%20de%20venta%20habitual.
// VM217:12 Revista ¡HOLA! (@holacom) • Instagram photos and videos https://www.instagram.com/holacom/?hl=en
// VM217:12 Revista HOLA - Inicio | Facebook https://www.facebook.com/revistahola/?locale=es_ES
// VM217:12 Revista ¡HOLA! - Twitter https://twitter.com/hola
// VM217:12 Revista Hola - Últimas noticias y portada de esta semana https://www.20minutos.es/minuteca/revista-hola/
// VM217:12 Get The Free and Premium Hola Online | Proxy Unblocker https://hola.org/
// VM217:12 ¡HOLA! - LinkedIn https://www.linkedin.com/company/hola