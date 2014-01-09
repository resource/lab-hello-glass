
module.exports = {

    cookieMaxAge : 30 * 24 * 60 * 60,
    cookieSecret : 'dirtysocks',
    mongo        : process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test?w=1',
    clientId     : 'yourClientId',
    clientSecret : 'yourClientSecret',
    baseUrl      : 'yourBaseUrl',
    redirectUrl  : 'yourRedirectUrl'

};

