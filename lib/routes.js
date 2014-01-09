
var glassware  = require('./glassware'),
    googleuser = require('./googleuser'),
    googleapis = require('googleapis');

var Routes = module.exports = {

    /**
     * initialize user (express router interception)
     *
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     */
    initialize: function(req, res, next){

        if (req.session && req.session.userid){
            googleuser.findUser(req.session.userid, function(err, user){
                if (!!err){
                    res.render('error', { text: err });
                } else if (!user){
                    Routes.install(res);
                } else {
                    glassware.generateClient(user.code, function(err, client){
                        if (err){
                            res.render('error', { text: err });
                        } else {
                            req.client = client;
                            next();
                        }
                    });
                }
            });
        } else {
            Routes.install(res);
        }

    },
 
    /**
     * install glassware on users timeline (redirect to permission auth screen)
     *
     * @param {Object} res
     * @return void
     */
    install: function(res){

        glassware.generateClient(function(err, client){
            if (err){
                res.render('error', { text: err });
            } else {
                res.redirect(client.generateAuthUrl({
                    access_type : 'offline',
                    scope       : 'https://www.googleapis.com/auth/glass.timeline'
                }));
            }
        });

    },

    /**
     * confirm glassware installation (from glassware oauth callback)
     *
     * @param {Object} req
     * @param {Object} res
     */
    confirm: function(req, res){

        if (req.query.code){
            glassware.generateClient(req.query.code, function(err, client){
                if (err){
                    res.render('error', { text: err });
                } else {
                    googleuser.saveUser({
                        userid : req.sessionID,
                        code   : req.query.code,
                        credentials : client.credentials
                    }, function(err){
                        if (!!err){
                            res.render('error', { text: err });
                        } else {
                            req.session.userid = req.sessionID;
                            res.redirect('/');
                        }
                    });
                }
            });
        } else {
            res.render('error', { text: 'missing code' });
        }

    },

    /**
     * say hello
     *
     * @param {Object} req
     * @param {Object} res
     */
    hello: function(req, res){

        // define a timeline card
        var item = {
            text: 'Hello Glass!',
            menuItems: [{ action: 'DELETE' }]
        };

        // decide what do with the mirror response
        var callback = function(err, timelineItem){
            if (!!err){
                res.render('error', { text: err });
            } else {
                res.render('index', { text: item.text, data: timelineItem });
            }
        };

        // insert a card into the timeline
        googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
            if (!!err){
                callback(err);
            } else {
                mirrorClient
                    .mirror
                    .timeline
                    .insert(item)
                    .withAuthClient(req.client)
                    .execute(callback);
            }
        });

    }

};

