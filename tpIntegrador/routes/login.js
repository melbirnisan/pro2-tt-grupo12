var express = require("express");
var router = express.Router();
var loginController = require("../controllers/loginController");

/* GET home page. */
router.get("/register", loginController.register);

router.get("/login", loginController.login);


module.exports = router;
