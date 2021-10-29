 
 
import dao from '../model/testimonials.dao.js'

/**
 * Renderiza en el html los testimonios
 * obtenidos de la base de datos con la funcion
 * findAllTestimonials
 *  
 * @param req
 * @param res
 */

export function viewAll(req, res) {
  dao.findAllTestimonials().then(function (testimonials) {
    res
      .render("list-testimonials", {
        all: testimonials,
      })
      .catch(function (err) {
        res.status(500).json({ err: 500, msg: err.message });
      });
  });
} 
/**
 * Busca el listado de testimonios de la base de datos 
 *  
 * @param req
 * @param res
 */
export function findAll(req, res){
  dao.findAllTestimonials()
  .then(function(testimonials){
      res.status(200).json(testimonials)
  })
  .catch(function(err){
      res.status(500).json(err)
  })
} 

/**
 * Renderiza el formulario para dejar los testimonios en la web
 *  
 * @param req
 * @param res
 */

export function formNewTestimonial(req, res) {
  res.render("formNewTestimonial", {});
}

/**
 * Crea el testimonio y lo renderiza en la vista
 *  
 * @param req
 * @param res
 */

export function createTestimonial(req, res) {
  dao
    .insert(req.body)
    .then(function (entity) {
      res.render("testimonial", entity);
    })
    .catch(function (err) {
      res.status(500).send(err.message);
    });
}
 
/**
 *  renderiza el documento index en la vista
 *  
 * @param req
 * @param res
 */
function view(req, res) {
  res.render("index");
}

export default {
  view, 
  viewAll, 
  createTestimonial,
  formNewTestimonial,
};
