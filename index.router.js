const { Router } = require('express')
const router = Router()
const testRouter = require('./test/test.route')

router.use('/test', testRouter)
module.exports = router