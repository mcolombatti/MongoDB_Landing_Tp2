import express from "express";

import controller from "../controllers/controller.js";

const router = express.Router();

router.get("/", controller.view); 
router
.get("/testimonios",controller.viewAll) 
.get("/testimonio", controller.formNewTestimonial) 
.post("/testimonio",controller.createTestimonial)

export default router;
