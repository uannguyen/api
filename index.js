const express = require('express')
const path = require('path')
const app = express()
const testRouter = require('./test/test.route')

app.use('/static', express.static(path.join(__dirname, 'public')))

const PORT = 4040

app.use('/api/test', testRouter)
app.use('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Server is running at https://localhost: ${PORT}`))

module.exports = app
