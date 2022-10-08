function setup() {
    createCanvas(500, 500)
    background(0)

    const rede_neural = new RedeNeural(1, 3, 1)
    const entrada = [41, 562]

    rede_neural.feed_foward(entrada)
}

function draw() {

}