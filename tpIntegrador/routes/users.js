var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');

// Validaciones para el registro y actualización del perfil
const validations = [
  body("nombre")
    .notEmpty().withMessage("Ingrese nombre de usuario").bail(),
  body("mail")
    .notEmpty().withMessage("Ingrese un e-mail").bail()
    .isEmail().withMessage("Ingrese un e-mail válido").bail()
    .custom(function (value, { req }) {
      return datos.Usuario.findOne({
        where: { mail: value }
      })
        .then(function (user) {
          if (user) {
            throw new Error("Ya existe un usuario con ese mail")
          }
        })
    }
  ),
  body("contrasenia")
    .isLength({ min: 4 }).withMessage("La contraseña debe tener más de 4 caracteres")
];

const editValidations = [
  body("nombre")
    .notEmpty().withMessage("Ingrese nombre de usuario"),
  body("mail")
    .notEmpty().withMessage("Ingrese un e-mail")
    .isEmail().withMessage("Ingrese un e-mail válido")
    .custom(function (value, { req }) {
      console.log(value, req.session.user.mail, value != req.session.user.mail);
      if (value == req.session.user.mail) {
        return true
      } else {
        return datos.Usuario.findOne({
          where: { mail: value }
        })
          .then(function (user) {
            if (user) {
              throw new Error("Ya existe un usuario con ese mail")
            }
          })
      }
    }),
  body("contrasenia")
    .optional() // Hacemos que la contraseña sea opcional en la actualización
    .isLength({ min: 4 }).withMessage("La contraseña debe tener más de 4 caracteres")
];

router.get('/login', userController.login);
router.post('/login', validations, userController.loginUser);

router.get('/register', userController.register);
router.post('/register', validations, userController.store);


// Ruta para ver el perfil de otro usuario
router.get('/profile/id/:id', userController.otherProfile);

// Rutas para el login
router.get('/login', userController.login);

router.post('/login', userController.loginUser);

// Rutas para el registro
router.get('/register', userController.register);

router.post('/register', validations, userController.store);

// Ruta para editar el perfil
router.get('/profile-edit/:idPerfil', userController.edit);

router.post('/update', editValidations, userController.update);

// Ruta para el logout
router.post('/logout', userController.logout);

module.exports = router;
