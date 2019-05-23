'use strict';

const mongoose = require("mongoose"),
    restify = require('restify'),
    bunyan = require('bunyan'),
    routes = require('./routes/'),
    config = require('./config/config'),
    env = process.env.NODE_ENV || 'local';

mongoose.connect(config[env].db_url, {
    useMongoClient: true,
    /* other options */
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log("Database connection opened.");
});

const log = bunyan.createLogger({
    name: 'todoapi',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};

const server = restify.createServer({
    name: 'todoapi',
    log: log,
    formatters: {
        'application/json': function (req, res, body, cb) {
            res.setHeader('Cache-Control', 'must-revalidate');
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            return cb(null, JSON.stringify(body));
        }
    }
});

server.use(allowCrossDomain);
server.use(restify.bodyParser({mapParams: true}));
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.pre(restify.pre.sanitizePath());

// Default error handler. Personalize according to your needs.
server.on('uncaughtException', function (req, res, route, err) {
    if (!res.headersSent) {
        return res.send(500, {ok: false});
    }
    res.write("\n");
    res.end();
});

server.on('after', restify.auditLogger({log: log}));
routes(server);
server.listen(config[env].port, function () {
    console.log('%s listening at %s', server.name, server.url);
});
