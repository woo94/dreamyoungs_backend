const express = require("express")
const app = express()
const testRouter = require('./routes/test')

app.use('/', testRouter)

app.listen(8080, () => {
    console.log('server is running on port 8080')
})