//PÂNICO NA FLORESTA, 14, TERROR
//EXTERMINADOR DO FUTURO, 14, AÇÃO FICÇÃO CIENTÌFICA
//O GRANDE DRAGÃO BRANCO, 12, AÇÃO 
//BOYKA, 16, AÇÃO
//DURO DE MATAR, 14, AÇÃO THRILLER
//RAMBO, 18, AÇÃO
//ROGUE O ASSASINO, 16, AÇÃO POLICIAL SUSPENSE
//LUTAR OU MORRER, 14, AÇÃO
//SOLDADOS UNIVERSAIS, 16, AÇÃO DRAMA E FICÇÃO CIENTÌFICA
//CÃO DE BRIGA, 16, AÇÃO

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("14");
  campoFantasia = createCheckbox("Gosta de Ação?");
  campoAventura = createCheckbox("Gosta de Terror?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeFantasia);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeAção) {
  if (idade >= 14) {
    if (idade >= 14) {
      return "PÂNICO NA FLORESTA";
    } else {
      if (idade >= 14) {
        if(gostaDeAção || gostaDeAção) {
          return "LUTAR OU MORRER";          
        } else{
         return "CÃO DE BRIGA";
        }
      } else {
        if (gostaDeFantasia) {
          return "SOLDADOS UNIVERSAIS";
        } else {
          return "ROGUE O ASSASINO";
        }
      }
    }
  } else {
    if (gostaDeAção) {
      return "EXTERMINADOR DO FUTURO";
    } else {
      return "DURO DE MATAR";
    }
  }
}
