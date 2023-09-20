class Carro {
    constructor(velocidade, xCarro, yCarro, nomeImg) {
        this.velocidade = velocidade;
        this.imgCarro = loadImage(nomeImg);
        this.wCarro = 70;
        this.hCarro = 60;
        this.xCarro = xCarro;
        this.yCarro = yCarro;
    }

    mostrarCarro() {
        image(this.imgCarro, this.xCarro, this.yCarro, this.wCarro, this.hCarro);
    }

    movimentarCarro() {
        this.xCarro -= this.velocidade;
        if (this.xCarro <= (0 - this.wCarro)) {
            this.xCarro = largura;
        }
    }
}