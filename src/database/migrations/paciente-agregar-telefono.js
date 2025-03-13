// las migraciones permiten modificar una tabla, agregando campos o quitando
// sin tener que eliminar las tablas y  eliminar datos
// para poder hacerlo

'use strict'

module.exports = {

    up: (queryInterface, Sequelize) => {
        return Promise.all([

            queryInterface.addColumn('paciente', 'telefono',{
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {

    }
}