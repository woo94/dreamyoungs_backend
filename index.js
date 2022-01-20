const express = require("express")
const app = express()
const testRouter = require('./routes/test')
const userRouter = require('./routes/user')

app.use('/', testRouter)
app.use('/user', userRouter)

app.listen(8080, () => {
    console.log('server is running on port 8080')
})