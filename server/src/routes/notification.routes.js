import Route from 'express';
import Notification from '../models/notification.model.js';

const router = Route();

router.post('/send', async (req, res) => {
    const { title, content, id_user } = req.body;

    if (!title || !content || !id_user) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    const newNotification = await Notification.create({
        title,
        content,
        id_user,
    });
    return res.status(201).json(newNotification);
});

export default router;
