import { Router } from 'express';
import Appointment from '../controllers/appointment.controller.js';

const router = Router();

router.post('/', Appointment.create);
router.get('/', Appointment.findAll);
router.get('/:id', Appointment.findOne);
router.put('/:id', Appointment.update);
router.delete('/:id', Appointment.delete);

export default router;
