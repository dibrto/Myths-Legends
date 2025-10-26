import { Router } from "express";

const mythController = Router();

mythController.get("/create", async (req, res) => {
    res.render("myths/create");
});

export default mythController;