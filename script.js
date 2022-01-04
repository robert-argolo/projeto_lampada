var img = document.getElementById("img");
var obs = document.getElementById("obs");
var estado = "boa";
obs.innerHTML = "Status: interaja com a lâmpada";

function ligar() {
  if (estado != "ruim") {
    img.style.backgroundImage = "url(./imagens/ligada.jpg)";
    estado = "boa";

    obs.innerHTML = "Status: você ligou a lâmpada";
  } else {
    obs.innerHTML = "Status: troque a lâmpada antes de interagir";
  }
}
function desligar() {
  if (estado != "ruim") {
    img.style.backgroundImage = "url(./imagens/desligada.jpg)";
    estado = "boa";
    obs.innerHTML = "Status: você desligou a lâmpada";
  } else {
    obs.innerHTML = "Status: troque a lâmpada antes de interagir";
  }
}
function quebrar() {
  if (estado != "ruim") {
    img.style.backgroundImage = "url(./imagens/quebrada.jpg)";
    estado = "ruim";
    obs.innerHTML = "Status: você quebrou a lâmpada";
  } else {
    obs.innerHTML = "Status: troque a lâmpada antes de quebrar";
  }
}

function trocar() {
  if (estado != "boa") {
    img.style.backgroundImage = "url(./imagens/desligada.jpg)";
    estado = "boa";
    obs.innerHTML = "Status: você trocou a lâmpada";
  } else {
    obs.innerHTML = "Status: quebre a lâmpada antes de trocar";
  }
}
