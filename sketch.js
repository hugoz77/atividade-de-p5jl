
function setup() {
  createCanvas(600, 600);
  noLoop(); // Impede que o draw seja chamado repetidamente
}

function draw() {
  let tamanhoQuadrado = 50;
  let colunas = width / tamanhoQuadrado;
  let linhas = height / tamanhoQuadrado;
 
  for (let i = 0; i < colunas; i++) {
    for (let j = 0; j < linhas; j++) {
      // Determina a cor do quadrado
      if ((i + j) % 2 == 0) {
        fill(255); // Branco
      } else {
        fill(0); // Preto
      }
      // Desenha o quadrado
      rect(i * tamanhoQuadrado, j * tamanhoQuadrado, tamanhoQuadrado, tamanhoQuadrado);
    }
  }
}
