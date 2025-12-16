#!/usr/bin/env node
import runGame from '../src/index.js'
import { getQuestionAndAnswer, description } from '../src/games/prime.js'

runGame(description, getQuestionAndAnswer)
