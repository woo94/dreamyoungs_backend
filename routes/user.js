// baseURL: ${HOST}:${PORT}/user

const express = require("express")
const { Op } = require("sequelize")
const sequelize = require('../sequelize')
const User = require("../models/user")(sequelize)

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        const users = await User.findAll()
        res.json({
            users
        })
    })
    .post(async (req, res) => {
        const user = await User.create(req.body)
        res.json(user)
    })

router.route('/:userIndex')
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
        res.sendStatus(200)
    })

router.route('/:userIndex/hasCat')
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
    .post(async (req, res) => {
        const user = await User.create(req.body)
        res.json(user)
    })

module.exports = router