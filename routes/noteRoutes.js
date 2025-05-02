import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import noteCtlrs from "../controllers/noteControllers.js";

const router = express.Router();

// Protected routes
router.use(authMiddleware);

router.post("/create", noteCtlrs.create);

router.get("/get-all-notes", noteCtlrs.getAll);

router.put("/update", noteCtlrs.update);

router.delete("/delete", noteCtlrs.delete);

export default router;
