const event = require('../models/eventModel')

// GET - All events registered in the database
function getAllEvents(req, res) {
    event.find({}).exec((err, eventdata) => {
        if(err) {
            res.status(404).send(err.message);
        }
        return res.send(eventdata);
    })
}

// POST - Creates a new event in the database
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
    postAnEvent
};