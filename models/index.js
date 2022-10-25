const User = require("./hello");
//const Post = require("./Post");


// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  module.exports = { User, Post};