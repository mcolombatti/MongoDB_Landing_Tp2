import express from "express";
import controller from "../controllers/controller.js";
const router = express.Router();

router.get("/", controller.view); 
router
.get("/testimonios",controller.viewAll) // vista del listado de testimonios en la web
.get("/testimonio", controller.formNewTestimonial) // vista del formulario para crear testimonios  en la web
.post("/testimonio",controller.createTestimonial)// creacion de testimonios

export default router;
