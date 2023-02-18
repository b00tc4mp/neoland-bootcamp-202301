var input1 = document.createElement('input')
input1.type= 'number'
document.body.appendChild (input1)

var input2 = document.createElement ('input')
input2.type= 'number'
document.body.appendChild (input2)

var button = document.createElement ('button')
button.innerText= '='
button.onclick = function (){
    var result= Number (input1.value) + Number (input2.value)
    input3.value= result
}
document.body.appendChild (button)


var input3 = document.createElement ('input')
input3.type= 'number'
input3.disabled= true
document.body.appendChild (input3)

