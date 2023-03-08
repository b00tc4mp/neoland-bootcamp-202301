var v0 = 0

console.log(v0)

function f1() {
    var v1 = 1

    console.log(v0, v1)

    function f2() {
        var v2 = 2

        console.log(v0, v1, v2)

        function f3() {
            var v3 = 3

            console.log(v0, v1, v2, v3)
        }

        f3()
    }

    f2()
}

f1()
// VM3725:3 0
// VM3725:8 0 1
// VM3725:13 0 1 2
// VM3725:18 0 1 2 3