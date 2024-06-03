const datos = require("../database/models" );
const op = datos.Sequelize.Op;

const indexController = {
    index: function (req, res) {
        datos.Producto.findAll()
        .then(function(results){
          //return res.send(results)
          return res.render("index", { productos : results });
        })
        .catch(function(error){
          console.log(error);
        })
      },
      search: function (req, res) {

        let buscado = req.query.search;

        let filtrado = {
          where: {
            nombreProducto: {[op.like]: "%" + buscado + "%"}
          }
        }

        datos.Producto.findAll(filtrado)
        .then(function(results){

          return res.render("search-results", {productos : results});
        })
        .catch(function(error){
          console.log(error);
        })
      },
    };

  module.exports = indexController;