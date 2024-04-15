const datos = require("../db/database");

const indexController = {
    index: function (req, res) {
        return res.render("index", {profile : datos.usuario});
      },
    search: function (req, res) {
      return res.render("search-results", {profile : datos.usuario});
    }
  };

  module.exports = indexController;