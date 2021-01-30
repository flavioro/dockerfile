const express = require('express')
const app = express()

app.get('/f_c/:value', (req, res) => {
  const {value} = req. params

  const celsius = (value - 32) *5 /9;
  res.json({celsius})
})

app.get('/c_f/:value', (req, res) => {
  const {value} = req. params

  const fahrenheit = (value * 9 / 5) + 32;
  res.json({fahrenheit})
})


app.listen(8080, () => {
  console.log('Server running port 8080.')
})