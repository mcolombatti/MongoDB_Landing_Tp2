import mongodb from 'mongodb'
import {conexion} from './database.js'
 
/**
 * Busca el listado de testimonios de la base de datos
 * 
 * @returns Promise
 */

export async function findAllTestimonials(){
    return conexion(async function(db){
        return await db.collection("Testimonials").find({}).toArray()
    })
}

/**
 * Crea un testimonio en la base de datos
 *
 * 
 * @returns Promise
 * @param entity (object)
 */

export async function insert(entity){
    return conexion(async function(db){
        await db.collection("Testimonials").insertOne(entity)
        return entity //retorna el id de lo que cree 
    })
}

/**
 * Busca el testimonio en la base de datos
 * con el id que le pase  por query 
 * 
 * @returns Promise
 * @param id (int)
 */

export async function findById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").findOne({_id: mongodb.ObjectId(id)}) //retorna el id de lo que cree 
    })  
}

/**
 * Hace un delete  del testimonio con el id que le pase 
 * por query para borrar el testimonio de la base de datos
 * 
 * @returns Promise
 * @param id (int)
 */

export async function deleteById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").deleteOne({_id: mongodb.ObjectId(id)}) // hace un delete del testimonio con el id que le pase por query
    }) 
}  

/**
 * Hace un update  del testimonio    con el id que le pase 
 * por query y la clave/valor web:true para que se publique 
 * en la web 
 * 
 * @returns Promise
 * @param id (int)
 */

export async function updateToWebById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").updateOne({_id: mongodb.ObjectId(id)},{$set:{"web": true}})   
    }) 
}  /**
 * Hace un update  del testimonio    con el id que le pase 
 * por query y la clave/valor web:false para que  el testimonio 
 * no se muestre en la web 
 * 
 * @returns Promise
 * @param id (int)
 */

export async function updateNotShowToWebById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").updateOne({_id: mongodb.ObjectId(id)},{$set:{"web": false}})   
    }) 
}  

/**
 * Hace un replace del testimonio con el id que le pase por query 
 * por el objeto entity que le paso por parametro
 * @returns Promise
 * @param id (int)
 * @param entity (object)
 */

export async function replaceById(id, entity){
    return conexion(async function(db){ 
        return await db.collection("Testimonials").replaceOne({_id: mongodb.ObjectId(id)}, entity )  
    }) 
}  

export default {
    findAllTestimonials,
    insert,
    findById,replaceById,
    updateToWebById,updateNotShowToWebById,
    deleteById
}