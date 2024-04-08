CREATE SCHEMA dataRegistro;

USE dataRegistro;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250),
    mail VARCHAR(250) NOT NULL,
    contrasenia VARCHAR(250) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    dni INT NOT NULL,
    fotoPerfil VARCHAR(250),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL);
    

    
    
    

    
    
    
