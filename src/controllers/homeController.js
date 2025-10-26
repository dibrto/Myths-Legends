import { Router } from "express";

const homeController = Router();

// TODO: fix home
homeController.get("/", async (req, res) => {
    res.render("home");
});

export default homeController;