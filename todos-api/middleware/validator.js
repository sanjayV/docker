/*jslint node: true, stupid: true */
'use strict';
const REST_URL = '/task',
    REST_URL_WITH_ID = '/task/:id',
    validator = function (req, res, next) {

        if ((req.route.path === REST_URL
            || req.route.path === REST_URL_WITH_ID)
            && (req.route.method.toLowerCase() === 'post'
            || req.route.method.toLowerCase() === 'put')
            && req.params) {
            var errorArr = [];
            errorArr = require('name', req.params.name, errorArr);
            errorArr = validDate('dueDate', req.params.dueDate, errorArr);

            if (errorArr.length) {
                res.status(500);
                res.send({
                    errors: errorArr
                });
                return;
            }
        }
        next();
    };

function require(key, value, errorArr) {
    const error = {};
    if (!value) {
        error[key] = {
            "message": "Validation error: \"null\" Rule \"required(true)\" failed.",
            "rule": "required"
        }
        errorArr.push(error);
    }
    return errorArr;
}

function validDate(key, date, errorArr) {
    const validDatePattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
        error = {};
    if (!validDatePattern.test(date)) {
        error[key] = {
            "message": "Validation error: \"null\" is not of type \"date\"",
            "rule": "date"
        }
        errorArr.push(error);
    }
    return errorArr;
}

module.exports = validator;
