document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var emailInput = document.getElementById("email");
  var errorMessage = document.getElementById("error-message");

  if (emailInput.value.indexOf("@") === -1) {
    errorMessage.textContent = "El correo electrónico no es válido.";
    errorMessage.classList.add("active"); 
  } else {
    errorMessage.classList.remove("active"); 
    document.getElementById("login-form").submit(); 
  }
});
