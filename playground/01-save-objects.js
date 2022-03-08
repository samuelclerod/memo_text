const fs = require('fs')

const book = {
  title: "Ego is the enemy 💪",
  author: 'Ryan Heliday',
  pages: 300
}

const bookJson = JSON.stringify(book)
fs.writeFileSync('playground/1-json.json', bookJson)
