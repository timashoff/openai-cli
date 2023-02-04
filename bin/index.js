#!/Users/timashoff/.nvm/versions/node/v19.6.0/bin/node
//#!/usr/bin/env node;

const { Configuration, OpenAIApi } = require('openai')
const path = require('node:path')
require('dotenv').config({ path: path.join(__dirname, ".env") })
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })
const key = process.env.KEY_API
const configuration = new Configuration({ apiKey: key });
const openai = new OpenAIApi(configuration);

const prompt = () => {
  rl.question('\n\x1b[32mtimashoff:\x1b[0m ', async (answer) => {

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

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: string,
      temperature: 1,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const tokens = response.data.usage.total_tokens
    console.log(`\n\x1b[32mai: \x1b[0m${response.data.choices[0].text.trim()}`, -tokens)

    prompt()
  })
}
prompt()


//helpers 
function findComand(str) {
  const firstWord = str.split(' ')[0]
  const restString = str.split(' ').slice(1).join(' ')
  if (firstWord === '-grammar' || firstWord === '-g') return `Is the grammar of the following sentence correct?: "${restString}"`
  if (firstWord === '-перевод' || firstWord === '-п' || firstWord === '-ру') return `translate the following sentence into English: "${restString}"`
  if (firstWord === '-translate' || firstWord === '-t' || firstWord === '-ru') return `translate the following sentence into Russian: "${restString}"`
  else return str
}

function showAllcomand() {
  console.log(`
  .help (.h, -help, -h,) = help command
  .exit (:q, .q, /q, .й) = close the programm
  -grammar (-g) = check the grammar in english
  -перевод (-п, -ру) = translate sentence into English
  -translate (-t, -ru) = translate into Russian
  `)
}