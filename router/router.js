import { Router } from "express";
import { methods as MesaggeController } from "../controller/MesaggeController";

const router = Router();

router.get("/getall", MesaggeController.getMessage);
router.post("/add", MesaggeController.addMessage);


export default router;