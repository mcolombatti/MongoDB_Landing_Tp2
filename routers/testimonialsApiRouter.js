import express from "express";
 
import dao from '../model/testimonials.dao.js'
const router = express.Router();
/**
 * Middleware que actua como una capa de seguridad
 * cuando se le pide al controlador que ejecute una accion
 * que requiere permisos (metodo delete, patch)
 * 
 * @param req 
 * @param res 
 * @param next 
 */
function mw_permission(req, res, next) {
  if (req.query.pass === "123") {
    next();
  } else {
    res
      .status(401)
      .json({ err: 401, msg: "No posee los permisos suficientes" });
  }
} 
router.route("/").get(function (req, res) {
  dao.findAllTestimonials()
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(400).json({ err: 500, msg: err.message });
    });
});

router.route("/:id")
.get(  function (req, res) {
  dao.findById(req.params.id)
  .then(function (testimonial) {
      if(testimonial == null){
        res.json(`no se encuentra el testimonio con id ${req.params.id}`);
      }
      else {
        res.status(200).json(testimonial);
  }
  }) 
    .catch(function (err) {
      res.status(404).json({
        err: 404,
        msg: `no se encuentra el testimonio id: ${req.params.id}`,
      });
    });
})
  .delete([mw_permission], function (req, res) {
    dao.deleteById(req.params.id)
    .then(function (testimonial) {
      res.status(200).json(`eliminado el  testimonio id: ${req.params.id}`);
    }) 
      .catch(function (err) {
        res.status(404).json({
          err: 404,
          msg: `no se encuentra el testimonio id: ${req.params.id}`,
        });
      });
  })  
  router.route("/update/:id/").patch(function (req, res) {
    dao.updateToWebById(req.params.id)
    .then(function (testimonial) {
      res.status(200).json(`se modifico el  testimonio con id ${req.params.id}`);
    }) 
      .catch(function (err) {
        res.status(404).json({
          err: 404,
          msg: `no se encuentra el testimonio`,
        });
      });
     
  }) 
  

export default router;
