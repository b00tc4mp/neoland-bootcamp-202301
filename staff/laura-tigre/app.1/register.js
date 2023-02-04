var form = document.querySelector('form')
var nameInput = form.querySelector('input#name')
var ageInput = form.querySelector('input#age')
var emailInput = form.querySelector('input#email')
var passwordInput = form.querySelector('input#password')
var messageElement=document.createElement('p')
    
        messageElement.style.color = 'red';
        messageElement.style.border= 'solid';
        messageElement.style.height= '40px';
        messageElement.style.position='absolute';
        messageElement.style.top='30px';
        messageElement.style.left='15px';
        messageElement.style.padding= '5px';
        messageElement.style.borderColor='darkgrey';


form.onsubmit= function(event){
    event.preventDefault();
    try{
    registerUser(nameInput.value, ageInput.value, emailInput.value, passwordInput.value);
    /**console.log(
        nameInput.value,
        ageInput.value,
        emailInput.value,
        passwordInput.value
    )**/
    /**nameInput.value=''
    ageInput.value=''
    emailInput.value=''
    passwordInput.value=''**/
    }catch(error){
        messageElement.innerText= error.message; 
       document.body.appendChild(messageElement)

    }
    form.reset()
}


nameInput.oninput =function(){

document.body.removeChild(messageElement);

messageElement.innerText='';
};
