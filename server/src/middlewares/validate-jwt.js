import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.config.js';

export const validateJWT = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};
