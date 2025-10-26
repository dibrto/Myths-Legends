import { Router } from "express";
import { mythService } from "../services/index.js";
import { getErrMsg } from "../utils/errorUtil.js";

const mythController = Router();

mythController.get("/create", (req, res) => {
    res.render("myths/create");
});

mythController.post("/create", async (req, res) => {
    const mythData = req.body;
    const user_ID = req.user.id;

    try {
        await mythService.createMyth(mythData, user_ID);
        res.redirect("/dashboard");
    }
    catch(err){        
        const errMsg = getErrMsg(err);
        res.render("myths/create", {errMsg, myth: mythData});
    }
});

export default mythController;