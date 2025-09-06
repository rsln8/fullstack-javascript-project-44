import { greetUser } from '../src/cli.js'
import playEvenGame from '../src/games/even.js'

const runGame = () => {
  const name = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  playEvenGame(name)
}

runGame()
