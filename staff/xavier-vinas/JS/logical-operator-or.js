var a = function() {
    console.log('a')
    return true
},
b = function() {
    console.log('b')
    return false
}

if (a() || b())
    console.log('hello')
else
    console.log('bye')

    // hello , si algo da true es true 

    var a = function() {
        console.log('a')
        return false
    },
    b = function() {
        console.log('b')
        return true
    }
    
    if (a() || b())
        console.log('hello')
    else
        console.log('bye')

    // hello , true 

    var a = function() {
        console.log('a')
        return true
    },
    b = function() {
        console.log('b')
        return true
    }
    
    if (a() || b())
        console.log('hello')
    else
        console.log('bye')

        // hello , true 


        var a = function() {
            console.log('a')
            return false
        },
        b = function() {
            console.log('b')
            return false
        }
        
        if (a() || b())
            console.log('hello')
        else
            console.log('bye')

            // bye , false nd  false 