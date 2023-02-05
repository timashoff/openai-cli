# CLI tools based on Node.js and Openai API

## short introducing

This is a CLI utility that fetches the Openai API and uses text-davinci-003 model

The tool can be launched in the command line from any location by typing **ai**

Understands prefixes of the type:

- **-g** check the English grammar
- **-t** translate into Russian
- **-e** translate from Russian into English
- **-l** make sentence more literary
- **.exit** and **.help** commands

## image visualisation

<img width="1199" alt="openai_sample" src="https://user-images.githubusercontent.com/83927854/216793557-f2d1321f-0c0b-4dfa-86ac-0b11cb3ede9c.png">

## how to install

1. download repo and `npm i`
2. rename **.env.example** to **.env**
3. add in **.env** your Openai API Key [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
4. remove **.env** from the file **.gitignore**
5. `npm i -g` Install this app globally on your computer so you can run the application with the command **ai** from any location in the CLI
6. enjoy!

### Known issues

If you encounter difficulties, swap the first and second rows in the **index.js** file, or specify your version of Node.js
Use command `which node` in your cli to find out the Node.js path (on mac/linux)

### Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above.

If you would like to submit a PR with a fix, reference the
issue you created!
