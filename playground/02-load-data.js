const fs = require('fs')

const dataJson = fs
  .readFileSync('playground/1-json.json')
  .toString()
const data = JSON.parse(dataJson);
console.table(data)