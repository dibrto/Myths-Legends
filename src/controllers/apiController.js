import { Router } from "express";
import { apiService } from "../services/index.js";

const apiController = Router();

apiController.get("/report/myths/latest", async (req, res) => {
    const mythData = await apiService.getLastThreeMyths();
    res.json(mythData);
});

export default apiController;