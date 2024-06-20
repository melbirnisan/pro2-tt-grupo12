const datos = require("../database/models" );
const op = datos.Sequelize.Op

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

    add: function(req,res){
        return res.render('product-add', {profile : datos.usuario})
    },
};

module.exports = productController;