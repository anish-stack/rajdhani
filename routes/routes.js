const express = require('express');
const router = express.Router();
const { createAppointment, getAllAppointments, getSingleAppointment, updateAppointment, deleteAppointment } = require('../controller/AppoinmentController');

// Create Appointment
router.post('/create-Appointment', createAppointment);

// Get All Appointments
router.get('/Get-Appointments', getAllAppointments);

// Get Single Appointment by ID
router.get('/Get-Appointments/:id', getSingleAppointment);

// Update Appointment by ID
router.put('/update-Appointments/:id', updateAppointment);

// Delete Appointment by ID
router.delete('/Delete-Appointments/:id', deleteAppointment);

module.exports = router;
