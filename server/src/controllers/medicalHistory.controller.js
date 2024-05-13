import MedicalHistoryService from "../services/medicalHistory.services.js";
const MedicalHistoryController = {};


MedicalHistoryController.create = async (req, res) => {
    try {
        const medicalHistory = await MedicalHistoryService.create(
            req.body, 
            req.files?.image,
        );
        res.status(201).json(medicalHistory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

MedicalHistoryController.findAllByUser = async (req, res) => {
    try {
        const medicalHistory = await MedicalHistoryService.findAllByUser(
            req.params.id
        );
        res.status(200).json(medicalHistory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export default MedicalHistoryController