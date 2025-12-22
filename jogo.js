const monster = document.getElementById("monster");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let score = 0;


if (localStorage.getItem("score")>0) {
  score = localStorage.getItem("score")
   scoreDisplay.textContent = score;
}
// Coloca o monstro em uma posição aleatória
function moveMonster() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  const maxX = areaWidth - monster.clientWidth;
  const maxY = areaHeight - monster.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  monster.style.left = randomX + "px";
  monster.style.top = randomY + "px";
}

// Quando clicar no monstro → ganha ponto e ele muda de lugar
function clicarNoMonstro() {
  score++;
  scoreDisplay.textContent = score;
  moveMonster();
  localStorage.setItem("score",score)
}
function clicarNaArea(event) {
  if (event.target != monster) {
   score = 0
   scoreDisplay.textContent = score;
   localStorage.setItem("score",0)
  }
  
}

// Faz o monstro se mover sozinho a cada 1 segundo
setInterval(moveMonster, 3*1000);

// Primeira posição
moveMonster();