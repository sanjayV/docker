var mongoose = require("mongoose");

var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectID;

var Later = new Schema({
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
    created_date: {
        type: Date,
        required: true,
        trim: true
    }
});

var laterM = mongoose.model('Later', Later);

module.exports = laterM;