import mongodb from 'mongodb'

const client = new mongodb.MongoClient('mongodb://localhost:27017')

/**
 * Conexion con la base de datos de Mongodb
 * 
 * @returns Promise
 * @param callback
 */

export async function conexion(callback){
    await client.connect()

    const result = await callback(client.db("TestimonialsLanding"))

    await client.close()

    return result
}

