var LaterModel = require('../models/later');

/**
 * ProtoType methods.
 */
LaterController = {
    server: null,

    /**
     *  Handle the User Listing  Get Request here
     *  Fetch user listing from  the DB
     */
    GetLaterVideo: function(req, res, next) {
        LaterModel.find({ user_email: req.params.user_email }).select().exec(function(error, users) {
            if (error) {
                //if error occures
                res.send(error);
            }
            //user collectio's json data
            res.send(users);
        });
    },

    /**
     *  Handle the Add User Post Request here
     *  save into the DB
     */
    AddLater: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var laterData = {
            title: req.params.title,
            desc: req.params.desc,
            user_email: req.params.user_email,
            image_url: req.params.image_url,
            video_object: req.params.video_object,
            created_date: new Date()
        };

        var laterSchema = new LaterModel(laterData);
        laterSchema.save(function(error, data) {
            if (error) {
                // Send Error Message as response.
                res.send(error.message);
                return;
            } else {
                res.send({ 'success': data });
                return;
            }
        });
    }
};

module.exports = LaterController;
