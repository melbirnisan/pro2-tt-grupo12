const datos = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
    index: function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
                { association: "usuario" },
                { association: "comentarios", include: [{ association: "usuario" }] }
            ],
            order: [[{ model: datos.Comentario, as: 'comentarios' }, 'createdAt', 'DESC']]
        };

        let condition = false;

        datos.Producto.findByPk(id, criterio)
            .then(function(results) {
                if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                    condition = true;
                }

                return res.render('product', { title: "Product", productos: results, comentarios: results.comentarios, condition: condition });
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    store: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            datos.Producto.create(form)
                .then(function(results) {
                    return res.redirect('/product/id/' + results.id);
                })
                .catch(function(error) {
                    return console.log(error);
                });
        } else {
            return res.render("product-add", {
                errors: errors.mapped(),
                old: req.body
            });
        }
    },

    add: function(req, res) {
        if (req.session.user != undefined) {
            return res.render('product-add', { profile: datos.usuario });
        } else {
            return res.redirect("/users/login");
        }
    },

    delete: function(req, res) {
        let form = req.body;
        let filtrado = {
            where: {
                id: form.id
            }
        };

        if (req.session.user != undefined) {
            let id = req.session.user.id;
            if (form.idUsuario == id) {
                datos.Producto.destroy(filtrado)
                    .then((result) => {
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        return console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/id/" + id);
            }
        } else {
            return res.redirect("/users/login");
        }
    },

    addComment: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let comentario = {
                idUsuario: req.session.user.id,
                idProducto: req.params.id,
                textoComentario: form.comentario
            };

            datos.Comentario.create(comentario)
                .then((result) => {
                    return res.redirect("/product/id/" + req.params.id);
                }).catch((err) => {
                    return console.log(err);
                });
        } else {
            let id = req.params.id;

            let condition = false;

            let criterio = {
                include: [
                    { association: "usuario" },
                    { association: "comentarios", include: [{ association: 'usuario' }] }
                ],
                order: [[{ model: datos.Comentario, as: 'comentarios' }, 'createdAt', 'DESC']]
            };

            datos.Producto.findByPk(id, criterio)
                .then(function(results) {
                    if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                        condition = true;
                    }

                    return res.render('product', { title: "Product", productos: results, comentarios: results.comentarios, condition: condition, errors: errors.mapped(), old: req.body });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },

    formUpdate: function(req, res) {
        let form = req.body;
        let criterio = {
            include: [
                { association: "usuario" }
            ]
        };

        datos.Producto.findByPk(form.id, criterio)
            .then(function(results) {
                return res.render('product-edit', { title: `Editar el producto ${results.nombreProducto}`, productos: results });
            })
            .catch((err) => {
                return console.log(err);
            });
    },

    edit: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let filtrado = {
                where: {
                    id: form.id
                }
            };

            if (req.session.user != undefined) {
                let id = req.session.user.id;

                if (form.idUsuario == id) {
                    datos.Producto.update(form, filtrado)
                        .then((result) => {
                            return res.redirect("/product/id/" + form.id);
                        }).catch((err) => {
                            return console.log(err);
                        });
                } else {
                    return res.redirect("/users/profile/id/" + id);
                }
            } else {
                return res.redirect("/users/login");
            }
        } else {
            let criterio = {
                include: [
                    { association: "usuario" }
                ]
            };

            datos.Producto.findByPk(form.id, criterio)
                .then(function(results) {
                    return res.render('product-edit', { title: "Edit Product", errors: errors.mapped(), old: req.body, productos: results });
                })
                .catch((err) => {
                    return console.log(err);
                });
        }
    }
};

module.exports = productController;
