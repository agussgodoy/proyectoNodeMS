'use strict'

module.exports = (sequelize, DataTypes) => {

    let Tratamiento = sequelize.define('tratamiento', {

        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }, 

        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
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

    Tratamiento.associate = models =>{
        // acá se relacionan las tablas de la base de datos
    }

    return Tratamiento
}