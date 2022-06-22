const event = require('../models/eventModel')

// GET - All events registered in the database

function getAllEvents(req, res) {
    event.find({}).exec((err, eventdata) => {
        if(err) {
            res.status(404).send(err.message);
        }
        return res.status(200).send(eventdata);
    });
}

// GET - All events that are online

function getOnlineEvents(req, res) {
    event.find({})
        .where("isOnline").equals(true)
        .exec((err, events) => {
            if(err) {
                res.status(404).send(err.message);
            }
            return res.status(200).send(events);
        });
}

// GET - All events that are phisical

function getPhysicalEvents(req, res) {
    event.find({})
        .where("isOnline").equals(false)
        .exec((err, events) => {
            if(err) {
                res.status(404).send(err.message);
            }
            return res.status(200).send(events);
        });
}

// GET - Search an event based in its location

function getEventFromSanFrancisco(req, res) {
    event.find({})
        .where("location").equals("San Francisco, USA")
        .sort("desc")
        .exec((err, events) => {
        if(err) {
            res.status(404).send(err.message);
        }
        return res.status(200).send(events);
    });
}

// POST - Creates a new event in the database4

function postAnEvent(req, res) {
    const newEvent = new event(req.body);
    newEvent.save((err, eventData) => {
        if (err) {
            return res.status(400).send({ message: 'Error saving event', error: err });
        }
        return res.status(200).send(eventData);
    });
}

module.exports = {
    getAllEvents,
    getEventFromSanFrancisco,
    getPhysicalEvents,
    getOnlineEvents,
    postAnEvent
};