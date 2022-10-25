const router = require('express').Router();
const { Calorie, User} = require('../models');
const sequelize = require('../config/connection');

// router.get('/', (req, res) => {
//     calories.findAll({
//       attributes: [
//         'id',
//         'post_url',
//         'title'
//       ],
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'calorie_text', 'post_id', 'user_id', 'created_at'],
      
//         },
//         {
//           model: User,
//           attributes: ['username']
//         }
//       ]
//     })
//       .then(dbPostData => {
//         // pass a single post object into the homepage template
//         console.log(dbPostData[0]);
//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('homepage', { posts });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

// router.get('/', (req, res) => {
//     console.log(req.session);
  
//     // other logic...
// });

module.exports = router;
