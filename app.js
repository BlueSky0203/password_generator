const express = require('express')
const app = express()
const port = 3000


const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const generatePassword = require('./generate_password')

// set template engine
app.engine('handlebars', engine({ defaultLayou: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser 解析post information
app.use(bodyParser.urlencoded({ extended: true }))

// localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

// 取得get請求req.query, post請求req.body
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password , options: options})
})

app.listen(port, () => {
  console.log(`run localhost:${port}`)
})