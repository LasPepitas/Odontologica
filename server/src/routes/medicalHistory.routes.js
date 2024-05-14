import { Router } from "express";
import MedicalHistoryController from "../controllers/medicalHistory.controller.js";

const router = Router();

router.post("/", MedicalHistoryController.create);
router.get("/user/:id", MedicalHistoryController.findAllByUser);

export default router;