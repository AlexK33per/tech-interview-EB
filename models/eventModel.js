const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        prize: {
            type: Number,
            min: 0
        },
        available: {
            type: Boolean,
            required: true
        }
    }
);

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        required: true,
        default: null
    },
    tickets: [{
        type: ticketSchema,
        default: []
    }],
    start_date: {
        type: Date,
        required: true,
        min: Date.now()
    },
    end_date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        default: "No description provided."
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;