import express from "express";
import { getTestController, addTestController, updateTestController, getTestByIdController } from "../controllers/testController.js";


const router = express.Router();

router.get("/", getTestController);
router.post("/", addTestController);
router.put("/:id", updateTestController);
router.get("/:id", getTestByIdController);


export default router;