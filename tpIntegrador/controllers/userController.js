const bcrypt = require('bcrypt');
const datos = require("../database/models");
const { validationResult } = require("express-validator");

const users = {
  index: function (req, res, next) {
    let criterio = {
      include: [
        { association: "producto" }
      ],
      where: {
        id: req.session.user.id
      }
    };
    datos.Usuario.findAll(criterio)
      .then(function (respuesta) {
        res.render('profile', { usuario: respuesta[0], productos: respuesta[0].producto, title: 'Profile' });
      })
      .catch(function (error) {
        return console.log(error);
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
      where: [{ mail: form.mail }]
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
      }).catch((err) => {
        return console.log(err);
      });
  },
  edit: function (req, res, next) {
    let idPerfil = req.params.idPerfil;

    datos.Usuario.findByPk(idPerfil)
      .then(function (resultId) {
        res.render('profile-edit', { perfil: resultId });
      })
      .catch(function (err) {
        return console.log(err);
      });
  },
  store: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
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
              contrasenia: bcrypt.hashSync(form.contra, 10),
              nombre: form.nombre,
              fechaNacimiento: form.fecha,
              dni: form.dni,
              fotoPerfil: form.fotoPerfil,
              createdAt: new Date() 
            };
            datos.Usuario.create(usuario)
              .then((result) => {
                return res.redirect("/users/login");
              }).catch((err) => {
                return console.log(err);
              });
          }
        }).catch(err => {
          return console.log(err);
        });
    } else {
      
      return res.render("register", {
        title: "Registrarse",
        errors: errors.array(),
        old: req.body
      });
    }
  },
  update: function (req, res) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let form = req.body;
      let filtrado = {
        where: {
          id: form.id
        }
      };
      datos.Usuario.update(form, filtrado)
        .then(function (result) {
          return res.send(result);
          return res.redirect("/profile/id/" + form.id);
        })
        .catch(function (err) {
          return console.log(err);
        });
    } else {
      return res.render("profile-edit", {
        errors: errors.mapped(),
        old: req.body
      });
    }
  },
  logout: function(req, res, next) {
    req.session.destroy()
    res.clearCookie("idUsuario")
    return res.redirect("/");
},
   

};

/* exportar el modulo */
module.exports = users;
