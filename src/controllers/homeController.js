import { Router } from "express";
import { mythService } from "../services/index.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
    const mythsData = await mythService.getLastThreeMyths();
    res.render("home", { myths: mythsData });
});

homeController.get("/dashboard", async (req, res) => {
    const mythsData = await mythService.getAllMyths();
    res.render("dashboard", { myths: mythsData });
});

homeController.get("/report", async (req, res) => {
    res.render("report");
});

export default homeController;