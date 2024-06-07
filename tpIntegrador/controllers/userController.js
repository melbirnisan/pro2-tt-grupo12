const datos = require("../database/models" );

const userController = {
    register: function(req,res){
        return res.render('register')
    },
    login: function(req,res){
        return res.render('login')
    },
    profile: function (req, res) {
        return res.render("profile", {profile : datos.usuario, productos: datos.productos} );
      }, 
    edit: function (req,res) {
        return res.render('profile-edit', {profile : datos.usuario})
    }
};

module.exports = userController;