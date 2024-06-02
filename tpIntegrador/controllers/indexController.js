const datos = require("../database/models" );
const indexController = {
    index: function (req, res) {
        datos.Producto.findAll()
        .then(function(results){
          return res.render("index", { productos : results });
        })
        .catch(function(error){
          console.log(error);
        })
      },
      search: function (req, res) {
        datos.Producto.findAll()
        .then(function(results){
          return res.render("search-results", { productos : results});
        })
        .catch(function(error){
          console.log(error);
        })
      },
    };

  module.exports = indexController;