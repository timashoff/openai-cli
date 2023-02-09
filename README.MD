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
- error handling with reconnect

## image visualisation

<img width="1199" alt="openai_sample" src="https://user-images.githubusercontent.com/83927854/216793557-f2d1321f-0c0b-4dfa-86ac-0b11cb3ede9c.png">

error handling:

<img width="704" alt="error" src="https://user-images.githubusercontent.com/83927854/217783329-6da904d1-9cab-4eaf-82a8-20fd2fe02edb.png">

## how to install

0. First of all, you need Node.js on your computer ( [https://nodejs.org/en/](https://nodejs.org/en/) )
1. Download the repo and run `npm i`
2. Rename **.env.example** file to **.env**
3. Add in **.env** file your Openai API Key ( [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) )
4. Remove **.env** in the **.gitignore** file
5. Run `npm i -g` to install this app globally on your computer so you can run the application with the command **ai** from any location in the CLI
6. Enjoy!

### Known issues

If you encounter difficulties, swap the first and second rows in the **index.js** file, or specify your version of Node.js
Use command `which node` in your cli to find out the Node.js path (on mac/linux)

### Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above.

If you would like to submit a PR with a fix, reference the
issue you created!
