import AppointmentService from '../services/appointment.services.js';
const Appointment = {};

Appointment.create = async (req, res) => {
    try {
        const appointment = await AppointmentService.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.findAll = async (req, res) => {
    try {
        const appointments = await AppointmentService.findAll();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.findOne = async (req, res) => {
    try {
        const appointment = await AppointmentService.findOne(req.params.id);
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.update = async (req, res) => {
    try {
        const appointment = await AppointmentService.update(
            req.params.id,
            req.body,
        );
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.delete = async (req, res) => {
    try {
        const appointment = await AppointmentService.delete(req.params.id);
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


Appointment.findAllByDentist = async (req, res) => {
    try {
        const appointments = await AppointmentService.findAllByDentist(req.params.id);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default Appointment;
