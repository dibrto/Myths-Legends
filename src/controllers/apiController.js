import { Router } from "express";

const apiController = Router();

apiController.get("/report/myths/latest", (req, res) => {
    res.json({ test: 1 });
});

export default apiController;