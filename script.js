let musica = document.querySelector("audio");

document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document
  .querySelector(".bx.botao-pause")
  .addEventListener("click", pausarMusica);

function tocarMusica() {
  musica.play();
  document.querySelector(".bx.botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".bx.botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}
