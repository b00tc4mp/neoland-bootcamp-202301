var input1 = document.createElement("input");
input1.type = "number";
document.body.append(input1);

var button1 = document.createElement('button')
button1.innerText = '+'
document.body.append(button1)

var input2 = document.createElement("input");
input2.type = "number";
document.body.append(input2);

var button2 = document.createElement("button");
button2.innerText = "=";
button2.onclick = function () {
  var result = Number(input1.value) + Number(input2.value);

  input3.value = result;
};
document.body.append(button2);

var input3 = document.createElement("input");
input3.type = "number";
input3.disabled = true;
document.body.append(input3);




















