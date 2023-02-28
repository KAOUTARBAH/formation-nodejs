//Dans le fichier index.ts, créé une application fastify qui 
//écoute sur votre machine, sur le port 4646

import fastify from "fastify";

const app = fastify()
app.listen({port:process.env.PORT as any, host:process.env.HOST},()=>{
    console.log("le serveur http est pret sur l'adresse http:127.0.0.1:4646")
})


/*Ajouter 2 routes :
*GET /: Qui retourne la chaine de caractère Bienvenue sur mon serveur
*GET /hello: Qui retourne la chaine de caractère Bonjour tout le monde
*/

app.get('/', () => {
    return 'Bienvenue sur mon serveur'
  })

app.get('/hello', () => {
    return 'Bonjour tout le monde'
  })


//Utiliser des variables d'environement pour le port et le host de votre serveur ...
app.get('/variable', () => {
    console.log(process.env.HOST)
    process.env.HOST
    process.env.PORT
    return (process.env.HOST)
    
       
     
    
  })


/*
console.log('Afficher les variables')
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`TZ: ${process.env.TZ}`)
console.log(`HOST: ${process.env.HOST}`)
console.log(`Port: ${ process.env.PORT}`)
*/


