import { Router } from "express";
import { mythService } from "../services/index.js";

const mythController = Router();

mythController.get("/create", (req, res) => {
    res.render("myths/create");
});

mythController.post("/create", async (req, res) => {
    const mythData = req.body;

    try {
        await mythService.createMyth(mythData);
        res.redirect("/dashboard");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("myth/create", {errMsg, myth: mythData});
    }
});

export default mythController;