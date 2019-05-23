var mongoose = require("mongoose");

var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectID;

var History = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: false,
        trim: true
    },
    user_email: {
        type: String,
        required: true,
        trim: true
    },
    image_url: {
        type: Object,
        required: true,
        trim: true
    },
    video_object: {
        type: Object,
        required: true,
        trim: true
    },
    view_date: {
        type: Date,
        required: true,
        trim: true
    }
});

var historyM = mongoose.model('History', History);

module.exports = historyM;