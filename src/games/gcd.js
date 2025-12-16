import { getRandomNumber } from '../utils.js'

const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return getGcd(b, a % b)
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)

  const question = `${num1} ${num2}`
  const answer = String(getGcd(num1, num2))

  return [question, answer]
}

const description = 'Find the greatest common divisor of given numbers.'

export { getQuestionAndAnswer, description }
