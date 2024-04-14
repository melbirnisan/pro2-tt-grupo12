const datos = {
    usuario:{
        email: "solymel@gmail.com",
        usuario: "solymel",
        contra: "123456",
        fecha: "09/19/2004",
        dni: "47974628",
        fotoPerfil: '.public/images/profile.jpg'
    },

    productos: [
        {
            imagen: '.public/images/tortured.jpg',
            nombre: "The Tortured Poets Department",
            descripcion: "The Tortured Poets Department es el álbum mas reciente de estudio de la cantante y autora estadounidense Taylor Swift, lanzado en 2024. Incluye una edición en doble vinilo de color blanco. Incluye de dieciséis canciones. ",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },
        {
            imagen: '.public/images/curtain.jpg',
            nombre: "Curtain Call",
            descripcion: "Curtain Call es la segunda colección de grandes éxitos del ícono del rap. Incluye música de todos los proyectos de Eminem desde Relapse en adelante. Incluye 2 vinilos azules translúcidos y fue lanzado en 2022.",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }

            ]
        },
        {
            imagen: '.public/images/austin.jpg',
            nombre: "Austin",
            descripcion: "Austin es el quinto album del cantante Post Malone. Este fue lanzado en 2023 y fue todo un éxito. Incluye dos vinilos verde oscuro translúcido tipo gatefold de 2xLP y 17 canciones inolvidables.",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },
        {
            imagen: '.public/images/starboy.jpg',
            nombre: "Starboy",
            descripcion: "Starboy es el tercer álbum del cantante The Weeknd. Fue lanzado en 2020. Incluye 18 canciones y 2 vinilos translúcidos azules limitados.            ",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },
        {
            imagen: '.public/images/folklore.jpg',
            nombre: "Folklore",
            descripcion: "Folklore es el octavo álbum de estudio de Taylor Swift, lanzado a través de Republic Records en 2020. Incluye una versión en vinilo rojo de dos discos de la edición meet me behind the mall y 16 canciones, la pista extra the lakes y arte de portada coleccionable.",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },
        {
            imagen: '.public/images/hollywood.jpg',
            nombre: "Hollywood's Bleeding",
            descripcion: "Hollywood's Bleeding es el tercer álbum del artista Post Malone. Fue lanzado en 2019. El disco incluye 2 vinilos rosados en relieve y 17 canciones de rock/pop.",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },
        {
            imagen: '.public/images/definitely.jpg',
            nombre: "Definitely Maybe",
            descripcion: " Definetely Maybe es el álbum debut del grupo britanico Oasis. Este fue lanzado en 1994 pero esta versión de vinilo ofrece una versión remasterizada de 2019. Incluye dos vinilos LP de edición limitada plateados y 12 canciones. ",
            comentarios: [
                {
                    persona: "valengarcia",
                    texto: "Este vinilo no solo es hermoso esteticamente sino que cada pista es mejor que la anterior. No se lo pierdan!",
                    imagenPerfil: ".public/images/profile1.jpg"
                },
                {
                    persona: "santiagomartinez",
                    texto: "Me encanto este albúm, me lo compraria en todas las versiones posibles. ",
                    imagenPerfil: ".public/images/profile2.jpg"
                },
                {
                    persona: "sofiramirez",
                    texto: "El único vinilo que me faltaba para completa la colección de este artista. No sólo recomiendo el album sino que la página tambien! Muchas gracias! Volveré a comprar si o si.",
                    imagenPerfil: ".public/images/profile3.jpg"
                },
                {
                    persona: "nicosuarez",
                    texto: "Los colores de los vinilos son hermosos, esta edición limitada es perfecta. Lo volveria a comprar!",
                    imagenPerfil: ".public/images/profile5.jpg"
                },
                 {
                    persona: "isalopez",
                    texto: "Este albúm me transporto a otro mundo. tengo la portada del vinilo colgada en mi cuarto y la musica puesta las 24hs del dia.",
                    imagenPerfil: ".public/images/profile4.jpg"
                }
            ]
        },



    ]
}

module.exports = datos;
