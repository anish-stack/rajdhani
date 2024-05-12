const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    TypeOfService: {
        type: String,
        required: true
    },
    selectDate: {
        type: String,
        required: true
    },
    selectTime: {
        type: String,
        required: true
    },
    BasicDetailsOfCustomer: {
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        ContactNumber: {
            type: Number,
            required: true
        },
        Address: {
            type: String
        },
        AnyNote: {
            type: String
        }
    }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
