'use strict'

const models = require('../models/index')
const bcrypt = require('bcryptjs')

module.exports = {

    async up (queryInterface, Sequelize)  {

        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults:{
                    nombre: "Agustin",
                    apellido: "Godoy",
                    email: "mail@mail.com",
                    edad: 33,
                    password: bcrypt.hashSync('password', 10)
                }
            })
        ])
    }
}