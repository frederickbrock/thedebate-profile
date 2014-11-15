

var config = require('./config');
module.exports = (function(config){

    var pubnub = require("pubnub").init({
        "publish_key"   : config.pubnub.channels[0].publish_key,
        "subscribe_key" : config.pubnub.channels[0].subscribe_key,
        "origin" : "pubsub.pubnub.com",
        "ssl": "true"
    });
  
    console.log('subscribing to: ' + config.pubnub.channels[0].name)
    pubnub.subscribe({
        channel : config.pubnub.channels[0].name,
        message : function(m){console.log(m)}
    });
    
    
})(config)