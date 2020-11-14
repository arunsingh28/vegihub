
// module.exports = {
//     ensureAuthenticated : function(req,res,next){
//         console.log('\nensurr\n')
//         if(req.isAuthenticated()){
//             return next();
//         }
//         req.flash('error_msg','Please Login First to View Account')
//         res.redirect('/login')
//     },
//     forwardAuthenticated : function(req,res,next){
//         console.log('\nforward\n')
//         if(!req.isAuthenticated()){
//             return next();
//         }
//         req.flash('fade_msg','You Are Logged in')
//         res.redirect('/welcome')
//     }
// }

module.exports = {
    ensureAuthenticated: function(req, res, next) {
      console.log('\nensurr\n')
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('/login');
    },
    forwardAuthenticated: function(req, res, next) {
      console.log('\nForward\n')
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/welcome');      
    }
  };
  