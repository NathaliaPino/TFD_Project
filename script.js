function carregar() {
  var mensagem = window.document.querySelector(".horario");
  var img = window.document.querySelector(".imagem");
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  mensagem.innerHTML = `Agora são ${horas} horas e ${minutos} minutos.`;

  if (horas <= 12 && horas != 0) {
    img.src = "img/manha.jpg";
    document.body.style.background = "#F5F2EA";
  } else if (horas > 12 && horas <= 18) {
    img.src = "img/tarde.jpg";
    document.body.style.background = "#DCB7C8";
  } else {
    img.src = "img/noite.jpg";
    document.body.style.background = "#645F97";
  }
}
