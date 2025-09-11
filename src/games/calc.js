import runGame from '../index.js'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = Math.floor(Math.random() * 50) + 1
  const b = Math.floor(Math.random() * 50) + 1
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)]
  
  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))

  return [question, correctAnswer]
}

const description = 'What is the result of the expression?'

const runCalcGame = () => {
  runGame(description, generateRound)
}

export default runCalcGame
