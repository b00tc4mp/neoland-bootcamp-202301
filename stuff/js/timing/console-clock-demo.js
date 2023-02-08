setInterval(
    function() {
        console.clear()
        console.log(new Date().toISOString().substring(11, 19).replace('T', ' '))
    },
    1000
)