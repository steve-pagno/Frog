let jogo;
const largura = 600;
const altura = 400;

function preload() {
    jogo = new Jogo();
}

function setup() {
    createCanvas(largura, altura);
}

function draw() {
    jogo.jogar();
}