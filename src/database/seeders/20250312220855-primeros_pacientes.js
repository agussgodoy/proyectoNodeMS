'use strict';

/** @type {import('sequelize-cli').Migration} */

const model = require('../models/index')

module.exports = {
	async up (queryInterface, Sequelize) {
		
		return Promise.all([
			model.paciente.findOrCreate({
				where:{
					id: '3'
				},
				defaults: {
					nombre: "Esteban",
					apellido: "Ruiz",
					email: "esteban@mail.com"
				}
			}),

			model.paciente.findOrCreate({
				where: {
					id: "4"
				}, 
				defaults:{
					nombre: "Jorge",
					apellido: "Gonzalez",
					email: "jorge@mail.com"
				}
			})
		])
	},

};
