/**
* Created with thedebate-profile.
* User: frederickbrock
* Date: 2014-11-12
* Time: 07:31 AM
* To change this template use Tools | Templates.

*/
var config = require('../config.json');
var express = require('express');
var usergrid = require('usergrid');
var facebook = require('./providers/facebook');

module.exports = (function(config){

    var router = express.Router();
    
    router.get('/:profileid?', function(req, res) {
        if((_.isNull(req.params.profileid)) || (_.isBlank(req.params.profileid))){
        //TODO: process limit,skip and other filter params
            console.log("captured profile id");
        }else{
            console.log("captured profile id");
        }
     });

    router.post('/', function(req,res){
            var provider = req.body.provider,
             provider_id = req.body.provider_id,
                   email = req.body.email,
                username = req.body.username;
      
    });
        
        
    facebook.install(router, config);
        

    
    return router;    
})(config)

