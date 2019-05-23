'use strict';
/**
 * Todo Model Schema
 * */
const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    Todo = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: false,
            trim: true
        },
        dueDate: {
            type: Date,
            required: true,
            trim: true
        },
        priority: {
            type: Number,
            required: true,
            trim: true,
            default: 3
        },
        createdAt: {
            type: Date,
            required: true,
            trim: true
        },
        updatedAt: {
            type: Date,
            required: true,
            trim: true
        }
    });

module.exports = mongoose.model('Todo', Todo);