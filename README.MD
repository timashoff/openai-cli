# CLI tools based on Node.js and Openai API

## short introducing

This is a CLI utility that fetches the Openai API (3.2.1 version) and uses a new gpt-3.5-turbo model that is optimized for chat at 1/10th the cost of the previous one

The tool can be launched in the command line from any location by typing **ai**

Understands prefixes of the type:

- -ch -c translate into Chinese
- .clear .c clear the input history
- -e -п translate into English
- .exit .q /q :q .й close the programm
- -g check the grammar
- .help -help .h -h print help info
- -l make a sentence more literary
- -p show the Pinyin transcription
- -t -ru translate into Russian

## image visualisation

<img width="1199" alt="openai_sample" src="https://user-images.githubusercontent.com/83927854/216793557-f2d1321f-0c0b-4dfa-86ac-0b11cb3ede9c.png">

error handling:

<img width="1199" alt="error_hadle" src="https://user-images.githubusercontent.com/83927854/217785378-a4039a34-fff7-4d93-a0b6-05c193abe366.png">

## how to install

0. First of all, you need Node.js on your computer ( [https://nodejs.org/en/](https://nodejs.org/en/) )
1. Download the repo and run `npm i`
2. Rename **.env.example** file to **.env**
3. Add in **.env** file your Openai API Key ( [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) )
4. Remove **.env** in the **.gitignore** file
5. Run `npm i -g` to install this app globally on your computer so you can run the application with the command **ai** from any location in the CLI
6. Enjoy!

### Known issues

- If you encounter difficulties, change the first row in the **index.js** file and specify your Node.js path directory. Use command `which node` in your cli to find out the Node.js path (on mac/linux)

- If you have struggled during the update to the new **gpt-3.5-turbo** model, please check [this link](https://github.com/openai/openai-node/issues/81#issuecomment-1465167610)

### Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above.

If you would like to submit a PR with a fix, reference the
issue you created!
