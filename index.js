const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()
const testRouter = require('./routes/test')
const userRouter = require('./routes/user')

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    // handle origin
    const allowedOrigins = ['http://localhost:3000']
    if (!allowedOrigins.includes(req.headers.origin)) {
        throw new Error('not allowed origin')
    }

    // handle preflight request
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Content-Length', '0')
        res.sendStatus(204)
    }
    else {
        next()
    }
})

// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})

app.use('/', testRouter)
app.use('/user', userRouter)

app.listen(8080, () => {
    console.log('server is running on port 8080')
})