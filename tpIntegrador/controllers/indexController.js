const datos = require("../db/database");

const indexController = {
    index: function (req, res) {
        return res.render("index", { productos : datos.productos});
        console.log(datos.productos)
      },
    search: function (req, res) {
      return res.render("search-results", {profile : datos.usuario, productos : datos.productos});
    }
  };

  module.exports = indexController;