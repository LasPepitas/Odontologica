import { Router } from 'express';
import User from '../models/user.model.js';
import { uploadImage } from '../utils/uploadImage.js';
const router = Router();

router.put('/:id', async (req, res) => {
    const { name, email, lastname, dni, phone, password } = req.body;
    try {
        const image = req.files?.image;
        let img_url = null;
        if (image) {
            const { tempFilePath } = image;
            const { secure_url } = await uploadImage(tempFilePath);
            img_url = secure_url;
        }
        const id_user = req.params.id;
        const user = await User.update(
            {
                name,
                email,
                lastname,
                dni,
                phone,
                password,
                img_url,
            },
            {
                where: {
                    id: id_user,
                },
            },
        );
        const userUpdated = await User.findByPk(id_user, {
            attributes: [
                'id',
                'name',
                'email',
                'lastname',
                'dni',
                'phone',
                'img_url',
            ],
        });

        res.json(userUpdated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
