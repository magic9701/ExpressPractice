const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:Page', (req, res) => {
  const Page = req.params.Page
  res.render('webPage', { Page })
})

//listen the sever
app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})