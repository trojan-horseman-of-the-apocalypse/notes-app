const yargs = require('yargs')
const chalk = require('chalk')
const fs = require('fs')
const {
  addNote,
  removeNote,
  listNotes,
  readNote
} = require('./notes')



yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    console.log(argv.title, argv.body)
    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
     title: {
       describe: 'Note title',
       demandOption: true,
       type: 'string'
     },
  },
  handler: argv => {
    removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'View a list of notes',
  handler: () => {
    console.log(chalk.inverse('Note titles:'))
    listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'View a note',
   builder: {
     title: {
       describe: 'Note title',
       demandOption: true,
       type: 'string'
     },
   },
  handler: argv => {
    readNote(argv.title)
  }
})

yargs.parse()