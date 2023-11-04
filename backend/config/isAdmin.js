const User = require("../models/users_schema")

// this control function is a middleware that checks whether a user is an admin or not 
module.exports.isAdmin = async function (req, res, next){

    const id = req.user._conditions._id;
    const user = await User.findById(id);
    // console.log(user.admin)
    if(user.admin){
      return  next();
    }

    res.redirect("/performance/feedback");
}