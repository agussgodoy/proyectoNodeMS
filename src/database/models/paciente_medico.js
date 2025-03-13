'use strict'

module.exports = (sequelize, DataTypes) => {

    let PacienteMedico = sequelize.define('paciente_medico', {

        id: {
            type: DataTypes.BIGINT, // defino tipo de dato
            autoIncrement: true, // autoincrementable
            primaryKey: true, // clave primaria
            allowNull: false // no se permite nulos
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at', // forma de redefinir el nombre del campo en la tabla
            defaultValue: DataTypes.NOW, // valor por defecto
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at', 
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    },{
        paranoid: true, // elimina los registros de forma logica
        freezeTableName: true //no va a modificar el nombre de la tabla a plural. Si no pongo eso, sequelize me la va a nombrar como Usuarios
    })

    PacienteMedico.associate = models => {
        
        PacienteMedico.belongsTo(models.medico)
        PacienteMedico.belongsTo(models.paciente)
    }

    return PacienteMedico
}