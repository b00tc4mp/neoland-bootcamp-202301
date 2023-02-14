var register = {};

register.view = document.querySelector(".register");
register.view.classList.add("off");
register.form = register.view.querySelector("form");
register.nameInput = register.view.querySelector("input#name");
register.ageInput = register.view.querySelector("input#age");
register.emailInput = register.view.querySelector("input#email");
register.passwordInput = register.view.querySelector("input#password");

register.feedback = register.view.querySelector(".feedback");
register.feedback.classList.add("off");

register.registerLink = register.view.querySelector("a");

register.form.onsubmit = function (event) {
  event.preventDefault();

  var name = register.nameInput.value;
  var age = Number(register.ageInput.value);
  var email = register.emailInput.value;
  var password = register.passwordInput.value;

  try {
    registerUser(name, age, email, password);

    register.form.reset();

    register.view.classList.add("off");
    login.view.classList.remove("off");
  } catch (error) {
    register.feedback.innerText = error.message;
    register.feedback.classList.remove("off");
  }
};

register.nameInput.oninclick = function (event) {
  register.feedback.classList.remove("off");
};

register.ageInput.onclick = register.nameInput.onclick;
register.emailInput.onclick = register.nameInput.onclick;
register.passwordInput.onclick = register.nameInput.onclick;

register.registerLink.onclick = function (event) {
  event.preventDefault();

  register.view.classList.add("off");
  login.view.classList.remove("off");
};
