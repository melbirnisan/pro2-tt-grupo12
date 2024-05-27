const datos = require("../database/models" );
const productController = {
    product: function(req,res){
        return res.render('product', {productos: datos.productos })
    },
    add: function(req,res){
        return res.render('product-add', {profile : datos.usuario})
    },
};

module.exports = productController;