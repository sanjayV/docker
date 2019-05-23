'use strict';
const TodoModel = require('../models/todo');

/**
 * Todo Controller.
 */
const TodoController = {
    server: null,

    /**
     *  Handle the Todos Listing  Get Request here
     *  Fetch todos from  the DB
     *
     *  @param req Request
     *  @param res Response
     *  @param next
     */
    GetTodo: function (req, res, next) {
        TodoModel.find({}).select().exec(function (error, todos) {
            if (error) {
                //if error occures
                res.send(error);
            }
            //user collectio's json data
            res.send(todos);
        });
    },

    /**
     *  Handle the Todo by ID
     *
     *  @param req Request
     *  @param res Response
     *  @param next
     */
    GetTodoById: function (req, res, next) {
        TodoModel.find({_id: req.params.id}).select().exec(function (error, todo) {
            if (error) {
                //if error occures
                res.send(error);
            }
            //user collectio's json data
            res.send(todo);
        });
    },

    /**
     *  Handle the Add Todo Post Request here
     *  save into the DB
     *
     *  @param req Request
     *  @param res Response
     *  @param next
     */
    AddTodo: function (req, res, next) {
        res.header('Content-Type', 'application/json');
        var todoData = {
            name: req.params.name,
            description: req.params.description || "",
            dueDate: new Date(req.params.dueDate),
            priority: req.params.priority || 3,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        var todoSchema = new TodoModel(todoData);
        todoSchema.save(function (error, data) {
            if (error) {
                // Send Error Message as response.
                res.send(error.message);
                return;
            } else {
                res.send({'success': data});
                return;
            }
        });
    },

    /**
     *  Handle the Update Todo Put Request here
     *  save into the DB
     *
     *  @param req Request
     *  @param res Response
     *  @param next
     */
    UpdateTodo: function (req, res, next) {
        res.header('Content-Type', 'application/json');
        if (!req.params.id) {
            res.status(400);
            res.send({
                validationErrors: "No id provided."
            });
            return;
        }
        
        var id = req.params.id,
            todoData = {
                name: req.body.name,
                description: req.body.description || "",
                dueDate: new Date(req.body.dueDate),
                priority: req.body.priority || 3,
                updatedAt: new Date()
            };

        //var todoSchema = new TodoModel(todoData);
        TodoModel.findByIdAndUpdate(id, todoData, function (error, data) {
            // Handle the error using the Express error middleware
            if (error) return next(error);

            // Render not found error
            if (!data) {
                res.status(404);
                res.send({
                    validationErrors: "No Data exist for this id."
                });
                return;
            }

            res.send(data);
        });
    },

    /**
     *  Handle the Delete Todo Delete request here
     *  from DB
     *
     *  @param req Request
     *  @param res Response
     *  @param next
     */
    DeleteTodo: function (req, res) {
        res.header('Content-Type', 'application/json');
        if (!req.params.id) {
            res.status(400);
            res.send({
                validationErrors: "No id provided."
            });
            return;
        }

        TodoModel.findByIdAndRemove(new Object(req.params.id), function (err, todo) {
            if (err) {
                res.status(500);
                res.send({
                    validationErrors: "No Data exist for this id."
                });
                return;
            }

            res.send({
                status: true,
                data: "Todo: " + req.params.id + " deleted successfully"
            });
        });
    }
};

module.exports = TodoController;
