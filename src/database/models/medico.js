'use strict' // para que no se puedan usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let Medico = sequelize.define('medico', { // defino el modelo de la tabla usuario

        id: {
            type: DataTypes.BIGINT, // defino tipo de dato
            autoIncrement: true, // autoincrementable
            primaryKey: true, // clave primaria
            allowNull: false // no se permite nulos
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.INTEGER,
        },
        especialidad:{
            type: DataTypes.STRING,
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

    Medico.associate = models =>{
        // acá se relacionan las tablas de la base de datos
    }

    return Medico
}