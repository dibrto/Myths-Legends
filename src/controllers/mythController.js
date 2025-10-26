import { Router } from "express";
import { mythService } from "../services/index.js";
import { getErrMsg } from "../utils/errorUtil.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const mythController = Router();

mythController.get("/create", isAuth, (req, res) => {
    res.render("myths/create");
});

mythController.post("/create", isAuth, async (req, res) => {
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

mythController.get("/details/:id", async (req, res) => {
    const myth_ID = req.params.id;
    const mythData = await mythService.getOneMyth(myth_ID);

    const isCreator = mythData.owner.equals(req.user?.id);
    const isLiked = mythData.likedList.some(x => x.equals(req.user?.id));

    res.render("myths/details", { myth: mythData, isCreator, isLiked });
});

mythController.get("/like/:id", isAuth, async (req, res) => {
    const myth_ID = req.params.id;
    const user_ID = req.user.id;

    await mythService.likeMyth(myth_ID, user_ID);
    res.redirect(`/myths/details/${myth_ID}`);
});

mythController.get("/delete/:id", isAuth, async (req, res) => {
    const myth_ID = req.params.id;

    await mythService.deleteMyth(myth_ID);
    res.redirect("/dashboard");
});

mythController.get("/edit/:id", isAuth, async (req, res) => {
    const myth_ID = req.params.id;

    res.render("myths/edit");
});



export default mythController;