const express = require('express')
const path = require('path')
const port = 3000
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'static')))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/o-nas', (req, res) => {
  res.sendFile(path.join(__dirname, 'o-nas.html'))
})
app.get('/oferta', (req, res) => {
  res.sendFile(path.join(__dirname, 'oferta.html'))
})
app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'kontakt.html'))
})
app.post('/kontakt', (req, res) => {
  const { imie, nazwisko, email, wiadomosc } = req.body
  console.log(`Imię: ${imie}`)
  console.log(`Nazwisko: ${nazwisko}`)
  console.log(`Email: ${email}`)
  console.log(`Treść wiadomości: ${wiadomosc}`)
  res.redirect('/')
})
app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})
