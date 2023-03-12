#!/usr/local/bin/node

import { Configuration, OpenAIApi } from 'openai'
import * as dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createInterface } from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, ".env") })

const rl = createInterface({ input, output })
const key = process.env.KEY_API

const yourName = 'user'
const aiName = 'ai'

const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);

const prompt = () => {
  rl.question(`\n\x1b[32m${yourName}:\x1b[0m `, async (answer) => {

    if (answer === '.exit' || answer === ':q' || answer === '.q' || answer === '/q' || answer === '.й') {
      rl.close()
      return
    }

    if (answer === '.help' || answer === '-help' || answer === '.h' || answer === '-h') {
      showAllcomand()
      answer = ''
      prompt()
    }

    const string = findComand(answer)

    if (!answer || string.split(' ').length < 3) {
      console.log('need 3 more words');
      prompt()
      return
    }

    let response
    try {
      response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: string }],
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
    } catch (error) {
      console.log(`🤬 error: ${error.message}, trying to reconnect...`)
      prompt()
      return
    }

    const tokens = response.data.usage.total_tokens
    console.log(`\n\x1b[32m${aiName}: \x1b[0m${response.data.choices[0].message.content.trim()}`, -tokens)

    prompt()

  })
}

prompt()


//helpers 
function findComand(str) {
  const firstWord = str.split(' ')[0]
  const restString = str.split(' ').slice(1).join(' ')
  if (firstWord === '-grammar' || firstWord === '-g') return `Is the grammar of the following sentence correct?: "${restString}"`
  if (firstWord === '-перевод' || firstWord === '-п' || firstWord === '-e') return `translate the following sentence into English: "${restString}"`
  if (firstWord === '-translate' || firstWord === '-t') return `translate the following sentence into Russian: "${restString}"`
  if (firstWord === '-literary' || firstWord === '-l') return `make sentence more literary: "${restString}"`
  else return str
}

function showAllcomand() {
  console.log(`
  .help (.h, -help, -h,) = help command
  .exit (:q, .q, /q, .й) = close the programm
  -grammar (-g) = check the grammar in english
  -перевод (-п, -e) = translate sentence into English
  -translate (-t, -ru) = translate into Russian
  -literary (-l) = make sentence more literary
  `)
}