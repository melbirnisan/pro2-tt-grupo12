const datos = require("../database/models" );
const op = datos.Sequelize.Op
const{validationResult} = require("express-validator")

const productController = {
    index: function(req,res){

        let id = req.params.id;
        let criterio = {
            include: [
              {association: "usuario"}, 
              {association: "comentarios", 
                include: [
                    {association: "usuario"}
                ] }
            ]
        }

        datos.Producto.findByPk(id, criterio) 
        .then(function (results) {
            return res.render('product', { productos: results });
        })
        .catch(function (error) {
            return console.log(error);
        });
    },

    store: function (req, res) {
        let form = req.body;
        let errors = validationResult(req); 

        if (errors.isEmpty()){
            datos.Producto.create(form)
            .then(function (results) {
                return res.redirect('/product/id/' + results.id);
            })
            .catch(function (error) {
                return console.log(error);
            })
        } else {
            return res.render("product-add", {
              errors: errors.mapped(),
              old: req.body
          })
          };
        
    },

    add: function(req,res){
        if (req.session.user != undefined) {
            return res.render('product-add', {profile : datos.usuario})
        }
        else {
            return res.redirect("/users/login");
        }
    },
};

module.exports = productController;