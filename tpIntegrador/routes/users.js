var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController'); // Asegúrate de que este es el nombre correcto

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .notEmpty().withMessage("Ingrese nombre de usuario").bail(),
  body("mail")
    .notEmpty().withMessage("Ingrese un e-mail").bail()
    .isEmail().withMessage("Este mail ya ha sido utilizado").bail(),
  body("contra")
    .notEmpty().withMessage("Ingrese una contraseña").bail()
    .isLength({ min: 4 }).withMessage("La contraseña debe tener mas de 4 caracteres")
];

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.index); // Usa el nombre correcto del controlador

router.get('/profile/id/:id', userController.index);

/* LOGIN mostrar formulario */
router.get('/login', userController.login);

// POST de login
router.post("/login", userController.loginUser);



/* GET para mostrar formulario register */
router.get('/register', userController.register);

/* POST para capturar la info del formulario */
router.post("/register", validations, userController.store);

// GET de editar perfil
router.get('/profile-edit/:idPerfil', userController.edit);

// POST para actualizar perfil
router.post("/update", validations, userController.update);

router.post('/logout', userController.logout);

router.get('/profile/id/:id', userController.otherProfile);

module.exports = router;
