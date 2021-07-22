const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const serverStarted = Date.now()

app.get('*', (req, res) => {
  console.log(`--> ${req.method} ${req.path}`)
  res.send({
    method: req.method,
    path: req.path,
    message: `server up ${((Date.now() - serverStarted)/1000).toFixed(1)} seconds`,
  })
})

const port = process.env.PORT || 1234
app.listen(port, () => console.log(`server listening on port ${port}`))
