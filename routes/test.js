// baseURL: ${HOST}:${PORT}

const express = require("express")
const router = express.Router()


router.get('/test1', (req, res) => {
    res.send("test1 OK")
})

router.get('/test2', (req, res) => {
    res.json({
        test: "OK"
    })
})

module.exports = router