export const NAME = {
  ai: 'ai',
  user: 'user',
}

export const COMMAND = {
  EXIT: {
    key: ['.exit', '.q', '/q', ':q', '.й'],
    description: 'close the programm',
  },
  HELP: {
    key: ['.help', '-help', '.h', '-h', ':h'],
    description: 'print help info',
  },
  CLEAR: {
    key: ['.clear', '.сд', ':cl'],
    description: 'clear the input history',
  },
  LITERARY: {
    key: ['-l', ':l'],
    description: 'make a sentence more literary',
    instruction: 'Rewrite the following sentence in a modern literary style and simplify it',
  },
  GRAMMAR: {
    key: ['-g', ':g'],
    description: 'check the grammar',
    instruction: 'check the grammar',
  },
  TRANSLATE: {
    key: ['-t', ':ru', ':t'],
    description: 'translate into Russian',
    instruction: 'translate the following sentence into Russian',
  },
  ENGLISH: {
    key: ['-e', 'ЖЖ', ':e', 'жж'],
    description: 'translate into English',
    instruction: 'translate the following sentence into English',
  },
  CHINESE: {
    key: ['-ch', ':c', 'с'],
    description: 'translate into Chinese',
    instruction:
      'Translate the following sentence into Chinese and provide the Pinyin transcription',
  },
  PINYIN: {
    key: ['-p', ':p'],
    description: 'show the Pinyin transcription',
    instruction: 'Provide the Pinyin transcription of the following sentence',
  },
  TRANSCRIPTION: {
    key: ['-tr', ':tr'],
    description: 'show the English transcription',
    instruction:
      'show the English transcription of the following sentence. The response should only contain the transcription',
  },
  CEFR: {
    key: ['-cefr', ':cefr'],
    description: 'show CEFR levels',
    instruction: 'correlate the following words with CEFR levels of difficulty',
  },
  SENTENCE: {
    key: [':s'],
    description: 'create a simple sentence',
    instruction: 'create a simple sentence using the following words',
  },
}

export const COLOR = {
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
}
