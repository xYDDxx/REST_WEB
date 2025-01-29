const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`)
})

let books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Beispielbuch',
    author: 'Max Mustermann',
    published_date: '2020-01-01',
    publisher: 'Beispielverlag',
    numOfPages: 123
  }
]
