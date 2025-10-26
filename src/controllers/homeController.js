import { Router } from "express";
import { mythService } from "../services/index.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
    const mythsData = await mythService.getLastThreeMyths();
    res.render("home", { myths: mythsData });
});

export default homeController;