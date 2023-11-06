#!/usr/bin/env node

import { Configuration, OpenAIApi } from 'openai'
import * as dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createInterface } from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
import { NAME, COMMAND, COLOR } from '../consts.js'
import { commandExists } from '../utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

const rl = createInterface({ input, output })
const key = process.env.KEY_API

const userName = NAME.user
const aiName = NAME.ai

const configuration = new Configuration({ apiKey: key })
const openai = new OpenAIApi(configuration)

const userInput = '\n' + COLOR.green + userName + ': ' + COLOR.reset
const aiOutput = '\n' + COLOR.green + aiName + ': ' + COLOR.reset

const chatGPT = () => {
  rl.question(userInput, async (prompt) => {
    if (commandExists(prompt, COMMAND.EXIT.key)) {
      rl.close()
      return
    }

    if (commandExists(prompt, COMMAND.HELP.key)) {
      help(COMMAND)
      prompt = ''
      chatGPT()
    }

    if (commandExists(prompt, COMMAND.CLEAR.key)) {
      console.clear()
      chatGPT()
    }

    const string = findComand(prompt)

    if (!prompt || string.split(' ').length < 3) {
      console.log('need 3 more words')
      chatGPT()
      return
    }
    console.time('response')

    const timeout = (ms) =>
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Response took too long')), ms)
      )

    const fetchOpenAi = openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: string }],
      temperature: 0.6,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    })

    try {
      const response = await Promise.race([fetchOpenAi, timeout(10000)])
      const tokens = response.data.usage.total_tokens
      const resContent = response.data.choices[0].message.content
      console.log(aiOutput + resContent.trim())
      if (resContent.length > 300) console.log(COLOR.cyan + '══════' + COLOR.reset)
      console.log('$:', -tokens)
    } catch (error) {
      console.log(`\n🤬 error: ${error.message}, trying to reconnect...`)
      return
    } finally {
      console.timeEnd('response')
      chatGPT()
    }
  })
}

chatGPT()

//helpers
function help(obj) {
  const sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b))
  const sortedObj = {}
  sortedKeys.forEach((key) => (sortedObj[key] = obj[key]))
  console.log('\n')
  for (let prop in sortedObj) {
    const command = COLOR.cyan + sortedObj[prop].key.sort().reverse().join('  ') + COLOR.reset
    console.log(
      prop.toLowerCase().padEnd(15, ' '),
      command.padEnd(35, ' '),
      sortedObj[prop].description
    )
  }
}

function findComand(str) {
  const firstWord = str.split(' ')[0]
  const restString = str.split(' ').slice(1).join(' ')
  for (let prop in COMMAND) {
    if (commandExists(firstWord, COMMAND[prop].key))
      return `${COMMAND[prop].instruction}: "${restString}"`
  }
  return str
}
