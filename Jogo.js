class Jogo {
    constructor() {
        this.imgEstrada = loadImage("./images/estrada.png");
        this.carros = [];
        this.carros.push(new Carro(1, 600, 30, "./images/aviao.png"));
        this.carros.push(new Carro(5, 600, 78, "./images/aviao1.png"));
        this.carros.push(new Carro(3, 600, 140, "./images/aviao.png"));
        this.carros.push(new Carro(2, 600, 190, "./images/aviao1.png"));
        this.carros.push(new Carro(4, 600, 252, "./images/aviao.png"));
        this.carros.push(new Carro(6, 600, 300, "./images/aviao1.png"));
        this.ator = new Ator(200, 365, "./images/torres.png");
        this.pontosJogo = 0;
        this.colisao = false;
        this.fase = 1;
        this.alterou = false;
        this.mudou = 10;
        this.fim = false;
    }

    jogar() {
        background(this.imgEstrada);
        if (this.fim == false) {
            for (const carro of this.carros) {
                // carro.mostrarCarro();
                carro.movimentarCarro();
            }
            this.ator.movimentarAtor();
        }
        for (const carro of this.carros) {
            carro.mostrarCarro();
            // carro.movimentarCarro();
        }
        this.ator.mostrarAtor();
        this.exibirPlacar();
        this.verificarColisao();
        this.verificarPontos();
        this.pararjogo();
    }

    verificarColisao() {
        for (const carro of this.carros) {
            this.colisao = collideRectCircle(carro.xCarro, carro.yCarro, carro.wCarro, carro.hCarro, this.ator.xAtor, this.ator.yAtor, 1);
            if (this.colisao == true) {
                this.pontosJogo++;
                this.ator.yAtor = 380;
            }
        }
    }

    exibirPlacar() {
        this.criarPlacar(130, this.ator.pontosAtor); //placar do jogador
        this.criarPlacar(380, this.pontosJogo); //Placar do jogo
        this.criarPlacarFase(550, this.fase); //Placar das fases
    }

    criarPlacar(xPlacar, pontos) {
        textAlign(CENTER);
        textSize(18);
        fill(color(100, 100, 100));
        rect(xPlacar, 5, 25);
        fill(255);
        text(pontos, xPlacar + 20, 24);
    }

    criarPlacarFase(xFase, fase) {
        textAlign(CENTER);
        textSize(18);
        text("Fase atual: " + fase, xFase - 15, 24);
    }

    verificarPontos() {
        // Verifica quando as fases aumentam de 10 em 10
        if (this.ator.pontosAtor % this.mudou == 0 && this.ator.pontosAtor > 0 && this.alterou == false) {
            this.fase++;
            // Aumenta a velocidade
            for (let i = 0; i < this.carros.length; i++) {
                this.carros[i].velocidade *= 1.2;
            }
            this.alterou = true;
        } else if (this.ator.pontosAtor % this.mudou != 0) {
            this.alterou = false;
        }
    }

    pararjogo() {
        // Verifica quando uma das pontuações chega em 50 para acabar o jogo
        if (this.ator.pontosAtor == 50) {
            alert("O jogo acabou! Reiniciar o jogo?");
            location.reload();
            this.ator.pontosAtor = 0;
            this.fase = 1;
            this.alterou = false;
            this.fim = false;
        } else if (this.pontosJogo == 50) {
            alert("O jogo acabou! Reiniciar o jogo?");
            location.reload();
            this.pontosJogo = 0;
            this.fase = 1;
            this.alterou = false;
            this.fim = false;
        }
    }
}