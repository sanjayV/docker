var HistoryModel = require('../models/history');

/**
 * ProtoType methods.
 */
HistoryController = {
    server: null,

    /**
     *  Handle the User Listing  Get Request here
     *  Fetch user listing from  the DB
     */
    ListByIP: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        HistoryModel.find({ user_email: req.params.user_email }).sort({ view_date: 'desc' }).select().exec(function(error, users) {
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
    Add: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var historyData = {
            title: req.params.title,
            desc: req.params.desc,
            user_email: req.params.user_email,
            image_url: req.params.image_url,
            video_object: req.params.video_object,
            view_date: new Date()
        };

        var historySchema = new HistoryModel(historyData);
        historySchema.save(function(error, data) {
            if (error) {
                // Send Error Message as response.
                res.send(error.message);
                return;
            } else {
                res.send({ 'success': data });
                return;
            }
        });
    },

    /**
     * Dummy get city
     */
    getCity: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var json = [{
            "airport_data": "Indira Gandhi International Airport",
            "iata": "DEL",
            "city": "New Delhi",
            "country": "India",
            "label": "New Delhi, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "DEL",
            "category": "Top Cities"
        }, {
            "airport_data": "Chhatrapati Shivaji International Airport",
            "iata": "BOM",
            "city": "Mumbai",
            "country": "India",
            "label": "Mumbai, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "BOM",
            "category": "Top Cities"
        }, {
            "airport_data": "Bengaluru International Airport",
            "iata": "BLR",
            "city": "Bangalore",
            "country": "India",
            "label": "Bangalore, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "BLR",
            "category": "Top Cities"
        }, {
            "airport_data": "Dabolim Goa International Airport",
            "iata": "GOI",
            "fph_cd_s": "GOI",
            "fph_cty_s": "IN",
            "city": "Goa",
            "country": "India",
            "label": "Goa, India ",
            "isDom": "Y",
            "category": "Top Cities"
        }, {
            "airport_data": "Madras,Chennai International Airport",
            "iata": "MAA",
            "city": "Chennai",
            "country": "India",
            "label": "Chennai, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "MAA",
            "category": "Top Cities"
        }, {
            "airport_data": "Netaji Subhash Chandra Bose International Airport",
            "iata": "CCU",
            "city": "Kolkata",
            "country": "India",
            "label": "Kolkata, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "CCU",
            "category": "Top Cities"
        }, {
            "airport_data": "Rajiv Gandhi International Airport",
            "iata": "HYD",
            "city": "Hyderabad",
            "country": "India",
            "label": "Hyderabad, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "HYD",
            "category": "Top Cities"
        }, {
            "airport_data": "Pune Airport",
            "iata": "PNQ",
            "city": "Pune",
            "country": "India",
            "label": "Pune, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "PNQ",
            "category": "Top Cities"
        }, {
            "airport_data": "Sardar Vallabhbhai Patel International Airport",
            "iata": "AMD",
            "city": "Ahmedabad",
            "country": "India",
            "label": "Ahmedabad, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "AMD",
            "category": "Top Cities"
        }, {
            "airport_data": "Cochin International Airport Limited",
            "iata": "COK",
            "city": "Cochin",
            "country": "India",
            "label": "Cochin, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "COK",
            "category": "Top Cities"
        }, {
            "airport_data": "Jaipur Airport",
            "iata": "JAI",
            "city": "Jaipur",
            "country": "India",
            "label": "Jaipur, India ",
            "isDom": "Y",
            "fph_cty_s": "IN",
            "fph_cd_s": "JAI",
            "category": "Top Cities"
        }, {
            "airport_data": "Dubai International Airport",
            "iata": "DXB",
            "city": "Dubai",
            "country": "UAE",
            "label": "Dubai, UAE ",
            "isDom": "N",
            "fph_cty_s": "AE",
            "fph_cd_s": "DXB",
            "category": "Top Cities"
        }, {
            "airport_data": "Changi Airport",
            "iata": "SIN",
            "city": "Singapore",
            "country": "Singapore",
            "label": "Singapore, Singapore ",
            "isDom": "N",
            "fph_cty_s": "SG",
            "fph_cd_s": "SIN",
            "category": "Top Cities"
        }, {
            "airport_data": "Suvarnabhumi Airport",
            "iata": "BKK",
            "city": "Bangkok",
            "country": "Thailand",
            "label": "Bangkok, Thailand ",
            "isDom": "N",
            "fph_cty_s": "TH",
            "fph_cd_s": "BKK",
            "category": "Top Cities"
        }, {
            "airport_data": "All Airports",
            "iata": "NYC",
            "city": "New York",
            "country": "US",
            "label": "New York, US - All Airports ",
            "isDom": "N",
            "fph_cty_s": "US",
            "fph_cd_s": "NYC",
            "category": "Top Cities"
        }];
        res.send(json);
    },

    /**
     * Dummy get flight
     */
    getFlight: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var json = [{
            "name": "Air India",
            "code": "AI",
            "available_class": [1, 2]
        }, {
            "name": "Jet Airways",
            "code": "9W",
            "available_class": [1, 2]
        }, {
            "name": "Vistara",
            "code": "UK",
            "available_class": [1, 2]
        }, {
            "name": "IndiGo",
            "code": "6E",
            "available_class": [1, 2]
        }, {
            "name": "SpiceJet",
            "code": "SG",
            "available_class": [1, 2]
        }, {
            "name": "GoAir",
            "code": "G8",
            "available_class": [1, 2]
        }, {
            "name": "AirAsia",
            "code": "I5",
            "available_class": [1, 2]
        }, {
            "name": "Air Pegasus",
            "code": "OP",
            "available_class": [1, 2]
        }, {
            "name": "Air Costa",
            "code": "LB",
            "available_class": [1, 2]
        }, {
            "name": "TruJet",
            "code": "2T",
            "available_class": [1, 2]
        }];
        res.send(json);
    },

    /**
     * Dummy get available flight
     */
    getAvailableFlight: function(req, res, next) {
        res.header('Content-Type', 'application/json');
        var json = [{
            "flight": {
                "name": "Air India",
                "code": "AI",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "07:30",
            "arrival_time": "11:45",
            "price": {
                "adult": {
                    "1": 6000,
                    "2": 3000
                },
                "child": {
                    "1": 3000,
                    "2": 1000
                }
            },
            "stop": {},
            "is_refundable": false,
            "meal_included": false
        }, {
            "flight": {
                "name": "Jet Airways",
                "code": "9W",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "11:00",
            "arrival_time": "2:35",
            "price": {
                "adult": {
                    "1": 7000,
                    "2": 3500
                },
                "child": {
                    "1": 3600,
                    "2": 2000
                }
            },
            "stop": {
                "JAI": "12:45"
            },
            "is_refundable": false,
            "meal_included": false
        }, {
            "flight": {
                "name": "Vistara",
                "code": "UK",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "08:30",
            "arrival_time": "17:45",
            "price": {
                "adult": {
                    "1": 8000,
                    "2": 5000
                },
                "child": {
                    "1": 4000,
                    "2": 3000
                }
            },
            "stop": {
                "JAI": "8:45",
                "PUN": "11:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "IndiGo",
                "code": "6E",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "09:45",
            "arrival_time": "19:45",
            "price": {
                "adult": {
                    "1": 12000,
                    "2": 8000
                },
                "child": {
                    "1": 6000,
                    "2": 3000
                }
            },
            "stop": {
                "JAI": "8:45",
                "PUN": "11:00"
            },
            "is_refundable": false,
            "meal_included": true
        }, {
            "flight": {
                "name": "SpiceJet",
                "code": "SG",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "12:30",
            "arrival_time": "20:25",
            "price": {
                "adult": {
                    "1": 13000,
                    "2": 900
                },
                "child": {
                    "1": 6000,
                    "2": 3000
                }
            },
            "stop": {
                "JAI": "15:45",
                "PUN": "17:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "GoAir",
                "code": "G8",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "08:30",
            "arrival_time": "20:00",
            "price": {
                "adult": {
                    "1": 16000,
                    "2": 1000
                },
                "child": {
                    "1": 8000,
                    "2": 5000
                }
            },
            "stop": {
                "JAI": "9:45",
                "BOM": "13:30",
                "PUN": "19:30"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "AirAsia",
                "code": "I5",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "07:30",
            "arrival_time": "20:45",
            "price": {
                "adult": {
                    "1": 18000,
                    "2": 1300
                },
                "child": {
                    "1": 9000,
                    "2": 5000
                }
            },
            "stop": {
                "JAI": "9:15",
                "PUN": "13:10",
                "BLR": "20:00"
            },
            "is_refundable": false,
            "meal_included": true
        }, {
            "flight": {
                "name": "Air Pegasus",
                "code": "OP",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "13:15",
            "arrival_time": "23:45",
            "price": {
                "adult": {
                    "1": 12000,
                    "2": 8000
                },
                "child": {
                    "1": 6000,
                    "2": 3000
                }
            },
            "stop": {
                "JAI": "8:45",
                "PUN": "11:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "Air Costa",
                "code": "LB",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "08:30",
            "arrival_time": "11:15",
            "price": {
                "adult": {
                    "1": 5000,
                    "2": 3000
                },
                "child": {
                    "1": 3000,
                    "2": 1500
                }
            },
            "stop": {},
            "is_refundable": false,
            "meal_included": false
        }, {
            "flight": {
                "name": "TruJet",
                "code": "2T",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "04:30",
            "arrival_time": "07:45",
            "price": {
                "adult": {
                    "1": 4400,
                    "2": 2500
                },
                "child": {
                    "1": 2200,
                    "2": 1700
                }
            },
            "stop": {},
            "is_refundable": false,
            "meal_included": false
        }, {
            "flight": {
                "name": "Air India",
                "code": "AI",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "11:30",
            "arrival_time": "24:00",
            "price": {
                "adult": {
                    "1": 18000,
                    "2": 8000
                },
                "child": {
                    "1": 9000,
                    "2": 5000
                }
            },
            "stop": {
                "JAI": "13:45",
                "PUN": "20:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "Jet Airways",
                "code": "9W",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "11:00",
            "arrival_time": "2:35",
            "price": {
                "adult": {
                    "1": 24000,
                    "2": 20000
                },
                "child": {
                    "1": 10000,
                    "2": 8000
                }
            },
            "stop": {
                "JAI": "12:45",
                "GOI": "19:45"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "Vistara",
                "code": "UK",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "08:30",
            "arrival_time": "23:45",
            "price": {
                "adult": {
                    "1": 36000,
                    "2": 22000
                },
                "child": {
                    "1": 18000,
                    "2": 12000
                }
            },
            "stop": {
                "JAI": "09:00",
                "PUN": "13:30",
                "GOI": "20:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "IndiGo",
                "code": "6E",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "09:45",
            "arrival_time": "19:45",
            "price": {
                "adult": {
                    "1": 20000,
                    "2": 15000
                },
                "child": {
                    "1": 12000,
                    "2": 8000
                }
            },
            "stop": {
                "JAI": "8:45",
                "PUN": "22:00"
            },
            "is_refundable": true,
            "meal_included": true
        }, {
            "flight": {
                "name": "SpiceJet",
                "code": "SG",
                "available_class": [1, 2]
            },
            "flight_from": "DEL",
            "flight_to": "BOM",
            "journey_date": "2017-04-17",
            "departure_time": "12:30",
            "arrival_time": "20:25",
            "price": {
                "adult": {
                    "1": 17000,
                    "2": 9000
                },
                "child": {
                    "1": 11000,
                    "2": 6000
                }
            },
            "stop": {
                "JAI": "15:45",
                "PUN": "17:00"
            },
            "is_refundable": true,
            "meal_included": true
        }];
        res.send(json);
    }
};

module.exports = HistoryController;
