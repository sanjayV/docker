/*jslint node: true, stupid: true */
'use strict';
const validator = require('../middleware/validator'),
    REST_URL = '/task',
    REST_URL_WITH_ID = '/task/:id',
    todoController = require('../controllers/todo'),
    router = function (server) {
        function respond(req, res, next) {
            res.send('API server working :)');
        }

        server.use(function (req, res, next) {
            validator(req, res, next);
        });

        server.get('/data', respond);
        server.get(REST_URL, todoController.GetTodo);
        server.get(REST_URL_WITH_ID, todoController.GetTodoById);
        server.post(REST_URL, todoController.AddTodo);
        server.put(REST_URL_WITH_ID, todoController.UpdateTodo);
        server.del(REST_URL_WITH_ID, todoController.DeleteTodo);
    };

module.exports = router;
