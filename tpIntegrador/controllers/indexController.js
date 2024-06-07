const datos = require("../database/models" );
const op = datos.Sequelize.Op;

const indexController = {
    index: function (req, res) {

      let filtrado = {
        order : [["nombreProducto", "ASC"]]
      }

        datos.Producto.findAll(filtrado)

        .then(function(results){
          //return res.send(results)
          return res.render("index", { title : "Home", productos : results });
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
        .then(function(result){

          return res.render("search-results", {title: "Search Results", productos : result});
        })
        .catch(function(error){
          console.log(error);
        })
      },
    };

  module.exports = indexController;