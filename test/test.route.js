const express = require('express')
const router = express.Router()

router
  .get('/', (req, res, next) => {
    // res.send('Hello World!')
    console.log("callback 1")
    next()
  }, (req, res) => {
    console.log("callback 2")
    return res.sendStatus(200)
  })
  .post('/', (req, res) => {
    res.send('Post request')
  })
  .put('/', (req, res) => {
    res.send('Put request')
  })
  .delete('/', (req, res) => {
    res.send('Delete request')
  })
  .all('/load', (req, res, next) => {
    console.log("All request")
    next()
  })

module.exports = router