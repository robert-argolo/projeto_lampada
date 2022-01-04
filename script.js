//variáveis
let img = document.getElementById("img");
let obs = document.getElementById("obs");
let btn_OnOff = document.getElementById("onOff");
let btn_ligar = document.getElementById("ligar");
let btn_desligar = document.getElementById("desligar");
let btn_quebrar = document.getElementById("quebrar");
let btn_trocar = document.getElementById("trocar");

//funções
function funligar() {
  if (!estaQuebrada()) {
    img.src = "./imagens/ligada.jpg";
    obs.innerHTML = "Status: você ligou a lâmpada";
    nomeBtnOff();
  } else {
    msgquebrada();
  }
}
function fundesligar() {
  if (!estaQuebrada()) {
    img.src = "./imagens/desligada.jpg";
    obs.innerHTML = "Status: Você desligou a lâmpada";
    nomeBtnOn();
  } else {
    msgquebrada();
  }
}

function funquebrar() {
  if (!estaQuebrada()) {
    img.src = "./imagens/quebrada.jpg";
    obs.innerHTML = "Status: Você quebrou a lâmpada";
  } else {
    obs.innerHTML = "Status: troque a lâmpada antes de quebrar";
  }
}

function funtrocar() {
  if (estaQuebrada()) {
    img.src = "./imagens/desligada.jpg";
    obs.innerHTML = "Status: Você trocou a lâmpada";
  } else {
    obs.innerHTML = "Status: quebre a lâmpada antes de trocar";
  }
}
function estaQuebrada() {
  return img.src.indexOf("quebrada") > -1;
}

function msgquebrada() {
  return (obs.innerHTML = "Status: troque a lâmpada antes de interagir");
}

function isOff() {
  return img.src.indexOf("desligada") > -1;
}

function nomeBtnOn() {
  return (btn_OnOff.innerHTML = "ON");
}
function nomeBtnOff() {
  return (btn_OnOff.innerHTML = "OFF");
}
function btnOnOff() {
  if (isOff()) {
    funligar();
    obs.innerHTML = "Status: Você ligou a lâmpada";
    nomeBtnOff();
  } else if (estaQuebrada()) {
    msgquebrada();
  } else {
    fundesligar();
    obs.innerHTML = "Status: Você desligou a lâmpada";
    nomeBtnOn();
  }
}

//eventos dos botões e mouse
btn_OnOff.addEventListener("click", btnOnOff);
btn_ligar.addEventListener("click", funligar);
btn_desligar.addEventListener("click", fundesligar);
btn_quebrar.addEventListener("click", funquebrar);
btn_trocar.addEventListener("click", funtrocar);
img.addEventListener("mouseover", funligar);
img.addEventListener("mouseleave", fundesligar);
img.addEventListener("dblclick", funquebrar);
