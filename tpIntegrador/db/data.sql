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

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT UNSIGNED NOT NULL, 
    fotoProducto VARCHAR(250),
    nombreProducto VARCHAR(250) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL,
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id));
    
    
CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT UNSIGNED NOT NULL, 
	idProducto INT UNSIGNED NOT NULL, 
    textoComentario VARCHAR(250),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    deletedAt TIMESTAMP NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
	FOREIGN KEY (idProducto) REFERENCES productos(id));
    
    
INSERT INTO usuarios (id, nombre, mail, contrasenia, fechaNacimiento, dni, fotoPerfil)
VALUES 
(default, 'valengarcia10', 'valengarcia@gmail.com', '123456', '1990-01-01', 12345678, '/images/users/profile1.jpg'),
(default,'santiagomartinez10', 'santiagomartinez@gmail.com', '123456', '1992-03-15', 23456789, '/images/users/profile2.jpg'),
(default,'sofiramirez10', 'sofiramirez@gmail.com', '123456', '1988-07-20', 34567890, '/images/users/profile3.jpg'),
(default,'nicosuarez10', 'nicosuarez@gmail.com', '123456', '1991-05-10', 45678901, '/images/users/profile5.jpg'),
(default,'isalopez10', 'isalopez@gmail.com', '123456', '1987-11-28', 56789012, '/images/users/profile4.jpg');

INSERT INTO productos (id, idUsuario, fotoProducto, nombreProducto, descripcion)
VALUES 
(default,1, '/images/products/tortured.jpg', 'The Tortured Poets Department', 'The Tortured Poets Department es el álbum mas reciente de estudio de la cantante y autora estadounidense Taylor Swift, lanzado en 2024. Incluye una edición en doble vinilo de color blanco. Incluye de dieciséis canciones.'),
(default,2, '/images/products/folklore.jpg', 'Folklore', 'Folklore es el octavo álbum de estudio de Taylor Swift, lanzado a través de Republic Records en 2020. Incluye una versión en vinilo rojo de dos discos de la edición meet me behind the mall y 16 canciones, la pista extra the lakes y arte de portada coleccionable.'),
(default,3, '/images/products/sos.jpg', 'SOS', 'SOS es el segundo álbum de estudio de la cantante SZA, ganadora de un premio GRAMMY. Fue lanzado en 2023. Incluye 2 vinilos LP y 23 hermosas canciones.'),
(default,4, '/images/products/circles.jpg', 'Circles', 'Circles es el sexto y último álbum de estudio del artista Mac Miller. Fue lanzado en 2020. Incluye 2 vinilos LP de edición limitada transparentes y las últimas 14 canciones del artista.'),
(default,5, '/images/products/curtain.jpg', 'Curtain Call', 'Curtain Call es la segunda colección de grandes éxitos del ícono del rap. Incluye música de todos los proyectos de Eminem desde Relapse en adelante. Incluye 2 vinilos azules translúcidos y fue lanzado en 2022.'),
(default,6, '/images/products/austin.jpg', 'Austin', 'Austin es el quinto album del cantante Post Malone. Este fue lanzado en 2023 y fue todo un éxito. Incluye dos vinilos verde oscuro translúcido tipo gatefold de 2xLP y 17 canciones inolvidables.'),
(default,7, '/images/products/starboy.jpg', 'Starboy', 'Starboy es el tercer álbum del cantante The Weeknd. Fue lanzado en 2020. Incluye 18 canciones y 2 vinilos translúcidos azules limitados.'),
(default,8, '/images/products/nevermind.jpg', 'Nevermind', 'Nevermind es el segundo albúm de estudio lanzado en 1991 de la banda Nirvana. Un exito total este disco incluye 2 vinilos LP negros y 12 increibles canciones.'),
(default,9, '/images/products/definitely.jpg', 'Definitely Maybe', 'Definetely Maybe es el álbum debut del grupo britanico Oasis. Este fue lanzado en 1994 pero esta versión de vinilo ofrece una versión remasterizada de 2019. Incluye dos vinilos LP de edición limitada plateados y 12 canciones.'),
(default,10, '/images/products/hollywood.jpg', 'Hollywoods Bleeding', 'Hollywoods Bleeding es el tercer álbum del artista Post Malone. Fue lanzado en 2019. El disco incluye 2 vinilos rosados en relieve y 17 canciones de rock/pop.');

INSERT INTO comentarios (id, idUsuario, idProducto, textoComentario)
VALUES 
(default,1, 1, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 1, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 1, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.'),
(default,1, 2, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 2, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 2, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.'),
(default,1, 3, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 3, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 3, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.'),
(default,1, 4, 'Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volvería a comprar!'),
(default,2, 4, 'Este álbum me transportó a otro mundo. Tengo la portada del vinilo colgada en mi cuarto y la música puesta las 24 horas del día.'),
(default,3, 4, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,1, 5, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 5, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 5, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');
(default,1, 6, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 6, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 6, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');
(default,1, 7, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 7, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 7, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');
(default,1, 8, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 8, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 8, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');
(default,1, 9, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 9, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 9, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');
(default,1, 10, 'Este vinilo no solo es hermoso estéticamente sino que cada pista es mejor que la anterior. No se lo pierdan!'),
(default,2, 10, 'Me encantó este álbum, me lo compraría en todas las versiones posibles.'),
(default,3, 10, 'El único vinilo que me faltaba para completar la colección de este artista. No sólo recomiendo el álbum sino que la página también! Muchas gracias! Volveré a comprar si o si.');