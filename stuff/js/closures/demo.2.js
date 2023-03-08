var safetyBox = function(code, secret) {
    return function(codeTry) {
        if (codeTry !== code) throw new Error('wrong code')

        return secret
    }
}

var xaviBox = safetyBox('123123123', 'me estoy quedando sin árboles')

xaviBox('123123123123123')
// VM1912:3 Uncaught Error: wrong code
//     at <anonymous>:3:37
//     at <anonymous>:1:1
// (anonymous) @ VM1912:3
// (anonymous) @ VM2421:1
xaviBox('123123123')
// 'me estoy quedando sin árboles'