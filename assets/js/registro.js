document.querySelector('form').addEventListener('submit', function(event) {
  var emailInput = document.querySelector('input[type="text"]');
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var password = document.querySelector('input[type="password"]').value;
  var confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

  var isValid = true;

  if (!emailRegex.test(emailValue)) {
    event.preventDefault();

    var emailAlertDiv = document.createElement('div');
    emailAlertDiv.classList.add('alert');
    emailAlertDiv.textContent = 'Ingrese un correo válido.';

    var alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(emailAlertDiv);

    isValid = false;
  }

  if (password !== confirmPassword) {
    event.preventDefault();

    var passwordAlertDiv = document.createElement('div');
    passwordAlertDiv.classList.add('alert');
    passwordAlertDiv.textContent = 'Las contraseñas no coinciden. Por favor, verifica tus datos.';

    var alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(passwordAlertDiv);

    isValid = false;
  }

  if (isValid) {
    // Aquí puedes realizar otras acciones si el formulario es válido
  }
});
