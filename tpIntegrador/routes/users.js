var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');

// Middleware para verificar si el usuario está autenticado
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    return res.redirect('/users/login');
  }
}

// Validaciones para el registro y actualización del perfil
const validations = [
  body("nombre")
    .notEmpty().withMessage("Ingrese nombre de usuario").bail(),
  body("mail")
    .notEmpty().withMessage("Ingrese un e-mail").bail()
    .isEmail().withMessage("Ingrese un e-mail válido").bail(),
  body("contra")
    .optional() // Hacemos que la contraseña sea opcional en la actualización
    .isLength({ min: 4 }).withMessage("La contraseña debe tener más de 4 caracteres")
];

// Ruta principal
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Ruta para ver el perfil del usuario logueado
router.get('/profile', isAuthenticated, userController.index);

// Ruta para ver el perfil de otro usuario
router.get('/profile/id/:id', userController.otherProfile);

// Rutas para el login
router.get('/login', userController.login);
router.post("/login", userController.loginUser);

// Rutas para el registro
router.get('/register', userController.register);
router.post("/register", validations, userController.store);

// Rutas para editar el perfil
router.get('/profile-edit/:idPerfil', isAuthenticated, userController.edit);
router.post("/update", isAuthenticated, validations, userController.update);

// Ruta para el logout
router.post('/logout', userController.logout);

module.exports = router;
