// src/routes/calc.ts
/**
 * Création du plugin
 */

import { FastifyInstance } from "fastify";


export default async function clactestRoute(app: FastifyInstance){
/**
 * Route récupérer calculate
 */
app.get('/calctest', async() => {
    //je peux recupérer la collection
    app.decorate // calculate_collection
})

}