//Dans le fichier index.ts, créé une application fastify qui
//écoute sur votre machine, sur le port 4646

import fastify from "fastify";
import fp  from "fastify-plugin";
import CalculateRoute from "./routes/calculate";

const app = fastify();
app.listen({ port: process.env.PORT as any, host: process.env.HOST }, () => {
  console.log(
    `le serveur http est pret sur l'adresse http:${process.env.HOST}:${process.env.PORT}`
  );
});

/*Ajouter 2 routes :
 *GET /: Qui retourne la chaine de caractère Bienvenue sur mon serveur
 *GET /hello: Qui retourne la chaine de caractère Bonjour tout le monde
 */

app.get("/", () => {
  return "Bienvenue sur mon serveur";
});

app.get("/hello", () => {
  return "Bonjour tout le monde";
});

//Utiliser des variables d'environement pour le port et le host de votre serveur ...
app.get("/variable", () => {
  console.log(process.env.HOST);
  const HOST = process.env.HOST;
  const PORT = process.env.PORT;
  return [HOST, PORT];
});

//personaliser le satus
app.get("/test", (request, response) => {
  // Pour personnaliser le status, nous utilisons la réponse :
  response.code(400);
  return "Une errur est survenue";
});
/*
console.log('Afficher les variables')
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`TZ: ${process.env.TZ}`)
console.log(`HOST: ${process.env.HOST}`)
console.log(`Port: ${ process.env.PORT}`)
*/


app.get("/eleves", (request, response) => {
// Ajouter un entête http
response.header('Developed-With', 'fastify')
  type eleve = {
    id: number;
    nom: string;
    prenom: string;
    age: number;
  };
  const john: eleve = {
    id: 1,
    nom: "john",
    prenom: "john",
    age: 32,
  };
  
  const rose: eleve = {
    id: 2,
    nom: "rose",
    prenom: "john",
    age: 32,
  };
  
  const jane: eleve = {
    id: 3,
    nom: "jane",
    prenom: "john",
    age: 32,
  };
  
  const jean: eleve = {
    id: 4,
    nom: "jean",
    prenom: "john",
    age: 38,
  };
  
  
  const tableEleve:eleve[]=[john,rose,jane,jean]
  //return [tableEleve[0].id, tableEleve[0].nom, tableEleve[0].prenom, tableEleve[0].age];
  return tableEleve
})


 // Route retournant des éléves (exercice)
 app.get('/eleves23', (request, response) => {
  response.header('Developed-With', 'Fastify')

  return [
    { id: 1, nom: 'John', prenom: 'john', age: 32 },
    { id: 2, nom: 'rose', prenom: 'john', age: 36 },
    { id: 3, nom: 'jane', prenom: 'john', age: 40 },
    { id: 4, nom: 'jean', prenom: 'john', age: 38 },
  ]
})






//creation app fastify
//const app= fastify()
// nous pouvons connecter notre pligin
app.register(fp(CalculateRoute))