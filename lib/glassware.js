
var config = require('./config'),
    googleapis = require('googleapis'),
    googleuser = require('./googleuser');

var Glassware = module.exports = {

    /**
     * generate oauth client
     *
     * @param {String} [code]
     * @param {Function} callback(err, client)
     * @return {Object}
     */
    generateClient: function(){

        var code = arguments.length > 1 ? arguments[0] : null;
        var callback = arguments.length > 1 ? arguments[1] : arguments[0];
        var client = new googleapis.OAuth2Client(config.clientId, config.clientSecret, config.redirectUrl);

        if (code){
            googleuser.findUser(code, function(err, user){
                if (!!err){
                    callback(err);
                } else if (!user){
                    client.getToken(code, function(err, credentials){
                        if (!!err || !credentials){
                            callback(err || 'cannot retrieve credentials');
                        } else {
                            client.credentials = credentials;
                            callback(undefined, client);
                        }
                    });
                } else {
                    client.credentials = user.credentials;
                    callback(undefined, client);
                }
            });
        } else {
            callback(undefined, client);
        }

    }

};

