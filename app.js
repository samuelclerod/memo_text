const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true,
      type: 'string',
    },
    content: {
      describe: 'The note content',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title, content }) => {
    console.log(`TITLE:${title} | CONTENT:${content}`);
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