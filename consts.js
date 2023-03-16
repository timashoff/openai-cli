export const NAME = {
  ai: 'ai',
  user: 'timashoff'
}

export const COMMAND = {
  EXIT: {
    key: ['.exit', '.q', '/q', ':q', '.й'],
    description: 'close the programm'
  },
  HELP: {
    key: ['.help', '-help', '.h', '-h'],
    description: 'print help info'
  },
  CLEAR: {
    key: ['.clear', '.c'],
    description: 'clear the input history'
  },
  LITERARY: {
    key: ['-l'],
    description: 'make a sentence more literary',
    instruction: 'Rewrite the following sentence in a modern literary style and simplify it'
  },
  GRAMMAR: {
    key: ['-g'],
    description: 'check the grammar',
    instruction: 'Check the grammar, correct the mistakes and typos in the following'
  },
  TRANSLATE: {
    key: ['-t', '-ru'],
    description: 'translate into Russian',
    instruction: 'translate the following sentence into Russian'
  },
  ENGLISH: {
    key: ['-e', '-п'],
    description: 'translate into English',
    instruction: 'translate the following sentence into English'
  },
  CHINESE: {
    key: ['-ch', '-c'],
    description: 'translate into Chinese',
    instruction: 'Translate the following sentence into Chinese and provide the Pinyin transcription'
  },
  PINYIN: {
    key: ['-p'],
    description: 'show the Pinyin transcription',
    instruction: 'Provide the Pinyin transcription of the following sentence'
  },
}

export const COLOR = {
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
}