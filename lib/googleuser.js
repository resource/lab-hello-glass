
var config = require('../lib/config'),
    mongoose = require('mongoose');

mongoose.connect(config.mongo);

var User = mongoose.model('User', new mongoose.Schema({
    userid      : String,
    code        : String,
    credentials : {}
}));

var GlassUser = module.exports = {

    /**
     * find mongodb user record
     *
     * @param {String} id (userid || code)
     * @param {Function} callback(err, user)
     */
    findUser: function(id, callback){

        User.findOne({ $or: [ { userid: id }, { code: id } ] }, function(err, user){
            if (!!err){
                callback(err);
            } else {
                callback(undefined, user);
            }
        });

    },

    /**
     * save mongodb user record
     *
     * @param {Object}
     * @param {Function} callback(err)
     */
    saveUser: function(user, callback){

        if (user.userid && user.code && user.credentials){
            User.update({ code: user.code }, user, { upsert: true }, function(err, num){
                if (!!err){
                    callback(err);
                } else {
                    callback();
                }
            });
        } else {
            callback('Invalid user object');
        }

    }

};

