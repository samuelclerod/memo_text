const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'add a new note',
  handler: function () {
    console.log("Adicionando uma nota")
  }
})
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log("Removendo uma nota")
  }
})

yargs.parse()