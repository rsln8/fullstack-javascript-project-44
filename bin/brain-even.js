#!/usr/bin/env node
import runGame from '../src/index.js'
import { getQuestionAndAnswer, description } from '../src/games/even.js'

runGame(description, getQuestionAndAnswer)
