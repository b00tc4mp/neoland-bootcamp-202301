var input = document.createElement("input")
input.type="number"
document.body.appendChild(input)

var input2 = document.createElement("input")
input2.type="number"
document.body.appendChild(input2)

var button = document.createElement("button")
button.innerText="="
document.body.appendChild (button)
button.onclick= function (){
    var result= Number(input.value) + Number(input2.value)
    input3.value = result
}

var input3 = document.createElement("input")
input3.type= "number"
input3.disabled = true
document.body.appendChild(input3)




