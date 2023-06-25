function alertaNueva() {
    alert("Consulta agendada");
  }

function alertaCancela() {
    alert("Consulta cancelada");
  }

function alertaActiva() {
    alert("Consulta activada");
  }
  
  var dropdown_t = document.getElementById('dropdown_t');
  var dropdown_d = document.getElementById('dropdown_d');
  var dropdown_h = document.getElementById('dropdown_h');

  function update_t(option) {
    var selectedOption = option.innerText;
    dropdown_t.innerText = selectedOption;
  }
  function update_d(option) {
    var selectedOption = option.innerText;
    dropdown_d.innerText = selectedOption;
  }
  function update_h(option) {
    var selectedOption = option.innerText;
    dropdown_h.innerText = selectedOption;
  }