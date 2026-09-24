// CONTROLE DE FONTE
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");

if (btnAumentaFonte && btnDiminuiFonte) {
  btnAumentaFonte.addEventListener("click", aumentaFonte);
  btnDiminuiFonte.addEventListener("click", diminuiFonte);
}

function aumentaFonte() {
  tamanhoFonteAtual += valorAdicionado;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
  tamanhoFonteAtual = Math.max(12, tamanhoFonteAtual - valorSubtraido);
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

// SÍNTESE DE VOZ (LEITURA)
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");
const btnPararVoz = document.getElementById("btnPararVoz");

if (btnLeitura) {
  btnLeitura.addEventListener("click", lerEmVozAlta);
}

if (btnPararVoz) {
  btnPararVoz.addEventListener("click", pararLeitura);
}

function lerEmVozAlta() {
  if (lendo === true) {
    if (speechSynthesis.paused === true) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.pause();
    }
    return;
  }

  let conteudo = document.querySelector("main");
  if (!conteudo) return;

  let texto = conteudo.innerText;
  let fala = new SpeechSynthesisUtterance(texto);

  fala.lang = "pt-BR";
  fala.onend = finalizarLeitura;

  speechSynthesis.cancel();
  speechSynthesis.speak(fala);
  lendo = true;
}

function pararLeitura() {
  speechSynthesis.cancel();
  finalizarLeitura();
}

function finalizarLeitura() {
  lendo = false;
}

// GERENCIAMENTO DO MODAL
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

if (btnAjuda && btnFechar && modal) {
  btnAjuda.addEventListener("click", abreModal);
  btnFechar.addEventListener("click", fechaModal);
}

function abreModal() {
  modal.style.display = "block";
}

function fechaModal() {
  modal.style.display = "none";
}