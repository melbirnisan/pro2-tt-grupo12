var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { body, validationResult } = require('express-validator');

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
router.get('/profile', function (req, res, next) {
  if (req.session.user) {
    userController.index(req, res);
  } else {
    res.redirect('/users/login');
  }
});

// Ruta para ver el perfil de otro usuario
router.get('/profile/id/:id', function (req, res, next) {
  userController.otherProfile(req, res);
});

// Rutas para el login
router.get('/login', function (req, res, next) {
  userController.login(req, res);
});

router.post("/login", function (req, res, next) {
  userController.loginUser(req, res);
});

// Rutas para el registro
router.get('/register', function (req, res, next) {
  userController.register(req, res);
});

router.post("/register", validations, function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si hay errores de validación, manejarlos adecuadamente
    return res.status(400).json({ errors: errors.array() });
  } else {
    userController.store(req, res);
  }
});

// Rutas para editar el perfil
router.get('/profile-edit/:idPerfil', function (req, res, next) {
  userController.edit(req, res);
});

router.post("/update", validations, function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si hay errores de validación, manejarlos adecuadamente
    return res.status(400).json({ errors: errors.array() });
  } else {
    userController.update(req, res);
  }
});

// Ruta para el logout
router.post('/logout', function (req, res, next) {
  userController.logout(req, res);
});

module.exports = router;
