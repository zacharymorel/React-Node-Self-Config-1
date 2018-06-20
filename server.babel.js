import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static('public'))

app.listen(port, console.log(`listening on PORT: ${port}`))