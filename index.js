const express = require('express')

const app = express()

const PORT = 4040

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server is running at https://localhost: ${PORT}`))