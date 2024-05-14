export const checkDentistRole = (req, res, next) => {
    if (req.user.role === 'dentist') {
        next();
    } else {
        return res.status(403).json({ error: 'Forbidden' });
    }
};
