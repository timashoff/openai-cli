# CLI tools based on Node.js and Openai API

## short introducing

This is a CLI utility that fetches the Openai API and uses text-davinci-003 model
The tool can be launched in the command line from any location by typing 'ai'

Understands prefixes of the type:

- **-g** check the English grammar
- **-t** translate into Russian
- **-e** translate from Russian into English
- **.exit** and **.help** commands

## image visualisation

![image](/Users/timashoff/Downloads/openai_sample.png)

## how to install

1. rename **.env.example** to **.env**
2. add in **.env** your Openai API Key [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
3. remove **.env** from the file **.gitignore**
4. `npm i -g` Install this app globally on your computer so you can run the application with the command **ai** from any location in the CLI
5. enjoy!

### P.S.

If you encounter difficulties, swap the first and second rows in the **index.js** file, or specify your version of Node.js
