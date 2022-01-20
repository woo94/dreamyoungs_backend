// baseURL: ${HOST}:${PORT}

const express = require("express")
const router = express.Router()

/**
 * @api {get} /test1 Test endpoint1
 * @apiGroup Test
 * @apiVersion 0.1.0
 * @apiSuccessExample {String} Success-Response:
 *  OK
 * @apiExample {curl} cURL example
 * curl -i http://localhost:8080/test1
 */
router.get('/test1', (req, res) => {
    res.send("test1 OK")
})

/**
 * @api {get} /test2 Test endpoint2
 * @apiGroup Test
 * @apiVersion 0.1.0
 * @apiExample {curl} cURL example
 * curl -i http://localhost:8080/test2
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "test": "OK"
 *  }
 */
router.get('/test2', (req, res) => {
    res.json({
        test: "OK"
    })
})

module.exports = router