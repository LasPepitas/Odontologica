import { Router } from 'express';
import Appointment from '../controllers/appointment.controller.js';
import { checkDentistRole } from '../middlewares/validate-role.js';

const router = Router();

router.post('/', Appointment.create);
router.get('/', Appointment.findAll);
router.get('/:id', Appointment.findOne);
router.put('/:id', Appointment.update);
router.delete('/:id', Appointment.delete);
router.get('/dentist/:id', Appointment.findAllByDentist);
router.get('/user/:id', Appointment.findAllByUser);
router.put('/status/:id', Appointment.updateStatus);
router.put('/payment/:id', checkDentistRole, Appointment.updatePayment);
router.get('/info/:id', checkDentistRole, Appointment.getAppointmentInfo);

export default router;
