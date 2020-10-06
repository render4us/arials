var texto = "Capacitando para vender mais!";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("result");
  window.setTimeout(function() { inserir(texto[count]) }, 100);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < texto.length)
    window.setTimeout(function() { inserir(texto[count]) }, 100);
}

window.onload = digitar;
