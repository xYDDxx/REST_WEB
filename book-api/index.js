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

app.get('/books', (req, res) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  const book = req.body
  books.push(book)
  res.status(201).json(book)
})

app.put('/books/:isbn', (req, res) => {
  const { isbn } = req.params
  const updatedBook = req.body
  books = books.map(book => (book.isbn === isbn ? updatedBook : book))
  res.json(updatedBook)
})

app.delete('/books/:isbn', (req, res) => {
  const { isbn } = req.params
  books = books.filter(book => book.isbn !== isbn)
  res.status(204).send()
})
