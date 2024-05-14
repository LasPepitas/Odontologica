import AppointmentService from '../services/appointment.services.js';
const Appointment = {};

Appointment.create = async (req, res) => {
    try {
        const appointment = await AppointmentService.create(
            req.body,
            req.files?.image,
        );
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
        const appointments = await AppointmentService.findAllByDentist(
            req.params.id,
        );
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.findAllByUser = async (req, res) => {
    try {
        const appointments = await AppointmentService.findAllByUser(
            req.params.id,
        );
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.updateStatus = async (req, res) => {
    try {
        const appointment = await AppointmentService.updateStatus(
            req.params.id,
            req.body.status,
        );
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.getAppointmentInfo = async (req, res) => {
    try {
        const completedInfo = await AppointmentService.getAppointmentInfo(
            req.params.id,
        );
        res.status(200).json(completedInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

Appointment.updatePayment = async (req, res) => {
    try {
        const appointment = await AppointmentService.updatePayment(
            req.params.id,
            req.body.payment,
        );
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default Appointment;
