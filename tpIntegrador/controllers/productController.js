const datos = require("../database/models" );
const op = datos.Sequelize.Op

const productController = {
    index: function(req,res){

        const id = req.params.id;

        datos.Producto.findByPk(id) 
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