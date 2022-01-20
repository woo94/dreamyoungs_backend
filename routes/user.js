// @ts-check
/**
 * @typedef User
 * @type {object}
 * @property {number} index
 * @property {string} userName
 * @property {string} userDesc
 * @property {boolean} hasCat
 */

// baseURL: ${HOST}:${PORT}/user
const express = require("express")
const { Op } = require("sequelize")
const sequelize = require('../sequelize')
const User = require("../models/user")(sequelize)

const router = express.Router()

router.route('/')
    /**
     * @api {get} /user Retreive all users 
     * @apiGroup User
     * @apiName GetUser
     * @apiVersion 0.1.0
     * @apiSuccess {Object[]} users Array of users
     * @apiSuccess {Number} users.index User's index
     * @apiSuccess {String} users.userName User's name
     * @apiSuccess {String} users.userDesc User's description
     * @apiSuccess {Boolean} users.hasCat <code>true</code> if user has a cat. <code>false</code> if not
     * @apiExample {curl} cURL example
     * curl -i http://localhost:8080/user
     */
    .get(async (req, res) => {
        const users = await User.findAll()
        res.json({
            users
        })
    })
    /**
     * @api {post} /user Create a user
     * @apiGroup User
     * @apiName CreateUser
     * @apiVersion 0.1.0
     * @apiSuccess {Number} index User's index
     * @apiSuccess {String} userName User's name
     * @apiSuccess {String} userDesc User's description
     * @apiSuccess {Boolean} hasCat <code>true</code> if user has a cat. <code>false</code> if not
     * @apiExample {curl} cURL example
     * curl -H "Content-Type: application/json" -i -X POST -d '{"userName": "woo", "userDesc": "taking an assignment test", "hasCat": false}' http://localhost:8080/user
     */
    .post(async (req, res) => {
        /**
         * @type {User}
         */
        const requestBody = req.body
        console.log(requestBody)
        const user = await User.create(requestBody)
        res.json(user)
    })

router.route('/:userIndex')
    /**
     * @api {delete} /user/:userIndex Delete a user
     * @apiGroup User
     * @apiName DeleteUser
     * @apiVersion 0.1.0
     * @apiSuccess (200) {String} result <code>"success"</code>
     * @apiExample {curl} cURL example
     * curl -i -X DELETE http://localhost:8080/user/2
     */
    .delete(async (req, res) => {
        const userIndex = +req.params.userIndex
        const deleteCount = await User.destroy({
            where: {
                index: {
                    [Op.eq]: userIndex
                }
            }
        })
        console.log(userIndex, deleteCount)
        res.status(200).json({
            result: 'success'
        })
    })

router.route('/:userIndex/hasCat')
    /**
     * @api {get} /user/:userIndex/hasCat Get hasCat of user
     * @apiGroup User
     * @apiName GetUserHasCat
     * @apiVersion 0.1.0
     * @apiSuccess (200) {Boolean} hasCat <code>true</code> if user has a cat. <code>false</code> if not
     * @apiExample {curl} cURL example
     * curl -i http://localhost:8080/user/1/hasCat
     */
    .get(async (req, res) => {
        const userIndex = +req.params.userIndex
        const user = await User.findOne({
            where: {
                index: {
                    [Op.eq]: userIndex
                }
            },
            attributes: ['hasCat']
        })
        res.json(user)
    })
    /**
     * @api {post} /user/:userIndex/hasCat Update hasCat of user
     * @apiGroup User
     * @apiName UpdateUserHasCat
     * @apiVersion 0.1.0
     * @apiSuccess (200) {Boolean} hasCat <code>true</code> if user has a cat. <code>false</code> if not
     * @apiExample {curl} cURL example
     * curl -i -H "Content-Type: application/json" -X POST -d '{"hasCat": true}' http://localhost:8080/user/1/hasCat
     */
    .post(async (req, res) => {
        /**
         * @type {{ hasCat: boolean}}
         */
        const requestBody = req.body
        const userIndex = +req.params.userIndex
        const user = await User.update(
            {
                hasCat: requestBody.hasCat
            },
            {
                where: {
                    index: {
                        [Op.eq]: userIndex
                    }
                }
            }
        )
        res.json(user)
    })

module.exports = router