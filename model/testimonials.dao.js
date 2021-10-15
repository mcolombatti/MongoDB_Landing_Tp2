import mongodb from 'mongodb'
import {conexion} from './database.js'
 
export async function findAllTestimonials(){
    return conexion(async function(db){
        return await db.collection("Testimonials").find({}).toArray()
    })
}
export async function insert(entity){
    return conexion(async function(db){
        await db.collection("Testimonials").insertOne(entity)
        return entity //retorna el id de lo que cree 
    })
}
export async function findById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").findOne({_id: mongodb.ObjectId(id)}) //retorna el id de lo que cree 
    })  
}
export async function deleteById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").deleteOne({_id: mongodb.ObjectId(id)}) // hace un delete del testimonio con el id que le pase 
    }) }  
export async function updateToWebById(id){
    return conexion(async function(db){
        return await db.collection("Testimonials").updateOne({_id: mongodb.ObjectId(id)},{$set:{"web": true}}) // hace un delete del testimonio con el id que le pase 
    }) }  

export default {
    findAllTestimonials,
    insert,
    findById,
    updateToWebById,
    deleteById
}