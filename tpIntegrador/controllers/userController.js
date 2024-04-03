const userController = {
    register: function(req,res){
        return res.render('register')
    },
    login: function(req,res){
        return res.render('login')
    },
    profile: function (req, res) {
        return res.render("profile");
      }, 
    edit: function (req,res) {
        return res.render('profile-edit')
    }
};

module.exports = userController;