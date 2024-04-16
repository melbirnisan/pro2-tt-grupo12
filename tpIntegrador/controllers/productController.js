const datos = require("../db/database");

const productController = {
    product: function(req,res){
        return res.render('product', {profile : datos.usuario, })
    },
    add: function(req,res){
        return res.render('product-add', {profile : datos.usuario})
    },
};

module.exports = productController;