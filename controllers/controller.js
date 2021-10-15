 
 
import dao from '../model/testimonials.dao.js'

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

export function findAll(req, res){
  dao.findAllTestimonials()
  .then(function(personajes){
      res.status(200).json(personajes)
  })
  .catch(function(err){
      res.status(500).json(err)
  })
} 

export function formNewTestimonial(req, res) {
  res.render("formNewTestimonial", {});
}
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
 
function view(req, res) {
  res.render("index");
}

export default {
  view, 
  viewAll, 
  createTestimonial,
  formNewTestimonial,
};
