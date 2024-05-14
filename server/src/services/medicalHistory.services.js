import sequelize from '../config/database.js';
import MedicalHistory from '../models/medicalHistory.model.js';
import User from '../models/user.model.js';
import { uploadImage } from '../utils/uploadImage.js';

const MedicalHistoryService = {};

MedicalHistoryService.create = async ( medicalHistory, image_url = null) => {
    const {
        id_user,
        id_dentist,
        id_appointment,
        recommendations
    } = medicalHistory;

    if (!id_user || !id_dentist || !id_appointment || !recommendations) {
        throw new Error('All fields are required for the medical history');
    }

    let medical_history_image = null;
    if (image_url) {
        const { tempFilePath } = image_url;
        const { secure_url } = await uploadImage(tempFilePath);
        medical_history_image = secure_url;
        
    }
    
    const newMedicalHistory = await MedicalHistory.create({
        id_user,
        id_dentist,
        id_appointment,
        recommendations,
        image_url: medical_history_image
    })
    return newMedicalHistory;
};


//historial medico por id del paciente 
MedicalHistoryService.findAllByUser= async (id) => {
    const userExist = await User.findByPk(id);
    if (!userExist) {
        throw new Error('User not found');
    }
    const medical_history = await MedicalHistory.findAll({
        where: { id_user: id },
    });
    return medical_history;
};




export default MedicalHistoryService;