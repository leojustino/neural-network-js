class RedeNeural {
    constructor(nós_de_entrada, nós_escondidos, nós_de_saída) {
        this.nós_de_entrada = nós_de_entrada
        this.nós_de_saída = nós_de_saída
        this.nós_escondidos = nós_escondidos

        this.viés_entrada_escondido = new Matrix(nós_escondidos, 1).rand()
        this.viés_escondido_saída = new Matrix(nós_de_saída, 1).rand()
        this.pesos_entrada_escondido = new Matrix(nós_escondidos, nós_de_entrada).rand()
        this.pesos_escondido_saída = new Matrix(nós_de_saída, nós_escondidos).rand()
    }

    static sigmoid(x) {
        return 1 / (1 + Math.exp(-x))
    }

    feed_foward(input) {
        const matrix_input = Matrix.fromArray(input)
        
        this.camada_escondida = Matrix
            .product(this.pesos_entrada_escondido, matrix_input)
            .sum(this.viés_entrada_escondido)
            .apply_function(RedeNeural.sigmoid)
        
        this.saída = Matrix
            .product(this.pesos_escondido_saída, this.camada_escondida)
            .sum(this.viés_escondido_saída)
            .apply_function(RedeNeural.sigmoid)
    }
}