let musicas = [
  {
    titulo: "Lily",
    artista: "Alan Walker",
    src: "songs/unity.mp3",
    img: "images/AW2.jpg",
  },

  {
    titulo: "Pontos de Exclamação",
    artista: "Jovem Dianisio",
    src: "songs/Jovem Dionisio - Pontos de Exclamação (Vintage Culture & Future Class Remix).mp3",
    img: "images/P1.jpg",
  },

  {
    titulo: "Interestelar",
    artista: "Groove Delight feat. Laura de Prá",
    src: "songs/Groove Delight feat. Laura de Prá - Interestelar (Lyric Video).mp3",
    img: "images/L1.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao span");

renderizarMusica(indexMusica);

// Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 2;
  }
  renderizarMusica(indexMusica);
});

document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 2) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
