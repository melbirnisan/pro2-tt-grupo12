const productController = {
    product: function(req,res){
        return res.render('product')
    },
    add: function(req,res){
        return res.render('product-add')
    },
};

module.exports = productController;