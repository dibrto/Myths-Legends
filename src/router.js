import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import mythController from "./controllers/mythController.js";
import apiController from "./controllers/apiController.js";

const router = Router();

router.use(homeController);
router.use(authController);
router.use("/myths", mythController);

// API Endpoint
router.use("/api", apiController);

router.get("*splat", (req, res) => {
    res.render("404");
});

export default router;