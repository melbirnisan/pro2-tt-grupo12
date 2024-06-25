const bcrypt = require('bcrypt');
const datos = require("../database/models");
const { validationResult } = require("express-validator");

const users = {
  index: function (req, res, next) {
    let id = req.params.id;
    let criterio = {
      include: [
        { association: "productos" },
        { association: "comentarios" }
      ]
    };
    datos.Usuario.findByPk(id, criterio)
      .then(function (respuesta) {
        res.render('profile', { usuario: respuesta, productos: respuesta.productos, title: 'Profile' });
      })
      .catch(function (error) {
        console.error('Error al buscar el perfil:', error);
        return res.status(500).send("Error al buscar el perfil");
      });
  },

  otherProfile: function (req, res, next) {
    let criterio = {
      include: [
        {
          association: "productos",
          include: [{ association: "comentarios" }]
        }
      ],
      where: {
        id: req.params.id
      }
    };
    datos.Usuario.findAll(criterio)
      .then(function (respuesta) {
        res.render('profile', { usuario: respuesta[0], productos: respuesta[0].productos, title: 'Profile' });
      })
      .catch(function (error) {
        console.error('Error al buscar el perfil de otro usuario:', error);
        return res.status(500).send("Error al buscar el perfil de otro usuario");
      });
  },

  register: function (req, res, next) {
    res.render('register', { title: 'Registrarse' });
  },

  login: function (req, res, next) {
    res.render('login', { title: 'Ingresar' });
  },

  loginUser: function (req, res) {
    let form = req.body;
    let filtro = {
      where: { mail: form.mail }
    };

    datos.Usuario.findOne(filtro)
      .then((result) => {
        if (result != null) {
          let comparacion = bcrypt.compareSync(form.contrasenia, result.contrasenia);

          if (comparacion) {
            req.session.user = result;
            if (form.recordarme != undefined) {
              res.cookie("idUsuario", result.id, { maxAge: 1000 * 60 * 35 });
            }
            return res.redirect("/");
          } else {
            return res.render("login", { title: "Ingresar", error: "Error en la contraseña" });
          }
        } else {
          return res.render("login", { title: "Ingresar", error: "Usuario no encontrado" });
        }
      })
      .catch((err) => {
        console.error('Error al intentar iniciar sesión:', err);
        return res.status(500).send("Error al intentar iniciar sesión");
      });
  },

  edit: function (req, res, next) {
    let idPerfil = req.params.idPerfil;

    datos.Usuario.findByPk(idPerfil)
      .then(function (resultId) {
        res.render('profile-edit', { perfil: resultId });
      })
      .catch(function (err) {
        console.error('Error al buscar el perfil para editar:', err);
        return res.status(500).send("Error al buscar el perfil para editar");
      });
  },

  store: function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("register", {
        title: "Registrarse",
        errors: errors.array(),
        old: req.body
      });
    }

    let form = req.body;

    datos.Usuario.findOne({ where: { mail: form.mail } })
      .then(existingUser => {
        if (existingUser) {
          return res.render("register", {
            title: "Registrarse",
            error: "Este mail ya ha sido utilizado",
            old: req.body
          });
        } else {
          let usuario = {
            mail: form.mail,
            contrasenia: bcrypt.hashSync(form.contrasenia, 10),
            nombre: form.nombre,
            fechaNacimiento: form.fecha,
            dni: form.dni,
            fotoPerfil: form.fotoPerfil,
            createdAt: new Date()
          };
          datos.Usuario.create(usuario)
            .then((result) => {
              return res.redirect("/users/login");
            })
            .catch((err) => {
              console.error('Error al crear usuario:', err);
              return res.status(500).send("Error al registrar usuario");
            });
        }
      })
      .catch(err => {
        console.error('Error al buscar usuario existente:', err);
        return res.status(500).send("Error al buscar usuario existente");
      });
  },

  update: function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("profile-edit", {
        errors: errors.array(),
        old: req.body,
        perfil: req.body
      });
    }

    let form = req.body;

    let updateData = {
      nombre: form.nombre,
      mail: form.mail,
      fechaNacimiento: form.fecha,
      dni: form.dni,
    };

    if (form.contrasenia && form.contrasenia.length > 0) {
      updateData.contrasenia = bcrypt.hashSync(form.contrasenia, 10);
    }

    let filtrado = {
      where: {
        id: form.id
      }
    };

    if (form.mail !== req.session.user.mail) {
      datos.Usuario.findOne({ where: { mail: form.mail } })
        .then(existingUser => {
          if (existingUser) {
            return res.render("profile-edit", {
              error: "Ya existe un usuario con ese correo electrónico.",
              old: req.body,
              perfil: req.body
            });
          } else {
            datos.Usuario.update(updateData, filtrado)
              .then(function (result) {
                return res.redirect("/users/profile/id/" + form.id);
              })
              .catch(function (err) {
                console.error('Error al actualizar el perfil:', err);
                return res.render("profile-edit", {
                  error: "Error al actualizar el perfil. Por favor, inténtalo de nuevo.",
                  old: req.body,
                  perfil: req.body
                });
              });
          }
        })
        .catch(err => {
          console.error('Error al verificar el correo electrónico:', err);
          return res.render("profile-edit", {
            error: "Error al verificar el correo electrónico. Por favor, inténtalo de nuevo.",
            old: req.body,
            perfil: req.body
          });
        });
    } else {
      datos.Usuario.update(updateData, filtrado)
        .then(function (result) {
          return res.redirect("/users/profile/id/" + form.id);
        })
        .catch(function (err) {
          console.error('Error al actualizar el perfil:', err);
          return res.render("profile-edit", {
            error: "Error al actualizar el perfil. Por favor, inténtalo de nuevo.",
            old: req.body,
            perfil: req.body
          });
        });
    }
  },

  logout: function (req, res, next) {
    req.session.destroy();
    res.clearCookie("idUsuario");
    return res.redirect("/");
  },
};

module.exports = users;

