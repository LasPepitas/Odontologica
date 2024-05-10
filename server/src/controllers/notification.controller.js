import NotificationService from '../services/notification.services';

const NotificationController = {};

NotificationController.send = async (req, res) => {
    try {
        const newNotification = await NotificationService.create(req.body);
        return res.status(201).json(newNotification);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default NotificationController;
