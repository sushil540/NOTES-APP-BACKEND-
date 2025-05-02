import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import authCtlrs from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", authCtlrs.signUp);

router.post("/login", authCtlrs.login);

router.get("/user", authMiddleware, authCtlrs.user);

export default router;
