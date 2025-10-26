import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import mythController from "./controllers/mythController.js";

const router = Router();

router.use(homeController);
router.use(authController);
router.use("/myths", mythController);

// TODO: fix 404
router.get("*splat", (req, res) => {
    res.render("404");
});

export default router;