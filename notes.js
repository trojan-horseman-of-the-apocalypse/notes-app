const fs = require('fs')
const chalk = require('chalk')

const listNotes = notes => {
  loadNotes().forEach(note => console.log(chalk.green(note.title)))
}

const saveNotes = notes => fs.writeFileSync('./notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try {
      return JSON.parse(fs.readFileSync('./notes.json').toString())
    } catch (e) {
      return []
    }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  debugger
  if(notes.filter(note => note.title === title).length === 0) {
    notes.push({
    title,
    body
  }) 
  saveNotes(notes)
  console.log(chalk.green.inverse("Note added!"))
  } else {
    console.log(chalk.red.inverse("Note title taken!"))
  }
}

const removeNote = title => {
  const notes = loadNotes()
  const removed = notes.filter(note => note.title !== title)
  saveNotes(removed)
  notes.length !== removed.length ? console.log(chalk.green.inverse('Note removed!')) : console.log(chalk.red.inverse('No note found!'));
}

const readNote = title => {
  const notes = loadNotes()
  const note = notes.filter(note => note.title === title)
  note.length >= 1 ? console.log(chalk.inverse(`${note[0].title}`),
  `
${note[0].body}`) : console.log(chalk.red.inverse('No note found with that title!')) 
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}