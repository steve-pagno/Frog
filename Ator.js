class Ator {
    constructor(xAtor, yAtor, nomeImg) {
        this.xAtor = xAtor;
        this.yAtor = yAtor;
        this.wAtor = 50;
        this.hAtor = 50;
        this.imgAtor = loadImage(nomeImg);
        this.pontosAtor = 0;
    }

    mostrarAtor() {
        image(this.imgAtor, this.xAtor, this.yAtor, this.wAtor, this.hAtor)
    }

    movimentarAtor() {
        if (keyIsDown(UP_ARROW)) {
            if (this.yAtor > -30) {
                this.yAtor -= 3;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.yAtor < 360) {
                this.yAtor += 3;
            }
        }

        if (this.yAtor <= -30) {
            this.yAtor = 380;
            this.pontosAtor++;
        }
    }
}