module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        mail: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        contrasenia: {
            type : dataTypes.STRING
        },
        fechaNacimiento: {
            type : dataTypes.DATE
        },
        dni: {
            type : dataTypes.INTEGER
        },
        fotoPerfil: {
            type : dataTypes.STRING
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function(models){
    Usuario.hasMany(models.Producto, {
        as: "productos",
        foreignKey: "idUsuario"
    });
    Usuario.hasMany(models.Comentario, {
        as : "comentarios",
        foreignKey: "idUsuario"
    })
};


    return Usuario;
}


