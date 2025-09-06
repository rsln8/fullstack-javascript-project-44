import readlineSync from 'readline-sync'

const isEven = (number) => number % 2 === 0

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { number, correctAnswer }
}

const playEvenGame = (name) => {
  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const { number, correctAnswer } = generateQuestion()
    
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default playEvenGame
