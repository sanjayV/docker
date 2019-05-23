/**
 * Environment dependent configuration properties
 */
module.exports = {
    local: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'todo-local'
        },
        host: 'localhost',
        port: '7000',
        db_url: 'mongodb://dev_acc:devacc123@ds129010.mlab.com:29010/dev_acc',
        version: '1.0.0'
    },
    production: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'todo-production'
        },
        host: 'dev.accedoapp.com',
        port: process.env.PORT || 80,
        db_url: 'mongodb://dev_acc:devacc123@ds129010.mlab.com:29010/dev_acc',
        version: '1.0.0'
    }
}