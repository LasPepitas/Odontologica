import expressOpenIDConnect from 'express-openid-connect';
const requiresAuth = expressOpenIDConnect.requiresAuth;
import { Router } from 'express';
const router = Router();

router.get('/check', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
    const user = req.oidc.user;
    res.json(user);
});

router.get('/get-data-user', (req, res) => {
    const user = req.oidc.user;
    console.log(user);
    res.json(user);
});
export default router;
