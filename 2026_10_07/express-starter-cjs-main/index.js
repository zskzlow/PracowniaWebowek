const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.get('/', (req, res) => {
  res.send("strona glowna")
})
app.get('/json', (req, res) => {
  res.json({
    anglia: 'manU',
    hiszpania: 'real',
    polska: 'Lech',
    portugalia: 'Ronaldo'
  })
})
app.get('/html', (req, res) => {
  const html = `<!DOCTYPE html>
                    <html lang="pl">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>html w node</title>
                    </head>
                    <body>
                        
                    </body>
                    </html>`
  res.send(html)
})
app.get('/plikhtml', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/get_params', (req, res) => {
  const params = req.query

  console.log(params)

  let timestamp = new Date().getTime()

  fs.writeFile(`params_${timestamp}.json`, JSON.stringify(params),(err) => {
    if (err) throw err
  })
  res.json({ok:"ok"})
})
app.use(express.static(path.join(__dirname, 'assets')))
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
