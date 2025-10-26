import { Router } from "express";
import { mythService } from "../services/index.js";
import { getErrMsg } from "../utils/errorUtil.js";

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
    try { 
        const response = await fetch("http://localhost:3000/api/report/myths/latest");
        const data = await response.json();
        console.log(data);        
        res.render("report", { myth: data});
    }
    catch (err) {
        const errMsg = getErrMsg(err);
        res.render("report", {errMsg, myth: null});
    }
});

export default homeController;