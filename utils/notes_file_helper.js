const { writeFileSync: write, readFileSync: read } = require('fs')

const DESTINATION = 'data/nodes_file.json'

const save = (notes = []) => {
  const notesJSON = JSON.stringify(notes)
  write(DESTINATION, notesJSON);
}

const load = () => {
  try {
    const notesJSON = read(DESTINATION).toString()
    return JSON.parse(notesJSON)
  } catch (error) {
    return []
  }
}

module.exports = { save, load }