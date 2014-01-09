
var googleapis = require('googleapis');

var Mirror = module.exports = {

    /**
     * timeline items
     * @var {Object}
     */
    timeline: {

        /**
         * delete a timeline item
         *
         * @param {Object} client
         * @param {String} itemId
         * @param {Function} callback(err)
         */
        delete: function(client, itemId, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.delete(itemId).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * get a timeline item
         *
         * @param {Object} client
         * @param {String} itemId
         * @param {Function} callback(err)
         */
        get: function(client, itemId, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.get(itemId).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * insert a new timeline item
         *
         * @param {Object} client
         * @param {Object} item
         * @param {Function} callback(err, item)
         */
        insert: function(client, item, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.insert(item).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * update a timeline item
         *
         * @param {Object} client
         * @param {Object} item
         * @param {Function} callback(err, item)
         */
        update: function(client, item, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.insert(item).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * list timeline items
         *
         * @param {Object} client
         * @param {String} [bundleId]
         * @param {Function} callback(err, item)
         */
        list: function(client){

            var bundleId, callback, param;

            bundleId = (arguments.length > 2) ? arguments[1] : undefined;
            callback = (arguments.length > 2) ? arguments[2] : arguments[1];
            param = bundleId ? { bundleId: bundleId } : undefined;

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.list(param).withAuthClient(client).execute(callback);
                }
            });

        }

    },

    /**
     * timeline contacts
     * @var {Object}
     */
    contacts: {

        /**
         * delete a timeline contact
         *
         * @param {Object} client
         * @param {String} contactId
         * @param {Function} callback(err)
         */
        delete: function(client, contactId, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.delete(contactId).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * get a timeline contact
         *
         * @param {Object} client
         * @param {String} contactId
         * @param {Function} callback(err)
         */
        get: function(client, contactId, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.get(contactId).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * insert a new timeline contact
         *
         * @param {Object} client
         * @param {Object} contact
         * @param {Function} callback(err, contact)
         */
        insert: function(client, contact, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.insert(contact).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * update a timeline contact
         *
         * @param {Object} client
         * @param {Object} contact
         * @param {Function} callback(err, contact)
         */
        update: function(client, contact, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.insert(contact).withAuthClient(client).execute(callback);
                }
            });

        },

        /**
         * list timeline items
         *
         * @param {Object} client
         * @param {Function} callback(err, contacts)
         */
        list: function(client, callback){

            googleapis.discover('mirror', 'v1').execute(function(err, mirrorClient){
                if (!!err){
                    callback(err);
                } else {
                    mirrorClient.mirror.timeline.list().withAuthClient(client).execute(callback);
                }
            });

        }

    }

};

