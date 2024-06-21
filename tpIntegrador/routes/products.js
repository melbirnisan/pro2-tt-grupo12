var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const { body } = require('express-validator');
const validations = [
    body("nombreProducto")
        .notEmpty().withMessage("El campo nombre es obligatorio, ingresa un nombre").bail(),
    body("descripcion")
        .notEmpty().withMessage("El campo descrpcion es obligatorio, ingresa una descripcion").bail(),
    body("fotoProducto")
        .notEmpty().withMessage("El campo imagen es obligatorio, ingresa una imagen").bail(),


]

router.get("/id/:id", productController.index);

router.get("/add", productController.add);

router.post("/add", validations, productController.store)

module.exports = router; 
