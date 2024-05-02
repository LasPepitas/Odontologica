import { Router } from 'express';
import Auth from '../controllers/auth.controller.js';
import { validateJWT } from '../middlewares/validate-jwt.js';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from getUser');
});

router.post('/login', Auth.login);
router.post('/register', Auth.register);

export default router;
