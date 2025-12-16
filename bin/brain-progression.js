#!/usr/bin/env node
import runGame from '../src/index.js'
import { getQuestionAndAnswer, description } from '../src/games/progression.js' // ← ИЗМЕНИТЬ импорт

runGame(description, getQuestionAndAnswer)
