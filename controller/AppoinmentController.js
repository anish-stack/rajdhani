const Appointment = require('../models/AppoinmentModel');

// Create Appointment
exports.createAppointment = async (req, res) => {
    try {
        const {
            TypeOfService,
            selectDate,
            selectTime,
            BasicDetailsOfCustomer
        } = req.body;

        // Check if any field is empty
        if (!TypeOfService || !selectDate || !selectTime || !BasicDetailsOfCustomer) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new appointment
        const newAppointment = new Appointment({
            TypeOfService,
            selectDate,
            selectTime,
            BasicDetailsOfCustomer
        });

        // Save appointment to database
        await newAppointment.save();

        res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get All Appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error getting appointments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get Single Appointment by ID
exports.getSingleAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json(appointment);
    } catch (error) {
        console.error("Error getting appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update Appointment by ID
exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment updated successfully", appointment: updatedAppointment });
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete Appointment by ID
exports.deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
