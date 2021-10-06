let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    let elementColor = creteColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

const lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  })
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`)
    nextLevel()
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color
  creteColorElement(color).classList.add('selected')

  setTimeout(() => {
    creteColorElement(color).classList.remove('selected')

    checkOrder()
  }, 250)
}

const creteColorElement = (color) => {
  if (color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

const nextLevel = () => {
  score++
  shuffleOrder()
}

const gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
  let order = []
  let clickedOrder = []

  playGame()
}

const playGame = () => {
  alert(`Bem vindo ao Gênesis! Iniciando o jogo!`)
  score = 0

  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()
