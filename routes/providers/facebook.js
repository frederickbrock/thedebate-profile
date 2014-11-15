
var passport = require('passport');
var FaceBookStrategy = require('passport-facebook').Strategy;


module.exports = function(router,config){
    
    passport.use(new FacebookStrategy({
                        clientID: config.facebook.clientID,
                        clientSecret: config.facebook.clientSecret,
                        callbackURL: "http://www.example.com/auth/facebook/callback"
                 },

                 function(accessToken, refreshToken, profile, done) {
                        console.log('inside callback');
                 }
    ));
    
    //this is the callback after user has authenticated to facebook
    router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
    
    //this route redirects to facebook
    router.get('/auth/facebook', passport.authenticate('facebook'));
};


    